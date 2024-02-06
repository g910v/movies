import{s as u,g as l,t as E,r as o,j as t,I as z,k as D,D as d,R as P,l as L,p as T,q as F,v as R,w as G,o as N,u as U,a as Y,x as V,z as A,B as O,C as W,E as q,F as H,G as J,H as K,J as Q,K as X,L as Z}from"./index-d6037814.js";const _=u.div`
  display: flex;
  color: ${l.colors.text};
  cursor: pointer;
  width: fit-content;
  &:hover {
    color: ${l.colors.pink};
    ${E}
  }
`,ee=u.div`
  transform: translateY(${e=>e.state==="exiting"||e.state==="exited"?"-15px":"0px"});
  opacity: ${e=>e.state==="exiting"||e.state==="exited"?"0":"1"};
  transform-origin: top;
  transition: all 0.25s ease-in;
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  width: 100%;
  @media ${l.media.m} {
    align-items: center;
  }
`,te=({movie:e})=>{var j,I,B,$;const[b,C]=o.useState(!1),[x,M]=o.useState([]),[g,S]=o.useState([]),[f,s]=o.useState([]);return o.useEffect(()=>{var c;(c=e.persons)==null||c.forEach(a=>{switch(a.enProfession){case"director":M(i=>[...i??[],a]);break;case"producer":S(i=>[...i??[],a]);break;case"writer":s(i=>[...i??[],a]);break}})},[e]),t.jsxs(z,{poster:!!((j=e.poster)!=null&&j.url),children:[t.jsx(D,{name:e.name??"",enName:e.alternativeName,movieType:e.type}),t.jsx(d,{children:!!((I=e.rating)!=null&&I.kp)&&t.jsx(P,{rating:e.rating.kp})}),e.year&&e.movieLength&&t.jsxs(d,{children:[e.year&&t.jsxs(t.Fragment,{children:[e.year," г., "]}),e.movieLength&&t.jsxs(t.Fragment,{children:[e.movieLength," мин."]})]}),t.jsxs(d,{children:["Жанр: ",(B=e.genres)==null?void 0:B.map((c,a,i)=>{const v=a===i.length-1?"":", ";return c.name+v})]}),t.jsxs(d,{children:["Страна: ",($=e.countries)==null?void 0:$.map((c,a,i)=>{const v=a===i.length-1?"":", ";return c.name+v})]}),t.jsx(d,{children:e.description}),t.jsxs(_,{onClick:()=>C(c=>!c),children:["Детали о ",e.type==="movie"?"фильме":"сериале",b?t.jsx(L,{style:{fontSize:"1.5rem"}}):t.jsx(T,{style:{fontSize:"1.5rem",marginTop:"0.1rem"}})]}),t.jsx(F,{in:b,timeout:150,mountOnEnter:!0,unmountOnExit:!0,children:c=>{var a,i,v,n,m,r,w;return t.jsxs(ee,{state:c,children:[!!(x!=null&&x.length)&&t.jsxs(d,{children:["Режиссер: ",x==null?void 0:x.map((p,y,k)=>{const h=y===k.length-1?"":", ";return p.name+h})]}),!!(f!=null&&f.length)&&t.jsxs(d,{children:["Сценарист: ",f==null?void 0:f.map((p,y,k)=>{const h=y===k.length-1?"":", ";return p.name+h})]}),!!(g!=null&&g.length)&&t.jsxs(d,{children:["Продюсер: ",g==null?void 0:g.map((p,y,k)=>{const h=y===k.length-1?"":", ";return p.name+h})]}),t.jsxs(d,{children:["Бюджет: ",(a=e.budget)!=null&&a.value?`${e.budget.value} ${(i=e.budget)==null?void 0:i.currency}`:"Информация отсутсвует"]}),t.jsxs(d,{children:["Сборы: ",(n=(v=e.fees)==null?void 0:v.world)!=null&&n.value?`${e.fees.world.value} ${(m=e.fees.world)==null?void 0:m.currency}`:"Информация отсутсвует"]}),((r=e.premiere)==null?void 0:r.world)&&t.jsxs(d,{children:["Премьера в мире: ",R(new Date(((w=e.premiere)==null?void 0:w.world)??""),"dd MMMM Y",{locale:G})]}),e.slogan&&t.jsxs(d,{children:["«",e.slogan,"»"]})]})}})]})},se=o.memo(te),ne=u.div`
  height: 100vh;
  width: 100%;
  margin-top: -5rem;
  background-image: url(${e=>e.url});
  background-position: center;
  background-size: cover;
`,ie=u.div`
  width: 100%;
  height: 100vh;
  background: ${l.colors.backimgGradient};
  z-index: -1;
`,re=u.div`
  width: 100%;
  height: 100vh;
  background: ${l.colors.headerGradient};
  display: flex;
  justify-content: center;
  z-index: -1;
`,ae=u.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,oe=u.div`
  padding: 8rem 0 4rem 0;
  height: fit-content;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  max-width: 1700px;
  @media ${l.media.xl} {
    width: 85%;
  }
  @media ${l.media.l} {
    width: 95%;
  }
  @media ${l.media.m} {
    justify-content: center;
  }
`,le=u.div`
  width: fit-content;
  margin-right: 1rem;
  margin-bottom: 1rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ce=u.div`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  column-gap: 0.5rem;
  @media ${l.media.m} {
    justify-content: center;
  }
`,de=u.img`
  width: ${e=>e.poster?"45vh":"0px"};
  @media ${l.media.l} {
    width: ${e=>e.poster?"37vh":"0px"};
  }
  @media ${l.media.m} {
    width: ${e=>e.poster?"50%":"0px"};
    margin-right: 0;
  }
  @media ${l.media.s} {
    width: ${e=>e.poster?"70%":"0px"};
    margin-right: 0;
  }
`,me=u.div`
  width: 100%;
  margin-top: 2.5rem;
`,he=()=>{var $,c,a,i,v;const{movieInfoStore:e,moviesStore:b,uiStore:C}=U(),x=Y(),[M,g]=o.useState(!1),[S,f]=o.useState(!0),s=o.useMemo(()=>e.movieInfo,[e.movieInfo]),j=o.useMemo(()=>{var n,m;return((m=(n=e.movieInfo)==null?void 0:n.persons)==null?void 0:m.filter(r=>r.enProfession==="actor").map(r=>({kinopoiskId:r.id??void 0,webUrl:"",nameRu:r.name,nameEn:r.enName,posterUrl:r.photo??"",sex:"Информация отсутсвует"})))??[]},[e.movieInfo]),I=o.useMemo(()=>{var n,m,r,w;return((w=(r=(m=(n=e.movieInfo)==null?void 0:n.videos)==null?void 0:m.trailers)==null?void 0:r.find(p=>p.site==="youtube"))==null?void 0:w.url)??""},[e.movieInfo]);o.useEffect(()=>{x.movieId&&e.getMovie(x.movieId)},[e,x]),o.useEffect(()=>{var n;f(b.isSavedFilm(((n=e.movieInfo)==null?void 0:n.id)??0))},[($=e.movieInfo)==null?void 0:$.id,b]);const B=()=>{var n,m,r,w,p,y,k;s&&(b.changeSavedFilms({name:s.name??"",enName:s.alternativeName??"",rating:((n=s.rating)==null?void 0:n.kp)??void 0,duration:s.movieLength??void 0,premiereRu:((m=s.premiere)==null?void 0:m.russia)??"",countries:((r=s.countries)==null?void 0:r.map(h=>h.name??"").slice(0,3))??[],genres:((w=s.genres)==null?void 0:w.map(h=>h.name??"").slice(0,3))??[],poster:((p=s.poster)==null?void 0:p.url)??((y=s.poster)==null?void 0:y.previewUrl)??"",year:s.year??0,kId:s.id,saved:!S,posterPreview:((k=s.poster)==null?void 0:k.previewUrl)??""},!S),f(h=>!h))};return o.useEffect(()=>{C.updateDocumentTitle("Фильмы и сериалы")},[C]),t.jsxs(t.Fragment,{children:[t.jsx(V,{visible:M,setVisible:g,children:t.jsx("iframe",{width:"100%",height:"100%",src:I,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})}),e.movieInfoLoading&&t.jsx(ae,{children:t.jsx(A,{size:50,strokeWidth:2})}),!e.movieInfoLoading&&s&&t.jsx(ne,{url:((c=s.backdrop)==null?void 0:c.url)??"",children:t.jsx(ie,{children:t.jsx(re,{children:t.jsxs(oe,{children:[t.jsxs(le,{children:[t.jsx(de,{poster:!!((a=s.poster)!=null&&a.url),src:((i=s.poster)==null?void 0:i.url)??"",alt:s.enName??""}),t.jsxs(ce,{children:[t.jsx(O,{}),t.jsx(W,{onClick:B,icon:S?t.jsx(q,{style:{fontSize:"1.7rem",color:l.colors.yellow}}):t.jsx(H,{style:{fontSize:"1.7rem",color:l.colors.yellow}})}),I&&t.jsx(J,{label:"Посмотреть трейлер",onClick:()=>g(!0)})]})]}),t.jsx(se,{movie:s}),t.jsxs(me,{children:[t.jsx(K,{children:"Актерский состав"}),j!=null&&j.length?t.jsx(Q,{children:j==null?void 0:j.map(n=>t.jsx(X,{actor:n},n.kinopoiskId))}):t.jsx("div",{children:"Информация отсутвует"})]}),!!((v=s.similarMovies)!=null&&v.length)&&t.jsx(Z,{similarMovies:s.similarMovies})]})})})})]})},xe=N(he);export{xe as default};
