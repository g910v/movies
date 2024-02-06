import{o as x,s as n,g as i,t as f,u as p,a as g,r as s,j as e,N as v,z as j,Q as u,U as w,V as I,W as $}from"./index-ebc401fc.js";const y=n.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,C=n.div`
  padding: 1.5rem 0 4rem 0;
  height: fit-content;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  max-width: 1700px;
  @media ${i.media.l} {
    width: 95%;
  }
  @media ${i.media.m} {
    justify-content: center;
  }
`,M=n.div`
  width: ${t=>t.poster?"40vh":"0px"};
  margin-right: 1rem;
  height: max-content;
  @media ${i.media.l} {
    width: ${t=>t.poster?"35vh":"0px"};
  }
  @media ${i.media.m} {
    width: ${t=>t.poster?"50%":"0px"};
    margin-right: 0;
  }
  @media ${i.media.s} {
    width: ${t=>t.poster?"70%":"0px"};
    margin-right: 0;
  }
`,S=n.img`
  width: 100%;
  margin-bottom: 1rem;
`,z=n.div`
  width: 100%;
  margin-top: 2.5rem;
`,b=n.div`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`,k=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`,E=n(I)`
  width: calc(100% - 2rem);
  color: ${i.colors.text};
  cursor: pointer;
`,P=n.div`
  display: flex;
  row-gap: 0.25rem;
  flex-direction: column;
`,h=n.div`
  font-size: 1.25rem;
  font-weight: 500;
`,T=n.div`
  display: flex;
  margin-left: auto;
  padding: 0 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${i.colors.yellow};
  @media ${i.media.m} {
    padding: 0 0.25rem;
  }
`,B=n.div`
  color: ${i.colors.textSecondary};
`,F=n.div`
  width: fit-content;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${i.colors.pink};
    ${f}
  }
`,A=n($)`
  font-size: 1.5rem;
`,N=()=>{var l;const{actorInfoStore:t,uiStore:c}=p(),a=g(),[r,d]=s.useState([]);return s.useEffect(()=>{a.personId&&t.getActor(a.personId)},[t,a]),s.useEffect(()=>{c.updateDocumentTitle("Актеры")},[c]),s.useEffect(()=>{var o;(o=t.actorInfo)!=null&&o.movies&&d(t.actorInfo.movies.slice(0,5))},[t.actorInfo]),e.jsxs(e.Fragment,{children:[e.jsx(v,{}),t.actorInfoLoading&&e.jsx(y,{children:e.jsx(j,{size:50,strokeWidth:2})}),!t.actorInfoLoading&&t.actorInfo&&e.jsxs(C,{children:[e.jsx(M,{poster:!!t.actorInfo.photo,children:e.jsx(S,{src:t.actorInfo.photo??"",alt:""})}),e.jsx(u,{actor:t.actorInfo}),e.jsxs(z,{children:[e.jsxs(b,{children:["Фильмы c ",t.actorInfo.sex==="Мужской"?"его":"её"," участием"]}),e.jsxs(k,{children:[r==null?void 0:r.map(o=>{var m;return e.jsx(E,{to:`/movie/${o.id}`,children:e.jsxs(w,{children:[e.jsxs(P,{children:[e.jsx(h,{children:o.name}),o.name?e.jsx("div",{children:o.alternativeName}):e.jsx(h,{children:o.alternativeName}),e.jsx(B,{children:o.description&&e.jsxs(e.Fragment,{children:["Роль: ",o.description==="Self"?"играет самого себя":o.description]})})]}),e.jsx(T,{children:e.jsx("div",{children:(m=o.rating)==null?void 0:m.toFixed(1)})})]})},o.id)}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:((l=t.actorInfo.movies)==null?void 0:l.length)&&t.actorInfo.movies.length>5&&(r==null?void 0:r.length)===5&&e.jsxs(F,{onClick:()=>{var o;return d((o=t.actorInfo)==null?void 0:o.movies)},children:["Показать полный список фильмов ",e.jsx(A,{})]})})]})]})]})]})},D=x(N);export{D as default};
