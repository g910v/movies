import{s as o,u as n,a as i,b as c,r as l,j as e,P as u,T as m,S as x,B as h,c as d,O as p}from"./index-564fe57b.js";const y=[{label:"Топ",short:"top",key:1},{label:"Жанры",short:"genres",key:2},{label:"Годы",short:"years",key:3},{label:"Страны",short:"countries",key:4}],j=o.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0.7rem 0;
  height: 3rem;
`,g=o.div`
  margin-left: auto;
  display: flex;
  column-gap: 0.5rem;
  margin-top: -0.25rem;
`,B=({pageName:s})=>{const{uiStore:a}=n(),t=i(),r=c();return l.useEffect(()=>{a.updateDocumentTitle(s)},[a,s]),e.jsxs(u,{children:[e.jsx(m,{children:s}),e.jsxs(j,{children:[e.jsx(x,{items:y}),e.jsxs(g,{children:[(!!t.genre||!!t.country||!!t.year)&&e.jsx(h,{}),(!!t.genre||!!t.country||!!t.year||r.pathname.search("top")!==-1)&&e.jsx(d,{})]})]}),e.jsx(p,{})]})};export{B as default};
