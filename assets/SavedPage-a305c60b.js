import{o as m,s as i,n as r,g as o,u as l,r as d,h as n,j as e,P as p,T as c,F as g,l as u}from"./index-7aee5212.js";import{S as x}from"./SelectViewButtons-4b6f35b1.js";const f=i.div`
  margin-left: auto;
  padding-top: 1rem;
`,v=r`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  @media ${o.media.s} {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
`,h=r`
  display: flex;
  flex-wrap: wrap;
`,j=i.div`
  ${s=>s.gridmode?v:h};
  row-gap: 1rem;
  margin-top: 0.5rem;
`,S=i.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 1rem;
`,w=()=>{const{uiStore:s,filmsStore:a}=l();return d.useEffect(()=>{s.updateDocumentTitle(n.SAVED.name)},[s]),e.jsxs(p,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(c,{children:"Сохраненное"}),e.jsx(f,{children:e.jsx(x,{})})]}),e.jsx(j,{gridmode:s.viewMode==="grid"&&!!a.savedFilms.length,children:a.savedFilms.length?a.savedFilms.map(t=>s.viewMode==="list"?e.jsx(g,{film:t},t.kId):e.jsx(u,{film:t},t.kId)):e.jsx(S,{children:"Здесь будут отображаться сохранные фильмы и сериалы"})})]})},E=m(w);export{E as default};
