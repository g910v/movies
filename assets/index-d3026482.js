import{o as i,s as u,u as c,r as a,y as l,m as d,d as m,j as e,P as x,T as p,c as j,e as E,M as S}from"./index-4e9c1326.js";const P=u.div`
  margin-left: auto;
  padding-top: 1rem;
`,f=()=>{const{uiStore:r}=c(),[s,o]=a.useState(l[0]),[t,n]=a.useState(d[0]);return a.useEffect(()=>{r.updateDocumentTitle(m.PREMIERES.name)},[r]),e.jsxs(x,{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx(p,{children:"Премьеры"}),e.jsx(P,{children:e.jsx(j,{})})]}),e.jsx(E,{year:s,month:t,setMonth:n,setYear:o}),e.jsx(S,{type:"PREMIERES",premiereFilters:{year:Number(s==null?void 0:s.value),month:t==null?void 0:t.value}})]})},v=i(f);export{v as default};
