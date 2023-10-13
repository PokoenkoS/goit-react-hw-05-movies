"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[423],{423:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var i,o,r,a,u=t(433),c=t(439),s=t(87),l=t(791),p=t(242),d=t(168),h=t(934),f=h.Z.form(i||(i=(0,d.Z)(["\n    display: flex;\n    align-items: center;\n    /* padding-top:25px; */\n    margin-top:30px;\n    max-width: 600px;\n    background-color: #5f21da;\n    border-radius: 3px;\n    overflow: hidden;\n    \n"]))),g=h.Z.button(o||(o=(0,d.Z)(["\n    display: inline-block;\n    width: 50px;\n    height: 48px;\n    border: 0;\n    background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n    &:hover {\n        opacity: 1;\n    }\n"]))),x=h.Z.input(r||(r=(0,d.Z)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n    &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),m=t(184),b=function(n){var e=n.onSubmit,t=(0,l.useState)(""),i=(0,c.Z)(t,2),o=i[0],r=i[1];return(0,m.jsxs)(f,{onSubmit:function(n){if(n.preventDefault(),""===o.trim())return alert("Enter the name of the movie");e(o)},children:[(0,m.jsx)(x,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){return r(n.currentTarget.value.toLowerCase())},value:o}),(0,m.jsx)(g,{type:"submit",children:(0,m.jsx)("span",{children:"Search"})})]})},v=t(874),Z=h.Z.div(a||(a=(0,d.Z)(["\nheight:100vh;\nbackground-color:#79b6e2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n"]))),k=function(){var n=(0,l.useState)([]),e=(0,c.Z)(n,2),t=e[0],i=e[1],o=(0,s.lr)(),r=(0,c.Z)(o,2),a=r[0],d=r[1],h=a.get("query");(0,l.useEffect)((function(){h&&p.Z.getFilm(h).then((function(n){return i((0,u.Z)(n.results))}))}),[h]);return(0,m.jsxs)(Z,{children:[(0,m.jsx)(b,{onSubmit:function(n){d({query:n})}}),t.length>0&&(0,m.jsx)(l.Suspense,{children:(0,m.jsx)(v.Z,{data:t})})]})}}}]);
//# sourceMappingURL=423.e1d475c2.chunk.js.map