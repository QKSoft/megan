(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(21),c=n(16);function a(e,t){Object(c.a)(2,arguments);var n=Object(r.default)(e),a=Object(r.default)(t),i=n.getTime()-a.getTime();return i<0?-1:i>0?1:i}},1030:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(476);function c(e){return Object(r.a)({},e)}},1064:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(998),c=n(16);function a(e,t){Object(c.a)(2,arguments);var n=Object(r.a)(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}},1104:function(e,t,n){var r=n(616);e.exports=function(e,t){var n=-1,c=e.length,a=c-1;for(t=void 0===t?c:t;++n<t;){var i=r(n,a),o=e[i];e[i]=e[n],e[n]=o}return e.length=t,e}},1304:function(e,t,n){var r=n(1305),c=n(1306),a=n(55);e.exports=function(e){return(a(e)?r:c)(e)}},1305:function(e,t,n){var r=n(467),c=n(1104);e.exports=function(e){return c(r(e))}},1306:function(e,t,n){var r=n(1104),c=n(617);e.exports=function(e){return r(c(e))}},1533:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o,s,l,u=n(0),b=n(84),d=n(86),j=n(301),f=n(306),p=n(956),O=n(473),m=n.n(O),x=n(116),h=n(231),v=n(27),g=n(118),S=(n(39),n(62)),y=function(){return Object(v.c)((function(e){return e.nftMarket.data.collections}))},C=function(){return Object(v.c)((function(e){return e.nftMarket.data.user}))},k=n(211),w=function(){var e,t=Object(x.b)(),n=Object(b.c)().account,r=Object(f.c)(),c=r.profile,a=r.isInitialized,i=r.isLoading,o=C().userNftsInitializationState,s=y(),l=null===c||void 0===c?void 0:c.tokenId,d=null===c||void 0===c||null===(e=c.tokenId)||void 0===e?void 0:e.toString(),j=null===c||void 0===c?void 0:c.collectionAddress,p=Object(u.useMemo)((function(){return l?{tokenId:d,collectionAddress:j,nftLocation:S.e.PROFILE}:null}),[d,j,l]),O=Object(k.a)(d),v=n&&o===S.f.UNINITIALIZED&&a&&!i,g=O!==d&&!i&&n;Object(u.useEffect)((function(){!v&&!g||m()(s)||t(Object(h.e)({account:n,collections:s,profileNftWithCollectionAddress:p}))}),[t,n,v,g,d,s,p])},I=n(13),A=n(7),E=n(2),D=n(20),N=n(3),T=n.n(N),P=n(12),L=n(10),M=n(5),_=n(44),R=n(167),z=Object(R.parseUnits)("1"),q=Object(R.parseUnits)("0.5"),F=["5","6","7","8","9"],U=n(1),W=z.add(q),Y=W.mul(5),X={isInitialized:!1,currentStep:0,teamId:null,selectedNft:{collectionAddress:null,tokenId:null},userName:"",minimumCakeRequired:W,allowance:Y},J=function(e,t){switch(t.type){case"initialize":return Object(M.a)(Object(M.a)({},e),{},{isInitialized:!0,currentStep:t.step});case"next_step":return Object(M.a)(Object(M.a)({},e),{},{currentStep:e.currentStep+1});case"set_team":return Object(M.a)(Object(M.a)({},e),{},{teamId:t.teamId});case"set_selected_nft":return Object(M.a)(Object(M.a)({},e),{},{selectedNft:{tokenId:t.tokenId,collectionAddress:t.collectionAddress}});case"set_username":return Object(M.a)(Object(M.a)({},e),{},{userName:t.userName});default:return e}},K=Object(u.createContext)(null),H=function(e){var t=e.children,n=Object(u.useReducer)(J,X),r=Object(L.a)(n,2),c=r[0],a=r[1],i=Object(b.c)().account;Object(u.useEffect)((function(){var e=!0;return i&&function(){var t=Object(P.a)(T.a.mark((function t(){var n,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(_.c)(),t.next=3,n.canMint(i);case 3:r=t.sent,a({type:"initialize",step:r?0:1}),e&&a({type:"initialize",step:r?0:1});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[i,a]);var o=Object(u.useMemo)((function(){return{nextStep:function(){return a({type:"next_step"})},setTeamId:function(e){return a({type:"set_team",teamId:e})},setSelectedNft:function(e,t){return a({type:"set_selected_nft",tokenId:e,collectionAddress:t})},setUserName:function(e){return a({type:"set_username",userName:e})}}}),[a]);return Object(U.jsx)(K.Provider,{value:Object(M.a)(Object(M.a)({},c),{},{actions:o}),children:t})},G=A.e.div(r||(r=Object(I.a)(["\n  border-bottom: 2px solid ",";\n  margin-top: 32px;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle})),Q=["Get Starter Collectible","Set Profile Picture","Join Team","Set Name"],B=function(){var e=Object(D.b)().t,t=Object(u.useContext)(K).currentStep;return Object(U.jsxs)(G,{children:[Object(U.jsx)(E.cb,{as:"h1",scale:"xxl",color:"secondary",mb:"8px",id:"profile-setup-title",children:e("Profile Setup")}),Object(U.jsx)(E.cb,{as:"h2",scale:"lg",mb:"8px",children:e("Show off your stats and collectibles with your unique profile")}),Object(U.jsx)(E.rc,{color:"textSubtle",mb:"8px",children:e("Total cost: 1.5 CAKE")}),Object(U.jsx)(E.nb,{href:"".concat(g.a,"/profile"),children:Object(U.jsx)(E.t,{mb:"24px",scale:"sm",variant:"secondary",children:e("Back to profile")})}),Object(U.jsx)(E.q,{children:Q.map((function(n,r){return Object(U.jsx)(E.rc,{color:r<=t?"text":"textDisabled",children:e(n)},n)}))})]})},Z=n(180),V=function(){var e=Object(D.b)().t;return Object(U.jsxs)("div",{children:[Object(U.jsx)(E.cb,{scale:"xl",mb:"8px",children:e("Oops!")}),Object(U.jsx)(E.rc,{as:"p",mb:"16px",children:e("Please connect your wallet to continue")}),Object(U.jsx)(Z.a,{})]})},$=n(951),ee=n(80),te=n(140),ne=n(304),re=n(955),ce=n(226),ae=n(76),ie=n(69),oe=["name","value","isChecked","image","onChange","disabled","children"],se=A.e.label(c||(c=Object(I.a)(["\n  cursor: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ",";\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"}),(function(e){return e.isDisabled?"0.6":"1"})),le=A.e.div(a||(a=Object(I.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]))),ue=A.e.div(i||(i=Object(I.a)(["\n  margin-left: 16px;\n"]))),be=A.e.div(o||(o=Object(I.a)(["\n  align-self: stretch;\n  background-image: url('","');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])),(function(e){return e.src})),de=function(e){var t=e.name,n=e.value,r=e.isChecked,c=void 0!==r&&r,a=e.image,i=e.onChange,o=e.disabled,s=e.children,l=Object(ie.a)(e,oe);return Object(U.jsx)(E.w,Object(M.a)(Object(M.a)({isSuccess:c,isDisabled:o,mb:"16px"},l),{},{children:Object(U.jsxs)(se,{isDisabled:o,children:[Object(U.jsxs)(le,{children:[Object(U.jsx)(E.Tb,{name:t,checked:c,value:n,onChange:function(e){return i(e.target.value)},disabled:o,style:{flex:"none"}}),Object(U.jsx)(ue,{children:s})]}),Object(U.jsx)(be,{src:a})]})}))},je=function(e){return Object(U.jsx)(E.t,Object(M.a)({endIcon:Object(U.jsx)(E.f,{color:"currentColor"})},e))},fe=function(){return Object(u.useContext)(K)},pe=function(){var e=Object(u.useState)(""),t=Object(L.a)(e,2),n=t[0],r=t[1],c=Object(u.useState)([]),a=Object(L.a)(c,2),i=a[0],o=a[1],s=fe(),l=s.actions,d=s.minimumCakeRequired,j=s.allowance,f=y(),p=Object(ce.a)().toastSuccess,O=Object(x.b)(),m=Object(b.c)().account,v=Object(ee.d)(),S=Object(ee.b)(),C=Object(D.b)().t,k=Object(te.d)(),w=k.balance,I=k.fetchStatus===te.a.SUCCESS&&w.gte(z),A=Object(ne.a)().callWithGasPrice;Object(u.useEffect)((function(){var e=function(){var e=Object(P.a)(T.a.mark((function e(){var t,n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.m)(g.b);case 2:t=e.sent,n=t.data,r=F.map((function(e){if(n&&n[e])return Object(M.a)(Object(M.a)({},n[e]),{},{bunnyId:e})})),o(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===i.length&&e()}),[i]);var N=Object($.a)({onRequiresApproval:function(){var e=Object(P.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.allowance(m,S.address);case 3:return t=e.sent,e.abrupt("return",t.gte(d));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return A(v,"approve",[S.address,j.toString()])},onConfirm:function(){return A(S,"mintNFT",[n])},onApproveSuccess:function(){p(C("Enabled"),C("Press 'confirm' to mint this NFT"))},onSuccess:function(){p(C("Success"),C("You have minted your starter NFT")),O(Object(h.e)({account:m,collections:f})),l.nextStep()}}),_=N.isApproving,q=N.isApproved,W=N.isConfirmed,Y=N.isConfirming,X=N.handleApprove,J=N.handleConfirm;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(E.rc,{fontSize:"20px",color:"textSubtle",bold:!0,children:C("Step %num%",{num:1})}),Object(U.jsx)(E.cb,{as:"h3",scale:"xl",mb:"24px",children:C("Get Starter Collectible")}),Object(U.jsx)(E.rc,{as:"p",children:C("Every profile starts by making a \u201cstarter\u201d collectible (NFT).")}),Object(U.jsx)(E.rc,{as:"p",children:C("This starter will also become your first profile picture.")}),Object(U.jsx)(E.rc,{as:"p",mb:"24px",children:C("You can change your profile pic later if you get another approved Pancake Collectible.")}),Object(U.jsx)(E.w,{mb:"24px",children:Object(U.jsxs)(E.x,{children:[Object(U.jsx)(E.cb,{as:"h4",scale:"lg",mb:"8px",children:C("Choose your Starter!")}),Object(U.jsx)(E.rc,{as:"p",color:"textSubtle",children:C("Choose wisely: you can only ever make one starter collectible!")}),Object(U.jsx)(E.rc,{as:"p",mb:"24px",color:"textSubtle",children:C("Cost: %num% CAKE",{num:Object(R.formatUnits)(z)})}),i.map((function(e){return Object(U.jsx)(de,{name:"mintStarter",value:null===e||void 0===e?void 0:e.bunnyId,image:null===e||void 0===e?void 0:e.image.thumbnail,isChecked:n===(null===e||void 0===e?void 0:e.bunnyId),onChange:function(e){return r(e)},disabled:_||Y||W||!I,children:Object(U.jsx)(E.rc,{bold:!0,children:null===e||void 0===e?void 0:e.name})},null===e||void 0===e?void 0:e.name)})),!I&&Object(U.jsx)(E.rc,{color:"failure",mb:"16px",children:C("A minimum of %num% CAKE is required",{num:Object(R.formatUnits)(z)})}),Object(U.jsx)(re.b,{isApproveDisabled:null===n||W||Y||q,isApproving:_,isConfirmDisabled:!q||W||!I,isConfirming:Y,onApprove:X,onConfirm:J})]})}),Object(U.jsx)(je,{onClick:l.nextStep,disabled:!W,children:C("Next Step")})]})},Oe=n(106),me=n(41),xe=Object(A.e)(Oe.a)(s||(s=Object(I.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),he=A.e.div(l||(l=Object(I.a)(["\n  margin-bottom: 24px;\n"]))),ve=function(){var e=Object(b.c)().library,t=Object(u.useState)(!1),n=Object(L.a)(t,2),r=n[0],c=n[1],a=Object(u.useState)(!1),i=Object(L.a)(a,2),o=i[0],s=i[1],l=Object(u.useContext)(K),d=l.selectedNft,j=l.actions,f=C(),p=f.nfts,O=f.userNftsInitializationState;w();var m=Object(D.b)().t,x=Object(ce.a)(),h=x.toastError,v=x.toastSuccess,y=Object(ne.a)().callWithGasPrice,k=function(){var t=Object(P.a)(T.a.mark((function t(){var n,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(_.n)(d.collectionAddress,e.getSigner()),t.next=3,y(n,"approve",[Object(me.r)(),d.tokenId]);case 3:return r=t.sent,s(!0),t.next=7,r.wait();case 7:t.sent.status?(v(m("Enabled"),m("Please progress to the next step.")),s(!1),c(!0)):(h(m("Error"),m("Please try again. Confirm the transaction and make sure you are paying enough gas!")),s(!1));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return 0===p.length&&O===S.f.INITIALIZED?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(E.cb,{scale:"xl",mb:"24px",children:m("Oops!")}),Object(U.jsx)(E.rc,{bold:!0,fontSize:"20px",mb:"24px",children:m("We couldn\u2019t find any Pancake Collectibles in your wallet.")}),Object(U.jsx)(E.rc,{as:"p",children:m("You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.")})]}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(E.rc,{fontSize:"20px",color:"textSubtle",bold:!0,children:m("Step %num%",{num:2})}),Object(U.jsx)(E.cb,{as:"h3",scale:"xl",mb:"24px",children:m("Set Profile Picture")}),Object(U.jsx)(E.w,{mb:"24px",children:Object(U.jsxs)(E.x,{children:[Object(U.jsx)(E.cb,{as:"h4",scale:"lg",mb:"8px",children:m("Choose collectible")}),Object(U.jsx)(E.rc,{as:"p",color:"textSubtle",children:m("Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.")}),Object(U.jsxs)(E.rc,{as:"p",color:"textSubtle",mb:"24px",children:[m("Only approved Pancake Collectibles can be used."),Object(U.jsx)(xe,{to:"".concat(g.a,"/collections"),style:{marginLeft:"4px"},children:m("See the list >")})]}),Object(U.jsx)(he,{children:p.filter((function(e){return e.location===S.e.WALLET})).map((function(e){return Object(U.jsx)(de,{name:"profilePicture",value:e.tokenId,image:e.image.thumbnail,isChecked:e.tokenId===d.tokenId,onChange:function(t){return j.setSelectedNft(t,e.collectionAddress)},children:Object(U.jsx)(E.rc,{bold:!0,children:e.name})},"".concat(e.collectionAddress,"#").concat(e.tokenId))}))}),Object(U.jsx)(E.cb,{as:"h4",scale:"lg",mb:"8px",children:m("Allow collectible to be locked")}),Object(U.jsx)(E.rc,{as:"p",color:"textSubtle",mb:"16px",children:m("The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.")}),Object(U.jsx)(E.t,{isLoading:o,disabled:r||o||null===d.tokenId,onClick:k,endIcon:o?Object(U.jsx)(E.i,{spin:!0,color:"currentColor"}):void 0,id:"approveStarterCollectible",children:m("Enable")})]})}),Object(U.jsx)(je,{onClick:j.nextStep,disabled:null===d.tokenId||!r||o,children:m("Next Step")})]})},ge=n(1304),Se=n.n(ge),ye=n(983),Ce=function(){var e=fe(),t=e.teamId,n=e.actions,r=Object(D.b)().t,c=Object(ye.b)().teams,a=function(e){return n.setTeamId(parseInt(e,10))},i=Object(u.useMemo)((function(){return Se()(Object.values(c))}),[c]);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(E.rc,{fontSize:"20px",color:"textSubtle",bold:!0,children:r("Step %num%",{num:3})}),Object(U.jsx)(E.cb,{as:"h3",scale:"xl",mb:"24px",children:r("Join a Team")}),Object(U.jsx)(E.rc,{as:"p",mb:"24px",children:r("It won\u2019t be possible to undo the choice you make for the foreseeable future!")}),Object(U.jsx)(E.w,{mb:"24px",children:Object(U.jsxs)(E.x,{children:[Object(U.jsx)(E.cb,{as:"h4",scale:"lg",mb:"8px",children:r("Join a Team")}),Object(U.jsx)(E.rc,{as:"p",color:"textSubtle",mb:"24px",children:r("There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!")}),i&&i.map((function(e){return Object(U.jsxs)(de,{name:"teams-selection",value:e.id,isChecked:t===e.id,image:"/images/teams/".concat(e.images.md),onChange:a,disabled:!e.isJoinable,children:[Object(U.jsx)(E.rc,{bold:!0,children:e.name}),Object(U.jsxs)(E.ab,{children:[Object(U.jsx)(E.P,{mr:"8px"}),Object(U.jsx)(E.rc,{children:e.users.toLocaleString()})]})]},e.name)}))]})}),Object(U.jsx)(je,{onClick:n.nextStep,disabled:null===t,children:r("Next Step")})]})},ke=n(1006),we=n(21),Ie=n(619),Ae=n(16),Ee=n(620),De=n(621);function Ne(e){Object(Ae.a)(1,arguments);var t=Object(we.default)(e);return Object(Ee.default)(t).getTime()===Object(De.default)(t).getTime()}function Te(e,t){Object(Ae.a)(2,arguments);var n,r=Object(we.default)(e),c=Object(we.default)(t),a=Object(ke.a)(r,c),i=Math.abs(Object(Ie.default)(r,c));if(i<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-a*i);var o=Object(ke.a)(r,c)===-a;Ne(Object(we.default)(e))&&1===i&&1===Object(ke.a)(e,c)&&(o=!1),n=a*(i-Number(o))}return 0===n?0:n}var Pe=n(1064),Le=n(328),Me=n(1030),_e=n(155),Re=1440,ze=43200;function qe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(Ae.a)(2,arguments);var r=n.locale||Le.a;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=Object(ke.a)(e,t);if(isNaN(c))throw new RangeError("Invalid time value");var a,i,o=Object(Me.a)(n);o.addSuffix=Boolean(n.addSuffix),o.comparison=c,c>0?(a=Object(we.default)(t),i=Object(we.default)(e)):(a=Object(we.default)(e),i=Object(we.default)(t));var s,l=Object(Pe.a)(i,a),u=(Object(_e.a)(i)-Object(_e.a)(a))/1e3,b=Math.round((l-u)/60);if(b<2)return n.includeSeconds?l<5?r.formatDistance("lessThanXSeconds",5,o):l<10?r.formatDistance("lessThanXSeconds",10,o):l<20?r.formatDistance("lessThanXSeconds",20,o):l<40?r.formatDistance("halfAMinute",null,o):l<60?r.formatDistance("lessThanXMinutes",1,o):r.formatDistance("xMinutes",1,o):0===b?r.formatDistance("lessThanXMinutes",1,o):r.formatDistance("xMinutes",b,o);if(b<45)return r.formatDistance("xMinutes",b,o);if(b<90)return r.formatDistance("aboutXHours",1,o);if(b<Re){var d=Math.round(b/60);return r.formatDistance("aboutXHours",d,o)}if(b<2520)return r.formatDistance("xDays",1,o);if(b<ze){var j=Math.round(b/Re);return r.formatDistance("xDays",j,o)}if(b<86400)return s=Math.round(b/ze),r.formatDistance("aboutXMonths",s,o);if((s=Te(i,a))<12){var f=Math.round(b/ze);return r.formatDistance("xMonths",f,o)}var p=s%12,O=Math.floor(s/12);return p<3?r.formatDistance("aboutXYears",O,o):p<9?r.formatDistance("overXYears",O,o):r.formatDistance("almostXYears",O+1,o)}var Fe,Ue,We,Ye,Xe=n(869),Je=n(53),Ke=n(171),He=["timeout"],Ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.timeout,r=void 0===n?1e4:n,c=Object(ie.a)(t,He);return Promise.race([fetch(e,c),new Promise((function(t,n){setTimeout((function(){n(new Error("Request for ".concat(e," timed out after ").concat(r," milliseconds")))}),r)}))])},Qe=n(22),Be=n(144),Ze=n(206),Ve=function(e){var t=e.account,n=e.teamId,r=e.selectedNft,c=e.minimumCakeRequired,a=e.allowance,i=e.onDismiss,o=Object(D.b)().t,s=Object(ee.p)(),l=Object(x.b)(),u=Object(ce.a)().toastSuccess,b=Object(ee.d)(),d=Object(ne.a)().callWithGasPrice,j=Object($.a)({onRequiresApproval:function(){var e=Object(P.a)(T.a.mark((function e(){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.allowance(t,s.address);case 3:return n=e.sent,e.abrupt("return",n.gte(c));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return d(b,"approve",[s.address,a.toJSON()])},onConfirm:function(){return d(s,"createProfile",[n,r.collectionAddress,r.tokenId])},onSuccess:function(){var e=Object(P.a)(T.a.mark((function e(n){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.receipt,e.next=3,l(Object(Be.b)(t));case 3:i(),u(o("Profile created!"),Object(U.jsx)(Ze.b,{txHash:r.transactionHash}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),f=j.isApproving,p=j.isApproved,O=j.isConfirmed,m=j.isConfirming,h=j.handleApprove,v=j.handleConfirm;return Object(U.jsxs)(E.zb,{title:o("Complete Profile"),onDismiss:i,children:[Object(U.jsx)(E.rc,{color:"textSubtle",mb:"8px",children:o("Submitting NFT to contract and confirming User Name and Team.")}),Object(U.jsxs)(E.ab,{justifyContent:"space-between",mb:"16px",children:[Object(U.jsx)(E.rc,{children:o("Cost")}),Object(U.jsx)(E.rc,{children:o("%num% CAKE",{num:Object(R.formatUnits)(q)})})]}),Object(U.jsx)(re.b,{isApproveDisabled:O||m||p,isApproving:f,isConfirmDisabled:!p||O,isConfirming:m,onApprove:h,onConfirm:v})]})},$e=n(154);!function(e){e.IDLE="idle",e.CREATED="created",e.NEW="new"}(Ye||(Ye={}));var et=A.e.div(Fe||(Fe=Object(I.a)(["\n  position: relative;\n  max-width: 240px;\n"]))),tt=Object(A.e)(E.ib)(Ue||(Ue=Object(I.a)(["\n  padding-right: 40px;\n"]))),nt=Object(A.e)(E.ab)(We||(We=Object(I.a)(["\n  align-items: center;\n  height: 24px;\n  justify-content: center;\n  margin-top: -12px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  width: 24px;\n"]))),rt=function(){var e=Object(u.useState)(!1),t=Object(L.a)(e,2),n=t[0],r=t[1],c=fe(),a=c.teamId,i=c.selectedNft,o=c.userName,s=c.actions,l=c.minimumCakeRequired,d=c.allowance,j=Object(D.b)().t,f=Object(b.c)().account,p=Object(ce.a)().toastError,O=Object(Qe.a)().library,m=Object(u.useState)(Ye.IDLE),x=Object(L.a)(m,2),h=x[0],v=x[1],g=Object(u.useState)(!1),S=Object(L.a)(g,2),y=S[0],C=S[1],k=Object(u.useState)(!1),w=Object(L.a)(k,2),I=w[0],A=w[1],N=Object(u.useState)(""),M=Object(L.a)(N,2),_=M[0],z=M[1],F=Object(u.useRef)(null),W=Object(te.d)(),Y=W.balance,X=W.fetchStatus===te.a.SUCCESS&&Y.gte(q),J=Object(E.Tc)(Object(U.jsx)(Ve,{userName:o,selectedNft:i,account:f,teamId:a,minimumCakeRequired:l,allowance:d}),!1),K=Object(L.a)(J,1)[0],H=h===Ye.CREATED,G=Object(u.useState)(void 0),Q=Object(L.a)(G,2),B=Q[0],Z=Q[1],V=Object($e.a)(B,200);Object(u.useEffect)((function(){var e=function(){var e=Object(P.a)(T.a.mark((function e(t){var n,r,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,A(!0),V){e.next=8;break}C(!1),z(""),F.current=null,e.next=22;break;case 8:return e.next=10,Ge("".concat(Je.b,"/api/users/valid/").concat(V),{method:"get",signal:t,timeout:3e4});case 10:if(n=e.sent,F.current=null,!n.ok){e.next=17;break}C(!0),z(""),e.next=22;break;case 17:return e.next=19,n.json();case 19:c=e.sent,C(!1),z(null===c||void 0===c||null===(r=c.error)||void 0===r?void 0:r.message);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(0),C(!1),"AbortError"!==e.t0.name&&(z(j("Error fetching data")),console.error(e.t0));case 28:return e.prev=28,A(!1),e.finish(28);case 31:case"end":return e.stop()}}),e,null,[[0,24,28,31]])})));return function(t){return e.apply(this,arguments)}}();F.current&&F.current.abort(),F.current=new AbortController,e(F.current.signal)}),[V,j]);var $=function(){var e=Object(P.a)(T.a.mark((function e(){var t,n,r,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,Object(Ke.c)(O,f,o);case 4:return t=e.sent,e.next=7,fetch("".concat(Je.b,"/api/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:f,username:o,signature:t})});case 7:if(!(n=e.sent).ok){e.next=12;break}v(Ye.CREATED),e.next=16;break;case 12:return e.next=14,n.json();case 14:c=e.sent,p(j("Error"),null===c||void 0===c||null===(r=c.error)||void 0===r?void 0:r.message);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),p((null===e.t0||void 0===e.t0?void 0:e.t0.message)?e.t0.message:JSON.stringify(e.t0));case 21:return e.prev=21,A(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){f&&function(){var e=Object(P.a)(T.a.mark((function e(){var t,n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(Je.b,"/api/users/").concat(f));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,t.ok?(r=qe(Object(Xe.default)(n.created_at),new Date),z(j("Created %dateCreated% ago",{dateCreated:r})),s.setUserName(n.username),v(Ye.CREATED),C(!0)):v(Ye.NEW),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),p(j("Error"),j("Unable to verify username"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[f,v,C,z,s,p,j]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(E.rc,{fontSize:"20px",color:"textSubtle",bold:!0,children:j("Step %num%",{num:4})}),Object(U.jsx)(E.cb,{as:"h3",scale:"xl",mb:"24px",children:j("Set Your Name")}),Object(U.jsx)(E.rc,{as:"p",mb:"24px",children:j("This name will be shown in team leaderboards and search results as long as your profile is active.")}),Object(U.jsx)(E.w,{mb:"24px",children:Object(U.jsxs)(E.x,{children:[Object(U.jsx)(E.cb,{as:"h4",scale:"lg",mb:"8px",children:j("Set Your Name")}),Object(U.jsx)(E.rc,{as:"p",color:"textSubtle",mb:"24px",children:j("Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.")}),h===Ye.IDLE?Object(U.jsx)(E.Zb,{height:"40px",width:"240px"}):Object(U.jsxs)(et,{children:[Object(U.jsx)(tt,{onChange:function(e){var t=e.target.value;s.setUserName(t),Z(t)},isWarning:o&&!y,isSuccess:o&&y,minLength:3,maxLength:15,disabled:H,placeholder:j("Enter your name..."),value:o}),Object(U.jsxs)(nt,{children:[I&&Object(U.jsx)(E.i,{spin:!0}),!I&&y&&o&&Object(U.jsx)(E.H,{color:"success"}),!I&&!y&&o&&Object(U.jsx)(E.Kc,{color:"failure"})]})]}),Object(U.jsx)(E.rc,{color:"textSubtle",fontSize:"14px",py:"4px",mb:"16px",style:{minHeight:"30px"},children:_}),Object(U.jsx)(E.rc,{as:"p",color:"failure",mb:"8px",children:j("Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.")}),Object(U.jsx)("label",{htmlFor:"checkbox",style:{display:"block",cursor:"pointer",marginBottom:"24px"},children:Object(U.jsxs)(E.ab,{alignItems:"center",children:[Object(U.jsx)("div",{style:{flex:"none"},children:Object(U.jsx)(E.E,{id:"checkbox",scale:"sm",checked:n,onChange:function(){return r(!n)}})}),Object(U.jsx)(E.rc,{ml:"8px",children:j("I understand that people can view my wallet if they know my username")})]})}),Object(U.jsx)(E.t,{onClick:$,disabled:!y||H||I||!n,children:j("Confirm")})]})}),Object(U.jsx)(E.t,{onClick:K,disabled:!y||!H,id:"completeProfileCreation",children:j("Complete Profile")}),!X&&Object(U.jsx)(E.rc,{color:"failure",mt:"16px",children:j("A minimum of %num% CAKE is required",{num:Object(R.formatUnits)(q)})})]})},ct=function(){var e=Object(D.b)().t,t=Object(u.useContext)(K),n=t.isInitialized,r=t.currentStep;return Object(b.c)().account?n?0===r?Object(U.jsx)(pe,{}):1===r?Object(U.jsx)(ve,{}):2===r?Object(U.jsx)(Ce,{}):3===r?Object(U.jsx)(rt,{}):null:Object(U.jsx)("div",{children:e("Loading...")}):Object(U.jsx)(V,{})};t.default=function(){var e=Object(b.c)().account,t=Object(f.c)(),n=t.isInitialized,r=t.isLoading,c=t.hasProfile;return w(),function(){var e=Object(x.b)();Object(u.useEffect)((function(){e(Object(h.c)())}),[e])}(),!n||r?Object(U.jsx)(p.a,{}):e&&c?Object(U.jsx)(d.a,{to:"".concat(g.a,"/profile/").concat(e.toLowerCase())}):Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(H,{children:Object(U.jsxs)(j.b,{children:[Object(U.jsx)(B,{}),Object(U.jsx)(ct,{})]})})})}},951:function(e,t,n){"use strict";var r=n(3),c=n.n(r),a=n(12),i=n(10),o=n(5),s=n(0),l=n(108),u=n(84),b=n(226),d=n(20),j={approvalState:"idle",confirmState:"idle"},f=function(e,t){switch(t.type){case"requires_approval":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"success"});case"approve_sending":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"loading"});case"approve_receipt":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"success"});case"approve_error":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"fail"});case"confirm_sending":return Object(o.a)(Object(o.a)({},e),{},{confirmState:"loading"});case"confirm_receipt":return Object(o.a)(Object(o.a)({},e),{},{confirmState:"success"});case"confirm_error":return Object(o.a)(Object(o.a)({},e),{},{confirmState:"fail"});default:return e}};t.a=function(e){var t=e.onApprove,n=e.onConfirm,r=e.onRequiresApproval,o=e.onSuccess,p=void 0===o?l.noop:o,O=e.onApproveSuccess,m=void 0===O?l.noop:O,x=Object(d.b)().t,h=Object(u.c)().account,v=Object(s.useReducer)(f,j),g=Object(i.a)(v,2),S=g[0],y=g[1],C=Object(s.useRef)(r),k=Object(b.a)().toastError;return Object(s.useEffect)((function(){h&&C.current&&C.current().then((function(e){e&&y({type:"requires_approval"})}))}),[h,C,y]),{isApproving:"loading"===S.approvalState,isApproved:"success"===S.approvalState,isConfirming:"loading"===S.confirmState,isConfirmed:"success"===S.confirmState,hasApproveFailed:"fail"===S.approvalState,hasConfirmFailed:"fail"===S.confirmState,handleApprove:function(){var e=Object(a.a)(c.a.mark((function e(){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,y({type:"approve_sending"}),e.next=7,n.wait();case 7:(r=e.sent).status&&(y({type:"approve_receipt"}),m({state:S,receipt:r})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),y({type:"approve_error"}),k(x("Error"),x("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),handleConfirm:function(){var e=Object(a.a)(c.a.mark((function e(){var t,r,a,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},y({type:"confirm_sending"}),e.prev=2,e.next=5,n(t);case 5:return r=e.sent,e.next=8,r.wait();case 8:(a=e.sent).status&&(y({type:"confirm_receipt"}),p({state:S,receipt:a})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),y({type:"confirm_error"}),k(x("Error"),x("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}()}}},955:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r,c,a,i,o,s=n(13),l=(n(0),n(7)),u=n(2),b=n(20),d=n(1);!function(e){e.ROW="row",e.SEQUENTIAL="sequential"}(o||(o={}));var j=l.e.div(r||(r=Object(s.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),f=Object(l.e)(u.t)(c||(c=Object(s.a)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),p={width:"24px",color:"textDisabled"},O=Object(l.e)(u.K).attrs(p)(a||(a=Object(s.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),m=Object(l.e)(u.I).attrs(p)(i||(i=Object(s.a)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),x=Object(d.jsx)(u.i,{spin:!0,color:"currentColor"});t.b=function(e){var t=e.isApproveDisabled,n=e.isApproving,r=e.isConfirming,c=e.isConfirmDisabled,a=e.onApprove,i=e.onConfirm,s=e.buttonArrangement,l=void 0===s?o.ROW:s,p=e.confirmLabel,h=e.confirmId,v=Object(b.b)().t,g=null!==p&&void 0!==p?p:v("Confirm");return l===o.ROW?Object(d.jsxs)(j,{children:[Object(d.jsx)(u.p,{children:Object(d.jsx)(f,{disabled:t,onClick:a,endIcon:n?x:void 0,isLoading:n,children:v(n?"Enabling":"Enable")})}),Object(d.jsxs)(u.ab,{justifyContent:"center",children:[Object(d.jsx)(O,{}),Object(d.jsx)(m,{})]}),Object(d.jsx)(u.p,{children:Object(d.jsx)(f,{id:h,onClick:i,disabled:c,isLoading:r,endIcon:r?x:void 0,children:r?v("Confirming"):g})})]}):Object(d.jsx)(d.Fragment,{children:t?Object(d.jsx)(u.p,{children:Object(d.jsx)(f,{id:h,onClick:i,disabled:c,isLoading:r,endIcon:r?x:void 0,children:r?v("Confirming"):g})}):Object(d.jsx)(u.p,{children:Object(d.jsx)(f,{onClick:a,endIcon:n?x:void 0,isLoading:n,children:v(n?"Enabling":"Enable")})})})}},956:function(e,t,n){"use strict";var r,c=n(13),a=(n(0),n(7)),i=n(2),o=n(301),s=n(1),l=Object(a.e)(o.b)(r||(r=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));t.a=function(){return Object(s.jsx)(l,{children:Object(s.jsx)(i.cc,{})})}},983:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(0),c=n(27),a=n(116),i=n(463),o=function(e){var t=Object(c.c)((function(t){return t.teams.data[e]})),n=Object(a.b)();return Object(r.useEffect)((function(){n(Object(i.b)(e))}),[e,n]),t},s=function(){var e=Object(c.c)((function(e){return e.teams})),t=e.isInitialized,n=e.isLoading,o=e.data,s=Object(a.b)();return Object(r.useEffect)((function(){s(Object(i.c)())}),[s]),{teams:o,isInitialized:t,isLoading:n}}},998:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(21),c=n(16);function a(e,t){Object(c.a)(2,arguments);var n=Object(r.default)(e),a=Object(r.default)(t);return n.getTime()-a.getTime()}}}]);