import{s as n,u as c,a as l,b as u,r as a,j as e,P as m,T as x,S as h,O as p}from"./index-414ec1c4.js";import{S as d}from"./SelectViewButtons-14f52791.js";import{B as y}from"./BackButton-e3186594.js";const f=n.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0.7rem 0;
  height: 3rem;
`,j=n.div`
  margin-left: auto;
  display: flex;
  column-gap: 0.5rem;
  margin-top: -0.25rem;
`,S=({pageName:s})=>{const{uiStore:r}=c(),t=l(),o=u(),i=a.useRef([{label:"Топ",short:"top",key:1},{label:"Жанры",short:"genres",key:2},{label:"Годы",short:"years",key:3},{label:"Страны",short:"countries",key:4}]);return a.useEffect(()=>{r.updateDocumentTitle(s)},[r,s,o]),e.jsxs(m,{children:[e.jsx(x,{children:s}),e.jsxs(f,{children:[e.jsx(h,{items:i.current}),e.jsxs(j,{children:[(!!t.genre||!!t.country||!!t.year)&&e.jsx(y,{}),(!!t.genre||!!t.country||!!t.year||o.pathname.search("top")!==-1)&&e.jsx(d,{})]})]}),e.jsx(p,{})]})};export{S as default};
