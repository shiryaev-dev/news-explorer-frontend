!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=99)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(62))},function(t,e,n){var r=n(0),o=n(10),i=n(26),c=n(51),u=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"d",(function(){return a})),n.d(e,"l",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"k",(function(){return l})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return d})),n.d(e,"i",(function(){return h})),n.d(e,"a",(function(){return v}));var r={authButton:document.querySelector(".header__nav-item-button_auth"),userButton:document.querySelector(".header__nav-item-button_in"),savedLink:document.querySelector(".header__nav-item_saved"),userName:document.querySelector(".header__nav-item-button_user")},o="https://api.newsexplorer.ml",i={signin:"".concat(o,"/signin"),signup:"".concat(o,"/signup"),logout:"".concat(o,"/logout"),getArticles:"".concat(o,"/articles"),createArticle:"".concat(o,"/articles"),deleteArticle:"".concat(o,"/articles"),getUser:"".concat(o,"/users/me")},c={apiKey:"8c1a343df6694b69bbe74298bcea01a3",pageSize:"10",url:"https://praktikum.tk/news/v2/everything?"},u={popupWindow:document.querySelector(".popup__registration"),closeButton:".popup__close",openButton:document.querySelector(".header__nav-item-button_auth"),actionButton:".popup__form-button",nameForm:".popup__form",errorEmail:".popup__input-error_email",errorPass:".popup__input-error_password",errorName:".popup__input-error_name",errorServer:".popup__error-from-server",emailInput:".popup__input_email",passInput:".popup__input_password",nameInput:".popup__input_name",buttonEnter:document.querySelector(".popup__link_enter"),popupWindowLogin:document.querySelector(".popup__login")},a={popupWindow:document.querySelector(".popup__login"),closeButton:".popup__close",actionButton:".popup__form-button",nameForm:".popup__form",errorEmail:".popup__input-error_email",errorPass:".popup__input-error_password",errorServer:".popup__error-from-server",emailInput:".popup__input_email",passInput:".popup__input_password",buttonReg:document.querySelector(".popup__link_reg"),buttonEnter:document.querySelector(".popup__link_enter"),popupWindowRegistration:document.querySelector(".popup__registration")},s={popupWindow:document.querySelector(".popup__success"),closeButton:".popup__close",buttonEnter:document.querySelector(".popup__link_success-registration")},f={exitButton:document.querySelector(".header__nav-item-button_in")},l={form:document.querySelector(".header__form"),inputSearch:document.querySelector(".header__form-input"),resultsBlock:document.querySelector(".results"),searchBlock:document.querySelector(".preloader__message_search"),notFoundBlock:document.querySelector(".preloader__message_not-found"),errorServerBlock:document.querySelector(".preloader__message_error"),resultsContainer:document.querySelector(".results__container"),showMoreButton:document.querySelector(".results__button"),searchButton:document.querySelector(".header__search-button"),errorInput:document.querySelector(".header__search-input-error")},p={resultsContainer:document.querySelector(".results__container"),templateNotLoggedIn:"#news-card-not-logged-in",templateLoggedIn:"#news-card-logged-in",numberOfCards:3,dummyImage:"https://dummyimage.com/600x400/fff/000.jpg&text=%D0%9D%D0%B5%D1%82+%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F"},d={resultsContainer:document.querySelector(".saved-results__container"),template:"#news-card-saved"},h={resultsContainer:document.querySelector(".saved-results__container"),nameString:document.querySelector(".header-save__info"),keyWordString:document.querySelector(".header-save__word"),keyWordTitle:document.querySelector(".header-save__keywords")},v={textName:"Имя должно быть написано с заглавной буквы кириллицей от 2 до 30 символов",textPass:"Минимум 8 символов",textEmail:"Здесь должен быть email",textRequired:"Это обязательное поле"}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(7),o=n(33),i=n(5),c=n(24),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22),o=n(66);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(7),o=n(9),i=n(25);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(57),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(0),o=n(10),i=n(11),c=n(6),u=n(20),a=n(34),s=n(27),f=s.get,l=s.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,e,n,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(a?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=n:i(t,e,n)):s?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a.call(this)}))},function(t,e,n){var r=n(0),o=n(63),i=n(64),c=n(11);for(var u in o){var a=r[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,n){var r=n(29),o=n(31);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(7),o=n(55),i=n(25),c=n(16),u=n(24),a=n(6),s=n(33),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(13);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(32),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0),o=n(11);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports={}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r,o,i,c=n(67),u=n(0),a=n(4),s=n(11),f=n(6),l=n(35),p=n(21),d=u.WeakMap;if(c){var h=new d,v=h.get,m=h.has,g=h.set;r=function(t,e){return g.call(h,t,e),e},o=function(t){return v.call(h,t)||{}},i=function(t){return m.call(h,t)}}else{var y=l("state");p[y]=!0,r=function(t,e){return s(t,y,e),e},o=function(t){return f(t,y)?t[y]:{}},i=function(t){return f(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(17).f,i=n(11),c=n(14),u=n(20),a=n(56),s=n(39);t.exports=function(t,e){var n,f,l,p,d,h=t.target,v=t.global,m=t.stat;if(n=v?r:m?r[h]||u(h,{}):(r[h]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(v?f:h+(m?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){var r=n(3),o=n(8),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(31);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(7),o=n(3),i=n(23);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(10);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r=n(10),o=n(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(8),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(58),o=n(38).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(3),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e){t.exports={}},function(t,e,n){var r,o,i,c=n(0),u=n(3),a=n(8),s=n(18),f=n(61),l=n(23),p=n(42),d=c.location,h=c.setImmediate,v=c.clearImmediate,m=c.process,g=c.MessageChannel,y=c.Dispatch,_=0,S={},x=function(t){if(S.hasOwnProperty(t)){var e=S[t];delete S[t],e()}},w=function(t){return function(){x(t)}},b=function(t){x(t.data)},j=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};h&&v||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return S[++_]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(_),_},v=function(t){delete S[t]},"process"==a(m)?r=function(t){m.nextTick(w(t))}:y&&y.now?r=function(t){y.now(w(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=b,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(j)?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),x(t)}}:function(t){setTimeout(w(t),0)}:(r=j,c.addEventListener("message",b,!1))),t.exports={set:h,clear:v}},function(t,e,n){var r=n(43);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(12);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(13),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{login(t){localStorage.setItem("authorization","true"),localStorage.setItem("name",t)}logout(){localStorage.clear()}isLoggedIn(){return"true"===localStorage.getItem("authorization")}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t){var e=t.authButton,n=t.userButton,r=t.savedLink,o=t.userName;this.authButton=e,this.userButton=n,this.savedLink=r,this.userName=o}setLogin(t){this.authButton.classList.add("header__nav-item-button_hide"),this.userButton.classList.remove("header__nav-item-button_hide"),this.savedLink.classList.remove("header__nav-item_hide"),this.userName.textContent=t}setUnauthorized(){this.authButton.classList.remove("header__nav-item-button_hide"),this.userButton.classList.add("header__nav-item-button_hide"),this.savedLink.classList.add("header__nav-item_hide")}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(53),n(54);class r{constructor(t){this.options=t}_getResponseData(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}signup(t,e,n){return fetch(this.options.signup,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e,name:n})}).then(this._getResponseData)}signin(t,e){return fetch(this.options.signin,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})}).then(this._getResponseData)}logout(){return fetch(this.options.logout,{method:"POST",credentials:"include"}).then(this._getResponseData)}createArticle(t){return fetch(this.options.createArticle,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:t.keyword,title:t.title,text:t.text,date:t.date,source:t.source,link:t.link,image:t.image})}).then(this._getResponseData)}getArticles(){return fetch(this.options.getArticles,{method:"GET",credentials:"include"}).then(this._getResponseData)}removeArticle(t){return fetch("".concat(this.options.deleteArticle,"/").concat(t),{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"}}).then(this._getResponseData)}getUserData(){return fetch(this.options.getUser,{method:"GET",credentials:"include"}).then(this._getResponseData)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t,e,n,r){var o=t.exitButton;this.exitButton=o,this.header=e,this.auth=n,this.mainApi=r,this._setHandlers()}_exit(t){t.preventDefault(),this.mainApi.logout().then(()=>{this.auth.logout(),this.header.setUnauthorized(),"/"!==window.location.pathname&&(window.location.pathname="/")}).catch(t=>console.log(t))}_setHandlers(){this.exitButton.addEventListener("click",this._exit.bind(this))}}},function(t,e,n){var r=n(18),o=n(29),i=n(30),c=n(19),u=n(65),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,h,v,m){for(var g,y,_=i(d),S=o(_),x=r(h,v,3),w=c(S.length),b=0,j=m||u,k=e?j(d,w):n?j(d,0):void 0;w>b;b++)if((p||b in S)&&(y=x(g=S[b],b,_),t))if(e)k[b]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return b;case 2:a.call(k,g)}else if(f)return!1;return l?-1:s||f?f:k}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(8);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r=n(3);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(14),o=n(68),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,e,n){"use strict";var r,o,i,c,u=n(28),a=n(22),s=n(0),f=n(12),l=n(72),p=n(14),d=n(73),h=n(10),v=n(60),m=n(74),g=n(4),y=n(13),_=n(75),S=n(8),x=n(76),w=n(80),b=n(81),j=n(41).set,k=n(82),L=n(83),C=n(84),E=n(44),T=n(85),O=n(27),q=n(39),B=n(1),P=n(86),D=B("species"),A="Promise",M=O.get,I=O.set,N=O.getterFor(A),W=l,R=s.TypeError,F=s.document,z=s.process,U=h("inspectSource"),G=f("fetch"),V=E.f,H=V,K="process"==S(z),J=!!(F&&F.createEvent&&s.dispatchEvent),Y=q(A,(function(){var t=U(W)!==String(W);if(66===P)return!0;if(!t&&!K&&"function"!=typeof PromiseRejectionEvent)return!0;if(a&&!W.prototype.finally)return!0;if(P>=51&&/native code/.test(W))return!1;var e=W.resolve(1),n=function(t){t((function(){}),(function(){}))};return(e.constructor={})[D]=n,!(e.then((function(){}))instanceof n)})),Q=Y||!w((function(t){W.all(t).catch((function(){}))})),X=function(t){var e;return!(!g(t)||"function"!=typeof(e=t.then))&&e},Z=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;k((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var u,a,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,d=f.reject,h=f.domain;try{l?(i||(2===e.rejection&&nt(t,e),e.rejection=1),!0===l?u=o:(h&&h.enter(),u=l(o),h&&(h.exit(),s=!0)),u===f.promise?d(R("Promise-chain cycle")):(a=X(u))?a.call(u,p,d):p(u)):d(o)}catch(t){h&&!s&&h.exit(),d(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&tt(t,e)}))}},$=function(t,e,n){var r,o;J?((r=F.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):"unhandledrejection"===t&&C("Unhandled promise rejection",n)},tt=function(t,e){j.call(s,(function(){var n,r=e.value;if(et(e)&&(n=T((function(){K?z.emit("unhandledRejection",r,t):$("unhandledrejection",t,r)})),e.rejection=K||et(e)?2:1,n.error))throw n.value}))},et=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,e){j.call(s,(function(){K?z.emit("rejectionHandled",t):$("rejectionhandled",t,e.value)}))},rt=function(t,e,n,r){return function(o){t(e,n,o,r)}},ot=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Z(t,e,!0))},it=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw R("Promise can't be resolved itself");var o=X(n);o?k((function(){var r={done:!1};try{o.call(n,rt(it,t,r,e),rt(ot,t,r,e))}catch(n){ot(t,r,n,e)}})):(e.value=n,e.state=1,Z(t,e,!1))}catch(n){ot(t,{done:!1},n,e)}}};Y&&(W=function(t){_(this,W,A),y(t),r.call(this);var e=M(this);try{t(rt(it,this,e),rt(ot,this,e))}catch(t){ot(this,e,t)}},(r=function(t){I(this,{type:A,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(W.prototype,{then:function(t,e){var n=N(this),r=V(b(this,W));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=K?z.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&Z(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=M(t);this.promise=t,this.resolve=rt(it,t,e),this.reject=rt(ot,t,e)},E.f=V=function(t){return t===W||t===i?new o(t):H(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new W((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof G&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return L(W,G.apply(s,arguments))}}))),u({global:!0,wrap:!0,forced:Y},{Promise:W}),v(W,A,!1,!0),m(A),i=f(A),u({target:A,stat:!0,forced:Y},{reject:function(t){var e=V(this);return e.reject.call(void 0,t),e.promise}}),u({target:A,stat:!0,forced:a||Y},{resolve:function(t){return L(a&&this===i?W:this,t)}}),u({target:A,stat:!0,forced:Q},{all:function(t){var e=this,n=V(e),r=n.resolve,o=n.reject,i=T((function(){var n=y(e.resolve),i=[],c=0,u=1;x(t,(function(t){var a=c++,s=!1;i.push(void 0),u++,n.call(e,t).then((function(t){s||(s=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=V(e),r=n.reject,o=T((function(){var o=y(e.resolve);x(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(6),o=n(69),i=n(17),c=n(9);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||u(t,f,a(e,f))}}},function(t,e,n){t.exports=n(0)},function(t,e,n){var r=n(6),o=n(16),i=n(70).indexOf,c=n(21);t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)!r(c,n)&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(9).f,o=n(6),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(12);t.exports=r("document","documentElement")},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(49).forEach,o=n(52);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(4),o=n(50),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(0),o=n(20),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(34),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){"use strict";var r=n(36),o={};o[n(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,e,n){var r=n(12),o=n(37),i=n(59),c=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(16),o=n(19),i=n(71),c=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(32),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(14);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(12),o=n(9),i=n(1),c=n(7),u=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(5),o=n(77),i=n(19),c=n(18),u=n(78),a=n(79),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,f,l){var p,d,h,v,m,g,y,_=c(e,n,f?2:1);if(l)p=t;else{if("function"!=typeof(d=u(t)))throw TypeError("Target is not iterable");if(o(d)){for(h=0,v=i(t.length);v>h;h++)if((m=f?_(r(y=t[h])[0],y[1]):_(t[h]))&&m instanceof s)return m;return new s(!1)}p=d.call(t)}for(g=p.next;!(y=g.call(p)).done;)if("object"==typeof(m=a(p,_,y.value,f))&&m&&m instanceof s)return m;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,e,n){var r=n(1),o=n(40),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(36),o=n(40),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(5),o=n(13),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c,u,a,s,f,l=n(0),p=n(17).f,d=n(8),h=n(41).set,v=n(42),m=l.MutationObserver||l.WebKitMutationObserver,g=l.process,y=l.Promise,_="process"==d(g),S=p(l,"queueMicrotask"),x=S&&S.value;x||(r=function(){var t,e;for(_&&(t=g.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},_?c=function(){g.nextTick(r)}:m&&!v?(u=!0,a=document.createTextNode(""),new m(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):y&&y.resolve?(s=y.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){h.call(l,r)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(5),o=n(4),i=n(44);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r,o,i=n(0),c=n(43),u=i.process,a=u&&u.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},,,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";var r=n(28),o=n(13),i=n(30),c=n(3),u=n(52),a=[],s=a.sort,f=c((function(){a.sort(void 0)})),l=c((function(){a.sort(null)})),p=u("sort");r({target:"Array",proto:!0,forced:f||!l||p},{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),o(t))}})},,function(t,e,n){"use strict";n.r(e);n(96);var r=n(2),o=n(46),i=n(45),c=n(48);n(15);var u=n(47);n(97);var a=new u.a(r.e),s=new o.a(r.c),f=new i.a,l=new class{constructor(t){var e=t.resultsContainer,n=t.nameString,r=t.keyWordString,o=t.keyWordTitle;this.arrKey=[],this.resultsContainer=e,this.nameString=n,this.keyWordString=r,this.keyWordTitle=o}addUserBlock(t){0===t.length?(this.keyWordTitle.style.display="none",this.nameString.textContent="".concat(localStorage.getItem("name"),", у вас нет сохраненных статей")):1===t.length?this.nameString.textContent="".concat(localStorage.getItem("name"),", у вас ").concat(t.length," сохраненная статья"):t.length>1&&t.length<5?this.nameString.textContent="".concat(localStorage.getItem("name"),", у вас ").concat(t.length," сохраненные статьи"):this.nameString.textContent="".concat(localStorage.getItem("name"),", у вас ").concat(t.length," сохраненных статей")}keyWord(t){this.arrKey=t.map(t=>t.keyword);var e={};this.arrKey.forEach(t=>{e[t]?e[t]+=1:e[t]=1});var n=Object.keys(e).sort((t,n)=>e[n]-e[t]);1===n.length?this.keyWordString.textContent="".concat(n[0]):2===n.length?this.keyWordString.textContent="".concat(n[0],", ").concat(n[1]):this.keyWordString.textContent="".concat(n[0],", ").concat(n[1]," и ").concat(n.length-2," другим")}}(r.i);f.isLoggedIn()?s.setLogin(localStorage.getItem("name")):(s.setUnauthorized(),window.location.pathname="/"),new c.a(r.b,s,f,a),new class{constructor(t,e,n){var r=t.resultsContainer,o=t.template;this.resultsContainer=r,this.template=o,this.mainApi=e,this.newsCounter=n,this.cards=[],this._setEventListeners(),this._getNews()}_getNews(){this.mainApi.getArticles().then(t=>{console.log(t),t.data.forEach(t=>this._addCard(t)),this.newsCounter.addUserBlock(t.data),this.newsCounter.keyWord(t.data),console.log(this.arrKey)}).catch(t=>console.log(t))}_createCard(t){var e=document.querySelector(this.template).content.cloneNode(!0);return e.querySelector(".news-card__link").href=t.link,e.querySelector(".news-card__key-word").textContent=t.keyword,e.querySelector(".news-card__image").src=t.image,e.querySelector(".news-card__date").textContent=t.date,e.querySelector(".news-card__title").textContent=t.title,e.querySelector(".news-card__text").textContent=t.text,e.querySelector(".news-card__source").textContent=t.source,e.querySelector(".news-card").setAttribute("data-id",t._id),e.querySelector(".news-card")}_addCard(t){var e=this._createCard(t);this.cards.push(e),this.resultsContainer.appendChild(e)}_remove(t){if(t.target.classList.contains("news-card__trash")){var e=t.target.closest(".news-card"),n=t.target.closest(".news-card").dataset.id;this.mainApi.removeArticle(n).then(()=>(this.resultsContainer.removeChild(e),this.mainApi.getArticles().then(t=>{this.newsCounter.addUserBlock(t.data),this.newsCounter.keyWord(t.data)}))).catch(t=>console.log(t))}}_setEventListeners(){this.resultsContainer.addEventListener("click",t=>this._remove(t))}}(r.h,a,l)}]);