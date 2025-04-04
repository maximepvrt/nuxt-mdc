import { getHighlighter, type ThemeInput, type Highlighter, type BuiltinLanguage, type BuiltinTheme } from 'shikiji'
import type { HighlightResult, HighlighterOptions, Theme } from './types'
import type { Element } from '../types/hast'

export const useShikiHighlighter = createSingleton((opts?: any) => {
  // Grab highlighter config from publicRuntimeConfig
  const { theme, preload, wrapperStyle } = opts || {}

  let promise: Promise<Highlighter> | undefined
  const getShikiHighlighter = () => {
    if (!promise) {
      // Initialize highlighter with defaults
      promise = getHighlighter({
        themes: [
          ((theme as any)?.default || theme || 'dark-plus') as BuiltinTheme,
        ],
        langs: [
          ...(preload || []),
          'diff',
          'json',
          'js',
          'ts',
          'css',
          'shell',
          'html',
          'md',
          'yaml',
          'vue',
          'mdc'
        ] as any[]
      }).then((highlighter) => {
        // Load all themes on-demand
        const themes = Object.values(typeof theme === 'string' ? { default: theme } : (theme || {})) as ThemeInput[]

        if (themes.length) {
          return Promise
            .all(themes.map(theme => highlighter.loadTheme(theme)))
            .then(() => highlighter)
        }
        return highlighter
      })
    }
    return promise
  }

  const getHighlightedAST = async (code: string, lang: BuiltinLanguage, theme: Theme, opts?: Partial<HighlighterOptions>): Promise<HighlightResult> => {
    const highlighter = await getShikiHighlighter()
    const { highlights = [] } = opts || {}

    const themesObject = typeof theme === 'string' ? { default: theme } : (theme || {})
    const themeNames = Object.values(themesObject) as BuiltinTheme[]

    if (themeNames.length) {
      await Promise.all(themeNames.map(theme => highlighter.loadTheme(theme)))
    }

    if (lang && !highlighter.getLoadedLanguages().includes(lang)) {
      await highlighter.loadLanguage(lang)
    }

    const root = highlighter.codeToHast(code.trimEnd(), {
      lang,
      themes: themesObject,
      defaultColor: 'default',
      transforms: {
        line(node, line) {
          node.properties ||= {}
          if (highlights.includes(line)) {
            node.properties.class = (node.properties.class || '') + ' highlight'
          }
          node.properties.line = line
        },
      }
    })

    const preEl = root.children[0] as Element
    const codeEl = preEl.children[0] as Element

    preEl.properties.style = wrapperStyle ?
      (typeof wrapperStyle === 'string' ? wrapperStyle : preEl.properties.style) :
      ''

    const style = Object.keys(themesObject)
      .filter(color => color !== 'default')
      .map(color => [
        wrapperStyle ? `html.${color} .shiki,` : '',
        `html.${color} .shiki span {`,
        `color: var(--shiki-${color}) !important;`,
        `background: var(--shiki-${color}-bg) !important;`,
        `font-style: var(--shiki-${color}-font-style) !important;`,
        `font-weight: var(--shiki-${color}-font-weight) !important;`,
        `text-decoration: var(--shiki-${color}-text-decoration) !important;`,
        '}'
      ].join('').trim())
      .join('\n')

    return {
      tree: codeEl.children as Element[],
      className: preEl.properties.class as string,
      inlineStyle: preEl.properties.style  as string,
      style,
    }
  }

  return {
    getHighlightedAST,
  }
})

function createSingleton<T, Params extends Array<any>>(fn: (...arg: Params) => T) {
  let instance: T | undefined
  return (...args: Params) => {
    if (!instance) {
      instance = fn(...args)
    }
    return instance
  }
}
