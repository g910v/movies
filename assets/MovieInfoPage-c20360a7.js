import{s as r,g as n,r as a,j as e,L as oe,f as ae,v as E,w as le,x as me,o as de,y as K,u as ce,a as xe,k as he,z as pe,A as ue,D as ge,B as fe,E as ve,G as W,H as V,J as je,K as we,l as ye}from"./index-7aee5212.js";import{r as $e}from"./index-979b4d34.js";import{B as Se}from"./BackButton-ed5e8d58.js";const ke=r.img`
  width: 9rem;
  height: 14rem;
  border-radius: 5px;
`,be=r(oe)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
  color: ${n.colors.text};
`,Ie=a.memo(({actor:i})=>e.jsxs(be,{to:`/person/${i.kinopoiskId}`,children:[e.jsx(ke,{src:i.posterUrl,alt:i.nameEn??""}),e.jsx("div",{children:i.nameRu})]})),ze=r.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;

  transition: all 0.15s ease-in;
  opacity: ${i=>i.state==="exiting"||i.state==="exited"?"0":"1"};
`,Ce=r.div`
  position: fixed;
  top: ${i=>i.maxiSize?"0px":"25%"};
  left: ${i=>i.maxiSize?"0px":"25%"};
  width: ${i=>i.maxiSize?"calc(100% - 2rem)":"50%"};
  height: ${i=>i.maxiSize?"calc(100% - 2rem)":"50%"};
  z-index: 12;
  background: ${n.colors.bgLighter};
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media ${n.media.m} {
    top: ${i=>i.maxiSize?"0px":"30%"};
    left: ${i=>i.maxiSize?"0px":"5%"};
    width: ${i=>i.maxiSize?"calc(100% - 2rem)":"calc(90% - 2rem)"};
    height: ${i=>i.maxiSize?"calc(100% - 2rem)":"calc(40% - 2rem)"};
  }

  transition: all 0.15s ease-in;
  opacity: ${i=>i.state==="exiting"||i.state==="exited"?"0":"1"};
`,Be=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: -0.5rem;
  margin-top: -0.5rem;
`,X=r.div`
  border-radius: 50%;
  padding: 0.5rem;
  background: ${n.colors.bgLighter};
  display: flex;
  place-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${n.colors.mix};
  }
`,Ee=r(X)`
  top: 0.1rem;
  right: 0.1rem;
`,Me=r(X)`
  top: 0.1rem;
  right: 0.35rem;
`,Pe=({children:i,visible:k,setVisible:b})=>{const[I,t]=a.useState(!1);return ae.createPortal(e.jsx(E,{in:k,timeout:150,mountOnEnter:!0,unmountOnExit:!0,children:z=>e.jsxs(e.Fragment,{children:[e.jsx(ze,{onClick:()=>b(!1),state:z}),e.jsxs(Ce,{maxiSize:I,state:z,children:[e.jsxs(Be,{children:[e.jsx(Me,{onClick:()=>t(C=>!C),children:e.jsx(le,{})}),e.jsx(Ee,{onClick:()=>b(!1),children:e.jsx(me,{})})]}),i]})]})}),document.body)},De=r.div`
  height: 100vh;
  width: 100%;
  margin-top: -5rem;
  background-image: url(${i=>i.url});
  background-position: center;
  background-size: cover;
`,Le=r.div`
  width: 100%;
  height: 100vh;
  background: ${n.colors.backimgGradient};
  z-index: -1;
`,Fe=r.div`
  width: 100%;
  height: 100vh;
  background: ${n.colors.headerGradient};
  display: flex;
  justify-content: center;
  z-index: -1;
`,Te=r.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ue=r.div`
  padding: 8rem 0 4rem 0;
  height: fit-content;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  max-width: 1700px;
  @media ${n.media.xl} {
    width: 85%;
  }
  @media ${n.media.l} {
    width: 95%;
  }
  @media ${n.media.m} {
    justify-content: center;
  }
`,Ne=r.div`
  width: fit-content;
  margin-right: 1rem;
  margin-bottom: 1rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Re=r.div`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  column-gap: 0.5rem;
  @media ${n.media.m} {
    justify-content: center;
  }
`,Ge=r.img`
  width: ${i=>i.poster?"45vh":"0px"};
  @media ${n.media.l} {
    width: ${i=>i.poster?"37vh":"0px"};
  }
  @media ${n.media.m} {
    width: ${i=>i.poster?"50%":"0px"};
    margin-right: 0;
  }
  @media ${n.media.s} {
    width: ${i=>i.poster?"70%":"0px"};
    margin-right: 0;
  }
`,Oe=r.div`
  width: ${i=>i.poster?"calc(100% - 45vh - 1rem)":"100%"};
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  height: max-content;
  @media ${n.media.l} {
    width: ${i=>i.poster?"calc(100% - 37vh - 1rem)":"100%"};
  }
  @media ${n.media.m} {
    width: 100%;
    align-items: center;
  }
`,H=r.div`
  width: 100%;
  margin-top: 2.5rem;
`,J=r.div`
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.2rem;
  @media ${n.media.l} {
    font-size: 2rem;
    line-height: 2.2rem;
  }
  @media ${n.media.m} {
    text-align: center;
  }
`,c=r.div`
  font-weight: 400;
  display: flex;
  align-items: center;
  @media ${n.media.m} {
    text-align: center;
  }
`,Ye=r.div`
  display: flex;
  color: ${n.colors.text};
  cursor: pointer;
  width: fit-content;
  &:hover {
    color: ${n.colors.pink};
    ${K}
  }
`,Ae=r.div`
  transform: translateY(${i=>i.state==="exiting"||i.state==="exited"?"-15px":"0px"});
  opacity: ${i=>i.state==="exiting"||i.state==="exited"?"0":"1"};
  transform-origin: top;
  transition: all 0.25s ease-in;
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  width: 100%;
  @media ${n.media.m} {
    align-items: center;
  }
`,q=r.div`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`,We=r.div`
  display: flex;
  flex-direction: column;
  @media ${n.media.m} {
    align-items: center;
  }
`,Ve=r.div`
  transform: translateY(${i=>i.state==="exiting"||i.state==="exited"?"-15px":"0px"});
  opacity: ${i=>i.state==="exiting"||i.state==="exited"?"0":"1"};
  transform-origin: top;
  transition: all 0.25s ease-in;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  row-gap: 1rem;
  @media ${n.media.s} {
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
`,He=r(q)`
  cursor: pointer;
  width: fit-content;
  display: flex;
  margin-top: 0;
  &:hover {
    color: ${n.colors.pink};
    ${K}
  }
`,Je=()=>{var F,T,U,N,R,G,O,Y,A;const{filmInfoStore:i,filmsStore:k,uiStore:b}=ce(),I=xe(),[t,z]=a.useState(void 0),[C,Q]=a.useState(!1),[w,Z]=a.useState([]),[y,_]=a.useState([]),[$,ee]=a.useState([]),[S,ie]=a.useState([]),[M,te]=a.useState(""),[ne,P]=a.useState(!1),[B,D]=a.useState(!0),[L,re]=a.useState(!1);a.useEffect(()=>{I.movieId&&i.getMovie(I.movieId)},[i,I]),a.useEffect(()=>{var s,l,o,m,x,h,u,p,g,f,v,j;z(i.movieInfo),Z(((l=(s=i.movieInfo)==null?void 0:s.persons)==null?void 0:l.filter(d=>d.enProfession==="actor").map(d=>({kinopoiskId:d.id??void 0,webUrl:"",nameRu:d.name,nameEn:d.enName,posterUrl:d.photo??"",sex:"Информация отсутсвует"})))??[]),_((m=(o=i.movieInfo)==null?void 0:o.persons)==null?void 0:m.filter(d=>d.enProfession==="director")),ee((h=(x=i.movieInfo)==null?void 0:x.persons)==null?void 0:h.filter(d=>d.enProfession==="producer")),ie((p=(u=i.movieInfo)==null?void 0:u.persons)==null?void 0:p.filter(d=>d.enProfession==="writer")),te(((j=(v=(f=(g=i.movieInfo)==null?void 0:g.videos)==null?void 0:f.trailers)==null?void 0:v.find(d=>d.site==="youtube"))==null?void 0:j.url)??"")},[i.movieInfo]),a.useEffect(()=>{var s;D(k.isSavedFilm(((s=i.movieInfo)==null?void 0:s.id)??0))},[(F=i.movieInfo)==null?void 0:F.id,k]);const se=()=>{var s,l,o,m,x,h,u;t&&(k.changeSavedFilms({name:t.name??"",enName:t.alternativeName??"",rating:((s=t.rating)==null?void 0:s.kp)??void 0,duration:t.movieLength??void 0,premiereRu:((l=t.premiere)==null?void 0:l.russia)??"",countries:((o=t.countries)==null?void 0:o.map(p=>p.name??"").slice(0,3))??[],genres:((m=t.genres)==null?void 0:m.map(p=>p.name??"").slice(0,3))??[],poster:((x=t.poster)==null?void 0:x.url)??((h=t.poster)==null?void 0:h.previewUrl)??"",year:t.year??0,kId:t.id,saved:!B,posterPreview:((u=t.poster)==null?void 0:u.previewUrl)??""},!B),D(p=>!p))};return a.useEffect(()=>{b.updateDocumentTitle("Фильмы и сериалы")},[b]),e.jsxs(e.Fragment,{children:[e.jsx(Pe,{visible:ne,setVisible:P,children:e.jsx("iframe",{width:"100%",height:"100%",src:M,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})}),i.movieInfoLoading&&e.jsx(Te,{children:e.jsx(he,{size:50,strokeWidth:2})}),!i.movieInfoLoading&&t&&e.jsx(De,{url:((T=t.backdrop)==null?void 0:T.url)??"",children:e.jsx(Le,{children:e.jsx(Fe,{children:e.jsxs(Ue,{children:[e.jsxs(Ne,{children:[e.jsx(Ge,{poster:!!((U=t.poster)!=null&&U.url),src:((N=t.poster)==null?void 0:N.url)??"",alt:t.enName??""}),e.jsxs(Re,{children:[e.jsx(Se,{}),e.jsx(pe,{onClick:se,icon:B?e.jsx(ue,{style:{fontSize:"1.7rem",color:n.colors.yellow}}):e.jsx(ge,{style:{fontSize:"1.7rem",color:n.colors.yellow}})}),M&&e.jsx(fe,{label:"Посмотреть трейлер",onClick:()=>P(!0)})]})]}),e.jsxs(Oe,{poster:!!((R=t.poster)!=null&&R.url),children:[e.jsxs(We,{children:[e.jsx(J,{children:t.name}),e.jsxs(J,{children:["(",t.alternativeName&&e.jsxs(e.Fragment,{children:[t.alternativeName,", "]}),t.type==="movie"?"фильм":"сериал",")"]})]}),e.jsx(c,{children:!!((G=t.rating)!=null&&G.kp)&&e.jsx(ve,{rating:t.rating.kp})}),t.year&&t.movieLength&&e.jsxs(c,{children:[t.year&&e.jsxs(e.Fragment,{children:[t.year," г., "]}),t.movieLength&&e.jsxs(e.Fragment,{children:[t.movieLength," мин."]})]}),e.jsxs(c,{children:["Жанр: ",(O=t.genres)==null?void 0:O.map((s,l,o)=>{const m=l===o.length-1?"":", ";return s.name+m})]}),e.jsxs(c,{children:["Страна: ",(Y=t.countries)==null?void 0:Y.map((s,l,o)=>{const m=l===o.length-1?"":", ";return s.name+m})]}),e.jsx(c,{children:t.description}),e.jsxs(Ye,{onClick:()=>Q(s=>!s),children:["Детали о ",t.type==="movie"?"фильме":"сериале",C?e.jsx(W,{style:{fontSize:"1.5rem"}}):e.jsx(V,{style:{fontSize:"1.5rem",marginTop:"0.1rem"}})]}),e.jsx(E,{in:C,timeout:150,mountOnEnter:!0,unmountOnExit:!0,children:s=>{var l,o,m,x,h,u,p;return e.jsxs(Ae,{state:s,children:[!!(y!=null&&y.length)&&e.jsxs(c,{children:["Режиссер: ",y==null?void 0:y.map((g,f,v)=>{const j=f===v.length-1?"":", ";return g.name+j})]}),!!(S!=null&&S.length)&&e.jsxs(c,{children:["Сценарист: ",S==null?void 0:S.map((g,f,v)=>{const j=f===v.length-1?"":", ";return g.name+j})]}),!!($!=null&&$.length)&&e.jsxs(c,{children:["Продюсер: ",$==null?void 0:$.map((g,f,v)=>{const j=f===v.length-1?"":", ";return g.name+j})]}),e.jsxs(c,{children:["Бюджет: ",(l=t.budget)!=null&&l.value?`${t.budget.value} ${(o=t.budget)==null?void 0:o.currency}`:"Информация отсутсвует"]}),e.jsxs(c,{children:["Сборы: ",(x=(m=t.fees)==null?void 0:m.world)!=null&&x.value?`${t.fees.world.value} ${(h=t.fees.world)==null?void 0:h.currency}`:"Информация отсутсвует"]}),((u=t.premiere)==null?void 0:u.world)&&e.jsxs(c,{children:["Премьера в мире: ",je(new Date(((p=t.premiere)==null?void 0:p.world)??""),"dd MMMM Y",{locale:$e})]}),t.slogan&&e.jsxs(c,{children:["«",t.slogan,"»"]})]})}})]}),e.jsxs(H,{children:[e.jsx(q,{children:"Актерский состав"}),w!=null&&w.length?e.jsx(we,{children:w==null?void 0:w.map(s=>e.jsx(Ie,{actor:s},s.kinopoiskId))}):e.jsx("div",{children:"Информация отсутвует"})]}),!!((A=t.similarMovies)!=null&&A.length)&&e.jsxs(H,{children:[e.jsxs(He,{onClick:()=>re(s=>!s),children:["Похожие фильмы",L?e.jsx(W,{style:{fontSize:"2.5rem"}}):e.jsx(V,{style:{fontSize:"2.5rem",marginBottom:"-0.5rem"}})]}),e.jsx(E,{in:L,timeout:250,mountOnEnter:!0,unmountOnExit:!0,children:s=>{var l;return e.jsx(Ve,{state:s,children:(l=t.similarMovies)==null?void 0:l.map(o=>{var m,x,h;return e.jsx(ye,{film:{name:o.name,enName:o.alternativeName,rating:((m=o.rating)==null?void 0:m.kp)??void 0,poster:((x=o.poster)==null?void 0:x.url)??"",posterPreview:((h=o.poster)==null?void 0:h.previewUrl)??"",kId:o.id??-1,year:o.year,countries:[],genres:[],saved:null}},o.id)})})}})]})]})})})})]})},Qe=de(Je);export{Qe as default};
