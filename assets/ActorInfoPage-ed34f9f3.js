import{o as k,s as n,g as i,y as b,u as z,a as S,r as l,N as B,j as t,k as A,J as $,C as N,L as T,U as D,V as E}from"./index-7aee5212.js";import{r as y}from"./index-979b4d34.js";const F=n.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,L=n.div`
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
`,R=n.div`
  width: ${e=>e.poster?"40vh":"0px"};
  margin-right: 1rem;
  height: max-content;
  @media ${i.media.l} {
    width: ${e=>e.poster?"35vh":"0px"};
  }
  @media ${i.media.m} {
    width: ${e=>e.poster?"50%":"0px"};
    margin-right: 0;
  }
  @media ${i.media.s} {
    width: ${e=>e.poster?"70%":"0px"};
    margin-right: 0;
  }
`,Y=n.img`
  width: 100%;
  margin-bottom: 1rem;
`,G=n.div`
  width: ${e=>e.poster?"calc(100% - 40vh - 1rem)":"100%"};
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  height: max-content;
  @media ${i.media.l} {
    width: ${e=>e.poster?"calc(100% - 35vh - 1rem)":"100%"};
  }
  @media ${i.media.m} {
    width: 100%;
    align-items: center;
  }
`,J=n.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  @media ${i.media.m} {
    align-items: center;
  }
`,U=n.div`
  width: 100%;
  margin-top: 2.5rem;
`,M=n.div`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.2rem;
  @media ${i.media.l} {
    font-size: 2rem;
    line-height: 2.2rem;
  }
`,r=n.div`
  font-weight: 400;
  display: flex;
  align-items: center;
  @media ${i.media.m} {
    text-align: center;
  }
`,V=n.div`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`,W=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`,q=n(T)`
  width: calc(100% - 2rem);
  color: ${i.colors.text};
  cursor: pointer;
`,H=n.div`
  display: flex;
  row-gap: 0.25rem;
  flex-direction: column;
`,C=n.div`
  font-size: 1.25rem;
  font-weight: 500;
`,K=n.div`
  display: flex;
  margin-left: auto;
  padding: 0 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${i.colors.yellow};
  @media ${i.media.m} {
    padding: 0 0.25rem;
  }
`,O=n.div`
  color: ${i.colors.textSecondary};
`,Q=n.div`
  width: fit-content;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${i.colors.pink};
    ${b}
  }
`,X=n(D)`
  font-size: 1.5rem;
`,Z=n.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  width: fit-content;
  cursor: pointer;
  &:hover{
    color: ${i.colors.yellow};
    ${b}
  }
`,_=n.div`
  max-width: 1700px;
  padding: 0 1rem;
  width: calc(100% - 2rem);
`,ee=n(E)`
  font-size: 1.25rem;
  margin-top: 0.15rem;
`,te=()=>{var x,g,p,v,j,I,u,w;const{actorInfoStore:e,uiStore:h}=z(),m=S(),[s,f]=l.useState([]),P=B();return l.useEffect(()=>{m.personId&&e.getActor(m.personId)},[e,m]),l.useEffect(()=>{h.updateDocumentTitle("Актеры")},[h]),l.useEffect(()=>{var o;(o=e.actorInfo)!=null&&o.movies&&f(e.actorInfo.movies.slice(0,5))},[e.actorInfo]),t.jsxs(t.Fragment,{children:[t.jsx(_,{onClick:()=>P(-1),children:t.jsxs(Z,{children:[t.jsx(ee,{}),"назад"]})}),e.actorInfoLoading&&t.jsx(F,{children:t.jsx(A,{size:50,strokeWidth:2})}),!e.actorInfoLoading&&e.actorInfo&&t.jsxs(L,{children:[t.jsx(R,{poster:!!e.actorInfo.photo,children:t.jsx(Y,{src:e.actorInfo.photo??"",alt:""})}),t.jsxs(G,{poster:!!e.actorInfo.photo,children:[t.jsxs(J,{children:[t.jsx(M,{children:e.actorInfo.name}),e.actorInfo.enName&&t.jsxs(M,{children:["(",e.actorInfo.enName,")"]})]}),e.actorInfo.sex&&t.jsxs(r,{children:["Пол: ",e.actorInfo.sex]}),e.actorInfo.age&&t.jsxs(r,{children:["Возраст: ",e.actorInfo.age]}),e.actorInfo.birthday&&t.jsxs(r,{children:["Дата рождения: ",$(new Date(e.actorInfo.birthday),"dd MMMM Y",{locale:y})]}),((x=e.actorInfo.birthPlace)==null?void 0:x.length)&&t.jsxs(r,{children:["Место рождения: ",(g=e.actorInfo.birthPlace)==null?void 0:g.map((o,a,c)=>{const d=a===c.length-1?"":", ";return o.value+d})]}),e.actorInfo.growth&&t.jsxs(r,{children:["Рост: ",e.actorInfo.growth]}),e.actorInfo.countAwards&&t.jsxs(r,{children:["Количество наград: ",e.actorInfo.countAwards]}),t.jsxs(r,{children:["Карьера: ",(p=e.actorInfo.profession)==null?void 0:p.map((o,a,c)=>{const d=a===c.length-1?"":", ";return o.value+d})]}),t.jsxs(r,{children:["Количество фильмов: ",((v=e.actorInfo.movies)==null?void 0:v.length)??0]}),((j=e.actorInfo)==null?void 0:j.death)&&t.jsxs(r,{children:["Дата смерти: ",$(new Date(e.actorInfo.death),"dd MMMM Y",{locale:y})]}),!!((I=e.actorInfo.deathPlace)!=null&&I.length)&&t.jsxs(r,{children:["Место смерти: ",(u=e.actorInfo.deathPlace)==null?void 0:u.map((o,a,c)=>{const d=a===c.length-1?"":", ";return o.value+d})]})]}),t.jsxs(U,{children:[t.jsxs(V,{children:["Фильмы c ",e.actorInfo.sex==="Мужской"?"его":"её"," участием"]}),t.jsxs(W,{children:[s==null?void 0:s.map(o=>{var a;return t.jsx(q,{to:`/movie/${o.id}`,children:t.jsxs(N,{children:[t.jsxs(H,{children:[t.jsx(C,{children:o.name}),o.name?t.jsx("div",{children:o.alternativeName}):t.jsx(C,{children:o.alternativeName}),t.jsx(O,{children:o.description&&t.jsxs(t.Fragment,{children:["Роль: ",o.description==="Self"?"играет самого себя":o.description]})})]}),t.jsx(K,{children:t.jsx("div",{children:(a=o.rating)==null?void 0:a.toFixed(1)})})]})})}),t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:((w=e.actorInfo.movies)==null?void 0:w.length)&&e.actorInfo.movies.length>5&&(s==null?void 0:s.length)===5&&t.jsxs(Q,{onClick:()=>{var o;return f((o=e.actorInfo)==null?void 0:o.movies)},children:["Показать полный список фильмов ",t.jsx(X,{})]})})]})]})]})]})},ie=k(te);export{ie as default};
