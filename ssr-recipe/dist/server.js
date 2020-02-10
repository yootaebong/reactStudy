!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=14)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){e.exports=r(11)},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("regenerator-runtime")},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t,r){"use strict";r.r(t);var n=r(2),u=r.n(n);function o(e,t,r,n,u,o,c){try{var a=e[o](c),i=a.value}catch(e){return void r(e)}a.done?t(i):Promise.resolve(i).then(n,u)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,u){var c=e.apply(t,r);function a(e){o(c,n,u,a,i,"next",e)}function i(e){o(c,n,u,a,i,"throw",e)}a(void 0)}))}}var a=r(0),i=r.n(a),s=r(6),l=r.n(s),f=r(7),p=r.n(f),d=r(1),m=function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/red"},"RED")),i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/blue"},"BLUE")),i.a.createElement("li",null,i.a.createElement(d.Link,{to:"/users"},"Users")))},v=(r(12),function(){return i.a.createElement("div",{className:"Red"},"RED")}),E=function(){return i.a.createElement(v,null)},b=(r(13),function(){return i.a.createElement("div",{className:"Blue"},"BLUE")}),y=function(){return i.a.createElement(b,null)},h=function(e){var t=e.users;return t?i.a.createElement("div",null,i.a.createElement("ul",null,t.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.username))})))):null},x=r(4);function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=r(5),P=r.n(j),_=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},w={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/GET_USERS_PENDING":return S({},e,{loading:S({},e.loading,{users:!0})});case"users/GET_USERS_SUCCESS":return S({},e,{loading:S({},e.loading,{users:!1}),users:t.payload.data});case"users/GET_USERS_FAILURE":return S({},e,{loading:S({},e.loading,{users:!1}),error:S({},e.error,{users:t.payload})});default:return e}},k=Object(a.createContext)(null),U=k,T=function(e){var t=e.resolve,r=Object(a.useContext)(k);return r?r.done?null:(r.promise.pussh(Promise.resolve(t())),null):null},q=i.a.useEffect,D=Object(x.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=c(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"users/GET_USERS_PENDING"}),e.next=4,P.a.get("https://jsonplaceholder.typicode.com/users");case 4:r=e.sent,t({type:"users/GET_USERS_SUCCESS",payload:r}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),t(_(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.users,r=e.getUsers;return q((function(){t||r()}),[r,t]),i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{users:t}),";",i.a.createElement(T,{resolve:r}))})),L=function(){return i.a.createElement(D,null)},G=function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement("hr",null),i.a.createElement(d.Route,{path:"/red",component:E}),i.a.createElement(d.Route,{path:"/blue",component:y}),i.a.createElement(d.Route,{path:"/users",component:L}))},N=r(8),C=r.n(N),M=r(9),A=r.n(M),F=r(3),I=r(10),B=r.n(I),J=Object(F.combineReducers)({users:R}),Y=JSON.parse(A.a.readFileSync(C.a.resolve("./build/asset-manifest.json"),"utf8")),$=Object.keys(Y.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(Y.files[e],'"><\/script>')})).join("");function z(e,t){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="utf-8"/>\n        <link rel="shortcut icon" href="/favicon.ico" />\n        <meta\n            name="viewport"\n            content="width=device-width,initial-scale=1,shrink-to-fit=no"\n        />\n        <meta name="theme-color" content="#000000" />\n        <title>React App</title>\n        <link href="'.concat(Y.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n        <noscript> js run! </noscript>\n        <div id="root">\n            ').concat(e,"\n        </div>\n        ").concat(t,'\n        <script src="').concat(Y.files["runtime-main.js"],'"><\/script>\n        ').concat($,'\n        <script src="').concat(Y.files["main.js"],'"><\/script>\n    <body>\n    </html>\n    ')}var H=p()(),K=function(){var e=c(u.a.mark((function e(t,r,n){var o,c,a,s,f,p,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},c=Object(F.createStore)(J,Object(F.applyMiddleware)(B.a)),a={done:!1,premises:[]},s=i.a.createElement(U.Provider,{value:a},i.a.createElement(x.Provider,{store:c},i.a.createElement(d.StaticRouter,{location:t.url,context:o},i.a.createElement(G,null)))),l.a.renderToStaticMarkup(s),e.prev=5,e.next=8,Promise.all(a.premises);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",r.status(500));case 13:a.done=!0,f=l.a.renderToString(s),p=JSON.stringify(c.getState()).replace(/</g,"\\u003c"),m="<script>__PRELOADED_STATE__=".concat(p,"<\/script>"),r.send(z(f,m));case 18:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,r,n){return e.apply(this,arguments)}}(),Q=p.a.static(C.a.resolve("./build"),{index:!1});H.use(Q),H.use(K),H.listen(5e3,(function(){console.log("Running 5000")}))}]);