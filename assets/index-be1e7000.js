import{o,s as a,n as r,g as d,u as n,r as m,d as l,j as e,P as c,T as p,c as g,h as x,i as u}from"./index-564fe57b.js";const v=a.div`
  margin-left: auto;
  padding-top: 1rem;
`,h=r`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  @media ${d.media.s} {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
`,j=r`
  display: flex;
  flex-wrap: wrap;
`,f=a.div`
  ${s=>s.gridmode?h:j};
  row-gap: 1rem;
  margin-top: 0.5rem;
`,w=a.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 1rem;
`,S=()=>{const{uiStore:s,moviesStore:i}=n();return m.useEffect(()=>{s.updateDocumentTitle(l.SAVED.name)},[s]),e.jsxs(c,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(p,{children:"Сохраненное"}),e.jsx(v,{children:e.jsx(g,{})})]}),e.jsx(f,{gridmode:s.viewMode==="grid"&&!!i.savedFilms.length,children:i.savedFilms.length?i.savedFilms.map(t=>s.viewMode==="list"?e.jsx(x,{movie:t},t.kId):e.jsx(u,{movie:t},t.kId)):e.jsx(w,{children:"Здесь будут отображаться сохранные фильмы и сериалы"})})]})},y=o(S);export{y as default};
