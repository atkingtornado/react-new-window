import e from"react";import t from"react-dom";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var s={exports:{}},u={};
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(u,"__esModule",{value:!0});var a="function"==typeof Symbol&&Symbol.for,l=a?Symbol.for("react.element"):60103,f=a?Symbol.for("react.portal"):60106,d=a?Symbol.for("react.fragment"):60107,p=a?Symbol.for("react.strict_mode"):60108,y=a?Symbol.for("react.profiler"):60114,h=a?Symbol.for("react.provider"):60109,w=a?Symbol.for("react.context"):60110,m=a?Symbol.for("react.async_mode"):60111,b=a?Symbol.for("react.concurrent_mode"):60111,v=a?Symbol.for("react.forward_ref"):60112,O=a?Symbol.for("react.suspense"):60113,S=a?Symbol.for("react.memo"):60115,g=a?Symbol.for("react.lazy"):60116;function j(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case l:switch(e=e.type){case m:case b:case d:case y:case p:case O:return e;default:switch(e=e&&e.$$typeof){case w:case v:case h:return e;default:return t}}case g:case S:case f:return t}}}function E(e){return j(e)===b}u.typeOf=j,u.AsyncMode=m,u.ConcurrentMode=b,u.ContextConsumer=w,u.ContextProvider=h,u.Element=l,u.ForwardRef=v,u.Fragment=d,u.Lazy=g,u.Memo=S,u.Portal=f,u.Profiler=y,u.StrictMode=p,u.Suspense=O,u.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===d||e===b||e===y||e===p||e===O||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===S||e.$$typeof===h||e.$$typeof===w||e.$$typeof===v)},u.isAsyncMode=function(e){return E(e)||j(e)===m},u.isConcurrentMode=E,u.isContextConsumer=function(e){return j(e)===w},u.isContextProvider=function(e){return j(e)===h},u.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===l},u.isForwardRef=function(e){return j(e)===v},u.isFragment=function(e){return j(e)===d},u.isLazy=function(e){return j(e)===g},u.isMemo=function(e){return j(e)===S},u.isPortal=function(e){return j(e)===f},u.isProfiler=function(e){return j(e)===y},u.isStrictMode=function(e){return j(e)===p},u.isSuspense=function(e){return j(e)===O};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;!function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()||Object.assign;Function.call.bind(Object.prototype.hasOwnProperty);function C(){}function P(){}P.resetWarningCache=C;s.exports=function(){function e(e,t,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:P,resetWarningCache:C};return n.PropTypes=n,n}();var _=s.exports;function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}var k,T,x,$=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(a,e.PureComponent);var i,c,s,u=R(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u.call(this,e)).container=null,t.window=null,t.windowCheckerInterval=null,t.released=!1,t.state={mounted:!1},t}return i=a,(c=[{key:"render",value:function(){return this.state.mounted?t.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function(){this.openChild(),this.setState({mounted:!0})}},{key:"openChild",value:function(){var e,t=this,n=this.props,o=n.url,r=n.title,i=n.name,c=n.features,s=n.onBlock,u=n.onOpen,a=n.center;if("string"!=typeof a||void 0!==c.width&&void 0!==c.height){if("parent"===a)c.left=window.top.outerWidth/2+window.top.screenX-c.width/2,c.top=window.top.outerHeight/2+window.top.screenY-c.height/2;else if("screen"===a){var l=void 0!==window.screenLeft?window.screenLeft:window.screen.left,f=void 0!==window.screenTop?window.screenTop:window.screen.top,d=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,p=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height;c.left=d/2-c.width/2+l,c.top=p/2-c.height/2+f}}else console.warn("width and height window features must be present when a center prop is provided");if(this.window=window.open(o,i,(e=c,Object.keys(e).reduce((function(t,n){var o=e[n];return"boolean"==typeof o?t.push("".concat(n,"=").concat(o?"yes":"no")):t.push("".concat(n,"=").concat(o)),t}),[]).join(","))),this.container=this.window.document.createElement("div"),this.windowCheckerInterval=setInterval((function(){t.window&&!t.window.closed||t.release()}),50),this.window){if(this.window.document.title=r,this.container=this.window.document.getElementById("new-window-container"),null===this.container)this.container=this.window.document.createElement("div"),this.container.setAttribute("id","new-window-container"),this.window.document.body.appendChild(this.container);else{var y=this.window.document.getElementById("new-window-container-static");this.window.document.body.removeChild(y)}this.props.copyStyles&&setTimeout((function(){return e=document,n=t.window.document,o=n.createDocumentFragment(),Array.from(e.styleSheets).forEach((function(e){var t;try{t=e.cssRules}catch(e){console.error(e)}if(t){var r=[];Array.from(e.cssRules).forEach((function(e){var t=e.type;if(t!==CSSRule.UNKNOWN_RULE){var n="";n=t===CSSRule.KEYFRAMES_RULE?function(e){var t=["@keyframes",e.name,"{"];return Array.from(e.cssRules).forEach((function(e){t.push(e.keyText,"{",e.style.cssText,"}")})),t.push("}"),t.join(" ")}(e):[CSSRule.IMPORT_RULE,CSSRule.FONT_FACE_RULE].includes(t)?function(e){return e.cssText.split("url(").map((function(e){return"/"===e[1]?"".concat(e.slice(0,1)).concat(window.location.origin).concat(e.slice(1)):e})).join("url(")}(e):e.cssText,r.push(n)}}));var i=n.createElement("style");i.textContent=r.join("\n"),o.appendChild(i)}else if(e.href){var c=n.createElement("link");c.rel="stylesheet",c.href=e.href,o.appendChild(c)}})),void n.head.appendChild(o);var e,n,o}),0),"function"==typeof u&&u(this.window),this.window.addEventListener("beforeunload",(function(){return t.release()}))}else"function"==typeof s?s(null):console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"componentWillUnmount",value:function(){if(this.window)if(this.props.closeOnUnmount)this.window.close();else if(this.props.children){var e=this.container.cloneNode(!0);e.setAttribute("id","new-window-container-static"),this.window.document.body.appendChild(e)}}},{key:"release",value:function(){if(!this.released){this.released=!0,clearInterval(this.windowCheckerInterval);var e=this.props.onUnload;"function"==typeof e&&e(null)}}}])&&n(i.prototype,c),s&&n(i,s),a}();x={url:"",name:"",title:"",features:{width:"600px",height:"640px"},onBlock:null,onOpen:null,onUnload:null,center:"parent",copyStyles:!0,closeOnUnmount:!0},(T="defaultProps")in(k=$)?Object.defineProperty(k,T,{value:x,enumerable:!0,configurable:!0,writable:!0}):k[T]=x,$.propTypes={children:_.node,url:_.string,name:_.string,title:_.string,features:_.object,onUnload:_.func,onBlock:_.func,onOpen:_.func,center:_.oneOf(["parent","screen"]),copyStyles:_.bool,closeOnUnmount:_.bool};export{$ as default};
//# sourceMappingURL=react-new-window.js.map
