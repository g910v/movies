import{r as c,p as t,s as n,g as s,o as a,u,j as o,q as g,t as m}from"./index-a1cf3b23.js";const x=()=>{const[e,i]=c.useState(window.innerWidth);return c.useEffect(()=>{const r=l=>{const d=l.target;i(d.innerWidth)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),{width:e,isScreenS:e<=t.s,isScreenM:e<=t.m&&e>t.s,isScreenL:e<=t.l&&e>t.m,isScreenXl:e>t.l}},p=n.div`
  display: flex;
  background: ${s.colors.bgLighter};
  border-radius: 5px;
  transition: all .2s linear;
  border: 1px solid ${s.colors.bg};
  &:hover {
    border: 1px solid ${s.colors.simpleButton};
  }
`,S=n.div`
  background: ${s.colors.simpleButton};
  width: 1px;
  margin: 0.35rem 0;
`,w=n(g)`
  font-size: 1.7rem;
  color: ${e=>e.selected?s.colors.mix:s.colors.text};
  cursor: pointer;
  transition: all .2s linear;
  padding: 0.5rem;
`,h=n(m)`
  font-size: 1.7rem;
  color: ${e=>e.selected?s.colors.mix:s.colors.text};
  cursor: pointer;
  transition: all .2s linear;
  padding: 0.5rem;
`,f=()=>{const{uiStore:e}=u(),{isScreenS:i,isScreenM:r}=x();return c.useEffect(()=>{(r||i)&&e.changeViewMode("grid")},[r,i,e]),i||r?null:o.jsxs(p,{children:[o.jsx(w,{selected:e.viewMode==="grid",onClick:()=>e.changeViewMode("grid")}),o.jsx(S,{}),o.jsx(h,{selected:e.viewMode==="list",onClick:()=>e.changeViewMode("list")})]})},b=a(f);export{b as S};
