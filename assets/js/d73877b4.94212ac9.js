/*! For license information please see d73877b4.94212ac9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[79164],{905933:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>a});var n=t(824246),o=t(511151);const u={id:"plugin-ilert.alertsource.emailresolvefiltered",title:"AlertSource.emailResolveFiltered",description:"API reference for AlertSource.emailResolveFiltered"},c=void 0,i={id:"reference/plugin-ilert.alertsource.emailresolvefiltered",title:"AlertSource.emailResolveFiltered",description:"API reference for AlertSource.emailResolveFiltered",source:"@site/../docs/reference/plugin-ilert.alertsource.emailresolvefiltered.md",sourceDirName:"reference",slug:"/reference/plugin-ilert.alertsource.emailresolvefiltered",permalink:"/docs/reference/plugin-ilert.alertsource.emailresolvefiltered",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-ilert.alertsource.emailresolvefiltered.md",tags:[],version:"current",frontMatter:{id:"plugin-ilert.alertsource.emailresolvefiltered",title:"AlertSource.emailResolveFiltered",description:"API reference for AlertSource.emailResolveFiltered"}},l={},a=[];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-ilert",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-ilert"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-ilert.alertsource",children:(0,n.jsx)(r.code,{children:"AlertSource"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-ilert.alertsource.emailresolvefiltered",children:(0,n.jsx)(r.code,{children:"emailResolveFiltered"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"emailResolveFiltered?: boolean;\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,u={},a=null,s=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(s=r.ref),r)c.call(r,n)&&!l.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:s,props:u,_owner:i.current}}r.Fragment=u,r.jsx=a,r.jsxs=a},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function _(){}function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=v.prototype;var g=b.prototype=new _;g.constructor=b,m(g,v.prototype),g.isPureReactComponent=!0;var S=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,n){var o,u={},c=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,o)&&!R.hasOwnProperty(o)&&(u[o]=r[o]);var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){for(var a=Array(l),s=0;s<l;s++)a[s]=arguments[s+2];u.children=a}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===u[o]&&(u[o]=l[o]);return{$$typeof:t,type:e,key:c,ref:i,props:u,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,o,u,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case t:case n:l=!0}}if(l)return c=c(l=e),e=""===u?"."+C(l,0):u,S(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(c,r,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(l=0,u=""===u?".":u+":",S(e))for(var a=0;a<e.length;a++){var s=u+C(i=e[a],a);l+=$(i,r,o,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),a=0;!(i=e.next()).done;)l+=$(i=i.value,r,o,s=u+C(i,a++),c);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,r,t){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},F={transition:null},I={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:F,ReactCurrentOwner:k};r.Children={map:O,forEach:function(e,r,t){O(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=v,r.Fragment=o,r.Profiler=c,r.PureComponent=b,r.StrictMode=u,r.Suspense=s,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,i=k.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in r)j.call(r,a)&&!R.hasOwnProperty(a)&&(o[a]=void 0===r[a]&&void 0!==l?l[a]:r[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){l=Array(a);for(var s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:t,type:e.type,key:u,ref:c,props:o,_owner:i}},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=F.transition;F.transition={};try{e()}finally{F.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return A.current.useCallback(e,r)},r.useContext=function(e){return A.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return A.current.useDeferredValue(e)},r.useEffect=function(e,r){return A.current.useEffect(e,r)},r.useId=function(){return A.current.useId()},r.useImperativeHandle=function(e,r,t){return A.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return A.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return A.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return A.current.useMemo(e,r)},r.useReducer=function(e,r,t){return A.current.useReducer(e,r,t)},r.useRef=function(e){return A.current.useRef(e)},r.useState=function(e){return A.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return A.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return A.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||c:u(e),n.createElement(o.Provider,{value:i},r)}}}]);