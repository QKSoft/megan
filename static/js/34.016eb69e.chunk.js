(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[34],{1519:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var i,o=n(10),c=n(13),r=n(0),l=n(7),u=n(2),d=n(106),a=n(20),s=n(22),j=n(465),b=n(119),x=n(123),O=n(50),f=n(274),h=n(275),p=n(309),m=n(1),v=Object(l.e)(u.x)(i||(i=Object(c.a)(["\n  background-color: ",";\n"])),(function(t){return t.theme.colors.dropdownDeep}));function k(){var t=Object(s.a)().account,e=Object(a.b)().t,n=Object(O.m)(),i=Object(r.useMemo)((function(){return n.map((function(t){return{liquidityToken:Object(O.a)(t),tokens:t}}))}),[n]),c=Object(r.useMemo)((function(){return i.map((function(t){return t.liquidityToken}))}),[i]),l=Object(b.f)(null!==t&&void 0!==t?t:void 0,c),k=Object(o.a)(l,2),y=k[0],g=k[1],q=Object(r.useMemo)((function(){return i.filter((function(t){var e,n=t.liquidityToken;return null===(e=y[n.address])||void 0===e?void 0:e.greaterThan("0")}))}),[i,y]),w=Object(x.c)(q.map((function(t){return t.tokens}))),A=g||(null===w||void 0===w?void 0:w.length)<q.length||(null===w||void 0===w?void 0:w.some((function(t){return!t}))),T=w.map((function(t){return Object(o.a)(t,2)[1]})).filter((function(t){return Boolean(t)}));return Object(m.jsx)(p.a,{children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{title:e("Your Liquidity"),subtitle:e("Remove liquidity to receive tokens back")}),Object(m.jsxs)(v,{children:[t?A?Object(m.jsx)(u.rc,{color:"textSubtle",textAlign:"center",children:Object(m.jsx)(f.a,{children:e("Loading")})}):(null===T||void 0===T?void 0:T.length)>0?T.map((function(t,e){return Object(m.jsx)(j.b,{pair:t,mb:e<T.length-1?"16px":0},t.liquidityToken.address)})):Object(m.jsx)(u.rc,{color:"textSubtle",textAlign:"center",children:e("No liquidity found.")}):Object(m.jsx)(u.rc,{color:"textSubtle",textAlign:"center",children:e("Connect to a wallet to view your liquidity.")}),t&&!A&&Object(m.jsxs)(u.ab,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(m.jsx)(u.rc,{color:"textSubtle",mb:"8px",children:e("Don't see a pool you joined?")}),Object(m.jsx)(u.t,{id:"import-pool-link",variant:"secondary",scale:"sm",as:d.a,to:"/find",children:e("Find other LP tokens")})]})]}),Object(m.jsx)(u.y,{style:{textAlign:"center"},children:Object(m.jsx)(u.t,{id:"join-pool-button",as:d.a,to:"/add",width:"100%",startIcon:Object(m.jsx)(u.a,{color:"white"}),children:e("Add Liquidity")})})]})})}}}]);