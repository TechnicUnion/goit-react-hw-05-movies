"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[876],{876:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,i,s,o,c=t(439),l=t(791),a=t(87),d=t(689),h=t(820),u=t(168),x=t(444),v=x.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  gap: 15px;\n  border-bottom: 1px solid black;\n"]))),j=x.ZP.img(i||(i=(0,u.Z)(["\n  margin-bottom: 15px;\n"]))),f=x.ZP.ul(s||(s=(0,u.Z)(["\n  border-bottom: 1px solid black;\n"]))),p=x.ZP.li(o||(o=(0,u.Z)(["\n  margin-bottom: 15px;\n"]))),m=t(184);function b(){var e,n,t=(0,d.UO)().movieId,r=(0,l.useState)(null),i=(0,c.Z)(r,2),s=i[0],o=i[1],u=(0,l.useState)(null),x=(0,c.Z)(u,2),b=x[0],g=x[1],w=null!==(e=null===(n=(0,d.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,l.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=894ef72300682f1db325dae2afe3e7e2")).then((function(e){return e.json()})).then((function(e){var n=new Date(e.release_date);return g(n.getFullYear()),o(e)})).catch((function(e){return e}))}),[t]),(0,m.jsxs)("div",{children:[s&&(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{children:(0,m.jsxs)(a.rU,{to:w,children:[(0,m.jsx)(h.kyg,{})," Go back"]})}),(0,m.jsxs)(v,{children:[(0,m.jsx)(j,{src:"https://www.themoviedb.org/t/p/w300/".concat(s.poster_path),alt:"Poster"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("h2",{children:[s.original_title," (",b,")"]}),(0,m.jsxs)("p",{children:["User Score: ",Math.round(10*s.vote_average),"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:s.overview}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:s.genres.map((function(e){return e.name})).join(" ")})]})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsxs)(f,{children:[(0,m.jsx)(p,{children:(0,m.jsx)(a.rU,{to:"cast",state:{from:w},children:"Cast"})}),(0,m.jsx)(p,{children:(0,m.jsx)(a.rU,{to:"reviews",state:{from:w},children:"Reviews"})})]})]}),(0,m.jsx)(d.j3,{})]})}}}]);
//# sourceMappingURL=876.767e8116.chunk.js.map