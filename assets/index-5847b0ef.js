import{o as p,s as o,g as i,t as x,u as g,a as v,r as s,N as j,j as e,z as u,Q as w,U as I,V as $,W as y,X as C}from"./index-564fe57b.js";const M=o.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,S=o.div`
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
`,k=o.div`
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
`,z=o.img`
  width: 100%;
  margin-bottom: 1rem;
`,B=o.div`
  width: 100%;
  margin-top: 2.5rem;
`,b=o.div`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`,E=o.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`,P=o($)`
  width: calc(100% - 2rem);
  color: ${i.colors.text};
  cursor: pointer;
`,F=o.div`
  display: flex;
  row-gap: 0.25rem;
  flex-direction: column;
`,h=o.div`
  font-size: 1.25rem;
  font-weight: 500;
`,N=o.div`
  display: flex;
  margin-left: auto;
  padding: 0 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${i.colors.yellow};
  @media ${i.media.m} {
    padding: 0 0.25rem;
  }
`,T=o.div`
  color: ${i.colors.textSecondary};
`,A=o.div`
  width: fit-content;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${i.colors.pink};
    ${x}
  }
`,R=o(y)`
  font-size: 1.5rem;
`,D=o.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  width: fit-content;
  cursor: pointer;
  &:hover{
    color: ${i.colors.yellow};
    ${x}
  }
`,L=o.div`
  max-width: 1700px;
  padding: 0 1rem;
  width: calc(100% - 2rem);
`,W=o(C)`
  font-size: 1.25rem;
  margin-top: 0.15rem;
`,G=()=>{var l;const{actorInfoStore:t,uiStore:c}=g(),a=v(),[r,d]=s.useState([]),f=j();return s.useEffect(()=>{a.personId&&t.getActor(a.personId)},[t,a]),s.useEffect(()=>{c.updateDocumentTitle("Актеры")},[c]),s.useEffect(()=>{var n;(n=t.actorInfo)!=null&&n.movies&&d(t.actorInfo.movies.slice(0,5))},[t.actorInfo]),e.jsxs(e.Fragment,{children:[e.jsx(L,{onClick:()=>f(-1),children:e.jsxs(D,{children:[e.jsx(W,{}),"назад"]})}),t.actorInfoLoading&&e.jsx(M,{children:e.jsx(u,{size:50,strokeWidth:2})}),!t.actorInfoLoading&&t.actorInfo&&e.jsxs(S,{children:[e.jsx(k,{poster:!!t.actorInfo.photo,children:e.jsx(z,{src:t.actorInfo.photo??"",alt:""})}),e.jsx(w,{actor:t.actorInfo}),e.jsxs(B,{children:[e.jsxs(b,{children:["Фильмы c ",t.actorInfo.sex==="Мужской"?"его":"её"," участием"]}),e.jsxs(E,{children:[r==null?void 0:r.map(n=>{var m;return e.jsx(P,{to:`/movie/${n.id}`,children:e.jsxs(I,{children:[e.jsxs(F,{children:[e.jsx(h,{children:n.name}),n.name?e.jsx("div",{children:n.alternativeName}):e.jsx(h,{children:n.alternativeName}),e.jsx(T,{children:n.description&&e.jsxs(e.Fragment,{children:["Роль: ",n.description==="Self"?"играет самого себя":n.description]})})]}),e.jsx(N,{children:e.jsx("div",{children:(m=n.rating)==null?void 0:m.toFixed(1)})})]})},n.id)}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:((l=t.actorInfo.movies)==null?void 0:l.length)&&t.actorInfo.movies.length>5&&(r==null?void 0:r.length)===5&&e.jsxs(A,{onClick:()=>{var n;return d((n=t.actorInfo)==null?void 0:n.movies)},children:["Показать полный список фильмов ",e.jsx(R,{})]})})]})]})]})]})},U=p(G);export{U as default};
