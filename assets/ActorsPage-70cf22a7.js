import{s as r,g as h,r as o,j as e,L as f,C as j,o as S,u as d,i as m,k as v,h as w,P as C,T as L,I as P,B as k}from"./index-414ec1c4.js";const E=r(f)`
  width: 100%;
  color: ${h.colors.text};
`,y=r(j)`
  width: auto;
`,A=r.img`
  width: 7rem;
  border-radius: 5px;
`,R=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  height: 11rem;
  margin-left: 1rem;
`,I=r.div`
  font-size: 1.8rem;
  line-height: 1.8rem;
  font-weight: 600;
`,T=o.memo(({actor:s})=>e.jsx(E,{to:`/person/${s.kinopoiskId}`,children:e.jsxs(y,{children:[e.jsx(A,{src:s.posterUrl,alt:s.nameEn??""}),e.jsxs(R,{children:[e.jsx(I,{children:s.nameRu}),e.jsx("div",{children:s.nameEn}),e.jsxs("div",{children:["Пол: ",s.sex]})]})]})})),$=r.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 1.4rem;
`,b=r.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`,q=r.div`
  width: 100%;
  font-size: 1.5rem;
  margin-top: 3rem;
`,z=()=>{const{actorStote:s}=d(),[a]=m();return o.useEffect(()=>{const n=a.get("search");n&&s.searchActors(n)},[s,a]),e.jsxs($,{children:[s.actorsLoading&&e.jsx(b,{children:e.jsx(v,{size:50,strokeWidth:2})}),!s.actorsLoading&&!!s.actorList.length&&s.actorList.map(n=>e.jsx(T,{actor:n},n.kinopoiskId)),!s.actorsLoading&&!s.actorList.length&&a.get("search")&&e.jsx(q,{children:"По вашему запросу ничего не найдено :("})]})},B=S(z),F=r.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;
  margin-top: 1rem;
`,V=r.small`
  color: ${h.colors.mix};
`,N=()=>{const{uiStore:s,actorStote:a}=d(),[n,u]=m(),[i,c]=o.useState(""),[x,l]=o.useState(!1);o.useEffect(()=>{s.updateDocumentTitle(w.ACTORS.name)},[s]),o.useEffect(()=>{const t=n.get("search");return t&&c(t),()=>{a.resetActorList()}},[]);const g=t=>{c(t),t.length>=2&&l(!1)},p=()=>{if(i.length<2){l(!0);return}u(t=>(t.set("search",i),t))};return e.jsxs(C,{children:[e.jsx(L,{children:"Актеры"}),e.jsxs(F,{children:[e.jsx(P,{placeholder:"Поиск актеров",value:i,onChange:t=>g(t.target.value)}),e.jsx(k,{label:"Найти",onClick:p})]}),x&&e.jsx(V,{children:"Имя актера должно содержать хотя бы 2 буквы"}),e.jsx(B,{})]})};export{N as default};
