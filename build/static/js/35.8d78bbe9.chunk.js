(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[35],{1084:function(e,t,n){"use strict";var i,c=n(9),a=n(110),r=n(6),o=Object(r.e)(a.a)(i||(i=Object(c.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o},1610:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var i=n(33),c=n(3),a=n.n(c),r=n(10),o=n(17),l=n(8),s=n(9),d=n(0),u=n(6),b=n(7),j=n(4),v=n(2),O=n(73),x=n(14),m=n(41),p=n(231),h=n(266),C=n(485),f=n(290),E=n(29),y=n(121),R=n(139),I=n(68),g=n(45),T=n(23),U=n(70),w=n(52),Y=n(353),N=n(130),_=n(1084),k=n(40),S=n(207);var B=n(74),A=n(88),P=n(289),D=n(25),L=n(131),q=n(298),Q=n(125),V=n(127),M=n(426);function z(){return Object(D.c)((function(e){return e.burn}))}var F,H=n(53),W=n(328),G=n(1),J=u.e.div(F||(F=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function K(e){var t,n,c,s,u,F,K,X,Z,$,ee,te,ne,ie,ce,ae,re,oe,le,se,de,ue=e.history,be=e.match.params,je=be.currencyIdA,ve=be.currencyIdB,Oe=null!==(t=Object(U.c)(je))&&void 0!==t?t:void 0,xe=null!==(n=Object(U.c)(ve))&&void 0!==n?n:void 0,me=Object(T.a)(),pe=me.account,he=me.chainId,Ce=me.library,fe=Object(d.useMemo)((function(){return[Object(B.b)(Oe,he),Object(B.b)(xe,he)]}),[Oe,xe,he]),Ee=Object(l.a)(fe,2),ye=Ee[0],Re=Ee[1],Ie=Object(x.b)().t,ge=Object(H.g)(),Te=z(),Ue=Te.independentField,we=Te.typedValue,Ye=function(e,t){var n,i,c,a,r,s=Object(T.a)(),d=s.account,u=s.chainId,b=z(),v=b.independentField,O=b.typedValue,m=Object(x.b)().t,p=Object(L.b)(e,t),h=Object(l.a)(p,2)[1],C=Object(V.e)(null!==d&&void 0!==d?d:void 0,[null===h||void 0===h?void 0:h.liquidityToken]),f=null===C||void 0===C?void 0:C[null!==(n=null===h||void 0===h||null===(i=h.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],E=[Object(B.b)(e,u),Object(B.b)(t,u)],y=E[0],R=E[1],I=(c={},Object(o.a)(c,M.a.CURRENCY_A,y),Object(o.a)(c,M.a.CURRENCY_B,R),Object(o.a)(c,M.a.LIQUIDITY,null===h||void 0===h?void 0:h.liquidityToken),c),g=Object(q.a)(null===h||void 0===h?void 0:h.liquidityToken),U=h&&g&&f&&y&&j.e.greaterThanOrEqual(g.raw,f.raw)?new j.k(y,h.getLiquidityValue(y,g,f,!1).raw):void 0,w=h&&g&&f&&R&&j.e.greaterThanOrEqual(g.raw,f.raw)?new j.k(R,h.getLiquidityValue(R,g,f,!1).raw):void 0,Y=(a={},Object(o.a)(a,M.a.CURRENCY_A,U),Object(o.a)(a,M.a.CURRENCY_B,w),a),N=new j.g("0","100");if(v===M.a.LIQUIDITY_PERCENT)N=new j.g(O,"100");else if(v===M.a.LIQUIDITY){if(null===h||void 0===h?void 0:h.liquidityToken){var _=Object(Q.a)(O,h.liquidityToken);_&&f&&!_.greaterThan(f)&&(N=new j.g(_.raw,f.raw))}}else if(I[v]){var k=Object(Q.a)(O,I[v]),S=Y[v];k&&S&&!k.greaterThan(S)&&(N=new j.g(k.raw,S.raw))}var A,P,D=(r={},Object(o.a)(r,M.a.LIQUIDITY_PERCENT,N),Object(o.a)(r,M.a.LIQUIDITY,f&&N&&N.greaterThan("0")?new j.k(f.token,N.multiply(f.raw).quotient):void 0),Object(o.a)(r,M.a.CURRENCY_A,y&&N&&N.greaterThan("0")&&U?new j.k(y,N.multiply(U.raw).quotient):void 0),Object(o.a)(r,M.a.CURRENCY_B,R&&N&&N.greaterThan("0")&&w?new j.k(R,N.multiply(w.raw).quotient):void 0),r);return d||(A=m("Connect Wallet")),D[M.a.LIQUIDITY]&&D[M.a.CURRENCY_A]&&D[M.a.CURRENCY_B]||(A=null!==(P=A)&&void 0!==P?P:m("Enter an amount")),{pair:h,parsedAmounts:D,error:A}}(null!==Oe&&void 0!==Oe?Oe:void 0,null!==xe&&void 0!==xe?xe:void 0),Ne=Ye.pair,_e=Ye.parsedAmounts,ke=Ye.error,Se=function(){var e=Object(D.b)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(M.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,Be=!ke,Ae=Object(d.useState)(!1),Pe=Object(l.a)(Ae,2),De=Pe[0],Le=Pe[1],qe=Object(d.useState)(!1),Qe=Object(l.a)(qe,2),Ve=Qe[0],Me=Qe[1],ze=Object(d.useState)(""),Fe=Object(l.a)(ze,2),He=Fe[0],We=Fe[1],Ge=Object(Y.a)(),Je=Object(H.v)(),Ke=Object(l.a)(Je,1)[0],Xe=(Z={},Object(o.a)(Z,M.a.LIQUIDITY_PERCENT,_e[M.a.LIQUIDITY_PERCENT].equalTo("0")?"0":_e[M.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":_e[M.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(Z,M.a.LIQUIDITY,Ue===M.a.LIQUIDITY?we:null!==(c=null===(s=_e[M.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==c?c:""),Object(o.a)(Z,M.a.CURRENCY_A,Ue===M.a.CURRENCY_A?we:null!==(u=null===(F=_e[M.a.CURRENCY_A])||void 0===F?void 0:F.toSignificant(6))&&void 0!==u?u:""),Object(o.a)(Z,M.a.CURRENCY_B,Ue===M.a.CURRENCY_B?we:null!==(K=null===(X=_e[M.a.CURRENCY_B])||void 0===X?void 0:X.toSignificant(6))&&void 0!==K?K:""),Z),Ze=null===($=_e[M.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new j.g("1")),$e=Object(w.r)(null===Ne||void 0===Ne||null===(ee=Ne.liquidityToken)||void 0===ee?void 0:ee.address),et=Object(d.useState)(null),tt=Object(l.a)(et,2),nt=tt[0],it=tt[1],ct=Object(A.b)(_e[M.a.LIQUIDITY],g.t),at=Object(l.a)(ct,2),rt=at[0],ot=at[1];function lt(){return(lt=Object(r.a)(a.a.mark((function e(){var t,n,i,c,r,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($e&&Ne&&Ce&&Ge){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=_e[M.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,$e.nonces(pe);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],c={name:"Megan LPs",version:"1",chainId:he,verifyingContract:Ne.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:pe,spender:g.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:Ge.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:c,primaryType:"Permit",message:o}),Ce.send("eth_signTypedData_v4",[pe,l]).then(b.splitSignature).then((function(e){it({v:e.v,r:e.r,s:e.s,deadline:Ge.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&ot()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var st=Object(d.useCallback)((function(e,t){return it(null),Se(e,t)}),[Se]),dt=Object(d.useCallback)((function(e){return st(M.a.LIQUIDITY,e)}),[st]),ut=Object(d.useCallback)((function(e){return st(M.a.CURRENCY_A,e)}),[st]),bt=Object(d.useCallback)((function(e){return st(M.a.CURRENCY_B,e)}),[st]),jt=Object(N.d)();function vt(){return Ot.apply(this,arguments)}function Ot(){return(Ot=Object(r.a)(a.a.mark((function e(){var t,n,c,r,l,s,d,u,b,v,x,m,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(he&&Ce&&pe&&Ge){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=_e[M.a.CURRENCY_A],c=_e[M.a.CURRENCY_B],n&&c){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.i)(he,Ce,pe),t={},Object(o.a)(t,M.a.CURRENCY_A,Object(k.c)(n,Ke)[0]),Object(o.a)(t,M.a.CURRENCY_B,Object(k.c)(c,Ke)[0]),l=t,Oe&&xe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=_e[M.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=xe===j.d,u=Oe===j.d||d,ye&&Re){e.next=16;break}throw new Error("could not wrap");case 16:if(rt!==A.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],v=[d?ye.address:Re.address,s.raw.toString(),l[d?M.a.CURRENCY_A:M.a.CURRENCY_B].toString(),l[d?M.a.CURRENCY_B:M.a.CURRENCY_A].toString(),pe,Ge.toHexString()]):(b=["removeLiquidity"],v=[ye.address,Re.address,s.raw.toString(),l[M.a.CURRENCY_A].toString(),l[M.a.CURRENCY_B].toString(),pe,Ge.toHexString()]),e.next=25;break;case 20:if(null===nt){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],v=[d?ye.address:Re.address,s.raw.toString(),l[d?M.a.CURRENCY_A:M.a.CURRENCY_B].toString(),l[d?M.a.CURRENCY_B:M.a.CURRENCY_A].toString(),pe,nt.deadline,!1,nt.v,nt.r,nt.s]):(b=["removeLiquidityWithPermit"],v=[ye.address,Re.address,s.raw.toString(),l[M.a.CURRENCY_A].toString(),l[M.a.CURRENCY_B].toString(),pe,nt.deadline,!1,nt.v,nt.r,nt.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(v)).then(k.b).catch((function(t){console.error("estimateGas failed",e,v,t)}))})));case 27:if(x=e.sent,-1!==(m=x.findIndex((function(e){return O.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=b[m],h=x[m],Me(!0),e.next=38,r[p].apply(r,Object(i.a)(v).concat([{gasLimit:h,gasPrice:ge}])).then((function(e){var t,n;Me(!1),jt(e,{summary:"Remove ".concat(null===(t=_e[M.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===Oe||void 0===Oe?void 0:Oe.symbol," and ").concat(null===(n=_e[M.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===xe||void 0===xe?void 0:xe.symbol)}),We(e.hash)})).catch((function(e){Me(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xt(){var e,t;return Object(G.jsxs)(m.a,{gap:"md",children:[Object(G.jsxs)(E.b,{align:"flex-end",children:[Object(G.jsx)(v.Ec,{fontSize:"24px",children:null===(e=_e[M.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(G.jsxs)(E.c,{gap:"4px",children:[Object(G.jsx)(I.a,{currency:Oe,size:"24px"}),Object(G.jsx)(v.Ec,{fontSize:"24px",ml:"10px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]})]}),Object(G.jsx)(E.c,{children:Object(G.jsx)(v.a,{width:"16px"})}),Object(G.jsxs)(E.b,{align:"flex-end",children:[Object(G.jsx)(v.Ec,{fontSize:"24px",children:null===(t=_e[M.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(G.jsxs)(E.c,{gap:"4px",children:[Object(G.jsx)(I.a,{currency:xe,size:"24px"}),Object(G.jsx)(v.Ec,{fontSize:"24px",ml:"10px",children:null===xe||void 0===xe?void 0:xe.symbol})]})]}),Object(G.jsx)(v.Ec,{small:!0,textAlign:"left",pt:"12px",children:Ie("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Ke/100})})]})}function mt(){var e,t,n;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(E.b,{children:[Object(G.jsx)(v.Ec,{children:Ie("%assetA%/%assetB% Burned",{assetA:null!==(e=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==t?t:""})}),Object(G.jsxs)(E.c,{children:[Object(G.jsx)(I.b,{currency0:Oe,currency1:xe,margin:!0}),Object(G.jsx)(v.Ec,{children:null===(n=_e[M.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Ne&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(E.b,{children:[Object(G.jsx)(v.Ec,{children:Ie("Price")}),Object(G.jsxs)(v.Ec,{children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," = ",ye?Ne.priceOf(ye).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]}),Object(G.jsxs)(E.b,{children:[Object(G.jsx)("div",{}),Object(G.jsxs)(v.Ec,{children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," = ",Re?Ne.priceOf(Re).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]})]}),Object(G.jsx)(v.v,{disabled:!(rt===A.a.APPROVED||null!==nt),onClick:vt,children:Ie("Confirm")})]})}var pt=Ie("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ne=_e[M.a.CURRENCY_A])||void 0===ne?void 0:ne.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ie=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==ie?ie:"",amountB:null!==(ce=null===(ae=_e[M.a.CURRENCY_B])||void 0===ae?void 0:ae.toSignificant(6))&&void 0!==ce?ce:"",symbolB:null!==(re=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==re?re:""}),ht=Object(d.useCallback)((function(e){st(M.a.LIQUIDITY_PERCENT,e.toString())}),[st]),Ct=Oe===j.d||xe===j.d,ft=Boolean(he&&(Oe&&Object(j.o)(j.n[he],Oe)||xe&&Object(j.o)(j.n[he],xe))),Et=Object(d.useCallback)((function(e){ve&&Object(S.a)(e)===ve?ue.push("/remove/".concat(Object(S.a)(e),"/").concat(je)):ue.push("/remove/".concat(Object(S.a)(e),"/").concat(ve))}),[je,ve,ue]),yt=Object(d.useCallback)((function(e){je&&Object(S.a)(e)===je?ue.push("/remove/".concat(ve,"/").concat(Object(S.a)(e))):ue.push("/remove/".concat(je,"/").concat(Object(S.a)(e)))}),[je,ve,ue]),Rt=Object(d.useCallback)((function(){it(null),He&&st(M.a.LIQUIDITY_PERCENT,"0"),We("")}),[st,He]),It=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),c=Object(l.a)(i,2),a=c[0],r=c[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[a,s]}(Number.parseInt(_e[M.a.LIQUIDITY_PERCENT].toFixed(0)),ht),gt=Object(l.a)(It,2),Tt=gt[0],Ut=gt[1],wt=Object(v.id)(Object(G.jsx)(p.c,{title:Ie("You will receive"),customOnDismiss:Rt,attemptingTxn:Ve,hash:He||"",content:function(){return Object(G.jsx)(p.a,{topContent:xt,bottomContent:mt})},pendingText:pt}),!0,!0,"removeLiquidityModal"),Yt=Object(l.a)(wt,1)[0];return Object(G.jsxs)(W.a,{children:[Object(G.jsxs)(f.a,{children:[Object(G.jsx)(f.b,{backTo:"/pool",title:Ie("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==le?le:""}),subtitle:Ie("To receive %assetA% and %assetB%",{assetA:null!==(se=null===Oe||void 0===Oe?void 0:Oe.symbol)&&void 0!==se?se:"",assetB:null!==(de=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==de?de:""}),noConfig:!0}),Object(G.jsxs)(v.B,{children:[Object(G.jsxs)(m.a,{gap:"20px",children:[Object(G.jsxs)(E.b,{children:[Object(G.jsx)(v.Ec,{children:Ie("Amount")}),Object(G.jsx)(v.v,{variant:"text",scale:"sm",onClick:function(){return Le(!De)},children:Ie(De?"Simple":"Detailed")})]}),!De&&Object(G.jsxs)(J,{children:[Object(G.jsxs)(v.Ec,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Xe[M.a.LIQUIDITY_PERCENT],"%"]}),Object(G.jsx)(v.mc,{name:"lp-amount",min:0,max:100,value:Tt,onValueChanged:function(e){return Ut(Math.ceil(e))},mb:"16px"}),Object(G.jsxs)(v.fb,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(G.jsx)(v.v,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(G.jsx)(v.v,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(G.jsx)(v.v,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(G.jsx)(v.v,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!De&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(m.b,{children:Object(G.jsx)(v.d,{color:"textSubtle",width:"24px",my:"16px"})}),Object(G.jsxs)(m.a,{gap:"10px",children:[Object(G.jsx)(v.Ec,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ie("You will receive")}),Object(G.jsxs)(R.c,{children:[Object(G.jsxs)(v.fb,{justifyContent:"space-between",mb:"8px",children:[Object(G.jsxs)(v.fb,{children:[Object(G.jsx)(I.a,{currency:Oe}),Object(G.jsx)(v.Ec,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===Oe||void 0===Oe?void 0:Oe.symbol})]}),Object(G.jsx)(v.Ec,{small:!0,children:Xe[M.a.CURRENCY_A]||"-"})]}),Object(G.jsxs)(v.fb,{justifyContent:"space-between",children:[Object(G.jsxs)(v.fb,{children:[Object(G.jsx)(I.a,{currency:xe}),Object(G.jsx)(v.Ec,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===xe||void 0===xe?void 0:xe.symbol})]}),Object(G.jsx)(v.Ec,{small:!0,children:Xe[M.a.CURRENCY_B]||"-"})]}),he&&(ft||Ct)?Object(G.jsx)(E.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:Ct?Object(G.jsx)(_.a,{to:"/remove/".concat(Oe===j.d?j.n[he].address:je,"/").concat(xe===j.d?j.n[he].address:ve),children:Ie("Receive WBNB")}):ft?Object(G.jsx)(_.a,{to:"/remove/".concat(Oe&&Object(j.o)(Oe,j.n[he])?"BNB":je,"/").concat(xe&&Object(j.o)(xe,j.n[he])?"BNB":ve),children:Ie("Receive BNB")}):null}):null]})]})]}),De&&Object(G.jsxs)(v.q,{my:"16px",children:[Object(G.jsx)(h.a,{value:Xe[M.a.LIQUIDITY],onUserInput:dt,onMax:function(){st(M.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,disableCurrencySelect:!0,currency:null===Ne||void 0===Ne?void 0:Ne.liquidityToken,pair:Ne,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(G.jsx)(m.b,{children:Object(G.jsx)(v.d,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Xe[M.a.CURRENCY_A],onUserInput:ut,onMax:function(){return st(M.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:Oe,label:Ie("Output"),onCurrencySelect:Et,id:"remove-liquidity-tokena"}),Object(G.jsx)(m.b,{children:Object(G.jsx)(v.a,{width:"24px",my:"16px"})}),Object(G.jsx)(h.a,{hideBalance:!0,value:Xe[M.a.CURRENCY_B],onUserInput:bt,onMax:function(){return st(M.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:xe,label:Ie("Output"),onCurrencySelect:yt,id:"remove-liquidity-tokenb"})]}),Ne&&Object(G.jsxs)(m.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(G.jsx)(v.Ec,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ie("Prices")}),Object(G.jsxs)(R.c,{children:[Object(G.jsxs)(v.fb,{justifyContent:"space-between",children:[Object(G.jsxs)(v.Ec,{small:!0,color:"textSubtle",children:["1 ",null===Oe||void 0===Oe?void 0:Oe.symbol," ="]}),Object(G.jsxs)(v.Ec,{small:!0,children:[ye?Ne.priceOf(ye).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]}),Object(G.jsxs)(v.fb,{justifyContent:"space-between",children:[Object(G.jsxs)(v.Ec,{small:!0,color:"textSubtle",children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," ="]}),Object(G.jsxs)(v.Ec,{small:!0,children:[Re?Ne.priceOf(Re).toSignificant(6):"-"," ",null===Oe||void 0===Oe?void 0:Oe.symbol]})]})]})]}),Object(G.jsx)(v.q,{position:"relative",mt:"16px",children:pe?Object(G.jsxs)(E.b,{children:[Object(G.jsx)(v.v,{variant:rt===A.a.APPROVED||null!==nt?"success":"primary",onClick:function(){return lt.apply(this,arguments)},disabled:rt!==A.a.NOT_APPROVED||null!==nt,width:"100%",mr:"0.5rem",children:rt===A.a.PENDING?Object(G.jsx)(P.a,{children:Ie("Enabling")}):rt===A.a.APPROVED||null!==nt?Ie("Enabled"):Ie("Enable")}),Object(G.jsx)(v.v,{variant:!Be&&_e[M.a.CURRENCY_A]&&_e[M.a.CURRENCY_B]?"danger":"primary",onClick:function(){Yt()},width:"100%",disabled:!Be||null===nt&&rt!==A.a.APPROVED,children:ke||Ie("Remove")})]}):Object(G.jsx)(y.a,{})})]})]}),Ne?Object(G.jsx)(m.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(G.jsx)(C.a,{showUnwrapped:ft,pair:Ne})}):null]})}}}]);