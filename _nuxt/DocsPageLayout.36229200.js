import K from"./DocsAside.52900f1f.js";import O from"./ProseCodeInline.5295ed55.js";import R from"./Alert.d1fec206.js";import U from"./DocsPageBottom.84eb59c9.js";import W from"./DocsPrevNext.7a065cfc.js";import{d as Y,W as G,af as Q,i as X,J as m,r as V,q as Z,o as ee,ai as oe,b as u,Y as j,w as h,K as t,c as g,g as r,f as y,e as p,a2 as te,E as x,t as ne,F as se,n as k,aa as ae,aj as ce,p as le,j as re,l as _e}from"./entry.a2db459e.js";import ie from"./DocsToc.bf820054.js";import"./slot.d1be4c8f.js";import"./node.40071b01.js";import"./ProseA.1c073a28.js";import"./EditOnLink.vue.26662b23.js";import"./DocsTocLinks.5a83c5f2.js";const ue=d=>(le("data-v-f545556f"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=Y({__name:"DocsPageLayout",setup(d){const{page:s}=G(),{config:f,tree:T}=Q(),A=X(),E=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},P=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),b=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(n=T.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),F=m(()=>E("bottom",!0)),_=V(!1),a=V(null),v=()=>A.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,w,B,N,I,$;const n=K,c=O,l=R,H=U,L=W,M=ae,q=ie,z=ce;return u(),j(z,{fluid:(w=(D=t(f))==null?void 0:D.main)==null?void 0:w.fluid,padded:(N=(B=t(f))==null?void 0:B.main)==null?void 0:N.padded,class:k(["docs-page-content",{fluid:($=(I=t(f))==null?void 0:I.main)==null?void 0:$.fluid,"has-toc":t(S),"has-aside":t(b)}])},{default:h(()=>[t(b)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(P)?te(e.$slots,"default",{key:0},void 0,!0):(u(),j(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ne(t(s)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(P)&&t(s)&&t(F)?(u(),g(se,{key:2},[r(H),r(L)],64)):y("",!0)]),t(S)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=J=>_.value=!t(_))},[fe,r(M,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(q,{onMove:o[1]||(o[1]=J=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Be=_e(ve,[["__scopeId","data-v-f545556f"]]);export{Be as default};
