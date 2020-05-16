!function(e){
var t={}
function i(a){
if(t[a]){
return t[a].exports
}
var o=t[a]={
i:a,
l:!1,
exports:{}
}
return e[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports
}
i.m=e,i.c=t,i.d=function(e,t,a){
i.o(e,t)||Object.defineProperty(e,t,{
enumerable:!0,
get:a
})
},i.r=function(e){
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{
value:"Module"
}),Object.defineProperty(e,"__esModule",{
value:!0
})
},i.t=function(e,t){
if(1&t&&(e=i(e)),8&t){
return e
}
if(4&t&&"object"==typeof e&&e&&e.__esModule){
return e
}
var a=Object.create(null)
if(i.r(a),Object.defineProperty(a,"default",{
enumerable:!0,
value:e
}),2&t&&"string"!=typeof e){
for(var o in e){
i.d(a,o,function(t){
return e[t]
}.bind(null,o))
}
}
return a
},i.n=function(e){
var t=e&&e.__esModule?function(){
return e.default
}:function(){
return e
}
return i.d(t,"a",t),t
},i.o=function(e,t){
return Object.prototype.hasOwnProperty.call(e,t)
},i.p="",i(i.s=53)
}([function(e,t,i){
"use strict"
e.exports=i(38)
},function(e,t,i){
"use strict"
var a=i(8),o="object"==typeof self&&self&&self.Object===Object&&self,r=a.a||o||Function("return this")()
t.a=r
},,function(e,t,i){
"use strict"
;(function(e){
var a=i(1),o=i(16),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,n=r&&"object"==typeof e&&e&&!e.nodeType&&e,s=n&&n.exports===r?a.a.Buffer:void 0,l=(s?s.isBuffer:void 0)||o.a
t.a=l
}).call(this,i(10)(e))
},function(e,t,i){
"use strict"
;(function(e){
var a=i(8),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof e&&e&&!e.nodeType&&e,n=r&&r.exports===o&&a.a.process,s=function(){
try{
var e=r&&r.require&&r.require("util").types
return e||n&&n.binding&&n.binding("util")
}catch(e){}
}()
t.a=s
}).call(this,i(10)(e))
},function(e,t,i){
"use strict"
var a=t
function o(e,t,i){
for(var a=Object.keys(t),o=0;o<a.length;++o){
void 0!==e[a[o]]&&i||(e[a[o]]=t[a[o]])
}
return e
}
function r(e){
function t(e,i){
if(!(this instanceof t)){
return new t(e,i)
}
Object.defineProperty(this,"message",{
get:function(){
return e
}
}),Error.captureStackTrace?Error.captureStackTrace(this,t):Object.defineProperty(this,"stack",{
value:(new Error).stack||""
}),i&&o(this,i)
}
return(t.prototype=Object.create(Error.prototype)).constructor=t,Object.defineProperty(t.prototype,"name",{
get:function(){
return e
}
}),t.prototype.toString=function(){
return this.name+": "+this.message
},t
}
a.asPromise=i(39),a.base64=i(40),a.EventEmitter=i(41),a.float=i(42),a.inquire=i(43),
a.utf8=i(44),
a.pool=i(45),a.LongBits=i(46),a.global="undefined"!=typeof window&&window||"undefined"!=typeof global&&global||"undefined"!=typeof self&&self||this,
a.emptyArray=Object.freeze?Object.freeze([]):[],
a.emptyObject=Object.freeze?Object.freeze({}):{},
a.isNode=Boolean(a.global.process&&a.global.process.versions&&a.global.process.versions.node),
a.isInteger=Number.isInteger||function(e){
return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e
},a.isString=function(e){
return"string"==typeof e||e instanceof String
},a.isObject=function(e){
return e&&"object"==typeof e
},a.isset=a.isSet=function(e,t){
var i=e[t]
return!(null==i||!e.hasOwnProperty(t))&&("object"!=typeof i||(Array.isArray(i)?i.length:Object.keys(i).length)>0)
},
a.Buffer=function(){
try{
var e=a.inquire("buffer").Buffer
return e.prototype.utf8Write?e:null
}catch(e){
return null
}
}(),a._Buffer_from=null,a._Buffer_allocUnsafe=null,a.newBuffer=function(e){
return"number"==typeof e?a.Buffer?a._Buffer_allocUnsafe(e):new a.Array(e):a.Buffer?a._Buffer_from(e):"undefined"==typeof Uint8Array?e:new Uint8Array(e)
},
a.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,a.Long=a.global.dcodeIO&&a.global.dcodeIO.Long||a.global.Long||a.inquire("long"),
a.key2Re=/^true|false|0|1$/,
a.key32Re=/^-?(?:0|[1-9][0-9]*)$/,a.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
a.longToHash=function(e){
return e?a.LongBits.from(e).toHash():a.LongBits.zeroHash
},a.longFromHash=function(e,t){
var i=a.LongBits.fromHash(e)
return a.Long?a.Long.fromBits(i.lo,i.hi,t):i.toNumber(Boolean(t))
},a.merge=o,a.lcFirst=function(e){
return e.charAt(0).toLowerCase()+e.substring(1)
},a.newError=r,a.ProtocolError=r("ProtocolError"),
a.oneOfGetter=function(e){
for(var t={},i=0;i<e.length;++i){
t[e[i]]=1
}
return function(){
for(var e=Object.keys(this),i=e.length-1;i>-1;--i){
if(1===t[e[i]]&&void 0!==this[e[i]]&&null!==this[e[i]]){
return e[i]
}
}
}
},a.oneOfSetter=function(e){
return function(t){
for(var i=0;i<e.length;++i){
e[i]!==t&&delete this[e[i]]
}
}
},a.toJSONOptions={
longs:String,
enums:String,
bytes:String,
json:!0
},a._configure=function(){
var e=a.Buffer
e?(a._Buffer_from=e.from!==Uint8Array.from&&e.from||function(t,i){
return new e(t,i)
},a._Buffer_allocUnsafe=e.allocUnsafe||function(t){
return new e(t)
}):a._Buffer_from=a._Buffer_allocUnsafe=null
}
},function(e,t){
var i,a,o=e.exports={}
function r(){
throw new Error("setTimeout has not been defined")
}
function n(){
throw new Error("clearTimeout has not been defined")
}
function s(e){
if(i===setTimeout){
return setTimeout(e,0)
}
if((i===r||!i)&&setTimeout){
return i=setTimeout,setTimeout(e,0)
}
try{
return i(e,0)
}catch(t){
try{
return i.call(null,e,0)
}catch(t){
return i.call(this,e,0)
}
}
}
!function(){
try{
i="function"==typeof setTimeout?setTimeout:r
}catch(e){
i=r
}
try{
a="function"==typeof clearTimeout?clearTimeout:n
}catch(e){
a=n
}
}()
var l,c=[],u=!1,p=-1
function d(){
u&&l&&(u=!1,l.length?c=l.concat(c):p=-1,c.length&&g())
}
function g(){
if(!u){
var e=s(d)
u=!0
for(var t=c.length;t;){
for(l=c,c=[];++p<t;){
l&&l[p].run()
}
p=-1,t=c.length
}
l=null,u=!1,function(e){
if(a===clearTimeout){
return clearTimeout(e)
}
if((a===n||!a)&&clearTimeout){
return a=clearTimeout,clearTimeout(e)
}
try{
a(e)
}catch(t){
try{
return a.call(null,e)
}catch(t){
return a.call(this,e)
}
}
}(e)
}
}
function m(e,t){
this.fun=e,this.array=t
}
function h(){}
o.nextTick=function(e){
var t=new Array(arguments.length-1)
if(arguments.length>1){
for(var i=1;i<arguments.length;i++){
t[i-1]=arguments[i]
}
}
c.push(new m(e,t)),1!==c.length||u||s(g)
},m.prototype.run=function(){
this.fun.apply(null,this.array)
},o.title="browser",o.browser=!0,o.env={},o.argv=[],
o.version="",o.versions={},o.on=h,
o.addListener=h,o.once=h,o.off=h,o.removeListener=h,
o.removeAllListeners=h,o.emit=h,
o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){
return[]
},o.binding=function(e){
throw new Error("process.binding is not supported")
},o.cwd=function(){
return"/"
},o.chdir=function(e){
throw new Error("process.chdir is not supported")
},o.umask=function(){
return 0
}
},function(e,t){},function(e,t,i){
"use strict"
var a="object"==typeof global&&global&&global.Object===Object&&global
t.a=a
},function(e,t,i){
"use strict"
;(function(e){
var a=i(1),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof e&&e&&!e.nodeType&&e,n=r&&r.exports===o?a.a.Buffer:void 0,s=n?n.allocUnsafe:void 0
t.a=function(e,t){
if(t){
return e.slice()
}
var i=e.length,a=s?s(i):new e.constructor(i)
return e.copy(a),a
}
}).call(this,i(10)(e))
},function(e,t){
e.exports=function(e){
if(!e.webpackPolyfill){
var t=Object.create(e)
t.children||(t.children=[]),Object.defineProperty(t,"loaded",{
enumerable:!0,
get:function(){
return t.l
}
}),Object.defineProperty(t,"id",{
enumerable:!0,
get:function(){
return t.i
}
}),Object.defineProperty(t,"exports",{
enumerable:!0
}),t.webpackPolyfill=1
}
return t
}
},function(e,t,i){
"use strict"
var a=i(27),o={}
o.rules=i(29).map((function(e){
return{
rule:e,
suffix:e.replace(/^(\*\.|\!)/,""),
punySuffix:-1,
wildcard:"*"===e.charAt(0),
exception:"!"===e.charAt(0)
}
})),o.endsWith=function(e,t){
return-1!==e.indexOf(t,e.length-t.length)
},o.findRule=function(e){
var t=a.toASCII(e)
return o.rules.reduce((function(e,i){
return-1===i.punySuffix&&(i.punySuffix=a.toASCII(i.suffix)),
o.endsWith(t,"."+i.punySuffix)||t===i.punySuffix?i:e
}),null)
},t.errorCodes={
DOMAIN_TOO_SHORT:"Domain name too short.",
DOMAIN_TOO_LONG:"Domain name too long. It should be no more than 255 chars.",
LABEL_STARTS_WITH_DASH:"Domain name label can not start with a dash.",
LABEL_ENDS_WITH_DASH:"Domain name label can not end with a dash.",
LABEL_TOO_LONG:"Domain name label should be at most 63 chars long.",
LABEL_TOO_SHORT:"Domain name label should be at least 1 character long.",
LABEL_INVALID_CHARS:"Domain name label can only contain alphanumeric characters or dashes."
},
o.validate=function(e){
var t=a.toASCII(e)
if(t.length<1){
return"DOMAIN_TOO_SHORT"
}
if(t.length>255){
return"DOMAIN_TOO_LONG"
}
for(var i,o=t.split("."),r=0;r<o.length;++r){
if(!(i=o[r]).length){
return"LABEL_TOO_SHORT"
}
if(i.length>63){
return"LABEL_TOO_LONG"
}
if("-"===i.charAt(0)){
return"LABEL_STARTS_WITH_DASH"
}
if("-"===i.charAt(i.length-1)){
return"LABEL_ENDS_WITH_DASH"
}
if(!/^[a-z0-9\-]+$/.test(i)){
return"LABEL_INVALID_CHARS"
}
}
},t.parse=function(e){
if("string"!=typeof e){
throw new TypeError("Domain name must be a string.")
}
var i=e.slice(0).toLowerCase()
"."===i.charAt(i.length-1)&&(i=i.slice(0,i.length-1))
var r=o.validate(i)
if(r){
return{
input:e,
error:{
message:t.errorCodes[r],
code:r
}
}
}
var n={
input:e,
tld:null,
sld:null,
domain:null,
subdomain:null,
listed:!1
},s=i.split(".")
if("local"===s[s.length-1]){
return n
}
var l=function(){
return/xn--/.test(i)?(n.domain&&(n.domain=a.toASCII(n.domain)),
n.subdomain&&(n.subdomain=a.toASCII(n.subdomain)),
n):n
},c=o.findRule(i)
if(!c){
return s.length<2?n:(n.tld=s.pop(),n.sld=s.pop(),n.domain=[n.sld,n.tld].join("."),
s.length&&(n.subdomain=s.pop()),
l())
}
n.listed=!0
var u=c.suffix.split("."),p=s.slice(0,s.length-u.length)
return c.exception&&p.push(u.shift()),n.tld=u.join("."),p.length?(c.wildcard&&(u.unshift(p.pop()),
n.tld=u.join(".")),
p.length?(n.sld=p.pop(),n.domain=[n.sld,n.tld].join("."),p.length&&(n.subdomain=p.join(".")),
l()):l()):l()
},t.get=function(e){
return e&&t.parse(e).domain||null
},t.isValid=function(e){
var i=t.parse(e)
return Boolean(i.domain&&i.listed)
}
},function(e,t,i){
"object"==typeof browser&&(chrome=browser),e.exports=i(23)({
getRawLocalizedString:function(e){
return chrome.i18n.getMessage(e)
},
getLocalResourceURL:function(e){
return chrome.extension.getURL(e)
},
getRawBrowserLocale:function(){
return window.navigator.language
}
})
},function(e,t,i){
(function(t,i){
!function(t){
"use strict"
"function"==typeof bootstrap?bootstrap("promise",t):e.exports=t()
}((function(){
"use strict"
var e=!1
try{
throw new Error
}catch(t){
e=!!t.stack
}
var a,o=S(),r=function(){},n=function(){
var e={
task:void 0,
next:null
},a=e,o=!1,r=void 0,s=!1,l=[]
function c(){
for(var t,i;e.next;){
t=(e=e.next).task,e.task=void 0,(i=e.domain)&&(e.domain=void 0,
i.enter()),u(t,i)
}
for(;l.length;){
u(t=l.pop())
}
o=!1
}
function u(e,t){
try{
e()
}catch(e){
if(s){
throw t&&t.exit(),setTimeout(c,0),t&&t.enter(),e
}
setTimeout((function(){
throw e
}),0)
}
t&&t.exit()
}
if(n=function(e){
a=a.next={
task:e,
domain:s&&t.domain,
next:null
},o||(o=!0,r())
},"object"==typeof t&&"[object process]"===t.toString()&&t.nextTick){
s=!0,r=function(){
t.nextTick(c)
}
}else if("function"==typeof i){
r="undefined"!=typeof window?i.bind(window,c):function(){
i(c)
}
}else if("undefined"!=typeof MessageChannel){
var p=new MessageChannel
p.port1.onmessage=function(){
r=d,p.port1.onmessage=c,c()
}
var d=function(){
p.port2.postMessage(0)
}
r=function(){
setTimeout(c,0),d()
}
}else{
r=function(){
setTimeout(c,0)
}
}
return n.runAfter=function(e){
l.push(e),o||(o=!0,r())
},n
}(),s=Function.call
function l(e){
return function(){
return s.apply(e,arguments)
}
}
var c,u=l(Array.prototype.slice),p=l(Array.prototype.reduce||function(e,t){
var i=0,a=this.length
if(1===arguments.length){
for(;;){
if(i in this){
t=this[i++]
break
}
if(++i>=a){
throw new TypeError
}
}
}
for(;i<a;i++){
i in this&&(t=e(t,this[i],i))
}
return t
}),d=l(Array.prototype.indexOf||function(e){
for(var t=0;t<this.length;t++){
if(this[t]===e){
return t
}
}
return-1
}),g=l(Array.prototype.map||function(e,t){
var i=this,a=[]
return p(i,(function(o,r,n){
a.push(e.call(t,r,n,i))
}),void 0),a
}),m=Object.create||function(e){
function t(){}
return t.prototype=e,new t
},h=Object.defineProperty||function(e,t,i){
return e[t]=i.value,e
},k=l(Object.prototype.hasOwnProperty),b=Object.keys||function(e){
var t=[]
for(var i in e){
k(e,i)&&t.push(i)
}
return t
},f=l(Object.prototype.toString)
function y(e){
return"[object StopIteration]"===f(e)||e instanceof c
}
c="undefined"!=typeof ReturnValue?ReturnValue:function(e){
this.value=e
}
var v="From previous event:"
function w(t,i){
if(e&&i.stack&&"object"==typeof t&&null!==t&&t.stack){
for(var a=[],o=i;o;o=o.source){
o.stack&&(!t.__minimumStackCounter__||t.__minimumStackCounter__>o.stackCounter)&&(h(t,"__minimumStackCounter__",{
value:o.stackCounter,
configurable:!0
}),a.unshift(o.stack))
}
a.unshift(t.stack)
var r=function(e){
for(var t=e.split("\n"),i=[],a=0;a<t.length;++a){
var o=t[a]
!A(o)&&(-1===(r=o).indexOf("(module.js:")&&-1===r.indexOf("(node.js:"))&&o&&i.push(o)
}
var r
return i.join("\n")
}(a.join("\n"+v+"\n"))
h(t,"stack",{
value:r,
configurable:!0
})
}
}
function j(e){
var t=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e)
if(t){
return[t[1],Number(t[2])]
}
var i=/at ([^ ]+):(\d+):(?:\d+)$/.exec(e)
if(i){
return[i[1],Number(i[2])]
}
var a=/.*@(.+):(\d+)$/.exec(e)
return a?[a[1],Number(a[2])]:void 0
}
function A(e){
var t=j(e)
if(!t){
return!1
}
var i=t[0],r=t[1]
return i===a&&r>=o&&r<=Y
}
function S(){
if(e){
try{
throw new Error
}catch(e){
var t=e.stack.split("\n"),i=j(t[0].indexOf("@")>0?t[1]:t[2])
if(!i){
return
}
return a=i[0],i[1]
}
}
}
function T(e){
return e instanceof _?e:N(e)?function(e){
var t=E()
return T.nextTick((function(){
try{
e.then(t.resolve,t.reject,t.notify)
}catch(e){
t.reject(e)
}
})),t.promise
}(e):V(e)
}
T.resolve=T,T.nextTick=n,T.longStackSupport=!1
var O=1
function E(){
var t,i=[],a=[],o=m(E.prototype),r=m(_.prototype)
if(r.promiseDispatch=function(e,o,r){
var n=u(arguments)
i?(i.push(n),"when"===o&&r[1]&&a.push(r[1])):T.nextTick((function(){
t.promiseDispatch.apply(t,n)
}))
},r.valueOf=function(){
if(i){
return r
}
var e=C(t)
return z(e)&&(t=e),e
},r.inspect=function(){
return t?t.inspect():{
state:"pending"
}
},T.longStackSupport&&e){
try{
throw new Error
}catch(e){
r.stack=e.stack.substring(e.stack.indexOf("\n")+1),r.stackCounter=O++
}
}
function n(o){
t=o,T.longStackSupport&&e&&(r.source=o),p(i,(function(e,t){
T.nextTick((function(){
o.promiseDispatch.apply(o,t)
}))
}),void 0),i=void 0,a=void 0
}
return o.promise=r,o.resolve=function(e){
t||n(T(e))
},o.fulfill=function(e){
t||n(V(e))
},o.reject=function(e){
t||n(D(e))
},o.notify=function(e){
t||p(a,(function(t,i){
T.nextTick((function(){
i(e)
}))
}),void 0)
},o
}
function I(e){
if("function"!=typeof e){
throw new TypeError("resolver must be a function.")
}
var t=E()
try{
e(t.resolve,t.reject,t.notify)
}catch(e){
t.reject(e)
}
return t.promise
}
function R(e){
return I((function(t,i){
for(var a=0,o=e.length;a<o;a++){
T(e[a]).then(t,i)
}
}))
}
function _(e,t,i){
void 0===t&&(t=function(e){
return D(new Error("Promise does not support operation: "+e))
}),void 0===i&&(i=function(){
return{
state:"unknown"
}
})
var a=m(_.prototype)
if(a.promiseDispatch=function(i,o,r){
var n
try{
n=e[o]?e[o].apply(a,r):t.call(a,o,r)
}catch(e){
n=D(e)
}
i&&i(n)
},a.inspect=i,i){
var o=i()
"rejected"===o.state&&(a.exception=o.reason),a.valueOf=function(){
var e=i()
return"pending"===e.state||"rejected"===e.state?a:e.value
}
}
return a
}
function B(e,t,i,a){
return T(e).then(t,i,a)
}
function C(e){
if(z(e)){
var t=e.inspect()
if("fulfilled"===t.state){
return t.value
}
}
return e
}
function z(e){
return e instanceof _
}
function N(e){
return(t=e)===Object(t)&&"function"==typeof e.then
var t
}
"object"==typeof t&&t&&t.env&&t.env.Q_DEBUG&&(T.longStackSupport=!0),T.defer=E,
E.prototype.makeNodeResolver=function(){
var e=this
return function(t,i){
t?e.reject(t):arguments.length>2?e.resolve(u(arguments,1)):e.resolve(i)
}
},T.Promise=I,T.promise=I,I.race=R,I.all=M,I.reject=D,I.resolve=T,T.passByCopy=function(e){
return e
},_.prototype.passByCopy=function(){
return this
},T.join=function(e,t){
return T(e).join(t)
},_.prototype.join=function(e){
return T([this,e]).spread((function(e,t){
if(e===t){
return e
}
throw new Error("Q can't join: not the same: "+e+" "+t)
}))
},T.race=R,_.prototype.race=function(){
return this.then(T.race)
},T.makePromise=_,_.prototype.toString=function(){
return"[object Promise]"
},_.prototype.then=function(e,t,i){
var a=this,o=E(),r=!1
return T.nextTick((function(){
a.promiseDispatch((function(t){
r||(r=!0,o.resolve(function(t){
try{
return"function"==typeof e?e(t):t
}catch(e){
return D(e)
}
}(t)))
}),"when",[function(e){
r||(r=!0,o.resolve(function(e){
if("function"==typeof t){
w(e,a)
try{
return t(e)
}catch(e){
return D(e)
}
}
return D(e)
}(e)))
}])
})),a.promiseDispatch(void 0,"when",[void 0,function(e){
var t,a=!1
try{
t=function(e){
return"function"==typeof i?i(e):e
}(e)
}catch(e){
if(a=!0,!T.onerror){
throw e
}
T.onerror(e)
}
a||o.notify(t)
}]),o.promise
},T.tap=function(e,t){
return T(e).tap(t)
},_.prototype.tap=function(e){
return e=T(e),this.then((function(t){
return e.fcall(t).thenResolve(t)
}))
},T.when=B,_.prototype.thenResolve=function(e){
return this.then((function(){
return e
}))
},T.thenResolve=function(e,t){
return T(e).thenResolve(t)
},_.prototype.thenReject=function(e){
return this.then((function(){
throw e
}))
},T.thenReject=function(e,t){
return T(e).thenReject(t)
},T.nearer=C,T.isPromise=z,T.isPromiseAlike=N,T.isPending=function(e){
return z(e)&&"pending"===e.inspect().state
},_.prototype.isPending=function(){
return"pending"===this.inspect().state
},T.isFulfilled=function(e){
return!z(e)||"fulfilled"===e.inspect().state
},_.prototype.isFulfilled=function(){
return"fulfilled"===this.inspect().state
},T.isRejected=function(e){
return z(e)&&"rejected"===e.inspect().state
},_.prototype.isRejected=function(){
return"rejected"===this.inspect().state
}
var P=[],x=[],W=[],L=!0
function U(){
P.length=0,x.length=0,L||(L=!0)
}
function D(e){
var i=_({
when:function(i){
return i&&function(e){
if(L){
var i=d(x,e)
;-1!==i&&("object"==typeof t&&"function"==typeof t.emit&&T.nextTick.runAfter((function(){
var a=d(W,e)
;-1!==a&&(t.emit("rejectionHandled",P[i],e),W.splice(a,1))
})),x.splice(i,1),P.splice(i,1))
}
}(this),i?i(e):this
}
},(function(){
return this
}),(function(){
return{
state:"rejected",
reason:e
}
}))
return function(e,i){
L&&("object"==typeof t&&"function"==typeof t.emit&&T.nextTick.runAfter((function(){
-1!==d(x,e)&&(t.emit("unhandledRejection",i,e),
W.push(e))
})),x.push(e),i&&void 0!==i.stack?P.push(i.stack):P.push("(no stack) "+i))
}(i,e),
i
}
function V(e){
return _({
when:function(){
return e
},
get:function(t){
return e[t]
},
set:function(t,i){
e[t]=i
},
delete:function(t){
delete e[t]
},
post:function(t,i){
return null==t?e.apply(void 0,i):e[t].apply(e,i)
},
apply:function(t,i){
return e.apply(t,i)
},
keys:function(){
return b(e)
}
},void 0,(function(){
return{
state:"fulfilled",
value:e
}
}))
}
function q(e,t,i){
return T(e).spread(t,i)
}
function G(e,t,i){
return T(e).dispatch(t,i)
}
function M(e){
return B(e,(function(e){
var t=0,i=E()
return p(e,(function(a,o,r){
var n
z(o)&&"fulfilled"===(n=o.inspect()).state?e[r]=n.value:(++t,B(o,(function(a){
e[r]=a,
0==--t&&i.resolve(e)
}),i.reject,(function(e){
i.notify({
index:r,
value:e
})
})))
}),void 0),0===t&&i.resolve(e),i.promise
}))
}
function F(e){
if(0===e.length){
return T.resolve()
}
var t=T.defer(),i=0
return p(e,(function(a,o,r){
var n=e[r]
i++,B(n,(function(e){
t.resolve(e)
}),(function(e){
if(0===--i){
var a=e||new Error(""+e)
a.message="Q can't get fulfillment value from any promise, all promises were rejected. Last error message: "+a.message,
t.reject(a)
}
}),(function(e){
t.notify({
index:r,
value:e
})
}))
}),void 0),t.promise
}
function H(e){
return B(e,(function(e){
return e=g(e,T),B(M(g(e,(function(e){
return B(e,r,r)
}))),(function(){
return e
}))
}))
}
T.resetUnhandledRejections=U,T.getUnhandledReasons=function(){
return P.slice()
},T.stopUnhandledRejectionTracking=function(){
U(),L=!1
},U(),T.reject=D,T.fulfill=V,T.master=function(e){
return _({
isDef:function(){}
},(function(t,i){
return G(e,t,i)
}),(function(){
return T(e).inspect()
}))
},T.spread=q,_.prototype.spread=function(e,t){
return this.all().then((function(t){
return e.apply(void 0,t)
}),t)
},T.async=function(e){
return function(){
function t(e,t){
var r
if("undefined"==typeof StopIteration){
try{
r=i[e](t)
}catch(e){
return D(e)
}
return r.done?T(r.value):B(r.value,a,o)
}
try{
r=i[e](t)
}catch(e){
return y(e)?T(e.value):D(e)
}
return B(r,a,o)
}
var i=e.apply(this,arguments),a=t.bind(t,"next"),o=t.bind(t,"throw")
return a()
}
},T.spawn=function(e){
T.done(T.async(e)())
},T.return=function(e){
throw new c(e)
},T.promised=function(e){
return function(){
return q([this,M(arguments)],(function(t,i){
return e.apply(t,i)
}))
}
},T.dispatch=G,_.prototype.dispatch=function(e,t){
var i=this,a=E()
return T.nextTick((function(){
i.promiseDispatch(a.resolve,e,t)
})),a.promise
},T.get=function(e,t){
return T(e).dispatch("get",[t])
},_.prototype.get=function(e){
return this.dispatch("get",[e])
},T.set=function(e,t,i){
return T(e).dispatch("set",[t,i])
},_.prototype.set=function(e,t){
return this.dispatch("set",[e,t])
},T.del=T.delete=function(e,t){
return T(e).dispatch("delete",[t])
},_.prototype.del=_.prototype.delete=function(e){
return this.dispatch("delete",[e])
},T.mapply=T.post=function(e,t,i){
return T(e).dispatch("post",[t,i])
},_.prototype.mapply=_.prototype.post=function(e,t){
return this.dispatch("post",[e,t])
},T.send=T.mcall=T.invoke=function(e,t){
return T(e).dispatch("post",[t,u(arguments,2)])
},_.prototype.send=_.prototype.mcall=_.prototype.invoke=function(e){
return this.dispatch("post",[e,u(arguments,1)])
},T.fapply=function(e,t){
return T(e).dispatch("apply",[void 0,t])
},_.prototype.fapply=function(e){
return this.dispatch("apply",[void 0,e])
},T.try=T.fcall=function(e){
return T(e).dispatch("apply",[void 0,u(arguments,1)])
},_.prototype.fcall=function(){
return this.dispatch("apply",[void 0,u(arguments)])
},T.fbind=function(e){
var t=T(e),i=u(arguments,1)
return function(){
return t.dispatch("apply",[this,i.concat(u(arguments))])
}
},_.prototype.fbind=function(){
var e=this,t=u(arguments)
return function(){
return e.dispatch("apply",[this,t.concat(u(arguments))])
}
},T.keys=function(e){
return T(e).dispatch("keys",[])
},_.prototype.keys=function(){
return this.dispatch("keys",[])
},T.all=M,_.prototype.all=function(){
return M(this)
},T.any=F,_.prototype.any=function(){
return F(this)
},T.allResolved=function(e,t,i){
return function(){
return"undefined"!=typeof console&&console.warn,e.apply(e,arguments)
}
}(H),_.prototype.allResolved=function(){
return H(this)
},T.allSettled=function(e){
return T(e).allSettled()
},_.prototype.allSettled=function(){
return this.then((function(e){
return M(g(e,(function(e){
function t(){
return e.inspect()
}
return(e=T(e)).then(t,t)
})))
}))
},T.fail=T.catch=function(e,t){
return T(e).then(void 0,t)
},_.prototype.fail=_.prototype.catch=function(e){
return this.then(void 0,e)
},T.progress=function(e,t){
return T(e).then(void 0,void 0,t)
},_.prototype.progress=function(e){
return this.then(void 0,void 0,e)
},T.fin=T.finally=function(e,t){
return T(e).finally(t)
},_.prototype.fin=_.prototype.finally=function(e){
if(!e||"function"!=typeof e.apply){
throw new Error("Q can't apply finally callback")
}
return e=T(e),this.then((function(t){
return e.fcall().then((function(){
return t
}))
}),(function(t){
return e.fcall().then((function(){
throw t
}))
}))
},T.done=function(e,t,i,a){
return T(e).done(t,i,a)
},_.prototype.done=function(e,i,a){
var o=function(e){
T.nextTick((function(){
if(w(e,r),!T.onerror){
throw e
}
T.onerror(e)
}))
},r=e||i||a?this.then(e,i,a):this
"object"==typeof t&&t&&t.domain&&(o=t.domain.bind(o)),r.then(void 0,o)
},T.timeout=function(e,t,i){
return T(e).timeout(t,i)
},_.prototype.timeout=function(e,t){
var i=E(),a=setTimeout((function(){
t&&"string"!=typeof t||((t=new Error(t||"Timed out after "+e+" ms")).code="ETIMEDOUT"),
i.reject(t)
}),e)
return this.then((function(e){
clearTimeout(a),i.resolve(e)
}),(function(e){
clearTimeout(a),i.reject(e)
}),i.notify),i.promise
},T.delay=function(e,t){
return void 0===t&&(t=e,e=void 0),T(e).delay(t)
},_.prototype.delay=function(e){
return this.then((function(t){
var i=E()
return setTimeout((function(){
i.resolve(t)
}),e),i.promise
}))
},T.nfapply=function(e,t){
return T(e).nfapply(t)
},_.prototype.nfapply=function(e){
var t=E(),i=u(e)
return i.push(t.makeNodeResolver()),this.fapply(i).fail(t.reject),t.promise
},T.nfcall=function(e){
var t=u(arguments,1)
return T(e).nfapply(t)
},_.prototype.nfcall=function(){
var e=u(arguments),t=E()
return e.push(t.makeNodeResolver()),this.fapply(e).fail(t.reject),t.promise
},T.nfbind=T.denodeify=function(e){
if(void 0===e){
throw new Error("Q can't wrap an undefined function")
}
var t=u(arguments,1)
return function(){
var i=t.concat(u(arguments)),a=E()
return i.push(a.makeNodeResolver()),T(e).fapply(i).fail(a.reject),a.promise
}
},_.prototype.nfbind=_.prototype.denodeify=function(){
var e=u(arguments)
return e.unshift(this),T.denodeify.apply(void 0,e)
},T.nbind=function(e,t){
var i=u(arguments,2)
return function(){
var a=i.concat(u(arguments)),o=E()
function r(){
return e.apply(t,arguments)
}
return a.push(o.makeNodeResolver()),T(r).fapply(a).fail(o.reject),o.promise
}
},_.prototype.nbind=function(){
var e=u(arguments,0)
return e.unshift(this),T.nbind.apply(void 0,e)
},T.nmapply=T.npost=function(e,t,i){
return T(e).npost(t,i)
},_.prototype.nmapply=_.prototype.npost=function(e,t){
var i=u(t||[]),a=E()
return i.push(a.makeNodeResolver()),this.dispatch("post",[e,i]).fail(a.reject),a.promise
},
T.nsend=T.nmcall=T.ninvoke=function(e,t){
var i=u(arguments,2),a=E()
return i.push(a.makeNodeResolver()),T(e).dispatch("post",[t,i]).fail(a.reject),a.promise
},
_.prototype.nsend=_.prototype.nmcall=_.prototype.ninvoke=function(e){
var t=u(arguments,1),i=E()
return t.push(i.makeNodeResolver()),this.dispatch("post",[e,t]).fail(i.reject),i.promise
},
T.nodeify=function(e,t){
return T(e).nodeify(t)
},_.prototype.nodeify=function(e){
if(!e){
return this
}
this.then((function(t){
T.nextTick((function(){
e(null,t)
}))
}),(function(t){
T.nextTick((function(){
e(t)
}))
}))
},T.noConflict=function(){
throw new Error("Q.noConflict only works when Q is used as a global")
}
var Y=S()
return T
}))
}).call(this,i(6),i(24).setImmediate)
},function(e,t,i){
"use strict"
e.exports=p
var a,o=i(5),r=o.LongBits,n=o.base64,s=o.utf8
function l(e,t,i){
this.fn=e,this.len=t,this.next=void 0,this.val=i
}
function c(){}
function u(e){
this.head=e.head,this.tail=e.tail,this.len=e.len,this.next=e.states
}
function p(){
this.len=0,this.head=new l(c,0,0),this.tail=this.head,this.states=null
}
function d(e,t,i){
t[i]=255&e
}
function g(e,t){
this.len=e,this.next=void 0,this.val=t
}
function m(e,t,i){
for(;e.hi;){
t[i++]=127&e.lo|128,e.lo=(e.lo>>>7|e.hi<<25)>>>0,e.hi>>>=7
}
for(;e.lo>127;){
t[i++]=127&e.lo|128,e.lo=e.lo>>>7
}
t[i++]=e.lo
}
function h(e,t,i){
t[i]=255&e,t[i+1]=e>>>8&255,t[i+2]=e>>>16&255,t[i+3]=e>>>24
}
p.create=o.Buffer?function(){
return(p.create=function(){
return new a
})()
}:function(){
return new p
},p.alloc=function(e){
return new o.Array(e)
},o.Array!==Array&&(p.alloc=o.pool(p.alloc,o.Array.prototype.subarray)),
p.prototype._push=function(e,t,i){
return this.tail=this.tail.next=new l(e,t,i),this.len+=t,
this
},g.prototype=Object.create(l.prototype),g.prototype.fn=function(e,t,i){
for(;e>127;){
t[i++]=127&e|128,e>>>=7
}
t[i]=e
},p.prototype.uint32=function(e){
return this.len+=(this.tail=this.tail.next=new g((e>>>=0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,
this
},p.prototype.int32=function(e){
return e<0?this._push(m,10,r.fromNumber(e)):this.uint32(e)
},p.prototype.sint32=function(e){
return this.uint32((e<<1^e>>31)>>>0)
},p.prototype.uint64=function(e){
var t=r.from(e)
return this._push(m,t.length(),t)
},p.prototype.int64=p.prototype.uint64,p.prototype.sint64=function(e){
var t=r.from(e).zzEncode()
return this._push(m,t.length(),t)
},p.prototype.bool=function(e){
return this._push(d,1,e?1:0)
},p.prototype.fixed32=function(e){
return this._push(h,4,e>>>0)
},p.prototype.sfixed32=p.prototype.fixed32,p.prototype.fixed64=function(e){
var t=r.from(e)
return this._push(h,4,t.lo)._push(h,4,t.hi)
},p.prototype.sfixed64=p.prototype.fixed64,
p.prototype.float=function(e){
return this._push(o.float.writeFloatLE,4,e)
},p.prototype.double=function(e){
return this._push(o.float.writeDoubleLE,8,e)
}
var k=o.Array.prototype.set?function(e,t,i){
t.set(e,i)
}:function(e,t,i){
for(var a=0;a<e.length;++a){
t[i+a]=e[a]
}
}
p.prototype.bytes=function(e){
var t=e.length>>>0
if(!t){
return this._push(d,1,0)
}
if(o.isString(e)){
var i=p.alloc(t=n.length(e))
n.decode(e,i,0),e=i
}
return this.uint32(t)._push(k,t,e)
},p.prototype.string=function(e){
var t=s.length(e)
return t?this.uint32(t)._push(s.write,t,e):this._push(d,1,0)
},p.prototype.fork=function(){
return this.states=new u(this),this.head=this.tail=new l(c,0,0),
this.len=0,this
},p.prototype.reset=function(){
return this.states?(this.head=this.states.head,this.tail=this.states.tail,
this.len=this.states.len,
this.states=this.states.next):(this.head=this.tail=new l(c,0,0),
this.len=0),this
},p.prototype.ldelim=function(){
var e=this.head,t=this.tail,i=this.len
return this.reset().uint32(i),i&&(this.tail.next=e.next,this.tail=t,this.len+=i),
this
},p.prototype.finish=function(){
for(var e=this.head.next,t=this.constructor.alloc(this.len),i=0;e;){
e.fn(e.val,t,i),
i+=e.len,e=e.next
}
return t
},p._configure=function(e){
a=e
}
},function(e,t,i){
"use strict"
e.exports=l
var a,o=i(5),r=o.LongBits,n=o.utf8
function s(e,t){
return RangeError("index out of range: "+e.pos+" + "+(t||1)+" > "+e.len)
}
function l(e){
this.buf=e,this.pos=0,this.len=e.length
}
var c,u="undefined"!=typeof Uint8Array?function(e){
if(e instanceof Uint8Array||Array.isArray(e)){
return new l(e)
}
throw Error("illegal buffer")
}:function(e){
if(Array.isArray(e)){
return new l(e)
}
throw Error("illegal buffer")
}
function p(){
var e=new r(0,0),t=0
if(!(this.len-this.pos>4)){
for(;t<3;++t){
if(this.pos>=this.len){
throw s(this)
}
if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128){
return e
}
}
return e.lo=(e.lo|(127&this.buf[this.pos++])<<7*t)>>>0,e
}
for(;t<4;++t){
if(e.lo=(e.lo|(127&this.buf[this.pos])<<7*t)>>>0,this.buf[this.pos++]<128){
return e
}
}
if(e.lo=(e.lo|(127&this.buf[this.pos])<<28)>>>0,e.hi=(e.hi|(127&this.buf[this.pos])>>4)>>>0,
this.buf[this.pos++]<128){
return e
}
if(t=0,this.len-this.pos>4){
for(;t<5;++t){
if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128){
return e
}
}
}else{
for(;t<5;++t){
if(this.pos>=this.len){
throw s(this)
}
if(e.hi=(e.hi|(127&this.buf[this.pos])<<7*t+3)>>>0,this.buf[this.pos++]<128){
return e
}
}
}
throw Error("invalid varint encoding")
}
function d(e,t){
return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0
}
function g(){
if(this.pos+8>this.len){
throw s(this,8)
}
return new r(d(this.buf,this.pos+=4),d(this.buf,this.pos+=4))
}
l.create=o.Buffer?function(e){
return(l.create=function(e){
return o.Buffer.isBuffer(e)?new a(e):u(e)
})(e)
}:u,l.prototype._slice=o.Array.prototype.subarray||o.Array.prototype.slice,
l.prototype.uint32=(c=4294967295,
function(){
if(c=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128){
return c
}
if(c=(c|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128){
return c
}
if(c=(c|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128){
return c
}
if(c=(c|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128){
return c
}
if(c=(c|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128){
return c
}
if((this.pos+=5)>this.len){
throw this.pos=this.len,s(this,10)
}
return c
}),l.prototype.int32=function(){
return 0|this.uint32()
},l.prototype.sint32=function(){
var e=this.uint32()
return e>>>1^-(1&e)|0
},l.prototype.bool=function(){
return 0!==this.uint32()
},l.prototype.fixed32=function(){
if(this.pos+4>this.len){
throw s(this,4)
}
return d(this.buf,this.pos+=4)
},l.prototype.sfixed32=function(){
if(this.pos+4>this.len){
throw s(this,4)
}
return 0|d(this.buf,this.pos+=4)
},l.prototype.float=function(){
if(this.pos+4>this.len){
throw s(this,4)
}
var e=o.float.readFloatLE(this.buf,this.pos)
return this.pos+=4,e
},l.prototype.double=function(){
if(this.pos+8>this.len){
throw s(this,4)
}
var e=o.float.readDoubleLE(this.buf,this.pos)
return this.pos+=8,e
},l.prototype.bytes=function(){
var e=this.uint32(),t=this.pos,i=this.pos+e
if(i>this.len){
throw s(this,e)
}
return this.pos+=e,Array.isArray(this.buf)?this.buf.slice(t,i):t===i?new this.buf.constructor(0):this._slice.call(this.buf,t,i)
},
l.prototype.string=function(){
var e=this.bytes()
return n.read(e,0,e.length)
},l.prototype.skip=function(e){
if("number"==typeof e){
if(this.pos+e>this.len){
throw s(this,e)
}
this.pos+=e
}else{
do{
if(this.pos>=this.len){
throw s(this)
}
}while(128&this.buf[this.pos++])
}
return this
},l.prototype.skipType=function(e){
switch(e){
case 0:
this.skip()
break
case 1:
this.skip(8)
break
case 2:
this.skip(this.uint32())
break
case 3:
for(;4!=(e=7&this.uint32());){
this.skipType(e)
}
break
case 5:
this.skip(4)
break
default:
throw Error("invalid wire type "+e+" at offset "+this.pos)
}
return this
},l._configure=function(e){
a=e
var t=o.Long?"toLong":"toNumber"
o.merge(l.prototype,{
int64:function(){
return p.call(this)[t](!1)
},
uint64:function(){
return p.call(this)[t](!0)
},
sint64:function(){
return p.call(this).zzDecode()[t](!1)
},
fixed64:function(){
return g.call(this)[t](!0)
},
sfixed64:function(){
return g.call(this)[t](!1)
}
})
}
},function(e,t,i){
"use strict"
t.a=function(){
return!1
}
},function(e){
e.exports=[{
id:39,
name:"Google+",
category:11,
pattern:"apis\\.google\\.com\\/(\\_\\/[+]1\\/fastbutton|js\\/plusone\\.js)|plusone\\.google\\.com\\/\\_\\/[+]1\\/fastbutton",
domains:["google.com"]
},{
id:110,
name:"Linkedin",
category:13,
pattern:"platform\\.linkedin\\.com\\/in\\.js|platform\\.linkedin\\.com\\/js\\/(nonSecureAnonymousFramework|secureAnonymousFramework)|www\\.linkedin\\.com\\/countserv\\/count\\/share",
domains:["linkedin.com"]
},{
id:135,
name:"Disqus",
category:13,
pattern:"mediacdn\\.disqus\\.com|disqus\\.com\\/(api|forums|embed)",
domains:["disqus.com"]
},{
id:400,
name:"Pinterest",
category:13,
pattern:"assets\\.pinterest\\.com\\/js\\/pinit\\.js|\\.pinterest\\.com\\/images\\/(pidgets|(pinext|pinterest\\-button|follow\\-on\\-pinterest\\-button|(big|small)\\-p\\-button)\\.png|bm\\/button\\.png|about\\/buttons\\/(pinterest\\-button|follow\\-me\\-on\\-pinterest\\-button|(big|small)\\-p\\-button)\\.png)|(widgets|api)\\.pinterest\\.com(\\/v1\\/urls\\/count\\.json|\\/v3\\/pidgets\\/log\\/)",
domains:["pinterest.com"]
},{
id:703,
name:"Facebook",
category:13,
pattern:"((badge|connect|api|graph)\\.facebook\\.(com|net))|(facebook\\.(com|net)\\/(badge|plugins|widgets|([a-z]+\\/u\\.php)))",
domains:["facebook.com","facebook.net"]
},{
id:704,
name:"Twitter",
category:13,
pattern:"platform\\.twitter\\.com\\/widgets|r\\.twimg\\.com\\/jot|p\\.twitter\\.com\\/(f|t)\\.gif|twitter\\.com\\/javascripts\\/[0-9a-z]+\\.js|(cdn|urls)\\.api\\.twitter\\.com\\/.*\\/(count|show)\\.json",
domains:["twitter.com","twimg.com"]
},{
id:705,
name:"Doubleclick",
category:3,
pattern:"([0-9a-z]+\\.)?([0-9a-z]|-|_)+\\.doubleclick\\.net|(([0-9a-z]|-)+\\.)?([0-9a-z]|-|_)+\\.2mdn\\.net",
domains:["doubleclick.net","2mdn.net"]
},{
id:706,
name:"Google Analytics",
category:1,
pattern:"([0-9a-z]+\\.)?google-analytics\\.com(?!\\/cx)",
domains:["google-analytics.com"]
},{
id:707,
name:"Appnexus",
category:3,
domains:["adnxs.com"]
},{
id:708,
name:"Quantcast",
category:3,
domains:["quantserve.com"]
},{
id:710,
name:"Google Static",
category:1,
pattern:"([0-9a-z]+\\.)?metric\\.gstatic\\.com",
domains:["gstatic.com"]
},{
id:711,
name:"Scorecard Research",
category:1,
domains:["scorecardresearch.com"]
},{
id:712,
name:"AddThis",
category:11,
domains:["addthis.com"]
},{
id:714,
name:"Google Adsense",
category:5,
pattern:"([0-9a-z]+\\.)?googleadservices\\.com|([0-9a-z]+\\.)?([0-9a-z]|-|_)+\\.googlesyndication\\.com",
domains:["googleadservices.com","googlesyndication.com"]
},{
id:715,
name:"ShareThis",
category:11,
domains:["sharethis.com"]
},{
id:716,
name:"Yahoo Ad YieldManager",
category:5,
domains:["yieldmanager.com"]
},{
id:717,
name:"Rubicon",
category:3,
domains:["rubiconproject.com"]
},{
id:718,
name:"Turn",
category:3,
domains:["turn.com"]
},{
id:719,
name:"BlueKai",
category:4,
domains:["bluekai.com"]
},{
id:720,
name:"Invite Media by Google",
category:4,
pattern:"(([0-9a-z]|-|_)+\\.)?(([0-9a-z]|-|_)+\\.)?([0-9a-z]|-|_)+\\.invitemedia\\.com",
domains:["invitemedia.com"]
},{
id:721,
name:"Google Admeld",
category:4,
domains:["admeld.com"]
},{
id:722,
name:"Twitter Counter",
category:4,
pattern:"(cdn|button)\\.twittercounter\\.com",
domains:["twittercounter.com"]
},{
id:723,
name:"OpenX",
category:5,
domains:["openx.com"]
},{
id:724,
name:"Criteo",
category:5,
pattern:"([0-9a-z]+\\.)?([0-9a-z]+\\.)?[0-9a-z]+\\.criteo\\.(com|net)",
domains:["criteo.com","criteo.net"]
},{
id:725,
name:"PubMatic",
category:5,
domains:["pubmatic.com"]
},{
id:726,
name:"CNZZ",
category:1,
domains:["cnzz.com","cnzz.net"]
},{
id:727,
name:"StatCounter",
category:1,
domains:["statcounter.com"]
},{
id:728,
name:"Chartbeat",
category:1,
domains:["chartbeat.com","chartbeat.net"]
},{
id:729,
name:"Google GPT",
category:3,
pattern:"\\.googletagservices\\.com\\/tag\\/js\\/(.+)\\.js",
domains:["googletagservices.com"]
},{
id:730,
name:"Atlas Advertiser Suite",
category:5,
domains:["atdmt.com"]
},{
id:731,
name:"Simplicity Marketing Ltd",
category:5,
domains:["flashtalking.com"]
},{
id:732,
name:"AdTech AOL ",
category:5,
domains:["adtech.de","adtechus.com"]
},{
id:733,
name:"Gemius SA",
category:3,
domains:["gemius.pl"]
},{
id:734,
name:"Mediamind DG",
category:5,
pattern:"([0-9a-z]+\\.)?([0-9a-z]+\\.)?[0-9a-z]+\\.serving\\-sys\\.com",
domains:["serving-sys.com"]
},{
id:735,
name:"MediaMath",
category:3,
pattern:"([0-9a-z]+\\.)?([0-9a-z]+\\.)?[0-9a-z]+\\.mathtag\\.com",
domains:["mathtag.com"]
},{
id:736,
name:"ExoClick",
category:5,
domains:["exoclick.com"]
},{
id:737,
name:"PulsePoint",
category:5,
domains:["contextweb.com"]
},{
id:738,
name:"Tribal Fusion, Inc.",
category:5,
domains:["tribalfusion.com"]
},{
id:739,
name:"Brightcove, Inc",
category:3,
pattern:"([a-z0-9]+\\.)brightcove\\.com\\/1pix\\.gif|metrics\\.brightcove\\.com\\/tracker",
domains:["brightcove.com"]
},{
id:740,
name:"Tynt by 33across.com",
category:3,
domains:["tynt.com"]
},{
id:741,
name:"AdRoll",
category:5,
domains:["adroll.com"]
},{
id:742,
name:"Zedo, Inc.",
category:5,
domains:["zedo.com"]
},{
id:743,
name:"Smart AdServer",
category:5,
domains:["smartadserver.com"]
},{
id:744,
name:"Zanox Ltd",
category:5,
domains:["zanox.com"]
},{
id:745,
name:"BuySellAds.com",
category:5,
domains:["buysellads.com"]
},{
id:746,
name:"Media Innovation Group",
category:5,
domains:["mookie1.com"]
},{
id:747,
name:"Vibrant Media",
category:5,
domains:["intellitxt.com"]
},{
id:748,
name:"PlugRush",
category:4,
domains:["plugrush.com"]
},{
id:749,
name:"eXelate",
category:4,
domains:["exelator.com"]
},{
id:751,
name:"AudienceScience Inc.",
category:3,
domains:["revsci.net","wunderloop.net"]
},{
id:752,
name:"AdScale",
category:5,
domains:["adscale.de"]
},{
id:753,
name:"Nielsen",
category:3,
domains:["imrworldwide.com"]
},{
id:754,
name:"Lotame",
category:3,
domains:["crwdcntrl.net"]
},{
id:755,
name:"whos.amung.us Inc.",
category:1,
domains:["amung.us"]
},{
id:756,
name:"Mediaplex",
category:1,
domains:["mediaplex.com"]
},{
id:758,
name:"2o7.net",
category:1,
pattern:"[0-9a-z]+\\.122\\.2o7\\.net|[0-9a-z]+\\.112\\.2o7\\.net",
domains:["2o7.net"]
},{
id:759,
name:"Improve Digital",
category:3,
domains:["360yield.com"]
},{
id:760,
name:"Histats",
category:1,
domains:["histats.com"]
},{
id:761,
name:"Say Media",
category:5,
domains:["saymedia.com"]
},{
id:762,
name:"INFOnline GmbH",
category:1,
domains:["ivwbox.de"]
},{
id:763,
name:"Adobe AudienceManager",
category:3,
domains:["demdex.net"]
},{
id:764,
name:"Advertising.com",
category:5,
domains:["advertising.com"]
},{
id:765,
name:"DataXu, Inc.",
category:5,
domains:["w55c.net"]
},{
id:766,
name:"Datalogix",
category:5,
domains:["nexac.com"]
},{
id:767,
name:"AdOcean",
category:3,
domains:["adocean.pl"]
},{
id:768,
name:"Advanced Store",
category:5,
domains:["ad4mat.de"]
},{
id:769,
name:"Effective Measure",
category:1,
domains:["effectivemeasure.net"]
},{
id:770,
name:"TRUSTe",
category:3,
pattern:"([a-z0-9]\\.)?choices\\.truste\\.com\\/(get|ca)",
domains:["truste.com"]
},{
id:771,
name:"JuicyAds",
category:5,
domains:["juicyads.com"]
},{
id:772,
name:"Heias AdServing Tech.",
category:5,
pattern:"([a-z0-9]\\.)?ads\\.heias\\.com|cdn-([a-z0-9]|-)+\\.heias\\.com",
domains:["heias.com"]
},{
id:773,
name:"Redvertisment",
category:5,
pattern:"([0-9a-z]+\\.)?hal9000\\.redintelligence\\.net",
domains:["redintelligence.net"]
},{
id:774,
name:"Rocket Fuel Inc.",
category:3,
pattern:"(a|p|([0-9])p)\\.rfihub\\.com",
domains:["rfihub.com"]
},{
id:775,
name:"Caraytech",
category:5,
domains:["e-planning.net"]
},{
id:776,
name:"Tumblr",
category:11,
pattern:"platform\\.tumblr\\.com\\/v[0-9]\\/(share([0-9a-z]|-|_)?|follow([0-9a-z]|-|_)?)",
domains:["tumblr.com"]
},{
id:777,
name:"Internet BillBoard",
category:5,
domains:["ibillboard.com","bbelements.com"]
},{
id:778,
name:"Optimizely",
category:1,
pattern:"cdn([0-9]?)\\.optimizely\\.com\\/(js|img)",
domains:["optimizely.com"]
},{
id:779,
name:"Omniture",
category:1,
domains:["omtrdc.net"]
},{
id:780,
name:"Rambler Media",
category:1,
pattern:"counter\\.rambler\\.ru\\/top100([0-9a-z]|-|_)?",
domains:["rambler.ru"]
},{
id:781,
name:"AdFox",
category:5,
domains:["adfox.ru"]
},{
id:782,
name:"Mail.Ru Group",
category:1,
pattern:"[0-9a-z]+\\.mail\\.ru\\/(counter[0-9a-z]?|share[0-9a-z]?)|cdn\\.connect\\.mail\\.ru\\/js\\/(loader\\.js|share\\/[0-9]+\\/share\\.js)",
domains:["mail.ru"]
},{
id:783,
name:"XiTi By AT Internet",
category:1,
domains:["xiti.com"]
},{
id:784,
name:"Chango",
category:5,
domains:["chango.com"]
},{
id:785,
name:"New Relic",
category:1,
pattern:"beacon-[0-9]\\.newrelic\\.com",
domains:["newrelic.com"]
},{
id:786,
name:"AudienceRate Ltd",
category:4,
domains:["12mlbe.com"]
},{
id:787,
name:"Casale Media",
category:5,
pattern:"(as|ip|js|r|[0-9a-z]+)\\.casalemedia\\.com",
domains:["casalemedia.com"]
},{
id:788,
name:"LiveRamp, Inc.",
category:3,
domains:["rlcdn.com"]
},{
id:789,
name:"Neustar AdAdvisor",
category:3,
domains:["adadvisor.net"]
},{
id:790,
name:"Direct/Advert",
category:5,
domains:["directadvert.ru"]
},{
id:791,
name:"SiteScout",
category:5,
domains:["sitescout.com"]
},{
id:792,
name:"Google GTM",
category:1,
pattern:"[0-9a-z]+\\.googletagmanager\\.com\\/gtm\\.js",
domains:["googletagmanager.com"]
},{
id:793,
name:"ValueClick Media",
category:5,
pattern:"[0-9a-z]+\\.fastclick\\.net|[0-9a-z]+\\.apmebf\\.com|[0-9a-z]+\\.yceml\\.net",
domains:["fastclick.net","apmebf.com","yceml.net"]
},{
id:794,
name:"Simpli.fi",
category:3,
domains:["simpli.fi"]
},{
id:795,
name:"The Trade Desk",
category:5,
domains:["adsrvr.org"]
},{
id:796,
name:"Adobe Typekit",
category:0,
pattern:"([a-z0-9].\\+)p\\.typekit\\.net\\/p\\.gif",
domains:["typekit.net"]
},{
id:797,
name:"Alexa",
category:1,
pattern:"(xsltcache|xslt)\\.alexa\\.com\\/site_stats\\/(gif|js)\\/.*",
domains:["alexa.com"]
},{
id:798,
name:"24/7 Real Media",
category:3,
domains:["247realmedia.com"]
},{
id:799,
name:"EroAdvertising",
category:5,
pattern:"(([a-z0-9]\\.)|data\\-)ero\\-advertising\\.com",
domains:["ero-advertising.com","data-ero-advertising.com"]
},{
id:800,
name:"News Distribution Network",
category:5,
domains:["newsinc.com"]
},{
id:801,
name:"TNS Gallup Media",
category:3,
domains:["tns-counter.ru"]
},{
id:802,
name:"Bizo Bizographic",
category:5,
domains:["bizographics.com"]
},{
id:803,
name:"Burst Media",
category:5,
domains:["burstnet.com"]
},{
id:804,
name:"[x+1]",
category:3,
pattern:"([0-9a-z]+)\\.xp1\\.ru4\\.com",
domains:["ru4.com"]
},{
id:805,
name:"Dstillery",
category:3,
domains:["media6degrees.com"]
},{
id:806,
name:"Telemetry",
category:5,
pattern:"([0-9a-z]+)\\.telemetryverification\\.net",
domains:["telemetryverification.net"]
},{
id:807,
name:"RadiumOne",
category:13,
domains:["po.st","gwallet.com"]
},{
id:808,
name:"AdPepper Media",
category:5,
domains:["emediate.eu"]
},{
id:809,
name:"TLVMedia",
category:5,
domains:["tlvmedia.com"]
},{
id:810,
name:"Feedjit",
category:1,
domains:["feedjit.com"]
},{
id:811,
name:"MicroAd",
category:5,
domains:["microad.jp"]
},{
id:812,
name:"Adform",
category:5,
domains:["adform.net","adformdsp.net"]
},{
id:813,
name:"AdRiver",
category:5,
domains:["adriver.ru"]
},{
id:814,
name:"Lijit Networks",
category:5,
domains:["lijit.com"]
},{
id:815,
name:"ADITION",
category:5,
domains:["adition.com"]
},{
id:816,
name:"Ligatus",
category:3,
domains:["ligatus.com"]
},{
id:817,
name:"Digilant",
category:5,
domains:["wtp101.com"]
},{
id:818,
name:"SpotXchange",
category:5,
domains:["spotxchange.com"]
},{
id:819,
name:"Tradedoubler",
category:5,
domains:["tradedoubler.com"]
},{
id:820,
name:"i-mobile Co.",
category:5,
domains:["i-mobile.co.jp"]
},{
id:821,
name:"Admeta",
category:5,
domains:["atemda.com"]
},{
id:822,
name:"Adconion Media Group",
category:5,
domains:["amgdgt.com"]
},{
id:823,
name:"Acxiom Corporation",
category:4,
pattern:"p?\\.acxiom\\-online\\.com",
domains:["acxiom-online.com"]
},{
id:824,
name:"Krux",
category:1,
domains:["krxd.net"]
},{
id:825,
name:"Sociomantic Labs",
category:5,
domains:["sociomantic.com"]
},{
id:826,
name:"Federated Media Publishing",
category:5,
domains:["fmpub.net"]
},{
id:827,
name:"Weborama",
category:4,
domains:["weborama.fr"]
},{
id:828,
name:"nonstopConsulting",
category:4,
pattern:"(a|banner|dynpng)\\.nonstoppartner\\.net",
domains:["nonstoppartner.net"]
},{
id:829,
name:"Contentspread",
category:3,
domains:["contentspread.net"]
},{
id:830,
name:"DoubleVerify",
category:5,
domains:["doubleverify.com"]
},{
id:831,
name:"Adzerk",
category:5,
domains:["adzerk.net"]
},{
id:832,
name:"AdSpirit",
category:5,
domains:["adspirit.de"]
},{
id:833,
name:"Specific Media",
category:5,
domains:["specificclick.net"]
},{
id:834,
name:"AdXpansion",
category:5,
domains:["adxpansion.com"]
},{
id:835,
name:"OwnerIQ",
category:5,
domains:["owneriq.net"]
},{
id:836,
name:"CPMStar",
category:5,
domains:["cpmstar.com"]
},{
id:837,
name:"Adlabs Media Network",
category:3,
domains:["luxup.ru"]
},{
id:838,
name:"Webtrends",
category:1,
pattern:"statse\\.webtrendslive\\.com",
domains:["webtrendslive.com"]
},{
id:839,
name:"AOL Time Warner",
category:5,
domains:["atwola.com"]
},{
id:840,
name:"Brandscreen",
category:5,
domains:["rtbidder.net"]
},{
id:841,
name:"Media.net",
category:5,
domains:["media.net"]
},{
id:842,
name:"Active Performance",
category:5,
domains:["active-srv02.de"]
},{
id:843,
name:"Experian Marketing Services",
category:5,
domains:["audienceiq.com"]
},{
id:844,
name:"Coremetrics",
category:1,
domains:["coremetrics.com"]
},{
id:845,
name:"Dotomi",
category:5,
domains:["dotomi.com"]
},{
id:846,
name:"Chitika",
category:5,
domains:["chitika.net"]
},{
id:847,
name:"TownNews.com",
category:3,
pattern:"(stats|adimages|adsys)\\.townnews\\.com",
domains:["townnews.com"]
},{
id:848,
name:"StumbleUpon",
category:13,
pattern:"(www|badge|platform)\\.stumbleupon\\.com",
domains:["stumbleupon.com"]
},{
id:849,
name:"Triggit",
category:5,
domains:["triggit.com"]
},{
id:850,
name:"Site Meter",
category:1,
domains:["sitemeter.com"]
},{
id:851,
name:"ClixSense",
category:3,
domains:["adhitzads.com"]
},{
id:852,
name:"Google Feedburner",
category:13,
domains:["feedburner.com"]
},{
id:853,
name:"Aggregate Knowledge",
category:5,
domains:["agkn.com"]
},{
id:854,
name:"Matomy Media Group",
category:5,
domains:["xtendmedia.com"]
},{
id:855,
name:"LiveRail",
category:5,
domains:["liverail.com"]
},{
id:856,
name:"Adify",
category:5,
domains:["afy11.net"]
},{
id:857,
name:"Adverticum",
category:5,
domains:["adverticum.net"]
},{
id:858,
name:"AWeber",
category:0,
domains:["aweber.com"]
},{
id:859,
name:"Connexity",
category:3,
domains:["connexity.net"]
},{
id:860,
name:"Collective",
category:5,
domains:["collective-media.net"]
},{
id:861,
name:"Tremor Video",
category:5,
domains:["scanscout.com"]
},{
id:862,
name:"Tealium",
category:5,
pattern:"tags\\.tiqcdn\\.com",
domains:["tiqcdn.com"]
},{
id:863,
name:"Adap.tv",
category:5,
domains:["adap.tv"]
},{
id:864,
name:"DMG",
category:5,
domains:["z5x.net"]
},{
id:865,
name:"nugg.ad",
category:5,
domains:["nuggad.net"]
},{
id:866,
name:"KISSmetrics",
category:1,
domains:["kissmetrics.com"]
},{
id:867,
name:"Hatena",
category:11,
pattern:"([0-9a-z]+\\.)?b\\.st\\-hatena\\.com",
domains:["st-hatena.com"]
},{
id:868,
name:"Clicky",
category:1,
domains:["getclicky.com"]
},{
id:869,
name:"Target Performance",
category:5,
domains:["ad-srv.net"]
},{
id:870,
name:"myThings",
category:5,
domains:["mythings.com"]
},{
id:871,
name:"Cedexis",
category:1,
pattern:"[0-9a-z]+\\.cedexis\\-radar\\.net|(radar|probes)\\.cedexis\\.com",
domains:["cedexis-radar.net","cedexis.com"]
},{
id:872,
name:"CastAClip",
category:5,
domains:["castaclip.net"]
},{
id:873,
name:"Twenty Four Interactive",
category:5,
domains:["adaos-ads.net"]
},{
id:874,
name:"Cross Pixel",
category:4,
domains:["crsspxl.com"]
},{
id:875,
name:"D.A.Consortium",
category:5,
domains:["impact-ad.jp"]
},{
id:876,
name:"Tanx",
category:5,
domains:["tanx.com"]
},{
id:877,
name:"51.La",
category:1,
domains:["51.la"]
},{
id:878,
name:"Expedia",
category:5,
pattern:"ads\\.expedia\\.com",
domains:["expedia.com"]
},{
id:879,
name:"Skimlinks",
category:5,
domains:["skimresources.com"]
},{
id:880,
name:"ClickTale",
category:1,
domains:["clicktale.net"]
},{
id:881,
name:"Sina Weibo",
category:13,
pattern:"api\\.weibo\\.com\\/.*\\/(shorten|counts)\\.json|(widget|service)\\.weibo\\.com",
domains:["weibo.com"]
},{
id:882,
name:"Yieldlab",
category:5,
domains:["yieldlab.net"]
},{
id:883,
name:"Exponential Interactive",
category:5,
domains:["exponential.com"]
},{
id:884,
name:"Outbrain",
category:2,
domains:["outbrain.com"]
},{
id:885,
name:"Navegg",
category:4,
domains:["navdmp.com"]
},{
id:886,
name:"AudienceTV",
category:5,
pattern:"([a-z0-9]+\\.)hiro\\.tv|synd\\.travelplus\\.tv",
domains:["hiro.tv","travelplus.tv"]
},{
id:887,
name:"YuMe, Inc.",
category:5,
domains:["crowdscience.com"]
},{
id:888,
name:"LinkWithin",
category:13,
domains:["linkwithin.com"]
},{
id:889,
name:"YD World",
category:5,
domains:["254a.com"]
},{
id:890,
name:"QQ Widgets",
category:13,
pattern:"pub\\.idqqimg\\.com|[0-9a-z]+\\.gtimg\\.com",
domains:["idqqimg.com","gtimg.com"]
},{
id:891,
name:"Affilinet",
category:5,
domains:["webmasterplan.com"]
},{
id:892,
name:"UserVoice",
category:13,
pattern:"(widget|cdn)\\.uservoice\\.com|by\\.uservoice\\.com\\/.*\\/track\\.js",
domains:["uservoice.com"]
},{
id:893,
name:"Brandwire",
category:5,
domains:["teleskipp.de"]
},{
id:894,
name:"Visual Website Optimizer",
category:2,
pattern:"[0-9a-z]+\\.visualwebsiteoptimizer\\.com",
domains:["visualwebsiteoptimizer.com"]
},{
id:895,
name:"TeaserNet",
category:5,
domains:["miokoo.com"]
},{
id:896,
name:"99Widgets",
category:13,
domains:["99widgets.com"]
},{
id:897,
name:"AdJug",
category:5,
domains:["adjug.com"]
},{
id:898,
name:"OpenStat",
category:1,
domains:["openstat.net"]
},{
id:899,
name:"Eloqua",
category:4,
domains:["eloqua.com"]
},{
id:900,
name:"Accuen",
category:5,
domains:["p-td.com"]
},{
id:901,
name:"Technorati Media",
category:5,
domains:["technoratimedia.com"]
},{
id:902,
name:"Forumotion",
category:2,
domains:["all-up.com"]
},{
id:903,
name:"Switch Concepts",
category:5,
domains:["switchadhub.com"]
},{
id:904,
name:"Truehits.net",
category:1,
domains:["truehits.in.th"]
},{
id:905,
name:"Begun",
category:5,
domains:["begun.ru"]
},{
id:906,
name:"Yahoo BlueLithium",
category:4,
domains:["bluelithium.com"]
},{
id:907,
name:"Future",
category:5,
domains:["futurecdn.net"]
},{
id:908,
name:"R7",
category:3,
pattern:"parceiro\\.log\\.r7\\.com",
domains:["r7.com"]
},{
id:909,
name:"eBay Affiliate",
category:3,
pattern:"(rover|stats)\\.ebay\\.com",
domains:["ebay.com"]
},{
id:910,
name:"Commission Junction",
category:5,
domains:["kdukvh.com"]
},{
id:911,
name:"Olark",
category:2,
domains:["olark.com"]
},{
id:912,
name:"MadAds Media",
category:5,
domains:["madadsmedia.com"]
},{
id:913,
name:"Videology",
category:5,
domains:["lucidmedia.com","tidaltv.com"]
},{
id:914,
name:"Adorika Media Ltd",
category:5,
domains:["adorika.net"]
},{
id:915,
name:"Amazon Affiliate",
category:5,
pattern:"(wms|ws|www)\\.assoc\\-amazon\\.com",
domains:["assoc-amazon.com"]
},{
id:916,
name:"i2i.jp",
category:1,
domains:["i2i.jp"]
},{
id:917,
name:"Visual Revenue - Outbrain",
category:1,
pattern:"(a|t|p)\\.visualrevenue\\.com",
domains:["visualrevenue.com"]
},{
id:918,
name:"Ebay Enterprise",
category:5,
domains:["fetchback.com"]
},{
id:919,
name:"Ebuzzing",
category:5,
domains:["ebuzzing.com"]
},{
id:920,
name:"Mixpanel",
category:1,
domains:["mixpanel.com"]
},{
id:921,
name:"OLX",
category:5,
domains:["olx-st.com"]
},{
id:922,
name:"AdvertStream",
category:5,
domains:["advertstream.com"]
},{
id:923,
name:"BuzzFeed Widgets",
category:13,
pattern:"ct\\.buzzfeed\\.com\\/wd\\/UserWidget|buzzbox\\.buzzfeed\\.com\\/wd\\/BuzzBox",
domains:["buzzfeed.com"]
},{
id:924,
name:"Netmining",
category:5,
domains:["netmng.com"]
},{
id:925,
name:"United Internet Media",
category:4,
domains:["uicdn.net"]
},{
id:926,
name:"Clicksor",
category:5,
domains:["clicksor.com"]
},{
id:927,
name:"BidVertiser",
category:5,
pattern:"(bdv|cdn)\\.bidvertiser\\.com",
domains:["bidvertiser.com"]
}]
},function(e,t,i){
"use strict"
const a=i(30),o=i(31),r=i(32),{browserNameToEnum:n,platformNameToEnum:s,cpuToEnum:l}=i(33),c=5e3,u=500
class p extends a{
constructor(e,t,i){
super(),this._localStorage=i.localStorage||localStorage,this._retries=0,
this._url=e,
this._adapter=t,this._options=i,this._flushInterval=null,this._eventsCache={},
this._storageKey=i.storageKey||"records",
this._sessionId=i.session_id||p.createSessionId(),
this._errorState=0,this._abTests=[],
this.send=r.bind(this),this._loadEvents().then(e=>{
[...Object.keys(e),...Object.keys(this._eventsCache)].forEach(t=>this._eventsCache[t]=[...e[t]||[],...this._eventsCache[t]||[]]),
this.flush(),
this._flushInterval=setInterval(()=>{
this.flush()
},i.batchTimeoutMs||c),this.emit(p.Event.INITIALIZED)
})
}
updateIdentity(e){
return this._updateOptions("identity",e)
}
updateProduct(e){
return this._updateOptions("product",e)
}
updatePlatform(e){
return this._updateOptions("platform",e)
}
updateGeo(e){
return this._updateOptions("geo",e)
}
updateInstallation(e){
return this._updateOptions("installation",e)
}
updateLicense(e){
return this._updateOptions("license",e)
}
updateShepherd(e){
return this._updateOptions("shepherd",e)
}
updateExtensionProduct(e){
return this._updateOptions("extensionProduct",e)
}
updateExtensionProductIdentity(e){
return this._updateOptions("extensionProductIdentity",e)
}
updateCampaign(e){
return this._updateOptions("campaign",e)
}
updateSettings(e){
return this._updateOptions("settings",e)
}
get hasPendingEvents(){
return Object.keys(this._eventsCache).some(e=>0!==this._eventsCache[e].length)
}
static createSessionId(){
return function(e){
var t=""
for(;e-- >0;){
t+=Math.floor(16*Math.random()).toString(16)
}
return t
}(24)
}
setSessionId(e){
return this._sessionId=e,this
}
setErrorState(e){
return this._errorState=e,this
}
setHTTPErrorState(e){
let t=e
return 0==e?t=-1:e<400&&(t=0),this.setErrorState(t),this
}
setABTest(e,t){
let i=this._abTests.find((function(t){
return t.test_id===e
}))
return i?i.test_group_id=t:(this._abTests.push({
test_id:e,
test_group_id:t
}),this._abTests.sort((function(e,t){
return e.test_id<t.test_id?-1:e.test_id>t.test_id?1:0
}))),this
}
setABTests(e){
if(!Array.isArray(e)||e.some(e=>"string"!=typeof e.test_id||"string"!=typeof e.test_group_id)){
throw new Error("Invalid parameter:",JSON.stringify(e,null,2))
}
return this._abTests=e,this._abTests.sort((function(e,t){
return e.test_id<t.test_id?-1:e.test_id>t.test_id?1:0
})),this
}
sendEvent(e){
const t=Object.assign({},e)
if(t.event&&void 0!==t.event.type){
if([1,2,6].includes(t.event.type)){
try{
fetch(this._url,this._adapter({
record:[this._updateRecord(t)],
common:{
send_time:Date.now()
}
}))
}catch(e){}
}else{
this._eventsCache[t.event.type]||(this._eventsCache[t.event.type]=[]),this._eventsCache[t.event.type].push(t),
this._flushInterval&&this._localStorage.setItem(this._storageKey,JSON.stringify(this._eventsCache)),
this._eventsCache[t.event.type].length<(this._options.batchSizeLimit||u)||this.flush({
type:t.event.type
})
}
}
}
flush(e){
if(e&&void 0!==e.type&&0==this._eventsCache[e.type].length||!this.hasPendingEvents){
return Promise.resolve(null)
}
if(e&&e.doNotVerify){
if(void 0!==e.type){
let t=Object.assign({},this._eventsCache)
delete t[e.type],this._localStorage.setItem(this._storageKey,JSON.stringify(t))
}else{
this._localStorage.setItem(this._storageKey,"{}")
}
}
const t=e&&"undefined"!==e.type?[e.type]:Object.keys(this._eventsCache)
return Promise.all(t.map(e=>{
try{
let t={
record:this._eventsCache[e].map(this._updateRecord.bind(this)),
common:{
send_time:Date.now()
}
}
const i=this._adapter(t)
return fetch(this._url,i).then(t=>t.status>=400&&t.status<500||++this._retries>=(this._options.maxRetries||3)?(this._clearEvents(e),
t.text().then(e=>"Data rejected: "+t.status+" "+t.statusText+"\n"+e)):t.status>=500?"Burger failure: "+t.status+" "+t.statusText:(this._clearEvents(e),
this.emit(p.Event.FLUSHED),
null)).catch(e=>this._options.ignoreNetworkErrors?(this._retries=0,
null):e)
}catch(t){
return this._clearEvents(e),Promise.resolve(t)
}
})).then(e=>{
if(1==e.length){
return e[0]
}
const t=e.filter(e=>null!==e)
return t.length>0?t.join(", "):null
})
}
_updateOptions(e,t){
for(var i in t){
void 0===t[i]?this._options[e]&&delete this._options[e][i]:(this._options[e]||(this._options[e]={}),
this._options[e][i]=t[i])
}
return this
}
_updateRecord(e){
if(this._options.identity&&(e.identity=this._options.identity),
this._options.product&&(e.product=this._options.product),
this._options.platform&&(e.platform=this._options.platform,
void 0!==e.platform.os&&"number"!=typeof e.platform.os&&(e.platform.os=s(e.platform.os)),
void 0!==e.platform.architecture&&"number"!=typeof e.platform.architecture&&(e.platform.architecture=l(e.platform.architecture))),
this._options.license&&(e.license=this._options.license),
this._options.installation&&(e.installation=this._options.installation),
this._options.shepherd&&(e.shepherd=this._options.shepherd),
this._options.geo&&(e.geo=this._options.geo),
"undefined"!=typeof navigator&&navigator.userAgent){
let t=o(navigator.userAgent)
e.browser={
type:n(t.browser.name),
version:t.browser.version
},navigator.language&&(e.browser.lang=navigator.language)
}
if("undefined"!=typeof navigator&&(d(e,{
platform:{}
}),d(e.platform,{
os:s(navigator.platform),
time_zone:-(new Date).getTimezoneOffset()
}),navigator.userAgent)){
let t=o(navigator.userAgent)
d(e.platform,{
version:t.os.version,
architecture:l(t.cpu.architecture)
}),"Chromium OS"===t.os.name&&(e.platform.os=6,
5==e.platform.architecture&&(-1!=navigator.userAgent.indexOf("x86_64")?e.platform.architecture=2:-1!=navigator.userAgent.indexOf("x86")?e.platform.architecture=1:-1!=navigator.userAgent.indexOf("armv")&&(e.platform.architecture=4)))
}
return this._options.campaign&&(e.campaign=this._options.campaign),this._options.settings&&(e.settings=this._options.settings),
e
}
_loadEvents(){
return Promise.resolve(this._localStorage.getItem(this._storageKey)).then(e=>e?JSON.parse(e):{}).then(e=>Array.isArray(e)||"object"!=typeof e?{}:e).catch(()=>(this._localStorage.setItem(this._storageKey,"{}"),
{}))
}
_clearEvents(e){
this._retries=0,void 0===e?this._eventsCache={}:delete this._eventsCache[e],
!this._flushInterval||this._options&&this._options.doNotVerify||this._localStorage.setItem(this._storageKey,JSON.stringify(this._eventsCache))
}
}
function d(e,t){
for(let i in t){
void 0===e[i]&&(e[i]=t[i])
}
return e
}
p.Event={
INITIALIZED:"initialized",
FLUSHED:"flushed"
},e.exports=p
},function(e,t,i){
"use strict"
const a={
InstallEnvelope:1,
HeartbeatEnvelope:2,
UpdateEnvelope:4,
ActivityEnvelope:5,
PreferencesEnvelope:6,
IssueEnvelope:9,
AOSWebshieldScanningEnvelope:41,
MaliciousURLEnvelope:46,
VoteEnvelope:47
},o=Object.keys(a).reduce((function(e,t){
return e[a[t]]=t,e
}),{})
e.exports={
create:function(e){
return function(t){
const i=t.record[0].event.type,a=e[o[i]]
let r=t.record.slice().map(e=>Object.assign({},e))
const n=a.$type.getChild("record").resolvedType
return r.forEach((function(e){
for(let t in e){
n.getChild(t)||delete e[t]
}
})),{
method:"POST",
headers:{
"Content-Type":"application/octet-stream"
},
body:new a(Object.assign({},t,{
record:r
})).encodeAB()
}
}
}
}
},function(e,t,i){
e.exports=i(34).newBuilder({}).import({
package:null,
syntax:"proto2",
options:{
java_outer_classname:"VoteEnvelopeProto"
},
messages:[{
name:"ABTest",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"name",
id:1
},{
rule:"optional",
type:"bool",
name:"variant",
id:2
}]
},{
name:"Browser",
syntax:"proto2",
fields:[{
rule:"optional",
type:"BrowserType",
name:"type",
id:1
},{
rule:"optional",
type:"string",
name:"version",
id:2
},{
rule:"optional",
type:"string",
name:"lang",
id:3
}]
},{
name:"EnvelopeCommon",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int64",
name:"send_time",
id:1
},{
rule:"optional",
type:"bool",
name:"no_geo",
id:2
}]
},{
name:"Event",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int32",
name:"type",
id:1
},{
rule:"optional",
type:"int32",
name:"subtype",
id:2
},{
rule:"optional",
type:"int64",
name:"time",
id:3
},{
rule:"optional",
type:"int64",
name:"reception_time",
id:4
}]
},{
name:"Geo",
syntax:"proto2",
fields:[{
rule:"optional",
type:"bytes",
name:"ip",
id:1
},{
rule:"optional",
type:"string",
name:"country",
id:2
},{
rule:"optional",
type:"string",
name:"region",
id:3
},{
rule:"optional",
type:"string",
name:"city",
id:4
},{
rule:"optional",
type:"double",
name:"latitude",
id:5
},{
rule:"optional",
type:"double",
name:"longitude",
id:6
},{
rule:"optional",
type:"string",
name:"isp",
id:7
},{
rule:"optional",
type:"int64",
name:"asn",
id:8
}]
},{
name:"Identity",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"guid",
id:1
},{
rule:"optional",
type:"string",
name:"hwid",
id:2
},{
rule:"optional",
type:"string",
name:"uuid",
id:3
}]
},{
name:"Installation",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"aiid",
id:1
},{
rule:"optional",
type:"int64",
name:"time",
id:2
},{
rule:"optional",
type:"SetupAction",
name:"action",
id:3
}]
},{
name:"License",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"wallet_key",
id:1
},{
rule:"optional",
type:"string",
name:"container_id",
id:2
},{
rule:"optional",
type:"LicenseEdition",
name:"edition",
id:3
},{
rule:"optional",
type:"ModeType",
name:"type",
id:4
},{
rule:"optional",
type:"bool",
name:"subscription_mode",
id:5
},{
rule:"optional",
type:"string",
name:"schema_id",
id:6
},{
rule:"optional",
type:"int64",
name:"issued",
id:7
},{
rule:"optional",
type:"int64",
name:"activation",
id:8
},{
rule:"optional",
type:"int64",
name:"valid_thru",
id:9
},{
rule:"optional",
type:"int32",
name:"count",
id:10
},{
rule:"optional",
type:"int32",
name:"count_device",
id:11
}]
},{
name:"Order",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int64",
name:"unique_id",
id:1
},{
rule:"optional",
type:"int32",
name:"ordering",
id:2
}]
},{
name:"Platform",
syntax:"proto2",
fields:[{
rule:"optional",
type:"OperatingSystem",
name:"os",
id:1
},{
rule:"optional",
type:"string",
name:"version",
id:2
},{
rule:"optional",
type:"string",
name:"build",
id:3
},{
rule:"optional",
type:"int32",
name:"ubr",
id:4
},{
rule:"optional",
type:"Architecture",
name:"architecture",
id:5
},{
rule:"optional",
type:"string",
name:"score",
id:6
},{
rule:"optional",
type:"string",
name:"lang",
id:7
},{
rule:"optional",
type:"sint32",
name:"time_zone",
id:8
}]
},{
name:"Product",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int32",
name:"id",
id:1
},{
rule:"optional",
type:"int32",
name:"edition",
id:2
},{
rule:"optional",
type:"ModeType",
name:"mode",
id:3
},{
rule:"optional",
type:"StateType",
name:"state",
id:4
},{
rule:"optional",
type:"string",
name:"lang",
id:5
},{
rule:"optional",
type:"string",
name:"version_app",
id:6
},{
rule:"optional",
type:"string",
name:"version_gui",
id:7
},{
rule:"optional",
type:"int32",
name:"build",
id:8
},{
rule:"optional",
type:"string",
name:"partner_id",
id:9
}]
},{
name:"Shepherd",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int64",
name:"id",
id:1
},{
rule:"optional",
type:"string",
name:"name",
id:2
},{
rule:"optional",
type:"int64",
name:"version",
id:3
}]
},{
name:"InternalEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"InternalRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"InternalRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Order",
name:"order",
id:9
},{
rule:"optional",
type:"Browser",
name:"browser",
id:10
},{
rule:"optional",
type:"ABTest",
name:"ab_test",
id:11
}]
},{
name:"TestEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"TestRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"TestRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"string",
name:"test_id",
id:1e3
}]
},{
name:"Campaign",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"string",
name:"test",
id:1
}]
},{
name:"Settings",
syntax:"proto2",
fields:[{
rule:"optional",
type:"SettingsConsent",
name:"consent",
id:1
},{
rule:"optional",
type:"int32",
name:"eula",
id:2
},{
rule:"optional",
type:"int32",
name:"eula_version",
id:3
}]
},{
name:"SettingsConsent",
syntax:"proto2",
fields:[{
rule:"optional",
type:"bool",
name:"product_marketing",
id:1
},{
rule:"optional",
type:"bool",
name:"product_development",
id:2
},{
rule:"optional",
type:"bool",
name:"third_party_apps",
id:3
},{
rule:"optional",
type:"bool",
name:"third_party_analytics",
id:4
}]
},{
name:"Activity",
syntax:"proto2",
fields:[{
rule:"optional",
type:"ActivityCommon",
name:"common",
id:1
},{
rule:"optional",
type:"ActivityObject",
name:"object",
id:2
},{
rule:"optional",
type:"ActivityTime",
name:"time",
id:3
},{
rule:"optional",
type:"ActivityScope",
name:"scope",
id:4
},{
rule:"optional",
type:"ActivityCustom",
name:"custom",
id:5
}]
},{
name:"ActivityCommon",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"session_id",
id:1
},{
rule:"optional",
type:"string",
name:"test_id",
id:2
},{
rule:"optional",
type:"string",
name:"test_group_id",
id:3
},{
rule:"optional",
type:"int32",
name:"error_state",
id:4
}]
},{
name:"ActivityObject",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"category",
id:1
},{
rule:"optional",
type:"string",
name:"action",
id:2
},{
rule:"optional",
type:"string",
name:"label",
id:3
},{
rule:"optional",
type:"string",
name:"view",
id:4
}]
},{
name:"ActivityTime",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int64",
name:"request",
id:1
},{
rule:"optional",
type:"int64",
name:"response",
id:2
},{
rule:"optional",
type:"int64",
name:"render",
id:3
}]
},{
name:"ActivityScope",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int64",
name:"hit",
id:1
},{
rule:"optional",
type:"int64",
name:"session",
id:2
},{
rule:"optional",
type:"int64",
name:"user_level",
id:3
}]
},{
name:"ActivityCustom",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"a1",
id:1
},{
rule:"optional",
type:"string",
name:"a2",
id:2
},{
rule:"optional",
type:"string",
name:"a3",
id:3
},{
rule:"optional",
type:"string",
name:"a4",
id:4
},{
rule:"optional",
type:"string",
name:"a5",
id:5
},{
rule:"optional",
type:"string",
name:"a6",
id:6
},{
rule:"optional",
type:"string",
name:"a7",
id:7
},{
rule:"optional",
type:"string",
name:"a8",
id:8
},{
rule:"optional",
type:"string",
name:"a9",
id:9
},{
rule:"optional",
type:"string",
name:"a10",
id:10
},{
rule:"optional",
type:"string",
name:"f1",
id:11
},{
rule:"optional",
type:"string",
name:"f2",
id:12
},{
rule:"optional",
type:"string",
name:"f3",
id:13
},{
rule:"optional",
type:"string",
name:"f4",
id:14
},{
rule:"optional",
type:"string",
name:"f5",
id:15
},{
rule:"optional",
type:"string",
name:"f6",
id:16
},{
rule:"optional",
type:"string",
name:"f7",
id:17
},{
rule:"optional",
type:"string",
name:"f8",
id:18
},{
rule:"optional",
type:"string",
name:"f9",
id:19
},{
rule:"optional",
type:"string",
name:"f10",
id:20
}]
},{
name:"ActivityEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"ActivityRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"ActivityRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Browser",
name:"browser",
id:10
},{
rule:"optional",
type:"Campaign",
name:"campaign",
id:11
},{
rule:"optional",
type:"Settings",
name:"settings",
id:12
},{
rule:"optional",
type:"Activity",
name:"activity",
id:1e3
}]
},{
name:"Heartbeat",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int64",
name:"uptime",
id:1
},{
rule:"optional",
type:"HeartbeatAV",
name:"av",
id:2
},{
rule:"optional",
type:"HeartbeatVPN",
name:"vpn",
id:3
}]
},{
name:"HeartbeatAV",
syntax:"proto2",
fields:[{
rule:"optional",
type:"HeartbeatWinAV",
name:"windows",
id:1
}]
},{
name:"HeartbeatWinAV",
syntax:"proto2",
fields:[{
rule:"optional",
type:"WinAVGSMainStatus",
name:"gs_main_status",
id:1
}]
},{
name:"HeartbeatVPN",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"vpn_name",
id:1
},{
rule:"optional",
type:"int32",
name:"connections_succeeded",
id:2
},{
rule:"optional",
type:"int32",
name:"connections_failed",
id:3
}]
},{
name:"HeartbeatEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"HeartbeatRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"HeartbeatRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Browser",
name:"browser",
id:10
},{
rule:"optional",
type:"Campaign",
name:"campaign",
id:11
},{
rule:"optional",
type:"Settings",
name:"settings",
id:12
},{
rule:"optional",
type:"Heartbeat",
name:"heartbeat",
id:1e3
}]
},{
name:"Install",
syntax:"proto2",
fields:[{
rule:"optional",
type:"SetupAction",
name:"operation",
id:1
},{
rule:"optional",
type:"InstallError",
name:"error",
id:2
}]
},{
name:"InstallError",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"code",
id:1
},{
rule:"optional",
type:"string",
name:"msg",
id:2
}]
},{
name:"InstallEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"InstallRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"InstallRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Browser",
name:"browser",
id:9
},{
rule:"optional",
type:"Campaign",
name:"campaign",
id:10
},{
rule:"optional",
type:"Settings",
name:"settings",
id:11
},{
rule:"optional",
type:"Install",
name:"install",
id:1e3
}]
},{
name:"Issue",
syntax:"proto2",
fields:[{
rule:"optional",
type:"IssueCategory",
name:"category",
id:1
},{
rule:"optional",
type:"IssueSource",
name:"source",
id:2
},{
rule:"optional",
type:"IssueObject",
name:"error",
id:3
}]
},{
name:"IssueObject",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"code",
id:1
},{
rule:"optional",
type:"string",
name:"subcode",
id:2
},{
rule:"optional",
type:"IssueSeverity",
name:"severity",
id:3
},{
rule:"optional",
type:"string",
name:"message",
id:4
},{
rule:"optional",
type:"string",
name:"log",
id:5
}]
},{
name:"IssueEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"IssueRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"IssueRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Browser",
name:"browser",
id:10
},{
rule:"optional",
type:"Campaign",
name:"campaign",
id:11
},{
rule:"optional",
type:"Settings",
name:"settings",
id:12
},{
rule:"optional",
type:"Issue",
name:"issue",
id:1e3
}]
},{
name:"Licensing",
syntax:"proto2",
fields:[{
rule:"optional",
type:"LicensingOperation",
name:"operation",
id:1
},{
rule:"optional",
type:"LicensingType",
name:"type",
id:2
},{
rule:"optional",
type:"LicensingInitiated",
name:"initiated",
id:3
},{
rule:"optional",
type:"License",
name:"new_license",
id:4
},{
rule:"optional",
type:"LicensingError",
name:"error",
id:6
}]
},{
name:"LicensingError",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"code",
id:1
},{
rule:"optional",
type:"string",
name:"msg",
id:2
}]
},{
name:"LicensingEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"LicensingRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"LicensingRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Browser",
name:"browser",
id:10
},{
rule:"optional",
type:"Campaign",
name:"campaign",
id:11
},{
rule:"optional",
type:"Settings",
name:"settings",
id:12
},{
rule:"optional",
type:"Licensing",
name:"licensing",
id:1e3
}]
},{
name:"Preferences",
syntax:"proto2",
fields:[{
rule:"optional",
type:"PreferencesProduct",
name:"config",
id:2
},{
rule:"optional",
type:"int64",
name:"previous_time",
id:3
}]
},{
name:"PreferencesProduct",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"PreferencesProductFeature",
name:"configuration",
id:1
}]
},{
name:"PreferencesProductFeature",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"category",
id:1
},{
rule:"optional",
type:"string",
name:"name",
id:2
},{
rule:"optional",
type:"string",
name:"state",
id:3
}]
},{
name:"PreferencesEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"PreferencesRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"PreferencesRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Browser",
name:"browser",
id:10
},{
rule:"optional",
type:"Campaign",
name:"campaign",
id:11
},{
rule:"optional",
type:"Settings",
name:"settings",
id:12
},{
rule:"optional",
type:"Preferences",
name:"preferences",
id:1e3
}]
},{
name:"Uninstall",
syntax:"proto2",
fields:[{
rule:"optional",
type:"UninstallOperation",
name:"operation",
id:1
},{
rule:"optional",
type:"UninstallError",
name:"error",
id:2
}]
},{
name:"UninstallError",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"code",
id:1
},{
rule:"optional",
type:"string",
name:"msg",
id:2
}]
},{
name:"UninstallEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"UninstallRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"UninstallRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Browser",
name:"browser",
id:9
},{
rule:"optional",
type:"Campaign",
name:"campaign",
id:11
},{
rule:"optional",
type:"Settings",
name:"settings",
id:12
},{
rule:"optional",
type:"Uninstall",
name:"uninstall",
id:1e3
}]
},{
name:"Update",
syntax:"proto2",
fields:[{
rule:"optional",
type:"UpdateAction",
name:"action",
id:1
},{
rule:"optional",
type:"UpdateComponent",
name:"component",
id:2
},{
rule:"optional",
type:"UpdateType",
name:"type",
id:3
},{
rule:"optional",
type:"UpdateTime",
name:"time",
id:4
},{
rule:"optional",
type:"UpdateTargetVersion",
name:"version",
id:5
},{
rule:"optional",
type:"UpdateProductSetting",
name:"setting",
id:6
},{
rule:"optional",
type:"UpdateError",
name:"error",
id:7
}]
},{
name:"UpdateTime",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int64",
name:"previous",
id:1
},{
rule:"optional",
type:"int64",
name:"starts",
id:2
},{
rule:"optional",
type:"int64",
name:"ends",
id:3
}]
},{
name:"UpdateProductSetting",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"program",
id:1
},{
rule:"optional",
type:"string",
name:"source",
id:2
},{
rule:"optional",
type:"string",
name:"svc_state",
id:3
}]
},{
name:"UpdateTargetVersion",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"version_app",
id:1
},{
rule:"optional",
type:"string",
name:"version_gui",
id:2
},{
rule:"optional",
type:"int32",
name:"build",
id:3
},{
rule:"optional",
type:"string",
name:"version_setup",
id:4
},{
rule:"optional",
type:"int32",
name:"microupdate_id",
id:5
}]
},{
name:"UpdateError",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"code",
id:1
},{
rule:"optional",
type:"string",
name:"msg",
id:2
}]
},{
name:"UpdateEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"UpdateRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"UpdateRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Browser",
name:"browser",
id:9
},{
rule:"optional",
type:"Update",
name:"updates",
id:1e3
}]
},{
name:"AOSWebshieldScanning",
syntax:"proto2",
fields:[{
rule:"optional",
type:"sint64",
name:"caller_id",
id:1
},{
rule:"optional",
type:"int64",
name:"webshield_setting",
id:2
},{
rule:"optional",
type:"string",
name:"request_domain",
id:3
},{
rule:"optional",
type:"AOSRequestDurations",
name:"request_durations",
id:4
},{
rule:"optional",
type:"AOSProductAV",
name:"product_av",
id:5
}]
},{
name:"AOSProductAV",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Identity",
name:"identity",
id:1
},{
rule:"optional",
type:"Product",
name:"product",
id:2
}]
},{
name:"AOSRequestDurations",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int32",
name:"headers_received",
id:1
},{
rule:"optional",
type:"int32",
name:"response_started",
id:2
},{
rule:"optional",
type:"int32",
name:"request_completed",
id:3
},{
rule:"optional",
type:"int32",
name:"dom_loaded",
id:4
},{
rule:"optional",
type:"int32",
name:"page_loaded",
id:5
}]
},{
name:"AOSWebshieldScanningEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"AOSWebshieldScanningRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"AOSWebshieldScanningRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Browser",
name:"browser",
id:6
},{
rule:"optional",
type:"AOSWebshieldScanning",
name:"aos_webshield_scanning",
id:1e3
}]
},{
name:"ConnectivityChecker",
syntax:"proto2",
fields:[{
rule:"optional",
type:"int64",
name:"event_time",
id:1
},{
rule:"optional",
type:"int32",
name:"service_id",
id:2
},{
rule:"optional",
type:"int32",
name:"status_code",
id:3
},{
rule:"optional",
type:"int32",
name:"error_code",
id:4
},{
rule:"optional",
type:"int32",
name:"vpn",
id:5
},{
rule:"optional",
type:"int32",
name:"wifi",
id:6
},{
rule:"optional",
type:"int32",
name:"ipv4",
id:7
},{
rule:"optional",
type:"int32",
name:"ipv6",
id:8
},{
rule:"optional",
type:"int32",
name:"count",
id:9
}]
},{
name:"ConnectivityCheckerEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"ConnectivityCheckerRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"ConnectivityCheckerRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"ConnectivityChecker",
name:"connectivity_checker",
id:1e3
}]
},{
name:"MaliciousContent",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"url",
id:1
}]
},{
name:"MaliciousURLEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"MaliciousURLRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"MaliciousURLRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Browser",
name:"browser",
id:6
},{
rule:"optional",
type:"MaliciousContent",
name:"malicious",
id:1e3
}]
},{
name:"VoteRequest",
syntax:"proto2",
fields:[{
rule:"optional",
type:"string",
name:"url",
id:1
},{
rule:"optional",
type:"int32",
name:"rating",
id:2
}]
},{
name:"VoteEnvelope",
syntax:"proto2",
fields:[{
rule:"repeated",
type:"VoteRecord",
name:"record",
id:1
},{
rule:"optional",
type:"EnvelopeCommon",
name:"common",
id:2
}]
},{
name:"VoteRecord",
syntax:"proto2",
fields:[{
rule:"optional",
type:"Event",
name:"event",
id:1
},{
rule:"optional",
type:"Identity",
name:"identity",
id:2
},{
rule:"optional",
type:"Product",
name:"product",
id:3
},{
rule:"optional",
type:"Platform",
name:"platform",
id:4
},{
rule:"optional",
type:"Geo",
name:"geo",
id:5
},{
rule:"optional",
type:"Installation",
name:"installation",
id:6
},{
rule:"optional",
type:"License",
name:"license",
id:7
},{
rule:"optional",
type:"Shepherd",
name:"shepherd",
id:8
},{
rule:"optional",
type:"Browser",
name:"browser",
id:10
},{
rule:"optional",
type:"Campaign",
name:"campaign",
id:11
},{
rule:"optional",
type:"Settings",
name:"settings",
id:12
},{
rule:"optional",
type:"VoteRequest",
name:"vote",
id:1e3
}]
}],
enums:[{
name:"BrowserType",
syntax:"proto2",
values:[{
name:"OTHER_BROWSER",
id:1
},{
name:"AVAST_SECURE_BROWSER",
id:2
},{
name:"CHROME",
id:3
},{
name:"FIREFOX",
id:4
},{
name:"SAFARI",
id:5
},{
name:"EDGE",
id:6
},{
name:"OPERA",
id:7
},{
name:"IE",
id:8
},{
name:"PALE_MOON",
id:9
},{
name:"NETSCAPE",
id:10
},{
name:"UC",
id:11
},{
name:"YAB",
id:12
},{
name:"COC_COC",
id:13
},{
name:"CHROMIUM",
id:14
},{
name:"VIVALDI",
id:15
}]
},{
name:"SetupAction",
syntax:"proto2",
values:[{
name:"INSTALL",
id:1
},{
name:"REINSTALL",
id:2
},{
name:"REPAIR",
id:3
},{
name:"UPGRADE",
id:4
},{
name:"MIGRATION",
id:5
}]
},{
name:"LicenseEdition",
syntax:"proto2",
values:[{
name:"AV_FREE",
id:1
},{
name:"AV_PRO",
id:2
},{
name:"AV_AIS",
id:3
},{
name:"AV_APR",
id:4
},{
name:"AV_BUSINESS",
id:5
},{
name:"AV_VPN",
id:6
},{
name:"GF_SRV",
id:7
},{
name:"AV_PSW",
id:8
},{
name:"AV_PAP",
id:9
},{
name:"AV_PSM",
id:10
},{
name:"AV_ASH",
id:12
},{
name:"AV_SOHO",
id:13
},{
name:"AV_AVG_PRO",
id:14
},{
name:"AV_AVG_FREE",
id:15
},{
name:"AV_AVG_BUSINESS",
id:16
},{
name:"PCT_AVG_PRO",
id:17
},{
name:"AVG_VPN",
id:18
},{
name:"HMA_VPN_CONSUMER",
id:19
},{
name:"HMA_VPN_TRIAL",
id:20
},{
name:"HMA_VPN_BUSINESS",
id:21
},{
name:"GF_V2",
id:22
}]
},{
name:"ModeType",
syntax:"proto2",
values:[{
name:"NO_LICENSE",
id:1
},{
name:"FREE",
id:2
},{
name:"TRIAL",
id:3
},{
name:"PAID",
id:4
},{
name:"OEM",
id:5
},{
name:"PRE_AUTH_TRIAL",
id:6
},{
name:"BETA",
id:7
},{
name:"FREEMIUM",
id:8
},{
name:"TRIAL_HARDCODED",
id:9
}]
},{
name:"StateType",
syntax:"proto2",
values:[{
name:"ACTIVE",
id:1
},{
name:"EXPIRED",
id:2
}]
},{
name:"OperatingSystem",
syntax:"proto2",
values:[{
name:"WINDOWS",
id:1
},{
name:"OSX",
id:2
},{
name:"IOS",
id:3
},{
name:"LINUX",
id:4
},{
name:"ANDROID",
id:5
}]
},{
name:"Architecture",
syntax:"proto2",
values:[{
name:"X86",
id:1
},{
name:"X64",
id:2
},{
name:"ARM",
id:3
},{
name:"ARM64",
id:4
},{
name:"MIPS",
id:5
}]
},{
name:"WinAVGSMainStatus",
syntax:"proto2",
values:[{
name:"NULL",
id:0
},{
name:"GREEN",
id:1
},{
name:"YELLOW",
id:2
},{
name:"RED",
id:3
}]
},{
name:"IssueCategory",
syntax:"proto2",
values:[{
name:"DEBUG",
id:1
},{
name:"CRASH",
id:2
},{
name:"ERROR_FAULT",
id:3
},{
name:"FAILURE",
id:4
},{
name:"WARNING",
id:5
}]
},{
name:"IssueSource",
syntax:"proto2",
values:[{
name:"USER",
id:1
},{
name:"SYSTEM",
id:2
},{
name:"CLIENT",
id:3
},{
name:"SERVICE",
id:4
},{
name:"BACKEND",
id:5
}]
},{
name:"IssueSeverity",
syntax:"proto2",
values:[{
name:"TRIVIAL",
id:1
},{
name:"LOW",
id:2
},{
name:"HIGH",
id:3
},{
name:"CRITICAL",
id:4
},{
name:"BLOCKER",
id:5
}]
},{
name:"LicensingOperation",
syntax:"proto2",
values:[{
name:"NOTACTIVATED",
id:1
},{
name:"NA_FREE",
id:2
},{
name:"FREE_FREE",
id:3
},{
name:"FREE_TRIAL",
id:4
},{
name:"FREE_PAID",
id:5
},{
name:"NA_TRIAL",
id:6
},{
name:"TRIAL_TRIAL",
id:8
},{
name:"TRIAL_FREE",
id:9
},{
name:"TRIAL_PAID",
id:10
},{
name:"NA_PAID",
id:11
},{
name:"PAID_PAID",
id:12
},{
name:"PAID_FREE",
id:13
},{
name:"PAID_TRIAL",
id:14
}]
},{
name:"LicensingType",
syntax:"proto2",
values:[{
name:"UNKNOWN_LICENSE_TYPE_ON_CLIENT",
id:0
},{
name:"WALLET_KEY_LICENSE_TYPE",
id:1
},{
name:"S_TYPE",
id:2
},{
name:"C_TYPE",
id:3
},{
name:"FILE_LEGACY",
id:4
},{
name:"FILE_ALPHA",
id:5
},{
name:"AVG",
id:6
},{
name:"EMS_TYPE",
id:7
}]
},{
name:"LicensingInitiated",
syntax:"proto2",
values:[{
name:"UNKNOWN_ORIGIN",
id:0
},{
name:"MANUAL",
id:1
},{
name:"CART",
id:2
},{
name:"LOCAL_WK",
id:3
},{
name:"ALD_GET_UNATTENDED_TRIAL",
id:4
},{
name:"ALD_ACCEPT_TRIAL",
id:5
},{
name:"ALD_DISCOVER_WK",
id:6
},{
name:"ALD_SWITCH_TO_FREE",
id:7
},{
name:"INSTALLER",
id:8
},{
name:"WEBSHIELD",
id:9
},{
name:"MYAVAST",
id:10
},{
name:"SUBSCRIPTION_PAGE",
id:11
},{
name:"CONFLICT",
id:12
},{
name:"MIGRATIONALPHA",
id:13
}]
},{
name:"UninstallOperation",
syntax:"proto2",
values:[{
name:"USERSTARTED",
id:1
},{
name:"UNINSTALLED",
id:2
}]
},{
name:"UpdateAction",
syntax:"proto2",
values:[{
name:"DOWNLOADING_SUCCESS",
id:1
},{
name:"DOWNLOADING_FAILED",
id:2
},{
name:"UPDATING_SUCCESS",
id:3
},{
name:"UPDATING_FAILED",
id:4
}]
},{
name:"UpdateComponent",
syntax:"proto2",
values:[{
name:"PROGRAM",
id:1
},{
name:"SETUP",
id:2
},{
name:"VPS",
id:3
}]
},{
name:"UpdateType",
syntax:"proto2",
values:[{
name:"NORMAL",
id:1
},{
name:"MICRO",
id:2
},{
name:"EMERGENCY",
id:3
}]
}],
isNamespace:!0
}).build()
},function(e){
e.exports={
ar:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"بيتا",
"global.detailsShow":"تفاصيل",
"global.detailsHide":"إخفاء التفاصيل",
"global.done":"تم",
"global.leaveSite":"مغادرة الموقع",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - موقع غير معروف",
"background.icon.safe":"{0} - هذا الموقع آمن",
"background.icon.bad":"{0} - قد يكون هذا الموقع غير موثوق",
"background.icon.unsafe":"{0} - قد يكون هذا الموقع غير آمن",
"security.title":"الأمن",
"security.safe.title":"هذا الموقع آمن",
"security.safe.item1.desc":"من دون تصيد",
"security.safe.item1.tooltip":"لم نكتشف أي محاولات لسرقة المعلومات الحساسة مثل كلمات المرور، وأرقام بطاقات الائتمان وغيرها على هذا الموقع.",
"security.safe.item2.desc":"من دون برمجيات خبيثة",
"security.safe.item2.tooltip":"لم نكتشف أي رمز خبيث على هذا الموقع.",
"security.safe.item3.desc":"موثوق",
"security.safe.item3.tooltip":"قام مستخدمو {0} بتقييم هذا الموقع بأنه موثوق به بالنقر فوق {1} في {0} Online Security.",
"security.bad.title":"قد يكون هذا غير موثوق به",
"security.bad.desc":"لم نعثر على أي تهديدات بالتصيد أو برمجيات خبيثة هنا، لكن العديد من مستخدمينا قد أعطوا للموقع علامة سلبية.",
"security.unknown.title":"موقع غير معروف",
"security.unknown.desc":"ليس لدينا ما يكفي من المعلومات لتقييم هذا الموقع بعد.",
"security.unsafe.title":"هذا الموقع غير آمن",
"security.unsafe.phishing.desc":"وُضعت علامة على هذا الموقع على أنه موقع تصيد. التصيد هو محاولة لسرقة معلومات حساسة منك مثل كلمات المرور وأرقام بطاقات الائتمان، وما إلى ذلك.",
"security.unsafe.malware.desc":"عثرنا على رمز خبيث على هذا الموقع، والذي من الممكن أن يضر جهاز الكمبيوتر الخاص بك أو يسرق بياناتك الخاصة.",
"rating.question.desc":"هل تثق في موقع {0}؟",
"rating.negative":"هل يوجد أي محتوى غير ملائم على هذا الموقع؟ (اختياري)",
"rating.thanks":"شكرًا على تقييمك!",
"rating.trusted.desc":"أنت <i>تثق</i> في موقع {0}",
"rating.untrusted.desc":"أنت <i>لا تثق</i> في موقع {0}",
"rating.revert.tooltip":"النقر لإزالة تقييمك",
"rating.tooltip":"ستؤخذ ثقتك أو عدمها في الاعتبار في تقييم الأمان الخاص بهذا الموقع.",
"rating.category.pornography":"إباحي",
"rating.category.violence":"أسلحة / عنف",
"rating.category.gambling":"لعب القمار",
"rating.category.drugs":"كحول / مخدرات",
"rating.category.illegal":"ويرز / غير قانوني",
"rating.category.others":"غير ذلك",
"privacy.title":"الخصوصية",
"privacy.group.Social.desc":"الشبكات الاجتماعية",
"privacy.group.Social.block.desc":"حظر تتبع الشبكات الاجتماعية بالكامل",
"privacy.group.Social.block.tooltip":"سيحظر ذلك تتبع الشبكات الاجتماعية على كل موقع تزوره.",
"privacy.group.Social.unblock.desc":"إلغاء حظر تتبع الشبكات الاجتماعية بالكامل",
"privacy.group.Social.unblock.tooltip":"سيسمح ذلك بتتبع الشبكات الاجتماعية على كل موقع تزوره.",
"privacy.group.AdTracking.desc":"تتبع الإعلانات",
"privacy.group.AdTracking.block.desc":"حظر تتبع الإعلانات بالكامل",
"privacy.group.AdTracking.block.tooltip":"سيحظر ذلك تتبع الإعلانات على كل موقع تزوره.",
"privacy.group.AdTracking.unblock.desc":"إلغاء حظر تتبع الإعلانات بالكامل",
"privacy.group.AdTracking.unblock.tooltip":"سيسمح ذلك بتتبع الإعلانات على أي موقع تزوره.",
"privacy.group.WebAnalytics.desc":"تحليلات المواقع",
"privacy.group.WebAnalytics.block.desc":"حظر تتبع تحليلات المواقع بالكامل",
"privacy.group.WebAnalytics.block.tooltip":"سيحظر ذلك تتبع تحليلات المواقع على كل موقع تزوره.",
"privacy.group.WebAnalytics.unblock.desc":"إلغاء حظر تتبع تحليلات المواقع بالكامل",
"privacy.group.WebAnalytics.unblock.tooltip":"سيسمح ذلك بالتتبعات الأخرى على كل موقع تزوره.",
"privacy.group.Others.desc":"غير ذلك",
"privacy.group.Others.block.desc":"حظر جميع التتبعات الأخرى",
"privacy.group.Others.block.tooltip":"سيحظر ذلك التتبع الآخر على كل موقع تزوره.",
"privacy.group.Others.unblock.desc":"إلغاء حظر جميع التتبعات الأخرى",
"privacy.trackersBlockedAll":"<i>{0} متتبع</i> بالكامل محظور على موقع {1} | <i>{0} متتبع</i> بالكامل محظور على موقع {1} | <i>{0} متتبع</i> بالكامل محظور على موقع {1} | <i>{0} متتبعين</i> بالكامل محظورين على موقع {1} | <i>{0} متتبع</i> بالكامل محظور على موقع {1} | <i>{0} متتبع</i> بالكامل محظور على موقع {1}",
"privacy.trackersBlockedSome":"<i>{0} من {1} متتبع</i> محظور على {2} | <i>{0} من {1} متتبع</i> محظور على {2} | <i>{0} من {1} متتبع</i> محظور على {2} | <i>{0} من {1} متتبعين</i> محظورين على {2} | <i>{0} من {1} متتبع</i> محظور على {2} | <i>{0} من {1} متتبع</i> محظور على {2}",
"privacy.trackersBlockedNone":"<i>{0} نظام متتبع</i> على موقع {1} | <i>{0} نظام متتبع</i> على موقع {1} | <i>{0} نظام متتبع</i> على موقع {1} | <i>{0} أنظمة متتبعة</i> على موقع {1} | <i>{0} نظام متتبع</i> على موقع {1} | <i>{0} نظام متتبع</i> على موقع {1}",
"privacy.trackersBlocked":"{0} من {1} محظور",
"privacy.trackersFound":"تم العثور على {0}",
"privacy.trackersNone":"لا شيء",
"privacy.trackerBlock.desc":"حظر",
"privacy.trackerBlock.tooltip":"سيحظر ذلك [{0}] على أي موقع تزوره.",
"privacy.trackerUnblock.desc":"محظور",
"privacy.trackerUnblock.tooltip":"سيلغي ذلك حظر [{0}] على كل موقع تزوره.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"لإلغاء حظر متتبع معين، قم بإيقاف الحظر التلقائي.",
"privacy.automaticBlocking.desc":"حظر جميع المتتبعين تلقائيًا",
"privacy.automaticBlocking.tooltip":"سنقوم بحظر جميع المتتبعين الذين عُثر عليهم على أي موقع تزوره تلقائيًا.",
"setting.title":"الإعدادات",
"setting.serp.name":"وضع علامة على نتائج البحث الخاص بي",
"setting.serp.desc":"أضف رموز ملونة إلى نتائج البحث الخاصة بك على Google وYahoo!، وما إلى ذلك. لمعرفة النتائج التي يمكن النقر عليها بأمان. (أخضر = آمن، رمادي = غير معروف، أحمر = غير آمن)",
"setting.serpPopup.name":"إظهار تلميحات لنتائج البحث",
"setting.serpPopup.desc":"حرك الماوس فوق الرموز الخاصة بنا لمعرفة مزيد من المعلومات.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"التبديل إلى وضع البنك للمواقع المالية الحساسة (يحتاج إلى تثبيت Avast Antivirus وAvast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"التبديل إلى وضع البنك للمواقع المالية الحساسة (يتطلب تثبيت AVG AntiVirus وAVG Secure Browser)",
"setting.dntBadge.name":"إظهار إجمالي المتتبعين على أحد المواقع",
"setting.dntBadge.desc":"إضافة شارة على متصفحك لمعرفة عدد المتتبعين على أي موقع على الفور.",
"setting.dntAutoBlock.name":"حظر جميع المتتبعين تلقائيًا",
"setting.dntAutoBlock.desc":"حظر جميع المتتبعين الذين عُثر عليهم على كل موقع تزوره.",
"setting.dntSocial.desc":"حظر جميع متتبعي الشبكات الاجتماعية",
"setting.dntAdTracking.desc":"حظر جميع متتبعي الإعلانات",
"setting.dntWebAnalytics.desc":"حظر جميع متتبعي تحليلات المواقع",
"setting.dntOthers.desc":"حظر جميع المتتبعين الآخرين",
"setting.communityIQ.name":"السماح بمشاركة بيانات الاستخدام مع الأطراف الثالثة للتحليلات",
"serp.safe.desc":"هذا الموقع آمن",
"serp.bad.desc":"قد يكون هذا الموقع غير موثوق",
"serp.unknown.desc":"ليس لهذا الموقع تقييم",
"serp.unsafe.desc":"هذا الموقع غير آمن",
"topbar.openBankMode":"الفتح في وضع البنك",
"topbar.desc":"قد تكون البيانات المالية الخاصة بك مرئيةً للآخرين.",
"topbar.tooltip":"يقوم وضع البنك، الذي هو جزء من متصفح Avast Secure Browser المثبت باستخدام Avast المضاد للفيروسات، بعزل جلسات المعاملات البنكية والتسوق الخاصة بك بأمان لإيقاف القراصنة من سرقة أرقام بطاقة الائتمان الخاص بك، وكلمات المرور، والبيانات الشخصية الأخرى.",
"topbar.dontShowAgain":"لا تظهر البيانات على هذا الموقع مرة أخرى"
},
be:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Бэта-версія",
"global.detailsShow":"Падрабязнасці",
"global.detailsHide":"Схаваць падрабязнасці",
"global.done":"Гатова",
"global.leaveSite":"Пакінуць сайт",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0}: невядомы сайт",
"background.icon.safe":"{0}: гэты вэб-сайт бяспечны",
"background.icon.bad":"{0}: гэты сайт можа быць небяспечным",
"background.icon.unsafe":"{0}: гэты вэб-сайт небяспечны",
"security.title":"Бяспека",
"security.safe.title":"Гэты вэб-сайт бяспечны",
"security.safe.item1.desc":"Фішынгу няма",
"security.safe.item1.tooltip":"На гэтым сайце не выяўлена спроб крадзяжу канфідэнцыяльнай інфармацыі, такой як паролі, нумары крэдытных картак і г. д.",
"security.safe.item2.desc":"Шкоднасных праграм няма",
"security.safe.item2.tooltip":"На гэтым сайце не выяўлены шкодны код.",
"security.safe.item3.desc":"Давераны",
"security.safe.item3.tooltip":"Карыстальнікі ({0}) ацанілі гэты вэб-сайт як надзейны, націснуўшы {1} у Online Security {0}.",
"security.bad.title":"Гэта можа быць небяспечным",
"security.bad.desc":"Тут не было выяўлена пагроз фішынгу або шкоднасных праграм, але многія нашы карыстальнікі далі гэтаму сайту адзнаку «палец уніз».",
"security.unknown.title":"Невядомы сайт",
"security.unknown.desc":"У нас пакуль не хапае інфармацыі, каб ацаніць гэты вэб-сайт.",
"security.unsafe.title":"Гэты вэб-сайт небяспечны",
"security.unsafe.phishing.desc":"Гэты вэб-сайт пазначаны як фішынгавы. Фішынг — гэта спроба ўкрасці канфідэнцыяльную інфармацыю, такую як паролі, нумары крэдытных картак і г. д.",
"security.unsafe.malware.desc":"На гэтым сайце знойдзены шкоднасны код, які можа нанесці шкоду вашаму камп’ютару ці ўкрасці вашы асабістыя даныя.",
"rating.question.desc":"Вы давяраеце {0}?",
"rating.negative":"Ці ёсць на гэтым вэб-сайце недапушчальнае змесціва? (неабавязкова)",
"rating.thanks":"Дзякуем за адзнаку!",
"rating.trusted.desc":"Вы <i>давяраеце</i> {0}",
"rating.untrusted.desc":"Вы <i>не давяраеце</i> {0}",
"rating.revert.tooltip":"Націсніце, каб выдаліць адзнаку",
"rating.tooltip":"Ваш давер або недавер будуць улічаны ў нашым рэйтынгу бяспекі для гэтага вэб-сайта.",
"rating.category.pornography":"Парнаграфія",
"rating.category.violence":"Зброя / Гвалт",
"rating.category.gambling":"Азартныя гульні",
"rating.category.drugs":"Алкаголь / Наркотыкі",
"rating.category.illegal":"Нелегальныя праграмы",
"rating.category.others":"Іншае",
"privacy.title":"Канфідэнцыяльнасць",
"privacy.group.Social.desc":"Сацыяльныя сеткі",
"privacy.group.Social.block.desc":"Заблакіраваць адсочванне сацыяльных сетак",
"privacy.group.Social.block.tooltip":"Гэта дзеянне заблакіруе адсочванне сацыяльных сетак на ўсіх сайтах, якія вы наведваеце.",
"privacy.group.Social.unblock.desc":"Разблакіраваць адсочванне сацыяльных сетак",
"privacy.group.Social.unblock.tooltip":"Гэта дзеянне дазволіць адсочванне сацыяльных сетак на ўсіх сайтах, якія вы наведваеце.",
"privacy.group.AdTracking.desc":"Адсочванне рэкламы",
"privacy.group.AdTracking.block.desc":"Заблакіраваць адсочванне рэкламы",
"privacy.group.AdTracking.block.tooltip":"Гэта дзеянне заблакіруе адсочванне рэкламы на ўсіх сайтах, якія вы наведваеце.",
"privacy.group.AdTracking.unblock.desc":"Разблакіраваць адсочванне рэкламы",
"privacy.group.AdTracking.unblock.tooltip":"Гэта дзеянне дазволіць адсочванне рэкламы на ўсіх сайтах, якія вы наведваеце.",
"privacy.group.WebAnalytics.desc":"Вэб-аналітыка",
"privacy.group.WebAnalytics.block.desc":"Заблакіраваць адсочванне вэб-аналітыкі",
"privacy.group.WebAnalytics.block.tooltip":"Гэта дзеянне заблакіруе адсочванне вэб-аналітыкі на ўсіх сайтах, якія вы наведваеце.",
"privacy.group.WebAnalytics.unblock.desc":"Разблакіраваць адсочванне вэб-аналітыкі",
"privacy.group.WebAnalytics.unblock.tooltip":"Гэта дзеянне дазволіць іншыя віды адсочвання на ўсіх сайтах, якія вы наведваеце.",
"privacy.group.Others.desc":"Іншае",
"privacy.group.Others.block.desc":"Заблакіраваць іншае адсочванне",
"privacy.group.Others.block.tooltip":"Гэта дзеянне заблакіруе іншыя віды адсочвання на ўсіх сайтах, якія вы наведваеце.",
"privacy.group.Others.unblock.desc":"Разблакіраваць іншае адсочванне",
"privacy.trackersBlockedAll":"На {1} заблакіраваны <i>{0} сродак адсочвання</i> | На {1} заблакіраваны ўсе <i>{0} сродкі адсочвання</i> | На {1} заблакіраваны ўсе <i>{0} сродкаў адсочвання</i> | На {1} заблакіраваны ўсе <i>{0} сродкаў адсочвання</i>",
"privacy.trackersBlockedSome":"На {2} заблакіраваны сродкі адсочвання: <i>{0} з {1}</i> | На {2} заблакіраваны сродкі адсочвання: <i>{0} з {1}</i> | На {2} заблакіраваны сродкі адсочвання: <i>{0} з {1}</i> | На {2} заблакіраваны сродкі адсочвання: <i>{0} з {1}</i>",
"privacy.trackersBlockedNone":"<i>{0} сістэма адсочвання</i> на {1} | <i>{0} сістэмы адсочвання</i> на {1} | <i>{0} сістэм адсочвання</i> на {1} | <i>{0} сістэм адсочвання</i> на {1}",
"privacy.trackersBlocked":"Заблакіравана: {0} з {1}",
"privacy.trackersFound":"Знойдзена: {0}",
"privacy.trackersNone":"нічога",
"privacy.trackerBlock.desc":"Заблакіраваць",
"privacy.trackerBlock.tooltip":"Гэта дзеянне заблакіруе [{0}] на ўсіх сайтах, якія вы наведваеце.",
"privacy.trackerUnblock.desc":"Заблакіравана",
"privacy.trackerUnblock.tooltip":"Гэта дзеянне разблакіруе [{0}] на ўсіх сайтах, якія вы наведваеце.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Каб разблакіраваць пэўны сродак адсочвання, выключыце аўтаматычную блакіроўку.",
"privacy.automaticBlocking.desc":"Аўтаматычна блакіраваць усе сродкі адсочвання",
"privacy.automaticBlocking.tooltip":"Мы будзем аўтаматычна блакіраваць усе знойдзеныя сродкі адсочвання на ўсіх сайтах, якія вы наведваеце.",
"setting.title":"Налады",
"setting.serp.name":"Пазначыць мае вынікі пошуку",
"setting.serp.desc":"Дадаваць каляровыя значкі да вынікаў пошуку ў Google, Yahoo! і г. д., каб бачыць, якія вынікі бяспечныя (зялёны — бяспечна, шэры — невядома, чырвоны — небяспечна)",
"setting.serpPopup.name":"Паказваць падказкі для вынікаў пошуку",
"setting.serpPopup.desc":"Навядзіце мышку на значок, каб атрымаць дадатковую інфармацыю.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Для працы з канфідэнцыяльнай фінансавай інфармацыяй пераключыцеся на рэжым банкінгу (патрабуецца антывірус Avast і Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Для працы з канфідэнцыяльнай фінансавай інфармацыяй пераключыцеся на рэжым банкінгу (патрабуецца антывірус AVG і AVG Secure Browser)",
"setting.dntBadge.name":"Паказваць колькасць усіх сродкаў адсочвання на сайце",
"setting.dntBadge.desc":"Дадайце значок у сваім браўзеры, каб адразу бачыць, колькі сродкаў адсочвання знаходзіцца на вэб-сайце.",
"setting.dntAutoBlock.name":"Аўтаматычна блакіраваць усе сродкі адсочвання",
"setting.dntAutoBlock.desc":"Блакіраваць усе сродкі адсочвання на ўсіх сайтах, якія вы наведваеце.",
"setting.dntSocial.desc":"Заблакіраваць усе сродкі адсочвання сацыяльных сетак",
"setting.dntAdTracking.desc":"Заблакіраваць усе сродкі адсочвання рэкламы",
"setting.dntWebAnalytics.desc":"Заблакіраваць усе сродкі адсочвання вэб-аналітыкі",
"setting.dntOthers.desc":"Заблакіраваць усе іншыя сродкі адсочвання",
"setting.communityIQ.name":"Дазволіць абагульванне інфармацыі аб выкарыстанні даных са староннімі кампаніямі ў мэтах аналітыкі",
"serp.safe.desc":"Гэты сайт бяспечны",
"serp.bad.desc":"Гэты сайт можа быць небяспечным",
"serp.unknown.desc":"У гэтага сайта няма рэйтынгу",
"serp.unsafe.desc":"Гэты сайт небяспечны",
"topbar.openBankMode":"Адкрыць у рэжыме банкінгу",
"topbar.desc":"Вашы фінансавыя даныя могуць бачыць іншыя людзі.",
"topbar.tooltip":"Рэжым банкінгу, частка Avast Secure Browser, усталяваная разам з антывірусам Avast, бяспечна ізалюе сеансы купляў і банкаўскіх аперацый, каб забараніць хакерам красці нумары вашых крэдытных картак, пароль і іншыя асабістыя даныя.",
"topbar.dontShowAgain":"Больш не паказваць на гэтым сайце"
},
bg:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Бета",
"global.detailsShow":"Подробности",
"global.detailsHide":"Скриване на подробности",
"global.done":"Готово",
"global.leaveSite":"Напускане на сайта",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} – Неизвестен сайт",
"background.icon.safe":"{0} – Уеб сайтът е безопасен",
"background.icon.bad":"{0} – Сайтът може да не е благонадежден",
"background.icon.unsafe":"{0} – Уеб сайтът не е безопасен",
"security.title":"Сигурност",
"security.safe.title":"Уеб сайтът е безопасен",
"security.safe.item1.desc":"Няма фишинг",
"security.safe.item1.tooltip":"В този уеб сайт не открихме каквито и да било опити за кражба на чувствителна информация като пароли, номера на кредитни карти и т.н.",
"security.safe.item2.desc":"Няма злонамерен софтуер",
"security.safe.item2.tooltip":"В този уеб сайт не открихме какъвто и да било злонамерен код.",
"security.safe.item3.desc":"Надежден",
"security.safe.item3.tooltip":"{0} потребители са оценили този уеб сайт като достоверен, като са щракнали {1} в {0} Online Security.",
"security.bad.title":"Сайтът може да е неблагонадежден",
"security.bad.desc":"Не открихме каквито и да било заплахи за фишинг или злонамерен софтуер, но много от нашите потребители са дали палец надолу за този сайт.",
"security.unknown.title":"Неизвестен сайт",
"security.unknown.desc":"Все още нямаме достатъчно информация, за да оценим този уеб сайт.",
"security.unsafe.title":"Уеб сайтът не е безопасен",
"security.unsafe.phishing.desc":"Уеб сайтът е отбелязан като сайт за фишинг. Фишингът представлява опит за кражба на чувствителна информация като пароли, номера на кредитни карти и т.н.",
"security.unsafe.malware.desc":"В този уеб сайт открихме злонамерен код, който би могъл да навреди на компютъра ви или да открадне личните ви данни.",
"rating.question.desc":"Доверявате ли се на {0}?",
"rating.negative":"Има ли неподходящо съдържание в този уеб сайт? (по избор)",
"rating.thanks":"Благодарим ви за оценката!",
"rating.trusted.desc":"<i>Доверявате се</i> на {0}",
"rating.untrusted.desc":"<i>Не се доверявате</i> на {0}",
"rating.revert.tooltip":"Натиснете, за да премахнете оценката си",
"rating.tooltip":"Вашата оценка ще бъде взета предвид в оценката ни за сигурността на този уеб сайт.",
"rating.category.pornography":"Порнография",
"rating.category.violence":"Оръжия/насилие",
"rating.category.gambling":"Хазарт",
"rating.category.drugs":"Алкохол/наркотици",
"rating.category.illegal":"Нелегален софтуер",
"rating.category.others":"Други",
"privacy.title":"Поверителност",
"privacy.group.Social.desc":"Социални мрежи",
"privacy.group.Social.block.desc":"Блокиране на цялостното следене на социалните мрежи",
"privacy.group.Social.block.tooltip":"Това ще блокира следенето на социалните мрежи във всеки уеб сайт, който посетите.",
"privacy.group.Social.unblock.desc":"Деблокиране на цялостното следене на социалните мрежи",
"privacy.group.Social.unblock.tooltip":"Това ще позволи следенето на социалните мрежи във всеки уеб сайт, който посетите.",
"privacy.group.AdTracking.desc":"Рекламно следене",
"privacy.group.AdTracking.block.desc":"Блокиране на цялостното рекламно следене",
"privacy.group.AdTracking.block.tooltip":"Това ще блокира рекламното следене във всеки уеб сайт, който посетите.",
"privacy.group.AdTracking.unblock.desc":"Деблокиране на цялостното рекламно следене",
"privacy.group.AdTracking.unblock.tooltip":"Това ще позволи рекламното следене във всеки уеб сайт, който посетите.",
"privacy.group.WebAnalytics.desc":"Уеб анализатори",
"privacy.group.WebAnalytics.block.desc":"Блокиране на цялостното следене от уеб анализатори",
"privacy.group.WebAnalytics.block.tooltip":"Това ще блокира следенето от уеб анализатори във всеки уеб сайт, който посетите.",
"privacy.group.WebAnalytics.unblock.desc":"Деблокиране на цялостното следене от уеб анализатори",
"privacy.group.WebAnalytics.unblock.tooltip":"Това ще позволи другите видове следене във всеки уеб сайт, който посетите.",
"privacy.group.Others.desc":"Други",
"privacy.group.Others.block.desc":"Блокиране на всякакво друго следене",
"privacy.group.Others.block.tooltip":"Това ще блокира другите видове следене във всеки уеб сайт, който посетите.",
"privacy.group.Others.unblock.desc":"Деблокиране на всякакво друго следене",
"privacy.trackersBlockedAll":"<i>{0} система за проследяване</i> е блокирана в/във {1} | <i>{0} система за проследяване</i> е блокирана в/във {1}",
"privacy.trackersBlockedSome":"<i>{0} от {1} система за проследяване</i> е блокирана в/във {2} | <i>{0} от {1} системи за проследяване</i> са блокирани в/във {2}",
"privacy.trackersBlockedNone":"<i>{0} система</i> за следене в/във {1} | <i>{0} системи</i> за следене в/във {1}",
"privacy.trackersBlocked":"{0} от {1} блокирани",
"privacy.trackersFound":"{0} открити",
"privacy.trackersNone":"нищо",
"privacy.trackerBlock.desc":"Блокиране",
"privacy.trackerBlock.tooltip":"Това ще блокира [{0}] във всеки уеб сайт, който посетите.",
"privacy.trackerUnblock.desc":"Блокирано",
"privacy.trackerUnblock.tooltip":"Това ще деблокира [{0}] във всеки уеб сайт, който посетите.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"За да деблокирате конкретна система за проследяване, изключете автоматичното блокиране.",
"privacy.automaticBlocking.desc":"Автоматично блокиране на всички системи за проследяване",
"privacy.automaticBlocking.tooltip":"Автоматично ще блокираме всички открити системи за проследяване във всеки уеб сайт, който посетите.",
"setting.title":"Настройки",
"setting.serp.name":"Маркирай резултатите ми от търсенето",
"setting.serp.desc":"Добавя цветни икони към резултатите ви от търсенето в Google, Yahoo! и т.н., за да разберете кои резултати са безопасни. (зелена = безопасно, сива = неизвестно, червена = опасно)",
"setting.serpPopup.name":"Показвай съвети за резултатите от търсенето",
"setting.serpPopup.desc":"Поставете курсора на мишката върху иконите за повече информация.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Превключете към режим за банкиране за чувствителни финансови сайтове (изисква инсталирана антивирусна програма и Secure Browser на Avast)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Превключете към режим за банкиране за чувствителни финансови сайтове (изисква инсталирана антивирусна програма и Secure Browser на AVG)",
"setting.dntBadge.name":"Показвай общия брой системи за проследяване в даден уеб сайт",
"setting.dntBadge.desc":"Добавя значка към браузъра ви, за да разберете незабавно колко системи за проследяване има във всеки уеб сайт.",
"setting.dntAutoBlock.name":"Блокирай автоматично всички системи за проследяване",
"setting.dntAutoBlock.desc":"Блокира всички открити системи за проследяване във всеки уеб сайт, който посетите.",
"setting.dntSocial.desc":"Блокирай всички системи за проследяване на социалните мрежи",
"setting.dntAdTracking.desc":"Блокирай всички системи за рекламно проследяване",
"setting.dntWebAnalytics.desc":"Блокирай всички системи за проследяване на уеб анализатори",
"setting.dntOthers.desc":"Блокирай всички други системи за проследяване",
"setting.communityIQ.name":"Позволи използването на данни да се споделя с трети страни за анализи",
"serp.safe.desc":"Сайтът е безопасен",
"serp.bad.desc":"Сайтът може да не е благонадежден",
"serp.unknown.desc":"Сайтът няма оценка",
"serp.unsafe.desc":"Сайтът не е безопасен",
"topbar.openBankMode":"Отваряне в режим за банкиране",
"topbar.desc":"Възможно е финансовите ви данни да бъдат видими за други хора.",
"topbar.tooltip":"Режимът за банкиране, част от Secure Browser на Avast, инсталиран с антивирусната програма на Avast, безопасно изолира сесиите за пазаруване и банкиране, за да попречи на хакерите да откраднат номерата на кредитните ви карти, паролата и другите ви лични данни.",
"topbar.dontShowAgain":"Не показвай повече за този сайт"
},
bn:{
"AVG.title":"অনলাইন সুরক্ষা",
"Avast.title":"Avast অনলাইন সুরক্ষা",
"global.beta":"বেটা",
"global.detailsShow":"বিস্তারিত",
"global.detailsHide":"বিস্তারিত লুকান",
"global.done":"সম্পন্ন",
"global.leaveSite":"সাইট ছেড়ে চলে যান",
"global.switcher.off":"অফ",
"global.switcher.on":"অন",
"background.icon.unknown":"{0} - অজানা সাইট",
"background.icon.safe":"{0}- এই ওয়েবসাইটটি নিরাপদ",
"background.icon.bad":"{0}- এই সাইটটি বিশ্বাসযোগ্য নয়",
"background.icon.unsafe":"{0}- এই ওয়েবসাইটটি নিরাপদ নয়",
"security.title":"নিরাপত্তা",
"security.safe.title":"এই ওয়েবসাইটটি নিরাপদ",
"security.safe.item1.desc":"কোনো ফিশিং করা হবে না",
"security.safe.item1.tooltip":"আমরা এই ওয়েবসাইটে পাসওয়ার্ড, ক্রেডিট কার্ড নম্বর ইত্যাদি সংবেদনশীল তথ্য চুরি করার মত কোনো প্রচেষ্টা সনাক্ত করি নি।",
"security.safe.item2.desc":"কোন ম্যালওয়্যার নেই",
"security.safe.item2.tooltip":"আমরা এই ওয়েবসাইটে কোন দুষিত কোড সনাক্ত করি নি।",
"security.safe.item3.desc":"বিশ্বস্ত",
"security.safe.item3.tooltip":"{0} ব্যবহারকারী অনলাইন সুরক্ষার {1}মধ্যে {0} ক্লিক করে এই ওয়েবসাইট বিশ্বস্ত হিসেবে মূল্যায়িত করেছে।",
"security.bad.title":"এটি বিশ্বাসযোগ্য নাও হতে পারে",
"security.bad.desc":"আমরা কোন ফিশিং হুমকি বা ম্যালওয়্যার এখানে খুঁজে পাইনি, কিন্তু আমাদের ব্যবহারকারীদের মধ্যে অনেকেই এই সাইটটিকে চিহ্নিত করেছে দিয়েছে।",
"security.unknown.title":"অজানা সাইট",
"security.unknown.desc":"এই ওয়েবসাইটটি মূল্যায়ন করার জন্য আমাদের কাছে এখন পর্যন্ত কোন যথেষ্ট তথ্য নেই।",
"security.unsafe.title":"এই ওয়েবসাইটটি অনিরাপদ",
"security.unsafe.phishing.desc":"এই ওয়েবসাইটটিকে ফিশিং সাইট হিসেবে চিহ্নিত করা হয়েছে।ফিশিং আপনার কাছ থেকে সংবেদনশীল তথ্য, যেমন পাসওয়ার্ড, ক্রেডিট কার্ড নম্বর ইত্যাদি চুরি করার একটি প্রচেষ্টা।",
"security.unsafe.malware.desc":"আমরা এই ওয়েবসাইটে দূষিত কোড পেয়েছি যা আপনার কম্পিউটারকে ক্ষতি করতে পারে বা আপনার ব্যক্তিগত তথ্য চুরি করতে পারে।",
"rating.question.desc":"আপনি কি  {0} বিশ্বাস করেন?",
"rating.negative":"এই ওয়েবসাইটে কি কোন অনুপযুক্ত সামগ্রী রয়েছে? (ঐচ্ছিক)",
"rating.thanks":"আপনার মূল্যায়নের জন্য ধন্যবাদ!",
"rating.trusted.desc":"আপনি <i>বিশ্বাস করেন</i> {0}",
"rating.untrusted.desc":"আপনি <i>বিশ্বাস করেন না</i> {0}",
"rating.revert.tooltip":"আপনার রেটিং মুছে ফেলতে ক্লিক করুন",
"rating.tooltip":"এই ওয়েবসাইটের জন্য আপনার বিশ্বাস বা অবিশ্বাস  আমাদের নিরাপত্তা রেটিং এর ক্ষেত্রে গণ্য করা হবে।",
"rating.category.pornography":"অশ্লীল সাহিত্যাদি",
"rating.category.violence":"অস্ত্র / সহিংসতা",
"rating.category.gambling":"জুয়া খেলা",
"rating.category.drugs":"অ্যালকোহল / ড্রাগস্",
"rating.category.illegal":"Warez / অবৈধ",
"rating.category.others":"অন্যান্য",
"privacy.title":"গোপনীয়তা",
"privacy.group.Social.desc":"সামাজিক নেটওয়ার্ক",
"privacy.group.Social.block.desc":"সবগুলি সোশ্যাল নেটওয়ার্ক ট্র্যাক করা ব্লক করুন",
"privacy.group.Social.block.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান সোশ্যাল নেটওয়ার্ক ট্র্যাক করা ব্লক করবে।",
"privacy.group.Social.unblock.desc":"সবগুলি সোশ্যাল নেটওয়ার্ক ট্র্যাক করা আনব্লক করুন",
"privacy.group.Social.unblock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান সোশ্যাল নেটওয়ার্ক ট্র্যাক করার অনুমতি দেবে।",
"privacy.group.AdTracking.desc":"বিজ্ঞাপন অনুসরণ",
"privacy.group.AdTracking.block.desc":"সবগুলি বিজ্ঞাপন ট্র্যাক করা ব্লক করুন",
"privacy.group.AdTracking.block.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান বিজ্ঞাপন ট্র্যাক করা ব্লক করবে।",
"privacy.group.AdTracking.unblock.desc":"সবগুলি বিজ্ঞাপন ট্র্যাক করা আনব্লক করুন",
"privacy.group.AdTracking.unblock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান বিজ্ঞাপন ট্র্যাক করার অনুমতি দেবে।",
"privacy.group.WebAnalytics.desc":"ওয়েব পরিসংখ্যান",
"privacy.group.WebAnalytics.block.desc":"সবগুলি ওয়েব পরিসংখ্যান ট্র্যাক করা ব্লক করুন",
"privacy.group.WebAnalytics.block.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান ওয়েব পরিসংখ্যান ট্র্যাক করা ব্লক করবে।",
"privacy.group.WebAnalytics.unblock.desc":"সবগুলি ওয়েব পরিসংখ্যান ট্র্যাক করা আনব্লক করুন",
"privacy.group.WebAnalytics.unblock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান অন্যান্য ট্র্যাক করার অনুমতি দেবে।",
"privacy.group.Others.desc":"অন্যান্য",
"privacy.group.Others.block.desc":"অন্যান্য সবগুলি ট্র্যাক করা বন্ধ করুন",
"privacy.group.Others.block.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখান অন্যান্য ট্র্যাক করা ব্লক করবে।",
"privacy.group.Others.unblock.desc":"অন্যান্য সবগুলি ট্র্যাক করা আনব্লক করুন",
"privacy.trackersBlockedAll":"<i>সব {0} ট্র্যাকার</i>  {1}-তে ব্লক করা হয়েছে | <i>সব {0} ট্র্যাকার</i>  {1}-তে ব্লক করা হয়েছে",
"privacy.trackersBlockedSome":"<i>এর {0} ট্র্যাকার</i>  {1}-তে ব্লক করা হয়েছে | <i>এর {0} ট্র্যাকারগুলি</i>  {1}-তে ব্লক করা হয়েছে",
"privacy.trackersBlockedNone":"{1}-এ সিস্টেম <i>{0}ট্র্যাক করা হচ্ছে</i> | {1}-এ সিস্টেমগুলিতে <i>{0}ট্র্যাক করা হচ্ছে</i>",
"privacy.trackersBlocked":"{1}এর {0}টি ব্লক করা হয়েছে",
"privacy.trackersFound":"{0} খুঁজে পাওয়া গেছে",
"privacy.trackersNone":"কিছুই না",
"privacy.trackerBlock.desc":"প্রতিরোধ করুন",
"privacy.trackerBlock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখানে [{0}] প্রতিরোধ করবে।",
"privacy.trackerUnblock.desc":"ব্লক করা হয়েছে",
"privacy.trackerUnblock.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখানে [{0}] অপ্রতিরোধ করবে।",
"privacy.trackerUnblockOnAutoBlock.tooltip":"নির্দিষ্ট একটি ট্র্যাকার আনব্লক করার জন্য স্বয়ংক্রিয়ভাবে ব্লক করা বন্ধ করুন।",
"privacy.automaticBlocking.desc":"স্বয়ংক্রিয়ভাবে সবগুলি ট্রাকার বন্ধ করুন",
"privacy.automaticBlocking.tooltip":"আপনি যেই প্রত্যেকটি ওয়েবসাইট দেখেন সেখানে খুঁজে পাওয়া ট্র্যাকারগুলি স্বয়ংক্রিয়ভাবে ব্লক করবো। ",
"setting.title":"সেটিংস",
"setting.serp.name":"আমার অনুসন্ধানের ফলাফলগুলি চিহ্নিত করুন",
"setting.serp.desc":"কোন ফলাফলগুলি নিরাপদ তা দেখার জন্য ক্লিক করতে Google, Yahoo!, ইত্যাদিতে আপনার অনুসন্ধানের ফলাফলগুলিতে রঙিন আইকন যোগ করুন।(সবুজ = নিরাপদ, ধুসর = অজানা, লাল = অনিরাপদ)",
"setting.serpPopup.name":"অনুসন্ধানের ফলাফলের জন্য টুলটিপস প্রদর্শন করুন",
"setting.serpPopup.desc":"আরও তথ্য দেখার জন্য আমাদের আইকনের উপর মাউস চালনা করুন৷ ",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"সংবেদনশীল আর্থিক সাইটগুলির জন্য, ব্যাঙ্ক মোডে পরিবর্তিত হন (Avast Antivirus এবং Avast সুরক্ষিত ব্রাউজার ইনস্টল করার প্রয়োজন)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"সংবেদনশীল আর্থিক সাইটগুলির জন্য, ব্যাঙ্ক মোডে পরিবর্তিত হন (Avast Antivirus এবং Avast সুরক্ষিত ব্রাউজার ইনস্টল করার প্রয়োজন)",
"setting.dntBadge.name":"মোট সবগুলি ট্র্যাকার সাইটে প্রদর্শন করুন",
"setting.dntBadge.desc":"অবিলম্বে যেকোনও ওয়েবসাইটে কতগুলি ট্র্যাকার রয়েছে তা দেখতে আপনার ব্রাউজারে একটি ব্যাজ যুক্ত করুন।",
"setting.dntAutoBlock.name":"স্বয়ংক্রিয়ভাবে সবগুলি ট্রাকার ব্লক করুন",
"setting.dntAutoBlock.desc":"আপনার দেখা প্রত্যেকটি ওয়েবসাইট থেকে খুঁজে পাওয়া ট্র্যাকারগুলি ব্লক করুন",
"setting.dntSocial.desc":"সবগুলি সোশ্যাল নেটওয়ার্ক ট্র্যাকার ব্লক করুন",
"setting.dntAdTracking.desc":"সবগুলি বিজ্ঞাপন ট্র্যাকার ব্লক করুন",
"setting.dntWebAnalytics.desc":"সবগুলি ওয়েব পরিসংখ্যান ট্র্যাকার ব্লক করুন",
"setting.dntOthers.desc":"অন্যান্য সবগুলি ট্র্যাকার বন্ধ করুন",
"setting.communityIQ.name":"বিশ্লেষণের জন্য তৃতীয় পক্ষের সাথে ডেটার ব্যবহার শেয়ার করতে অনুমতি দিন",
"serp.safe.desc":"এই সাইটটি নিরাপদ",
"serp.bad.desc":"- এই সাইটটি বোধহয় বিশ্বাসযোগ্য নয়",
"serp.unknown.desc":"এই সাইটের কোন রেটিং নেই",
"serp.unsafe.desc":"এই সাইটটি অনিরাপদ",
"topbar.openBankMode":"ব্যাঙ্ক মোড-এ খুলুন",
"topbar.desc":"আপনার আর্থিক ডেটা অন্যদের কাছে দৃশ্যমান হতে পারে।",
"topbar.tooltip":"ব্যাঙ্ক মোড , Avast নিরাপদ ব্রাউজারের ইনস্টল করা অংশ আপনার Avast এন্টিভাইরাস, নিরাপদে কেনাকাটা এবং ব্যাংকিং অধিবেশনের সময় ক্রেডিট কার্ড নম্বর, পাসওয়ার্ড, এবং অন্যান্য ব্যক্তিগত তথ্য  আলাদা করা সহ আপনার হ্যাকারদের চুরি করা থেকে বিরত রাখে।",
"topbar.dontShowAgain":"এই সাইটটিতে পুনরায় দেখাবেন না"
},
ca:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Detalls",
"global.detailsHide":"Amaga els detalls",
"global.done":"Fet",
"global.leaveSite":"Surt del lloc",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0}: Lloc desconegut.",
"background.icon.safe":"{0}: Aquest lloc web és segur.",
"background.icon.bad":"{0}: Aquest lloc pot ser no fiable.",
"background.icon.unsafe":"{0}: Aquest lloc web no és segur.",
"security.title":"Seguretat",
"security.safe.title":"Aquest lloc web és segur.",
"security.safe.item1.desc":"Sense pesca electrònica",
"security.safe.item1.tooltip":"No hem detectat cap intent de robar informació confidencial en aquesta pàgina web, com ara contrasenyes, números de targeta de crèdit, etc.",
"security.safe.item2.desc":"Sense programari maliciós",
"security.safe.item2.tooltip":"No hem detectat cap codi maliciós en aquest lloc web.",
"security.safe.item3.desc":"De confiança",
"security.safe.item3.tooltip":"Els usuaris de l'{0} han valorat aquest lloc web com a fiable fent clic a {1}, a l'{0} Online Security.",
"security.bad.title":"Aquest lloc pot ser no fiable.",
"security.bad.desc":"Aquí no hem trobat cap amenaça de pesca electrònica o programari maliciós, però molts dels nostres usuaris han qualificat aquest lloc amb un polze cap avall.",
"security.unknown.title":"Lloc desconegut",
"security.unknown.desc":"Encara no tenim prou informació per valorar aquest lloc web.",
"security.unsafe.title":"Aquest lloc web no és segur.",
"security.unsafe.phishing.desc":"Aquest lloc web s'ha marcat com a lloc de pesca electrònica. La pesca electrònica és un intent de robar-vos informació personal, com ara contrasenyes, números de targeta de crèdit, etc.",
"security.unsafe.malware.desc":"Hem trobat codi maliciós en aquest lloc web que podria malmetre l'equip o robar les vostres dades privades.",
"rating.question.desc":"Confieu en {0}?",
"rating.negative":"Heu detectat contingut inadequat en aquest lloc web? (opcional)",
"rating.thanks":"Gràcies per la valoració!",
"rating.trusted.desc":"<i>Confieu</i> en {0}.",
"rating.untrusted.desc":"<i>No confieu</i> en {0}.",
"rating.revert.tooltip":"Feu clic per eliminar la vostra valoració.",
"rating.tooltip":"La vostra confiança o desconfiança es tindrà en compte en la nostra valoració de seguretat per a aquest lloc web.",
"rating.category.pornography":"Pornografia",
"rating.category.violence":"Armes o violència",
"rating.category.gambling":"Jocs d'atzar",
"rating.category.drugs":"Alcohol o drogues",
"rating.category.illegal":"Pirateria o actes il·legals",
"rating.category.others":"Altres",
"privacy.title":"Privacitat",
"privacy.group.Social.desc":"Xarxes socials",
"privacy.group.Social.block.desc":"Bloqueja tot el seguiment de xarxes socials",
"privacy.group.Social.block.tooltip":"Això bloquejarà el seguiment de xarxes socials a tots els llocs web que visiteu.",
"privacy.group.Social.unblock.desc":"Desbloqueja tot el seguiment de xarxes socials",
"privacy.group.Social.unblock.tooltip":"Això desbloquejarà el seguiment de xarxes socials a tots els llocs web que visiteu.",
"privacy.group.AdTracking.desc":"Publicitat intrusiva",
"privacy.group.AdTracking.block.desc":"Bloqueja el seguiment de publicitat intrusiva",
"privacy.group.AdTracking.block.tooltip":"Això bloquejarà el seguiment de publicitat intrusiva a tots els llocs web que visiteu.",
"privacy.group.AdTracking.unblock.desc":"Desbloqueja el seguiment de publicitat intrusiva",
"privacy.group.AdTracking.unblock.tooltip":"Això permetrà el seguiment de publicitat intrusiva a tots els llocs web que visiteu.",
"privacy.group.WebAnalytics.desc":"Anàlisi web",
"privacy.group.WebAnalytics.block.desc":"Bloqueja tot el seguiment d'anàlisi web",
"privacy.group.WebAnalytics.block.tooltip":"Això bloquejarà el seguiment d'anàlisi web a tots els llocs web que visiteu.",
"privacy.group.WebAnalytics.unblock.desc":"Desbloqueja tot el seguiment d'anàlisi web",
"privacy.group.WebAnalytics.unblock.tooltip":"Això permetrà els altres seguiments a tots els llocs web que visiteu.",
"privacy.group.Others.desc":"Altres",
"privacy.group.Others.block.desc":"Bloqueja tots els altres seguiments",
"privacy.group.Others.block.tooltip":"Això bloquejarà els altres seguiments a tots els llocs web que visiteu.",
"privacy.group.Others.unblock.desc":"Desbloqueja tots els altres seguiments",
"privacy.trackersBlockedAll":"<i>{0} rastrejador</i> bloquejat a {1} | <i>{0} rastrejadors</i> bloquejats a {1}",
"privacy.trackersBlockedSome":"<i>{0} de {1} rastrejador</i> bloquejat a {2} | <i>{0} de {1} rastrejadors</i> bloquejats a {2}",
"privacy.trackersBlockedNone":"<i>{0} sistema de rastreig</i> a {1} | <i>{0} sistemes de rastreig</i> a {1}",
"privacy.trackersBlocked":"{0} de {1} bloquejats",
"privacy.trackersFound":"{0} trobats",
"privacy.trackersNone":"res",
"privacy.trackerBlock.desc":"Bloqueja",
"privacy.trackerBlock.tooltip":"Això bloquejarà [{0}] a tots els llocs web que visiteu.",
"privacy.trackerUnblock.desc":"Bloquejat",
"privacy.trackerUnblock.tooltip":"Això desbloquejarà [{0}] a tots els llocs web que visiteu.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Per desbloquejar un rastrejador específic, desactiveu el bloqueig automàtic.",
"privacy.automaticBlocking.desc":"Bloqueja automàticament tots els rastrejadors",
"privacy.automaticBlocking.tooltip":"Bloquejarem automàticament tots els rastrejadors detectats a tots els llocs web que visiteu.",
"setting.title":"Configuració",
"setting.serp.name":"Marca els meus resultats de cerca",
"setting.serp.desc":"Afegiu icones de colors als vostres resultats de cerca a Google, Yahoo!, etc. per veure en quins resultats es pot fer clic amb seguretat. El verd indica que és segur; el gris, que es desconeix; i el vermell, que no és segur.",
"setting.serpPopup.name":"Mostra informació en pantalla sobre els resultats de cerca",
"setting.serpPopup.desc":"Passeu el ratolí per sobre de les icones per veure més informació.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Canvieu al Mode de banca en visitar pàgines web d'entitats bancàries (cal tenir l'Avast Antivirus i l'Avast Secure Browser instal·lats).",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Canvieu al Mode de banca en visitar pàgines web d'entitats bancàries (cal tenir l'AVG AntiVirus i l'AVG Secure Browser instal·lats)",
"setting.dntBadge.name":"Mostra el total de rastrejadors en un lloc",
"setting.dntBadge.desc":"Afegiu un distintiu al navegador per veure immediatament els rastrejadors que hi ha en qualsevol lloc web.",
"setting.dntAutoBlock.name":"Bloqueja automàticament tots els rastrejadors",
"setting.dntAutoBlock.desc":"Bloquegeu els rastrejadors detectats a tots els llocs web que visiteu.",
"setting.dntSocial.desc":"Bloqueja tots els rastrejadors de xarxes socials",
"setting.dntAdTracking.desc":"Bloqueja tots els rastrejadors de publicitat intrusiva",
"setting.dntWebAnalytics.desc":"Bloqueja tots els rastrejadors d'anàlisi web",
"setting.dntOthers.desc":"Bloqueja tots els altres rastrejadors",
"setting.communityIQ.name":"Permeteu que les dades d'ús es comparteixin amb tercers per a les anàlisis",
"serp.safe.desc":"Aquest lloc és segur.",
"serp.bad.desc":"Aquest lloc pot ser no fiable.",
"serp.unknown.desc":"Aquest lloc no té cap valoració.",
"serp.unsafe.desc":"Aquest lloc no és segur.",
"topbar.openBankMode":"Obre en Mode de banca",
"topbar.desc":"Altres podrien veure les vostres dades bancàries.",
"topbar.tooltip":"El Mode de banca, una part de l'Avast Secure Browser instal·lada amb l'antivirus de l'Avast, aïlla de manera segura les sessions bancàries i de compra per evitar que els hackers us robin els números de les targetes de crèdit, la contrasenya i altres dades privades.",
"topbar.dontShowAgain":"No ho tornis a mostrar en aquest lloc"
},
cs:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Podrobnosti",
"global.detailsHide":"Skrýt podrobnosti",
"global.done":"Hotovo",
"global.leaveSite":"Opustit web",
"global.switcher.off":"VYP",
"global.switcher.on":"ZAP",
"background.icon.unknown":"{0} – neznámá stránka",
"background.icon.safe":"{0} – tato stránka je bezpečná",
"background.icon.bad":"{0} – tato stránka může být nedůvěryhodná",
"background.icon.unsafe":"{0} – tato stránka je nebezpečná",
"security.title":"Zabezpečení",
"security.safe.title":"Tato stránka je bezpečná",
"security.safe.item1.desc":"Žádný phishing",
"security.safe.item1.tooltip":"Na této stránce jsme nenašli žádné pokusy ukrást citlivé údaje, jako jsou hesla, čísla platebních karet atd.",
"security.safe.item2.desc":"Žádný malware",
"security.safe.item2.tooltip":"Na této stránce jsme nenašli žádný škodlivý kód.",
"security.safe.item3.desc":"Důvěryhodná",
"security.safe.item3.tooltip":"Někteří uživatelé ({0}) tuto stránku označili jako důvěryhodnou tím, že v online zabezpečení {0} klikli na tlačítko {1}.",
"security.bad.title":"Tato stránka může být nedůvěryhodná",
"security.bad.desc":"Na této stránce jsme nenašli žádné phishingové hrozby, ale hodně našich uživatelů jí udělilo palec dolů.",
"security.unknown.title":"Neznámá stránka",
"security.unknown.desc":"K ohodnocení této stránky nemáme dostatek informací.",
"security.unsafe.title":"Tato stránka je nebezpečná",
"security.unsafe.phishing.desc":"Tato stránka byla nahlášena jako phishingová. Phishing jsou pokusy ukrást citlivé údaje, jako jsou hesla, čísla platebních karet atd.",
"security.unsafe.malware.desc":"Na této stránce jsme našli škodlivý kód, který by vám mohl poškodit počítač nebo ukrást soukromá data.",
"rating.question.desc":"Důvěřujete {0}?",
"rating.negative":"Je na této stránce nějaký nevhodný obsah? (nepovinné)",
"rating.thanks":"Děkujeme za hodnocení!",
"rating.trusted.desc":"Stránce {0} <i>důvěřujete</i> ",
"rating.untrusted.desc":"Stránce {0} <i>nedůvěřujete</i> ",
"rating.revert.tooltip":"Kliknutím své hodnocení zrušíte",
"rating.tooltip":"Vaše důvěra či nedůvěra se promítne do našeho bezpečnostního hodnocení stránky.",
"rating.category.pornography":"Pornografie",
"rating.category.violence":"Zbraně/násilí",
"rating.category.gambling":"Hazardní hry",
"rating.category.drugs":"Alkohol/drogy",
"rating.category.illegal":"Warez / nelegální obsah",
"rating.category.others":"Ostatní",
"privacy.title":"Soukromí",
"privacy.group.Social.desc":"Sociální sítě",
"privacy.group.Social.block.desc":"Blokovat veškerá sledování sociálními sítěmi",
"privacy.group.Social.block.tooltip":"Tímto zablokujete sledování sociálními sítěmi na každé navštívené stránce.",
"privacy.group.Social.unblock.desc":"Odblokovat veškerá sledování sociálními sítěmi",
"privacy.group.Social.unblock.tooltip":"Tímto povolíte sledování sociálními sítěmi na každé navštívené stránce.",
"privacy.group.AdTracking.desc":"Sledování reklamami",
"privacy.group.AdTracking.block.desc":"Blokovat veškerá sledování reklamami",
"privacy.group.AdTracking.block.tooltip":"Tímto zablokujete sledování reklamami na každé navštívené stránce.",
"privacy.group.AdTracking.unblock.desc":"Odblokovat veškerá sledování reklamami",
"privacy.group.AdTracking.unblock.tooltip":"Tímto povolíte sledování reklamami na každé navštívené stránce.",
"privacy.group.WebAnalytics.desc":"Webová analytika",
"privacy.group.WebAnalytics.block.desc":"Blokovat veškerá sledování webovými analytickými nástroji",
"privacy.group.WebAnalytics.block.tooltip":"Tímto zablokujete sledování webovými analytickými nástroji na každé navštívené stránce.",
"privacy.group.WebAnalytics.unblock.desc":"Odblokovat veškerá sledování webovými analytickými nástroji",
"privacy.group.WebAnalytics.unblock.tooltip":"Tímto povolíte ostatní sledování na každé navštívené stránce.",
"privacy.group.Others.desc":"Ostatní",
"privacy.group.Others.block.desc":"Blokovat veškerá ostatní sledování",
"privacy.group.Others.block.tooltip":"Tímto zablokujete ostatní sledování na každé navštívené stránce.",
"privacy.group.Others.unblock.desc":"Odblokovat veškerá ostatní sledování",
"privacy.trackersBlockedAll":"Na {1} byl zablokován <i>{0} sledovací nástroj</i> | Na {1} byly zablokovány <i>{0} sledovací nástroje</i> | Na {1} bylo zablokováno <i>všech {0} sledovacích nástrojů</i> | Na {1} bylo zablokováno <i>všech {0} sledovacích nástrojů</i>",
"privacy.trackersBlockedSome":"Na stránce {2} jsme zablokovali <i>{0} sledovací nástroj z {1}</i> | Na stránce {2} jsme zablokovali <i>{0} sledovací nástroje z {1}</i> | Na stránce {2} jsme zablokovali <i>{0} sledovacích nástrojů z {1}</i> | Na stránce {2} jsme zablokovali <i>{0} sledovacích nástrojů z {1}</i>",
"privacy.trackersBlockedNone":"<i>{0} sledovací systém</i> na stránce {1} | <i>{0} sledovací systémy</i> na stránce {1} | <i>{0} sledovacích systémů</i> na stránce {1} | <i>{0} sledovacích systémů</i> na stránce {1}",
"privacy.trackersBlocked":"Zablokováno: {0} z {1}",
"privacy.trackersFound":"Nalezeno: {0}",
"privacy.trackersNone":"nic",
"privacy.trackerBlock.desc":"Zablokovat",
"privacy.trackerBlock.tooltip":"Tímto krokem zablokujete [{0}] na každé navštívené stránce.",
"privacy.trackerUnblock.desc":"Zablokováno",
"privacy.trackerUnblock.tooltip":"Tímto krokem odblokujete [{0}] na každé navštívené stránce.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Chcete-li odblokovat konkrétní sledovací nástroj, vypněte automatické blokování.",
"privacy.automaticBlocking.desc":"Automaticky blokovat veškerá sledování",
"privacy.automaticBlocking.tooltip":"Na každé stránce, kterou navštívíte, automaticky zablokujeme všechny nalezené sledovací nástroje.",
"setting.title":"Nastavení",
"setting.serp.name":"Označovat výsledky vyhledávání",
"setting.serp.desc":"Přidejte si do výsledků vyhledávání přes Google, Yahoo! atd. barevné ikony, podle kterých poznáte, které stránky jsou bezpečné (zelená = bezpečná, šedá = neznámá, červená = nebezpečná)",
"setting.serpPopup.name":"Ukazovat popisky k výsledkům hledání",
"setting.serpPopup.desc":"Najetím myší nad ikony si zobrazíte další informace.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Na stránkách s citlivými finančními údaji přepínat do Platebního režimu (vyžaduje nainstalovaný Avast Antivirus a Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Na stránkách s citlivými finančními údaji přepínat do Platebního režimu (vyžaduje nainstalovaný AVG AntiVirus a AVG Secure Browser)",
"setting.dntBadge.name":"Zobrazit celkový počet sledovacích nástrojů na stránce",
"setting.dntBadge.desc":"Přidejte si do prohlížeče ukazatel počtu sledovacích nástrojů na aktuálně otevřené stránce.",
"setting.dntAutoBlock.name":"Automaticky blokovat veškerá sledování",
"setting.dntAutoBlock.desc":"Blokujte veškeré sledovací nástroje na každé navštívené stránce.",
"setting.dntSocial.desc":"Blokovat veškerá sledování sociálními sítěmi",
"setting.dntAdTracking.desc":"Blokovat veškerá sledování reklamami",
"setting.dntWebAnalytics.desc":"Blokovat veškerá sledování webovými analytickými nástroji",
"setting.dntOthers.desc":"Blokovat veškerá ostatní sledování",
"setting.communityIQ.name":"Umožnit sdílení údajů o používání s třetími stranami pro účely analýzy",
"serp.safe.desc":"Tato stránka je bezpečná",
"serp.bad.desc":"Tato stránka může být nedůvěryhodná",
"serp.unknown.desc":"Tato stránka nemá žádné hodnocení",
"serp.unsafe.desc":"Tato stránka je nebezpečná",
"topbar.openBankMode":"Otevřít v Platebním režimu",
"topbar.desc":"Ostatní uživatelé mohou vidět vaše finanční údaje.",
"topbar.tooltip":"Platební režim je součást prohlížeče Avast Secure Browser nainstalovaného s vaším antivirem Avast, která bezpečně izoluje vaše nakupování a používání internetového bankovnictví od ostatních aktivit, aby vám hackeři nemohli ukrást čísla platebních karet, hesla či jiné soukromé údaje.",
"topbar.dontShowAgain":"Na této stránce znovu nezobrazovat"
},
da:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Detaljer",
"global.detailsHide":"Skjul detaljer",
"global.done":"OK",
"global.leaveSite":"Forlad websted",
"global.switcher.off":"FRA",
"global.switcher.on":"TIL",
"background.icon.unknown":"{0} – ukendt websted",
"background.icon.safe":"{0} – dette websted er sikkert",
"background.icon.bad":"{0} – dette websted kan være upålideligt",
"background.icon.unsafe":"{0} – dette websted er ikke sikkert",
"security.title":"Sikkerhed",
"security.safe.title":"Dette websted er sikkert",
"security.safe.item1.desc":"Ingen phishing",
"security.safe.item1.tooltip":"Vi har ikke registreret nogen forsøg på at stjæle følsomme oplysninger som adgangskoder, kreditkortnumre osv. på dette websted.",
"security.safe.item2.desc":"Ingen malware",
"security.safe.item2.tooltip":"Vi har ikke fundet nogen skadelig kode på dette websted.",
"security.safe.item3.desc":"Pålidelig",
"security.safe.item3.tooltip":"{0} brugere har bedømt dette websted som pålideligt ved at klikke på {1} i {0} Online Security.",
"security.bad.title":"Dette kan være upålideligt",
"security.bad.desc":"Vi fandt ingen phishing-trusler eller malware her, men mange af vores brugere har givet webstedet en nedadvendt tommelfinger.",
"security.unknown.title":"Ukendt websted",
"security.unknown.desc":"Vi har ikke nok oplysninger endnu til at bedømme dette websted.",
"security.unsafe.title":"Dette websted er ikke sikkert",
"security.unsafe.phishing.desc":"Dette websted er blevet markeret som et phishing-websted. Phishing er et forsøg på at stjæle følsomme oplysninger fra dig såsom adgangskoder, kreditkortnumre osv.",
"security.unsafe.malware.desc":"Vi har fundet skadelig kode på dette websted, som kan skade din computer eller stjæle dine private data.",
"rating.question.desc":"Har du tillid til {0}?",
"rating.negative":"Er der noget upassende indhold på dette websted? (valgfrit)",
"rating.thanks":"Tak for din bedømmelse!",
"rating.trusted.desc":"Du har <i>tillid</i> til {0}",
"rating.untrusted.desc":"Du har <i>ikke tillid</i> til {0}",
"rating.revert.tooltip":"Klik for at fjerne din bedømmelse",
"rating.tooltip":"Din tillid eller mistillid vil indgå i vores sikkerhedsbedømmelse for dette websted.",
"rating.category.pornography":"Pornografi",
"rating.category.violence":"Våben / Vold",
"rating.category.gambling":"Hasardspil",
"rating.category.drugs":"Alkohol / Narkotika",
"rating.category.illegal":"Warez / Ulovlig",
"rating.category.others":"Andet",
"privacy.title":"Fortrolighed",
"privacy.group.Social.desc":"Sociale medier",
"privacy.group.Social.block.desc":"Bloker al sporing på sociale medier",
"privacy.group.Social.block.tooltip":"Dette blokerer social sporing på alle websteder, du besøger.",
"privacy.group.Social.unblock.desc":"Fjern blokering af al social sporing",
"privacy.group.Social.unblock.tooltip":"Dette tillader social sporing på alle websteder, du besøger.",
"privacy.group.AdTracking.desc":"Reklamesporing",
"privacy.group.AdTracking.block.desc":"Bloker al reklamesporing",
"privacy.group.AdTracking.block.tooltip":"Dette blokerer reklamesporing på alle websteder, du besøger.",
"privacy.group.AdTracking.unblock.desc":"Fjern blokering af al reklamesporing",
"privacy.group.AdTracking.unblock.tooltip":"Dette tillader reklamesporing på alle websteder, du besøger.",
"privacy.group.WebAnalytics.desc":"Webanalyse",
"privacy.group.WebAnalytics.block.desc":"Bloker al webanalysesporing",
"privacy.group.WebAnalytics.block.tooltip":"Dette blokerer webanalysesporing på alle websteder, du besøger.",
"privacy.group.WebAnalytics.unblock.desc":"Fjern blokering af al webanalysesporing",
"privacy.group.WebAnalytics.unblock.tooltip":"Dette tillader anden sporing på alle websteder, du besøger.",
"privacy.group.Others.desc":"Andre",
"privacy.group.Others.block.desc":"Bloker al anden sporing",
"privacy.group.Others.block.tooltip":"Dette blokerer anden sporing på alle websteder, du besøger.",
"privacy.group.Others.unblock.desc":"Fjern blokering af al anden sporing",
"privacy.trackersBlockedAll":"<i>Alle {0} tracker</i> blokeret på {1} | <i>Alle {0} trackere</i> blokeret på {1}",
"privacy.trackersBlockedSome":"<i>{0} af {1} tracker</i> blokeret på {2} | <i>{0} af {1} trackere</i> blokeret på {2}",
"privacy.trackersBlockedNone":"<i>{0} tracking-system</i> på {1} | <i>{0} tracking-systemer</i> på {1}",
"privacy.trackersBlocked":"{0} af {1} blokeret",
"privacy.trackersFound":"{0} fundet",
"privacy.trackersNone":"ingenting",
"privacy.trackerBlock.desc":"Bloker",
"privacy.trackerBlock.tooltip":"Dette blokerer [{0}] på alle websteder, du besøger.",
"privacy.trackerUnblock.desc":"Blokeret",
"privacy.trackerUnblock.tooltip":"Dette fjerner blokering af [{0}] på hvert websted, du besøger.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Deaktiver automatisk blokering for at fjerne blokering af en specifik tracker.",
"privacy.automaticBlocking.desc":"Bloker automatisk alle trackere",
"privacy.automaticBlocking.tooltip":"Vi vil automatisk blokere alle fundne trackere på ethvert websted, du besøger.",
"setting.title":"Indstillinger",
"setting.serp.name":"Markér mine søgeresultater",
"setting.serp.desc":"Føj farvede ikoner til dine søgeresultater på Google, Yahoo! osv. for at se, hvilke resultater der er sikre at klikke på. (grøn = sikker, grå = ukendt, rød = ikke sikker)",
"setting.serpPopup.name":"Vis værktøjstips for søgeresultater",
"setting.serpPopup.desc":"Hold markøren over vores ikoner for at se flere oplysninger.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Skift til Banktilstand for følsomme finansielle websteder (kræver, at Avast Antivirus og Avast Secure Browser er installeret)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Skift til Banktilstand for følsomme finansielle websteder (kræver, at AVG AntiVirus og AVG Secure Browser er installeret)",
"setting.dntBadge.name":"Vis alle trackere på et websted",
"setting.dntBadge.desc":"Føj et ikon til din browser for at se øjeblikkeligt, hvor mange trackere der er på hvert websted.",
"setting.dntAutoBlock.name":"Bloker automatisk alle trackere",
"setting.dntAutoBlock.desc":"Bloker alle fundne trackere på alle websteder, du besøger.",
"setting.dntSocial.desc":"Bloker alle trackere på sociale medier",
"setting.dntAdTracking.desc":"Bloker alle reklametrackere",
"setting.dntWebAnalytics.desc":"Bloker alle webanalysetrackere",
"setting.dntOthers.desc":"Bloker alle andre trackere",
"setting.communityIQ.name":"Tillad, at brugsdata kan deles med tredjeparter til analyseformål",
"serp.safe.desc":"Dette websted er sikkert",
"serp.bad.desc":"Dette websted kan være upålideligt",
"serp.unknown.desc":"Dette websted har ingen bedømmelse",
"serp.unsafe.desc":"Dette websted er ikke sikkert",
"topbar.openBankMode":"Åbn i Banktilstand",
"topbar.desc":"Dine økonomiske data kan muligvis ses af andre.",
"topbar.tooltip":"Banktilstand, der er en del af Avast Secure Browser, som blev installeret sammen med din Avast-antivirus, isolerer sikkert shopping- og banksessioner for at forhindre hackere i at stjæle dine kreditkortnumre, adgangskoder og andre private data.",
"topbar.dontShowAgain":"Vis ikke på dette websted igen"
},
de:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Details",
"global.detailsHide":"Details ausblenden",
"global.done":"Fertig",
"global.leaveSite":"Website verlassen",
"global.switcher.off":"AUS",
"global.switcher.on":"EIN",
"background.icon.unknown":"{0} - Unbekannte Webseite",
"background.icon.safe":"{0} - Diese Webseite ist sicher",
"background.icon.bad":"{0} - Diese Webseite ist möglichweise nicht vertrauenswürdig",
"background.icon.unsafe":"{0} - Diese Webseite ist nicht sicher",
"security.title":"Sicherheit",
"security.safe.title":"Diese Webseite ist sicher",
"security.safe.item1.desc":"Kein Phishing",
"security.safe.item1.tooltip":"Wir haben keine Versuche festgestellt, sensible Informationen wie Kennwörter, Kreditkartennummern usw. auf dieser Website zu stehlen.",
"security.safe.item2.desc":"Keine Malware",
"security.safe.item2.tooltip":"Wir haben keinen bösartigen Code auf dieser Website erkannt.",
"security.safe.item3.desc":"Vertrauenswürdig",
"security.safe.item3.tooltip":"{0} Benutzer haben diese Website als vertrauenswürdig bewertet, indem sie in {0} Online-Security auf {1} geklickt haben.",
"security.bad.title":"Diese Webseite ist möglichweise nicht vertrauenswürdig",
"security.bad.desc":"Wir konnten hier keine Phishing-Bedrohungen oder Malware finden. Viele unserer Benutzer haben diese Website jedoch schlecht bewertet.",
"security.unknown.title":"Unbekannte Webseite",
"security.unknown.desc":"Wir haben noch nicht genügend Informationen, um diese Webseite zu bewerten.",
"security.unsafe.title":"Diese Webseite ist sicher",
"security.unsafe.phishing.desc":"Diese Webseite wurde als Phishing-Website markiert. Phishing ist der Versuch, vertrauliche Informationen wie Kennwörter, Kreditkartennummern usw. von Ihnen zu stehlen.",
"security.unsafe.malware.desc":"Wir haben auf dieser Webseite schädlichen Code gefunden, der Ihren Computer beschädigen oder Ihre private Daten stehlen könnte.",
"rating.question.desc":"Vertrauen {0}?",
"rating.negative":"Unangemessene Inhalte auf dieser Webseite? (optional)",
"rating.thanks":"Vielen Dank für Ihre Bewertung!",
"rating.trusted.desc":"Sie <i>vertrauen</i> {0}",
"rating.untrusted.desc":"Sie <i>haben kein Vertrauen</i> {0}",
"rating.revert.tooltip":"Klicken Sie zum Entfernen der Bewertung",
"rating.tooltip":"Ihr Vertrauen oder Misstrauen wird in unserer Sicherheitsbewertung für diese Website berücksichtigt.",
"rating.category.pornography":"Pornografie",
"rating.category.violence":"Waffen/Gewalt",
"rating.category.gambling":"Glücksspiel",
"rating.category.drugs":"Alkohol/Drogen",
"rating.category.illegal":"Raubkopie/Illegales",
"rating.category.others":"Sonstiges",
"privacy.title":"Privatsphäre",
"privacy.group.Social.desc":"Soziale Netzwerke",
"privacy.group.Social.block.desc":"Soziale Netzwerke standardmäßig blockieren",
"privacy.group.Social.block.tooltip":"Dies blockiert soziale Netzwerke auf jeder Website, die Sie aufsuchen.",
"privacy.group.Social.unblock.desc":"Soziale Netzwerke standardmäßig entsperren",
"privacy.group.Social.unblock.tooltip":"Dies ermöglicht soziale Netzwerke auf jeder Website, die Sie aufsuchen.",
"privacy.group.AdTracking.desc":"Verfolgung zu Werbezwecken",
"privacy.group.AdTracking.block.desc":"Sämtliches Werbe-Tracking blockieren",
"privacy.group.AdTracking.block.tooltip":"Dies blockiert Werbe-Tracking auf jeder Website, die Sie aufsuchen.",
"privacy.group.AdTracking.unblock.desc":"Sämtliches Werbe-Tracking entsperren",
"privacy.group.AdTracking.unblock.tooltip":"Dies ermöglicht Werbe-Tracking auf jeder Website, die Sie aufsuchen.",
"privacy.group.WebAnalytics.desc":"Web-Anwendungen",
"privacy.group.WebAnalytics.block.desc":"Tracking der Webanalyse insgesamt blockieren",
"privacy.group.WebAnalytics.block.tooltip":"Dies blockiert Webanalyse-Tracking auf jeder Website, die Sie besuchen.",
"privacy.group.WebAnalytics.unblock.desc":"Tracking der Webanalyse insgesamt entsperren",
"privacy.group.WebAnalytics.unblock.tooltip":"Dies ermöglicht sonstiges Tracking auf jeder Website, die Sie besuchen.",
"privacy.group.Others.desc":"Sonstiges",
"privacy.group.Others.block.desc":"Sonstiges Tracking blockieren",
"privacy.group.Others.block.tooltip":"Dies blockiert sonstiges Tracking auf jeder Website, die Sie besuchen.",
"privacy.group.Others.unblock.desc":"Sonstiges Tracking entsperren",
"privacy.trackersBlockedAll":"<i>Alle {0} Tracker</i> blockiert auf {1}\n\n<i>Alle {0} Tracker</i> blockiert auf {1} | <i>Alle {0} Tracker</i> blockiert auf {1}",
"privacy.trackersBlockedSome":"<i>{0} von {1} Tracker</i> blockiert auf {2} | <i>{0} von {1} Trackern</i> blockiert auf {2}",
"privacy.trackersBlockedNone":"<i>{0} verfolgt</i> System unter {1} | <i>{0} verfolgt</i> Systeme unter {1}",
"privacy.trackersBlocked":"{0} von {1} blockiert",
"privacy.trackersFound":"{0} gefunden",
"privacy.trackersNone":"keine Aktion",
"privacy.trackerBlock.desc":"Blockieren",
"privacy.trackerBlock.tooltip":"Dies blockiert [{0}] auf jeder Website, die Sie aufsuchen.",
"privacy.trackerUnblock.desc":"Blockiert",
"privacy.trackerUnblock.tooltip":"Dies entsperrt [{0}] auf jeder Website, die Sie aufsuchen.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Um einen bestimmten Tracker zu entsperren, deaktivieren Sie die automatische Blockierung.",
"privacy.automaticBlocking.desc":"Blockieren Sie automatisch alle Tracker",
"privacy.automaticBlocking.tooltip":"Wir blockieren automatisch alle gefundenen Tracker, auf jeder Website, die Sie besuchen.",
"setting.title":"Einstellungen",
"setting.serp.name":"Meine Suchergebnisse markieren",
"setting.serp.desc":"Fügen Sie farbige Symbole zu Ihren Suchergebnissen bei Google, Yahoo!. usw hinzu, um herauszufinden, auf welche Ergebnisse Sie klicken können. (Grün = Sicher, Grau = Unbekannt, Rot = Unsicher)",
"setting.serpPopup.name":"Tooltips für Suchergebnisse zeigen",
"setting.serpPopup.desc":"Ziehen Sie die Maus über unsere Symbole, um mehr Informationen anzuzeigen.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Wechselt für sensible Finanz-Webseiten in den Bankmodus (Avast Antivirus und Avast Secure Browser müssen dafür installiert sein)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Wechselt für sensible Finanz-Webseiten in den Bankmodus (AVG AntiVirus und AVG Secure Browser müssen dafür installiert sein)",
"setting.dntBadge.name":"Alle Tracker auf einer Webseite anzeigen",
"setting.dntBadge.desc":"Fügen Sie Ihrem Browser ein Abzeichen hinzu, um sofort zu sehen, wie viele Tracker sich auf einer Webseite befinden.",
"setting.dntAutoBlock.name":"Alle Tracker automatisch blockieren",
"setting.dntAutoBlock.desc":"Blockieren Sie alle gefundenen Tracker, auf jeder Webseite, die Sie besuchen.",
"setting.dntSocial.desc":"Tracker für alle sozialen Netzwerke blockieren",
"setting.dntAdTracking.desc":"Alle Werbe-Tracker blockieren",
"setting.dntWebAnalytics.desc":"Alle Webanalyse-Tracker blockieren",
"setting.dntOthers.desc":"Alle Tracker blockieren",
"setting.communityIQ.name":"Übermittlung von Nutzungsdaten an Drittanbieter zur Analyse zulassen",
"serp.safe.desc":"Diese Webseite ist sicher",
"serp.bad.desc":"Diese Webseite ist möglichweise nicht vertrauenswürdig",
"serp.unknown.desc":"Diese Webseite wurde noch nicht bewertet",
"serp.unsafe.desc":"Diese Webseite ist nicht sicher",
"topbar.openBankMode":"Im Bankmodus geöffnet",
"topbar.desc":"Ihre Finanzdaten sind möglicherweise für andere Personen sichtbar.",
"topbar.tooltip":"Bankmodus, der als Bestandteil von Avast Secure Browser mit Ihrem Avast Antivirus installiert wurde, schirmt Shopping- und Bank-Sitzungen sicher ab, um zu verhindern, dass Hacker Ihre Kreditkartennummern, Passwörter und andere private Daten stehlen können.",
"topbar.dontShowAgain":"Auf dieser Website nicht mehr anzeigen"
},
el:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Λεπτομέρειες",
"global.detailsHide":"Απόκρυψη λεπτομερειών",
"global.done":"Τελείωσε",
"global.leaveSite":"Έξοδος από ιστότοπο",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - Άγνωστος ιστότοπος",
"background.icon.safe":"{0} - Αυτός ο ιστότοπος είναι ασφαλής",
"background.icon.bad":"{0} - Αυτός ο ιστότοπος μπορεί να είναι αναξιόπιστος",
"background.icon.unsafe":"{0} - Αυτός ο ιστότοπος δεν είναι ασφαλής",
"security.title":"Ασφάλεια",
"security.safe.title":"Αυτός ο ιστότοπος είναι ασφαλής",
"security.safe.item1.desc":"Δεν είναι phishing",
"security.safe.item1.tooltip":"Δεν εντοπίσαμε σε αυτή την ιστοσελίδα προσπάθειες υποκλοπής ευαίσθητων πληροφοριών όπως κωδικών πρόσβασης, αριθμών πιστωτικών καρτών κ.α.",
"security.safe.item2.desc":"Δεν υπάρχει malware",
"security.safe.item2.tooltip":"Δεν εντοπίσαμε κακόβουλο κώδικα σε αυτή την ιστοσελίδα.",
"security.safe.item3.desc":"Αξιόπιστη",
"security.safe.item3.tooltip":"Οι χρήστες της {0} έχουν αξιολογήσει αυτή την ιστοσελίδα ως αξιόπιστη πατώντας {1} στο {0} Online Security.",
"security.bad.title":"Αυτή μπορεί να είναι αναξιόπιστη",
"security.bad.desc":"Δεν βρήκαμε απειλές εδώ ηλ. ψαρέματος ή κακόβουλου λογισμικού, αλλά πολλοί χρήστες μας έδωσαν στον ιστότοπο χειρονομία αποδοκιμασίας.",
"security.unknown.title":"Άγνωστος ιστότοπος",
"security.unknown.desc":"Δεν έχουμε ακόμη αρκετές πληροφορίες για να αξιολογήσουμε αυτόν τον ιστότοπο.",
"security.unsafe.title":"Αυτός ο ιστότοπος δεν είναι ασφαλής",
"security.unsafe.phishing.desc":"Αυτός ο ιστότοπος έχει επισημανθεί ως τοποθεσία ηλεκτρονικού ψαρέματος. Το ηλ. ψάρεμα είναι μια προσπάθεια υποκλοπής ευαίσθητων πληροφοριών, όπως κωδικών πρόσβασης, αριθμών πιστωτικών καρτών κ.λπ.",
"security.unsafe.malware.desc":"Σε αυτή την ιστοσελίδα βρήκαμε κακόβουλο κώδικα που θα μπορούσε να βλάψει τον υπολογιστή σας ή να κλέψει τα προσωπικά σας στοιχεία.",
"rating.question.desc":"Εμπιστεύεστε το {0};",
"rating.negative":"Τυχόν ακατάλληλο περιεχόμενο σε αυτή την ιστοσελίδα; (προαιρετικό)",
"rating.thanks":"Ευχαριστούμε για τη βαθμολογία σας!",
"rating.trusted.desc":"Εσείς <i>εμπιστεύεστε</i> {0}",
"rating.untrusted.desc":"Εσείς <i>δεν εμπιστεύεστε</i> {0}",
"rating.revert.tooltip":"Κάντε κλικ για να καταργήσετε τη βαθμολογία σας",
"rating.tooltip":"Η εμπιστοσύνη ή η δυσπιστίας σας θα ληφθούν υπόψη όταν θα βαθμολογήσουμε την ασφάλεια αυτής της ιστοσελίδας.",
"rating.category.pornography":"Πορνογραφία",
"rating.category.violence":"Όπλα/Βία",
"rating.category.gambling":"Τυχερά παιχνίδια",
"rating.category.drugs":"Αλκοόλ/Ναρκωτικά",
"rating.category.illegal":"Warez/Παράνομα",
"rating.category.others":"Άλλα",
"privacy.title":"Απόρρητο",
"privacy.group.Social.desc":"Κοινων. δίκτυα",
"privacy.group.Social.block.desc":"Μπλοκάρισμα παρακολούθησης κοινωνικών δικτύων",
"privacy.group.Social.block.tooltip":"Αυτό θα μπλοκάρει την παρακολούθηση κοινωνικών δικτύων σε κάθε ιστοσελίδα που επισκέπτεστε.",
"privacy.group.Social.unblock.desc":"Ξεμπλοκάρισμα παρακολούθησης κοινωνικών δικτύων",
"privacy.group.Social.unblock.tooltip":"Αυτό θα επιτρέψει την παρακολούθηση κοινωνικών δικτύων σε κάθε ιστοσελίδα που επισκέπτεστε.",
"privacy.group.AdTracking.desc":"Παρακολ. διαφημίσεων",
"privacy.group.AdTracking.block.desc":"Μπλοκάρισμα παρακολούθησης διαφημίσεων",
"privacy.group.AdTracking.block.tooltip":"Αυτό θα μπλοκάρει την παρακολούθηση διαφημίσεων σε κάθε ιστοσελίδα που επισκέπτεστε.",
"privacy.group.AdTracking.unblock.desc":"Ξεμπλοκάρισμα παρακολούθησης διαφημίσεων",
"privacy.group.AdTracking.unblock.tooltip":"Αυτό θα επιτρέψει την παρακολούθηση διαφημίσεων σε κάθε ιστοσελίδα που επισκέπτεστε.",
"privacy.group.WebAnalytics.desc":"Ανάλυση Web",
"privacy.group.WebAnalytics.block.desc":"Μπλοκάρισμα όλων των παρακολουθήσεων ανάλυσης web",
"privacy.group.WebAnalytics.block.tooltip":"Αυτό θα μπλοκάρει την παρακολούθηση ανάλυσης web σε κάθε ιστοσελίδα που επισκέπτεστε.",
"privacy.group.WebAnalytics.unblock.desc":"Ξεμπλοκάρισμα όλων των παρακολουθήσεων ανάλυσης web",
"privacy.group.WebAnalytics.unblock.tooltip":"Αυτό θα επιτρέψει άλλες παρακολουθήσεις σε κάθε ιστοσελίδα που επισκέπτεστε.",
"privacy.group.Others.desc":"Άλλα",
"privacy.group.Others.block.desc":"Μπλοκάρισμα όλων των άλλων παρακολουθήσεων",
"privacy.group.Others.block.tooltip":"Αυτό θα μπλοκάρει άλλες παρακολουθήσεις σε κάθε ιστοσελίδα που επισκέπτεστε.",
"privacy.group.Others.unblock.desc":"Ξεμπλοκάρισμα όλων των άλλων παρακολουθήσεων",
"privacy.trackersBlockedAll":"<i>Το {0} πρόγραμμα παρακολούθησης</i> μπλοκαρίστηκε στο {1} | <i>Τα {0} προγράμματα παρακολούθησης</i> μπλοκαρίστηκαν στο {1}",
"privacy.trackersBlockedSome":"<i>{0} από {1} πρόγραμμα παρακολούθησης</i> μπλοκαρίστηκε στο {2} | <i>{0} από {1} προγράμματα παρακολούθησης</i> μπλοκαρίστηκαν στο {2}",
"privacy.trackersBlockedNone":"<i>{0} σύστημα παρακολούθησης</i> στο {1} | <i>{0} συστήματα παρακολούθησης</i> στο {1}",
"privacy.trackersBlocked":"{0} από {1} μπλοκαρίστηκε",
"privacy.trackersFound":"{0} βρέθηκαν",
"privacy.trackersNone":"τίποτα",
"privacy.trackerBlock.desc":"Αποκλεισμ.",
"privacy.trackerBlock.tooltip":"Αυτό θα μπλοκάρει το [{0}] σε κάθε ιστοσελίδα που επισκέπτεστε.",
"privacy.trackerUnblock.desc":"Αποκλείστηκε",
"privacy.trackerUnblock.tooltip":"Αυτό θα ξεμπλοκάρει το [{0}] σε κάθε ιστοσελίδα που επισκέπτεστε.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Για να ξεμπλοκάρετε ένα συγκεκριμένο πρόγραμμα παρακολούθησης, απενεργοποιήστε το αυτόματο μπλοκάρισμα.",
"privacy.automaticBlocking.desc":"Αυτόματο μπλοκάρισμα όλων των παρακολουθήσεων",
"privacy.automaticBlocking.tooltip":"Θα μπλοκάρουμε αυτόματα τα προγράμματα παρακολούθησης σε κάθε ιστοσελίδα που επισκέπτεστε.",
"setting.title":"Ρυθμίσεις",
"setting.serp.name":"Σήμανση αποτελεσμάτων αναζητήσεων",
"setting.serp.desc":"Προσθέστε έγχρωμα εικονίδια στα αποτελέσματα αναζήτησης στο Google, το Yahoo! κ.λπ., για να δείτε σε ποια αποτελέσματα είναι ασφαλές να κάνετε κλικ (πράσινο = ασφαλές, γκρι = άγνωστο,, κόκκινο = μη ασφαλές).",
"setting.serpPopup.name":"Εμφάνιση επεξηγήσεων εργαλείων για αποτελέσματα αναζήτησης",
"setting.serpPopup.desc":"Μετακινήστε το ποντίκι πάνω από τα εικονίδια για να δείτε περισσότερες πληροφορίες.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Αλλαγή σε Τραπεζική Λειτουργία για σελίδες με ευαίσθητα οικονομικά στοιχεία (απαιτείται εγκατάσταση του Avast Antivirus και του Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Αλλαγή σε Τραπεζική Λειτουργία για σελίδες με ευαίσθητα οικονομικά στοιχεία (απαιτείται εγκατάσταση του AVG AntiVirus και του AVG Secure Browser)",
"setting.dntBadge.name":"Εμφάνιση συνολικών προγρ. παρακολούθησης σε μια ιστοσελίδα",
"setting.dntBadge.desc":"Προσθέστε ένα σήμα στο πρόγραμμα περιήγησης για να δείτε αμέσως πόσα προγράμματα παρακολούθησης είναι σε κάθε ιστοσελίδα.",
"setting.dntAutoBlock.name":"Αυτόματο μπλοκάρισμα όλων των παρακολουθήσεων",
"setting.dntAutoBlock.desc":"Μπλοκάρισμα όλων των προγρ. παρακολούθησης σε κάθε ιστοσελίδα που επισκέπτεστε.",
"setting.dntSocial.desc":"Μπλοκάρισμα παρακολούθησης από όλα τα κοινωνικά δίκτυα",
"setting.dntAdTracking.desc":"Μπλοκάρισμα παρακολούθησης διαφημίσεων",
"setting.dntWebAnalytics.desc":"Μπλοκάρισμα όλων των παρακολουθήσεων ανάλυσης web",
"setting.dntOthers.desc":"Μπλοκάρισμα όλων των άλλων παρακολουθήσεων",
"setting.communityIQ.name":"Να επιτρέπεται η κοινοποίηση της χρήσης δεδομένων σε τρίτους για ανάλυση",
"serp.safe.desc":"Αυτή η ιστοσελίδα είναι ασφαλής",
"serp.bad.desc":"Αυτή η ιστοσελίδα μπορεί να είναι αναξιόπιστη",
"serp.unknown.desc":"Αυτή η ιστοσελίδα δεν έχει αξιολόγηση",
"serp.unsafe.desc":"Αυτή η ιστοσελίδα δεν είναι ασφαλής",
"topbar.openBankMode":"Άνοιγμα σε Τραπεζική Λειτουργία",
"topbar.desc":"Τα οικονομικά σας στοιχεία ενδέχεται να είναι ορατά σε άλλους.",
"topbar.tooltip":"Η Τραπεζική Λειτουργία, μέρος του Avast Secure Browser που έχει εγκατασταθεί με το Avast antivirus, απομονώνει με ασφάλεια αγορές και συνδέσεις σε ιστοσελίδες τραπεζών για να μην μπορούν οι χάκερ να υποκλέψουν αριθμούς πιστωτικών καρτών, κωδικούς και άλλα απόρρητα στοιχεία.",
"topbar.dontShowAgain":"Να μην εμφανιστεί ξανά σε αυτήν την ιστοσελίδα"
},
en:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Details",
"global.detailsHide":"Hide details",
"global.done":"Done",
"global.leaveSite":"Leave site",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"global.close":"Close",
"global.back":"Back",
"background.icon.unknown":"{0} - Unknown site",
"background.icon.safe":"{0} - This website is safe",
"background.icon.bad":"{0} - This site may be untrustworthy",
"background.icon.unsafe":"{0} - This website is unsafe",
"security.title":"Security",
"security.safe.title":"This website is safe",
"security.safe.item1.desc":"No phishing",
"security.safe.item1.tooltip":"We have not detected any attempts to steal sensitive information like passwords, credit card numbers, etc. on this website.",
"security.safe.item2.desc":"No malware",
"security.safe.item2.tooltip":"We have not detected any malicious code on this website.",
"security.safe.item3.desc":"Trusted",
"security.safe.item3.tooltip":"{0} users have rated this website as trustworthy by clicking {1} within {0} Online Security.",
"security.bad.title":"This may be untrustworthy",
"security.bad.desc":"We didn't find any phishing threats or malware here, but many of our users gave the site a thumbs down.",
"security.unknown.title":"Unknown site",
"security.unknown.desc":"We don't have enough information yet to rate this website.",
"security.unsafe.title":"This website is unsafe",
"security.unsafe.phishing.desc":"This website has been marked as a phishing site. Phishing is an attempt to steal sensitive information from you like passwords, credit card numbers, etc.",
"security.unsafe.malware.desc":"We've found malicious code on this website that could harm your computer or steal your private data.",
"rating.question.desc":"Do you trust {0}?",
"rating.negative":"Any inappropriate content on this website? (optional)",
"rating.thanks":"Thanks for your rating!",
"rating.trusted.desc":"You <i>trust</i> {0}",
"rating.untrusted.desc":"You <i>don't trust</i> {0}",
"rating.revert.tooltip":"Click to remove your rating",
"rating.tooltip":"Your trust or distrust will be factored into our safety rating for this website.",
"rating.category.pornography":"Pornography",
"rating.category.violence":"Weapons / Violence",
"rating.category.gambling":"Gambling",
"rating.category.drugs":"Alcohol / Drugs",
"rating.category.illegal":"Warez / Illegal",
"rating.category.others":"Others",
"privacy.title":"Privacy",
"privacy.group.Social.desc":"Social networks",
"privacy.group.Social.block.desc":"Block all social network tracking",
"privacy.group.Social.block.tooltip":"This will block social network tracking on every website you visit.",
"privacy.group.Social.unblock.desc":"Unblock all social network tracking",
"privacy.group.Social.unblock.tooltip":"This will allow social network tracking on every website you visit.",
"privacy.group.AdTracking.desc":"Ad Tracking",
"privacy.group.AdTracking.block.desc":"Block all ad tracking",
"privacy.group.AdTracking.block.tooltip":"This will block ad tracking on every website you visit.",
"privacy.group.AdTracking.unblock.desc":"Unblock all ad tracking",
"privacy.group.AdTracking.unblock.tooltip":"This will allow ad tracking on every website you visit.",
"privacy.group.WebAnalytics.desc":"Web Analytics",
"privacy.group.WebAnalytics.block.desc":"Block all web analytic tracking",
"privacy.group.WebAnalytics.block.tooltip":"This will block web analytic tracking on every website you visit.",
"privacy.group.WebAnalytics.unblock.desc":"Unblock all web analytic tracking",
"privacy.group.WebAnalytics.unblock.tooltip":"This will allow other tracking on every website you visit.",
"privacy.group.Others.desc":"Others",
"privacy.group.Others.block.desc":"Block all other tracking",
"privacy.group.Others.block.tooltip":"This will block other tracking on every website you visit.",
"privacy.group.Others.unblock.desc":"Unblock all other tracking",
"privacy.trackersBlockedAll":"<i>All {0} tracker</i> blocked on {1} | <i>All {0} trackers</i> blocked on {1}",
"privacy.trackersBlockedSome":"<i>{0} of {1} tracker</i> blocked on {2} | <i>{0} of {1} trackers</i> blocked on {2}",
"privacy.trackersBlockedNone":"<i>{0} tracking</i> system on {1} | <i>{0} tracking</i> systems on {1}",
"privacy.trackersBlocked":"{0} of {1} blocked",
"privacy.trackersFound":"{0} found",
"privacy.trackersNone":"nothing",
"privacy.trackerBlock.desc":"Block",
"privacy.trackerBlock.tooltip":"This will block [{0}] on every website you visit.",
"privacy.trackerUnblock.desc":"Blocked",
"privacy.trackerUnblock.tooltip":"This will unblock [{0}] on every website you visit.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"To unblock a specific tracker, turn off automatic blocking.",
"privacy.automaticBlocking.desc":"Automatically block all trackers",
"privacy.automaticBlocking.tooltip":"We'll automatically block all found trackers on every website you visit.",
"setting.title":"Settings",
"setting.serp.name":"Mark my search results",
"setting.serp.desc":"Add colored icons to your search results on Google, Yahoo!, etc. to see which results are safe to click. (Green = Safe, Gray = Unknown, Red = Unsafe)",
"setting.serpPopup.name":"Show tooltips for search results",
"setting.serpPopup.desc":"Mouse-over our icons to see more information.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Switch to Bank Mode for sensitive financial sites (requires Avast Antivirus and Avast Secure Browser installed)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Switch to Bank Mode for sensitive financial sites (requires AVG AntiVirus and AVG Secure Browser installed)",
"setting.dntBadge.name":"Show total trackers on a site",
"setting.dntBadge.desc":"Add a badge to your browser to immediately see how many trackers are on any website.",
"setting.dntAutoBlock.name":"Automatically block all trackers",
"setting.dntAutoBlock.desc":"Block all found trackers on every website you visit.",
"setting.dntSocial.desc":"Block all social network trackers",
"setting.dntAdTracking.desc":"Block all ad trackers",
"setting.dntWebAnalytics.desc":"Block all web analytic trackers",
"setting.dntOthers.desc":"Block all other trackers",
"setting.productAnalysis.name":"Allow analysis of product performance and usage for new product development",
"setting.urlConsent.name":"Consent to harvest URL",
"serp.safe.desc":"This website is safe",
"serp.bad.desc":"This site may be untrustworthy",
"serp.unknown.desc":"This site has no rating",
"serp.unsafe.desc":"This site is unsafe",
"topbar.openBankMode":"Open in bank mode",
"topbar.desc":"Your financial data may be visible to others.",
"topbar.tooltip":"Bank Mode, part of the Avast Secure Browser installed with your Avast antivirus, safely isolates shopping and banking sessions to stop hackers from stealing your credit card numbers, password, and other private data.",
"topbar.dontShowAgain":"Don't show on this site again",
"installPage.consent.title":"Allow us to protect you by scanning web addresses?",
"installPage.consent.desc":"If you agree, we'll look at the addresses of the websites you visit so we can tell you if those sites are safe. (See our {URL_START}Privacy Policy{URL_END})",
"installPage.agreed.title":"Thanks!",
"installPage.agreed.desc":"We're now protecting you from unsafe websites.",
"installPage.disagreed.title":"No hard feelings",
"installPage.disagreed.desc":"If you don't want us to scan your web addresses, just uninstall {0} Online Security - and be safe out there!",
"installPage.consent.disagree":"No thanks",
"installPage.consent.agree":"Yes, scan web addresses",
"panel.consent.agree":"Scan web addresses"
},
es:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Detalles",
"global.detailsHide":"Ocultar detalles",
"global.done":"Listo",
"global.leaveSite":"Salir del sitio",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0}: Sitio desconocido",
"background.icon.safe":"{0}: Este sitio web es seguro.",
"background.icon.bad":"{0}: Este sitio puede ser poco fiable.",
"background.icon.unsafe":"{0}: Este sitio web no es seguro.",
"security.title":"Seguridad",
"security.safe.title":"Este sitio web es seguro.",
"security.safe.item1.desc":"Ausencia de phishing",
"security.safe.item1.tooltip":"No hemos detectado ningún intento de robar información confidencial en este sitio web, como contraseñas, números de tarjeta de crédito, etc.",
"security.safe.item2.desc":"Ningún malware",
"security.safe.item2.tooltip":"No hemos detectado ningún código malicioso en este sitio web.",
"security.safe.item3.desc":"Fiable",
"security.safe.item3.tooltip":"Los usuarios de {0} han calificado este sitio web como fiable haciendo clic en el botón {1} de {0} Online Security.",
"security.bad.title":"Este sitio puede ser poco fiable.",
"security.bad.desc":"Aquí no hemos encontrado ninguna amenaza de phishing o malware, pero muchos de nuestros usuarios calificaron el sitio con un pulgar hacia abajo.",
"security.unknown.title":"Sitio desconocido",
"security.unknown.desc":"Todavía no tenemos suficiente información sobre este sitio web.",
"security.unsafe.title":"Este sitio web no es seguro.",
"security.unsafe.phishing.desc":"Este sitio web ha sido marcado como sitio de phishing. El phishing es un intento de robar información confidencial, como contraseñas, números de tarjeta de crédito, etc.",
"security.unsafe.malware.desc":"Hemos detectado código malintencionado en este sitio web que podría dañar su equipo o robar sus datos privados.",
"rating.question.desc":"¿Confía en {0}?",
"rating.negative":"¿Ha detectado contenido inadecuado en este sitio web? (opcional)",
"rating.thanks":"¡Gracias por su calificación!",
"rating.trusted.desc":"<i>Confía</i> en {0}.",
"rating.untrusted.desc":"<i>No confía</i> en {0}.",
"rating.revert.tooltip":"Haga clic para eliminar su calificación",
"rating.tooltip":"Su confianza o desconfianza se tendrá en cuenta a la hora de establecer nuestra calificación de seguridad para este sitio web.",
"rating.category.pornography":"Pornografía",
"rating.category.violence":"Armas o violencia",
"rating.category.gambling":"Apuestas",
"rating.category.drugs":"Alcohol o drogas",
"rating.category.illegal":"Piratería o ilegalidades",
"rating.category.others":"Otros",
"privacy.title":"Privacidad",
"privacy.group.Social.desc":"Redes sociales",
"privacy.group.Social.block.desc":"Bloquear todo el seguimiento de redes sociales",
"privacy.group.Social.block.tooltip":"Esto bloqueará el seguimiento de redes sociales en todos los sitios web que visite.",
"privacy.group.Social.unblock.desc":"Desbloquear todo el seguimiento de redes sociales",
"privacy.group.Social.unblock.tooltip":"Esto permitirá el seguimiento de redes sociales en todos los sitios web que visite.",
"privacy.group.AdTracking.desc":"Seguimiento de anuncios",
"privacy.group.AdTracking.block.desc":"Bloquear todo el seguimiento de anuncios",
"privacy.group.AdTracking.block.tooltip":"Esto bloqueará el seguimiento de anuncios en todos los sitios web que visite.",
"privacy.group.AdTracking.unblock.desc":"Desbloquear todo el seguimiento de anuncios",
"privacy.group.AdTracking.unblock.tooltip":"Esto permitirá el seguimiento de anuncios en todos los sitios web que visite.",
"privacy.group.WebAnalytics.desc":"Análisis web",
"privacy.group.WebAnalytics.block.desc":"Bloquear todo el seguimiento de análisis web",
"privacy.group.WebAnalytics.block.tooltip":"Esto bloqueará el seguimiento de análisis web en todos los sitios web que visite.",
"privacy.group.WebAnalytics.unblock.desc":"Desbloquear todo el seguimiento de análisis web",
"privacy.group.WebAnalytics.unblock.tooltip":"Esto permitirá los otros seguimientos en todos los sitios web que visite.",
"privacy.group.Others.desc":"Otros",
"privacy.group.Others.block.desc":"Bloquear los otros seguimientos",
"privacy.group.Others.block.tooltip":"Esto bloqueará los otros seguimientos en todos los sitios web que visite.",
"privacy.group.Others.unblock.desc":"Desbloquear los otros seguimientos",
"privacy.trackersBlockedAll":"<i>{0} rastreador</i> bloqueado en {1} | <i>{0} rastreadores</i> bloqueados en {1}",
"privacy.trackersBlockedSome":"<i>{0} de {1} rastreador</i> bloqueado en {2} | <i>{0} de {1} rastreadores</i> bloqueados en {2}",
"privacy.trackersBlockedNone":"<i>{0} sistema de seguimiento</i> en {1} | <i>{0} sistemas de seguimiento</i> en {1}",
"privacy.trackersBlocked":"{0} de {1} bloqueado",
"privacy.trackersFound":"{0} encontrado",
"privacy.trackersNone":"nada",
"privacy.trackerBlock.desc":"Bloquear",
"privacy.trackerBlock.tooltip":"Esto desbloqueará [{0}] en todos los sitios web que visite.",
"privacy.trackerUnblock.desc":"Bloqueado",
"privacy.trackerUnblock.tooltip":"Esto desbloqueará [{0}] en todos los sitios web que visite.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Para desbloquear un rastreador específico, desactive el bloqueo automático.",
"privacy.automaticBlocking.desc":"Bloquear de forma automática todos los rastreadores",
"privacy.automaticBlocking.tooltip":"Bloquearemos automáticamente todos los rastreadores detectados en cada sitio web que visite.",
"setting.title":"Configuración",
"setting.serp.name":"Marcar mis resultados de búsqueda",
"setting.serp.desc":"Agregue iconos de colores a los resultados de la búsqueda en Google, Yahoo!, etc. para ver en qué resultados puede hacer clic de forma segura. El verde indica que es seguro; el gris, que se desconoce; el rojo, que no es seguro",
"setting.serpPopup.name":"Mostrar información en pantalla sobre los resultados de búsqueda",
"setting.serpPopup.desc":"Pase el ratón por encima de nuestros iconos para ver más información.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Cambiar a Modo de banca para sitios financieros confidenciales (requiere la instalación de Avast Antivirus y Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Cambiar a Modo de banca para sitios financieros confidenciales (requiere la instalación de AVG AntiVirus y AVG Secure Browser)",
"setting.dntBadge.name":"Mostrar el total de rastreadores en un sitio",
"setting.dntBadge.desc":"Añada un distintivo al navegador para ver inmediatamente cuántos rastreadores hay en cualquier sitio web.",
"setting.dntAutoBlock.name":"Bloquear de forma automática todos los rastreadores",
"setting.dntAutoBlock.desc":"Bloquee todos los rastreadores detectados en los sitios web que visite.",
"setting.dntSocial.desc":"Bloquear todos los rastreadores de redes sociales",
"setting.dntAdTracking.desc":"Bloquear todos los rastreadores de anuncios",
"setting.dntWebAnalytics.desc":"Bloquear todos los rastreadores de análisis web",
"setting.dntOthers.desc":"Bloquear los otros rastreadores",
"setting.communityIQ.name":"Permitir que los datos de uso se compartan con terceros para realizar análisis",
"serp.safe.desc":"Este sitio es seguro",
"serp.bad.desc":"Este sitio puede ser poco fiable",
"serp.unknown.desc":"Este sitio no tiene ninguna calificación",
"serp.unsafe.desc":"Este sitio no es seguro",
"topbar.openBankMode":"Abrir en Modo de banca",
"topbar.desc":"Es posible que otros usuarios puedan ver sus datos financieros.",
"topbar.tooltip":"El Modo de banca, que forma parte de Avast Secure Browser, que se instala con Avast Antivirus, aísla de forma segura las sesiones de banca y compras para impedir que los hackers roben los números de sus tarjetas de crédito, su contraseña y otros datos privados.",
"topbar.dontShowAgain":"No volver a mostrarlo en este sitio"
},
et:{
"AVG.title":"Veebiturvalisus",
"Avast.title":"Avasti veebiturvalisus",
"global.beta":"Beeta",
"global.detailsShow":"Detailid",
"global.detailsHide":"Peida detailid",
"global.done":"Valmis",
"global.leaveSite":"Lahku lehelt",
"global.switcher.off":"-",
"global.switcher.on":"-",
"background.icon.unknown":"{0} - Tundmatu leht",
"background.icon.safe":"{0} - See veebileht on turvaline",
"background.icon.bad":"{0} - See leht võib olla ebausaldusväärne",
"background.icon.unsafe":"{0} - See veebileht ei ole turvaline",
"security.title":"Turvalisus",
"security.safe.title":"See veebileht on turvaline",
"security.safe.item1.desc":"Õngitsemist pole tuvastatud",
"security.safe.item1.tooltip":"Me ei ole tuvastanud katseid varastada tundlikku teavet nagu paroolid, krediitkaartide numbrid jne sellelt veebilehelt.",
"security.safe.item2.desc":"Pahavara pole tuvastatud",
"security.safe.item2.tooltip":"Me ei ole tuvastanud pahatahtlikke koode sellel veebilehel.",
"security.safe.item3.desc":"Usaldusväärne",
"security.safe.item3.tooltip":"{0} kasutajat hindas selle veebilehe usaldusväärseks, klõpsates {1} valikul {0} Veebiturvalisus.",
"security.bad.title":"See võib olla ebausaldusväärne",
"security.bad.desc":"Me ei leidnud siit õngitsemise ohtu või pahavara, kuid paljud meie kasutajad panind sellele lehele pöial alla märgi.",
"security.unknown.title":"Tundmatu veebileht",
"security.unknown.desc":"Meil ei ole veel piisavat teavet selle veebilehe hindamiseks.",
"security.unsafe.title":"See veebileht ei ole turvaline",
"security.unsafe.phishing.desc":"See veebileht on märgitud kui õngitsemise leht. Õngitsemine on püüd varastada sinult tundlikku teavet nagu paroolid, krediitkaartide numbrid jne.",
"security.unsafe.malware.desc":"Leidsime sellelt veebilehelt pahatahtliku koodi, mis võib kahjustada sinu arvutit või varastada sinu isikuandmeid.",
"rating.question.desc":"Kas sa usaldad {0}?",
"rating.negative":"Kas sellel veebilehel on sobimatu sisu? (valikuline)",
"rating.thanks":"Täname sind hinnangu eest!",
"rating.trusted.desc":"Sina <i>usaldad</i> {0}",
"rating.untrusted.desc":"Sina <i>ei usalda</i> {0}",
"rating.revert.tooltip":"Klõpsa oma hinnangu eemaldamiseks",
"rating.tooltip":"Usaldamine või usaldamatus sinu poolt kajastub meie ohutuse hinnangus selle veebilehe kohta.",
"rating.category.pornography":"Pornograafia",
"rating.category.violence":"Relvad / Vägivald",
"rating.category.gambling":"Hasartmängud",
"rating.category.drugs":"Alkohol / Uimastid",
"rating.category.illegal":"Warez / Illegaalne",
"rating.category.others":"Muud",
"privacy.title":"Privaatsus",
"privacy.group.Social.desc":"Sotsiaalvõrgustikud",
"privacy.group.Social.block.desc":"Blokeeri kogu sotsiaalvõrgustiku jälgimine",
"privacy.group.Social.block.tooltip":"See blokeerib sotsiaalvõrgustiku jälgimise igal veebilehel, mida sa külastad.",
"privacy.group.Social.unblock.desc":"Vabasta kogu sotsiaalvõrgustiku jälgimise blokeerimine",
"privacy.group.Social.unblock.tooltip":"See lubab sotsiaalvõrgustiku jälgimise igal veebilehel, mida sa külastad.",
"privacy.group.AdTracking.desc":"Reklaami jälgimine",
"privacy.group.AdTracking.block.desc":"Blokeeri kogu reklaami jälgimine",
"privacy.group.AdTracking.block.tooltip":"See blokeerib reklaami jälgimise igal veebilehel, mida sa külastad.",
"privacy.group.AdTracking.unblock.desc":"Vabasta kogu reklaami jälgimise blokeerimine",
"privacy.group.AdTracking.unblock.tooltip":"See lubab reklaami jälgimise igal veebilehel, mida sa külastad.",
"privacy.group.WebAnalytics.desc":"Veebianalüütika",
"privacy.group.WebAnalytics.block.desc":"Blokeeri kogu veebianalüütika jälgimine",
"privacy.group.WebAnalytics.block.tooltip":"See blokeerib veebianalüütika jälgimise igal veebilehel, mida sa külastad.",
"privacy.group.WebAnalytics.unblock.desc":"Vabasta kogu veebianalüütika jälgimine",
"privacy.group.WebAnalytics.unblock.tooltip":"See lubab kogu muu jälgimise igal veebilehel, mida sa külastad.",
"privacy.group.Others.desc":"Muud",
"privacy.group.Others.block.desc":"Blokeeri kogu muu jälgimine",
"privacy.group.Others.block.tooltip":"See blokeerib jälgimise igal veebilehel, mida sa külastad.",
"privacy.group.Others.unblock.desc":"Vabasta kogu muu jälgimise blokeerimine",
"privacy.trackersBlockedAll":"<i>{0} jälgija</i> on blokeeritud {1} | <i>{0} jälgijat</i> on blokeeritud {1}",
"privacy.trackersBlockedSome":"<i>{0} / {1} jälgija</i> on blokeeritud {2} | <i>{0} / {1} jälgijat</i> on blokeeritud {2}",
"privacy.trackersBlockedNone":"<i>{0} jälgimise</i> süsteemi {1} | <i>{0} jälgimise</i> süsteemi {1}",
"privacy.trackersBlocked":"{0} / {1} blokeeritud",
"privacy.trackersFound":"{0} leitud",
"privacy.trackersNone":"mitte midagi",
"privacy.trackerBlock.desc":"Blokeeri",
"privacy.trackerBlock.tooltip":"See blokeerib [{0}] igal veebilehel, mida sa külastad.",
"privacy.trackerUnblock.desc":"Blokeeritud",
"privacy.trackerUnblock.tooltip":"See vabastab [{0}] blokeerimisest igal veebilehel, mida sa külastad.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Konkreetse jälgija vabastamiseks lülita automaatne blokeerimine välja.",
"privacy.automaticBlocking.desc":"Blokeeri automaatselt kõik jälgijad",
"privacy.automaticBlocking.tooltip":"Me blokeerime automaatselt kõik leitud jälgijad igal veebilehel, mida sa külastad.",
"setting.title":"Seaded",
"setting.serp.name":"Märgi minu otsingutulemused",
"setting.serp.desc":"Lisa värvilised ikoonid oma otsingutulemustele Google'ist, Yahoo!-st jne, et näha, millistele tulemustele klõpsamine on turvaline. (Roheline = Turvaline, Hall = Teadmata, Punane = Ebaturvaline)",
"setting.serpPopup.name":"Kuva soovitused otsingtulemuste jaoks",
"setting.serpPopup.desc":"Lisateabe saamiseks liiguta hiirt üle meie ikoonide.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Lülitu pangarežiimile tundlikel finantslehtedel (Avast Antivirus ja Avast Secure Browser peavad olema installitud)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Lülitu pangarežiimile tundlikel finantslehtedel (AVG AntiVirus ja AVG Secure Browser peavad olema installitud)",
"setting.dntBadge.name":"Kuva kõik jälgijad lehel",
"setting.dntBadge.desc":"Lisa märk oma brauserile, et näha kohe, kui palju jälgijaid on veebilehel.",
"setting.dntAutoBlock.name":"Blokeeri automaatselt kõik jälgijad",
"setting.dntAutoBlock.desc":"Blokeeri kõik leitud jälgijad igal veebilehel, mida sa külastad.",
"setting.dntSocial.desc":"Blokeeri kõik sotsiaalvõrgu jälgijad",
"setting.dntAdTracking.desc":"Blokeeri kõik reklaami jälgijad",
"setting.dntWebAnalytics.desc":"Blokeeri kogu veebianalüütika jälgimine",
"setting.dntOthers.desc":"Blokeeri kõik muud jälgijad",
"setting.communityIQ.name":"Luba kasutajaandmete jagamist kolmanda poolega analüütika jaoks",
"serp.safe.desc":"See leht on turvaline",
"serp.bad.desc":"See leht võib olla ebausaldusväärne",
"serp.unknown.desc":"Sellel lehel puudub reiting",
"serp.unsafe.desc":"See leht ei ole turvaline",
"topbar.openBankMode":"Ava pangarežiimis",
"topbar.desc":"Sinu finantsandmed võivad teistele nähtavad olla.",
"topbar.tooltip":"Avasti antiviirusega koos installitud Avasti turvalise brauseri juurde kuuluv pangarežiim isoleerib turvaliselt ostu- ja pangandussessioonid, et häkkerid ei saaks varastada sinu krediitkaartide numbreid, parooli ja muid isiklikke andmeid.",
"topbar.dontShowAgain":"Ära näita enam sellel lehel"
},
fa:{
"AVG.title":"امنیت آنلاین",
"Avast.title":"امنیت آنلاین Avast",
"global.beta":"بتا",
"global.detailsShow":"جزئیات",
"global.detailsHide":"پنهان کردن جزئیات",
"global.done":"انجام شد",
"global.leaveSite":"ترک سایت",
"global.switcher.off":"غ.ف",
"global.switcher.on":"فع",
"background.icon.unknown":"{0} - سایت ناشناخته",
"background.icon.safe":"{0} - این وب‌سایت امن است",
"background.icon.bad":"{0} - این سایت ممکن است نامعتبر باشد",
"background.icon.unsafe":"{0} - این وب‌سایت ناامن است",
"security.title":"امنیت",
"security.safe.title":"این وب‌سایت امن است",
"security.safe.item1.desc":"بدون فیشینگ",
"security.safe.item1.tooltip":"ما هیچ تلاشی برای سرقت اطلاعات حساس شما از قبیل رمزهای عبور، شماره کارت‌های اعتباری و غیره در این وب‌سایت پیدا نکردیم.",
"security.safe.item2.desc":"بدون بدافزار",
"security.safe.item2.tooltip":"ما هیچ کد خطرناکی در این وب‌سایت تشخیص ندادیم.",
"security.safe.item3.desc":"مورد اعتماد",
"security.safe.item3.tooltip":"کاربران {0} این وب‌سایت را از طریق کلیک روی {1} در امنیت آنلاین {0} به عنوان مورد اعتماد رتبه‌بندی کردند.",
"security.bad.title":"این سایت ممکن است نامطمئن باشد",
"security.bad.desc":"ما هیچ تهدید‌ فیشینگ یا بدافزار در اینجا پیدا نکردیم، اما بسیاری از کاربران ما برای این سایت شست پایین نشان دادند.",
"security.unknown.title":"سایت ناشناخته",
"security.unknown.desc":"ما اطلاعات کافی برای رتبه‌بندی این وب‌سایت نداریم.",
"security.unsafe.title":"این وب‌سایت ناامن است",
"security.unsafe.phishing.desc":"این وب‌سایت به عنوان یک سایت فیشینگ علامت‌گذاری شده است. فیشینگ به منزله تلاش برای سرقت اطلاعات حساس از قبیل رمزهای عبور، شماره کارت‌های اعتباری و غیره از شما می‌باشد.",
"security.unsafe.malware.desc":"ما کد خطرناکی در این وب‌سایت پیدا کردیم که ممکن است به رایانه شما صدمه بزند یا داده‌های شخصی شما را سرقت کند.",
"rating.question.desc":"آیا به {0} اعتماد دارید؟",
"rating.negative":"آیا محتوای نامناسب در این وب‌سایت وجود دارد؟ (اختیاری)",
"rating.thanks":"سپاس از اینکه رتبه‌بندی کردید!",
"rating.trusted.desc":"شما <i>اعتماد دارید به</i> {0}",
"rating.untrusted.desc":"شما <i>اعتماد ندارید به</i> {0}",
"rating.revert.tooltip":"برای حذف رتبه‌بندی خود کلیک کنید",
"rating.tooltip":"اعتماد یا عدم اعتماد شما در رتبه‌بندی ایمنی ما برای این وب‌سایت لحاظ خواهد شد.",
"rating.category.pornography":"هرزه‌نگاری",
"rating.category.violence":"اسلحه / خشونت",
"rating.category.gambling":"قمار",
"rating.category.drugs":"الکل / مواد مخدر",
"rating.category.illegal":"نرم افزار دزدی / غیرقانونی",
"rating.category.others":"سایر موارد",
"privacy.title":"حریم خصوصی",
"privacy.group.Social.desc":"شبکه‌های اجتماعی",
"privacy.group.Social.block.desc":"مسدود کردن ردیابی همه شبکه‌های اجتماعی",
"privacy.group.Social.block.tooltip":"این کار، ردیابی شبکه‌های اجتماعی را در همه وب‌سایت‌هایی که بازدید می‌کنید مسدود خواهد کرد.",
"privacy.group.Social.unblock.desc":"لغو مسدود کردن ردیابی همه شبکه‌های اجتماعی",
"privacy.group.Social.unblock.tooltip":"این کار، به ردیابی شبکه‌های اجتماعی در همه وب‌سایت‌هایی که بازدید می‌کنید اجازه خواهد داد.",
"privacy.group.AdTracking.desc":"ردیابی تبلیغات",
"privacy.group.AdTracking.block.desc":"مسدود کردن همه ردیابی‌های تبلیغات",
"privacy.group.AdTracking.block.tooltip":"این کار، ردیابی تبلیغات را در همه وب‌سایت‌هایی که بازدید می‌کنید مسدود خواهد کرد.",
"privacy.group.AdTracking.unblock.desc":"لغو مسدود کردن همه ردیابی‌های تبلیغات",
"privacy.group.AdTracking.unblock.tooltip":"این کار، به ردیابی تبلیغات در همه وب‌سایت‌هایی که بازدید می‌کنید اجازه خواهد داد.",
"privacy.group.WebAnalytics.desc":"تحلیل وب",
"privacy.group.WebAnalytics.block.desc":"مسدود کردن همه ردیابی‌های تحلیل وب",
"privacy.group.WebAnalytics.block.tooltip":"این ردیابی تحلیل وب را در همه وب‌سایت‌هایی که بازدید می‌کنید مسدود خواهد کرد.",
"privacy.group.WebAnalytics.unblock.desc":"لغو مسدود کردن همه ردیابی‌های تحلیل وب",
"privacy.group.WebAnalytics.unblock.tooltip":"این همه ردیابی‌های دبگر را در هر وب‌سایتی که بازدید می‌کنید اجازه خواهد داد.",
"privacy.group.Others.desc":"سایر موارد",
"privacy.group.Others.block.desc":"مسدود کردن همه ردیابی‌های دیگر",
"privacy.group.Others.block.tooltip":"این همه ردیابی‌های دیگر را در هر وب‌سایتی که بازدید می‌کنید مسدود خواهد کرد.",
"privacy.group.Others.unblock.desc":"لغو مسدود کردن همه ردیابی‌های دیگر",
"privacy.trackersBlockedAll":"<i>{0} ردیاب</i> در {1} مسدود است | <i>همه {0} ردیاب</i> در {1} مسدود هستند",
"privacy.trackersBlockedSome":"<i>{0} از {1} ردیاب</i> در {2} مسدود است | <i>{0} از {1} ردیاب</i> در {2} مسدود هستند",
"privacy.trackersBlockedNone":"<i>{0} سیستم </i> ردیابی در {1} | <i>{0} سیستم </i> ردیابی در {1}",
"privacy.trackersBlocked":"{0} از {1} مسدود شد",
"privacy.trackersFound":"{0} یافت شد",
"privacy.trackersNone":"هیچ چیز",
"privacy.trackerBlock.desc":"مسدود کردن",
"privacy.trackerBlock.tooltip":"این [{0}] را در همه وب‌سایت‌هایی که بازدید می‌کنید مسدود خواهد کرد.",
"privacy.trackerUnblock.desc":"مسدود",
"privacy.trackerUnblock.tooltip":"این [{0}] را در همه وب‌سایت‌هایی که بازدید می‌کنید لغو انسداد خواهد کرد.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"برای لغو انسداد یک ردیاب خاص، مسدودسازی خودکار را غیرفعال کنید.",
"privacy.automaticBlocking.desc":"مسدودسازی خودکار همه ردیاب‌ها",
"privacy.automaticBlocking.tooltip":"ما به طور خودکار همه ردیاب‌ها را در هر وب‌سایتی که بازدید می‌کنید، مسدود خواهیم کرد.",
"setting.title":"تنظیمات",
"setting.serp.name":"علامت‌گذاری همه نتایج جستجو",
"setting.serp.desc":"افزودن آیکن‌های رنگی به نتایج جستجوی شما در Google،‏ Yahoo!‎ و غیره تا نتایجی که کلیک روی آنها امن است مشخص شوند. (سبز = امن، خاکستری = نامشخص، قرمز = ناامن)",
"setting.serpPopup.name":"نمایش نکته ابزارها برای نتایج جستجو",
"setting.serpPopup.desc":"برای مشاهده اطلاعات بیشتر، ماوس را روی آیکن‌ها نگه دارید.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"برای استفاده از سایت‌های مالی حساس، به حالت بانکداری اینترنتی بروید (لازم است ضد ویروس Avast و Avast Secure Browser هر دو نصب باشند)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"برای سایت‌های مالی حساس، روی حالت بانکداری تنظیم کنید (ضد ویروس AVG و AVG Secure Browser باید نصب شده باشند)",
"setting.dntBadge.name":"نمایش مجموع ردیاب‌ها در یک سایت",
"setting.dntBadge.desc":"افزودن یک علامت به مرورگر شما برای مشاهده سریع تعداد ردیاب‌ها در هر وب‌سایت.",
"setting.dntAutoBlock.name":"مسدودسازی خودکار همه ردیاب‌ها",
"setting.dntAutoBlock.desc":"مسدود کردن همه ردیاب‌ها در هر وب‌سایتی که بازدید می‌کنید.",
"setting.dntSocial.desc":"مسدود کردن همه ردیابی‌های شبکه‌های اجتماعی",
"setting.dntAdTracking.desc":"مسدود کردن همه ردیاب‌های تبلیغات",
"setting.dntWebAnalytics.desc":"مسدود کردن همه ردیاب‌های تحلیل وب",
"setting.dntOthers.desc":"مسدود کردن همه ردیاب‌های دیگر",
"setting.communityIQ.name":"اجازه دهید داده‌های مصرف با تحلیلگرهای شخص ثالث به اشتراک گذاشته شوند",
"serp.safe.desc":"این سایت امن است",
"serp.bad.desc":"این سایت ممکن است نامطمئن باشد",
"serp.unknown.desc":"این سایت رتبه‌بندی ندارد",
"serp.unsafe.desc":"این سایت ناامن است",
"topbar.openBankMode":"باز کردن در حالت بانکداری اینترنتی",
"topbar.desc":"ممکن است دیگران قادر به رویت داده‌های مالی شما باشند.",
"topbar.tooltip":"حالت بانکداری اینترنتی به عنوان بخشی از قابلیت Avast Secure Browser به همراه ضد ویروس Avast شما نصب می‌شود و فعالیت‌های خرید و بانکداری شما را از سایر گشت و گذارهای اینترنتی مجزا می‌کند تا هکرها فرصتی برای سرقت شماره کارت‌های اعتباری، رمزهای عبور و همچنین سایر داده‌های شخصی شما نداشته باشند.",
"topbar.dontShowAgain":"دیگر برای این سایت نشان داده نشود"
},
fi:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Lisätiedot",
"global.detailsHide":"Piilota lisätiedot",
"global.done":"Valmis",
"global.leaveSite":"Poistu sivustolta",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - tuntematon sivusto",
"background.icon.safe":"{0} - Tämä sivusto on turvallinen",
"background.icon.bad":"{0} - sivusto voi olla epäluotettava",
"background.icon.unsafe":"{0} - Tämä sivusto ei ole turvallinen",
"security.title":"Turvallisuus",
"security.safe.title":"Tämä sivusto on turvallinen",
"security.safe.item1.desc":"Ei tietojenkalastelua",
"security.safe.item1.tooltip":"Tällä sivustolla ei havaittu yrityksiä varastaa luottamuksellisia tietoja kuten salasanoja, luottokorttinumeroita jne.",
"security.safe.item2.desc":"Ei haittaohjelmia",
"security.safe.item2.tooltip":"Tällä sivustolla ei havaittu haitallista koodia.",
"security.safe.item3.desc":"Luotettu",
"security.safe.item3.tooltip":"{0} käyttäjää on arvioinut tämän sivuston turvalliseksi napsauttamalla {1} {0} Online Securityssä.",
"security.bad.title":"Sivusto voi olla epäluotettava",
"security.bad.desc":"Emme havainneet kalasteluyrityksiä tai haittaohjelmia, mutta monet käyttäjät ovat arvioineet sivuston epäluotettavaksi.",
"security.unknown.title":"Tuntematon sivusto",
"security.unknown.desc":"Meillä ei ole vielä tarpeeksi tietoja tämän sivuston arvioimiseksi.",
"security.unsafe.title":"Tämä sivusto ei ole turvallinen",
"security.unsafe.phishing.desc":"Tämä sivusto on merkitty tietojenkalastelusivustoksi. Tietojenkalastelu on yritys varastaa luottamuksellisia tietoja kuten salasanoja, luottokorttinumeroita jne.",
"security.unsafe.malware.desc":"Olemme havainneet tällä sivustolla haitallista koodia, joka voi vahingoittaa tietokonetta tai varastaa yksityisiä tietoja.",
"rating.question.desc":"Luotatko sivustoon {0}?",
"rating.negative":"Onko tällä sivustolla sopimatonta sisältöä? (valinnainen)",
"rating.thanks":"Kiitos luokituksesta!",
"rating.trusted.desc":"<i>Luotat</i> sivustoon {0}",
"rating.untrusted.desc":"<i>Et luota</i> sivustoon {0}",
"rating.revert.tooltip":"Napsauta poistaaksesi luokituksen",
"rating.tooltip":"Luottamus tai epäluottamus otetaan huomioon tämän sivuston turvallisuusarvioinnissa.",
"rating.category.pornography":"Pornografiaa",
"rating.category.violence":"Aseita / Väkivaltaa",
"rating.category.gambling":"Uhkapelejä",
"rating.category.drugs":"Alkoholia / Huumeita",
"rating.category.illegal":"Laittomia ohjelmia",
"rating.category.others":"Muut",
"privacy.title":"Yksityisyys",
"privacy.group.Social.desc":"Sosiaaliset verkostot",
"privacy.group.Social.block.desc":"Estä kaikki sosiaalisten verkostojen seuranta",
"privacy.group.Social.block.tooltip":"Tämä estää sosiaalisia verkostoja seuraamasta, millä sivustoilla käyt.",
"privacy.group.Social.unblock.desc":"Poista kaikki sosiaalisten verkostojen seuranta",
"privacy.group.Social.unblock.tooltip":"Tämä antaa sosiaalisten verkostojen seurata, millä sivustoilla käyt.",
"privacy.group.AdTracking.desc":"Mainosseuranta",
"privacy.group.AdTracking.block.desc":"Estä kaikki mainosseuranta",
"privacy.group.AdTracking.block.tooltip":"Tämä estää mainostajia seuraamasta, millä sivustoilla käyt.",
"privacy.group.AdTracking.unblock.desc":"Poista mainosseurannan esto",
"privacy.group.AdTracking.unblock.tooltip":"Tämä antaa mainostajien seurata, millä sivustoilla käyt.",
"privacy.group.WebAnalytics.desc":"Verkkoanalyysit",
"privacy.group.WebAnalytics.block.desc":"Estä kaikki verkkoanalyysiseuranta",
"privacy.group.WebAnalytics.block.tooltip":"Tämä estää verkkoanalysoijia seuraamasta, millä sivustoilla käyt.",
"privacy.group.WebAnalytics.unblock.desc":"Poista verkkoanalyysien seurannan esto",
"privacy.group.WebAnalytics.unblock.tooltip":"Tämä antaa muiden tahojen seurata, millä sivustoilla käyt.",
"privacy.group.Others.desc":"Muut",
"privacy.group.Others.block.desc":"Estä kaikki muu seuranta",
"privacy.group.Others.block.tooltip":"Tämä estää muita tahoja seuraamasta, millä sivustoilla käyt.",
"privacy.group.Others.unblock.desc":"Poista muun seurannan esto",
"privacy.trackersBlockedAll":"<i>{0} seuraaja</i> estetty sivustolla {1} | <i>Kaikki {0} seurainta</i> estetty sivustolla {1}",
"privacy.trackersBlockedSome":"<i>{0} seuraaja {1} seuraajasta</i> estetty sivustolla {2} | <i>{0} seurainta {1} seuraimesta</i> estetty sivustolla {2}",
"privacy.trackersBlockedNone":"<i>{0} seurainjärjestelmä</i> kohteessa {1} | <i>{0} seurainjärjestelmää</i> kohteessa {1}",
"privacy.trackersBlocked":"{0}/{1} estetty",
"privacy.trackersFound":"{0} löytynyt",
"privacy.trackersNone":"ei toimenpiteitä",
"privacy.trackerBlock.desc":"Estä",
"privacy.trackerBlock.tooltip":"Tämä estää kohteen [{0}] kaikilla sivustoilla, joilla käyt.",
"privacy.trackerUnblock.desc":"Estetty",
"privacy.trackerUnblock.tooltip":"Tämä poistaa kohteen [{0}] eston kaikilla sivustoilla, joilla käyt.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Ota automaattinen esto pois päältä poistaaksesi tietyn seuraimen eston.",
"privacy.automaticBlocking.desc":"Estä automaattisesti kaikki seuraimet",
"privacy.automaticBlocking.tooltip":"Kaikki havaitut seuraimet estetään automaattisesti kaikilla sivustoilla, joilla käyt.",
"setting.title":"Asetukset",
"setting.serp.name":"Merkitse hakutulokset",
"setting.serp.desc":"Lisää värilliset kuvakkeet Google-, Yahoo!- ym. hakujen tuloksiin, jotta voin nähdä, mitkä tulokset ovat turvallisia. (Vihreä = turvallinen, harmaa = tuntematon, punainen = ei-turvallinen)",
"setting.serpPopup.name":"Näytä työkaluvihjeet hakutuloksissa",
"setting.serpPopup.desc":"Näytä lisätiedot vedettäessä hiiri kuvakkeiden päälle.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Käynnistä Pankkitila, kun alat käyttää esimerkiksi verkkopankkia (vaatii Avast Antiviruksen ja Avast Secure Browser -selaimen)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Siirry Pankkitilaan, kun alat käyttää esimerkiksi verkkopankkia (vaatii AVG AntiViruksen ja AVG Secure Browser -selaimen)",
"setting.dntBadge.name":"Näytä sivuston seuraimien kokonaismäärä",
"setting.dntBadge.desc":"Lisää selaimeesi kuvake, josta näkee heti sivuston seuraimien määrän.",
"setting.dntAutoBlock.name":"Estä automaattisesti kaikki seuraimet",
"setting.dntAutoBlock.desc":"Estä kaikki seuraimet kaikilla sivustoilla, joilla käyt.",
"setting.dntSocial.desc":"Estä kaikki sosiaalisten verkostojen seuraimet",
"setting.dntAdTracking.desc":"Estä kaikki mainosseuraimet",
"setting.dntWebAnalytics.desc":"Estä kaikki verkkoanalyysiseuraimet",
"setting.dntOthers.desc":"Estä kaikki muu seuraimet",
"setting.communityIQ.name":"Salli tietojen jakaminen kolmannen osapuolen analytiikkapalvelujen kanssa",
"serp.safe.desc":"Tämä sivusto on turvallinen",
"serp.bad.desc":"Tämä sivusto voi olla epäluotettava",
"serp.unknown.desc":"Tätä sivustoa ei ole luokiteltu",
"serp.unsafe.desc":"Tämä sivusto ei ole turvallinen",
"topbar.openBankMode":"Avaa Pankkitilassa",
"topbar.desc":"Talous- ja rahatietosi saattavat näkyä muille.",
"topbar.tooltip":"Pankkitila on osa Avast Secure selainta, joka on asennettu Avast-virustorjuntaohjelmistosi kanssa. Se eristää suojatusti ostos- ja pankki-istunnot ja estää hakkereita varastamasta luottokorttinumeroita, salasanoja ja muita yksityisiä tietojasi.",
"topbar.dontShowAgain":"Älä näytä enää uudelleen tällä sivustolla"
},
fr:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Bêta",
"global.detailsShow":"Détails",
"global.detailsHide":"Masquer les détails",
"global.done":"Terminé",
"global.leaveSite":"Quitter le site",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - Site inconnu",
"background.icon.safe":"{0} - Ce site Web est sûr",
"background.icon.bad":"{0} - Ce site peut être indigne de confiance",
"background.icon.unsafe":"{0} - Ce site Web n'est pas sûr",
"security.title":"Sécurité",
"security.safe.title":"Ce site Web est sûr",
"security.safe.item1.desc":"Aucun hameçonnage",
"security.safe.item1.tooltip":"Nous n’avons détecté aucune tentative de dérober des informations sensibles comme les mots de passe, les numéros de carte de crédit, etc. sur ce site Web.",
"security.safe.item2.desc":"Aucun malware",
"security.safe.item2.tooltip":"Nous n’avons détecté aucun code malveillant sur ce site Web.",
"security.safe.item3.desc":"Digne de confiance",
"security.safe.item3.tooltip":"{0} utilisateurs ont évalué ce site comme digne de confiance en cliquant sur {1} dans {0} Online Security.",
"security.bad.title":"Peut-être pas digne de confiance",
"security.bad.desc":"Nous n'avons trouvé aucune menace de hameçonnage ou malware ici, mais beaucoup de nos utilisateurs ont donné au site un coup de pouce vers le bas.",
"security.unknown.title":"Site inconnu",
"security.unknown.desc":"Nous n’avons pas encore suffisamment d’informations pour évaluer ce site Web.",
"security.unsafe.title":"Ce site Web n'est pas sûr",
"security.unsafe.phishing.desc":"Ce site a été marqué comme un site de hameçonnage. L’hameçonnage est une tentative de voler vos informations sensibles comme mots de passe, numéros de carte de crédit, etc.",
"security.unsafe.malware.desc":"Nous avons trouvé un code malveillant sur ce site Web qui pourrait endommager votre ordinateur ou voler vos données personnelles.",
"rating.question.desc":"Faites-vous confiance à {0} ?",
"rating.negative":"Du contenu inapproprié sur ce site Web ? (facultatif)",
"rating.thanks":"Merci pour votre évaluation !",
"rating.trusted.desc":"Vous <i> faites confiance</i> à {0}",
"rating.untrusted.desc":"Vous <i>ne faites pas confiance</i> à {0}",
"rating.revert.tooltip":"Cliquez pour supprimer votre évaluation",
"rating.tooltip":"Votre confiance ou méfiance sera prise en compte dans notre évaluation de sécurité pour ce site Web.",
"rating.category.pornography":"Pornographie",
"rating.category.violence":"Armes / Violence",
"rating.category.gambling":"Jeux de hasard",
"rating.category.drugs":"Alcool / Drogues",
"rating.category.illegal":"Warez / Illégal",
"rating.category.others":"Autres",
"privacy.title":"Confidentialité",
"privacy.group.Social.desc":"Réseaux sociaux",
"privacy.group.Social.block.desc":"Bloquer le suivi de tous les réseaux sociaux",
"privacy.group.Social.block.tooltip":"Cela bloquera le suivi des réseaux sociaux sur chaque site Web que vous visitez.",
"privacy.group.Social.unblock.desc":"Débloquer le suivi de tous les réseaux sociaux",
"privacy.group.Social.unblock.tooltip":"Cela activera le suivi des réseaux sociaux sur chaque site Web que vous visitez.",
"privacy.group.AdTracking.desc":"Suivi de publicité",
"privacy.group.AdTracking.block.desc":"Bloquer tout suivi des publicités",
"privacy.group.AdTracking.block.tooltip":"Cela bloquera le suivi de la publicité sur chaque site Web que vous visitez.",
"privacy.group.AdTracking.unblock.desc":"Débloquer le suivi de la publicité",
"privacy.group.AdTracking.unblock.tooltip":"Cela activera le suivi de la publicité sur chaque site Web que vous visitez.",
"privacy.group.WebAnalytics.desc":"Mesure d'audience",
"privacy.group.WebAnalytics.block.desc":"Bloquer tout suivi de la mesure d'audience",
"privacy.group.WebAnalytics.block.tooltip":"Cela bloquera le suivi de la mesure d'audience sur chaque site Web que vous visitez.",
"privacy.group.WebAnalytics.unblock.desc":"Débloquer le suivi de la mesure d'audience",
"privacy.group.WebAnalytics.unblock.tooltip":"Cela activera tous les autres suivis sur chaque site Web que vous visitez.",
"privacy.group.Others.desc":"Autres",
"privacy.group.Others.block.desc":"Bloquer tous les autres suivis",
"privacy.group.Others.block.tooltip":"Cela bloquera tous les autres suivis sur chaque site Web que vous visitez.",
"privacy.group.Others.unblock.desc":"Débloquer tous les autres suivis",
"privacy.trackersBlockedAll":"<i>Tous les {0} trackers</i> bloqués sur {1} | <i>Tous les {0} trackers</i> bloqués sur {1}",
"privacy.trackersBlockedSome":"<i>{0} sur {1} tracker</i> bloqué sur {2} | <i>{0} sur {1} trackers</i> bloqués sur {2}",
"privacy.trackersBlockedNone":"<i>{0} systèmes de suivi</i> sur {1} | <i>{0} systèmes de suivi</i> sur {1}",
"privacy.trackersBlocked":"{0} sur {1} bloqués",
"privacy.trackersFound":"{0} trouvés",
"privacy.trackersNone":"aucun",
"privacy.trackerBlock.desc":"Bloquer",
"privacy.trackerBlock.tooltip":"Cela bloquera [{0}] sur chaque site Web que vous visitez.",
"privacy.trackerUnblock.desc":"Bloqué",
"privacy.trackerUnblock.tooltip":"Cela débloquera [{0}] sur chaque site Web que vous visitez.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Pour débloquer un tracker spécifique, désactivez le blocage automatique.",
"privacy.automaticBlocking.desc":"Blocage automatique de tous les trackers",
"privacy.automaticBlocking.tooltip":"Nous bloquerons automatiquement tous les trackers trouvés sur chaque site Web que vous visitez.",
"setting.title":"Paramètres",
"setting.serp.name":"Marquer mes résultats de recherche",
"setting.serp.desc":"Ajouter des icônes colorées aux résultats de votre recherche sur Google, Yahoo!, etc. pour voir quels résultats sont sûrs à cliquer. (Vert = Sûr, Gris = Inconnu, Rouge = Non sûr)",
"setting.serpPopup.name":"Afficher les info-bulles des résultats de recherche",
"setting.serpPopup.desc":"Passez votre souris sur nos icônes pour afficher plus d’informations.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Passer au Mode Bancaire pour les sites financiers sensibles (Avast Antivirus et Avast Secure Browser doivent être installés)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Passer au Mode Bancaire pour les sites sensibles (nécessite AVG Antivirus et AVG Secure Browser installés)",
"setting.dntBadge.name":"Affichage de tous les trackers sur un site",
"setting.dntBadge.desc":"Ajoutez un badge à votre navigateur pour voir immédiatement combien de trackers sont sur un site Web.",
"setting.dntAutoBlock.name":"Blocage automatique de tous les trackers",
"setting.dntAutoBlock.desc":"Bloquez tous les trackers trouvés sur chaque site Web que vous visitez.",
"setting.dntSocial.desc":"Bloquer tous les trackers des réseaux sociaux",
"setting.dntAdTracking.desc":"Bloquer tous les trackers des publicités",
"setting.dntWebAnalytics.desc":"Bloquer tous les trackers de mesure d'audience",
"setting.dntOthers.desc":"Bloquer tous les autres trackers",
"setting.communityIQ.name":"Autoriser le partage de données avec des tiers pour l'analyse",
"serp.safe.desc":"Ce site est sûr",
"serp.bad.desc":"Ce site peut être indigne de confiance",
"serp.unknown.desc":"Ce site n'a pas été évalué",
"serp.unsafe.desc":"Ce site n'est pas sûr",
"topbar.openBankMode":"Ouvrir en Mode bancaire",
"topbar.desc":"Vos données financières peuvent être accessibles à d'autres personnes.",
"topbar.tooltip":"Le Mode bancaire, partie intégrante du Avast Secure Browser installé avec votre antivirus Avast, isole en toute sécurité vos sessions shopping et vos transactions bancaires pour empêcher les pirates de voler vos numéros de carte de crédit, vos mots de passe et autres données privées.",
"topbar.dontShowAgain":"Ne plus afficher ce site à l'avenir"
},
he:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"בטא",
"global.detailsShow":"פרטים",
"global.detailsHide":"הסתר פרטים",
"global.done":"סיום",
"global.leaveSite":"צא מהאתר",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - אתר לא מוכר",
"background.icon.safe":"{0} - האתר הזה בטוח",
"background.icon.bad":"{0} - ייתכן שהאתר הזה לא בטוח",
"background.icon.unsafe":"{0} - האתר הזה לא בטוח",
"security.title":"אבטחה",
"security.safe.title":"האתר הזה בטוח",
"security.safe.item1.desc":"אין דיוג",
"security.safe.item1.tooltip":"לא זיהינו באתר הזה ניסיונות לגנוב מידע רגיש, כגון סיסמאות, מספרי כרטיס אשראי וכדומה.",
"security.safe.item2.desc":"אין תוכנה זדונית",
"security.safe.item2.tooltip":"לא זיהינו קוד זדוני באתר הזה.",
"security.safe.item3.desc":"אמין",
"security.safe.item3.tooltip":"{0} משתמשים דירגו את האתר הזה כאמין בלחיצה על {1} ב-Online Security של {0}.",
"security.bad.title":"עלול להיות לא בטוח",
"security.bad.desc":"לא מצאנו כאן איומי דיוג או תוכנה זדונית, אבל משתמשים רבים שלנו דירגו את האתר הזה כלא בטוח.",
"security.unknown.title":"אתר לא מוכר",
"security.unknown.desc":"בינתיים אין לנו מספיק מידע בשביל לדרג את האתר הזה.",
"security.unsafe.title":"האתר הזה לא בטוח",
"security.unsafe.phishing.desc":"האתר הזה סומן כאתר דיוג. דיוג הוא ניסיון לגנוב מידע רגיש, כגון סיסמאות, מספרי כרטיס אשראי וכדומה.",
"security.unsafe.malware.desc":"מצאנו באתר הזה קוד זדוני שיכול להזיק למחשב או לגנוב ממך נתונים פרטיים.",
"rating.question.desc":"האם אתה בוטח ב-{0}?",
"rating.negative":"יש תוכן לא הולם באתר הזה? (אופציונלי)",
"rating.thanks":"תודה שדירגת!",
"rating.trusted.desc":"אתה <i>בוטח</i> ב-{0}",
"rating.untrusted.desc":"אתה <i>לא בוטח</i> ב-{0}",
"rating.revert.tooltip":"לחץ להסרת הדירוג",
"rating.tooltip":"האמון או חוסר האמון שלך יובא בחשבון בדירוג הבטיחות של האתר הזה אצלנו.",
"rating.category.pornography":"פורנוגרפיה",
"rating.category.violence":"נשק / אלימות",
"rating.category.gambling":"הימורים",
"rating.category.drugs":"אלכוהול / סמים",
"rating.category.illegal":"תוכניות פירטיות / לא חוקיות",
"rating.category.others":"אחר",
"privacy.title":"פרטיות",
"privacy.group.Social.desc":"רשתות חברתיות",
"privacy.group.Social.block.desc":"חסום את כל מעקבי הרשתות החברתיות",
"privacy.group.Social.block.tooltip":"מעקבי הרשתות החברתיות ייחסמו בכל האתרים שתיכנס אליהם.",
"privacy.group.Social.unblock.desc":"בטל את חסימת מעקבי הרשתות החברתיות",
"privacy.group.Social.unblock.tooltip":"מעקבי הרשתות החברתיות יתאפשרו בכל האתרים שתיכנס אליהם.",
"privacy.group.AdTracking.desc":"מעקב פרסומות",
"privacy.group.AdTracking.block.desc":"חסום את כל מעקבי הפרסומות",
"privacy.group.AdTracking.block.tooltip":"מעקבי הפרסומות ייחסמו בכל האתרים שתיכנס אליהם.",
"privacy.group.AdTracking.unblock.desc":"בטל את חסימת מעקבי הפרסומות",
"privacy.group.AdTracking.unblock.tooltip":"מעקבי הפרסומות יתאפשרו בכל האתרים שתיכנס אליהם.",
"privacy.group.WebAnalytics.desc":"ניתוחי תנועת גולשים",
"privacy.group.WebAnalytics.block.desc":"חסום את כל מעקבי ניתוח תנועת הגולשים",
"privacy.group.WebAnalytics.block.tooltip":"מעקבי ניתוח תנועת הגולשים ייחסמו בכל האתרים שתיכנס אליהם.",
"privacy.group.WebAnalytics.unblock.desc":"בטל את החסימה של מעקבי ניתוח תנועת הגולשים",
"privacy.group.WebAnalytics.unblock.tooltip":"מעקבים נוספים יתאפשרו בכל האתרים שתיכנס אליהם.",
"privacy.group.Others.desc":"אחר",
"privacy.group.Others.block.desc":"חסום את כל שאר המעקבים",
"privacy.group.Others.block.tooltip":"מעקבים נוספים ייחסמו בכל האתרים שתיכנס אליהם.",
"privacy.group.Others.unblock.desc":"בטל את חסימת שאר המעקבים",
"privacy.trackersBlockedAll":"<i> העוקב ({0})</i> נחסם באתר {1} | <i> כל {0} העוקבים</i> נחסמו באתר {1} | <i>כל {0} העוקבים</i> נחסמו באתר {1} | <i>כל {0} העוקבים</i> נחסמו באתר {1}",
"privacy.trackersBlockedSome":"<i>{0} מתוך {1} עוקב</i> נחסם באתר {2} | <i>{0} מתוך {1} עוקבים</i> נחסמו באתר {2} | <i>{0} מתוך {1} עוקבים</i> נחסמו באתר {2} | <i>{0} מתוך {1} עוקבים</i> נחסמו באתר {2}",
"privacy.trackersBlockedNone":"<i>{0} מערכת מעקב</i> באתר {1} | <i>{0} מערכות מעקב</i> באתר {1} | <i>{0} מערכות מעקב</i> באתר {1} | <i>{0} מערכות מעקב</i> באתר {1}",
"privacy.trackersBlocked":"נחסמו {0} מתוך {1}",
"privacy.trackersFound":"נמצאו {0}",
"privacy.trackersNone":"שום דבר",
"privacy.trackerBlock.desc":"חסום",
"privacy.trackerBlock.tooltip":"העוקב [{0}] ייחסם בכל האתרים שתיכנס אליהם.",
"privacy.trackerUnblock.desc":"חסום",
"privacy.trackerUnblock.tooltip":"העוקב [{0}] לא ייחסם בכל האתרים שתיכנס אליהם.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"כדי לבטל את החסימה של עוקב מסוים, כבה את החסימה האוטומטית.",
"privacy.automaticBlocking.desc":"חסום את כל העוקבים אוטומטית",
"privacy.automaticBlocking.tooltip":"אנחנו נחסום אוטומטית את כל העוקבים שנמצא בכל האתרים שתיכנס אליהם.",
"setting.title":"הגדרות",
"setting.serp.name":"סמן את תוצאות החיפוש",
"setting.serp.desc":"הוסף לתוצאות החיפוש ב-Google, ב-Yahoo!‎ וכו' אייקונים צבעוניים לסימון התוצאות שבטוח ללחוץ עליהן. (ירוק = בטוח, אפור = לא ידוע, אדום = לא בטוח)",
"setting.serpPopup.name":"הצג הודעות tooltip בתוצאות החיפוש",
"setting.serpPopup.desc":"הצב את סמן העכבר מעל האייקונים שלנו להצגת מידע נוסף.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"עבור ל'מצב בנק' באתרים פיננסיים רגישים (מחייב התקנה של Avast Antivirus‎ ושל Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"עבור ל'מצב בנק' באתרים פיננסיים רגישים (מחייב התקנה של AVG AntiVirus‎ ושל AVG Secure Browser)",
"setting.dntBadge.name":"הצג את סך כול העוקבים באתר",
"setting.dntBadge.desc":"הוסף לדפדפן תג ותראה מיד כמה עוקבים יש בכל אתר.",
"setting.dntAutoBlock.name":"חסום את כל העוקבים אוטומטית",
"setting.dntAutoBlock.desc":"חסום אוטומטית את כל העוקבים שיימצאו בכל האתרים שתיכנס אליהם.",
"setting.dntSocial.desc":"חסום את כל עוקבי הרשתות החברתיות",
"setting.dntAdTracking.desc":"חסום את כל עוקבי הפרסומות",
"setting.dntWebAnalytics.desc":"חסום את כל עוקבי ניתוח תנועת הגולשים",
"setting.dntOthers.desc":"חסום את כל שאר העוקבים",
"setting.communityIQ.name":"אפשר שיתוף של השימוש בנתונים עם צד שלישי לצורך ניתוח",
"serp.safe.desc":"האתר הזה בטוח",
"serp.bad.desc":"ייתכן שהאתר הזה לא בטוח",
"serp.unknown.desc":"לאתר הזה אין דירוג",
"serp.unsafe.desc":"האתר הזה לא בטוח",
"topbar.openBankMode":"פתח ב'מצב בנק'",
"topbar.desc":"ייתכן שאנשים אחרים יכולים לראות את הנתונים הכספיים שלך.",
"topbar.tooltip":"'מצב בנק', חלק ב-Avast Secure Browser המותקן עם האנטי-וירוס של Avast ומבודד סשנים של קניות וסשנים בנקאיים באופן בטוח כדי לעצור האקרים שמנסים לגנוב את מספרי כרטיסי האשראי, הסיסמאות ועוד נתונים פרטיים שלך.",
"topbar.dontShowAgain":"אל תציג את ההודעה באתר הזה שוב"
},
hi:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"बीटा",
"global.detailsShow":"विवरण",
"global.detailsHide":"विवरण छिपाएँ",
"global.done":"पूर्ण",
"global.leaveSite":"साइट छोड़ें",
"global.switcher.off":"बंद",
"global.switcher.on":"ऑन",
"background.icon.unknown":"{0} - अज्ञात साइट",
"background.icon.safe":"{0} - यह वेबसाइट सुरक्षित है",
"background.icon.bad":"{0} - यह साइट अविश्वसनीय हो सकती है",
"background.icon.unsafe":"{0} - यह वेबसाइट असुरक्षित है",
"security.title":"सुरक्षा",
"security.safe.title":"यह वेबसाइट सुरक्षित है",
"security.safe.item1.desc":"कोई फ़िशिंग नहीं",
"security.safe.item1.tooltip":"हमें इस वेबसाइट पर पासवर्ड, क्रेडिट कार्ड नंबर आदि जैसी संवेदनशील जानकारी चुराने के किसी भी प्रयास का पता नहीं चला है।",
"security.safe.item2.desc":"कोई मालवेयर नहीं",
"security.safe.item2.tooltip":"हमें इस वेबसाइट पर किसी दुर्भावनापूर्ण कोड का पता नहीं चला है।",
"security.safe.item3.desc":"विश्वसनीय",
"security.safe.item3.tooltip":"{0} उपयोगकर्ताओं ने {1} पर क्लिक करके {0} Online Security के अंतर्गत, इस वेबसाइट को भरोसेमंद माना है|",
"security.bad.title":"यह अविश्वसनीय हो सकती है",
"security.bad.desc":"हमें यहां फ़िशिंग संबंधी किसी ख़तरे या मालवेयर का पता नहीं चला, लेकिन हमारे कई उपयोगकर्ताओं के साइट को नापसंद किया है।",
"security.unknown.title":"अज्ञात साइट",
"security.unknown.desc":"इस वेबसाइट की रेटिंग के लिए, अभी हमारे पास पर्याप्त जानकारी नहीं है।",
"security.unsafe.title":"यह वेबसाइट असुरक्षित है",
"security.unsafe.phishing.desc":"इस वेबसाइट को फ़िशिंग साइट के रूप में चिह्नित किया गया है। फ़िशिंग, पासवर्ड, क्रेडिट कार्ड नंबर आदि जैसी आपकी संवेदनशील जानकारी चुराने का प्रयास है।",
"security.unsafe.malware.desc":"हमें इस वेबसाइट पर ऐसे दुर्भावनापूर्ण कोड का पता चला है जो आपके कंप्यूटर को नुकसान पहुंचा सकता है या आपका निजी डेटा चुरा सकता है।",
"rating.question.desc":"क्या आप {0} पर भरोसा करते हैं?",
"rating.negative":"इस वेबसाइट पर कोई अनुचित सामग्री है? (वैकल्पिक)",
"rating.thanks":"रेटिंग के लिए धन्यवाद!",
"rating.trusted.desc":"आप {0} पर <i>विश्वास</i> करते हैं",
"rating.untrusted.desc":"आप {0} पर <i>विश्वास नहीं</i> करते हैं",
"rating.revert.tooltip":"अपनी रेटिंग हटाने के लिए क्लिक करें",
"rating.tooltip":"आपका विश्वास या अविश्वास इस वेबसाइट के लिए हमारी सुरक्षा की रेटिंग में दिखाई देगा।",
"rating.category.pornography":"पोर्नोग्राफ़ी",
"rating.category.violence":"हथियार / हिंसा",
"rating.category.gambling":"जुआ",
"rating.category.drugs":"शराब / ड्रग",
"rating.category.illegal":"वारेज़ / अवैध",
"rating.category.others":"अन्य",
"privacy.title":"गोपनीयता",
"privacy.group.Social.desc":"सामाजिक नेटवर्क",
"privacy.group.Social.block.desc":"सभी सामाजिक नेटवर्क ट्रैकिंग ब्लॉक करें",
"privacy.group.Social.block.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर सामाजिक नेटवर्क की ट्रैकिंग को ब्लॉक कर देगा।",
"privacy.group.Social.unblock.desc":"सभी सामाजिक नेटवर्क ट्रैकिंग अनब्लॉक करें",
"privacy.group.Social.unblock.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर सामाजिक नेटवर्क की ट्रैकिंग की अनुमति देगा।",
"privacy.group.AdTracking.desc":"विज्ञापन ट्रैकिंग",
"privacy.group.AdTracking.block.desc":"सभी विज्ञापन ट्रैकिंग ब्लॉक करें",
"privacy.group.AdTracking.block.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर विज्ञापन ट्रैकिंग को ब्लॉक कर देगा।",
"privacy.group.AdTracking.unblock.desc":"सभी विज्ञापन ट्रैकिंग अनब्लॉक करें",
"privacy.group.AdTracking.unblock.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर विज्ञापन ट्रैकिंग की अनुमति देगा।",
"privacy.group.WebAnalytics.desc":"वेब विश्लेषण",
"privacy.group.WebAnalytics.block.desc":"सभी वेब विश्लेषणात्मक ट्रैकिंग ब्लॉक करें",
"privacy.group.WebAnalytics.block.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर वेब विश्लेषणात्मक ट्रैकिंग को ब्लॉक कर देगा।",
"privacy.group.WebAnalytics.unblock.desc":"सभी वेब विश्लेषणात्मक ट्रैकिंग अनब्लॉक करें",
"privacy.group.WebAnalytics.unblock.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर अन्य ट्रैकिंग की अनुमति देगा।",
"privacy.group.Others.desc":"अन्य",
"privacy.group.Others.block.desc":"अन्य सभी ट्रैकिंग ब्लॉक करें",
"privacy.group.Others.block.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर अन्य ट्रैकिंग को ब्लॉक कर देगा।",
"privacy.group.Others.unblock.desc":"अन्य सभी ट्रैकिंग अनब्लॉक करें",
"privacy.trackersBlockedAll":"<i>{1} पर सभी {0} ट्रैकर</i> ब्लॉक हैं | <i>{1} पर सभी {0} ट्रैकर्स</i> ब्लॉक हैं",
"privacy.trackersBlockedSome":"<i>{2} पर {1} में से {0} ट्रैकर</i> ब्लॉक हैं | <i>{2} पर {1} में से {0} ट्रैकर्स</i> ब्लॉक हैं",
"privacy.trackersBlockedNone":"<i>{1} पर {0} ट्रैकिंग</i> सिस्टम | <i>{1} पर {0} ट्रैकिंग</i> सिस्टम्स",
"privacy.trackersBlocked":"{1} में से {0} ब्लॉक",
"privacy.trackersFound":"{0} मिले",
"privacy.trackersNone":"कुछ नहीं",
"privacy.trackerBlock.desc":"ब्लॉक करें",
"privacy.trackerBlock.tooltip":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर [{0}] को ब्लॉक कर देगा।",
"privacy.trackerUnblock.desc":"ब्लॉक की गई",
"privacy.trackerUnblock.tooltip":"यह आपके द्वारा देखी जाने वाली प्रत्येक वेबसाइट को अनब्लॉक {0} कर देगा।",
"privacy.trackerUnblockOnAutoBlock.tooltip":"किसी विशिष्ट ट्रैकर को अनब्लॉक करने के लिए, स्वचालित ब्लॉकिंग बंद करें।",
"privacy.automaticBlocking.desc":"स्वचालित रूप से सभी ट्रैकर्स ब्लॉक करें",
"privacy.automaticBlocking.tooltip":"हम आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर मिलने वाले सभी ट्रैकर्स को स्वचालित रूप से ब्लॉक कर देंगे।",
"setting.title":"सेटिंग्स",
"setting.serp.name":"मेरे खोज परिणामों को चिह्नित करें",
"setting.serp.desc":"Google, Yahoo! आदि पर यह देखने के लिए अपने खोज परिणामों में रंगीन आइकन जोड़ें कि कौन से परिणाम क्लिक करने के लिए सुरक्षित हैं। (हरा = सुरक्षित, स्लेटी = अज्ञात, लाल = असुरक्षित)",
"setting.serpPopup.name":"खोज परिणामों के लिए टूल टिप दिखाएं",
"setting.serpPopup.desc":"अधिक जानकारी देखने के लिए, हमारे आइकन्स पर माउस घुमाएं",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"संवेदनशील वित्तीय साइटों के लिए, बैंक मोड पर स्विच करें (Avast एंटीवायरस और Avast Secure Browser स्थापित करने की आवश्यकता है)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"संवेदनशील वित्तीय साइटों के लिए, बैंक मोड पर स्विच करें (AVG एंटीवायरस और AVG Secure Browser इंस्टॉल करने की आवश्यकता है)",
"setting.dntBadge.name":"किसी साइट पर कुल ट्रैकर्स दिखाएं",
"setting.dntBadge.desc":"किसी वेबसाइट पर कितने ट्रैकर्स हैं, तुरंत यह देखने के लिए अपने ब्राउज़र पर एक बैज जोड़ें।",
"setting.dntAutoBlock.name":"स्वचालित रूप से सभी ट्रैकर्स ब्लॉक करें",
"setting.dntAutoBlock.desc":"यह आपके द्वारा विज़िट की जाने वाली प्रत्येक वेबसाइट पर मिलने वाले सभी ट्रैकर्स ब्लॉक करें।",
"setting.dntSocial.desc":"सभी सामाजिक नेटवर्क ट्रैकर्स ब्लॉक करें",
"setting.dntAdTracking.desc":"सभी विज्ञापन ट्रैकर्स ब्लॉक करें",
"setting.dntWebAnalytics.desc":"सभी वेब विश्लेषणात्मक ट्रैकर्स ब्लॉक करें",
"setting.dntOthers.desc":"अन्य सभी ट्रैकर्स ब्लॉक करें",
"setting.communityIQ.name":"विश्लेषण के लिए उपयोग डेटा को तृतीय पक्षों के साथ साझा करने की अनुमति दें",
"serp.safe.desc":"यह साइट सुरक्षित है",
"serp.bad.desc":"यह साइट अविश्वसनीय हो सकती है",
"serp.unknown.desc":"इस साइट की कोई रेटिंग नही है",
"serp.unsafe.desc":"यह साइट असुरक्षित है",
"topbar.openBankMode":"बैंक मोड में खोलें",
"topbar.desc":"आपका वित्तीय डेटा अन्य लोगों को दिखाई दे सकता है।",
"topbar.tooltip":"बैंक मोड, आपके Avast एंटीवायरस के साथ इंस्टॉल किया गया Avast सुरक्षित ब्राउज़र का हिस्सा, सुरक्षित रूप से शॉपिंग और बैंकिंग सत्रों को अलग कर देता है ताकि हैकर्स को आपके क्रेडिट कार्ड नंबर, पासवर्ड और अन्य निजी डेटा चोरी करने से रोका जा सके.",
"topbar.dontShowAgain":"इस साइट पर फिर न दिखाएं"
},
hr:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Pojedinosti",
"global.detailsHide":"Sakrij pojedinosti",
"global.done":"Gotovo",
"global.leaveSite":"Napusti web-mjesto",
"global.switcher.off":"IS.",
"global.switcher.on":"UK.",
"background.icon.unknown":"{0} – nepoznato web-mjesto",
"background.icon.safe":"{0} – ovo je web-mjesto sigurno",
"background.icon.bad":"{0} –ovo web-mjesto možda nije pouzdano",
"background.icon.unsafe":"{0} – ovo web-mjesto nije sigurno",
"security.title":"Sigurnost",
"security.safe.title":"Ovo je web-mjesto sigurno",
"security.safe.item1.desc":"Nema krađe identiteta",
"security.safe.item1.tooltip":"Na ovom web-mjestu nismo otkrili nijedan pokušaj krađe povjerljivih podataka, kao što su zaporke, brojevi kreditnih kartica i slično.",
"security.safe.item2.desc":"Nema zlonamjernog softvera",
"security.safe.item2.tooltip":"Na ovom web-mjesto nismo otkrili nijedan zlonamjerni kod.",
"security.safe.item3.desc":"Pouzdano",
"security.safe.item3.tooltip":"Korisnici proizvoda {0} ocijenili su ovo web-mjesto kao pouzdano klikom na {1} u komponenti {0} Online Security.",
"security.bad.title":"Ovo web-mjesto možda nije pouzdano",
"security.bad.desc":"Ovdje nismo pronašli nijednu prijetnju krađe identiteta ni zlonamjerni softver, no mnogi su korisnici web-mjestu dali ocjenu označenu palcem okrenutim prema dolje.",
"security.unknown.title":"Nepoznato web-mjesto",
"security.unknown.desc":"Još nemamo dovoljno informacija da ocijenimo ovo web-mjesto.",
"security.unsafe.title":"Ovo web-mjesto nije sigurno",
"security.unsafe.phishing.desc":"Ovo je web-mjesto označno kao web-mjesto za krađu identiteta. Krađa identiteta predstavlja pokušaj krađe povjerljivih podataka, kao što su zaporke, brojevi kreditnih kartica i slično.",
"security.unsafe.malware.desc":"Na ovom smo web-mjestu pronašli zlonamjerni kod koji bi mogao naštetiti vašem računalu ili ukrasti osobne podatke.",
"rating.question.desc":"Smatrate li web-mjesto {0} pouzdanim?",
"rating.negative":"Ima li na web-mjesto neprikladnog sadržaja? (neobavezno)",
"rating.thanks":"Hvala na ocjenI!",
"rating.trusted.desc":"Web-mjesto {0} smatrate <i>pouzdanim</i>",
"rating.untrusted.desc":"Web-mjesto {0} ne smatrate <i>pouzdanim</i>",
"rating.revert.tooltip":"Kliknite da biste uklonili ocjenu",
"rating.tooltip":"Činjenica smatrate li nešto pouzdanim ili nepouzdanim bit će uzeta u obzir prilikom određivanja ocjene sigurnosti web-mjesta.",
"rating.category.pornography":"Pornografija",
"rating.category.violence":"Oružje / nasilje",
"rating.category.gambling":"Kockanje",
"rating.category.drugs":"Alkohol / droga",
"rating.category.illegal":"Warez / ilegalno",
"rating.category.others":"Ostalo",
"privacy.title":"Zaštita privatnosti",
"privacy.group.Social.desc":"Društvene mreže",
"privacy.group.Social.block.desc":"Blokiraj praćenje svih društvenih mreža",
"privacy.group.Social.block.tooltip":"Time ćete blokirati praćenje društvenih mreža na svim web-mjestima koja posjetite.",
"privacy.group.Social.unblock.desc":"Deblokiraj praćenje svih društvenih mreža",
"privacy.group.Social.unblock.tooltip":"Time ćete omogućiti praćenje društvenih mreža na svim web-mjestima koja posjetite.",
"privacy.group.AdTracking.desc":"Praćenje oglasa",
"privacy.group.AdTracking.block.desc":"Blokiraj praćenje svih oglasa",
"privacy.group.AdTracking.block.tooltip":"Time ćete blokirati praćenje oglasa na svim web-mjestima koja posjetite.",
"privacy.group.AdTracking.unblock.desc":"Deblokiraj praćenje svih oglasa",
"privacy.group.AdTracking.unblock.tooltip":"Time ćete omogućiti praćenje oglasa na svim web-mjestima koja posjetite.",
"privacy.group.WebAnalytics.desc":"Web-analiza",
"privacy.group.WebAnalytics.block.desc":"Blokiraj praćenje svih web-analiza",
"privacy.group.WebAnalytics.block.tooltip":"Time ćete blokirati praćenje web-analiza na svim web-mjestima koja posjetite.",
"privacy.group.WebAnalytics.unblock.desc":"Deblokiraj praćenje svih web-analiza",
"privacy.group.WebAnalytics.unblock.tooltip":"Time ćete omogućiti praćenje svih ostalih stavki na svim web-mjestima koja posjetite.",
"privacy.group.Others.desc":"Ostalo",
"privacy.group.Others.block.desc":"Blokiraj praćenje svega ostalog",
"privacy.group.Others.block.tooltip":"Time ćete blokirati praćenje svih ostalih stavki na svim web-mjestima koja posjetite.",
"privacy.group.Others.unblock.desc":"Deblokiraj praćenje svega ostalog",
"privacy.trackersBlockedAll":"<i>{0} pratitelj</i> blokiran je na web-mjestu {1} | <i>{0} pratitelja</i> blokirana su na web-mjestu {1} | <i>{0} pratitelja</i> blokirano je na web-mjestu {1}",
"privacy.trackersBlockedSome":"<i>{0} od {1} pratitelja</i> blokiran je na web-mjestu {2} | <i>{0} od {1} pratitelja</i> blokirana su na web-mjestu {2} | <i>{0} od {1} pratitelja</i> blokirano je na web-mjestu {2}",
"privacy.trackersBlockedNone":"<i>{0} sustav za praćenje</i> na web-mjestu {1} | <i>{0} sustava za praćenje</i> na web-mjestu {1} | <i>{0} sustava za praćenje</i> na web-mjestu {1}",
"privacy.trackersBlocked":"Blokirano: {0} od {1}",
"privacy.trackersFound":"Pronađeno: {0}",
"privacy.trackersNone":"ništa",
"privacy.trackerBlock.desc":"Blokiraj",
"privacy.trackerBlock.tooltip":"Time ćete blokirati [{0}] na svim web-mjestima koja posjetite.",
"privacy.trackerUnblock.desc":"Blokirano",
"privacy.trackerUnblock.tooltip":"Time ćete deblokirati [{0}] na svim web-mjestima koja posjetite.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Da biste deblokirali određeni pratitelj, isključite automatsko blokiranje.",
"privacy.automaticBlocking.desc":"Automatski blokiraj sve pratitelje",
"privacy.automaticBlocking.tooltip":"Automatski ćemo blokirati sve pronađene pratitelje na svim web-mjestima koja posjetite.",
"setting.title":"Postavke",
"setting.serp.name":"Označi moje rezultate pretraživanja",
"setting.serp.desc":"Dodaj ikone u boji za rezultate pretraživanja na servisima Google, Yahoo! i slično da biste vidjeli koji su rezultati sigurni (zeleno = sigurno, sivo = nepoznato, crveno = nesigurno).",
"setting.serpPopup.name":"Pokaži elemente opisa za rezultate pretraživanja",
"setting.serpPopup.desc":"Postavite miš iznad ikona da biste vidjeli više informacija.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Prijeđite na bankovni način za osjetljiva financijska web-mjesta (zahtijeva instaliranu zaštitu od virusa tvrtke Avast i Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Prijeđite na bankovni način za osjetljiva financijska web-mjesta (moraju biti instalirani ACG AntiVIrus i AVG Secure Browser)",
"setting.dntBadge.name":"Pokaži sve pratitelje na web-mjestu",
"setting.dntBadge.desc":"Dodajte značku u pretraživač da biste odmah vidjeli koliko je pratitelja na web-mjestu.",
"setting.dntAutoBlock.name":"Automatski blokiraj sve pratitelje",
"setting.dntAutoBlock.desc":"Blokira sve pronađene pratitelje na svim web-mjestima koja posjetite.",
"setting.dntSocial.desc":"Blokiraj sve pratitelje društvenih mreža",
"setting.dntAdTracking.desc":"Blokiraj sve pratitelje oglasa",
"setting.dntWebAnalytics.desc":"Blokiraj sve pratitelje web-analiza",
"setting.dntOthers.desc":"Blokiraj sve ostale pratitelje",
"setting.communityIQ.name":"Dopusti dijeljenje podataka o korištenju s trećim stranama u analitičke svrhe",
"serp.safe.desc":"Ovo je web-mjesto sigurno",
"serp.bad.desc":"Ovo web-mjesto možda nije pouzdano",
"serp.unknown.desc":"Ovo web-mjesto nema ocjenu",
"serp.unsafe.desc":"Ovo web-mjesto nije sigurno",
"topbar.openBankMode":"Otvori u bankovnom načinu",
"topbar.desc":"Drugi korisnici možda mogu vidjeti vaše financijske podatke.",
"topbar.tooltip":"Bankovni način, dio preglednika preglednika Avast Secure Browser instaliran sa zaštitom od virusa tvrtke Avast, sigurno izolira sesije kupnje i bankarstva radi sprječavanja hakera u pokušajima krađe brojeva kreditnih kartica, zaporki i ostalih privatnih podataka.",
"topbar.dontShowAgain":"Ne prikazuj ponovno na ovom web-mjestu"
},
hu:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Béta",
"global.detailsShow":"Részletek",
"global.detailsHide":"Részletek elrejtése",
"global.done":"Kész",
"global.leaveSite":"Webhely elhagyása",
"global.switcher.off":"KI",
"global.switcher.on":"BE",
"background.icon.unknown":"{0} – Ismeretlen webhely",
"background.icon.safe":"{0} – Ez a webhely biztonságos",
"background.icon.bad":"{0} – Előfordulhat, hogy ez a webhely nem megbízható",
"background.icon.unsafe":"{0} – Ez a webhely nem biztonságos",
"security.title":"Biztonság",
"security.safe.title":"Ez a webhely biztonságos",
"security.safe.item1.desc":"Nincs adathalászat",
"security.safe.item1.tooltip":"Ezen a webhelyen nem észleltünk a bizalmas adatok, például jelszavak, bankkártyaszámok stb. eltulajdonítására tett kísérleteket.",
"security.safe.item2.desc":"Nincsenek kártevők",
"security.safe.item2.tooltip":"A webhelyen nem találtunk rosszindulatú kódokat.",
"security.safe.item3.desc":"Megbízható",
"security.safe.item3.tooltip":"{0} felhasználó értékelte megbízhatónak ezt a webhelyet azzal, hogy a {1} ikonra kattintott az {0} Online Securityben.",
"security.bad.title":"Előfordulhat, hogy ez nem megbízható",
"security.bad.desc":"Nem találtunk adathalászati fenyegetéseket vagy kártevőket, de sok felhasználó negatívan értékelte a webhelyet.",
"security.unknown.title":"Ismeretlen webhely",
"security.unknown.desc":"Egyelőre nincs elegendő információnk a webhely értékeléséhez.",
"security.unsafe.title":"Ez a webhely nem biztonságos",
"security.unsafe.phishing.desc":"Ezt a webhelyet adathalászként jelölték meg. Az adathalászat a bizalmas adatok, például jelszavak, bankkártyaszámok stb. eltulajdonítására tett kísérleteket jelent.",
"security.unsafe.malware.desc":"A webhelyen rosszindulatú kódot találtunk, amely kárt tehet a számítógépében vagy eltulajdoníthatja a személyes adatait.",
"rating.question.desc":"Megbízik a(z) {0} webhelyben?",
"rating.negative":"Vannak kifogásolható tartalmak a webhelyen? (opcionális)",
"rating.thanks":"Köszönjük az értékelését!",
"rating.trusted.desc":"Ön <i>megbízik</i> a(z) {0} webhelyben",
"rating.untrusted.desc":"Ön <i>nem bízik meg</i> a(z) {0} webhelyben",
"rating.revert.tooltip":"Kattintson az értékelés visszavonásához",
"rating.tooltip":"A webhely értékelése során figyelembe vesszük, hogy a felhasználók, köztük Ön is, megbízik-e a webhelyben.",
"rating.category.pornography":"Pornográfia",
"rating.category.violence":"Fegyverek/erőszak",
"rating.category.gambling":"Szerencsejáték",
"rating.category.drugs":"Alkohol/drogok",
"rating.category.illegal":"Warez/illegális",
"rating.category.others":"Egyebek",
"privacy.title":"Adatvédelem",
"privacy.group.Social.desc":"Közösségi hálózatok",
"privacy.group.Social.block.desc":"A közösségi hálózatok általi nyomon követés blokkolása",
"privacy.group.Social.block.tooltip":"Ezzel a beállítással megakadályozza, hogy a közösségi hálózatok nyomon tudják követni a tevékenységeit az Ön által látogatott webhelyeken.",
"privacy.group.Social.unblock.desc":"A közösségi hálózatok általi nyomon követés blokkolásának feloldása",
"privacy.group.Social.unblock.tooltip":"Ezzel a beállítással engedélyezi, hogy a közösségi hálózatok nyomon kövessék a tevékenységeit az Ön által látogatott webhelyeken.",
"privacy.group.AdTracking.desc":"Hirdetéskövetés",
"privacy.group.AdTracking.block.desc":"Minden hirdetéskövetés blokkolása",
"privacy.group.AdTracking.block.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen blokkolja a hirdetéskövetést.",
"privacy.group.AdTracking.unblock.desc":"Hirdetéskövetés blokkolásának feloldása",
"privacy.group.AdTracking.unblock.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen engedélyezi a hirdetéskövetést.",
"privacy.group.WebAnalytics.desc":"Webanalitika",
"privacy.group.WebAnalytics.block.desc":"Webanalitikai nyomkövetés blokkolása",
"privacy.group.WebAnalytics.block.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen blokkolja a webanalitikai nyomkövetést.",
"privacy.group.WebAnalytics.unblock.desc":"Webanalitikai nyomkövetés blokkolásának feloldása",
"privacy.group.WebAnalytics.unblock.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen engedélyezi az egyéb jellegű nyomkövetéseket.",
"privacy.group.Others.desc":"Egyebek",
"privacy.group.Others.block.desc":"Minden egyéb jellegű nyomkövetés blokkolása",
"privacy.group.Others.block.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen blokkolja az egyéb jellegű nyomkövetéseket.",
"privacy.group.Others.unblock.desc":"Minden egyéb jellegű nyomkövetés blokkolásának feloldása",
"privacy.trackersBlockedAll":"<i>Mind a(z) {0} nyomkövető</i> blokkolva a(z) {1} webhelyen | <i>Mind a(z) {0} nyomkövető</i> blokkolva a(z) {1} webhelyen",
"privacy.trackersBlockedSome":"<i>{0}/{1} nyomkövető</i> blokkolva a(z) {2} webhelyen | <i>{0}/{1} nyomkövető</i> blokkolva a(z) {2} webhelyen",
"privacy.trackersBlockedNone":"<i>{0} nyomkövető</i> rendszer a(z) {1} webhelyen | <i>{0} nyomkövető</i> rendszer a(z) {1} webhelyen",
"privacy.trackersBlocked":"{0}/{1} blokkolva",
"privacy.trackersFound":"{0} található",
"privacy.trackersNone":"nincs",
"privacy.trackerBlock.desc":"Blokkolás",
"privacy.trackerBlock.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen blokkolja a(z) [{0}] nyomkövetőt.",
"privacy.trackerUnblock.desc":"Blokkolva",
"privacy.trackerUnblock.tooltip":"Ezzel a beállítással minden Ön által látogatott webhelyen feloldja a(z) [{0}] nyomkövető blokkolását.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Ha szeretné feloldani egy adott nyomkövető blokkolását, kapcsolja ki az automatikus blokkolást.",
"privacy.automaticBlocking.desc":"Az összes nyomkövető automatikus blokkolása",
"privacy.automaticBlocking.tooltip":"Automatikusan blokkolni fogunk minden nyomkövetőt az Ön által látogatott összes webhelyen.",
"setting.title":"Beállítások",
"setting.serp.name":"Keresési eredmények megjelölése",
"setting.serp.desc":"Színes ikonokat ad a Google, Yahoo! stb. keresési találataihoz, amelyek jelzik, hogy mely találatokra lehet biztonságosan rákattintani. (Zöld = biztonságos, szürke = nem állapítható meg, vörös = nem biztonságos)",
"setting.serpPopup.name":"Eszköztippek megjelenítése a keresési eredményekhez",
"setting.serpPopup.desc":"Ha az egérmutatót az ikonok fölé viszi, további információk jelennek meg.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Átváltás a Bank módra a bizalmas pénzügyi információt tartalmazó webhelyeken (az Avast Antivirusnak és az Avast Secure Browsernek telepítve kell lennie)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Átváltás a Bank módra a bizalmas pénzügyi információt tartalmazó webhelyeken (az AVG AntiVirusnak és az AVG Secure Browsernek telepítve kell lennie)",
"setting.dntBadge.name":"Egy webhely összes nyomkövetőjének megjelenítése",
"setting.dntBadge.desc":"A böngészőben megjelenített jelvény azonnal jelzi, hogy egy-egy webhelyen mennyi nyomkövető van.",
"setting.dntAutoBlock.name":"Az összes nyomkövető automatikus blokkolása",
"setting.dntAutoBlock.desc":"Az Ön által látogatott összes webhelyen minden megtalált nyomkövetőt blokkol.",
"setting.dntSocial.desc":"A közösségi hálózatok összes nyomkövetőjének blokkolása",
"setting.dntAdTracking.desc":"Az összes hirdetéskövető blokkolása",
"setting.dntWebAnalytics.desc":"Az összes webanalitikai nyomkövető blokkolása",
"setting.dntOthers.desc":"Az összes egyéb jellegű nyomkövető blokkolása",
"setting.communityIQ.name":"A használati adatok külső felekkel való megosztásának engedélyezése elemzési célokból",
"serp.safe.desc":"Ez a webhely biztonságos",
"serp.bad.desc":"Előfordulhat, hogy ez a webhely nem megbízható",
"serp.unknown.desc":"Ez a webhely még nincs minősítve",
"serp.unsafe.desc":"Ez a webhely nem biztonságos",
"topbar.openBankMode":"Megnyitás Bank módban",
"topbar.desc":"Előfordulhat, hogy pénzügyi adatait mások is láthatják.",
"topbar.tooltip":"A Bank mód az Avast vírusvédelmi megoldással együtt telepített Avast Secure Browser része. Biztonságosan elkülöníti a vásárlási és banki tevékenységek munkameneteit, nehogy a hackerek ellophassák hitelkártyaszámait, jelszavait és egyéb bizalmas adatait.",
"topbar.dontShowAgain":"Ne mutassa többet ezen az oldalon"
},
id:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Perincian",
"global.detailsHide":"Sembunyikan detail",
"global.done":"Selesai",
"global.leaveSite":"Tinggalkan situs",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - Situs tidak diketahui",
"background.icon.safe":"{0} - Situs web ini aman",
"background.icon.bad":"{0} - Situs ini mungkin tidak dapat dipercaya",
"background.icon.unsafe":"{0} - Situs web ini tidak aman",
"security.title":"Keamanan",
"security.safe.title":"Situs web ini aman",
"security.safe.item1.desc":"Tanpa phishing",
"security.safe.item1.tooltip":"Kami tidak mendeteksi adanya upaya mencuri informasi sensitif, seperti kata sandi, nomor kartu kredit, dsb. di situs web ini.",
"security.safe.item2.desc":"Tidak ada malware",
"security.safe.item2.tooltip":"Kami tidak menemukan kode berbahaya di situs web ini.",
"security.safe.item3.desc":"Tepercaya",
"security.safe.item3.tooltip":"{0} pengguna telah menilai situs web ini sebagai situs tepercaya dengan mengeklik {1} dalam {0} Online Security.",
"security.bad.title":"Situs ini mungkin tidak dapat dipercaya",
"security.bad.desc":"Kami tidak menemukan ancaman phishing atau malware di sini, tetapi banyak pengguna kami memberikan thumb down untuk situs ini.",
"security.unknown.title":"Situs tidak dikenal",
"security.unknown.desc":"Kami tidak punya cukup informasi untuk menilai situs web ini.",
"security.unsafe.title":"Situs web ini tidak aman",
"security.unsafe.phishing.desc":"Situs web ini telah ditandai sebagai situs phishing. Phishing adalah upaya mencuri informasi sensitif dari Anda, misalnya kata sandi, nomor kartu kredit, dsb.",
"security.unsafe.malware.desc":"Kami telah menemukan kode berbahaya di situs ini yang dapat merusak komputer atau mencuri data pribadi Anda.",
"rating.question.desc":"Apakah Anda percaya {0}?",
"rating.negative":"Adakah konten tidak senonoh di situs web ini? (opsional)",
"rating.thanks":"Terima kasih atas penilaian Anda!",
"rating.trusted.desc":"Anda <i>percaya</i> {0}",
"rating.untrusted.desc":"Anda <i>tidak percaya</i> {0}",
"rating.revert.tooltip":"Klik untuk menghapus penilaian Anda",
"rating.tooltip":"Rasa percaya atau tidak percaya Anda akan menjadi faktor dalam penilaian keamanan kami bagi situs web ini.",
"rating.category.pornography":"Pornografi",
"rating.category.violence":"Senjata/Kekerasan",
"rating.category.gambling":"Perjudian",
"rating.category.drugs":"Alkohol/Narkoba",
"rating.category.illegal":"Warez/Ilegal",
"rating.category.others":"Lainnya",
"privacy.title":"Privasi",
"privacy.group.Social.desc":"Jaringan sosial",
"privacy.group.Social.block.desc":"Blokir semua pelacakan jaringan sosial",
"privacy.group.Social.block.tooltip":"Ini akan memblokir pelacakan jaringan sosial di setiap situs web yang Anda kunjungi.",
"privacy.group.Social.unblock.desc":"Buka blokiran semua pelacakan jaringan sosial",
"privacy.group.Social.unblock.tooltip":"Ini akan mengizinkan pelacakan jaringan sosial di setiap situs web yang Anda kunjungi.",
"privacy.group.AdTracking.desc":"Pelacakan Iklan",
"privacy.group.AdTracking.block.desc":"Blokir semua pelacakan iklan",
"privacy.group.AdTracking.block.tooltip":"Ini akan memblokir pelacakan iklan di setiap situs web yang Anda kunjungi.",
"privacy.group.AdTracking.unblock.desc":"Buka blokiran semua pelacakan iklan",
"privacy.group.AdTracking.unblock.tooltip":"Ini akan mengizinkan pelacakan iklan di setiap situs web yang Anda kunjungi.",
"privacy.group.WebAnalytics.desc":"Analitik Web",
"privacy.group.WebAnalytics.block.desc":"Blokir semua pelacakan analitik web",
"privacy.group.WebAnalytics.block.tooltip":"Ini akan memblokir pelacakan analitik web di setiap situs web yang Anda kunjungi.",
"privacy.group.WebAnalytics.unblock.desc":"Buka blokiran semua pelacakan analitik web",
"privacy.group.WebAnalytics.unblock.tooltip":"Ini akan mengizinkan pelacakan lainnya di setiap situs web yang Anda kunjungi.",
"privacy.group.Others.desc":"Lainnya",
"privacy.group.Others.block.desc":"Blokir semua pelacakan lainnya",
"privacy.group.Others.block.tooltip":"Ini akan memblokir pelacakan lainnya di setiap situs web yang Anda kunjungi.",
"privacy.group.Others.unblock.desc":"Buka blokiran semua pelacakan lainnya",
"privacy.trackersBlockedAll":"<i>Semua {0} pelacak</i> diblokir pada {1}",
"privacy.trackersBlockedSome":"<i>{0} dari {1} pelacak</i> diblokir pada {2}",
"privacy.trackersBlockedNone":"<i>{0} sistem</i> pelacak pada {1}",
"privacy.trackersBlocked":"{0} dari {1} diblokir",
"privacy.trackersFound":"{0} ditemukan",
"privacy.trackersNone":"tidak ada",
"privacy.trackerBlock.desc":"Blokir",
"privacy.trackerBlock.tooltip":"Ini akan memblokir [{0}] pelacakan di setiap situs web yang Anda kunjungi.",
"privacy.trackerUnblock.desc":"Diblokir",
"privacy.trackerUnblock.tooltip":"Ini akan membuka blokir [{0}] di setiap situs web yang Anda kunjungi.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Untuk membuka blokiran pelacak tertentu, nonaktifkan pemblokiran otomatis.",
"privacy.automaticBlocking.desc":"Otomatis memblokir semua pelacak",
"privacy.automaticBlocking.tooltip":"Kami akan secara otomatis memblokir semua pelacak yang ditemukan di semua situs web yang Anda kunjungi.",
"setting.title":"Pengaturan",
"setting.serp.name":"Tandai hasil penelusuran saya",
"setting.serp.desc":"Tambahkan ikon berwarna ke hasil penelusuran Anda di Google, Yahoo!, dsb. untuk melihat hasil yang paling aman untuk diklik. (Hijau = Aman, Abu-abu = Tidak diketahui, Merah = Tidak aman)",
"setting.serpPopup.name":"Tampilkan tooltip untuk hasil penelusuran",
"setting.serpPopup.desc":"Layangkan kursor di atas ikon kami untuk melihat informasi selengkapnya.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Beralih ke Mode Bank untuk situs-situs finansial yang sensitif (wajib menginstal Avast Antivirus dan Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Beralih ke Mode Bank untuk situs-situs finansial yang sensitif (wajib menginstal AVG AntiVirus dan AVG Secure Browser)",
"setting.dntBadge.name":"Tampilkan total pelacak di suatu situs",
"setting.dntBadge.desc":"Tambahkan lencana ke browser Anda untuk melihat jumlah pelacak di setiap situs secara langsung.",
"setting.dntAutoBlock.name":"Otomatis memblokir semua pelacak",
"setting.dntAutoBlock.desc":"Memblokir semua pelacak yang ditemukan di setiap situs web yang Anda kunjungi.",
"setting.dntSocial.desc":"Blokir semua pelacak jaringan sosial",
"setting.dntAdTracking.desc":"Blokir semua pelacak iklan",
"setting.dntWebAnalytics.desc":"Blokir semua pelacak analitik web",
"setting.dntOthers.desc":"Blokir semua pelacak lainnya",
"setting.communityIQ.name":"Izinkan agar data penggunaan dapat dibagikan kepada pihak ketiga untuk dianalisis",
"serp.safe.desc":"Situs ini aman",
"serp.bad.desc":"Situs ini mungkin tidak dapat dipercaya",
"serp.unknown.desc":"Situs ini tidak memiliki peringkat",
"serp.unsafe.desc":"Situs ini tidak aman",
"topbar.openBankMode":"Buka dalam mode bank",
"topbar.desc":"Data keuangan Anda mungkin dapat dilihat orang lain.",
"topbar.tooltip":"Mode Bank, bagian Avast Secure Browser yang diinstal dengan antivirus Avast, mengisolasi dengan aman sesi belanja dan aktivitas perbankan Anda guna menghentikan peretas agar tidak dapat mencuri nomor kartu kredit, sandi, dan data pribadi Anda lainnya.",
"topbar.dontShowAgain":"Jangan tampilkan di situs ini lagi"
},
it:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Dettagli",
"global.detailsHide":"Nascondi dettagli",
"global.done":"Fatto",
"global.leaveSite":"Esci dal sito",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - Sito sconosciuto",
"background.icon.safe":"{0} - Questo sito è sicuro",
"background.icon.bad":"{0} - Questo sito potrebbe non essere affidabile",
"background.icon.unsafe":"{0} - Questo sito non è sicuro",
"security.title":"Sicurezza",
"security.safe.title":"Questo sito è sicuro",
"security.safe.item1.desc":"Phishing assente",
"security.safe.item1.tooltip":"In questo sito non sono stati rilevati tentativi di furto di informazioni sensibili come password, numeri di carte di credito ecc.",
"security.safe.item2.desc":"Malware assente",
"security.safe.item2.tooltip":"In questo sito non è stato rilevato codice dannoso.",
"security.safe.item3.desc":"Attendibile",
"security.safe.item3.tooltip":"{0} utenti hanno valutato attendibile questo sito facendo clic su {1} in {0} Online Security.",
"security.bad.title":"Potrebbe non essere affidabile",
"security.bad.desc":"In questo sito non sono stati rilevati malware o minacce di phishing, ma molti utenti lo hanno valutato negativamente.",
"security.unknown.title":"Sito sconosciuto",
"security.unknown.desc":"Non abbiamo ancora informazioni sufficienti per valutare questo sito.",
"security.unsafe.title":"Questo sito non è sicuro",
"security.unsafe.phishing.desc":"Questo sito è stato contrassegnato come sito di phishing. Il phishing è il tentativo di sottrarre all'utente informazioni sensibili come password, numeri di carte di credito, ecc.",
"security.unsafe.malware.desc":"In questo sito è stato rilevato codice dannoso che potrebbe danneggiare il computer o rubare i dati privati degli utenti.",
"rating.question.desc":"Consideri attendibile {0}?",
"rating.negative":"Questo sito presenta contenuti inappropriati? (opzionale)",
"rating.thanks":"Grazie per la tua valutazione!",
"rating.trusted.desc":"<i>Consideri attendibile</i> {0}",
"rating.untrusted.desc":"<i>Non consideri attendibile</i> {0}",
"rating.revert.tooltip":"Fai clic per rimuovere la valutazione",
"rating.tooltip":"Il tuo giudizio contribuirà a determinare la valutazione di sicurezza per questo sito.",
"rating.category.pornography":"Pornografia",
"rating.category.violence":"Armi / Violenza",
"rating.category.gambling":"Gioco d'azzardo",
"rating.category.drugs":"Alcol / Droghe",
"rating.category.illegal":"Warez / Illegale",
"rating.category.others":"Altro",
"privacy.title":"Privacy",
"privacy.group.Social.desc":"Social network",
"privacy.group.Social.block.desc":"Blocca completamente il tracciamento dei social network",
"privacy.group.Social.block.tooltip":"Verrà bloccato il tracciamento dei social network per tutti i siti Web visitati.",
"privacy.group.Social.unblock.desc":"Sblocca completamente il tracciamento dei social network",
"privacy.group.Social.unblock.tooltip":"Verrà consentito il tracciamento dei social network per tutti i siti Web visitati.",
"privacy.group.AdTracking.desc":"Ad Tracking",
"privacy.group.AdTracking.block.desc":"Blocca completamente il tracciamento delle pubblicità",
"privacy.group.AdTracking.block.tooltip":"Verrà bloccato il tracciamento delle pubblicità per tutti i siti Web visitati.",
"privacy.group.AdTracking.unblock.desc":"Sblocca completamente il tracciamento delle pubblicità",
"privacy.group.AdTracking.unblock.tooltip":"Verrà consentito il tracciamento delle pubblicità per tutti i siti Web visitati.",
"privacy.group.WebAnalytics.desc":"Analisi Web",
"privacy.group.WebAnalytics.block.desc":"Blocca completamente il tracciamento dell'analisi Web",
"privacy.group.WebAnalytics.block.tooltip":"Verrà bloccato il tracciamento dell'analisi Web per tutti i siti Web visitati.",
"privacy.group.WebAnalytics.unblock.desc":"Sblocca completamente il tracciamento dell'analisi Web",
"privacy.group.WebAnalytics.unblock.tooltip":"Verranno consentiti tutti gli altri tipi di tracciamento per tutti i siti Web visitati.",
"privacy.group.Others.desc":"Altro",
"privacy.group.Others.block.desc":"Blocca tutti gli altri tipi di tracciamento",
"privacy.group.Others.block.tooltip":"Verranno bloccati tutti gli altri tipi di tracciamento per tutti i siti Web visitati.",
"privacy.group.Others.unblock.desc":"Sblocca tutti gli altri tipi di tracciamento",
"privacy.trackersBlockedAll":"<i>{0} tracker</i> bloccato in {1} | <i>Tutti i {0} tracker</i> bloccati in {1}",
"privacy.trackersBlockedSome":"<i>{0} di {1} tracker</i> bloccato in {2} | <i>{0} di {1} tracker</i> bloccati in {2}",
"privacy.trackersBlockedNone":"<i>{0} sistema di tracciamento</i> in {1} | <i>{0} sistemi di tracciamento</i> in {1}",
"privacy.trackersBlocked":"{0} di {1} bloccati",
"privacy.trackersFound":"{0} rilevati",
"privacy.trackersNone":"niente",
"privacy.trackerBlock.desc":"Blocca",
"privacy.trackerBlock.tooltip":"Verrà bloccato il [{0}] per tutti i siti Web visitati.",
"privacy.trackerUnblock.desc":"Bloccato",
"privacy.trackerUnblock.tooltip":"Verrà sbloccato il [{0}] per tutti i siti Web visitati.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Per sbloccare un tracker specifico, disattivare il blocco automatico.",
"privacy.automaticBlocking.desc":"Blocca automaticamente tutti i tracker",
"privacy.automaticBlocking.tooltip":"Bloccheremo automaticamente tutti i tracker rilevati in ogni sito Web visitato.",
"setting.title":"Impostazioni",
"setting.serp.name":"Contrassegna i risultati di ricerca",
"setting.serp.desc":"Aggiungi icone colorate ai risultati di ricerca su Google, Yahoo! e non solo per vedere quali risultati sono sicuri (verde = sicuro, grigio = sconosciuto, rosso = non sicuro).",
"setting.serpPopup.name":"Mostra tooltip per i risultati di ricerca",
"setting.serpPopup.desc":"Muovi il mouse sopra le icone per visualizzare altre informazioni.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Passa alla Modalità Banca per i siti finanziari sensibili (richiede l'installazione di Avast Antivirus e Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Passa alla Modalità Banca per i siti finanziari sensibili (richiede l'installazione di AVG AntiVirus e AVG Secure Browser)",
"setting.dntBadge.name":"Mostra i tracker totali in un sito",
"setting.dntBadge.desc":"Aggiungi un badge al tuo browser per scoprire subito quanti tracker ci sono in un sito Web.",
"setting.dntAutoBlock.name":"Blocca automaticamente tutti i tracker",
"setting.dntAutoBlock.desc":"Blocca tutti i tracker rilevati nei siti Web visitati.",
"setting.dntSocial.desc":"Blocca tutti i tracker di social network",
"setting.dntAdTracking.desc":"Blocca tutti i tracker di pubblicità",
"setting.dntWebAnalytics.desc":"Blocca tutti i tracker di analisi Web",
"setting.dntOthers.desc":"Blocca tutti gli altri tracker",
"setting.communityIQ.name":"Consenti la condivisione dei dati sull'utilizzo con terze parti a scopo di analisi",
"serp.safe.desc":"Questo sito è sicuro",
"serp.bad.desc":"Questo sito potrebbe non essere affidabile",
"serp.unknown.desc":"Questo sito non è stato valutato",
"serp.unsafe.desc":"Questo sito non è sicuro",
"topbar.openBankMode":"Apri in Modalità Banca",
"topbar.desc":"I dati finanziari potrebbero essere visibili per altri utenti.",
"topbar.tooltip":"Modalità Banca, inclusa in Avast Secure Browser installato con Avast Antivirus, isola in modo sicuro le sessioni di shopping e di online banking per impedire agli hacker di rubare numeri di carte di credito, password e altri dati privati.",
"topbar.dontShowAgain":"Non mostrare più per questo sito"
},
ja:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"ベータ版",
"global.detailsShow":"詳細",
"global.detailsHide":"詳細を隠す",
"global.done":"完了",
"global.leaveSite":"サイトを離れる",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - 不明なサイト",
"background.icon.safe":"{0} - このウェブサイトは安全です",
"background.icon.bad":"{0} - このサイトは信頼できない可能性があります",
"background.icon.unsafe":"{0} - このウェブサイトは安全ではありません",
"security.title":"セキュリティ",
"security.safe.title":"このウェブサイトは安全です",
"security.safe.item1.desc":"フィッシング未検出",
"security.safe.item1.tooltip":"このウェブサイトでは、パスワードやクレジットカード番号などの機密情報を盗もうとする試みは検出されませんでした。",
"security.safe.item2.desc":"マルウェア未検出",
"security.safe.item2.tooltip":"このウェブサイトでは、悪意のあるコードは検出されませんでした。",
"security.safe.item3.desc":"信頼できます",
"security.safe.item3.tooltip":"{0} ユーザーが {0} Online Security 内で {1} をクリックして、このウェブサイトを信頼できると評価しています。",
"security.bad.title":"このサイトは信頼できない可能性があります",
"security.bad.desc":"このサイト内でフィッシング脅威やマルウェアは検出されませんでしたが、多くのユーザーが信頼できないと評価しています。",
"security.unknown.title":"不明なサイト",
"security.unknown.desc":"このウェブサイトを評価するための情報が不足しています。",
"security.unsafe.title":"このウェブサイトは安全ではありません",
"security.unsafe.phishing.desc":"このウェブサイトはフィッシング サイトとしてマークされています。フィッシングとは、ユーザーのパスワードやクレジットカード番号などの機密情報を盗もうとする試みです。",
"security.unsafe.malware.desc":"このウェブサイトで、コンピューターに害を及ぼしたり、個人データを盗んだりする悪意のあるコードが検出されました。",
"rating.question.desc":"{0} は信頼できますか？",
"rating.negative":"このウェブサイトに不適切なコンテンツはありますか？（任意）",
"rating.thanks":"ご評価いただきありがとうございます！",
"rating.trusted.desc":"{0} は<i>信頼できます</i>",
"rating.untrusted.desc":"{0} は<i>信頼できません</i>",
"rating.revert.tooltip":"クリックすると評価を削除できます",
"rating.tooltip":"あなたの信頼できるか否かの評価は、このウェブサイトの安全性の評価に反映されます。",
"rating.category.pornography":"アダルト",
"rating.category.violence":"武器 / 暴力",
"rating.category.gambling":"ギャンブル",
"rating.category.drugs":"酒 / 薬物",
"rating.category.illegal":"海賊版 / 違法",
"rating.category.others":"その他",
"privacy.title":"プライバシー",
"privacy.group.Social.desc":"ソーシャル ネットワーク",
"privacy.group.Social.block.desc":"すべてのソーシャル ネットワーク追跡をブロック",
"privacy.group.Social.block.tooltip":"アクセスするすべてのウェブサイトでソーシャル ネットワーク追跡をブロックします。",
"privacy.group.Social.unblock.desc":"すべてのソーシャル ネットワーク追跡をブロック解除",
"privacy.group.Social.unblock.tooltip":"アクセスするすべてのウェブサイトでソーシャル ネットワーク追跡をブロック解除します。",
"privacy.group.AdTracking.desc":"広告による追跡",
"privacy.group.AdTracking.block.desc":"広告による追跡をすべてブロック",
"privacy.group.AdTracking.block.tooltip":"アクセスするすべてのウェブサイトで広告による追跡をブロックします。",
"privacy.group.AdTracking.unblock.desc":"広告による追跡をすべてブロック解除",
"privacy.group.AdTracking.unblock.tooltip":"アクセスするすべてのウェブサイトで広告による追跡をブロック解除します。",
"privacy.group.WebAnalytics.desc":"ウェブサイト解析",
"privacy.group.WebAnalytics.block.desc":"ウェブ解析による追跡をすべてブロック",
"privacy.group.WebAnalytics.block.tooltip":"アクセスするすべてのウェブサイトでウェブ解析による追跡をブロックします。",
"privacy.group.WebAnalytics.unblock.desc":"ウェブ解析による追跡をすべてブロック解除",
"privacy.group.WebAnalytics.unblock.tooltip":"アクセスするすべてのウェブサイトでその他の追跡をブロック解除します。",
"privacy.group.Others.desc":"その他",
"privacy.group.Others.block.desc":"その他の追跡をすべてブロック",
"privacy.group.Others.block.tooltip":"アクセスするすべてのウェブサイトでその他の追跡をブロックします。",
"privacy.group.Others.unblock.desc":"その他の追跡をすべてブロック解除",
"privacy.trackersBlockedAll":"{1} で <i>{0} 件のトラッカーがすべて</i>ブロックされました",
"privacy.trackersBlockedSome":"{2} で <i>{1} 件中 {0} 件のトラッカー</i>がブロックされました",
"privacy.trackersBlockedNone":"{1} で <i>{0} 件の追跡</i>システムが見つかりました",
"privacy.trackersBlocked":"{1} 件中 {0} 件がブロックされました",
"privacy.trackersFound":"{0} 件見つかりました",
"privacy.trackersNone":"見つかりませんでした",
"privacy.trackerBlock.desc":"ブロック",
"privacy.trackerBlock.tooltip":"アクセスするすべてのウェブサイトで [{0}] をブロックします。",
"privacy.trackerUnblock.desc":"ブロックしました",
"privacy.trackerUnblock.tooltip":"アクセスするすべてのウェブサイトで [{0}] をブロック解除します。",
"privacy.trackerUnblockOnAutoBlock.tooltip":"特定のトラッカーをブロック解除するには、自動ブロック機能をオフにしてください。",
"privacy.automaticBlocking.desc":"すべてのトラッカーを自動的にブロック",
"privacy.automaticBlocking.tooltip":"アクセスするすべてのウェブサイトで見つかったトラッカーをすべて自動的にブロックします。",
"setting.title":"設定",
"setting.serp.name":"検索結果に印を付ける",
"setting.serp.desc":"Google や Yahoo! などでの検索結果に色付きのアイコンを付けて、どの検索結果が安全にクリックできるか表示します（緑 = 安全、グレー = 不明、赤 = 安全ではない）。",
"setting.serpPopup.name":"検索結果にツールチップを表示",
"setting.serpPopup.desc":"アイコンの上にカーソルを移動させると、詳細情報が表示されます。",
"setting.secureBrowser.Avast.name":"セキュア ブラウザ",
"setting.secureBrowser.Avast.desc":"銀行取引の際はバンク モードに切り替える（アバスト アンチウイルスとアバスト セキュア ブラウザのインストールが必要です）",
"setting.secureBrowser.AVG.name":"セキュア ブラウザ",
"setting.secureBrowser.AVG.desc":"銀行取引の際はバンク モードに切り替える（AVG アンチウイルスと AVG セキュア ブラウザのインストールが必要です）",
"setting.dntBadge.name":"サイト内のトラッカー総数を表示",
"setting.dntBadge.desc":"ブラウザーにバッジを追加して、ウェブサイトに含まれているトラッカー件数がすぐにわかるようにします。",
"setting.dntAutoBlock.name":"すべてのトラッカーを自動的にブロック",
"setting.dntAutoBlock.desc":"アクセスするすべてのウェブサイトで見つかったトラッカーをすべてブロックします。",
"setting.dntSocial.desc":"すべてのソーシャル ネットワーク トラッカーをブロック",
"setting.dntAdTracking.desc":"すべての広告トラッカーをブロック",
"setting.dntWebAnalytics.desc":"すべてのウェブ解析トラッカーをブロック",
"setting.dntOthers.desc":"その他のトラッカーをすべてブロック",
"setting.communityIQ.name":"使用状況データを解析目的で第三者と共有することを許可する",
"serp.safe.desc":"このサイトは安全です",
"serp.bad.desc":"このサイトは信頼できない可能性があります",
"serp.unknown.desc":"このサイトはまだ評価されていません",
"serp.unsafe.desc":"このサイトは安全ではありません",
"topbar.openBankMode":"バンク モードで開く",
"topbar.desc":"あなたの金融取引データは他人に見られる可能性があります。",
"topbar.tooltip":"バンク モードは、アバスト アンチウイルスと共にインストールされるアバスト セキュア ブラウザに含まれている機能です。ショッピングとバンキングのセッションを安全に分離し、クレジット カード番号やパスワードなどの個人データを盗もうとするハッカーから保護します。",
"topbar.dontShowAgain":"今後このサイトでは表示しない"
},
ko:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"베타",
"global.detailsShow":"세부정보",
"global.detailsHide":"세부정보 숨기기",
"global.done":"완료",
"global.leaveSite":"사이트 나가기",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - 알 수 없는 사이트",
"background.icon.safe":"{0} - 이 웹사이트는 안전함",
"background.icon.bad":"{0} - 이 사이트는 신뢰할 수 없음",
"background.icon.unsafe":"{0} - 이 웹사이트는 안전하지 않음",
"security.title":"보안",
"security.safe.title":"이 웹사이트는 안전함",
"security.safe.item1.desc":"피싱 없음",
"security.safe.item1.tooltip":"이 웹사이트에서 비밀번호, 신용카드 번호 등의 중요한 정보를 도용하려는 어떤 시도도 발견하지 못했습니다.",
"security.safe.item2.desc":"맬웨어 없음",
"security.safe.item2.tooltip":"이 웹사이트에서 어떤 악성 코드도 발견하지 못했습니다.",
"security.safe.item3.desc":"신뢰할 수 있음",
"security.safe.item3.tooltip":"{0}명의 사용자들이 {0} Online Security에서 {1}을(를) 클릭하여 이 웹사이트를 신뢰할 수 있다고 평가했습니다.",
"security.bad.title":"이 사이트는 신뢰할 수 없음",
"security.bad.desc":"여기서 어떤 피싱 위협이나 맬웨어도 발견하지 못했지만 많은 사용자들이 이 사이트를 나쁘게 평가했습니다.",
"security.unknown.title":"알 수 없는 사이트",
"security.unknown.desc":"이 웹사이트를 평가할 충분한 정보가 아직 없습니다.",
"security.unsafe.title":"이 웹사이트는 안전하지 않음",
"security.unsafe.phishing.desc":"이 웹사이트는 피싱 사이트로 표시되었습니다. 피싱은 비밀번호, 신용카드 번호 등과 같은 중요한 정보를 도용하려는 시도입니다.",
"security.unsafe.malware.desc":"이 웹사이트에서 컴퓨터를 손상시키거나 개인 정보를 도용할 수 있는 악성 코드를 발견했습니다.",
"rating.question.desc":"{0}을(를) 신뢰하십니까?",
"rating.negative":"이 웹사이트에 부적절한 콘텐츠가 있습니까? (선택 사항)",
"rating.thanks":"평가해 주셔서 감사합니다!",
"rating.trusted.desc":"귀하는 {0}을(를) <i>신뢰합니다</i>",
"rating.untrusted.desc":"귀하는 {0}을(를) <i>신뢰하시지 않습니다</i>",
"rating.revert.tooltip":"평가를 제거하려면 클릭하십시오",
"rating.tooltip":"이 웹사이트의 안전 평가에는 여러분의 신뢰 또는 불신이 반영됩니다.",
"rating.category.pornography":"포르노",
"rating.category.violence":"무기/폭력",
"rating.category.gambling":"도박",
"rating.category.drugs":"알코올/마약",
"rating.category.illegal":"와레즈/불법",
"rating.category.others":"기타",
"privacy.title":"개인정보 보호",
"privacy.group.Social.desc":"소셜 네트워크",
"privacy.group.Social.block.desc":"모든 소셜 네트워크 추적 차단",
"privacy.group.Social.block.tooltip":"방문하는 모든 웹사이트에서 소셜 네트워크 추적을 차단합니다.",
"privacy.group.Social.unblock.desc":"모든 소셜 네트워크 추적 차단 해제",
"privacy.group.Social.unblock.tooltip":"방문하는 모든 웹사이트에서 소셜 네트워크 추적을 허용합니다.",
"privacy.group.AdTracking.desc":"광고 추적",
"privacy.group.AdTracking.block.desc":"모든 광고 추적 차단",
"privacy.group.AdTracking.block.tooltip":"방문하는 모든 웹사이트에서 광고 추적을 차단합니다.",
"privacy.group.AdTracking.unblock.desc":"모든 광고 추적 차단 해제",
"privacy.group.AdTracking.unblock.tooltip":"방문하는 모든 웹사이트에서 광고 추적을 허용합니다.",
"privacy.group.WebAnalytics.desc":"웹 분석",
"privacy.group.WebAnalytics.block.desc":"모든 웹 분석 추적 차단",
"privacy.group.WebAnalytics.block.tooltip":"방문하는 모든 웹사이트에서 웹 분석 추적을 차단합니다.",
"privacy.group.WebAnalytics.unblock.desc":"모든 웹 분석 추적 차단 해제",
"privacy.group.WebAnalytics.unblock.tooltip":"방문하는 모든 웹사이트에서 기타 추적을 허용합니다.",
"privacy.group.Others.desc":"기타",
"privacy.group.Others.block.desc":"기타 모든 추적 차단",
"privacy.group.Others.block.tooltip":"방문하는 모든 웹사이트에서 기타 추적을 차단합니다.",
"privacy.group.Others.unblock.desc":"기타 모든 추적 차단 해제",
"privacy.trackersBlockedAll":"{1}에서 <i>{0}개의 추적기 모두</i> 차단됨",
"privacy.trackersBlockedSome":"{2}에서 <i>{1}개 추적기 중 {0}개</i>가 차단됨",
"privacy.trackersBlockedNone":"{1}에서 <i>{0}개의 추적</i> 시스템 발견",
"privacy.trackersBlocked":"{1}개 중 {0}개 차단됨",
"privacy.trackersFound":"{0}개 발견",
"privacy.trackersNone":"없음",
"privacy.trackerBlock.desc":"차단",
"privacy.trackerBlock.tooltip":"방문하는 모든 웹사이트에서 [{0}]을(를) 차단합니다.",
"privacy.trackerUnblock.desc":"차단됨",
"privacy.trackerUnblock.tooltip":"방문하는 모든 웹사이트에서 [{0}]을(를) 차단 해제합니다.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"특정 추적기를 차단 해제하려면 자동 차단을 끄십시오.",
"privacy.automaticBlocking.desc":"모든 추적기를 자동 차단",
"privacy.automaticBlocking.tooltip":"방문하는 모든 웹사이트에서 발견된 모든 추적기를 자동으로 차단합니다.",
"setting.title":"설정",
"setting.serp.name":"내 검색 결과 표시",
"setting.serp.desc":"Google, Yahoo! 등에서 검색 결과에 컬러 아이콘을 추가하면 어떤 결과가 클릭해도 안전한지 알 수 있습니다(녹색 = 안전함, 회색 = 알 수 없음, 빨간색 = 안전하지 않음).",
"setting.serpPopup.name":"검색 결과에 대한 도구 설명 표시",
"setting.serpPopup.desc":"아이콘 위에 마우스를 갖다 대면 자세한 정보가 표시됩니다.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"중요한 금융 사이트의 경우 뱅킹 모드로 전환(Avast Antivirus와 Avast Secure Browser가 설치되어 있어야 함)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"중요한 금융 사이트의 경우 뱅킹 모드로 전환(AVG AntiVirus와 AVG Secure Browser가 설치되어 있어야 함)",
"setting.dntBadge.name":"사이트의 모든 추적기 표시",
"setting.dntBadge.desc":"브라우저에 배지를 추가하면 웹사이트에 얼마나 많은 추적기가 있는지 바로 알 수 있습니다.",
"setting.dntAutoBlock.name":"모든 추적기를 자동 차단",
"setting.dntAutoBlock.desc":"방문하는 모든 웹사이트에서 발견된 모든 추적기를 차단합니다.",
"setting.dntSocial.desc":"모든 소셜 네트워크 추적기 차단",
"setting.dntAdTracking.desc":"모든 광고 추적기 차단",
"setting.dntWebAnalytics.desc":"모든 웹 분석 추적기 차단",
"setting.dntOthers.desc":"기타 모든 추적기 차단",
"setting.communityIQ.name":"분석을 위해 타사와 사용 데이터 공유 허용",
"serp.safe.desc":"이 사이트는 안전함",
"serp.bad.desc":"이 사이트는 신뢰할 수 없을 수 있음",
"serp.unknown.desc":"이 사이트는 평가되지 않음",
"serp.unsafe.desc":"이 사이트는 안전하지 않음",
"topbar.openBankMode":"뱅킹 모드에서 열기",
"topbar.desc":"금융 데이터를 다른 사람이 볼 수 있습니다.",
"topbar.tooltip":"뱅킹 모드는 Avast Antivirus에 설치된 Avast Secure Browser 기능으로, 쇼핑 및 뱅킹 세션을 안전하게 격리하여 해커가 귀하의 신용카드 번호, 비밀번호 및 기타 개인 데이터를 도용하지 못하도록 방지합니다.",
"topbar.dontShowAgain":"이 사이트 다시 표시 안 함"
},
lt:{
"AVG.title":"„Online Security“",
"Avast.title":"„Avast Online Security“",
"global.beta":"Beta versija",
"global.detailsShow":"Išsami informacija",
"global.detailsHide":"Slėpti išsamią informaciją",
"global.done":"Baigta",
"global.leaveSite":"Palikti interneto svetainę",
"global.switcher.off":"IŠJ",
"global.switcher.on":"ĮJ.",
"background.icon.unknown":"{0} – Nežinoma interneto svetainė",
"background.icon.safe":"{0} – Ši interneto svetainė yra saugi",
"background.icon.bad":"{0} – Ši interneto svetainė gali būti nepatikima",
"background.icon.unsafe":"{0} – Ši interneto svetainė yra nesaugi",
"security.title":"Saugumas",
"security.safe.title":"Ši interneto svetainė yra saugi",
"security.safe.item1.desc":"Nėra sukčiavimo",
"security.safe.item1.tooltip":"Šioje interneto svetainėje neaptikome bandymų pavogti svarbią informaciją, tokią kaip slaptažodžiai, kredito kortelių numeriai ir kt.",
"security.safe.item2.desc":"Nėra kenkimo programų",
"security.safe.item2.tooltip":"Šioje interneto svetainėje neaptikome kenkėjiško kodo.",
"security.safe.item3.desc":"Patikima",
"security.safe.item3.tooltip":"{0} naudotojų įvertino šį tinklalapį kaip patikimą paspausdami {1} {0} „Online Security“.",
"security.bad.title":"Ši interneto svetainė gali būti nepatikima",
"security.bad.desc":"Joje neradome jokių sukčiavimo grėsmių ar kenkimo programų, tačiau daugelis mūsų naudotojų neigiamai įvertino šią interneto svetainę.",
"security.unknown.title":"Nežinoma interneto svetainė",
"security.unknown.desc":"Kol kas neturime pakankamai informacijos įvertinti šią interneto svetainę.",
"security.unsafe.title":"Ši interneto svetainė yra nesaugi",
"security.unsafe.phishing.desc":"Ši interneto svetainė pažymėta kaip sukčiavimo svetainė. Sukčiavimas yra bandymas pavogti svarbią informaciją, tokią kaip jūsų slaptažodžiai, kredito kortelių numeriai ir kt.",
"security.unsafe.malware.desc":"Šioje interneto svetainėje radome kenkėjišką kodą, galintį pakenkti jūsų kompiuteriui ar pavogti jūsų privačius duomenis.",
"rating.question.desc":"Ar pasitikite {0}?",
"rating.negative":"Ar šioje interneto svetainėje yra netinkamo turinio? (neprivaloma nurodyti)",
"rating.thanks":"Dėkojame už jūsų įvertinimą!",
"rating.trusted.desc":"Jūs <i>pasitikite</i> {0}",
"rating.untrusted.desc":"Jūs <i>nepasitikite</i> {0}",
"rating.revert.tooltip":"Spauskite, norėdami pašalinti savo įvertinimą",
"rating.tooltip":"Į jūsų įvertinimą atsižvelgsime vertindami šios interneto svetainės saugumą.",
"rating.category.pornography":"Pornografija",
"rating.category.violence":"Ginklai / smurtas",
"rating.category.gambling":"Azartiniai žaidimai",
"rating.category.drugs":"Alkoholis / narkotikai",
"rating.category.illegal":"Nelegali programinė įranga / nelegalus turinys",
"rating.category.others":"Kita",
"privacy.title":"Privatumas",
"privacy.group.Social.desc":"Socialiniai tinklai",
"privacy.group.Social.block.desc":"Blokuoti visą socialinių tinklų sekimą",
"privacy.group.Social.block.tooltip":"Užblokuosite socialinių tinklų sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"privacy.group.Social.unblock.desc":"Atblokuoti visą socialinių tinklų sekimą",
"privacy.group.Social.unblock.tooltip":"Atblokuosite socialinių tinklų sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"privacy.group.AdTracking.desc":"Reklamos sekimas",
"privacy.group.AdTracking.block.desc":"Blokuoti visą reklamų sekimą",
"privacy.group.AdTracking.block.tooltip":"Užblokuosite reklamos sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"privacy.group.AdTracking.unblock.desc":"Atblokuoti visą reklamų sekimą",
"privacy.group.AdTracking.unblock.tooltip":"Atblokuosite reklamos sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"privacy.group.WebAnalytics.desc":"Žiniatinklio analitika",
"privacy.group.WebAnalytics.block.desc":"Užblokuoti visą žiniatinklio analitikos sekimą",
"privacy.group.WebAnalytics.block.tooltip":"Užblokuosite žiniatinklio analitikos sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"privacy.group.WebAnalytics.unblock.desc":"Atblokuoti visą žiniatinklio analitikos sekimą",
"privacy.group.WebAnalytics.unblock.tooltip":"Atblokuosite kitą sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"privacy.group.Others.desc":"Kita",
"privacy.group.Others.block.desc":"Blokuoti visą kitą sekimą",
"privacy.group.Others.block.tooltip":"Užblokuosite kitą sekimą kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"privacy.group.Others.unblock.desc":"Atblokuoti visą kitą sekimą",
"privacy.trackersBlockedAll":"<i>{0} sekiklis</i> užblokuotas {1} | <i>{0} sekikliai</i> užblokuoti {1} | <i>{0} sekiklių</i> užblokuota {1} | <i>{0} sekiklių</i> užblokuota {1}",
"privacy.trackersBlockedSome":"<i>{0} iš {1} sekiklių</i> užblokuotas {2} | <i>{0} iš {1} sekiklių</i> užblokuoti {2} | <i>{0} iš {1} sekiklių</i> užblokuota {2} | <i>{0} iš {1} sekiklių</i> užblokuota {2}",
"privacy.trackersBlockedNone":"<i>{0} sekimo</i> sistema {1} | <i>{0} sekimo</i> sistemos {1} | <i>{0} sekimo</i> sistemų {1} | <i>{0} sekimo</i> sistemų {1}",
"privacy.trackersBlocked":"{0} iš {1} užblokuoti",
"privacy.trackersFound":"{0} rasta",
"privacy.trackersNone":"nieko",
"privacy.trackerBlock.desc":"Blokuoti",
"privacy.trackerBlock.tooltip":"Užblokuosite [{0}] kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"privacy.trackerUnblock.desc":"Užblokuota",
"privacy.trackerUnblock.tooltip":"Atblokuosite [{0}] kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Norėdami užblokuoti konkretų sekiklį, išjunkite automatinį blokavimą.",
"privacy.automaticBlocking.desc":"Automatiškai blokuoti visus sekiklius",
"privacy.automaticBlocking.tooltip":"Automatiškai užblokuosime visus rastus sekiklius kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"setting.title":"Nuostatos",
"setting.serp.name":"Pažymėti mano paieškos rezultatus",
"setting.serp.desc":"Pridėkite spalvotų piktogramų prie savo paieškų rezultatų „Google“, „Yahoo!“ ir kt., kad pamatytumėte, kuriuos rezultatus saugu atverti. (Žalia = saugu, pilka = nežinoma, raudona = nesaugu)",
"setting.serpPopup.name":"Rodyti paieškų rezultatų paaiškinimus",
"setting.serpPopup.desc":"Užveskite pelytės žymeklį ant piktogramų, kad pamatytumėte daugiau informacijos.",
"setting.secureBrowser.Avast.name":"„Secure Browser“",
"setting.secureBrowser.Avast.desc":"Persijungti į Banko režimą naršant jautrius finansinius puslapius (reikia įdiegti „Avast Antivirus“ antivirusinę programą ir „Avast Secure Browser“ naršyklę)",
"setting.secureBrowser.AVG.name":"„Secure Browser“",
"setting.secureBrowser.AVG.desc":"Persijungti į Banko režimą naršant po jautrius finansinius tinklalapius (turi būti įdiegta „AVG AntiVirus“ antivirusinė programa ir „AVG Secure Browser“ naršyklė)",
"setting.dntBadge.name":"Rodyti, kiek sekiklių yra interneto svetainėje",
"setting.dntBadge.desc":"Pridėkite ženklelį prie savo interneto naršyklės, kad iš karto pamatytumėte, kiek sekiklių yra interneto svetainėje.",
"setting.dntAutoBlock.name":"Automatiškai blokuoti visus sekiklius",
"setting.dntAutoBlock.desc":"Blokuoti visus rastus sekiklius kiekvienoje interneto svetainėje, kurioje apsilankysite.",
"setting.dntSocial.desc":"Blokuoti visus socialinių tinklų sekiklius",
"setting.dntAdTracking.desc":"Blokuoti visus reklamos sekiklius",
"setting.dntWebAnalytics.desc":"Užblokuoti visus žiniatinklio analitikos sekiklius",
"setting.dntOthers.desc":"Blokuoti visus kitus sekiklius",
"setting.communityIQ.name":"Leisti bendrinti naudojimo duomenis su trečiosiomis šalimis analizės tikslais",
"serp.safe.desc":"Ši interneto svetainė yra saugi",
"serp.bad.desc":"Ši interneto svetainė gali būti nepatikima",
"serp.unknown.desc":"Ši interneto svetainė neįvertinta",
"serp.unsafe.desc":"Ši interneto svetainė yra nesaugi",
"topbar.openBankMode":"Atverti banko režimu",
"topbar.desc":"Jūsų finansiniai duomenys gali būti matomi kitiems.",
"topbar.tooltip":"Banko režimas, „Avast Secure Browser“, kuri yra įdiegta kartu su „Avast“ antivirusine sistema, elementas, saugiai izoliuoja pirkimų ir bankines sesijas nuo įsilaužėlių, kad nebūtų pavogti jūsų kredito kortelių numeriai, slaptažodžiai ir kiti privatūs duomenys.",
"topbar.dontShowAgain":"Daugiau neberodyti šioje interneto svetainėje"
},
lv:{
"AVG.title":"Drošība tiešsaistē",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Detalizēta informācija",
"global.detailsHide":"Paslēpt detalizētu informāciju",
"global.done":"Gatavs",
"global.leaveSite":"Aizvērt vietni",
"global.switcher.off":"Izs",
"global.switcher.on":"Ies",
"background.icon.unknown":"{0} - nezināma vietne",
"background.icon.safe":"{0} - šī vietne ir droša",
"background.icon.bad":"{0} - šī vietne, iespējams, ir neuzticama",
"background.icon.unsafe":"{0} - šī vietne nav droša",
"security.title":"Drošība",
"security.safe.title":"Šī vietne ir droša",
"security.safe.item1.desc":"Nav pikšķerēšanas",
"security.safe.item1.tooltip":"Mēs nekonstatējām mēģinājumus šajā tīmekļa vietnē nozagt sensitīvu informāciju, piemēram, paroles, kredītkaršu numurus u.c.",
"security.safe.item2.desc":"Nav ļaunprogrammatūras",
"security.safe.item2.tooltip":"Mēs nekonstatējām nevienu ļaunprātīgu kodu šajā tīmekļa vietnē.",
"security.safe.item3.desc":"Uzticama",
"security.safe.item3.tooltip":"{0} lietotāji ir novērtējuši šo vietni kā uzticamu, noklikšķinot uz {1} {0} tiešsaistes drošības sadaļā.",
"security.bad.title":"Šī vietne, iespējams, ir neuzticama",
"security.bad.desc":"Mēs nekonstatējām šeit nevienu pikšķerēšanas apdraudējumu vai ļaunprogrammatūru, taču daudzi no mūsu lietotājiem to vērtēja negatīvi.",
"security.unknown.title":"Nezināma vietne",
"security.unknown.desc":"Mums joprojām nav pietiekami daudz informācijas, lai novērtētu šo tīmekļa vietni.",
"security.unsafe.title":"Šī vietne nav droša",
"security.unsafe.phishing.desc":"Šī tīmekļa vietne ir atzīmēta kā pikšķerēšanas vietne. Pikšķerēšana ir mēģinājums nozagt sensitīvu informāciju, piemēram, jūsu paroles, kredītkaršu numurus utt.",
"security.unsafe.malware.desc":"Mēs šajā tīmekļa vietnē konstatējām ļaunprātīgu kodu, kas var kaitēt jūsu datoram vai nozagt jūsu privātos datus.",
"rating.question.desc":"Vai uzticaties {0}?",
"rating.negative":"Vai šajā tīmekļa vietnē ir nepiemērots saturs? (papildiespēja)",
"rating.thanks":"Paldies par jūsu vērtējumu!",
"rating.trusted.desc":"Jūs <i>uzticaties</i> {0}",
"rating.untrusted.desc":"Jūs <i>neuzticaties</i> {0}",
"rating.revert.tooltip":"Noklikšķiniet, lai noņemtu savu vērtējumu",
"rating.tooltip":"Jūsu uzticēšanās vai neuzticēšanās tiks ņemta vērā mūsu drošības novērtējumā par šo tīmekļa vietni.",
"rating.category.pornography":"Pornogrāfija",
"rating.category.violence":"Ieroči un vardarbība",
"rating.category.gambling":"Azartspēles",
"rating.category.drugs":"Alkohols un narkotikas",
"rating.category.illegal":"Nelegālas programmas",
"rating.category.others":"Cits",
"privacy.title":"Privātums",
"privacy.group.Social.desc":"Sociālie tīkli",
"privacy.group.Social.block.desc":"Bloķēt visu sociālo tīklu izsekošanu",
"privacy.group.Social.block.tooltip":"Šādi tiks bloķēta sociālo tīklu izsekošana katrā tīmekļa vietnē, ko apmeklējat.",
"privacy.group.Social.unblock.desc":"Atbloķēt visu sociālo tīklu izsekošanu",
"privacy.group.Social.unblock.tooltip":"Šādi tiks atļauta sociālo tīklu izsekošana katrā tīmekļa vietnē, ko apmeklējat.",
"privacy.group.AdTracking.desc":"Reklāmu izsekošana",
"privacy.group.AdTracking.block.desc":"Bloķēt visas reklāmas izsekošanu",
"privacy.group.AdTracking.block.tooltip":"Šādi tiks bloķēta reklāmas izsekošana katrā tīmekļa vietnē, ko apmeklējat.",
"privacy.group.AdTracking.unblock.desc":"Atbloķēt visas reklāmas izsekošanu",
"privacy.group.AdTracking.unblock.tooltip":"Šādi tiks atbloķēta reklāmas izsekošana katrā tīmekļa vietnē, ko apmeklējat.",
"privacy.group.WebAnalytics.desc":"Tīmekļa analīze",
"privacy.group.WebAnalytics.block.desc":"Bloķēt visas tīmekļa analīzes izsekošanu",
"privacy.group.WebAnalytics.block.tooltip":"Šādi tiks bloķēta tīmekļa analīzes izsekošana katrā tīmekļa vietnē, ko apmeklējat.",
"privacy.group.WebAnalytics.unblock.desc":"Atbloķēt visas tīmekļa analīzes izsekošanu",
"privacy.group.WebAnalytics.unblock.tooltip":"Šādi tiks atļauta cita veida izsekošana katrā tīmekļa vietnē, ko apmeklējat.",
"privacy.group.Others.desc":"Cits",
"privacy.group.Others.block.desc":"Bloķēt visu pārējo izsekošanu",
"privacy.group.Others.block.tooltip":"Šādi tiks bloķēta cita veida izsekošana katrā tīmekļa vietnē, ko apmeklējat.",
"privacy.group.Others.unblock.desc":"Atbloķēt visu pārējo izsekošanu",
"privacy.trackersBlockedAll":"<i>Visi {0} izsekotāji</i> bloķēti {1} | <i>{0} izsekotājs</i> bloķēts {1} | <i>Visi {0} izsekotāji</i> bloķēti {1}",
"privacy.trackersBlockedSome":"<i>{0} no {1} izsekotājiem</i> bloķēti {2} | <i>{0} no {1} izsekotājiem</i> bloķēts {2} | <i>{0} no {1} izsekotājiem</i> bloķēti {2}",
"privacy.trackersBlockedNone":"<i>{0} izsekošanas</i> sistēmu {1} | <i>{0} izsekošanas</i> sistēma {1} | <i>{0} izsekošanas</i> sistēmas {1}",
"privacy.trackersBlocked":"Bloķēts {0} no {1}",
"privacy.trackersFound":"Atrasti {0}",
"privacy.trackersNone":"nav",
"privacy.trackerBlock.desc":"Bloķēt",
"privacy.trackerBlock.tooltip":"Šādi tiks bloķēts [{0}] katrā vietnē, ko apmeklējat.",
"privacy.trackerUnblock.desc":"Bloķēts",
"privacy.trackerUnblock.tooltip":"Šādi tiks atbloķēts [{0}] katrā vietnē, ko apmeklējat.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Lai atbloķētu konkrētu izsekotāju, izslēdziet automātisko bloķēšanu.",
"privacy.automaticBlocking.desc":"Automātiski bloķēt visus izsekotājus",
"privacy.automaticBlocking.tooltip":"Bloķējiet visus izsekotājus katrā tīmekļa vietnē, ko apmeklējat.",
"setting.title":"Iestatījumi",
"setting.serp.name":"Atzīmēt manas meklēšanas rezultātus",
"setting.serp.desc":"Pievienojiet ikonas saviem meklēšanas rezultātiem pakalpojumā Google, Yahoo! utt., lai redzētu, uz kuriem rezultātiem var droši noklikšķināt (zaļš = drošs, pelēks = nezināms, sarkans = nedrošs).",
"setting.serpPopup.name":"Rādīt rīka padomus meklēšanas rezultātiem",
"setting.serpPopup.desc":"Novietojiet peles rādītāju virs mūsu ikonām, lai skatītu plašāku informāciju.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Sensitīvu finanšu vietņu gadījumā pārslēgties uz bankas režīmu (jāinstalē Avast antivīruss un Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Sensitīvu finanšu vietņu gadījumā pārslēgties uz bankas režīmu (jāinstalē AVG antivīruss un AVG Secure Browser)",
"setting.dntBadge.name":"Rādīt kopējo izsekotāju skaitu vietnē",
"setting.dntBadge.desc":"Pievienojiet savā pārlūkprogrammā žetonu, lai uzreiz redzētu, cik daudz izsekotāju ir tīmekļa vietnē.",
"setting.dntAutoBlock.name":"Automātiski bloķēt visus izsekotājus",
"setting.dntAutoBlock.desc":"Bloķējiet visus izsekotājus katrā vietnē, ko apmeklējat.",
"setting.dntSocial.desc":"Bloķēt visu sociālo tīklu izsekotājus",
"setting.dntAdTracking.desc":"Bloķēt visas reklāmas izsekotājus",
"setting.dntWebAnalytics.desc":"Bloķēt visas tīmekļa analīzes izsekotājus",
"setting.dntOthers.desc":"Bloķēt cita satura izsekotājus",
"setting.communityIQ.name":"Atļaut lietojuma datus kopīgot ar trešajām pusēm analīzei",
"serp.safe.desc":"Šī vietne ir droša",
"serp.bad.desc":"Šī vietne, iespējams, ir neuzticama",
"serp.unknown.desc":"Šai vietnei nav novērtējuma",
"serp.unsafe.desc":"Šī vietne nav droša",
"topbar.openBankMode":"Atvērt bankas režīmā",
"topbar.desc":"Jūsu finanšu dati var būt redzami citiem.",
"topbar.tooltip":"Bankas režīms, kas ir daļa no Avast Secure Browser un ir instalēts kopā ar jūsu Avast pretvīrusu programmu, droši izolē iepirkšanās un bankas darbību sesijas, lai neļautu urķiem nozagt jūsu kredītkaršu numurus, paroles un citus personas datus.",
"topbar.dontShowAgain":"Vairs neradīt šo vietni"
},
ms:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Butiran",
"global.detailsHide":"Sembunyikan butiran",
"global.done":"Selesai",
"global.leaveSite":"Tinggalkan tapak",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} – Tapak tidak diketahui",
"background.icon.safe":"{0} – Tapak web ini selamat",
"background.icon.bad":"{0} – Tapak web ini mungkin tidak boleh dipercayai",
"background.icon.unsafe":"{0} – Tapak web ini tidak selamat",
"security.title":"Keselamatan",
"security.safe.title":"Tapak web ini selamat",
"security.safe.item1.desc":"Tiada pemancingan data",
"security.safe.item1.tooltip":"Kami tidak mengesan apa-apa percubaan untuk mencuri maklumat sensitif seperti kata laluan, nombor kad kredit dan sebagainya pada tapak web ini.",
"security.safe.item2.desc":"Tiada perisian hasad",
"security.safe.item2.tooltip":"Kami tidak mengesan sebarang kod berniat jahat pada tapak web ini.",
"security.safe.item3.desc":"Dipercayai",
"security.safe.item3.tooltip":"{0} pengguna telah menilai tapak web ini sebagai boleh dipercayai dengan mengklik {1} dalam {0} Online Security.",
"security.bad.title":"Tapak web ini mungkin tidak boleh dipercayai",
"security.bad.desc":"Kami tidak menemui sebarang ancaman pemancingan data atau perisian hasad di sini, tetapi ramai pengguna kami menilai tapak ini sebagai tidak baik.",
"security.unknown.title":"Tapak tidak diketahui",
"security.unknown.desc":"Kami tiada maklumat yang mencukupi lagi untuk menilai tapak web ini.",
"security.unsafe.title":"Tapak web ini tidak selamat",
"security.unsafe.phishing.desc":"Tapak web ini telah ditandai sebagai tapak pemancingan data. Pemancingan data adalah percubaan untuk mencuri maklumat sensitif daripada anda seperti kata laluan, nombor kad kredit dan sebagainya.",
"security.unsafe.malware.desc":"Kami menemui kod berniat jahat pada tapak web ini yang boleh memudaratkan komputer atau mencuri data peribadi anda.",
"rating.question.desc":"Adakah anda mempercayai {0}?",
"rating.negative":"Ada sebarang kandungan yang tidak wajar pada tapak web ini? (pilihan)",
"rating.thanks":"Terima kasih kerana membuat penilaian!",
"rating.trusted.desc":"Anda <i>percaya</i> {0}",
"rating.untrusted.desc":"Anda <i>tidak percaya</i> {0}",
"rating.revert.tooltip":"Klik untuk membuang penilaian anda",
"rating.tooltip":"Penilaian percaya atau tidak percaya daripada anda akan diambil kira dalam rating keselamatan kami untuk tapak web ini.",
"rating.category.pornography":"Pornografi",
"rating.category.violence":"Senjata/Keganasan",
"rating.category.gambling":"Perjudian",
"rating.category.drugs":"Alkohol/Dadah",
"rating.category.illegal":"Cetak rompak/Menyalahi undang-undang",
"rating.category.others":"Lain-lain",
"privacy.title":"Privasi",
"privacy.group.Social.desc":"Rangkaian sosial",
"privacy.group.Social.block.desc":"Sekat semua penjejakan rangkaian sosial",
"privacy.group.Social.block.tooltip":"Ini akan menyekat penjejakan rangkaian sosial pada setiap tapak web yang anda lawati.",
"privacy.group.Social.unblock.desc":"Nyahsekat semua penjejakan rangkaian sosial",
"privacy.group.Social.unblock.tooltip":"Ini akan membenarkan penjejakan rangkaian sosial pada setiap tapak web yang anda lawati.",
"privacy.group.AdTracking.desc":"Penjejakan Iklan",
"privacy.group.AdTracking.block.desc":"Sekat semua penjejakan iklan",
"privacy.group.AdTracking.block.tooltip":"Ini akan menyekat penjejakan iklan pada setiap tapak web yang anda lawati.",
"privacy.group.AdTracking.unblock.desc":"Nyahsekat semua penjejakan iklan",
"privacy.group.AdTracking.unblock.tooltip":"Ini akan membenarkan penjejakan iklan pada setiap tapak web yang anda lawati.",
"privacy.group.WebAnalytics.desc":"Analisis Web",
"privacy.group.WebAnalytics.block.desc":"Sekat semua penjejakan analisis web",
"privacy.group.WebAnalytics.block.tooltip":"Ini akan menyekat penjejakan analisis web pada setiap tapak web yang anda lawati.",
"privacy.group.WebAnalytics.unblock.desc":"Nyahsekat semua penjejakan analisis web",
"privacy.group.WebAnalytics.unblock.tooltip":"Ini akan membenarkan penjejakan lain pada setiap tapak web yang anda lawati.",
"privacy.group.Others.desc":"Lain-lain",
"privacy.group.Others.block.desc":"Sekat semua penjejakan lain",
"privacy.group.Others.block.tooltip":"Ini akan menyekat penjejakan lain pada setiap tapak web yang anda lawati.",
"privacy.group.Others.unblock.desc":"Nyahsekat semua penjejakan lain",
"privacy.trackersBlockedAll":"<i>Semua {0} penjejak</i> disekat pada {1}",
"privacy.trackersBlockedSome":"<i>{0} daripada {1} penjejak</i> disekat pada {2}",
"privacy.trackersBlockedNone":"<i>{0} menjejaki</i> sistem pada {1}",
"privacy.trackersBlocked":"{0} daripada {1} disekat",
"privacy.trackersFound":"{0} ditemui",
"privacy.trackersNone":"jangan buat apa-apa",
"privacy.trackerBlock.desc":"Sekat",
"privacy.trackerBlock.tooltip":"Ini akan menyekat [{0}] pada setiap tapak web yang anda lawati.",
"privacy.trackerUnblock.desc":"Disekat",
"privacy.trackerUnblock.tooltip":"Ini akan menyahsekat [{0}] pada setiap tapak web yang anda lawati.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Untuk menyahsekat penjejak tertentu, matikan sekatan automatik.",
"privacy.automaticBlocking.desc":"Sekat semua penjejak secara automatik",
"privacy.automaticBlocking.tooltip":"Kami akan menyekat semua penjejak yang ditemui secara automatik pada setiap tapak web yang anda lawati.",
"setting.title":"Tetapan",
"setting.serp.name":"Tandakan hasil carian saya",
"setting.serp.desc":"Tambahkan ikon berwarna pada hasil carian anda di Google, Yahoo! dan sebagainya untuk melihat hasil carian yang selamat untuk diklik. (Hijau = Selamat, Kelabu = Tidak diketahui, Merah = Tidak selamat)",
"setting.serpPopup.name":"Tunjukkan petua alat untuk hasil carian",
"setting.serpPopup.desc":"Apungkan penuding tetikus pada ikon kami untuk melihat maklumat lanjut.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Beralih kepada Mod Bank untuk tapak kewangan yang sensitif (Avast Antivirus dan Avast Secure Browser perlu dipasang)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Beralih kepada Mod Bank untuk tapak kewangan yang sensitif (AVG AntiVirus dan AVG Secure Browser perlu dipasang)",
"setting.dntBadge.name":"Tunjukkan jumlah penjejak pada tapak",
"setting.dntBadge.desc":"Tambahkan lencana pada pelayar anda untuk melihat dengan serta-merta jumlah penjejak pada mana-mana tapak web.",
"setting.dntAutoBlock.name":"Sekat semua penjejak secara automatik",
"setting.dntAutoBlock.desc":"Sekat semua penjejak yang dijumpai pada setiap tapak web yang anda lawati.",
"setting.dntSocial.desc":"Sekat semua penjejak rangkaian sosial",
"setting.dntAdTracking.desc":"Sekat semua penjejak iklan",
"setting.dntWebAnalytics.desc":"Sekat semua penjejak analisis web",
"setting.dntOthers.desc":"Sekat semua penjejak lain",
"setting.communityIQ.name":"Benarkan data penggunaan dikongsi dengan analisis pihak ke-3",
"serp.safe.desc":"Tapak ini selamat",
"serp.bad.desc":"Tapak web ini mungkin tidak boleh dipercayai",
"serp.unknown.desc":"Tapak ini tiada penilaian",
"serp.unsafe.desc":"Tapak ini tidak selamat",
"topbar.openBankMode":"Buka dalam mod bank",
"topbar.desc":"Data kewangan anda mungkin dapat dilihat oleh orang lain.",
"topbar.tooltip":"Mod Bank, sebahagian daripada Avast Secure Browser yang dipasang dengan antivirus Avast anda, mengasingkan sesi beli-belah dan perbankan dengan selamat untuk menghalang penggodam daripada mencuri nombor kad kredit, kata laluan dan data peribadi anda yang lain.",
"topbar.dontShowAgain":"Jangan tunjukkan pada tapak ini lagi"
},
nb:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Detaljer",
"global.detailsHide":"Skjul detaljer",
"global.done":"Utført",
"global.leaveSite":"Forlat nettstedet",
"global.switcher.off":"AV",
"global.switcher.on":"PÅ",
"background.icon.unknown":"{0} – ukjent nettsted",
"background.icon.safe":"{0} – dette nettstedet er trygt",
"background.icon.bad":"{0} – dette nettstedet kan være upålitelig",
"background.icon.unsafe":"{0} – dette nettstedet er usikkert",
"security.title":"Sikkerhet",
"security.safe.title":"Dette nettstedet er trygt",
"security.safe.item1.desc":"Ingen phishing",
"security.safe.item1.tooltip":"Vi har ikke oppdaget forsøk på å stjele sensitiv informasjon som passord, kortnummer osv. på dette nettstedet.",
"security.safe.item2.desc":"Ingen skadelig programvare",
"security.safe.item2.tooltip":"Vi har ikke oppdaget skadelig kode på dette nettstedet.",
"security.safe.item3.desc":"Klarert",
"security.safe.item3.tooltip":"{0} brukere har vurdert dette nettstedet som pålitelig ved å klikke på {1} i {0} Online Security.",
"security.bad.title":"Dette kan være upålitelig",
"security.bad.desc":"Vi fant ingen phishing-trusler eller skadelig programvare her, men mange av brukerne våre har gitt nettstedet tommel ned.",
"security.unknown.title":"Ukjent nettsted",
"security.unknown.desc":"Vi har foreløpig ikke nok informasjon til å vurdere dette nettstedet.",
"security.unsafe.title":"Dette nettstedet er usikkert",
"security.unsafe.phishing.desc":"Dette nettstedet er merket som et phishing-nettsted. Phishing er et forsøk på å stjele sensitiv informasjon som passord, kortnummer osv.",
"security.unsafe.malware.desc":"Vi har funnet skadelig kode på dette nettstedet, og det kan skade datamaskinen eller stjele privat informasjon fra deg.",
"rating.question.desc":"Stoler du på {0}?",
"rating.negative":"Er det upassende innhold på dette nettstedet? (valgfritt)",
"rating.thanks":"Takk for vurderingen!",
"rating.trusted.desc":"Du <i>stoler på</i> {0}",
"rating.untrusted.desc":"Du <i>stoler ikke på</i> {0}",
"rating.revert.tooltip":"Klikk for å fjerne vurderingen",
"rating.tooltip":"Når du gir tilbakemelding om at du stoler på eller ikke stoler på dette nettstedet, tas det med i sikkerhetsvurderingen vår av nettstedet.",
"rating.category.pornography":"Pornografi",
"rating.category.violence":"Våpen/vold",
"rating.category.gambling":"Pengespill",
"rating.category.drugs":"Alkohol/narkotika",
"rating.category.illegal":"Warez/ulovlig",
"rating.category.others":"Annet",
"privacy.title":"Personvern",
"privacy.group.Social.desc":"Sosiale nettverk",
"privacy.group.Social.block.desc":"Blokker all sporing fra sosiale nettverk",
"privacy.group.Social.block.tooltip":"Dette blokkerer sporing fra sosiale nettverk på alle nettsteder du besøker.",
"privacy.group.Social.unblock.desc":"Opphev all blokkering av sporing fra sosiale nettverk",
"privacy.group.Social.unblock.tooltip":"Dette tillater sporing fra sosiale nettverk på alle nettsteder du besøker.",
"privacy.group.AdTracking.desc":"Reklamesporing",
"privacy.group.AdTracking.block.desc":"Blokker all reklamesporing",
"privacy.group.AdTracking.block.tooltip":"Dette blokkerer reklamesporing på alle nettsteder du besøker.",
"privacy.group.AdTracking.unblock.desc":"Opphev blokkering av all reklamesporing",
"privacy.group.AdTracking.unblock.tooltip":"Dette tillater reklamesporing på alle nettsteder du besøker.",
"privacy.group.WebAnalytics.desc":"Webanalyse",
"privacy.group.WebAnalytics.block.desc":"Blokker all webanalysesporing",
"privacy.group.WebAnalytics.block.tooltip":"Dette blokkerer webanalysesporing på alle nettsteder du besøker.",
"privacy.group.WebAnalytics.unblock.desc":"Opphev blokkering av all webanalysesporing",
"privacy.group.WebAnalytics.unblock.tooltip":"Dette tillater annen sporing på alle nettsteder du besøker.",
"privacy.group.Others.desc":"Andre",
"privacy.group.Others.block.desc":"Blokker all annen sporing",
"privacy.group.Others.block.tooltip":"Dette blokkerer annen sporing på alle nettsteder du besøker.",
"privacy.group.Others.unblock.desc":"Opphev blokkering av all annen sporing",
"privacy.trackersBlockedAll":"<i>{0} av 1 sporingstjeneste</i> blokkert på {1} | <i>Alle {0} sporingstjenester</i> blokkert på {1}",
"privacy.trackersBlockedSome":"<i>{0} av {1} sporingstjeneste</i> blokkert på {2} | <i>{0} av {1} sporingstjenester</i> blokkert på {2}",
"privacy.trackersBlockedNone":"<i>{0} sporingssystem</i> på {1} | <i>{0} sporingssystemer</i> på {1}",
"privacy.trackersBlocked":"{0} av {1} blokkert",
"privacy.trackersFound":"{0} funnet",
"privacy.trackersNone":"ingenting",
"privacy.trackerBlock.desc":"Blokker",
"privacy.trackerBlock.tooltip":"Dette blokkerer [{0}] på alle nettsteder du besøker.",
"privacy.trackerUnblock.desc":"Blokkert",
"privacy.trackerUnblock.tooltip":"Dette opphever blokkeringen av [{0}] på alle nettsteder du besøker.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Hvis du vil oppheve blokkeringen av en bestemt sporingstjeneste, må du slå av automatisk sporing.",
"privacy.automaticBlocking.desc":"Blokker all sporing automatisk",
"privacy.automaticBlocking.tooltip":"Vi blokkerer automatisk all sporing vi finner på alle nettsteder du besøker.",
"setting.title":"Innstillinger",
"setting.serp.name":"Marker søkeresultatene mine",
"setting.serp.desc":"Legg til fargede ikoner på søkeresultatene dine på Google, Yahoo! osv. for å se hvilke resultater som er trygge å klikke på. (Grønn = trygt, grå = ukjent, rødt = usikkert.)",
"setting.serpPopup.name":"Vis verktøytips for søkeresultater",
"setting.serpPopup.desc":"Hold musen over ikonene for å se mer informasjon.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Bytt til bankmodus på nettsteder med sensitive økonomiske data (Avast Antivirus og Avast Secure Browser må være installert)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Bytt til bankmodus på nettsteder med sensitive økonomidata (AVG AntiVirus og AVG Secure Browser må være installert)",
"setting.dntBadge.name":"Vis totalt antall sporingstjenester på nettstedet",
"setting.dntBadge.desc":"Legg til et merke i nettleseren for å se hvor mange sporingstjenester som er på et nettsted med en gang.",
"setting.dntAutoBlock.name":"Blokker all sporing automatisk",
"setting.dntAutoBlock.desc":"Blokker all sporing som er funnet, på alle nettsteder du besøker.",
"setting.dntSocial.desc":"Blokker all sporing fra sosiale nettverk",
"setting.dntAdTracking.desc":"Blokker all reklamesporing",
"setting.dntWebAnalytics.desc":"Blokker all webanalysesporing",
"setting.dntOthers.desc":"Blokker all annen sporing",
"setting.communityIQ.name":"Tillat at bruksdata deles med tredjeparter for analyse",
"serp.safe.desc":"Dette nettstedet er trygt",
"serp.bad.desc":"Dette nettstedet kan være upålitelig",
"serp.unknown.desc":"Dette nettstedet er ikke vurdert",
"serp.unsafe.desc":"Dette nettstedet er usikkert",
"topbar.openBankMode":"Åpne i bankmodus",
"topbar.desc":"Økonomidataene dine kan være synlige for andre.",
"topbar.tooltip":"Bankmodus er en del av Avasts Secure Browser som ble installert med Avast Antivirus og isolerer netthandel og nettbanker for å hindre hackere i å stjele kredittkortnumre, passord og andre private data.",
"topbar.dontShowAgain":"Ikke vis for dette nettstedet igjen"
},
nl:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Bèta",
"global.detailsShow":"Details",
"global.detailsHide":"Details verbergen",
"global.done":"Gereed",
"global.leaveSite":"Website verlaten",
"global.switcher.off":"UIT",
"global.switcher.on":"AAN",
"background.icon.unknown":"{0} - Onbekende website",
"background.icon.safe":"{0} - Deze website is veilig",
"background.icon.bad":"{0} - Deze website is mogelijk onbetrouwbaar",
"background.icon.unsafe":"{0} - Deze website is niet veilig",
"security.title":"Beveiliging",
"security.safe.title":"Deze website is veilig",
"security.safe.item1.desc":"Geen phishing",
"security.safe.item1.tooltip":"Voor zover wij kunnen nagaan wordt op deze website niet geprobeerd vertrouwelijke gegevens (zoals wachtwoorden en creditcardnummers) te stelen.",
"security.safe.item2.desc":"Geen malware",
"security.safe.item2.tooltip":"Er is geen schadelijke code op deze website gevonden.",
"security.safe.item3.desc":"Vertrouwd",
"security.safe.item3.tooltip":"{0} gebruikers hebben deze website aangemerkt als betrouwbaar door te klikken op {1} in {0} Online Security.",
"security.bad.title":"Deze website is mogelijk onbetrouwbaar",
"security.bad.desc":"Er zijn geen phishing-dreigingen of malware gevonden, maar veel van onze gebruikers hebben geen goed gevoel over deze website.",
"security.unknown.title":"Onbekende site",
"security.unknown.desc":"Er zijn nog niet genoeg gegevens om deze website te kunnen beoordelen.",
"security.unsafe.title":"Deze website is niet veilig",
"security.unsafe.phishing.desc":"Deze website is aangemerkt als een phishing-site. Bij phishing wordt geprobeerd vertrouwelijke gegevens, zoals wachtwoorden en creditcardnummers, te stelen.",
"security.unsafe.malware.desc":"Er is schadelijke code gevonden op deze website die uw computer kan schaden of waarmee persoonlijke gegevens kunnen worden gestolen.",
"rating.question.desc":"Vertrouwt u {0}?",
"rating.negative":"Hebt u ongepaste inhoud aangetroffen op deze website? (Optioneel.)",
"rating.thanks":"Bedankt voor uw beoordeling!",
"rating.trusted.desc":"U <i>vertrouwt</i> {0}",
"rating.untrusted.desc":"U vertrouwt {0} <i>niet</i>",
"rating.revert.tooltip":"Klik hier om uw beoordeling te verwijderen",
"rating.tooltip":"Uw vertrouwen of wantrouwen wordt meegenomen in de veiligheidsbeoordeling van deze website.",
"rating.category.pornography":"Porno",
"rating.category.violence":"Wapens/geweld",
"rating.category.gambling":"Gokken",
"rating.category.drugs":"Alcohol/drugs",
"rating.category.illegal":"Warez/illegaal",
"rating.category.others":"Overig",
"privacy.title":"Privacy",
"privacy.group.Social.desc":"Sociale netwerken",
"privacy.group.Social.block.desc":"Tracering door sociale netwerken volledig blokkeren",
"privacy.group.Social.block.tooltip":"Hiermee blokkeert u de tracering door sociale netwerken op elke website die u bezoekt.",
"privacy.group.Social.unblock.desc":"Blokkering van tracering op sociale netwerken volledig opheffen",
"privacy.group.Social.unblock.tooltip":"Hiermee staat u tracering door sociale netwerken toe op elke website die u bezoekt.",
"privacy.group.AdTracking.desc":"Advertentietracering",
"privacy.group.AdTracking.block.desc":"Advertentietracering volledig blokkeren",
"privacy.group.AdTracking.block.tooltip":"Hiermee blokkeert u advertentietracering op elke website die u bezoekt.",
"privacy.group.AdTracking.unblock.desc":"Blokkering van advertentietracering volledig opheffen",
"privacy.group.AdTracking.unblock.tooltip":"Hiermee staat u advertentietracering toe op elke website die u bezoekt.",
"privacy.group.WebAnalytics.desc":"Webanalyses",
"privacy.group.WebAnalytics.block.desc":"Tracering voor webanalyse volledig blokkeren",
"privacy.group.WebAnalytics.block.tooltip":"Hiermee blokkeert u webanalysetracking op elke website die u bezoekt.",
"privacy.group.WebAnalytics.unblock.desc":"Blokkering van alle webanalysetracking opheffen",
"privacy.group.WebAnalytics.unblock.tooltip":"Hiermee staat u overige tracking toe op elke website die u bezoekt.",
"privacy.group.Others.desc":"Overig",
"privacy.group.Others.block.desc":"Alle overige tracking blokkeren",
"privacy.group.Others.block.tooltip":"Hiermee blokkeert u alle overige tracking op elke website die u bezoekt.",
"privacy.group.Others.unblock.desc":"Blokkering van alle overige tracking opheffen",
"privacy.trackersBlockedAll":"<i>Elke {0} tracker</i> geblokkeerd op {1} | <i>Alle {0} trackers</i> geblokkeerd op {1}",
"privacy.trackersBlockedSome":"<i>{0} van {1} tracker</i> geblokkeerd op {2} | <i>{0} van {1} trackers</i> geblokkeerd op {2}",
"privacy.trackersBlockedNone":"<i>{0} tracking</i>systeem is ingeschakeld {1} | <i>{0} tracking</i>systemen zijn ingeschakeld {1}",
"privacy.trackersBlocked":"{0} van {1} geblokkeerd",
"privacy.trackersFound":"{0} gevonden",
"privacy.trackersNone":"niets",
"privacy.trackerBlock.desc":"Blokkeren",
"privacy.trackerBlock.tooltip":"Hiermee blokkeert u {0} op elke website die u bezoekt.",
"privacy.trackerUnblock.desc":"Geblokkeerd",
"privacy.trackerUnblock.tooltip":"Hiermee heft u de blokkering van {0} op op elke website die u bezoekt.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Als u de blokkering van een specifieke tracker wilt opheffen, moet u de functie voor automatisch blokkeren uitschakelen.",
"privacy.automaticBlocking.desc":"Alle trackers automatisch blokkeren",
"privacy.automaticBlocking.tooltip":"Hiermee blokkeert u automatisch alle gevonden trackers op elke website die u bezoekt.",
"setting.title":"Instellingen",
"setting.serp.name":"Mijn zoekresultaten markeren",
"setting.serp.desc":"Voeg gekleurde pictogrammen toe aan uw zoekresultaten in Google, Yahoo!, enz., om te zien op welke resultaten u veilig kunt klikken. (Groen = veilig, grijs = onbekend, rood = niet veilig.)",
"setting.serpPopup.name":"Knopinfo weergeven voor zoekresultaten",
"setting.serpPopup.desc":"Wijs de pictogrammen aan met de muis voor meer informatie.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Bankmodus activeren bij privacygevoelige financiële sites (installatie van Avast Antivirus en Avast Secure Browser vereist)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Activeer Bankmodus voor privacygevoelige financiële sites (installatie van AVG AntiVirus en AVG Secure Browser vereist)",
"setting.dntBadge.name":"Totaal aantal trackers op een website weergeven",
"setting.dntBadge.desc":"Voeg een badge toe aan uw browser om meteen te kunnen zien hoeveel trackers een website bevat.",
"setting.dntAutoBlock.name":"Alle trackers automatisch blokkeren",
"setting.dntAutoBlock.desc":"Blokkeer alle gevonden trackers op elke website die u bezoekt.",
"setting.dntSocial.desc":"Alle trackers van sociale netwerken blokkeren",
"setting.dntAdTracking.desc":"Alle advertentietrackers blokkeren",
"setting.dntWebAnalytics.desc":"Alle webanalysetrackers blokkeren",
"setting.dntOthers.desc":"Alle overige trackers blokkeren",
"setting.communityIQ.name":"Toestaan dat gegevens worden gedeeld voor analyse door derden",
"serp.safe.desc":"Deze website is veilig",
"serp.bad.desc":"Deze website is mogelijk onbetrouwbaar",
"serp.unknown.desc":"Deze website is nog niet beoordeeld",
"serp.unsafe.desc":"Deze website is niet veilig",
"topbar.openBankMode":"Openen in Bankmodus",
"topbar.desc":"Uw financiële gegevens zijn mogelijk zichtbaar voor anderen.",
"topbar.tooltip":"Bankmodus, onderdeel van de Avast Secure Browser die is geïnstalleerd met Avast Antivirus, schermt winkel- en banksessies op een veilige manier af om te voorkomen dat hackers uw creditcardnummers, wachtwoorden en andere privégegevens stelen.",
"topbar.dontShowAgain":"Niet meer weergeven voor deze website"
},
pl:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Szczegóły",
"global.detailsHide":"Ukryj szczegóły",
"global.done":"Gotowe",
"global.leaveSite":"Opuść witrynę",
"global.switcher.off":"WYŁ",
"global.switcher.on":"WŁ.",
"background.icon.unknown":"{0} — Nieznana witryna",
"background.icon.safe":"{0} — Ta witryna jest bezpieczna",
"background.icon.bad":"{0} — Ta witryna może być niegodna zaufania",
"background.icon.unsafe":"{0} — Ta witryna jest niebezpieczna",
"security.title":"Bezpieczeństwo",
"security.safe.title":"Ta witryna jest bezpieczna",
"security.safe.item1.desc":"Brak phishingu",
"security.safe.item1.tooltip":"Nie wykryliśmy w tej witrynie żadnych prób kradzieży informacji poufnych, takich jak hasła, numery kart kredytowych itd.",
"security.safe.item2.desc":"Brak złośliwego oprogramowania",
"security.safe.item2.tooltip":"Nie wykryliśmy w tej witrynie żadnego złośliwego kodu.",
"security.safe.item3.desc":"Zaufana",
"security.safe.item3.tooltip":"Użytkownicy {0} ocenili tę stronę jako godną zaufania, klikając ikonę {1} w {0} Online Security.",
"security.bad.title":"To może być niegodne zaufania",
"security.bad.desc":"Nie znaleźliśmy w tej witrynie żadnego phishingu ani złośliwego oprogramowania, ale wielu naszych użytkowników oceniło ją negatywnie.",
"security.unknown.title":"Nieznana witryna",
"security.unknown.desc":"Na razie mamy za mało informacji, aby ocenić tę witrynę internetową.",
"security.unsafe.title":"Ta witryna jest niebezpieczna",
"security.unsafe.phishing.desc":"Ta witryna internetowa została oznaczona jako phishingowa. Phishing to próba kradzieży informacji poufnych, takich jak hasła, numery kart kredytowych itd.",
"security.unsafe.malware.desc":"W tej witrynie internetowej znaleźliśmy złośliwy kod, który może uszkodzić Twój komputer lub ukraść poufne dane.",
"rating.question.desc":"Czy ufasz witrynie {0}?",
"rating.negative":"Czy ta witryna zawiera nieodpowiednie treści? (opcjonalnie)",
"rating.thanks":"Dziękujemy za dokonanie oceny!",
"rating.trusted.desc":"<i>Ufasz</i> witrynie {0}",
"rating.untrusted.desc":"<i>Nie ufasz</i> witrynie {0}",
"rating.revert.tooltip":"Kliknij, aby usunąć swoją ocenę",
"rating.tooltip":"Twoje zaufanie lub jego brak zostaną wliczone do naszej oceny bezpieczeństwa tej witryny.",
"rating.category.pornography":"Pornografia",
"rating.category.violence":"Broń / Przemoc",
"rating.category.gambling":"Hazard",
"rating.category.drugs":"Alkohol / Narkotyki",
"rating.category.illegal":"Pirackie / Nielegalne",
"rating.category.others":"Inne",
"privacy.title":"Prywatność",
"privacy.group.Social.desc":"Sieci społecznościowe",
"privacy.group.Social.block.desc":"Blokuj całe śledzenie sieci społecznościowych",
"privacy.group.Social.block.tooltip":"Zablokuje to śledzenie sieci społecznościowych na każdej odwiedzanej stronie.",
"privacy.group.Social.unblock.desc":"Odblokuj całe śledzenie sieci społecznościowych",
"privacy.group.Social.unblock.tooltip":"Zezwoli to na śledzenie sieci społecznościowych na każdej odwiedzanej stronie.",
"privacy.group.AdTracking.desc":"Reklamy śledzące",
"privacy.group.AdTracking.block.desc":"Blokuj wszystkie reklamy śledzące",
"privacy.group.AdTracking.block.tooltip":"Zablokuje to reklamy śledzące na każdej odwiedzanej stronie.",
"privacy.group.AdTracking.unblock.desc":"Odblokuj wszystkie reklamy śledzące",
"privacy.group.AdTracking.unblock.tooltip":"Zezwoli to na reklamy śledzące na każdej odwiedzanej stronie.",
"privacy.group.WebAnalytics.desc":"Analizy działań w sieci",
"privacy.group.WebAnalytics.block.desc":"Blokuj całe śledzenie analiz działań w sieci",
"privacy.group.WebAnalytics.block.tooltip":"Zablokuje to śledzenie analiz działań w sieci na każdej odwiedzanej stronie.",
"privacy.group.WebAnalytics.unblock.desc":"Odblokuj całe śledzenie analiz działań w sieci",
"privacy.group.WebAnalytics.unblock.tooltip":"Zezwoli to na inne działania śledzące na każdej odwiedzanej stronie.",
"privacy.group.Others.desc":"Inne",
"privacy.group.Others.block.desc":"Blokuj wszelkie inne śledzenie",
"privacy.group.Others.block.tooltip":"Zablokuje to inne działania śledzące na każdej odwiedzanej stronie.",
"privacy.group.Others.unblock.desc":"Odblokuj wszelkie inne śledzenie",
"privacy.trackersBlockedAll":"W witrynie {1} zablokowano <i>{0} znaleziony plik śledzący</i> | W witrynie {1} zablokowano <i>wszystkie {0} znalezione pliki śledzące</i> | W witrynie {1} zablokowano <i>wszystkich {0} znalezionych plików śledzących</i> | W witrynie {1} zablokowano <i>wszystkich {0} znalezionych plików śledzących</i>",
"privacy.trackersBlockedSome":"W witrynie {2} zablokowano <i>{0} z {1} plików śledzących</i> | W witrynie {2} zablokowano <i>{0} z {1} plików śledzących</i> | W witrynie {2} zablokowano <i>{0} z {1} plików śledzących</i> | W witrynie {2} zablokowano <i>{0} z {1} plików śledzących</i>",
"privacy.trackersBlockedNone":"<i>{0} system śledzący</i> w witrynie {1} | <i>{0} systemy śledzące</i> w witrynie {1} | <i>{0} systemów śledzących</i> w witrynie {1} | <i>{0} systemów śledzących</i> w witrynie {1}",
"privacy.trackersBlocked":"Zablokowano {0} z {1}",
"privacy.trackersFound":"Znaleziono {0}",
"privacy.trackersNone":"nic",
"privacy.trackerBlock.desc":"Blokuj",
"privacy.trackerBlock.tooltip":"Zablokuje to [{0}] na każdej odwiedzanej stronie.",
"privacy.trackerUnblock.desc":"Zablokowano",
"privacy.trackerUnblock.tooltip":"Odblokuje to [{0}] na każdej odwiedzanej stronie.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Aby odblokować konkretny plik śledzący, wyłącz automatyczne blokowanie.",
"privacy.automaticBlocking.desc":"Automatycznie blokuj wszystkie pliki śledzące",
"privacy.automaticBlocking.tooltip":"Będziemy automatycznie blokować wszystkie znalezione pliki śledzące na każdej odwiedzanej stronie.",
"setting.title":"Ustawienia",
"setting.serp.name":"Oznaczaj wyniki wyszukiwania",
"setting.serp.desc":"Dodawaj kolorowe ikony do wyników wyszukiwania w serwisach Google, Yahoo! itp., aby widzieć, które wyniki można bezpiecznie kliknąć. (zielony = bezpieczne, szary = nieznane, czerwony = niebezpieczne)",
"setting.serpPopup.name":"Pokazuj porady dla wyników wyszukiwania",
"setting.serpPopup.desc":"Umieszczaj wskaźnik myszy na ikonach, aby wyświetlić więcej informacji.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Przełącz się do Trybu bankowego w przypadku stron obsługujących poufne transakcje finansowe (wymaga zainstalowania Avast Antivirus i Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Przełącz się do Trybu bankowego w przypadku stron obsługujących poufne transakcje finansowe (wymaga zainstalowania AVG AntiVirus i AVG Secure Browser)",
"setting.dntBadge.name":"Pokazuj całkowitą liczbę plików śledzących na stronie",
"setting.dntBadge.desc":"Dodaj znaczek do przeglądarki, aby od razu widzieć, ile plików śledzących jest na każdej stronie.",
"setting.dntAutoBlock.name":"Automatycznie blokuj wszystkie pliki śledzące",
"setting.dntAutoBlock.desc":"Blokuj wszystkie znalezione pliki śledzące na każdej odwiedzanej stronie.",
"setting.dntSocial.desc":"Blokuj wszystkie pliki śledzące sieci społecznościowych",
"setting.dntAdTracking.desc":"Blokuj wszystkie pliki śledzące reklam",
"setting.dntWebAnalytics.desc":"Blokuj wszystkie pliki śledzące analiz działań w sieci",
"setting.dntOthers.desc":"Blokuj wszystkie inne pliki śledzące",
"setting.communityIQ.name":"Zezwalaj na udostępnianie danych o użytkowaniu innym firmom w celu analizy",
"serp.safe.desc":"Ta witryna jest bezpieczna",
"serp.bad.desc":"Ta witryna może być niegodna zaufania",
"serp.unknown.desc":"Ta witryna nie ma oceny reputacji",
"serp.unsafe.desc":"Ta witryna jest niebezpieczna",
"topbar.openBankMode":"Otwórz w trybie bankowym",
"topbar.desc":"Twoje dane finansowe mogą być widoczne dla innych.",
"topbar.tooltip":"Tryb bankowy, część oprogramowania Avast Secure Browser instalowanego razem z antywirusem Avast, w bezpieczny sposób izoluje sesje zakupów i bankowości, aby uniemożliwić hakerom kradzież numerów Twoich kart kredytowych, haseł oraz innych prywatnych danych.",
"topbar.dontShowAgain":"Nie pokazuj ponownie w tej witrynie"
},
pt_BR:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Detalhes",
"global.detailsHide":"Ocultar detalhes",
"global.done":"Concluído",
"global.leaveSite":"Sair do site",
"global.switcher.off":"DES",
"global.switcher.on":"LIG",
"background.icon.unknown":"{0} - Site desconhecido",
"background.icon.safe":"{0} - Este site é seguro",
"background.icon.bad":"{0} - Este site pode não ser confiável",
"background.icon.unsafe":"{0} - Este site não é seguro",
"security.title":"Segurança",
"security.safe.title":"Este site é seguro",
"security.safe.item1.desc":"Sem phishing",
"security.safe.item1.tooltip":"Não detectamos tentativas de roubar informações confidenciais, como senhas, números de cartão de crédito, etc, neste site.",
"security.safe.item2.desc":"Sem malware",
"security.safe.item2.tooltip":"Não detectamos códigos maliciosos no site.",
"security.safe.item3.desc":"Confiável",
"security.safe.item3.tooltip":"Os usuários do {0} classificaram este site como confiável ao clicar em {1} no {0} Online Security.",
"security.bad.title":"Este site pode não ser confiável",
"security.bad.desc":"Não encontramos ameaças de phishing ou malware aqui, mas muitos dos nossos usuários não gostaram do site.",
"security.unknown.title":"Site desconhecido",
"security.unknown.desc":"Ainda não temos informações suficientes para classificar este site.",
"security.unsafe.title":"Este site não é seguro",
"security.unsafe.phishing.desc":"Este site foi marcado como um site de phishing. Phishing é uma tentativa de roubar informações sigilosas como senhas, números de cartão de crédito, etc.",
"security.unsafe.malware.desc":"Encontramos código maligno neste site, que poderia prejudicar seu computador ou roubar seus dados privados.",
"rating.question.desc":"Confia em {0}?",
"rating.negative":"Existe conteúdo impróprio neste site? (opcional)",
"rating.thanks":"Obrigado pela avaliação!",
"rating.trusted.desc":"Você <i>confia</i> no {0}",
"rating.untrusted.desc":"Você não <i>confia</i> no {0}",
"rating.revert.tooltip":"Clique para remover a sua avaliação",
"rating.tooltip":"A sua confiança ou desconfiança será considerada na avaliação de segurança deste site.",
"rating.category.pornography":"Pornografia",
"rating.category.violence":"Armas / Violência",
"rating.category.gambling":"Jogos de azar",
"rating.category.drugs":"Álcool / Drogas",
"rating.category.illegal":"Warez / Ilegal",
"rating.category.others":"Outros",
"privacy.title":"Privacidade",
"privacy.group.Social.desc":"Redes sociais",
"privacy.group.Social.block.desc":"Bloquear o rastreamento de redes sociais",
"privacy.group.Social.block.tooltip":"Esta opção bloqueará o rastreamento de redes sociais em todos os sites visitados.",
"privacy.group.Social.unblock.desc":"Desbloquear o rastreamento de redes sociais",
"privacy.group.Social.unblock.tooltip":"Esta opção permitirá o rastreamento de redes sociais em todos os sites visitados.",
"privacy.group.AdTracking.desc":"Rastreamento de publicidade",
"privacy.group.AdTracking.block.desc":"Bloquear todo o rastreamento de publicidade",
"privacy.group.AdTracking.block.tooltip":"Esta opção bloqueará o rastreamento de publicidade em todos os sites visitados.",
"privacy.group.AdTracking.unblock.desc":"Desbloquear todo o rastreamento de publicidade",
"privacy.group.AdTracking.unblock.tooltip":"Esta opção permitirá o rastreamento de publicidade em todos os sites visitados.",
"privacy.group.WebAnalytics.desc":"Análises web",
"privacy.group.WebAnalytics.block.desc":"Bloquear todo o rastreamento de análises web",
"privacy.group.WebAnalytics.block.tooltip":"Esta opção bloqueará o rastreamento de análises web em todos os sites visitados.",
"privacy.group.WebAnalytics.unblock.desc":"Desbloquear todo o rastreamento de análises web",
"privacy.group.WebAnalytics.unblock.tooltip":"Esta opção permitirá outros tipos de rastreamento em todos os sites visitados.",
"privacy.group.Others.desc":"Outros",
"privacy.group.Others.block.desc":"Bloquear todos os outros tipos de rastreamento",
"privacy.group.Others.block.tooltip":"Esta opção bloqueará outros tipos de rastreamento em todos os sites visitados.",
"privacy.group.Others.unblock.desc":"Desbloquear os outros tipos de rastreamento",
"privacy.trackersBlockedAll":"<i>{0} rastreador</i> bloqueado em {1} | <i>{0} rastreadores</i> bloqueados em {1}",
"privacy.trackersBlockedSome":"<i>{0} de {1} rastreador</i> bloqueado em {2} | <i>{0} de {1} rastreadores</i> bloqueados em {2}",
"privacy.trackersBlockedNone":"<i>{0} rastreamento</i> em {1} | <i>{0} rastreamentos</i> em {1}",
"privacy.trackersBlocked":"{0} de {1} bloqueados",
"privacy.trackersFound":"{0} encontrado(s)",
"privacy.trackersNone":"nada",
"privacy.trackerBlock.desc":"Bloquear",
"privacy.trackerBlock.tooltip":"Esta opção bloqueará [{0}] em todos os sites visitados.",
"privacy.trackerUnblock.desc":"Bloqueado",
"privacy.trackerUnblock.tooltip":"Esta opção desbloqueará [{0}] em todos os sites visitados.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Para desbloquear um rastreador específico, desative o bloqueio automático.",
"privacy.automaticBlocking.desc":"Bloquear automaticamente todos os rastreadores",
"privacy.automaticBlocking.tooltip":"Bloquearemos automaticamente todos os rastreadores encontrados em todos os sites visitados.",
"setting.title":"Configurações",
"setting.serp.name":"Marcar os resultados de pesquisas",
"setting.serp.desc":"Adicione ícones coloridos aos resultados de pesquisas no Google, Yahoo!, etc., para ver em que resultados é seguro clicar. (Verde = Seguro, Cinza = Desconhecido, Vermelho = Perigoso)",
"setting.serpPopup.name":"Mostrar dicas para resultados de pesquisas",
"setting.serpPopup.desc":"Passe o ponteiro do mouse sobre nossos ícones para ver mais informações.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Mudar para o Modo Banco no caso de sites bancários (é necessário ter o Avast Antivirus e o Avast Secure Browser instalados)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Mudar para o Modo Banco e acessar sites bancários (é necessário ter o AVG AntiVirus e o AVG Secure Browser instalados)",
"setting.dntBadge.name":"Mostrar total de rastreadores em um site",
"setting.dntBadge.desc":"Adicione um emblema ao navegador para ver imediatamente quantos rastreadores estão em um site.",
"setting.dntAutoBlock.name":"Bloquear automaticamente todos os rastreadores",
"setting.dntAutoBlock.desc":"Bloqueie todos os rastreadores encontrados em todos os sites visitados.",
"setting.dntSocial.desc":"Bloquear todos os rastreadores de redes sociais",
"setting.dntAdTracking.desc":"Bloquear todos os rastreadores de publicidade",
"setting.dntWebAnalytics.desc":"Bloquear todos os rastreadores de análises web",
"setting.dntOthers.desc":"Bloquear todos os outros rastreadores",
"setting.communityIQ.name":"Permitir que os dados de uso sejam compartilhados com terceiros para análise",
"serp.safe.desc":"Este site é seguro",
"serp.bad.desc":"Este site pode não ser confiável",
"serp.unknown.desc":"Este site não tem avaliação",
"serp.unsafe.desc":"Este site não é seguro",
"topbar.openBankMode":"Abrir no Modo Banco",
"topbar.desc":"Os seus dados financeiros poderão ser vistos por outras pessoas.",
"topbar.tooltip":"O Modo Banco, incluído no Avast Secure Browser que é instalado com o Avast Antivirus, isola sessões de compras e operações bancárias de forma segura para impedir que cibercriminosos roubem os seus números de cartões de crédito, senhas e outros dados privados.",
"topbar.dontShowAgain":"Não mostrar neste site novamente"
},
pt_PT:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Detalhes",
"global.detailsHide":"Ocultar detalhes",
"global.done":"Concluído",
"global.leaveSite":"Sair do site",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - Site desconhecido",
"background.icon.safe":"{0} - Este site é seguro",
"background.icon.bad":"{0} - Este site pode não ser fidedigno",
"background.icon.unsafe":"{0} - Este site não é seguro",
"security.title":"Segurança",
"security.safe.title":"Este site é seguro",
"security.safe.item1.desc":"Sem phishing",
"security.safe.item1.tooltip":"Não detetámos tentativas de roubo de informações sensíveis, como palavras-passe, números de cartões de crédito, etc., neste site.",
"security.safe.item2.desc":"Sem malware",
"security.safe.item2.tooltip":"Não detetámos qualquer código malicioso neste site.",
"security.safe.item3.desc":"Fidedigno",
"security.safe.item3.tooltip":"Os utilizadores do {0} classificaram este site como fidedigno clicando em {1} no {0} Online Security.",
"security.bad.title":"Pode não ser fidedigno",
"security.bad.desc":"Não encontrámos ameaças de phishing ou malware aqui, mas muitos dos nossos utilizadores não gostaram do site.",
"security.unknown.title":"Site desconhecido",
"security.unknown.desc":"Ainda não temos informações suficientes para classificar este site.",
"security.unsafe.title":"Este site não é seguro",
"security.unsafe.phishing.desc":"Este site foi marcado como site de phishing. O phishing é uma tentativa de roubar informações sensíveis dos utilizadores, tais como palavras-passe, números de cartões de crédito, etc.",
"security.unsafe.malware.desc":"Encontrámos código malicioso neste site que pode causar danos no seu computador ou roubar os seus dados privados.",
"rating.question.desc":"Confia em {0}?",
"rating.negative":"Existe conteúdo impróprio neste site? (opcional)",
"rating.thanks":"Obrigado pela sua avaliação!",
"rating.trusted.desc":"<i>Confia</i> em {0}",
"rating.untrusted.desc":"<i>Não confia</i> em {0}",
"rating.revert.tooltip":"Clique para remover a sua avaliação",
"rating.tooltip":"A sua confiança ou desconfiança será tida em conta na nossa avaliação de segurança deste site.",
"rating.category.pornography":"Pornografia",
"rating.category.violence":"Armas / Violência",
"rating.category.gambling":"Jogos de azar",
"rating.category.drugs":"Álcool / Drogas",
"rating.category.illegal":"Pirataria / Ilegal",
"rating.category.others":"Outros",
"privacy.title":"Privacidade",
"privacy.group.Social.desc":"Redes sociais",
"privacy.group.Social.block.desc":"Bloquear o rastreamento de redes sociais",
"privacy.group.Social.block.tooltip":"Esta opção bloqueará o rastreamento de redes sociais em todos os sites visitados.",
"privacy.group.Social.unblock.desc":"Desbloquear o rastreamento de redes sociais",
"privacy.group.Social.unblock.tooltip":"Esta opção permitirá o rastreamento de redes sociais em todos os sites visitados.",
"privacy.group.AdTracking.desc":"Rastreamento de Publicidade",
"privacy.group.AdTracking.block.desc":"Bloquear o rastreamento de publicidade",
"privacy.group.AdTracking.block.tooltip":"Esta opção bloqueará o rastreamento de publicidade em todos os sites visitados.",
"privacy.group.AdTracking.unblock.desc":"Desbloquear o rastreamento de publicidade",
"privacy.group.AdTracking.unblock.tooltip":"Esta opção permitirá o rastreamento de publicidade em todos os sites visitados.",
"privacy.group.WebAnalytics.desc":"Estatísticas Web",
"privacy.group.WebAnalytics.block.desc":"Bloquear o rastreamento de estatísticas Web",
"privacy.group.WebAnalytics.block.tooltip":"Esta opção bloqueará o rastreamento de estatísticas Web em todos os sites visitados.",
"privacy.group.WebAnalytics.unblock.desc":"Desbloquear o rastreamento de estatísticas Web",
"privacy.group.WebAnalytics.unblock.tooltip":"Esta opção permitirá outros tipos de rastreamento em todos os sites visitados.",
"privacy.group.Others.desc":"Outros",
"privacy.group.Others.block.desc":"Bloquear os outros tipos de rastreamento",
"privacy.group.Others.block.tooltip":"Esta opção bloqueará outros tipos de rastreamento em todos os sites visitados.",
"privacy.group.Others.unblock.desc":"Desbloquear os outros tipos de rastreamento",
"privacy.trackersBlockedAll":"<i>{0} rastreador</i> bloqueado em {1} | <i>{0} rastreadores</i> bloqueados em {1}",
"privacy.trackersBlockedSome":"<i>{0} de {1} rastreador</i> bloqueado em {2} | <i>{0} de {1} rastreadores</i> bloqueados em {2}",
"privacy.trackersBlockedNone":"<i>{0} sistema de rastreamento</i> em {1} | <i>{0} sistemas de rastreamento</i> em {1}",
"privacy.trackersBlocked":"{0} de {1} bloqueados",
"privacy.trackersFound":"{0} encontrados",
"privacy.trackersNone":"nada",
"privacy.trackerBlock.desc":"Bloquear",
"privacy.trackerBlock.tooltip":"Esta opção bloqueará [{0}] em todos os sites visitados.",
"privacy.trackerUnblock.desc":"Bloqueado",
"privacy.trackerUnblock.tooltip":"Esta opção desbloqueará [{0}] em todos os sites visitados.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Para desbloquear um rastreador específico, desative o bloqueio automático.",
"privacy.automaticBlocking.desc":"Bloquear automaticamente todos os rastreadores",
"privacy.automaticBlocking.tooltip":"Bloquearemos automaticamente todos os rastreadores encontrados em todos os sites visitados.",
"setting.title":"Definições",
"setting.serp.name":"Marcar os resultados de pesquisas",
"setting.serp.desc":"Adicione ícones coloridos aos resultados de pesquisas no Google, Yahoo!, etc., para ver em que resultados é seguro clicar. (Verde = Seguro, Cinzento = Desconhecido, Vermelho = Inseguro)",
"setting.serpPopup.name":"Mostrar dicas para resultados de pesquisas",
"setting.serpPopup.desc":"Passe o rato por cima dos nossos ícones para ver mais informações.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Mudar para Modo de banco no caso de sites financeiros sensíveis (é necessário ter o Avast Antivirus e o Avast Secure Browser instalados)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Mudar para Modo de banco no caso de sites financeiros sensíveis (é necessário ter o AVG AntiVirus e o AVG Secure Browser instalados)",
"setting.dntBadge.name":"Mostrar total de rastreadores num site",
"setting.dntBadge.desc":"Adicione um emblema ao browser para ver imediatamente quantos rastreadores estão num site.",
"setting.dntAutoBlock.name":"Bloquear automaticamente todos os rastreadores",
"setting.dntAutoBlock.desc":"Bloqueie todos os rastreadores encontrados em todos os sites visitados.",
"setting.dntSocial.desc":"Bloquear todos os rastreadores de redes sociais",
"setting.dntAdTracking.desc":"Bloquear todos os rastreadores de publicidade",
"setting.dntWebAnalytics.desc":"Bloquear todos os rastreadores de estatísticas Web",
"setting.dntOthers.desc":"Bloquear todos os outros rastreadores",
"setting.communityIQ.name":"Permitir a partilha de dados de utilização com terceiros para análise",
"serp.safe.desc":"Este site é seguro",
"serp.bad.desc":"Este site pode não ser fidedigno",
"serp.unknown.desc":"Este site não tem avaliação",
"serp.unsafe.desc":"Este site não é seguro",
"topbar.openBankMode":"Abrir no modo de banco",
"topbar.desc":"Os seus dados financeiros poderão ser vistos por outras pessoas.",
"topbar.tooltip":"O Modo de banco, incluído no Avast Secure Browser que é instalado com o antivírus Avast, isola sessões de compras e operações bancárias de forma segura para impedir que piratas informáticos roubem os seus números de cartões de crédito, palavras-passe e outros dados privados.",
"topbar.dontShowAgain":"Não mostrar neste site novamente"
},
ro:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Detalii",
"global.detailsHide":"Ascundere detalii",
"global.done":"Gata",
"global.leaveSite":"Părăsire site",
"global.switcher.off":"DEZ",
"global.switcher.on":"ACT",
"background.icon.unknown":"{0} - Site necunoscut",
"background.icon.safe":"{0} - Acest site Web este sigur",
"background.icon.bad":"{0} - Acest site nu este demn de încredere",
"background.icon.unsafe":"{0} - Acest site Web nu este sigur",
"security.title":"Securitate",
"security.safe.title":"Acest site Web este sigur",
"security.safe.item1.desc":"Nicio operațiune de phishing",
"security.safe.item1.tooltip":"Pe acest site Web nu am detectat nicio încercare de a fura informații sensibile, cum ar fi parole, numere de card de credit etc.",
"security.safe.item2.desc":"Niciun program malware",
"security.safe.item2.tooltip":"Nu am detectat niciun cod rău intenționat pe acest site.",
"security.safe.item3.desc":"De încredere",
"security.safe.item3.tooltip":"{0} utilizatori au evaluat acest site web ca fiind de încredere, făcând clic pe {1} în {0} Online security.",
"security.bad.title":"Nu este demn de încredere",
"security.bad.desc":"Nu am detectat aici niciun fel de amenințări de phishing sau programe malware, dar mulți dintre utilizatorii noștri au acordat acestui site un deget în jos.",
"security.unknown.title":"Site necunoscut",
"security.unknown.desc":"Nu avem încă suficiente informații pentru a evalua acest site Web.",
"security.unsafe.title":"Acest site Web nu este sigur",
"security.unsafe.phishing.desc":"Acest site Web a fost marcat ca site de phishing. Phishing-ul este o încercare de a vă fura informații sensibile, cum ar fi parole, numere de card de credit etc.",
"security.unsafe.malware.desc":"Am descoperit un cod rău intenționat pe acest site Web, care ar putea să vă afecteze computerul sau să vă fure datele private.",
"rating.question.desc":"Aveți încredere în site-ul {0}?",
"rating.negative":"Există conținut inadecvat pe acest site Web? (opțional)",
"rating.thanks":"Vă mulțumim pentru evaluare!",
"rating.trusted.desc":"Aveți <i>încredere</i> în site-ul {0}",
"rating.untrusted.desc":"<i>Nu aveți încredere</i> în site-ul {0}",
"rating.revert.tooltip":"Faceți clic pentru a șterge evaluarea",
"rating.tooltip":"Încrederea sau neîncrederea din partea dumneavoastră vor fi luate în calcul la evaluarea noastră de securitate pentru acest site Web.",
"rating.category.pornography":"Pornografie",
"rating.category.violence":"Arme / Violență",
"rating.category.gambling":"Jocuri de noroc",
"rating.category.drugs":"Alcool / Droguri",
"rating.category.illegal":"Warez / Ilegal",
"rating.category.others":"Altele",
"privacy.title":"Confidențialitate",
"privacy.group.Social.desc":"Rețele sociale",
"privacy.group.Social.block.desc":"Blocare urmărire de către toate rețelele sociale",
"privacy.group.Social.block.tooltip":"Această opțiune va bloca urmărirea de către rețelele sociale pe fiecare site Web pe care îl vizitați.",
"privacy.group.Social.unblock.desc":"Deblocare urmărire de către toate rețelele sociale",
"privacy.group.Social.unblock.tooltip":"Această opțiune va permite urmărirea de către rețelele sociale pe fiecare site Web pe care îl vizitați.",
"privacy.group.AdTracking.desc":"Urmărire pentru reclame",
"privacy.group.AdTracking.block.desc":"Blocarea oricărei urmăriri pentru reclame",
"privacy.group.AdTracking.block.tooltip":"Această opțiune va bloca urmărirea pentru reclame pe fiecare site Web pe care îl vizitați.",
"privacy.group.AdTracking.unblock.desc":"Deblocarea oricărei urmăriri pentru reclame",
"privacy.group.AdTracking.unblock.tooltip":"Această opțiune va permite urmărirea pentru reclame pe fiecare site Web pe care îl vizitați.",
"privacy.group.WebAnalytics.desc":"Analiză Web",
"privacy.group.WebAnalytics.block.desc":"Blocarea oricărei urmăriri de analiză Web",
"privacy.group.WebAnalytics.block.tooltip":"Această opțiune va bloca urmărirea de analiză Web pe fiecare site Web pe care îl vizitați.",
"privacy.group.WebAnalytics.unblock.desc":"Deblocarea oricărei urmăriri de analiză Web",
"privacy.group.WebAnalytics.unblock.tooltip":"Această opțiune va permite alte tipuri de urmărire pe fiecare site Web pe care îl vizitați.",
"privacy.group.Others.desc":"Altele",
"privacy.group.Others.block.desc":"Blocarea oricărui alt tip de urmărire",
"privacy.group.Others.block.tooltip":"Această opțiune va bloca alte tipuri de urmărire pe fiecare site Web pe care îl vizitați.",
"privacy.group.Others.unblock.desc":"Deblocarea oricărui alt tip de urmărire",
"privacy.trackersBlockedAll":"<i>{0} urmăritor</i> blocat pe {1} | Toți cei <i>{0} urmăritori</i> sunt blocați pe {1} | Toți cei <i>{0} de urmăritori</i> sunt blocați pe {1}",
"privacy.trackersBlockedSome":"<i>{0} din {1} urmăritori</i> sunt blocați pe {2} | <i>{0} din {1} urmăritori</i> sunt blocați pe {2} | <i>{0} din {1} de urmăritori</i> sunt blocați pe {2}",
"privacy.trackersBlockedNone":"<i>{0} sistem de urmărire</i> pe {1} | <i>{0} sisteme de urmărire</i> pe {1} | <i>{0} de sisteme de urmărire</i> pe {1}",
"privacy.trackersBlocked":"{0} din {1} blocați",
"privacy.trackersFound":"{0} găsiți",
"privacy.trackersNone":"nicio acțiune",
"privacy.trackerBlock.desc":"Blocare",
"privacy.trackerBlock.tooltip":"Această opțiune va bloca [{0}] pe fiecare site Web pe care îl vizitați.",
"privacy.trackerUnblock.desc":"Blocat",
"privacy.trackerUnblock.tooltip":"Această opțiune va debloca [{0}] pe fiecare site Web pe care îl vizitați.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Pentru a debloca un anumit urmăritor, dezactivați blocarea automată.",
"privacy.automaticBlocking.desc":"Blocare automată a tuturor urmăritorilor",
"privacy.automaticBlocking.tooltip":"Vom bloca în mod automat toți urmăritorii găsiți pe fiecare site pe care îl vizitați.",
"setting.title":"Setări",
"setting.serp.name":"Să mi se marcheze rezultatele căutării",
"setting.serp.desc":"Adăugați pictograme colorate la rezultatele căutărilor pe Google, Yahoo! etc. pentru a vedea pe care rezultate este sigur să faceți clic. (Verde = Sigur, Gri = Necunoscut, Roșu = Nesigur)",
"setting.serpPopup.name":"Afișare baloane explicative pentru rezultatele căutării",
"setting.serpPopup.desc":"Poziționați mouse-ul peste pictogramele noastre pentru a vedea mai multe informații.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Comutați la Modul Operațiuni bancare pentru site-urile financiare sensibile (este necesar să aveți instalate Avast Antivirus și Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Comutați la Modul Operațiuni bancare pentru site-urile financiare sensibile (este necesar să aveți instalate AVG AntiVirus și AVG Secure Browser)",
"setting.dntBadge.name":"Afișare total urmăritori pe un site",
"setting.dntBadge.desc":"Adăugați un ecuson în browser pentru a vedea imediat câți urmăritori sunt pe oricare site Web.",
"setting.dntAutoBlock.name":"Blocare automată a tuturor urmăritorilor",
"setting.dntAutoBlock.desc":"Blocați toți urmăritorii găsiți pe fiecare site Web pe care îl vizitați.",
"setting.dntSocial.desc":"Blocare urmăritori din toate rețelele sociale",
"setting.dntAdTracking.desc":"Blocarea oricărui urmăritor pentru reclame",
"setting.dntWebAnalytics.desc":"Blocarea oricărui urmăritor de analiză Web",
"setting.dntOthers.desc":"Blocarea oricărui alt urmăritor",
"setting.communityIQ.name":"Permiteți ca datele despre utilizare să fie partajate cu terțe părți, pentru analiză",
"serp.safe.desc":"Acest site este sigur",
"serp.bad.desc":"Acest site nu este demn de încredere",
"serp.unknown.desc":"Acest site nu are nicio evaluare",
"serp.unsafe.desc":"Acest site nu este sigur",
"topbar.openBankMode":"Deschidere în Mod Operațiuni bancare",
"topbar.desc":"Este posibil ca datele dvs. financiare să fie vizibile pentru alte persoane.",
"topbar.tooltip":"Mod Operațiuni bancare, o componentă din Avast Secure Browser instalată odată cu antivirusul Avast, izolează în siguranță sesiunile bancare și de cumpărături pentru a opri hackerii să vă fure numerele cardurilor de credit, parolele și alte date private.",
"topbar.dontShowAgain":"Doresc să nu se afișeze din nou pe acest site"
},
ru:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Бета-версия",
"global.detailsShow":"Подробнее",
"global.detailsHide":"Скрыть подробности",
"global.done":"Готово",
"global.leaveSite":"Покинуть сайт",
"global.switcher.off":"ВЫК",
"global.switcher.on":"ВКЛ",
"background.icon.unknown":"{0}: неизвестный сайт",
"background.icon.safe":"{0}: этот сайт безопасен",
"background.icon.bad":"{0}: этот сайт может быть ненадежным",
"background.icon.unsafe":"{0}: этот сайт небезопасен",
"security.title":"Безопасность",
"security.safe.title":"Этот сайт безопасен.",
"security.safe.item1.desc":"Нет угрозы фишинга",
"security.safe.item1.tooltip":"На этом веб-сайте не обнаружено попыток украсть конфиденциальную информацию, в частности пароли, номера кредитных карт и т. д.",
"security.safe.item2.desc":"Нет вредоносных программ",
"security.safe.item2.tooltip":"На этом веб-сайте не обнаружено вредоносного кода.",
"security.safe.item3.desc":"Надежный",
"security.safe.item3.tooltip":"Пользователи {0} оценили этот веб-сайт как надежный, нажав {1} в приложении {0} Online Security.",
"security.bad.title":"Этот сайт может быть ненадежным",
"security.bad.desc":"Здесь не обнаружено никаких фишинговых угроз или вредоносных программ, но многие наши пользователи отрицательно оценили этот веб-сайт.",
"security.unknown.title":"Неизвестный сайт",
"security.unknown.desc":"У нас пока недостаточно информации, чтобы оценить этот веб-сайт.",
"security.unsafe.title":"Этот сайт небезопасен.",
"security.unsafe.phishing.desc":"Этот веб-сайт отмечен как фишинговый. Фишинг — это попытка украсть вашу конфиденциальную информацию, в частности пароли, номера кредитных карт и т. д.",
"security.unsafe.malware.desc":"На этом веб-сайте обнаружен вредоносный код, который может навредить компьютеру или украсть ваши конфиденциальные данные.",
"rating.question.desc":"Вы доверяете {0}?",
"rating.negative":"Содержит ли этот веб-сайт какой-либо неприемлемый контент? (не обязательно)",
"rating.thanks":"Благодарим за оценку!",
"rating.trusted.desc":"Вы <i>доверяете</i> {0}",
"rating.untrusted.desc":"Вы <i>не доверяете</i> {0}",
"rating.revert.tooltip":"Нажмите, чтобы удалить оценку.",
"rating.tooltip":"Ваше доверие либо недоверие будет учитываться в нашем рейтинге безопасности для этого веб-сайта.",
"rating.category.pornography":"Порнография",
"rating.category.violence":"Оружие / насилие",
"rating.category.gambling":"Азартные игры",
"rating.category.drugs":"Алкоголь / наркотики",
"rating.category.illegal":"Пиратское ПО / нарушения закона",
"rating.category.others":"Другое",
"privacy.title":"Конфиденциальность",
"privacy.group.Social.desc":"Социальные сети",
"privacy.group.Social.block.desc":"Блокировать все отслеживание социальных сетей",
"privacy.group.Social.block.tooltip":"Так будет блокироваться отслеживание социальных сетей на каждом посещаемом вами сайте.",
"privacy.group.Social.unblock.desc":"Разблокировать все отслеживание социальных сетей",
"privacy.group.Social.unblock.tooltip":"Так будет разрешено отслеживание социальных сетей на каждом посещаемом вами сайте.",
"privacy.group.AdTracking.desc":"Отслеживание рекламными службами",
"privacy.group.AdTracking.block.desc":"Блокировать все отслеживание рекламными службами",
"privacy.group.AdTracking.block.tooltip":"Так будет блокироваться отслеживание рекламными службами на каждом посещаемом вами сайте.",
"privacy.group.AdTracking.unblock.desc":"Разблокировать все отслеживание рекламными службами",
"privacy.group.AdTracking.unblock.tooltip":"Так будет разрешено отслеживание рекламными службами на каждом посещаемом вами сайте.",
"privacy.group.WebAnalytics.desc":"Средства веб-аналитики",
"privacy.group.WebAnalytics.block.desc":"Блокировать все отслеживание средствами веб-аналитики",
"privacy.group.WebAnalytics.block.tooltip":"Так будет блокироваться отслеживание средствами веб-аналитики на каждом посещаемом вами сайте.",
"privacy.group.WebAnalytics.unblock.desc":"Разблокировать все отслеживание средствами веб-аналитики",
"privacy.group.WebAnalytics.unblock.tooltip":"Так будут разрешены все другие средства отслеживания на каждом посещаемом вами сайте.",
"privacy.group.Others.desc":"Другое",
"privacy.group.Others.block.desc":"Блокировать все другие средства отслеживания",
"privacy.group.Others.block.tooltip":"Так будут блокироваться все другие средства отслеживания на каждом посещаемом вами сайте.",
"privacy.group.Others.unblock.desc":"Разблокировать все другие средства отслеживания",
"privacy.trackersBlockedAll":"На сайте {1} заблокировано <i>единственное {0} средство отслеживания</i>. | На сайте {1} заблокированы <i>все {0} средства отслеживания</i>. | На сайте {1} заблокированы <i>все {0} средств отслеживания</i>. | На сайте {1} заблокированы <i>все {0} средства отслеживания</i>.",
"privacy.trackersBlockedSome":"На сайте {2} заблокированы <i>средства отслеживания: {0} из {1}</i>. | На сайте {2} заблокированы <i>средства отслеживания: {0} из {1}</i>. | На сайте {2} заблокированы <i>средства отслеживания: {0} из {1}</i>. | На сайте {2} заблокированы <i>средства отслеживания: {0} из {1}</i>.",
"privacy.trackersBlockedNone":"<i>{0} система отслеживания</i> на {1} | <i>{0} системы отслеживания</i> на {1} | <i>{0} систем отслеживания</i> на {1} | <i>{0} системы отслеживания</i> на {1}",
"privacy.trackersBlocked":"Заблокировано {0} из {1}",
"privacy.trackersFound":"Обнаружено {0}",
"privacy.trackersNone":"нет",
"privacy.trackerBlock.desc":"Блокировать",
"privacy.trackerBlock.tooltip":"Так [{0}] будет блокироваться на каждом посещаемом вами сайте.",
"privacy.trackerUnblock.desc":"Заблокировано",
"privacy.trackerUnblock.tooltip":"Это разблокирует [{0}] на всех посещаемых вами сайтах.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Чтобы разблокировать отдельное средство отслеживания, выключите автоматическую блокировку.",
"privacy.automaticBlocking.desc":"Автоматически блокировать все средства отслеживания",
"privacy.automaticBlocking.tooltip":"Все обнаруженные средства отслеживания будут автоматически блокироваться на каждом посещаемом веб-сайте.",
"setting.title":"Настройки",
"setting.serp.name":"Помечать результаты поиска",
"setting.serp.desc":"Добавление цветных значков к результатам поиска в Google, Yahoo! и т. д., чтобы видеть, какие сайты безопасны (зеленый — безопасно, серый — неизвестно, красный — опасно)",
"setting.serpPopup.name":"Отображать подсказки для результатов поиска",
"setting.serpPopup.desc":"Наведите мышь на значки, чтобы увидеть больше информации.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Переход в режим банковских операций при открытии сайтов с конфиденциальной финансовой информацией (должны быть установлены антивирус Avast и браузер Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Переходить в режим банковских операций при открытии сайтов с конфиденциальной финансовой информацией (должны быть установлены AVG AntiVirus и браузер AVG Secure Browser)",
"setting.dntBadge.name":"Показывать количество средств отслеживания на сайте",
"setting.dntBadge.desc":"Добавление в браузер значка, мгновенно показывающего количество средств отслеживания на сайте",
"setting.dntAutoBlock.name":"Автоматически блокировать все средства отслеживания",
"setting.dntAutoBlock.desc":"Будут блокироваться все обнаруженные средства отслеживания на каждом посещаемом вами веб-сайте.",
"setting.dntSocial.desc":"Блокировать все средства отслеживания социальных сетей",
"setting.dntAdTracking.desc":"Блокировать все рекламные средства отслеживания",
"setting.dntWebAnalytics.desc":"Блокировать все средства отслеживания средств веб-аналитики",
"setting.dntOthers.desc":"Блокировать все другие средства отслеживания",
"setting.communityIQ.name":"Разрешить передачу информации об использовании сторонним компаниям для анализа",
"serp.safe.desc":"Этот сайт безопасен.",
"serp.bad.desc":"Этот сайт может быть ненадежным.",
"serp.unknown.desc":"У этого сайта нет оценки.",
"serp.unsafe.desc":"Этот сайт небезопасен.",
"topbar.openBankMode":"Открыть в режиме банковских операций",
"topbar.desc":"Ваши финансовые данные могут увидеть посторонние.",
"topbar.tooltip":"Режим банковских операций, компонент браузера Avast Secure Browser, установленного вместе с антивирусом Avast, безопасно изолирует сеансы покупок и банковских операций, не давая хакерам выкрасть ваши пароли, номера кредитных карт и другие конфиденциальные данные.",
"topbar.dontShowAgain":"Больше не показывать на этом сайте"
},
sk:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Podrobnosti",
"global.detailsHide":"Skryť podrobnosti",
"global.done":"Hotovo",
"global.leaveSite":"Opustiť stránku",
"global.switcher.off":"VYP",
"global.switcher.on":"ZAP",
"background.icon.unknown":"{0} – neznáma stránka",
"background.icon.safe":"{0} – táto stránka je bezpečná",
"background.icon.bad":"{0} – táto stránka môže byť nedôveryhodná",
"background.icon.unsafe":"{0} – táto stránka je nebezpečná",
"security.title":"Zabezpečenie",
"security.safe.title":"Táto stránka je bezpečná",
"security.safe.item1.desc":"Žiadny phishing",
"security.safe.item1.tooltip":"Na tejto stránke sme nenašli žiadne pokusy ukradnúť citlivé údaje, ako sú heslá, čísla platobných kariet atď.",
"security.safe.item2.desc":"Žiadny malware",
"security.safe.item2.tooltip":"Na tejto stránke sme nenašli žiadny škodlivý kód.",
"security.safe.item3.desc":"Dôveryhodná",
"security.safe.item3.tooltip":"Niektorí používatelia ({0}) túto stránku označili ako dôveryhodnú tým, že v doplnku {0} Online Security klikli na tlačidlo {1}.",
"security.bad.title":"Táto stránka môže byť nedôveryhodná",
"security.bad.desc":"Na tejto stránke sme nenašli žiadne phishingové hrozby, ale veľa našich používateľov jej udelilo palec dole.",
"security.unknown.title":"Neznáma stránka",
"security.unknown.desc":"Na ohodnotenie tejto stránky nemáme dostatok informácií.",
"security.unsafe.title":"Táto stránka je nebezpečná",
"security.unsafe.phishing.desc":"Táto stránka bola nahlásená ako phishingová. Phishing sú pokusy ukradnúť citlivé údaje, ako sú heslá, čísla platobných kariet atď.",
"security.unsafe.malware.desc":"Na tejto stránke sme našli škodlivý kód, ktorý by vám mohol poškodiť počítač alebo ukradnúť súkromné údaje.",
"rating.question.desc":"Dôverujete stránke {0}?",
"rating.negative":"Je na tejto stránke nejaký nevhodný obsah? (nepovinné)",
"rating.thanks":"Ďakujeme za hodnotenie!",
"rating.trusted.desc":"Stránke {0} <i>dôverujete</i>",
"rating.untrusted.desc":"Stránke {0} <i>nedôverujete</i>",
"rating.revert.tooltip":"Kliknutím svoje hodnotenie zrušíte",
"rating.tooltip":"Vaša dôvera či nedôvera sa premietne do nášho bezpečnostného hodnotenia stránky.",
"rating.category.pornography":"Pornografia",
"rating.category.violence":"Zbrane/násilie",
"rating.category.gambling":"Hazardné hry",
"rating.category.drugs":"Alkohol/drogy",
"rating.category.illegal":"Warez/nelegálne",
"rating.category.others":"Iné",
"privacy.title":"Súkromie",
"privacy.group.Social.desc":"Sociálne siete",
"privacy.group.Social.block.desc":"Blokovať všetko sledovanie sociálnymi sieťami",
"privacy.group.Social.block.tooltip":"Týmto zablokujete sledovanie sociálnymi sieťami na každej navštívenej stránke.",
"privacy.group.Social.unblock.desc":"Odblokovať všetko sledovanie sociálnymi sieťami",
"privacy.group.Social.unblock.tooltip":"Týmto povolíte sledovanie sociálnymi sieťami na každej navštívenej stránke.",
"privacy.group.AdTracking.desc":"Sledovanie reklamy",
"privacy.group.AdTracking.block.desc":"Blokovať všetko sledovanie reklamami",
"privacy.group.AdTracking.block.tooltip":"Týmto zablokujete sledovanie reklamami na každej navštívenej stránke.",
"privacy.group.AdTracking.unblock.desc":"Odblokovať všetko sledovanie reklamami",
"privacy.group.AdTracking.unblock.tooltip":"Týmto povolíte sledovanie reklamami na každej navštívenej stránke.",
"privacy.group.WebAnalytics.desc":"Webová analytika",
"privacy.group.WebAnalytics.block.desc":"Blokovať všetko sledovanie webovými analytickými nástrojmi",
"privacy.group.WebAnalytics.block.tooltip":"Týmto zablokujete sledovanie webovými analytickými nástrojmi na každej navštívenej stránke.",
"privacy.group.WebAnalytics.unblock.desc":"Odblokovať všetko sledovanie webovými analytickými nástrojmi",
"privacy.group.WebAnalytics.unblock.tooltip":"Týmto povolíte ostatné sledovanie na každej navštívenej stránke.",
"privacy.group.Others.desc":"Iné",
"privacy.group.Others.block.desc":"Blokovať všetko ostatné sledovanie",
"privacy.group.Others.block.tooltip":"Týmto zablokujete ostatné sledovanie na každej navštívenej stránke.",
"privacy.group.Others.unblock.desc":"Odblokovať všetko ostatné sledovanie",
"privacy.trackersBlockedAll":"Na stránke {1} bol zablokovaný <i>{0} sledovací nástroj</i> | Na stránke {1} boli zablokované <i>{0} sledovacie nástroje</i> | Na stránke {1} bolo zablokovaných <i>{0} sledovacích nástrojov</i> | Na stránke {1} bolo zablokovaných <i>{0} sledovacích nástrojov</i>",
"privacy.trackersBlockedSome":"Na stránke {2} sme zablokovali <i>{0} sledovací nástroj z {1}</i> | Na stránke {2} sme zablokovali <i>{0} sledovacie nástroje z {1}</i> | Na stránke {2} sme zablokovali <i>{0} sledovacích nástrojov z {1}</i> | Na stránke {2} sme zablokovali <i>{0} sledovacích nástrojov z {1}</i>",
"privacy.trackersBlockedNone":"<i>{0} sledovací systém</i> na stránke {1} | <i>{0} sledovacie systémy</i> na stránke {1} | <i>{0} sledovacích systémov</i> na stránke {1} | <i>{0} sledovacích systémov</i> na stránke {1}",
"privacy.trackersBlocked":"Zablokované: {0} z {1}",
"privacy.trackersFound":"Nájdené: {0}",
"privacy.trackersNone":"nič",
"privacy.trackerBlock.desc":"Blokovať",
"privacy.trackerBlock.tooltip":"Týmto zablokujete {0} na každej navštívenej stránke.",
"privacy.trackerUnblock.desc":"Zablokované",
"privacy.trackerUnblock.tooltip":"Týmto odblokujete {0} na každej navštívenej stránke.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Ak chcete odblokovať konkrétny sledovací nástroj, vypnite automatické blokovanie.",
"privacy.automaticBlocking.desc":"Automaticky blokovať všetko sledovanie",
"privacy.automaticBlocking.tooltip":"Na každej stránke, ktorú navštívite, automaticky zablokujeme všetky nájdené sledovacie nástroje.",
"setting.title":"Nastavenia",
"setting.serp.name":"Označovať výsledky vyhľadávania",
"setting.serp.desc":"Pridajte si do výsledkov vyhľadávania cez Google, Yahoo! atď. farebné ikony, podľa ktorých rozpoznáte, ktoré stránky sú bezpečné (zelená = bezpečná, šedá = neznáma, červená = nebezpečná)",
"setting.serpPopup.name":"Ukazovať popisky k výsledkom vyhľadávania",
"setting.serpPopup.desc":"Umiestnením kurzora nad ikony zobrazíte ďalšie informácie.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"V prípade stránok s citlivými finančnými údajmi prepínať na Platobný režim (vyžaduje nainštalovaný Avast Antivirus a Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"V prípade stránok s citlivými finančnými údajmi prepínať na Platobný režim (vyžaduje nainštalovaný AVG AntiVirus a AVG Secure Browser)",
"setting.dntBadge.name":"Zobraziť celkový počet sledovacích nástrojov na stránke",
"setting.dntBadge.desc":"Pridajte si do prehliadača ukazovateľ počtu sledovacích nástrojov na aktuálne otvorenej stránke.",
"setting.dntAutoBlock.name":"Automaticky blokovať všetko sledovanie",
"setting.dntAutoBlock.desc":"Blokujte všetky sledovacie nástroje na každej navštívenej stránke.",
"setting.dntSocial.desc":"Blokovať všetko sledovanie sociálnymi sieťami",
"setting.dntAdTracking.desc":"Blokovať všetko sledovanie reklamami",
"setting.dntWebAnalytics.desc":"Blokovať všetko sledovanie webovými analytickými nástrojmi",
"setting.dntOthers.desc":"Blokovať všetko ostatné sledovanie",
"setting.communityIQ.name":"Povoliť zdieľanie údajov o používaní s tretími stranami na účely analýzy",
"serp.safe.desc":"Táto stránka je bezpečná",
"serp.bad.desc":"Táto stránka môže byť nedôveryhodná",
"serp.unknown.desc":"Táto stránka nemá žiadne hodnotenie",
"serp.unsafe.desc":"Táto stránka je nebezpečná",
"topbar.openBankMode":"Otvoriť v Platobnom režime",
"topbar.desc":"Vaše finančné údaje môžu vidieť ostatní.",
"topbar.tooltip":"Platobný režim je súčasť prehliadača Avast Secure Browser nainštalovaná spolu s vašim antivírusom Avast. Bezpečne izoluje relácie nákupov a bankovníctva, aby zabránil hackerom ukradnúť vaše čísla platobných kariet, heslá a iné súkromné údaje.",
"topbar.dontShowAgain":"Nezobrazovať na tejto stránke znova"
},
sl:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Podrobnosti",
"global.detailsHide":"Skrij podrobnosti",
"global.done":"Dokončano",
"global.leaveSite":"Zapusti spletno mesto",
"global.switcher.off":"IZK",
"global.switcher.on":"VKL",
"background.icon.unknown":"{0} – neznano spletno mesto",
"background.icon.safe":"{0} – to spletno mesto je varno",
"background.icon.bad":"{0} – to spletno mesto morda ni zaupanja vredno",
"background.icon.unsafe":"{0} – to spletno mesto ni varno",
"security.title":"Varnost",
"security.safe.title":"To spletno mesto je varno",
"security.safe.item1.desc":"Brez lažnega predstavljanja",
"security.safe.item1.tooltip":"Na trem spletnem mestu nismo zaznali nobenih poskusov kraje občutljivih podatkov, kot so gesla, številke kreditnih kartic in drugih.",
"security.safe.item2.desc":"Brez zlonamerne programske opreme",
"security.safe.item2.tooltip":"Na tem spletnem mestu nismo zaznali nobene zlonamerne kode.",
"security.safe.item3.desc":"Zaupanja vredno",
"security.safe.item3.tooltip":"Uporabniki aplikacije {0} so ocenili to spletno mesto kot zaupanja vredno s klikom gumba {1} v aplikaciji {0} Online Security.",
"security.bad.title":"To spletno mesto morda ni zaupanja vredno",
"security.bad.desc":"Na tem spletnem mestu nismo našli nobenih groženj lažnega predstavljanja ali zlonamerne programske opreme, vendar pa mnogim uporabnikom to spletno mesto ni bilo všeč.",
"security.unknown.title":"Neznano spletno mesto",
"security.unknown.desc":"Za oceno tega spletnega mesta še nimamo dovolj informacij.",
"security.unsafe.title":"To spletno mesto ni varno",
"security.unsafe.phishing.desc":"To spletno mesto je bilo označeno kot spletno mesto z lažnim predstavljanjem. Lažno predstavljanje je poskus kraje vaših občutljivih podatkov, kot so gesla, številke kreditnih kartic in drugi.",
"security.unsafe.malware.desc":"Na tem spletnem mestu smo našli zlonamerno kodo, ki bi lahko škodovala vašemu računalniku ali ukradla vaše zasebne podatke.",
"rating.question.desc":"Ali zaupate spletnemu mestu {0}?",
"rating.negative":"Ali je na tem spletnem mestu kakršna koli neprimerna vsebina? (neobvezno)",
"rating.thanks":"Zahvaljujemo se vam za oceno.",
"rating.trusted.desc":"Spletnemu mestu {0} <i>zaupate</i>",
"rating.untrusted.desc":"Spletnemu mestu {0} <i>ne zaupate</i>",
"rating.revert.tooltip":"Kliknite, da odstranite svojo oceno",
"rating.tooltip":"Vaše zaupanje ali nezaupanje bo upoštevano pri naši varnostni oceni tega spletnega mesta.",
"rating.category.pornography":"Pornografija",
"rating.category.violence":"Orožje/nasilje",
"rating.category.gambling":"Igre na srečo",
"rating.category.drugs":"Alkohol/droge",
"rating.category.illegal":"Piratstvo/nezakonitosti",
"rating.category.others":"Drugo",
"privacy.title":"Zasebnost",
"privacy.group.Social.desc":"Družabna omrežja",
"privacy.group.Social.block.desc":"Blokiraj sledenje v vseh družabnih omrežjih",
"privacy.group.Social.block.tooltip":"S tem boste blokirali sledenje družabnih omrežij na vseh spletnih mestih, ki jih obiščete.",
"privacy.group.Social.unblock.desc":"Odblokiraj sledenje v vseh družabnih omrežjih",
"privacy.group.Social.unblock.tooltip":"S tem boste dovolili sledenje družabnih omrežij na vseh spletnih mestih, ki jih obiščete.",
"privacy.group.AdTracking.desc":"Sledenje v oglasih",
"privacy.group.AdTracking.block.desc":"Blokiraj sledenje v vseh oglasih",
"privacy.group.AdTracking.block.tooltip":"S tem boste blokirali sledenje oglasov na vseh spletnih mestih, ki jih obiščete.",
"privacy.group.AdTracking.unblock.desc":"Odblokiraj sledenje v vseh oglasih",
"privacy.group.AdTracking.unblock.tooltip":"S tem boste dovolili sledenje oglasov na vseh spletnih mestih, ki jih obiščete.",
"privacy.group.WebAnalytics.desc":"Spletna analitika",
"privacy.group.WebAnalytics.block.desc":"Blokiraj sledenje vse spletne analitike",
"privacy.group.WebAnalytics.block.tooltip":"S tem boste blokirali sledenje spletne analitike na vseh spletnih mestih, ki jih obiščete.",
"privacy.group.WebAnalytics.unblock.desc":"Odblokiraj sledenje vse spletne analitike",
"privacy.group.WebAnalytics.unblock.tooltip":"S tem boste dovolili druge vrste sledenja na vseh spletnih mestih, ki jih obiščete.",
"privacy.group.Others.desc":"Drugo",
"privacy.group.Others.block.desc":"Blokiraj vse druge vrste sledenja",
"privacy.group.Others.block.tooltip":"S tem boste blokirali druge vrste sledenja na vseh spletnih mestih, ki jih obiščete.",
"privacy.group.Others.unblock.desc":"Odblokiraj vse druge vrste sledenja",
"privacy.trackersBlockedAll":"<i>{0} sledilnik</i> na spletnem mestu {1} je blokiran | <i>Oba {0} sledilnika</i> na spletnem mestu {1} sta blokirana | <i>Vsi {0} sledilniki</i> na spletnem mestu {1} so blokirani | <i>Vseh {0} sledilnikov</i> na spletnem mestu {1} je blokiranih",
"privacy.trackersBlockedSome":"<i>{0} od {1} sledilnikov</i> na spletnem mestu {2} je blokiran | <i>{0} od {1} sledilnikov</i> na spletnem mestu {2} sta blokirana | <i>{0} od {1} sledilnikov</i> na spletnem mestu {2} so blokirani | <i>{0} od {1} sledilnikov</i> na spletnem mestu {2} je blokiranih",
"privacy.trackersBlockedNone":"<i>{0} sledilni</i> sistem na spletnem mestu {1} | <i>{0} sledilna</i> sistema na spletnem mestu {1} | <i>{0} sledilni</i> sistemi na spletnem mestu {1} | <i>{0} sledilnih</i> sistemov na spletnem mestu {1}",
"privacy.trackersBlocked":"{0} od {1} blokiranih",
"privacy.trackersFound":"Št. najdenih: {0}",
"privacy.trackersNone":"nič",
"privacy.trackerBlock.desc":"Blokiraj",
"privacy.trackerBlock.tooltip":"S tem boste blokirali sledilnik [{0}] na vseh spletnih mestih, ki jih obiščete.",
"privacy.trackerUnblock.desc":"Blokirano",
"privacy.trackerUnblock.tooltip":"S tem boste odblokirali sledilnik [{0}] na vseh spletnih mestih, ki jih obiščete.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Če želite odblokirati določen sledilnik, izklopite samodejno blokiranje.",
"privacy.automaticBlocking.desc":"Samodejno blokirajte vse sledilnike",
"privacy.automaticBlocking.tooltip":"Vsi najdeni sledilniki na vseh spletnih mestih, ki jih obiščete, bodo samodejno blokirani.",
"setting.title":"Nastavitve",
"setting.serp.name":"Označi moje rezultate iskanja",
"setting.serp.desc":"Dodajte barvne ikone svojim rezultatom iskanja v iskalnikih Google, Yahoo! in drugih, da boste vedeli, katere rezultate lahko varno kliknete. (Zelena = varno, siva = neznano, rdeča = nevarno)",
"setting.serpPopup.name":"Pokaži opise orodij za rezultate iskanja",
"setting.serpPopup.desc":"Za ogled dodatnih informacij premaknite kazalec miške na našo ikono.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Preklopite na bančni način za obisk spletnih mest z občutljivimi finančnimi podatki (nameščena morata biti protivirusni program Avast in Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Preklopite na bančni način za obisk spletnih strani z občutljivimi finančnimi podatki (nameščena morata biti protivirusni program AVG in AVG Secure Browser)",
"setting.dntBadge.name":"Pokaži skupno število sledilnikov na spletnem mestu",
"setting.dntBadge.desc":"Dodajte značko v svoj brskalnik, da boste lahko takoj preverili, koliko sledilnikov je na katerem koli spletnem mestu.",
"setting.dntAutoBlock.name":"Samodejno blokiraj vse sledilnike",
"setting.dntAutoBlock.desc":"Blokirajte vse najdene sledilnike na vseh spletnih mestih, ki jih obiščete.",
"setting.dntSocial.desc":"Blokiraj sledilnike v vseh družabnih omrežjih",
"setting.dntAdTracking.desc":"Blokiraj sledilnike v vseh oglasih",
"setting.dntWebAnalytics.desc":"Blokiraj sledilnike v vsej spletni analitiki",
"setting.dntOthers.desc":"Blokiraj vse druge vrste sledilnikov",
"setting.communityIQ.name":"Dovoli skupno rabo podatkov o uporabi z drugimi ponudniki analitičnih storitev",
"serp.safe.desc":"Ta spletno mesto je varno",
"serp.bad.desc":"To spletno mesto morda ni zaupanja vredno",
"serp.unknown.desc":"Ta spletno mesto še nima ocene",
"serp.unsafe.desc":"Ta spletno mesto ni varno",
"topbar.openBankMode":"Odpri v bančnem načinu",
"topbar.desc":"Vaši finančni podatki so morda prikazani drugim.",
"topbar.tooltip":"Bančni način, del dodatka Avast Secure Browser, ki je nameščen s protivirusnim programom Avast, varno osami nakupovalne ter bančne seje in tako hekerjem prepreči, da bi ukradli številke kreditnih kartic, gesla in druge zasebne podatke.",
"topbar.dontShowAgain":"Tega ne kaži več na tem spletnem mestu"
},
sr:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Detalji",
"global.detailsHide":"Sakrij detalje",
"global.done":"Gotovo",
"global.leaveSite":"Napusti lokaciju",
"global.switcher.off":"ISK",
"global.switcher.on":"UKL",
"background.icon.unknown":"{0} – Nepoznata lokacija",
"background.icon.safe":"{0} – Ova veb lokacija je bezbedna",
"background.icon.bad":"{0} – Ova lokacija možda nije pouzdana",
"background.icon.unsafe":"{0} – Ova veb lokacija nije bezbedna",
"security.title":"Bezbednost",
"security.safe.title":"Ova veb lokacija je bezbedna",
"security.safe.item1.desc":"Nema phishinga",
"security.safe.item1.tooltip":"Nismo otkrili nijedan pokušaj krađe osetljivih informacija kao što su lozinke, brojevi kreditnih kartica itd. na ovoj veb lokaciji.",
"security.safe.item2.desc":"Nema malvera",
"security.safe.item2.tooltip":"Nismo otkrili nijedan zlonamerni kôd na ovoj veb lokaciji.",
"security.safe.item3.desc":"Pouzdana",
"security.safe.item3.tooltip":"{0} korisnici su ocenili ovu veb lokaciju kao pouzdanu klikom na {1} u usluzi {0} Online Security.",
"security.bad.title":"Ovo možda nije pouzdano",
"security.bad.desc":"Ovde nismo pronašli nijednu phishing pretnju ili malver, ali mnogi od naših korisnika su ovoj lokaciji dali palac nadole.",
"security.unknown.title":"Nepoznata lokacija",
"security.unknown.desc":"Još uvek nemamo dovoljno informacija da bismo ocenili ovu veb lokaciju.",
"security.unsafe.title":"Ova veb lokacija nije bezbedna",
"security.unsafe.phishing.desc":"Ova veb lokacija je označena kao phishing lokacija. Phishing predstavlja pokušaj krađe vaših osetljivih informacija kao što su lozinke, brojevi kreditnih kartica itd.",
"security.unsafe.malware.desc":"Na ovoj veb lokaciji smo pronašli zlonamerni kôd koji bi mogao da ošteti vaš računar ili ukrade vaše privatne podatke.",
"rating.question.desc":"Da li imate poverenja u {0}?",
"rating.negative":"Da li postoji neprikladan sadržaj na ovoj veb lokaciji? (opcionalno)",
"rating.thanks":"Hvala vam na oceni!",
"rating.trusted.desc":"<i>Imate poverenja</i> u {0}",
"rating.untrusted.desc":"<i>Nemate poverenja</i> u {0}",
"rating.revert.tooltip":"Kliknite da biste uklonili ocenu",
"rating.tooltip":"Vaše poverenje ili nepoverenje će biti uzeto u obzir za našu bezbednosnu ocenu ove veb lokacije.",
"rating.category.pornography":"Pornografija",
"rating.category.violence":"Oružje / nasilje",
"rating.category.gambling":"Kockanje",
"rating.category.drugs":"Alkohol / droga",
"rating.category.illegal":"Warez / nelegalno",
"rating.category.others":"Ostalo",
"privacy.title":"Privatnost",
"privacy.group.Social.desc":"Društvene mreže",
"privacy.group.Social.block.desc":"Blokiraj kompletno praćenje društvenih mreža",
"privacy.group.Social.block.tooltip":"Ovo će blokirati praćenje društvenih mreža na svakoj veb lokaciji koju posetite.",
"privacy.group.Social.unblock.desc":"Deblokiraj kompletno praćenje društvenih mreža",
"privacy.group.Social.unblock.tooltip":"Ovo će dozvoliti praćenje društvenih mreža na svakoj veb lokaciji koju posetite.",
"privacy.group.AdTracking.desc":"Praćenje reklama",
"privacy.group.AdTracking.block.desc":"Blokiraj kompletno praćenje reklama",
"privacy.group.AdTracking.block.tooltip":"Ovo će blokirati praćenje reklama na svakoj veb lokaciji koju posetite.",
"privacy.group.AdTracking.unblock.desc":"Deblokiraj kompletno praćenje reklama",
"privacy.group.AdTracking.unblock.tooltip":"Ovo će dozvoliti praćenje reklama na svakoj veb lokaciji koju posetite.",
"privacy.group.WebAnalytics.desc":"Veb analitika",
"privacy.group.WebAnalytics.block.desc":"Blokiraj kompletno praćenje veb analitike",
"privacy.group.WebAnalytics.block.tooltip":"Ovo će blokirati praćenje veb analitike na svakoj veb lokaciji koju posetite.",
"privacy.group.WebAnalytics.unblock.desc":"Deblokiraj kompletno praćenje veb analitike",
"privacy.group.WebAnalytics.unblock.tooltip":"Ovo će dozvoliti ostala praćenja na svakoj veb lokaciji koju posetite.",
"privacy.group.Others.desc":"Ostalo",
"privacy.group.Others.block.desc":"Blokiraj sva ostala praćenja",
"privacy.group.Others.block.tooltip":"Ovo će blokirati ostala praćenja na svakoj veb lokaciji koju posetite.",
"privacy.group.Others.unblock.desc":"Deblokiraj sva ostala praćenja",
"privacy.trackersBlockedAll":"<i>{0} praćenje</i> je blokirano na {1} | <i>{0} praćenja</i> su blokirana na {1} | <i>Svih {0} praćenja</i> je blokirano na {1}",
"privacy.trackersBlockedSome":"<i>{0} od {1} praćenja</i> je blokirano na {2} | <i>{0} od {1} praćenja</i> su blokirana na {2} | <i>{0} od {1} praćenja</i> je blokirano na {2}",
"privacy.trackersBlockedNone":"<i>{0} sistem za praćenje</i> na {1} | <i>{0} sistema za praćenje</i> na {1} | <i>{0} sistema za praćenje</i> na {1}",
"privacy.trackersBlocked":"Blokirano: {0} od {1}",
"privacy.trackersFound":"Pronađeno: {0}",
"privacy.trackersNone":"ništa",
"privacy.trackerBlock.desc":"Blokiraj",
"privacy.trackerBlock.tooltip":"Ovo će blokirati [{0}] na svakoj veb lokaciji koju posetite.",
"privacy.trackerUnblock.desc":"Blokirano",
"privacy.trackerUnblock.tooltip":"Ovo će deblokirati [{0}] na svakoj veb lokaciji koju posetite.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Da biste deblokirali određeno praćenje, isključite automatsko blokiranje.",
"privacy.automaticBlocking.desc":"Automatski blokiraj sva praćenja",
"privacy.automaticBlocking.tooltip":"Automatski ćemo blokirati sva pronađena praćenja na svakoj veb lokaciji koju posetite.",
"setting.title":"Postavke",
"setting.serp.name":"Označi moje rezultate pretrage",
"setting.serp.desc":"Dodajte ikone u boji svojim rezultatima pretrage u uslugama Google, Yahoo! itd. da biste videli na koje rezultate je bezbedno kliknuti. (Zelena = Bezbedno, Siva = Nepoznato, Crvena = Nije bezbedno)",
"setting.serpPopup.name":"Prikaži opise alatki za rezultate pretrage",
"setting.serpPopup.desc":"Zadržite miš iznad naših ikona da biste videli više informacija.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Pređite u Režim banke za osetljive finansijske lokacije (zahteva instalirane Avast Antivirus i Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Pređite u Režim banke za osetljive finansijske lokacije (zahteva instalirane AVG AntiVirus i AVG Secure Browser)",
"setting.dntBadge.name":"Prikaži ukupan broj praćenja na lokaciji",
"setting.dntBadge.desc":"Dodajte bedž u pregledač da biste odmah videli koliko praćenja postoji na svakoj veb lokaciji.",
"setting.dntAutoBlock.name":"Automatski blokiraj sva praćenja",
"setting.dntAutoBlock.desc":"Blokirajte sva pronađena praćenja na svakoj veb lokaciji koju posetite.",
"setting.dntSocial.desc":"Blokiraj sva praćenja društvenih mreža",
"setting.dntAdTracking.desc":"Blokiraj sva praćenja reklama",
"setting.dntWebAnalytics.desc":"Blokiraj sva praćenja veb analitike",
"setting.dntOthers.desc":"Blokiraj sva ostala praćenja",
"setting.communityIQ.name":"Dozvolite da se podaci o korišćenju dele sa trećim stranama radi analitike",
"serp.safe.desc":"Ova lokacija je bezbedna",
"serp.bad.desc":"Ova lokacija možda nije pouzdana",
"serp.unknown.desc":"Ova lokacija nema ocenu",
"serp.unsafe.desc":"Ova lokacija nije bezbedna",
"topbar.openBankMode":"Otvori u režimu banke",
"topbar.desc":"Drugi ljudi možda mogu da vide vaše finansijske podatke.",
"topbar.tooltip":"Režim banke, deo programa Avast Secure Browser koji se instalira uz Avast antivirus, bezbedno izoluje sesije kupovine i bankarskih poslova da bi sprečio hakere da ukradu vaše brojeve kreditnih kartica, lozinke i druge privatne podatke.",
"topbar.dontShowAgain":"Ne prikazuj ponovo na ovom sajtu"
},
sv:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Information",
"global.detailsHide":"Dölj information",
"global.done":"Klart",
"global.leaveSite":"Lämna webbplatsen",
"global.switcher.off":"AV",
"global.switcher.on":"PÅ",
"background.icon.unknown":"{0} – okänd webbplats",
"background.icon.safe":"{0} – webbplatsen är säker",
"background.icon.bad":"{0} – webbplatsen kan vara opålitlig",
"background.icon.unsafe":"{0} – webbplatsen är osäker",
"security.title":"Säkerhet",
"security.safe.title":"Webbplatsen är säker",
"security.safe.item1.desc":"Inget nätfiske",
"security.safe.item1.tooltip":"Vi har inte upptäckt några försök att stjäla känslig information som lösenord, kreditkortsnummer etc. på denna webbplats.",
"security.safe.item2.desc":"Ingen skadlig kod",
"security.safe.item2.tooltip":"Vi har inte upptäckt någon skadlig kod på den här webbplatsen.",
"security.safe.item3.desc":"Betrodd",
"security.safe.item3.tooltip":"{0} användare har angett att denna webbplats är tillförlitlig genom att klicka på {1} i {0} Online Security.",
"security.bad.title":"Webbplatsen kan vara opålitlig",
"security.bad.desc":"Vi hittade inget nätfiske eller skadlig kod här, men många användaren har gett webbplatsen tummen ner.",
"security.unknown.title":"Okänd webbplats",
"security.unknown.desc":"Vi har inte tillräckligt med information att ranka webbplatsen ännu.",
"security.unsafe.title":"Webbplatsen är osäker",
"security.unsafe.phishing.desc":"Webbplatsen har markerats som en nätfiskewebbplats. Nätfiske är ett försök att stjäla känslig information från dig, som t.ex. lösenord eller kreditkortsnummer.",
"security.unsafe.malware.desc":"Vi har upptäckt skadlig kod på webbplatsen som kan skada din dator eller stjäla din privata information.",
"rating.question.desc":"Litar du på {0}?",
"rating.negative":"Finns det något olämpligt innehåll på webbplatsen? (valfritt)",
"rating.thanks":"Tack för ditt betyg!",
"rating.trusted.desc":"Du <i>litar på</i> {0}",
"rating.untrusted.desc":"Du <i>litar inte på</i> {0}",
"rating.revert.tooltip":"Klicka här om du till ta bort betyget",
"rating.tooltip":"Ditt förtroende eller din misstro räknas in i vårt säkerhetsbetyg för webbplatsen.",
"rating.category.pornography":"Pornografi",
"rating.category.violence":"Vapen/våld",
"rating.category.gambling":"Hasardspel",
"rating.category.drugs":"Alkohol/droger",
"rating.category.illegal":"Piratprogram/illegalt",
"rating.category.others":"Annat",
"privacy.title":"Integritet",
"privacy.group.Social.desc":"Sociala nätverk",
"privacy.group.Social.block.desc":"Blockera all spårning av sociala nätverk",
"privacy.group.Social.block.tooltip":"Detta blockerar spårning av sociala nätverk på varje webbplats du besöker.",
"privacy.group.Social.unblock.desc":"Avblockera all spårning av sociala nätverk",
"privacy.group.Social.unblock.tooltip":"Detta tillåter spårning av sociala nätverk på varje webbplats du besöker.",
"privacy.group.AdTracking.desc":"Reklamspårning",
"privacy.group.AdTracking.block.desc":"Blockera all reklamspårning",
"privacy.group.AdTracking.block.tooltip":"Detta blockerar reklamspårning på varje webbplats du besöker.",
"privacy.group.AdTracking.unblock.desc":"Avblockera all reklamspårning",
"privacy.group.AdTracking.unblock.tooltip":"Detta tillåter reklamspårning på varje webbplats du besöker.",
"privacy.group.WebAnalytics.desc":"Webbanalys",
"privacy.group.WebAnalytics.block.desc":"Blockera all webbanalysspårning",
"privacy.group.WebAnalytics.block.tooltip":"Detta blockerar webbanalysspårning på varje webbplats du besöker.",
"privacy.group.WebAnalytics.unblock.desc":"Avblockera all webbanalysspårning",
"privacy.group.WebAnalytics.unblock.tooltip":"Detta tillåter annan spårning på varje webbplats du besöker.",
"privacy.group.Others.desc":"Övrigt",
"privacy.group.Others.block.desc":"Blockera all annan spårning",
"privacy.group.Others.block.tooltip":"Detta blockerar annan spårning på varje webbplats du besöker.",
"privacy.group.Others.unblock.desc":"Avblockera all annan spårning",
"privacy.trackersBlockedAll":"<i>Alla {0} spårare</i> blockerades på {1} | <i>Alla {0} spårare</i> blockerades på {1}",
"privacy.trackersBlockedSome":"<i>{0} av {1} spårare</i> blockerades på {2} | <i>{0} av {1} spårare</i> blockerades på {2}",
"privacy.trackersBlockedNone":"<i>{0} spårningssystem</i> på {1} | <i>{0} spårningssystem</i> på {1}",
"privacy.trackersBlocked":"{0} av {1} blockerades",
"privacy.trackersFound":"{0} hittades",
"privacy.trackersNone":"ingenting",
"privacy.trackerBlock.desc":"Blockera",
"privacy.trackerBlock.tooltip":"Detta blockerar [{0}] på varje webbplats du besöker.",
"privacy.trackerUnblock.desc":"Blockerad",
"privacy.trackerUnblock.tooltip":"Detta avblockerar [{0}] på varje webbplats du besöker.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Om du vill avblockera en specifik spårare inaktiverar du automatisk blockering.",
"privacy.automaticBlocking.desc":"Blockera alla spårare automatiskt",
"privacy.automaticBlocking.tooltip":"Alla hittade spårare blockeras automatiskt på varje webbplats du besöker.",
"setting.title":"Inställningar",
"setting.serp.name":"Markera mina sökresultat",
"setting.serp.desc":"Lägg till färgade ikoner i sökresultatet i Google, Yahoo! etc. så att du kan se vilka resultat som är säkra att klicka på. (Grön = säker, grå = okänd, röd = osäker)",
"setting.serpPopup.name":"Visa verktygstips för sökresultat",
"setting.serpPopup.desc":"Håll muspekaren över ikonerna om du vill visa mer information.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Växla till bankläge för banksidor (Avast Antivirus och Avast Secure Browser måste vara installerade)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Växla till Bankläge för känsliga banksidor (kräver installation av AVG Antivirus och AVG Secure Browser)",
"setting.dntBadge.name":"Visa totalt antal spårare på en webbplats",
"setting.dntBadge.desc":"Lägg till en bricka i webbläsaren om du genast vill kunna se hur många spårare det finns på en webbplats.",
"setting.dntAutoBlock.name":"Blockera alla spårare automatiskt",
"setting.dntAutoBlock.desc":"Blockera alla hittade spårare på varje webbplats du besöker.",
"setting.dntSocial.desc":"Blockera alla spårare för sociala nätverk",
"setting.dntAdTracking.desc":"Blockera alla reklamspårare",
"setting.dntWebAnalytics.desc":"Blockera alla webbanalysspårare",
"setting.dntOthers.desc":"Blockera alla andra spårare",
"setting.communityIQ.name":"Tillåt att användningsdata delas med tredje part för analys",
"serp.safe.desc":"Denna webbplats är säker",
"serp.bad.desc":"Webbplatsen kan vara opålitlig",
"serp.unknown.desc":"Webbplatsen har ingen bedömning ännu",
"serp.unsafe.desc":"Webbplatsen är osäker",
"topbar.openBankMode":"Öppna i bankläge",
"topbar.desc":"Finansiell information kan visas för andra.",
"topbar.tooltip":"Bankläge är en del av Avast Secure Browser som installeras med Avasts antivirusprogram som säkert isolerar shopping- och banksessioner för att stoppa hackare som vill stjäla ditt kreditkortsnummer, lösenord och annan privat information.",
"topbar.dontShowAgain":"Visa inte på den här webbplatsen igen"
},
tr:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Beta",
"global.detailsShow":"Ayrıntılar",
"global.detailsHide":"Ayrıntıları gizle",
"global.done":"Tamamlandı",
"global.leaveSite":"Siteden ayrıl",
"global.switcher.off":"OFF",
"global.switcher.on":"ON",
"background.icon.unknown":"{0} - Bilinmeyen site",
"background.icon.safe":"{0} - Bu web sitesi güvenli",
"background.icon.bad":"{0} - Bu site güvenilir olmayabilir",
"background.icon.unsafe":"{0} - Bu web sitesi güvenli değil",
"security.title":"Güvenlik",
"security.safe.title":"Bu web sitesi güvenli",
"security.safe.item1.desc":"Kimlik avı yok",
"security.safe.item1.tooltip":"Bu web sitesinde parola, kredi kartı bilgileri gibi hassas bilgileri çalma girişimi tespit etmedik.",
"security.safe.item2.desc":"Kötü amaçlı yazılım yok",
"security.safe.item2.tooltip":"Bu web sitesinde hiçbir kötü amaçlı kod tespit etmedik.",
"security.safe.item3.desc":"Güvenilir",
"security.safe.item3.tooltip":"{0} kullanıcı, {0} Online Security'deki {1} seçeneğine tıklayarak bu web sitesini güvenilir olarak değerlendirdi.",
"security.bad.title":"Güvenilir olmayabilir",
"security.bad.desc":"Burada herhangi bir kimlik avı tehdidi veya kötü amaçlı yazılım tespit etmedik, ancak birçok kullanıcımız bu siteyi olumsuz olarak değerlendirdi.",
"security.unknown.title":"Bilinmeyen site",
"security.unknown.desc":"Bu web sitesini değerlendirmek için henüz yeterli bilgimiz yok.",
"security.unsafe.title":"Bu web sitesi güvenli değil",
"security.unsafe.phishing.desc":"Bu web sitesi kimlik avı sitesi olarak işaretlenmiş. Kimlik avı parola, kredi kartı numaraları gibi hassas bilgilerinizi çalmak için yapılan bir girişimdir.",
"security.unsafe.malware.desc":"Bu web sitesinde bilgisayarınıza zarar verebilecek veya gizli bilgilerinizi çalabilecek kötü amaçlı kod tespit ettik.",
"rating.question.desc":"{0} sitesine güveniyor musunuz?",
"rating.negative":"Bu web sitesinde uygunsuz içerikler var mı? (İsteğe bağlı)",
"rating.thanks":"Değerlendirmeniz için teşekkürler!",
"rating.trusted.desc":"{0} sitesine <i>güveniyorsunuz</i>",
"rating.untrusted.desc":"{0} sitesine <i>güvenmiyorsunuz</i>",
"rating.revert.tooltip":"Değerlendirmenizi kaldırmak için tıklayın",
"rating.tooltip":"Güvenli veya güvenli değil şeklindeki değerlendirmeniz bu web sitesi için yaptığımız güvenlik değerlendirmesini etkileyecek.",
"rating.category.pornography":"Pornografi",
"rating.category.violence":"Silah / Şiddet",
"rating.category.gambling":"Kumar",
"rating.category.drugs":"Alkol / Uyuşturucu",
"rating.category.illegal":"Warez / Yasa Dışı",
"rating.category.others":"Diğerler",
"privacy.title":"Gizlilik",
"privacy.group.Social.desc":"Sosyal ağlar",
"privacy.group.Social.block.desc":"Tüm sosyal ağ izlemelerini engelle",
"privacy.group.Social.block.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde sosyal ağ izlemesini engelleyecek.",
"privacy.group.Social.unblock.desc":"Tüm sosyal ağ izlemelerinin engelini kaldır",
"privacy.group.Social.unblock.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde sosyal ağ izlemesine izin verecek.",
"privacy.group.AdTracking.desc":"Reklam İzleme",
"privacy.group.AdTracking.block.desc":"Tüm reklam izlemelerini engelle",
"privacy.group.AdTracking.block.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde reklam izlemeyi engelleyecek.",
"privacy.group.AdTracking.unblock.desc":"Tüm reklam izlemelerinin engelini kaldır",
"privacy.group.AdTracking.unblock.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde reklam izlemeye izin verecek.",
"privacy.group.WebAnalytics.desc":"Web Analizi",
"privacy.group.WebAnalytics.block.desc":"Tüm web analizi izlemelerini engelle",
"privacy.group.WebAnalytics.block.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde web analizi izlemesini engelleyecek.",
"privacy.group.WebAnalytics.unblock.desc":"Tüm web analizi izlemelerinin engelini kaldır",
"privacy.group.WebAnalytics.unblock.tooltip":"Ziyaret ettiğiniz diğer web sitelerinde de izlenmenize neden olacak.",
"privacy.group.Others.desc":"Diğerleri",
"privacy.group.Others.block.desc":"Diğer tüm izlemeleri engelle",
"privacy.group.Others.block.tooltip":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde izlemeleri engelleyecek.",
"privacy.group.Others.unblock.desc":"Diğer tüm izlemelerin engelini kaldır",
"privacy.trackersBlockedAll":"{1} sitesindeki <i>{0} izleyicinin tümü</i> engellendi | {1} sitesindeki <i>{0} izleyicinin tümü</i> engellendi",
"privacy.trackersBlockedSome":"{2} sitesindeki <i>{0} / {1} izleyici</i> engellendi | <i>{0} / {1} izleyici</i> {2} sitesinde engellendi",
"privacy.trackersBlockedNone":"{1} sitesinde <i>{0} izleme</i> sistemi bulunuyor | {1} sitesinde <i>{0} izleme</i> sistemi bulunuyor",
"privacy.trackersBlocked":"{0} / {1} engellendi",
"privacy.trackersFound":"{0} tespit edildi",
"privacy.trackersNone":"Yok",
"privacy.trackerBlock.desc":"Engelle",
"privacy.trackerBlock.tooltip":"Bu işlem [{0}] isimli izleyiciyi ziyaret ettiğiniz tüm web sitelerinde engelleyecek.",
"privacy.trackerUnblock.desc":"Engellendi",
"privacy.trackerUnblock.tooltip":"Bu işlem [{0}] adlı izleyicinin ziyaret ettiğiniz tüm web sitelerindeki engelini kaldıracak.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Belirli bir izleyicinin engelini kaldırmak için otomatik engellemeyi kapatın.",
"privacy.automaticBlocking.desc":"Tüm izleyicileri otomatik olarak engelle",
"privacy.automaticBlocking.tooltip":"Ziyaret ettiğiniz web sitelerinde tespit edilen tüm izleyicileri otomatik olarak engelleyeceğiz.",
"setting.title":"Ayarlar",
"setting.serp.name":"Arama sonuçlarımı işaretle",
"setting.serp.desc":"Hangi sonuçlara güvenli bir şekilde tıklanabileceğini görmek için Google ve Yahoo! gibi platformlardaki arama sonuçlarınıza renkli simgeler ekleyin. (Yeşil: Güvenli, Gri: Bilinmiyor, Kırmızı: Güvenli Değil)",
"setting.serpPopup.name":"Arama sonuçları için araç ipuçlarını göster",
"setting.serpPopup.desc":"Daha fazla bilgi edinmek için fareyi simgelerimizin üzerine götürün.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Hassas bilgiler içeren finans siteleri için Banka Modu'na geç (Avast Antivirus ve Avast Secure Browser'ın yüklü olması gerekir)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Hassas bilgiler içeren finans siteleri için Banka Modu'na geç (AVG AntiVirus ve AVG Secure Browser'ın yüklü olması gerekir)",
"setting.dntBadge.name":"Bir sitedeki toplam izleyiciyi göster",
"setting.dntBadge.desc":"Web sitesinde kaç izleyici bulunduğunu hemen görmek için tarayıcınıza bir rozet ekleyin.",
"setting.dntAutoBlock.name":"Tüm izleyicileri otomatik olarak engelle",
"setting.dntAutoBlock.desc":"Bu işlem ziyaret ettiğiniz tüm web sitelerinde tespit edilen tüm izleyicileri engelleyecek.",
"setting.dntSocial.desc":"Tüm sosyal ağ izleyicilerini engelle",
"setting.dntAdTracking.desc":"Tüm reklam izleyicilerini engelle",
"setting.dntWebAnalytics.desc":"Tüm web analizi izleyicilerini engelle",
"setting.dntOthers.desc":"Diğer tüm izleyicileri engelle",
"setting.communityIQ.name":"Kullanım verilerinin üçüncü taraflarla analiz amaçlı paylaşılmasına izin ver",
"serp.safe.desc":"Bu site güvenli",
"serp.bad.desc":"Bu site güvenilir olmayabilir",
"serp.unknown.desc":"Bu site değerlendirilmiş değil",
"serp.unsafe.desc":"Bu site güvenli değil",
"topbar.openBankMode":"Banka modunda aç",
"topbar.desc":"Finansal verileriniz başkaları tarafından görülebilir.",
"topbar.tooltip":"Avast antivirüs ürününüzle yüklenen Avast Secure Browser'ın bir parçası olan Banka Modu bilgisayar korsanlarının kredi kartı numaralarınızı, parolalarınızı ve diğer kişisel verilerinizi çalmasını engellemek için alışveriş ve bankacılık oturumlarını güvenli bir şekilde izole eder.",
"topbar.dontShowAgain":"Bu sitede bir daha gösterme"
},
uk:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Бета-версія",
"global.detailsShow":"Докладніше",
"global.detailsHide":"Сховати деталі",
"global.done":"Готово",
"global.leaveSite":"Закрити веб-сайт",
"global.switcher.off":"ВМК",
"global.switcher.on":"УВ.",
"background.icon.unknown":"{0}: невідомий веб-сайт",
"background.icon.safe":"{0}: цей веб-сайт безпечний",
"background.icon.bad":"{0}: цей веб-сайт може бути ненадійним",
"background.icon.unsafe":"{0}: цей веб-сайт ненадійний",
"security.title":"Безпека",
"security.safe.title":"Цей веб-сайт безпечний.",
"security.safe.item1.desc":"Немає загрози фішингу",
"security.safe.item1.tooltip":"На цьому веб-сайті не виявлено жодних спроб викрадення конфіденційної інформації, зокрема паролів, номерів кредитних карток тощо.",
"security.safe.item2.desc":"Немає шкідливих програм",
"security.safe.item2.tooltip":"На цьому веб-сайті не виявлено шкідливого коду.",
"security.safe.item3.desc":"Надійний",
"security.safe.item3.tooltip":"Користувачі програми {0} оцінили цей сайт як надійний, натиснувши піктограму {1} у програмі {0} Online Security.",
"security.bad.title":"Цей сайт може бути ненадійним.",
"security.bad.desc":"Тут не виявлено жодних фішингових загроз або шкідливих програм, однак багато наших користувачів негативно оцінили цей веб-сайт.",
"security.unknown.title":"Невідомий веб-сайт",
"security.unknown.desc":"У нас недостатньо інформації, щоб оцінити цей веб-сайт.",
"security.unsafe.title":"Цей веб-сайт небезпечний.",
"security.unsafe.phishing.desc":"Цей веб-сайт позначено як фішинговий. Фішинг — це спроба викрасти конфіденційну інформацію, як-от паролі, номери кредитних карток тощо.",
"security.unsafe.malware.desc":"На цьому веб-сайті виявлено шкідливий код, який може зашкодити вашому комп’ютеру або викрасти ваші конфіденційні дані.",
"rating.question.desc":"Ви довіряєте веб-сайту {0}?",
"rating.negative":"Чи містить цей веб-сайт будь-який неприйнятний вміст? (необов’язково)",
"rating.thanks":"Дякуємо за оцінку!",
"rating.trusted.desc":"Ви <i>довіряєте</i> веб-сайту {0}.",
"rating.untrusted.desc":"Ви <i>не довіряєте </i> веб-сайту {0}.",
"rating.revert.tooltip":"Натисніть, щоб видалити оцінку.",
"rating.tooltip":"Ваша довіра або недовіра буде врахована в нашому рейтингу безпеки цього сайту.",
"rating.category.pornography":"Порнографія",
"rating.category.violence":"Зброя та насильство",
"rating.category.gambling":"Азартні ігри",
"rating.category.drugs":"Алкоголь і наркотики",
"rating.category.illegal":"Викрадене ПЗ та інші порушення закону",
"rating.category.others":"Інше",
"privacy.title":"Конфіденційність",
"privacy.group.Social.desc":"Соціальні мережі",
"privacy.group.Social.block.desc":"Блокувати все відстежування соціальними мережами",
"privacy.group.Social.block.tooltip":"Так можна заблокувати відстежування соціальними мережами на всіх відвідуваних веб-сайтах.",
"privacy.group.Social.unblock.desc":"Розблокувати все відстежування соціальними мережами",
"privacy.group.Social.unblock.tooltip":"Так можна розблокувати відстежування соціальними мережами на всіх відвідуваних веб-сайтах.",
"privacy.group.AdTracking.desc":"Відстежування рекламними службами",
"privacy.group.AdTracking.block.desc":"Заблокувати все відстежування рекламними службами",
"privacy.group.AdTracking.block.tooltip":"Так можна заблокувати відстежування рекламними службами на всіх відвідуваних веб-сайтах.",
"privacy.group.AdTracking.unblock.desc":"Розблокувати все відстежування рекламними службами",
"privacy.group.AdTracking.unblock.tooltip":"Так можна розблокувати відстежування рекламними службами на всіх відвідуваних веб-сайтах.",
"privacy.group.WebAnalytics.desc":"Веб-аналітика",
"privacy.group.WebAnalytics.block.desc":"Заблокувати все відстежування службами веб-аналітики",
"privacy.group.WebAnalytics.block.tooltip":"Так можна заблокувати відстежування службами веб-аналітики на всіх відвідуваних веб-сайтах.",
"privacy.group.WebAnalytics.unblock.desc":"Розблокувати все відстежування службами веб-аналітики",
"privacy.group.WebAnalytics.unblock.tooltip":"Так можна розблокувати інше відстежування на всіх відвідуваних веб-сайтах.",
"privacy.group.Others.desc":"Інше",
"privacy.group.Others.block.desc":"Заблокувати все інше відстежування",
"privacy.group.Others.block.tooltip":"Так можна заблокувати інше відстежування на всіх відвідуваних веб-сайтах.",
"privacy.group.Others.unblock.desc":"Розблокувати все інше відстежування",
"privacy.trackersBlockedAll":"На сайті {1} заблоковано <i>єдиний {0} засіб відстежування</i>. | На сайті {1} заблоковано <i>всі {0} засоби відстежування</i>. | На сайті {1} заблоковано <i>всі {0} засобів відстежування</i>. | На сайті {1} заблоковано <i>всі {0} засобу відстежування</i>.",
"privacy.trackersBlockedSome":"На сайті {2} заблоковано <i>засоби відстежування: {0} з {1}</i>. | На сайті {2} заблоковано <i>засоби відстежування: {0} з {1}</i>. | На сайті {2} заблоковано <i>засоби відстежування: {0} з {1}</i>. | На сайті {2} заблоковано <i>засоби відстежування: {0} з {1}</i>.",
"privacy.trackersBlockedNone":"<i>{0} система відстежування</i> на сайті {1} | <i>{0} системи відстежування</i> на сайті {1} | <i>{0} систем відстежування</i> на сайті {1} | <i>{0} системи відстежування</i> на сайті {1}",
"privacy.trackersBlocked":"Заблоковано {0} з {1}",
"privacy.trackersFound":"Знайдено {0}",
"privacy.trackersNone":"немає",
"privacy.trackerBlock.desc":"Заблокувати",
"privacy.trackerBlock.tooltip":"Так можна заблокувати [{0}] на всіх сайтах, які ви відвідуєте.",
"privacy.trackerUnblock.desc":"Заблоковано",
"privacy.trackerUnblock.tooltip":"Так можна розблокувати [{0}] на всіх сайтах, які ви відвідуєте.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Щоб розблокувати окремий засіб відстежування, вимкніть автоматичне блокування.",
"privacy.automaticBlocking.desc":"Автоматично блокувати всі засоби відстежування",
"privacy.automaticBlocking.tooltip":"Ми автоматично блокуватимемо всі виявлені засоби відстежування на всіх сайтах, які ви відвідуєте.",
"setting.title":"Налаштування",
"setting.serp.name":"Позначати результати пошуку",
"setting.serp.desc":"Додавання кольорових піктограм до результатів пошуку в Google, Yahoo! тощо, щоб бачити, які результати безпечні (зелений — безпечно, сірий — невідомо, червоний — небезпечно)",
"setting.serpPopup.name":"Показувати підказки для результатів пошуку",
"setting.serpPopup.desc":"Наведіть мишу на піктограму, щоб отримати докладніші відомості.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Переходити в режим банкінгу в разі відкривання сайтів із конфіденційною фінансовою інформацією (має бути встановлено антивірус Avast і браузер Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Переходити в режим банкінгу в разі відкривання сайтів із конфіденційною фінансовою інформацією (має бути встановлено AVG AntiVirus і Avast Secure Browser)",
"setting.dntBadge.name":"Показувати кількість засобів відстежування на сайті",
"setting.dntBadge.desc":"Додавання в браузер значка, щоб одразу бачити, скільки засобів відстежування на будь-якому сайті",
"setting.dntAutoBlock.name":"Автоматично блокувати всі засоби відстежування",
"setting.dntAutoBlock.desc":"Блокування всіх виявлених засобів відстежування на всіх сайтах, які ви відвідуєте",
"setting.dntSocial.desc":"Блокувати всі засоби відстежування соціальних мереж",
"setting.dntAdTracking.desc":"Блокувати всі рекламні засоби відстежування",
"setting.dntWebAnalytics.desc":"Блокувати всі засоби відстежування служб веб-аналітики",
"setting.dntOthers.desc":"Блокувати всі інші засоби відстежування",
"setting.communityIQ.name":"Дозволити передавання даних про використання стороннім компаніям для аналізу",
"serp.safe.desc":"Цей сайт безпечний.",
"serp.bad.desc":"Цей сайт може бути ненадійним",
"serp.unknown.desc":"Цей сайт не має оцінки.",
"serp.unsafe.desc":"Цей сайт небезпечний.",
"topbar.openBankMode":"Відкрити в режимі банкінгу",
"topbar.desc":"Інші можуть бачити ваші фінансові дані.",
"topbar.tooltip":"Режим банкінгу, частина браузера Avast Secure Browser, установленого разом з антивірусом Avast, безпечно ізолює сеанси покупок і банківських операцій, не даючи хакерам змоги викрасти ваші паролі, номери кредитних карток та інші конфіденційні дані.",
"topbar.dontShowAgain":"Більше не показувати на цьому сайті"
},
ur:{
"AVG.title":"آن لائن سیکورٹی",
"Avast.title":"Avast Online Security",
"global.beta":"بیٹا",
"global.detailsShow":"تفصیلات",
"global.detailsHide":"تفصیلات چھپائیں",
"global.done":"ہو گیا",
"global.leaveSite":"سائٹ چھوڑ دیں",
"global.switcher.off":"آف",
"global.switcher.on":"آن",
"background.icon.unknown":"{0} - نامعلوم سائٹ",
"background.icon.safe":"{0} - یہ ویب سائٹ محفوظ ہے۔",
"background.icon.bad":"{0} - یہ سائٹ غیر معتبر ہو سکتی ہے",
"background.icon.unsafe":"{0} - یہ ویب سائٹ غیر محفوظ ہے۔",
"security.title":"سیکورٹی",
"security.safe.title":"- یہ ویب سائٹ محفوظ ہے۔",
"security.safe.item1.desc":"کوئی جعل سازی نہیں",
"security.safe.item1.tooltip":"ہم نے اس ویب سائٹ پر پاس ورڈ، کریڈٹ کارڈ نمبر، وغیرہ جیسی حساس معلومات کی چوری کرنے کی کسی کوششوں کا پتہ نہیں لگایا ہے۔",
"security.safe.item2.desc":"کوئی مل ویئر نہیں",
"security.safe.item2.tooltip":"ہم نے اس ویب سائٹ پر کسی مضر کوڈ کا پتہ نہیں لگایا ہے۔",
"security.safe.item3.desc":"قابل اعتماد",
"security.safe.item3.tooltip":"{0} آن لائن سیکورٹی کے اندر {1} کلک کرکے {0} صارفین نے اس ویب سائٹ کی درجہ بندی معتبر کے طور پر کی ہے۔",
"security.bad.title":"یہ غیر معتبر ہو سکتی ہے",
"security.bad.desc":"ہمیں یہاں کوئی جعل سازی کے خطرے یا مل ویئر نہیں ملے تھے، لیکن ہمارے بہت سے صارفین نے سائٹ کو پسند نہیں کیا ہے۔",
"security.unknown.title":"نامعلوم سائٹ",
"security.unknown.desc":"اس ویب سئٹ کو ریٹ کرنے کے لیے ہمارے پاس اب تک کافی معلومات نہیں ہیں۔",
"security.unsafe.title":"یہ ویب سائٹ غیر محفوظ ہے",
"security.unsafe.phishing.desc":"یہ ویب سائٹ ایک جعل سازی کی سائٹ کے طور پر نشان زد کی گئی ہے۔ جعل سازی آپ سے پاس ورڈ، کریڈٹ کارڈ نمبر، وغیرہ جیسی حساس معلومات چرانے کی ایک کوشش ہے۔",
"security.unsafe.malware.desc":"ہمیں اس ویب سائٹ پر مضر کوڈ ملے ہیں جو آپ کے کمپیوٹر کو نقصان پہنچا سکتے یا آپ کا نجی ڈیٹا چوری کر سکتے ہیں۔",
"rating.question.desc":"کیا آپ {0} پر اعتماد کرتے ہیں؟",
"rating.negative":"اس ویب سائٹ پر کوئی نامناسب مواد؟ (اختیاری)",
"rating.thanks":"آپ کی ریٹنگ کے لیے شکریہ!",
"rating.trusted.desc":"آپ {0} پر <i>اعتماد</i> کرتے ہیں",
"rating.untrusted.desc":"آپ {0} پر <i>اعتماد</i> نہیں کرتے ہیں",
"rating.revert.tooltip":"اپنی ریٹنگ ہٹانے کے لیے کلک کریں",
"rating.tooltip":"اس ویب سائٹ کے لیے ہماری حفاظتی ریٹنگ میں آپ کے اعتماد یا بے اعتمادی کو مدنظر رکھا جائے گا۔",
"rating.category.pornography":"فحش نگارى",
"rating.category.violence":"ہتھیار / تشدد",
"rating.category.gambling":"جوا",
"rating.category.drugs":"شراب / منشيات",
"rating.category.illegal":"وعریض / غير قانونى",
"rating.category.others":"دیگر",
"privacy.title":"رازداری",
"privacy.group.Social.desc":"سوشل نیٹ ورکس",
"privacy.group.Social.block.desc":"تمام سوشل نیٹ ورک ٹریکنگ بلاک کریں",
"privacy.group.Social.block.tooltip":"یہ ہر ویب سائٹ کی سوشل نیٹ ورک ٹریکنگ کو بلاک کر دے گا جس پر آپ جاتے ہیں۔",
"privacy.group.Social.unblock.desc":"تمام سوشل نیٹ ورک ٹریکنگ کو ان بلاک کریں",
"privacy.group.Social.unblock.tooltip":"یہ ہر ویب سائٹ کی سوشل نیٹ ورک ٹریکنگ کی اجازت دے گا جس پر آپ جاتے ہیں۔",
"privacy.group.AdTracking.desc":"اشتہارات ٹریکنگ",
"privacy.group.AdTracking.block.desc":"تمام اشتہار ٹریکنگ بلاک کریں",
"privacy.group.AdTracking.block.tooltip":"یہ ہر ویب سائٹ کی اشتہار ٹریکنگ کو بلاک کر دے گا جس پر آپ جاتے ہیں۔",
"privacy.group.AdTracking.unblock.desc":"تمام اشتہار ٹریکنگ کو ان بلاک کریں",
"privacy.group.AdTracking.unblock.tooltip":"یہ ہر ویب سائٹ کی اشتہار ٹریکنگ کی اجازت دے گا جس پر آپ جاتے ہیں۔",
"privacy.group.WebAnalytics.desc":"ویب تجزیات",
"privacy.group.WebAnalytics.block.desc":"تمام ویب تجزیاتی ٹریکنگ بلاک کریں",
"privacy.group.WebAnalytics.block.tooltip":"یہ ہر ویب سائٹ کی ویب تجزیاتی ٹریکنگ کو بلاک کر دے گا جس پر آپ جاتے ہیں۔",
"privacy.group.WebAnalytics.unblock.desc":"تمام ویب تجزیاتی ٹریکنگ ان بلاک کریں",
"privacy.group.WebAnalytics.unblock.tooltip":"یہ ہر ویب سائٹ کی دیگر ٹریکنگ کی اجازت دے گا جس پر آپ جاتے ہیں۔",
"privacy.group.Others.desc":"دیگر",
"privacy.group.Others.block.desc":"تمام دیگر ٹریکنگ بلاک کریں",
"privacy.group.Others.block.tooltip":"یہ ہر ویب سائٹ کی دیگر ٹریکنگ کو بلاک کر دے گا جس پر آپ جاتے ہیں۔",
"privacy.group.Others.unblock.desc":"تمام دیگر ٹریکنگ ان بلاک کریں",
"privacy.trackersBlockedAll":"<i>{1} پر سبھی {0} ٹریکر</i> بلاک کر دیے گئے | <i>{1} پر سبھی {0} ٹریکرز</i> بلاک کر دیے گئے",
"privacy.trackersBlockedSome":"<i>{2} پر {1} میں سے {0} ٹریکر</i> بلاک کر دیا گیا | <i>{2} پر {1} میں سے {0} ٹریکرز</i> بلاک کر دیے گئے",
"privacy.trackersBlockedNone":"<i>{1} پر {0} ٹریکنگ</i> سسٹم | <i>{1} پر {0} ٹریکنگ</i> سسٹم",
"privacy.trackersBlocked":"{1} میں سے {0} بلاک کر دیا گیا",
"privacy.trackersFound":"{0} ملا",
"privacy.trackersNone":"کچھ بھی نہیں",
"privacy.trackerBlock.desc":"بلاک کریں",
"privacy.trackerBlock.tooltip":"یہ ہر ویب سائٹ پر [{0}] کو بلاک کر دے گا جس پر آپ جاتے ہیں۔",
"privacy.trackerUnblock.desc":"مسدود",
"privacy.trackerUnblock.tooltip":"یہ ہر ویب سائٹ پر [{0}] کو ان بلاک کر دے گا جس پر آپ جاتے ہیں۔",
"privacy.trackerUnblockOnAutoBlock.tooltip":"ایک مخصوص ٹریکر کو ان بلاک کرنے کے لیے، خودکار بلاکنگ بند کریں۔",
"privacy.automaticBlocking.desc":"تمام ٹریکرز کو خودکار طور پر بلاک کریں",
"privacy.automaticBlocking.tooltip":"ہم ہر ویب سائٹ پر سبھی پائے جانے والے ٹریکرز خودکار طور پر بلاک کر دیں گے جن پر آپ جاتے ہیں۔",
"setting.title":"سيٹنگز",
"setting.serp.name":"میری تلاش کے نتائج کو نشان زد کریں",
"setting.serp.desc":"یہ دیکھنے کے لیے کہ کون سے نتائج کلک کرنے کے لیے محفوظ ہیں، Google، Yahoo!، وغیرہ پر اپنے تلاش نتائج میں رنگین آئیکن شامل کریں۔ (سبز = محفوظ، بھورا = نامعلوم، سرخ = غیر محفوظ)",
"setting.serpPopup.name":"تلاش کے نتائج کے لیے ٹول مشورے دکھائیں",
"setting.serpPopup.desc":"مزید معلومات دیکھنے کے لیے ہمارے آئیکن پر ماؤس لے جائیں۔",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"حساس مالیاتی سائٹس کے لئے بینک موڈ پر سوئچ کریں (Avast اینٹی وائرس اور Avast Secure Browser انسٹال ہونا چاہیے)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"حساس مالیاتی سائٹس کے لئے بینک موڈ پر سوئچ کریں (AVG اینٹی وائرس اور AVG Secure Browser انسٹال ہونا چاہیے)",
"setting.dntBadge.name":"کسی سائٹ پر کل ٹریکرز دیکھیں",
"setting.dntBadge.desc":"کسی ویب سائٹ پر کتنے ٹریکرز ہیں یہ فوری طور پر دیکھنے کے لیے اپنے براؤزر میں ایک بیج شامل کریں۔",
"setting.dntAutoBlock.name":"تمام ٹریکرز کو خودکار طور پر بلاک کریں",
"setting.dntAutoBlock.desc":"ہر ویب سائٹ تمام پائے جانے والے ٹریکرز بلاک کریں جس پر آپ جاتے ہیں۔",
"setting.dntSocial.desc":"تمام سوشل نیٹ ورک ٹریکرز بلاک کریں",
"setting.dntAdTracking.desc":"تمام اشتہار ٹریکرز بلاک کریں",
"setting.dntWebAnalytics.desc":"تمام ویب تجزیاتی ٹریکرز بلاک کریں",
"setting.dntOthers.desc":"تمام دیگر ٹریکرز بلاک کریں",
"setting.communityIQ.name":"استعمال کے ڈیٹا کو تجزیات کے لیے فریقین ثالث کے ساتھ اشتراک کی اجازت دیں",
"serp.safe.desc":"یہ سائٹ محفوظ ہے",
"serp.bad.desc":"یہ سائٹ غیر معتبر ہو سکتی ہے",
"serp.unknown.desc":"اس ویب سائٹ کى کوئی ریٹنگ نہیں ہے",
"serp.unsafe.desc":"یہ سائٹ غیر محفوظ ہے",
"topbar.openBankMode":"بینک موڈ میں کھولیں",
"topbar.desc":"آپ کا مالیاتی ڈیٹا دوسروں کو دکھائی دے سکتا ہے۔",
"topbar.tooltip":"آپ کے Avast اینٹی وائرس کے ساتھ انسٹال شدہ Avast محفوظ براؤز کا حصہ، بینک موڈ ہیکرز کو آپ کے کریڈٹ کارڈ نمبرز، پاس ورڈ، اور دیگر ذاتی ڈیٹا کوچرانے سے روکنے کے لیے خریداری اور بینکنگ سیشن کو تحفظ کے ساتھ علیحدہ کرتا ہے۔",
"topbar.dontShowAgain":"اس سائٹ پر دوبارہ نہ دکھائیں"
},
vi:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"Bản beta",
"global.detailsShow":"Chi tiết",
"global.detailsHide":"Ẩn chi tiết",
"global.done":"Xong",
"global.leaveSite":"Rời khỏi trang",
"global.switcher.off":"TẮT",
"global.switcher.on":"BẬT",
"background.icon.unknown":"{0} - Trang không xác định",
"background.icon.safe":"{0} - Trang web này an toàn",
"background.icon.bad":"{0} - Trang web này có thể không đáng tin",
"background.icon.unsafe":"{0} - Trang web này không an toàn",
"security.title":"Bảo mật",
"security.safe.title":"Trang web này an toàn",
"security.safe.item1.desc":"Không lừa đảo",
"security.safe.item1.tooltip":"Chúng tôi chưa phát hiện bất cứ nỗ lực đánh cắp thông tin nhạy cảm nào như mật khẩu, số thẻ tín dụng, v. v. trên trang web này.",
"security.safe.item2.desc":"Không có phần mềm độc hại",
"security.safe.item2.tooltip":"Chúng tôi chưa phát hiện bất cứ mã độc hại nào trên trang web này.",
"security.safe.item3.desc":"Đáng tin cậy",
"security.safe.item3.tooltip":"{0} người dùng đã đánh giá trang web này là đáng tin cậy bằng cách nhấp vào {1} trong {0} Online Security.",
"security.bad.title":"Trang web này có thể không đáng tin",
"security.bad.desc":"Chúng tôi không tìm thấy bất cứ mối đe dọa lừa đảo hay phần mềm độc hại nào ở đây nhưng rất nhiều người dùng của chúng tôi không thích trang này.",
"security.unknown.title":"Trang không xác định",
"security.unknown.desc":"Chúng tôi chưa có đủ thông tin để xếp hạng trang web này.",
"security.unsafe.title":"Trang web này không an toàn",
"security.unsafe.phishing.desc":"Trang web này đã được đánh dấu là trang lừa đảo. Lừa đảo là hành vi tìm cách đánh cắp thông tin nhạy cảm của bạn như mật khẩu, số thẻ tín dụng, v.v.",
"security.unsafe.malware.desc":"Chúng tôi đã phát hiện mã độc hại trên trang web này, mã này có thể gây hại cho máy tính hoặc đánh cắp dữ liệu riêng tư của bạn.",
"rating.question.desc":"Bạn có tin tưởng {0} không?",
"rating.negative":"Có bất cứ nội dung không phù hợp nào trên trang web này không? (tùy chọn)",
"rating.thanks":"Cảm ơn bạn đã đánh giá!",
"rating.trusted.desc":"Bạn <i>tin tưởng</i> {0}",
"rating.untrusted.desc":"Bạn <i>không tin</i> {0}",
"rating.revert.tooltip":"Nhấp để xóa đánh giá của bạn",
"rating.tooltip":"Việc bạn tin hoặc không tin tưởng sẽ được tính vào đánh giá an toàn của chúng tôi cho trang web này.",
"rating.category.pornography":"Khiêu dâm",
"rating.category.violence":"Vũ khí / Bạo lực",
"rating.category.gambling":"Trò cờ bạc",
"rating.category.drugs":"Rượu / Chất gây nghiện",
"rating.category.illegal":"Phần mềm lậu / Bất hợp pháp",
"rating.category.others":"Khác",
"privacy.title":"Quyền riêng tư",
"privacy.group.Social.desc":"Mạng xã hội",
"privacy.group.Social.block.desc":"Chặn mọi hành vi theo dõi mạng xã hội",
"privacy.group.Social.block.tooltip":"Tính năng này sẽ chặn hành vi theo dõi mạng xã hội trên mọi trang web bạn truy cập.",
"privacy.group.Social.unblock.desc":"Bỏ chặn mọi hành vi theo dõi mạng xã hội",
"privacy.group.Social.unblock.tooltip":"Tính năng này sẽ cho phép hành vi theo dõi mạng xã hội trên mọi trang web bạn truy cập.",
"privacy.group.AdTracking.desc":"Theo dõi quảng cáo",
"privacy.group.AdTracking.block.desc":"Chặn mọi hành vi theo dõi quảng cáo",
"privacy.group.AdTracking.block.tooltip":"Tính năng này sẽ chặn hành vi theo dõi quảng cáo trên mọi trang web bạn truy cập.",
"privacy.group.AdTracking.unblock.desc":"Bỏ chặn hành vi theo dõi quảng cáo",
"privacy.group.AdTracking.unblock.tooltip":"Tính năng này sẽ cho phép hành vi theo dõi quảng cáo trên mọi trang web bạn truy cập.",
"privacy.group.WebAnalytics.desc":"Phân tích trang web",
"privacy.group.WebAnalytics.block.desc":"Chặn mọi hành vi theo dõi phân tích trang web",
"privacy.group.WebAnalytics.block.tooltip":"Tính năng này sẽ chặn hành vi theo dõi phân tích trang web trên mọi trang web bạn truy cập.",
"privacy.group.WebAnalytics.unblock.desc":"Bỏ chặn mọi hành vi theo dõi phân tích trang web",
"privacy.group.WebAnalytics.unblock.tooltip":"Tính năng này sẽ cho phép các hành vi theo dõi khác trên mọi trang web bạn truy cập.",
"privacy.group.Others.desc":"Khác",
"privacy.group.Others.block.desc":"Chặn mọi hành vi theo dõi khác",
"privacy.group.Others.block.tooltip":"Tính năng này sẽ chặn các hành vi theo dõi khác trên mọi trang web bạn truy cập.",
"privacy.group.Others.unblock.desc":"Bỏ chặn mọi hành vi theo dõi khác",
"privacy.trackersBlockedAll":"<i>Đã chặn tất cả {0} kẻ theo dõi</i> trên {1}",
"privacy.trackersBlockedSome":"<i>Đã chặn {0}/{1} kẻ theo dõi</i> trên {2}",
"privacy.trackersBlockedNone":"<i>{0} đang theo dõi</i> hệ thống trên {1}",
"privacy.trackersBlocked":"Đã chặn {0}/{1}",
"privacy.trackersFound":"Đã phát hiện {0}",
"privacy.trackersNone":"không làm gì",
"privacy.trackerBlock.desc":"Chặn",
"privacy.trackerBlock.tooltip":"Tính năng này sẽ chặn [{0}] trên mọi trang web bạn truy cập.",
"privacy.trackerUnblock.desc":"Đã chặn",
"privacy.trackerUnblock.tooltip":"Tính năng này sẽ bỏ chặn [{0}] trên mọi trang web bạn truy cập.",
"privacy.trackerUnblockOnAutoBlock.tooltip":"Để bỏ chặn một kẻ theo dõi cụ thể, hãy tắt tính năng chặn tự động.",
"privacy.automaticBlocking.desc":"Tự động chặn mọi kẻ theo dõi",
"privacy.automaticBlocking.tooltip":"Chúng tôi sẽ tự động chặn mọi kẻ theo dõi phát hiện được trên mọi trang web bạn truy cập.",
"setting.title":"Cài đặt",
"setting.serp.name":"Đánh dấu kết quả tìm kiếm của tôi",
"setting.serp.desc":"Thêm biểu tượng màu vào kết quả tìm kiếm của bạn trên Google, Yahoo!, v.v. để xem kết quả nào an toàn khi nhấp. (Màu lục = An toàn, Màu xám = Không xác định, Màu đỏ = Không an toàn)",
"setting.serpPopup.name":"Hiển thị gợi ý về kết quả tìm kiếm",
"setting.serpPopup.desc":"Lướt chuột qua các biểu tượng của chúng tôi để xem thêm thông tin.",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"Chuyển sang Chế độ Ngân hàng đối với các trang web tài chính nhạy cảm (cần cài đặt Avast Antivirus và Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"Chuyển sang Chế độ Ngân hàng đối với các trang web tài chính nhạy cảm (cần cài đặt AVG AntiVirus và AVG Secure Browser)",
"setting.dntBadge.name":"Hiển thị tổng số kẻ theo dõi trên trang",
"setting.dntBadge.desc":"Thêm huy hiệu vào trình duyệt để xem ngay số lượng kẻ theo dõi trên trang web bất kỳ.",
"setting.dntAutoBlock.name":"Tự động chặn mọi kẻ theo dõi",
"setting.dntAutoBlock.desc":"Chặn mọi kẻ theo dõi phát hiện được trên mọi trang web bạn truy cập.",
"setting.dntSocial.desc":"Chặn mọi kẻ theo dõi mạng xã hội",
"setting.dntAdTracking.desc":"Chặn mọi kẻ theo dõi quảng cáo",
"setting.dntWebAnalytics.desc":"Chặn mọi kẻ theo dõi phân tích trang web",
"setting.dntOthers.desc":"Chặn mọi kẻ theo dõi khác",
"setting.communityIQ.name":"Cho phép chia sẻ mức sử dụng dữ liệu với bên thứ ba để phân tích",
"serp.safe.desc":"Trang web này an toàn",
"serp.bad.desc":"Trang web này có thể không đáng tin",
"serp.unknown.desc":"Trang web này chưa được đánh giá",
"serp.unsafe.desc":"Trang web này không an toàn",
"topbar.openBankMode":"Mở trong chế độ ngân hàng",
"topbar.desc":"Người khác có thể nhìn thấy dữ liệu tài chính của bạn.",
"topbar.tooltip":"Chế độ Ngân hàng, một phần của Avast Secure Browser được cài đặt với phần mềm chống virus Avast của bạn, giúp cách ly an toàn các phiên mua sắm và giao dịch ngân hàng để ngăn tin tặc đánh cắp số thẻ tín dụng, mật khẩu và các dữ liệu riêng tư khác của bạn.",
"topbar.dontShowAgain":"Không hiển thị lại trên trang này"
},
zh_CN:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"测试版",
"global.detailsShow":"详细信息",
"global.detailsHide":"隐藏详细信息",
"global.done":"完成",
"global.leaveSite":"离开网站",
"global.switcher.off":"关闭",
"global.switcher.on":"开启",
"background.icon.unknown":"{0} -未知站点",
"background.icon.safe":"{0} -此网站是安全的",
"background.icon.bad":"{0} -此网站可能不可信",
"background.icon.unsafe":"{0} -此网站不安全",
"security.title":"安全",
"security.safe.title":"此网站安全",
"security.safe.item1.desc":"无网络钓鱼",
"security.safe.item1.tooltip":"在此网站上我们尚未检测到窃取敏感信息的任何企图，比如密码、信用卡号等。",
"security.safe.item2.desc":"无恶意软件",
"security.safe.item2.tooltip":"在此网站上我们尚未检测到任何恶意代码。",
"security.safe.item3.desc":"可信任",
"security.safe.item3.tooltip":"{0} 用户已通过在 {0} Online Security 内点击 {1} 将此网站评定为可信网站。",
"security.bad.title":"此网站可能不可信",
"security.bad.desc":"我们在此网站未发现任何网络钓鱼威胁或恶意软件， 但我们的许多用户对此网站给出差评。",
"security.unknown.title":"未知站点",
"security.unknown.desc":"我们没有足够的信息用于评价此网站。",
"security.unsafe.title":"此网站不安全",
"security.unsafe.phishing.desc":"此网站已标记为网络钓鱼网站。网络钓鱼指企图窃取您的密码和信用卡之类的敏感信息。",
"security.unsafe.malware.desc":"我们在此网站上发现可能损害您的计算机或窃取您的私人数据的恶意代码。",
"rating.question.desc":"您是否信任 {0}？",
"rating.negative":"此网站上有任何不当内容？（可选）",
"rating.thanks":"感谢您的评价！",
"rating.trusted.desc":"您 <i>信任</i> {0}",
"rating.untrusted.desc":"您 <i>不信任</i> {0}",
"rating.revert.tooltip":"点击可移除您的评价",
"rating.tooltip":"您的信任或不信任将作为此网站安全评级的考虑因素",
"rating.category.pornography":"色情",
"rating.category.violence":"武器 / 暴力",
"rating.category.gambling":"赌博",
"rating.category.drugs":"酒精/ 毒品",
"rating.category.illegal":"盗版 / 非法",
"rating.category.others":"其他",
"privacy.title":"隐私",
"privacy.group.Social.desc":"社交网络",
"privacy.group.Social.block.desc":"拦截所有社交网络跟踪",
"privacy.group.Social.block.tooltip":"这将在您访问的每个网站上拦截社交网络跟踪。",
"privacy.group.Social.unblock.desc":"取消拦截所有社交网络跟踪",
"privacy.group.Social.unblock.tooltip":"这将在您访问的每个网站上允许社交网络跟踪。",
"privacy.group.AdTracking.desc":"广告跟踪",
"privacy.group.AdTracking.block.desc":"拦截所有广告跟踪",
"privacy.group.AdTracking.block.tooltip":"这将在您访问的每个网站上拦截广告跟踪。",
"privacy.group.AdTracking.unblock.desc":"取消拦截所有广告跟踪",
"privacy.group.AdTracking.unblock.tooltip":"这将在您访问的每个网站上允许广告跟踪。",
"privacy.group.WebAnalytics.desc":"Web 分析",
"privacy.group.WebAnalytics.block.desc":"拦截所有 Web 分析跟踪",
"privacy.group.WebAnalytics.block.tooltip":"这将在您访问的每个网站上拦截 Web 分析跟踪。",
"privacy.group.WebAnalytics.unblock.desc":"取消拦截所有 Web 分析跟踪",
"privacy.group.WebAnalytics.unblock.tooltip":"这将在您访问的每个网站上允许其他跟踪。",
"privacy.group.Others.desc":"其他",
"privacy.group.Others.block.desc":"拦截所有其他跟踪",
"privacy.group.Others.block.tooltip":"这将在您访问的每个网站上拦截其他跟踪。",
"privacy.group.Others.unblock.desc":"取消拦截所有其他跟踪",
"privacy.trackersBlockedAll":"在 {1} 拦截了<i>所有 {0} 跟踪器</i>",
"privacy.trackersBlockedSome":"在 {2} 拦截了<i> {0} / {1} 个 跟踪器</i>",
"privacy.trackersBlockedNone":"在 {1} 上<i>{0} 跟踪</i> 系统",
"privacy.trackersBlocked":"已拦截 {0}/{1}",
"privacy.trackersFound":"{0} 已找到",
"privacy.trackersNone":"什么也没有",
"privacy.trackerBlock.desc":"拦截",
"privacy.trackerBlock.tooltip":"这将在您访问的每个网站上拦截[{0}]。",
"privacy.trackerUnblock.desc":"已拦截",
"privacy.trackerUnblock.tooltip":"这将在您访问的每个网站上取消拦截[{0}]。",
"privacy.trackerUnblockOnAutoBlock.tooltip":"要取消拦截特定跟踪器，请关闭自动拦截功能。",
"privacy.automaticBlocking.desc":"自动拦截所有跟踪器",
"privacy.automaticBlocking.tooltip":"我们将在您访问的每个网站上自动拦截已发现的所有跟踪器。",
"setting.title":"设置",
"setting.serp.name":"标记我的搜索结果",
"setting.serp.desc":"在 Google、Yahoo! 等上面向您的搜索结果添加彩色图标， 以查看哪些结果可以安全点击。(绿色 = 安全, 灰色 = 未知, 红色 = 不安全)",
"setting.serpPopup.name":"显示搜索结果的工具提示",
"setting.serpPopup.desc":"将鼠标悬停在我们的图标上， 以查看更多信息。",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"切换到银行模式浏览敏感的财务网站（需要安装 Avast Antivirus 和 Avast Secure Browser）",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"切换到银行模式浏览敏感的财务网站（需要安装 AVG Antivirus 和 AVG Secure Browser）",
"setting.dntBadge.name":"显示网站上的跟踪器总数",
"setting.dntBadge.desc":"向您的浏览器中添加徽章，以便立即查看任何网站上有多少跟踪器。",
"setting.dntAutoBlock.name":"自动拦截所有跟踪器",
"setting.dntAutoBlock.desc":"在您访问的每个网站上拦截已发现的所有跟踪器。",
"setting.dntSocial.desc":"拦截所有社交网络跟踪器",
"setting.dntAdTracking.desc":"拦截所有广告跟踪器",
"setting.dntWebAnalytics.desc":"拦截所有 web 分析跟踪器",
"setting.dntOthers.desc":"拦截所有其他跟踪器",
"setting.communityIQ.name":"允许与第三方机构分享使用数据，以便进行分析",
"serp.safe.desc":"此网站安全",
"serp.bad.desc":"此网站可能不可信",
"serp.unknown.desc":"此网站没有评级",
"serp.unsafe.desc":"此网站不安全",
"topbar.openBankMode":"在银行模式中打开",
"topbar.desc":"您的财务数据可能对他人可见。",
"topbar.tooltip":"银行模式是随 Avast 防病毒软件安装的 Avast Secure Browser 的一部分，可安全隔离购物和银行会话，以阻止黑客窃取您的信用卡号码、密码和其他私有数据。",
"topbar.dontShowAgain":"在此站点上不再显示"
},
zh_TW:{
"AVG.title":"Online Security",
"Avast.title":"Avast Online Security",
"global.beta":"測試版",
"global.detailsShow":"詳細資料",
"global.detailsHide":"隱藏詳細資料",
"global.done":"完成",
"global.leaveSite":"離開網站",
"global.switcher.off":"關閉",
"global.switcher.on":"開啟",
"background.icon.unknown":"{0} - 未知的網站",
"background.icon.safe":"{0} - 這個網站很安全",
"background.icon.bad":"{0} - 這個網站可能不值得信賴",
"background.icon.unsafe":"{0} - 這個網站不安全",
"security.title":"安全",
"security.safe.title":"這個網站很安全",
"security.safe.item1.desc":"沒有網路釣魚",
"security.safe.item1.tooltip":"我們尚未在這個網站上偵測到任何企圖竊取密碼、信用卡號碼等敏感資訊的行為。",
"security.safe.item2.desc":"沒有惡意軟體",
"security.safe.item2.tooltip":"我們尚未在這個網站上偵測到任何惡意程式碼。",
"security.safe.item3.desc":"受信任",
"security.safe.item3.tooltip":"{0} 使用者已在 {0} Online Security 中按 {1}，將這個網站評為值得信賴。",
"security.bad.title":"可能不值得信賴",
"security.bad.desc":"我們並未在這裡發現任何網路釣魚威脅或惡意軟體，不過很多使用者給了負面評價。",
"security.unknown.title":"未知的網站",
"security.unknown.desc":"我們還沒有足夠的資訊可以給予這個網站評價。",
"security.unsafe.title":"這個網站不安全",
"security.unsafe.phishing.desc":"這個網站已被標示為網路釣魚網站。網路釣魚會企圖竊取如密碼、信用卡號碼等敏感資訊。",
"security.unsafe.malware.desc":"我們在這個網站上發現惡意程式碼，可能會損害您的電腦或竊取私人資料。",
"rating.question.desc":"您信任 {0} 嗎？",
"rating.negative":"網站上有任何不適當的內容嗎？(選填)",
"rating.thanks":"感謝您給予評價！",
"rating.trusted.desc":"您<i>信任</i> {0}",
"rating.untrusted.desc":"您<i>不信任</i> {0}",
"rating.revert.tooltip":"按一下可移除評價",
"rating.tooltip":"您的信任與否會影響我們給予網站的安全評價。",
"rating.category.pornography":"色情",
"rating.category.violence":"武器 / 暴力",
"rating.category.gambling":"賭博",
"rating.category.drugs":"酒類 / 毒品",
"rating.category.illegal":"盜版 / 違法",
"rating.category.others":"其他",
"privacy.title":"隱私",
"privacy.group.Social.desc":"社群網路",
"privacy.group.Social.block.desc":"封鎖所有社群網路追蹤",
"privacy.group.Social.block.tooltip":"在您每次造訪網站時封鎖社群網路追蹤。",
"privacy.group.Social.unblock.desc":"解除封鎖所有社群網路追蹤",
"privacy.group.Social.unblock.tooltip":"在您每次造訪網站時允許社群網路追蹤。",
"privacy.group.AdTracking.desc":"廣告追蹤",
"privacy.group.AdTracking.block.desc":"封鎖所有廣告追蹤",
"privacy.group.AdTracking.block.tooltip":"在您每次造訪網站時封鎖廣告追蹤。",
"privacy.group.AdTracking.unblock.desc":"解除封鎖所有廣告追蹤",
"privacy.group.AdTracking.unblock.tooltip":"在您每次造訪網站時允許廣告追蹤。",
"privacy.group.WebAnalytics.desc":"網頁分析",
"privacy.group.WebAnalytics.block.desc":"封鎖所有網頁分析追蹤",
"privacy.group.WebAnalytics.block.tooltip":"在您每次造訪網站時封鎖網頁分析追蹤。",
"privacy.group.WebAnalytics.unblock.desc":"解除封鎖所有網頁分析追蹤",
"privacy.group.WebAnalytics.unblock.tooltip":"在您每次造訪網站時允許其他追蹤。",
"privacy.group.Others.desc":"其他",
"privacy.group.Others.block.desc":"封鎖其他所有追蹤",
"privacy.group.Others.block.tooltip":"在您每次造訪網站時封鎖其他追蹤。",
"privacy.group.Others.unblock.desc":"解除封鎖其他所有追蹤",
"privacy.trackersBlockedAll":"在 {1} 上<i>全數封鎖了 {0} 個追蹤器</i>",
"privacy.trackersBlockedSome":"在 {2} 上封鎖了 <i>{0} 個追蹤器，共發現 {1} 個</i>",
"privacy.trackersBlockedNone":"在 {1} 上發現 <i>{0} 個追蹤</i>系統",
"privacy.trackersBlocked":"封鎖了 {0} 個，共發現 {1} 個",
"privacy.trackersFound":"發現 {0} 個",
"privacy.trackersNone":"無",
"privacy.trackerBlock.desc":"封鎖",
"privacy.trackerBlock.tooltip":"在您每次造訪網站時封鎖 [{0}]。",
"privacy.trackerUnblock.desc":"已封鎖",
"privacy.trackerUnblock.tooltip":"在您每次造訪網站時解除封鎖 [{0}]。",
"privacy.trackerUnblockOnAutoBlock.tooltip":"若要解除封鎖特定追蹤器，請關閉自動封鎖功能。",
"privacy.automaticBlocking.desc":"自動封鎖所有追蹤器",
"privacy.automaticBlocking.tooltip":"我們將會在您每次造訪網站時自動封鎖所有發現的追蹤器。",
"setting.title":"設定",
"setting.serp.name":"標示我的搜尋結果",
"setting.serp.desc":"將彩色圖示加入 Google、Yahoo! 等網站的搜尋結果中，以便查看可以安全點選的結果。(綠色 = 安全，灰色 = 未知，紅色 = 不安全)",
"setting.serpPopup.name":"顯示搜尋結果的工具提示",
"setting.serpPopup.desc":"將滑鼠游標移動到我們的圖示上方，即可查看更多資訊。",
"setting.secureBrowser.Avast.name":"Secure Browser",
"setting.secureBrowser.Avast.desc":"切換到銀行模式來瀏覽敏感的金融網站 (需要安裝 Avast Antivirus 及 Avast Secure Browser)",
"setting.secureBrowser.AVG.name":"Secure Browser",
"setting.secureBrowser.AVG.desc":"切換到銀行模式來瀏覽敏感的金融網站 (需要安裝 AVG AntiVirus 及 AVG Secure Browser)",
"setting.dntBadge.name":"顯示網站上的追蹤器總數",
"setting.dntBadge.desc":"將徽章新增至瀏覽器，以便立即查看任何網站上的追蹤器數量。",
"setting.dntAutoBlock.name":"自動封鎖所有追蹤器",
"setting.dntAutoBlock.desc":"在您每次造訪網站時自動封鎖所有發現的追蹤器。",
"setting.dntSocial.desc":"封鎖所有社群網路追蹤器",
"setting.dntAdTracking.desc":"封鎖所有廣告追蹤器",
"setting.dntWebAnalytics.desc":"封鎖所有網頁分析追蹤器",
"setting.dntOthers.desc":"封鎖其他所有追蹤器",
"setting.communityIQ.name":"允許和第三方共用使用資料，以進行分析",
"serp.safe.desc":"這個網站很安全",
"serp.bad.desc":"這個網站可能不值得信賴",
"serp.unknown.desc":"這個網站沒有任何評價",
"serp.unsafe.desc":"這個網站不安全",
"topbar.openBankMode":"在銀行模式中開啟",
"topbar.desc":"其他人可能會看到您的財務資料。",
"topbar.tooltip":"銀行模式是您在安裝 Avast 防毒軟體時一併安裝的 Avast Secure Browser 部件，能以安全的方式隔離購物與銀行交易工作階段，預防駭客竊取您的信用卡號碼、密碼與其他私人資料。",
"topbar.dontShowAgain":"下次造訪這個網站時不要再顯示"
}
}
},function(e,t){
e.exports={
ar:function(e){
return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11&&e%100<=99?4:5)
},
be:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:e%10==0||e%10>=5&&e%10<=9||e%100>=11&&e%100<=14?2:3)
},
bg:function(e){
return Number(1!=e)
},
bn:function(e){
return Number(1!=e)
},
ca:function(e){
return Number(1!=e)
},
cs:function(e){
return Number(1==e?0:e>=2&&e<=4?1:3)
},
da:function(e){
return Number(1!=e)
},
de:function(e){
return Number(1!=e)
},
el:function(e){
return Number(1!=e)
},
en:function(e){
return Number(1!=e)
},
es:function(e){
return Number(1!=e)
},
et:function(e){
return Number(1!=e)
},
fa:function(e){
return Number(1!=e)
},
fi:function(e){
return Number(1!=e)
},
fr:function(e){
return Number(e>1)
},
he:function(e){
return Number(e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3)
},
hi:function(e){
return Number(1!=e)
},
hr:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)
},
hu:function(e){
return Number(1!=e)
},
id:function(e){
return Number(0)
},
it:function(e){
return Number(1!=e)
},
ja:function(e){
return Number(0)
},
ko:function(e){
return Number(0)
},
lt:function(e){
return Number(e%10==1&&(e%100>19||e%100<11)?0:e%10>=2&&e%10<=9&&(e%100>19||e%100<11)?1:e%1!=0?2:3)
},
lv:function(e){
return Number(0==e?0:e%10==1&&e%100!=11?1:2)
},
ms:function(e){
return Number(0)
},
nb:function(e){
return Number(1!=e)
},
nl:function(e){
return Number(1!=e)
},
pl:function(e){
return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:1!=e&&e%10>=0&&e%10<=1||e%10>=5&&e%10<=9||e%100>=12&&e%100<=14?2:3)
},
pt_BR:function(e){
return Number(1!=e)
},
pt_PT:function(e){
return Number(1!=e)
},
ro:function(e){
return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)
},
ru:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:e%10==0||e%10>=5&&e%10<=9||e%100>=11&&e%100<=14?2:3)
},
sk:function(e){
return Number(1==e?0:e>=2&&e<=4?1:3)
},
sl:function(e){
return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)
},
sr:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)
},
sv:function(e){
return Number(1!=e)
},
tr:function(e){
return Number(1!=e)
},
uk:function(e){
return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?1:e%10==0||e%10>=5&&e%10<=9||e%100>=11&&e%100<=14?2:3)
},
ur:function(e){
return Number(1!=e)
},
vi:function(e){
return Number(0)
},
zh_CN:function(e){
return Number(0)
},
zh_TW:function(e){
return Number(0)
}
}
},function(e,t){
e.exports=function(e){
var t={
en_gb:"en_GB",
pt:"pt_BR",
pt_br:"pt_BR",
pt_pt:"pt_PT",
zh:"zh_TW",
zh_tw:"zh_TW",
zh_cn:"zh_CN"
},i=(e=e||{
getLocalResourceURL:function(e){
return e
},
getRawLocalizedString:function(e){
return e
},
getRawBrowserLocale:function(){
return"en"
}
}).getRawBrowserLocale(),a=i.split("-"),o=a[0],r=a[a.length-1]
return{
getLocalResourceURL:e.getLocalResourceURL,
getRawLocalizedString:e.getRawLocalizedString,
getLocalizedString:function(t,i){
return this.insertInResourceFormat(e.getRawLocalizedString(t),i)
},
insertInResourceFormat:function(e,t){
for(var i in t){
e=e.replace("%s",t[i])
}
return e
},
localizeTemplate:function(e){
return e?e.replace(/\[\[(img|string):([^,\]]+)(?:,([^,\]]+)(?:,([^,\]]+)(?:,([^,\]]+))?)?)?\]\]/gi,function(e,t,i,a,o,r,n,s){
return"img"==t?this.getLocalResourceURL(i):"string"==t?this.getLocalizedString(i,[a,o,r]):i
}.bind(this)):e
},
getBrowserLang:function(){
return o
},
getBrowserLocale:function(){
return r
},
getAdjustedBrowserLang:function(){
var e=i.replace("-","_"),a=t[e.toLowerCase()]
if(a){
e=a
}else{
var o=e.indexOf("_")
o>=0&&(e=e.substr(0,o))
}
return e
}
}
}
},function(e,t,i){
var a="undefined"!=typeof global&&global||"undefined"!=typeof self&&self||window,o=Function.prototype.apply
function r(e,t){
this._id=e,this._clearFn=t
}
t.setTimeout=function(){
return new r(o.call(setTimeout,a,arguments),clearTimeout)
},t.setInterval=function(){
return new r(o.call(setInterval,a,arguments),clearInterval)
},t.clearTimeout=t.clearInterval=function(e){
e&&e.close()
},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){
this._clearFn.call(a,this._id)
},t.enroll=function(e,t){
clearTimeout(e._idleTimeoutId),e._idleTimeout=t
},t.unenroll=function(e){
clearTimeout(e._idleTimeoutId),e._idleTimeout=-1
},t._unrefActive=t.active=function(e){
clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout((function(){
e._onTimeout&&e._onTimeout()
}),t))
},i(25),t.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof global&&global.setImmediate||this&&this.setImmediate,
t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof global&&global.clearImmediate||this&&this.clearImmediate
},function(e,t,i){
(function(e){
!function(t,i){
"use strict"
if(!t.setImmediate){
var a,o,r,n,s,l=1,c={},u=!1,p=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t)
d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?a=function(t){
e.nextTick((function(){
m(t)
}))
}:!function(){
if(t.postMessage&&!t.importScripts){
var e=!0,i=t.onmessage
return t.onmessage=function(){
e=!1
},t.postMessage("","*"),t.onmessage=i,e
}
}()?t.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){
m(e.data)
},a=function(e){
r.port2.postMessage(e)
}):p&&"onreadystatechange"in p.createElement("script")?(o=p.documentElement,
a=function(e){
var t=p.createElement("script")
t.onreadystatechange=function(){
m(e),t.onreadystatechange=null,o.removeChild(t),
t=null
},o.appendChild(t)
}):a=function(e){
setTimeout(m,0,e)
}:(n="setImmediate$"+Math.random()+"$",s=function(e){
e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(n)&&m(+e.data.slice(n.length))
},
t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),
a=function(e){
t.postMessage(n+e,"*")
}),d.setImmediate=function(e){
"function"!=typeof e&&(e=new Function(""+e))
for(var t=new Array(arguments.length-1),i=0;i<t.length;i++){
t[i]=arguments[i+1]
}
var o={
callback:e,
args:t
}
return c[l]=o,a(l),l++
},d.clearImmediate=g
}
function g(e){
delete c[e]
}
function m(e){
if(u){
setTimeout(m,0,e)
}else{
var t=c[e]
if(t){
u=!0
try{
!function(e){
var t=e.callback,a=e.args
switch(a.length){
case 0:
t()
break
case 1:
t(a[0])
break
case 2:
t(a[0],a[1])
break
case 3:
t(a[0],a[1],a[2])
break
default:
t.apply(i,a)
}
}(t)
}finally{
g(e),u=!1
}
}
}
}
}("undefined"==typeof self?"undefined"==typeof global?this:global:self)
}).call(this,i(6))
},function(e,t,i){
(function(a){
var o
!function(r){
var n=Array.isArray?Array.isArray:function(e){
return"[object Array]"===Object.prototype.toString.call(e)
},s=10
function l(){
this._events={},this._conf&&c.call(this,this._conf)
}
function c(e){
e?(this._conf=e,e.delimiter&&(this.delimiter=e.delimiter),this._maxListeners=e.maxListeners!==r?e.maxListeners:s,
e.wildcard&&(this.wildcard=e.wildcard),
e.newListener&&(this._newListener=e.newListener),
e.removeListener&&(this._removeListener=e.removeListener),
e.verboseMemoryLeak&&(this.verboseMemoryLeak=e.verboseMemoryLeak),
this.wildcard&&(this.listenerTree={})):this._maxListeners=s
}
function u(e,t){
var i="(node) warning: possible EventEmitter memory leak detected. "+e+" listeners added. Use emitter.setMaxListeners() to increase limit."
if(this.verboseMemoryLeak&&(i+=" Event name: "+t+"."),void 0!==a&&a.emitWarning){
var o=new Error(i)
o.name="MaxListenersExceededWarning",o.emitter=this,o.count=e,a.emitWarning(o)
}else{
console.trace
}
}
function p(e){
this._events={},this._newListener=!1,this._removeListener=!1,this.verboseMemoryLeak=!1,
c.call(this,e)
}
function d(e,t,i,a){
if(!i){
return[]
}
var o,r,n,s,l,c,u,p=[],g=t.length,m=t[a],h=t[a+1]
if(a===g&&i._listeners){
if("function"==typeof i._listeners){
return e&&e.push(i._listeners),[i]
}
for(o=0,r=i._listeners.length;o<r;o++){
e&&e.push(i._listeners[o])
}
return[i]
}
if("*"===m||"**"===m||i[m]){
if("*"===m){
for(n in i){
"_listeners"!==n&&i.hasOwnProperty(n)&&(p=p.concat(d(e,t,i[n],a+1)))
}
return p
}
if("**"===m){
for(n in(u=a+1===g||a+2===g&&"*"===h)&&i._listeners&&(p=p.concat(d(e,t,i,g))),
i){
"_listeners"!==n&&i.hasOwnProperty(n)&&("*"===n||"**"===n?(i[n]._listeners&&!u&&(p=p.concat(d(e,t,i[n],g))),
p=p.concat(d(e,t,i[n],a))):p=n===h?p.concat(d(e,t,i[n],a+2)):p.concat(d(e,t,i[n],a)))
}
return p
}
p=p.concat(d(e,t,i[m],a+1))
}
if((s=i["*"])&&d(e,t,s,a+1),l=i["**"]){
if(a<g){
for(n in l._listeners&&d(e,t,l,g),l){
"_listeners"!==n&&l.hasOwnProperty(n)&&(n===h?d(e,t,l[n],a+2):n===m?d(e,t,l[n],a+1):((c={})[n]=l[n],
d(e,t,{
"**":c
},a+1)))
}
}else{
l._listeners?d(e,t,l,g):l["*"]&&l["*"]._listeners&&d(e,t,l["*"],g)
}
}
return p
}
function g(e,t){
for(var i=0,a=(e="string"==typeof e?e.split(this.delimiter):e.slice()).length;i+1<a;i++){
if("**"===e[i]&&"**"===e[i+1]){
return
}
}
for(var o=this.listenerTree,n=e.shift();n!==r;){
if(o[n]||(o[n]={}),o=o[n],0===e.length){
return o._listeners?("function"==typeof o._listeners&&(o._listeners=[o._listeners]),
o._listeners.push(t),
!o._listeners.warned&&this._maxListeners>0&&o._listeners.length>this._maxListeners&&(o._listeners.warned=!0,
u.call(this,o._listeners.length,n))):o._listeners=t,
!0
}
n=e.shift()
}
return!0
}
p.EventEmitter2=p,p.prototype.delimiter=".",p.prototype.setMaxListeners=function(e){
e!==r&&(this._maxListeners=e,
this._conf||(this._conf={}),this._conf.maxListeners=e)
},p.prototype.event="",p.prototype.once=function(e,t){
return this._once(e,t,!1)
},p.prototype.prependOnceListener=function(e,t){
return this._once(e,t,!0)
},p.prototype._once=function(e,t,i){
return this._many(e,1,t,i),this
},p.prototype.many=function(e,t,i){
return this._many(e,t,i,!1)
},p.prototype.prependMany=function(e,t,i){
return this._many(e,t,i,!0)
},p.prototype._many=function(e,t,i,a){
var o=this
if("function"!=typeof i){
throw new Error("many only accepts instances of Function")
}
function r(){
return 0==--t&&o.off(e,r),i.apply(this,arguments)
}
return r._origin=i,this._on(e,r,a),o
},p.prototype.emit=function(){
this._events||l.call(this)
var e=arguments[0]
if("newListener"===e&&!this._newListener&&!this._events.newListener){
return!1
}
var t,i,a,o,r,n=arguments.length
if(this._all&&this._all.length){
if(r=this._all.slice(),n>3){
for(t=new Array(n),o=0;o<n;o++){
t[o]=arguments[o]
}
}
for(a=0,i=r.length;a<i;a++){
switch(this.event=e,n){
case 1:
r[a].call(this,e)
break
case 2:
r[a].call(this,e,arguments[1])
break
case 3:
r[a].call(this,e,arguments[1],arguments[2])
break
default:
r[a].apply(this,t)
}
}
}
if(this.wildcard){
r=[]
var s="string"==typeof e?e.split(this.delimiter):e.slice()
d.call(this,r,s,this.listenerTree,0)
}else{
if("function"==typeof(r=this._events[e])){
switch(this.event=e,n){
case 1:
r.call(this)
break
case 2:
r.call(this,arguments[1])
break
case 3:
r.call(this,arguments[1],arguments[2])
break
default:
for(t=new Array(n-1),o=1;o<n;o++){
t[o-1]=arguments[o]
}
r.apply(this,t)
}
return!0
}
r&&(r=r.slice())
}
if(r&&r.length){
if(n>3){
for(t=new Array(n-1),o=1;o<n;o++){
t[o-1]=arguments[o]
}
}
for(a=0,i=r.length;a<i;a++){
switch(this.event=e,n){
case 1:
r[a].call(this)
break
case 2:
r[a].call(this,arguments[1])
break
case 3:
r[a].call(this,arguments[1],arguments[2])
break
default:
r[a].apply(this,t)
}
}
return!0
}
if(!this._all&&"error"===e){
throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.")
}
return!!this._all
},p.prototype.emitAsync=function(){
this._events||l.call(this)
var e=arguments[0]
if("newListener"===e&&!this._newListener&&!this._events.newListener){
return Promise.resolve([!1])
}
var t,i,a,o,r,n=[],s=arguments.length
if(this._all){
if(s>3){
for(t=new Array(s),o=1;o<s;o++){
t[o]=arguments[o]
}
}
for(a=0,i=this._all.length;a<i;a++){
switch(this.event=e,s){
case 1:
n.push(this._all[a].call(this,e))
break
case 2:
n.push(this._all[a].call(this,e,arguments[1]))
break
case 3:
n.push(this._all[a].call(this,e,arguments[1],arguments[2]))
break
default:
n.push(this._all[a].apply(this,t))
}
}
}
if(this.wildcard){
r=[]
var c="string"==typeof e?e.split(this.delimiter):e.slice()
d.call(this,r,c,this.listenerTree,0)
}else{
r=this._events[e]
}
if("function"==typeof r){
switch(this.event=e,s){
case 1:
n.push(r.call(this))
break
case 2:
n.push(r.call(this,arguments[1]))
break
case 3:
n.push(r.call(this,arguments[1],arguments[2]))
break
default:
for(t=new Array(s-1),o=1;o<s;o++){
t[o-1]=arguments[o]
}
n.push(r.apply(this,t))
}
}else if(r&&r.length){
if(r=r.slice(),s>3){
for(t=new Array(s-1),o=1;o<s;o++){
t[o-1]=arguments[o]
}
}
for(a=0,i=r.length;a<i;a++){
switch(this.event=e,s){
case 1:
n.push(r[a].call(this))
break
case 2:
n.push(r[a].call(this,arguments[1]))
break
case 3:
n.push(r[a].call(this,arguments[1],arguments[2]))
break
default:
n.push(r[a].apply(this,t))
}
}
}else if(!this._all&&"error"===e){
return arguments[1]instanceof Error?Promise.reject(arguments[1]):Promise.reject("Uncaught, unspecified 'error' event.")
}
return Promise.all(n)
},p.prototype.on=function(e,t){
return this._on(e,t,!1)
},p.prototype.prependListener=function(e,t){
return this._on(e,t,!0)
},p.prototype.onAny=function(e){
return this._onAny(e,!1)
},p.prototype.prependAny=function(e){
return this._onAny(e,!0)
},p.prototype.addListener=p.prototype.on,p.prototype._onAny=function(e,t){
if("function"!=typeof e){
throw new Error("onAny only accepts instances of Function")
}
return this._all||(this._all=[]),t?this._all.unshift(e):this._all.push(e),this
},
p.prototype._on=function(e,t,i){
if("function"==typeof e){
return this._onAny(e,t),this
}
if("function"!=typeof t){
throw new Error("on only accepts instances of Function")
}
return this._events||l.call(this),this._newListener&&this.emit("newListener",e,t),
this.wildcard?(g.call(this,e,t),
this):(this._events[e]?("function"==typeof this._events[e]&&(this._events[e]=[this._events[e]]),
i?this._events[e].unshift(t):this._events[e].push(t),
!this._events[e].warned&&this._maxListeners>0&&this._events[e].length>this._maxListeners&&(this._events[e].warned=!0,
u.call(this,this._events[e].length,e))):this._events[e]=t,
this)
},p.prototype.off=function(e,t){
if("function"!=typeof t){
throw new Error("removeListener only takes instances of Function")
}
var i,a=[]
if(this.wildcard){
var o="string"==typeof e?e.split(this.delimiter):e.slice()
a=d.call(this,null,o,this.listenerTree,0)
}else{
if(!this._events[e]){
return this
}
i=this._events[e],a.push({
_listeners:i
})
}
for(var s=0;s<a.length;s++){
var l=a[s]
if(i=l._listeners,n(i)){
for(var c=-1,u=0,p=i.length;u<p;u++){
if(i[u]===t||i[u].listener&&i[u].listener===t||i[u]._origin&&i[u]._origin===t){
c=u
break
}
}
if(c<0){
continue
}
return this.wildcard?l._listeners.splice(c,1):this._events[e].splice(c,1),0===i.length&&(this.wildcard?delete l._listeners:delete this._events[e]),
this._removeListener&&this.emit("removeListener",e,t),
this
}
(i===t||i.listener&&i.listener===t||i._origin&&i._origin===t)&&(this.wildcard?delete l._listeners:delete this._events[e],
this._removeListener&&this.emit("removeListener",e,t))
}
return function e(t){
if(t!==r){
var i=Object.keys(t)
for(var a in i){
var o=i[a],n=t[o]
n instanceof Function||"object"!=typeof n||null===n||(Object.keys(n).length>0&&e(t[o]),
0===Object.keys(n).length&&delete t[o])
}
}
}(this.listenerTree),this
},p.prototype.offAny=function(e){
var t,i=0,a=0
if(e&&this._all&&this._all.length>0){
for(i=0,a=(t=this._all).length;i<a;i++){
if(e===t[i]){
return t.splice(i,1),this._removeListener&&this.emit("removeListenerAny",e),
this
}
}
}else{
if(t=this._all,this._removeListener){
for(i=0,a=t.length;i<a;i++){
this.emit("removeListenerAny",t[i])
}
}
this._all=[]
}
return this
},p.prototype.removeListener=p.prototype.off,p.prototype.removeAllListeners=function(e){
if(e===r){
return!this._events||l.call(this),this
}
if(this.wildcard){
for(var t="string"==typeof e?e.split(this.delimiter):e.slice(),i=d.call(this,null,t,this.listenerTree,0),a=0;a<i.length;a++){
i[a]._listeners=null
}
}else{
this._events&&(this._events[e]=null)
}
return this
},p.prototype.listeners=function(e){
if(this.wildcard){
var t=[],i="string"==typeof e?e.split(this.delimiter):e.slice()
return d.call(this,t,i,this.listenerTree,0),t
}
return this._events||l.call(this),this._events[e]||(this._events[e]=[]),n(this._events[e])||(this._events[e]=[this._events[e]]),
this._events[e]
},p.prototype.eventNames=function(){
return Object.keys(this._events)
},p.prototype.listenerCount=function(e){
return this.listeners(e).length
},p.prototype.listenersAny=function(){
return this._all?this._all:[]
},(o=function(){
return p
}.call(t,i,t,e))===r||(e.exports=o)
}()
}).call(this,i(6))
},function(e,t,i){
(function(e){
var a
!function(o){
t&&t.nodeType,e&&e.nodeType
var r="object"==typeof global&&global
r.global!==r&&r.window!==r&&r.self
var n,s=2147483647,l=36,c=1,u=26,p=38,d=700,g=72,m=128,h="-",k=/^xn--/,b=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,y={
overflow:"Overflow: input needs wider integers to process",
"not-basic":"Illegal input >= 0x80 (not a basic code point)",
"invalid-input":"Invalid input"
},v=l-c,w=Math.floor,j=String.fromCharCode
function A(e){
throw new RangeError(y[e])
}
function S(e,t){
for(var i=e.length,a=[];i--;){
a[i]=t(e[i])
}
return a
}
function T(e,t){
var i=e.split("@"),a=""
return i.length>1&&(a=i[0]+"@",e=i[1]),a+S((e=e.replace(f,".")).split("."),t).join(".")
}
function O(e){
for(var t,i,a=[],o=0,r=e.length;o<r;){
(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<r?56320==(64512&(i=e.charCodeAt(o++)))?a.push(((1023&t)<<10)+(1023&i)+65536):(a.push(t),
o--):a.push(t)
}
return a
}
function E(e){
return S(e,(function(e){
var t=""
return e>65535&&(t+=j((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=j(e)
})).join("")
}
function I(e,t){
return e+22+75*(e<26)-((0!=t)<<5)
}
function R(e,t,i){
var a=0
for(e=i?w(e/d):e>>1,e+=w(e/t);e>v*u>>1;a+=l){
e=w(e/v)
}
return w(a+(v+1)*e/(e+p))
}
function _(e){
var t,i,a,o,r,n,p,d,k,b,f,y=[],v=e.length,j=0,S=m,T=g
for((i=e.lastIndexOf(h))<0&&(i=0),a=0;a<i;++a){
e.charCodeAt(a)>=128&&A("not-basic"),
y.push(e.charCodeAt(a))
}
for(o=i>0?i+1:0;o<v;){
for(r=j,n=1,p=l;o>=v&&A("invalid-input"),((d=(f=e.charCodeAt(o++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:l)>=l||d>w((s-j)/n))&&A("overflow"),
j+=d*n,
!(d<(k=p<=T?c:p>=T+u?u:p-T));p+=l){
n>w(s/(b=l-k))&&A("overflow"),n*=b
}
T=R(j-r,t=y.length+1,0==r),w(j/t)>s-S&&A("overflow"),S+=w(j/t),j%=t,y.splice(j++,0,S)
}
return E(y)
}
function B(e){
var t,i,a,o,r,n,p,d,k,b,f,y,v,S,T,E=[]
for(y=(e=O(e)).length,t=m,i=0,r=g,n=0;n<y;++n){
(f=e[n])<128&&E.push(j(f))
}
for(a=o=E.length,o&&E.push(h);a<y;){
for(p=s,n=0;n<y;++n){
(f=e[n])>=t&&f<p&&(p=f)
}
for(p-t>w((s-i)/(v=a+1))&&A("overflow"),i+=(p-t)*v,t=p,n=0;n<y;++n){
if((f=e[n])<t&&++i>s&&A("overflow"),
f==t){
for(d=i,k=l;!(d<(b=k<=r?c:k>=r+u?u:k-r));k+=l){
T=d-b,S=l-b,E.push(j(I(b+T%S,0))),
d=w(T/S)
}
E.push(j(I(d,0))),r=R(i,v,a==o),i=0,++a
}
}
++i,++t
}
return E.join("")
}
n={
version:"1.4.1",
ucs2:{
decode:O,
encode:E
},
decode:_,
encode:B,
toASCII:function(e){
return T(e,(function(e){
return b.test(e)?"xn--"+B(e):e
}))
},
toUnicode:function(e){
return T(e,(function(e){
return k.test(e)?_(e.slice(4).toLowerCase()):e
}))
}
},void 0===(a=function(){
return n
}.call(t,i,t,e))||(e.exports=a)
}()
}).call(this,i(28)(e))
},function(e,t){
e.exports=function(e){
return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],
e.children||(e.children=[]),
Object.defineProperty(e,"loaded",{
enumerable:!0,
get:function(){
return e.l
}
}),Object.defineProperty(e,"id",{
enumerable:!0,
get:function(){
return e.i
}
}),e.webpackPolyfill=1),e
}
},function(e){
e.exports=["ac","com.ac","edu.ac","gov.ac","net.ac","mil.ac","org.ac","ad","nom.ad","ae","co.ae","net.ae","org.ae","sch.ae","ac.ae","gov.ae","mil.ae","aero","accident-investigation.aero","accident-prevention.aero","aerobatic.aero","aeroclub.aero","aerodrome.aero","agents.aero","aircraft.aero","airline.aero","airport.aero","air-surveillance.aero","airtraffic.aero","air-traffic-control.aero","ambulance.aero","amusement.aero","association.aero","author.aero","ballooning.aero","broker.aero","caa.aero","cargo.aero","catering.aero","certification.aero","championship.aero","charter.aero","civilaviation.aero","club.aero","conference.aero","consultant.aero","consulting.aero","control.aero","council.aero","crew.aero","design.aero","dgca.aero","educator.aero","emergency.aero","engine.aero","engineer.aero","entertainment.aero","equipment.aero","exchange.aero","express.aero","federation.aero","flight.aero","freight.aero","fuel.aero","gliding.aero","government.aero","groundhandling.aero","group.aero","hanggliding.aero","homebuilt.aero","insurance.aero","journal.aero","journalist.aero","leasing.aero","logistics.aero","magazine.aero","maintenance.aero","media.aero","microlight.aero","modelling.aero","navigation.aero","parachuting.aero","paragliding.aero","passenger-association.aero","pilot.aero","press.aero","production.aero","recreation.aero","repbody.aero","res.aero","research.aero","rotorcraft.aero","safety.aero","scientist.aero","services.aero","show.aero","skydiving.aero","software.aero","student.aero","trader.aero","trading.aero","trainer.aero","union.aero","workinggroup.aero","works.aero","af","gov.af","com.af","org.af","net.af","edu.af","ag","com.ag","org.ag","net.ag","co.ag","nom.ag","ai","off.ai","com.ai","net.ai","org.ai","al","com.al","edu.al","gov.al","mil.al","net.al","org.al","am","co.am","com.am","commune.am","net.am","org.am","ao","ed.ao","gv.ao","og.ao","co.ao","pb.ao","it.ao","aq","ar","com.ar","edu.ar","gob.ar","gov.ar","int.ar","mil.ar","musica.ar","net.ar","org.ar","tur.ar","arpa","e164.arpa","in-addr.arpa","ip6.arpa","iris.arpa","uri.arpa","urn.arpa","as","gov.as","asia","at","ac.at","co.at","gv.at","or.at","au","com.au","net.au","org.au","edu.au","gov.au","asn.au","id.au","info.au","conf.au","oz.au","act.au","nsw.au","nt.au","qld.au","sa.au","tas.au","vic.au","wa.au","act.edu.au","catholic.edu.au","eq.edu.au","nsw.edu.au","nt.edu.au","qld.edu.au","sa.edu.au","tas.edu.au","vic.edu.au","wa.edu.au","qld.gov.au","sa.gov.au","tas.gov.au","vic.gov.au","wa.gov.au","education.tas.edu.au","schools.nsw.edu.au","aw","com.aw","ax","az","com.az","net.az","int.az","gov.az","org.az","edu.az","info.az","pp.az","mil.az","name.az","pro.az","biz.az","ba","com.ba","edu.ba","gov.ba","mil.ba","net.ba","org.ba","bb","biz.bb","co.bb","com.bb","edu.bb","gov.bb","info.bb","net.bb","org.bb","store.bb","tv.bb","*.bd","be","ac.be","bf","gov.bf","bg","a.bg","b.bg","c.bg","d.bg","e.bg","f.bg","g.bg","h.bg","i.bg","j.bg","k.bg","l.bg","m.bg","n.bg","o.bg","p.bg","q.bg","r.bg","s.bg","t.bg","u.bg","v.bg","w.bg","x.bg","y.bg","z.bg","0.bg","1.bg","2.bg","3.bg","4.bg","5.bg","6.bg","7.bg","8.bg","9.bg","bh","com.bh","edu.bh","net.bh","org.bh","gov.bh","bi","co.bi","com.bi","edu.bi","or.bi","org.bi","biz","bj","asso.bj","barreau.bj","gouv.bj","bm","com.bm","edu.bm","gov.bm","net.bm","org.bm","bn","com.bn","edu.bn","gov.bn","net.bn","org.bn","bo","com.bo","edu.bo","gob.bo","int.bo","org.bo","net.bo","mil.bo","tv.bo","web.bo","academia.bo","agro.bo","arte.bo","blog.bo","bolivia.bo","ciencia.bo","cooperativa.bo","democracia.bo","deporte.bo","ecologia.bo","economia.bo","empresa.bo","indigena.bo","industria.bo","info.bo","medicina.bo","movimiento.bo","musica.bo","natural.bo","nombre.bo","noticias.bo","patria.bo","politica.bo","profesional.bo","plurinacional.bo","pueblo.bo","revista.bo","salud.bo","tecnologia.bo","tksat.bo","transporte.bo","wiki.bo","br","9guacu.br","abc.br","adm.br","adv.br","agr.br","aju.br","am.br","anani.br","aparecida.br","arq.br","art.br","ato.br","b.br","barueri.br","belem.br","bhz.br","bio.br","blog.br","bmd.br","boavista.br","bsb.br","campinagrande.br","campinas.br","caxias.br","cim.br","cng.br","cnt.br","com.br","contagem.br","coop.br","cri.br","cuiaba.br","curitiba.br","def.br","ecn.br","eco.br","edu.br","emp.br","eng.br","esp.br","etc.br","eti.br","far.br","feira.br","flog.br","floripa.br","fm.br","fnd.br","fortal.br","fot.br","foz.br","fst.br","g12.br","ggf.br","goiania.br","gov.br","ac.gov.br","al.gov.br","am.gov.br","ap.gov.br","ba.gov.br","ce.gov.br","df.gov.br","es.gov.br","go.gov.br","ma.gov.br","mg.gov.br","ms.gov.br","mt.gov.br","pa.gov.br","pb.gov.br","pe.gov.br","pi.gov.br","pr.gov.br","rj.gov.br","rn.gov.br","ro.gov.br","rr.gov.br","rs.gov.br","sc.gov.br","se.gov.br","sp.gov.br","to.gov.br","gru.br","imb.br","ind.br","inf.br","jab.br","jampa.br","jdf.br","joinville.br","jor.br","jus.br","leg.br","lel.br","londrina.br","macapa.br","maceio.br","manaus.br","maringa.br","mat.br","med.br","mil.br","morena.br","mp.br","mus.br","natal.br","net.br","niteroi.br","*.nom.br","not.br","ntr.br","odo.br","ong.br","org.br","osasco.br","palmas.br","poa.br","ppg.br","pro.br","psc.br","psi.br","pvh.br","qsl.br","radio.br","rec.br","recife.br","ribeirao.br","rio.br","riobranco.br","riopreto.br","salvador.br","sampa.br","santamaria.br","santoandre.br","saobernardo.br","saogonca.br","sjc.br","slg.br","slz.br","sorocaba.br","srv.br","taxi.br","tc.br","teo.br","the.br","tmp.br","trd.br","tur.br","tv.br","udi.br","vet.br","vix.br","vlog.br","wiki.br","zlg.br","bs","com.bs","net.bs","org.bs","edu.bs","gov.bs","bt","com.bt","edu.bt","gov.bt","net.bt","org.bt","bv","bw","co.bw","org.bw","by","gov.by","mil.by","com.by","of.by","bz","com.bz","net.bz","org.bz","edu.bz","gov.bz","ca","ab.ca","bc.ca","mb.ca","nb.ca","nf.ca","nl.ca","ns.ca","nt.ca","nu.ca","on.ca","pe.ca","qc.ca","sk.ca","yk.ca","gc.ca","cat","cc","cd","gov.cd","cf","cg","ch","ci","org.ci","or.ci","com.ci","co.ci","edu.ci","ed.ci","ac.ci","net.ci","go.ci","asso.ci","aéroport.ci","int.ci","presse.ci","md.ci","gouv.ci","*.ck","!www.ck","cl","gov.cl","gob.cl","co.cl","mil.cl","cm","co.cm","com.cm","gov.cm","net.cm","cn","ac.cn","com.cn","edu.cn","gov.cn","net.cn","org.cn","mil.cn","公司.cn","网络.cn","網絡.cn","ah.cn","bj.cn","cq.cn","fj.cn","gd.cn","gs.cn","gz.cn","gx.cn","ha.cn","hb.cn","he.cn","hi.cn","hl.cn","hn.cn","jl.cn","js.cn","jx.cn","ln.cn","nm.cn","nx.cn","qh.cn","sc.cn","sd.cn","sh.cn","sn.cn","sx.cn","tj.cn","xj.cn","xz.cn","yn.cn","zj.cn","hk.cn","mo.cn","tw.cn","co","arts.co","com.co","edu.co","firm.co","gov.co","info.co","int.co","mil.co","net.co","nom.co","org.co","rec.co","web.co","com","coop","cr","ac.cr","co.cr","ed.cr","fi.cr","go.cr","or.cr","sa.cr","cu","com.cu","edu.cu","org.cu","net.cu","gov.cu","inf.cu","cv","cw","com.cw","edu.cw","net.cw","org.cw","cx","gov.cx","cy","ac.cy","biz.cy","com.cy","ekloges.cy","gov.cy","ltd.cy","name.cy","net.cy","org.cy","parliament.cy","press.cy","pro.cy","tm.cy","cz","de","dj","dk","dm","com.dm","net.dm","org.dm","edu.dm","gov.dm","do","art.do","com.do","edu.do","gob.do","gov.do","mil.do","net.do","org.do","sld.do","web.do","dz","com.dz","org.dz","net.dz","gov.dz","edu.dz","asso.dz","pol.dz","art.dz","ec","com.ec","info.ec","net.ec","fin.ec","k12.ec","med.ec","pro.ec","org.ec","edu.ec","gov.ec","gob.ec","mil.ec","edu","ee","edu.ee","gov.ee","riik.ee","lib.ee","med.ee","com.ee","pri.ee","aip.ee","org.ee","fie.ee","eg","com.eg","edu.eg","eun.eg","gov.eg","mil.eg","name.eg","net.eg","org.eg","sci.eg","*.er","es","com.es","nom.es","org.es","gob.es","edu.es","et","com.et","gov.et","org.et","edu.et","biz.et","name.et","info.et","net.et","eu","fi","aland.fi","*.fj","*.fk","fm","fo","fr","asso.fr","com.fr","gouv.fr","nom.fr","prd.fr","tm.fr","aeroport.fr","avocat.fr","avoues.fr","cci.fr","chambagri.fr","chirurgiens-dentistes.fr","experts-comptables.fr","geometre-expert.fr","greta.fr","huissier-justice.fr","medecin.fr","notaires.fr","pharmacien.fr","port.fr","veterinaire.fr","ga","gb","gd","ge","com.ge","edu.ge","gov.ge","org.ge","mil.ge","net.ge","pvt.ge","gf","gg","co.gg","net.gg","org.gg","gh","com.gh","edu.gh","gov.gh","org.gh","mil.gh","gi","com.gi","ltd.gi","gov.gi","mod.gi","edu.gi","org.gi","gl","co.gl","com.gl","edu.gl","net.gl","org.gl","gm","gn","ac.gn","com.gn","edu.gn","gov.gn","org.gn","net.gn","gov","gp","com.gp","net.gp","mobi.gp","edu.gp","org.gp","asso.gp","gq","gr","com.gr","edu.gr","net.gr","org.gr","gov.gr","gs","gt","com.gt","edu.gt","gob.gt","ind.gt","mil.gt","net.gt","org.gt","gu","com.gu","edu.gu","gov.gu","guam.gu","info.gu","net.gu","org.gu","web.gu","gw","gy","co.gy","com.gy","edu.gy","gov.gy","net.gy","org.gy","hk","com.hk","edu.hk","gov.hk","idv.hk","net.hk","org.hk","公司.hk","教育.hk","敎育.hk","政府.hk","個人.hk","个人.hk","箇人.hk","網络.hk","网络.hk","组織.hk","網絡.hk","网絡.hk","组织.hk","組織.hk","組织.hk","hm","hn","com.hn","edu.hn","org.hn","net.hn","mil.hn","gob.hn","hr","iz.hr","from.hr","name.hr","com.hr","ht","com.ht","shop.ht","firm.ht","info.ht","adult.ht","net.ht","pro.ht","org.ht","med.ht","art.ht","coop.ht","pol.ht","asso.ht","edu.ht","rel.ht","gouv.ht","perso.ht","hu","co.hu","info.hu","org.hu","priv.hu","sport.hu","tm.hu","2000.hu","agrar.hu","bolt.hu","casino.hu","city.hu","erotica.hu","erotika.hu","film.hu","forum.hu","games.hu","hotel.hu","ingatlan.hu","jogasz.hu","konyvelo.hu","lakas.hu","media.hu","news.hu","reklam.hu","sex.hu","shop.hu","suli.hu","szex.hu","tozsde.hu","utazas.hu","video.hu","id","ac.id","biz.id","co.id","desa.id","go.id","mil.id","my.id","net.id","or.id","ponpes.id","sch.id","web.id","ie","gov.ie","il","ac.il","co.il","gov.il","idf.il","k12.il","muni.il","net.il","org.il","im","ac.im","co.im","com.im","ltd.co.im","net.im","org.im","plc.co.im","tt.im","tv.im","in","co.in","firm.in","net.in","org.in","gen.in","ind.in","nic.in","ac.in","edu.in","res.in","gov.in","mil.in","info","int","eu.int","io","com.io","iq","gov.iq","edu.iq","mil.iq","com.iq","org.iq","net.iq","ir","ac.ir","co.ir","gov.ir","id.ir","net.ir","org.ir","sch.ir","ایران.ir","ايران.ir","is","net.is","com.is","edu.is","gov.is","org.is","int.is","it","gov.it","edu.it","abr.it","abruzzo.it","aosta-valley.it","aostavalley.it","bas.it","basilicata.it","cal.it","calabria.it","cam.it","campania.it","emilia-romagna.it","emiliaromagna.it","emr.it","friuli-v-giulia.it","friuli-ve-giulia.it","friuli-vegiulia.it","friuli-venezia-giulia.it","friuli-veneziagiulia.it","friuli-vgiulia.it","friuliv-giulia.it","friulive-giulia.it","friulivegiulia.it","friulivenezia-giulia.it","friuliveneziagiulia.it","friulivgiulia.it","fvg.it","laz.it","lazio.it","lig.it","liguria.it","lom.it","lombardia.it","lombardy.it","lucania.it","mar.it","marche.it","mol.it","molise.it","piedmont.it","piemonte.it","pmn.it","pug.it","puglia.it","sar.it","sardegna.it","sardinia.it","sic.it","sicilia.it","sicily.it","taa.it","tos.it","toscana.it","trentin-sud-tirol.it","trentin-süd-tirol.it","trentin-sudtirol.it","trentin-südtirol.it","trentin-sued-tirol.it","trentin-suedtirol.it","trentino-a-adige.it","trentino-aadige.it","trentino-alto-adige.it","trentino-altoadige.it","trentino-s-tirol.it","trentino-stirol.it","trentino-sud-tirol.it","trentino-süd-tirol.it","trentino-sudtirol.it","trentino-südtirol.it","trentino-sued-tirol.it","trentino-suedtirol.it","trentino.it","trentinoa-adige.it","trentinoaadige.it","trentinoalto-adige.it","trentinoaltoadige.it","trentinos-tirol.it","trentinostirol.it","trentinosud-tirol.it","trentinosüd-tirol.it","trentinosudtirol.it","trentinosüdtirol.it","trentinosued-tirol.it","trentinosuedtirol.it","trentinsud-tirol.it","trentinsüd-tirol.it","trentinsudtirol.it","trentinsüdtirol.it","trentinsued-tirol.it","trentinsuedtirol.it","tuscany.it","umb.it","umbria.it","val-d-aosta.it","val-daosta.it","vald-aosta.it","valdaosta.it","valle-aosta.it","valle-d-aosta.it","valle-daosta.it","valleaosta.it","valled-aosta.it","valledaosta.it","vallee-aoste.it","vallée-aoste.it","vallee-d-aoste.it","vallée-d-aoste.it","valleeaoste.it","valléeaoste.it","valleedaoste.it","valléedaoste.it","vao.it","vda.it","ven.it","veneto.it","ag.it","agrigento.it","al.it","alessandria.it","alto-adige.it","altoadige.it","an.it","ancona.it","andria-barletta-trani.it","andria-trani-barletta.it","andriabarlettatrani.it","andriatranibarletta.it","ao.it","aosta.it","aoste.it","ap.it","aq.it","aquila.it","ar.it","arezzo.it","ascoli-piceno.it","ascolipiceno.it","asti.it","at.it","av.it","avellino.it","ba.it","balsan-sudtirol.it","balsan-südtirol.it","balsan-suedtirol.it","balsan.it","bari.it","barletta-trani-andria.it","barlettatraniandria.it","belluno.it","benevento.it","bergamo.it","bg.it","bi.it","biella.it","bl.it","bn.it","bo.it","bologna.it","bolzano-altoadige.it","bolzano.it","bozen-sudtirol.it","bozen-südtirol.it","bozen-suedtirol.it","bozen.it","br.it","brescia.it","brindisi.it","bs.it","bt.it","bulsan-sudtirol.it","bulsan-südtirol.it","bulsan-suedtirol.it","bulsan.it","bz.it","ca.it","cagliari.it","caltanissetta.it","campidano-medio.it","campidanomedio.it","campobasso.it","carbonia-iglesias.it","carboniaiglesias.it","carrara-massa.it","carraramassa.it","caserta.it","catania.it","catanzaro.it","cb.it","ce.it","cesena-forli.it","cesena-forlì.it","cesenaforli.it","cesenaforlì.it","ch.it","chieti.it","ci.it","cl.it","cn.it","co.it","como.it","cosenza.it","cr.it","cremona.it","crotone.it","cs.it","ct.it","cuneo.it","cz.it","dell-ogliastra.it","dellogliastra.it","en.it","enna.it","fc.it","fe.it","fermo.it","ferrara.it","fg.it","fi.it","firenze.it","florence.it","fm.it","foggia.it","forli-cesena.it","forlì-cesena.it","forlicesena.it","forlìcesena.it","fr.it","frosinone.it","ge.it","genoa.it","genova.it","go.it","gorizia.it","gr.it","grosseto.it","iglesias-carbonia.it","iglesiascarbonia.it","im.it","imperia.it","is.it","isernia.it","kr.it","la-spezia.it","laquila.it","laspezia.it","latina.it","lc.it","le.it","lecce.it","lecco.it","li.it","livorno.it","lo.it","lodi.it","lt.it","lu.it","lucca.it","macerata.it","mantova.it","massa-carrara.it","massacarrara.it","matera.it","mb.it","mc.it","me.it","medio-campidano.it","mediocampidano.it","messina.it","mi.it","milan.it","milano.it","mn.it","mo.it","modena.it","monza-brianza.it","monza-e-della-brianza.it","monza.it","monzabrianza.it","monzaebrianza.it","monzaedellabrianza.it","ms.it","mt.it","na.it","naples.it","napoli.it","no.it","novara.it","nu.it","nuoro.it","og.it","ogliastra.it","olbia-tempio.it","olbiatempio.it","or.it","oristano.it","ot.it","pa.it","padova.it","padua.it","palermo.it","parma.it","pavia.it","pc.it","pd.it","pe.it","perugia.it","pesaro-urbino.it","pesarourbino.it","pescara.it","pg.it","pi.it","piacenza.it","pisa.it","pistoia.it","pn.it","po.it","pordenone.it","potenza.it","pr.it","prato.it","pt.it","pu.it","pv.it","pz.it","ra.it","ragusa.it","ravenna.it","rc.it","re.it","reggio-calabria.it","reggio-emilia.it","reggiocalabria.it","reggioemilia.it","rg.it","ri.it","rieti.it","rimini.it","rm.it","rn.it","ro.it","roma.it","rome.it","rovigo.it","sa.it","salerno.it","sassari.it","savona.it","si.it","siena.it","siracusa.it","so.it","sondrio.it","sp.it","sr.it","ss.it","suedtirol.it","südtirol.it","sv.it","ta.it","taranto.it","te.it","tempio-olbia.it","tempioolbia.it","teramo.it","terni.it","tn.it","to.it","torino.it","tp.it","tr.it","trani-andria-barletta.it","trani-barletta-andria.it","traniandriabarletta.it","tranibarlettaandria.it","trapani.it","trento.it","treviso.it","trieste.it","ts.it","turin.it","tv.it","ud.it","udine.it","urbino-pesaro.it","urbinopesaro.it","va.it","varese.it","vb.it","vc.it","ve.it","venezia.it","venice.it","verbania.it","vercelli.it","verona.it","vi.it","vibo-valentia.it","vibovalentia.it","vicenza.it","viterbo.it","vr.it","vs.it","vt.it","vv.it","je","co.je","net.je","org.je","*.jm","jo","com.jo","org.jo","net.jo","edu.jo","sch.jo","gov.jo","mil.jo","name.jo","jobs","jp","ac.jp","ad.jp","co.jp","ed.jp","go.jp","gr.jp","lg.jp","ne.jp","or.jp","aichi.jp","akita.jp","aomori.jp","chiba.jp","ehime.jp","fukui.jp","fukuoka.jp","fukushima.jp","gifu.jp","gunma.jp","hiroshima.jp","hokkaido.jp","hyogo.jp","ibaraki.jp","ishikawa.jp","iwate.jp","kagawa.jp","kagoshima.jp","kanagawa.jp","kochi.jp","kumamoto.jp","kyoto.jp","mie.jp","miyagi.jp","miyazaki.jp","nagano.jp","nagasaki.jp","nara.jp","niigata.jp","oita.jp","okayama.jp","okinawa.jp","osaka.jp","saga.jp","saitama.jp","shiga.jp","shimane.jp","shizuoka.jp","tochigi.jp","tokushima.jp","tokyo.jp","tottori.jp","toyama.jp","wakayama.jp","yamagata.jp","yamaguchi.jp","yamanashi.jp","栃木.jp","愛知.jp","愛媛.jp","兵庫.jp","熊本.jp","茨城.jp","北海道.jp","千葉.jp","和歌山.jp","長崎.jp","長野.jp","新潟.jp","青森.jp","静岡.jp","東京.jp","石川.jp","埼玉.jp","三重.jp","京都.jp","佐賀.jp","大分.jp","大阪.jp","奈良.jp","宮城.jp","宮崎.jp","富山.jp","山口.jp","山形.jp","山梨.jp","岩手.jp","岐阜.jp","岡山.jp","島根.jp","広島.jp","徳島.jp","沖縄.jp","滋賀.jp","神奈川.jp","福井.jp","福岡.jp","福島.jp","秋田.jp","群馬.jp","香川.jp","高知.jp","鳥取.jp","鹿児島.jp","*.kawasaki.jp","*.kitakyushu.jp","*.kobe.jp","*.nagoya.jp","*.sapporo.jp","*.sendai.jp","*.yokohama.jp","!city.kawasaki.jp","!city.kitakyushu.jp","!city.kobe.jp","!city.nagoya.jp","!city.sapporo.jp","!city.sendai.jp","!city.yokohama.jp","aisai.aichi.jp","ama.aichi.jp","anjo.aichi.jp","asuke.aichi.jp","chiryu.aichi.jp","chita.aichi.jp","fuso.aichi.jp","gamagori.aichi.jp","handa.aichi.jp","hazu.aichi.jp","hekinan.aichi.jp","higashiura.aichi.jp","ichinomiya.aichi.jp","inazawa.aichi.jp","inuyama.aichi.jp","isshiki.aichi.jp","iwakura.aichi.jp","kanie.aichi.jp","kariya.aichi.jp","kasugai.aichi.jp","kira.aichi.jp","kiyosu.aichi.jp","komaki.aichi.jp","konan.aichi.jp","kota.aichi.jp","mihama.aichi.jp","miyoshi.aichi.jp","nishio.aichi.jp","nisshin.aichi.jp","obu.aichi.jp","oguchi.aichi.jp","oharu.aichi.jp","okazaki.aichi.jp","owariasahi.aichi.jp","seto.aichi.jp","shikatsu.aichi.jp","shinshiro.aichi.jp","shitara.aichi.jp","tahara.aichi.jp","takahama.aichi.jp","tobishima.aichi.jp","toei.aichi.jp","togo.aichi.jp","tokai.aichi.jp","tokoname.aichi.jp","toyoake.aichi.jp","toyohashi.aichi.jp","toyokawa.aichi.jp","toyone.aichi.jp","toyota.aichi.jp","tsushima.aichi.jp","yatomi.aichi.jp","akita.akita.jp","daisen.akita.jp","fujisato.akita.jp","gojome.akita.jp","hachirogata.akita.jp","happou.akita.jp","higashinaruse.akita.jp","honjo.akita.jp","honjyo.akita.jp","ikawa.akita.jp","kamikoani.akita.jp","kamioka.akita.jp","katagami.akita.jp","kazuno.akita.jp","kitaakita.akita.jp","kosaka.akita.jp","kyowa.akita.jp","misato.akita.jp","mitane.akita.jp","moriyoshi.akita.jp","nikaho.akita.jp","noshiro.akita.jp","odate.akita.jp","oga.akita.jp","ogata.akita.jp","semboku.akita.jp","yokote.akita.jp","yurihonjo.akita.jp","aomori.aomori.jp","gonohe.aomori.jp","hachinohe.aomori.jp","hashikami.aomori.jp","hiranai.aomori.jp","hirosaki.aomori.jp","itayanagi.aomori.jp","kuroishi.aomori.jp","misawa.aomori.jp","mutsu.aomori.jp","nakadomari.aomori.jp","noheji.aomori.jp","oirase.aomori.jp","owani.aomori.jp","rokunohe.aomori.jp","sannohe.aomori.jp","shichinohe.aomori.jp","shingo.aomori.jp","takko.aomori.jp","towada.aomori.jp","tsugaru.aomori.jp","tsuruta.aomori.jp","abiko.chiba.jp","asahi.chiba.jp","chonan.chiba.jp","chosei.chiba.jp","choshi.chiba.jp","chuo.chiba.jp","funabashi.chiba.jp","futtsu.chiba.jp","hanamigawa.chiba.jp","ichihara.chiba.jp","ichikawa.chiba.jp","ichinomiya.chiba.jp","inzai.chiba.jp","isumi.chiba.jp","kamagaya.chiba.jp","kamogawa.chiba.jp","kashiwa.chiba.jp","katori.chiba.jp","katsuura.chiba.jp","kimitsu.chiba.jp","kisarazu.chiba.jp","kozaki.chiba.jp","kujukuri.chiba.jp","kyonan.chiba.jp","matsudo.chiba.jp","midori.chiba.jp","mihama.chiba.jp","minamiboso.chiba.jp","mobara.chiba.jp","mutsuzawa.chiba.jp","nagara.chiba.jp","nagareyama.chiba.jp","narashino.chiba.jp","narita.chiba.jp","noda.chiba.jp","oamishirasato.chiba.jp","omigawa.chiba.jp","onjuku.chiba.jp","otaki.chiba.jp","sakae.chiba.jp","sakura.chiba.jp","shimofusa.chiba.jp","shirako.chiba.jp","shiroi.chiba.jp","shisui.chiba.jp","sodegaura.chiba.jp","sosa.chiba.jp","tako.chiba.jp","tateyama.chiba.jp","togane.chiba.jp","tohnosho.chiba.jp","tomisato.chiba.jp","urayasu.chiba.jp","yachimata.chiba.jp","yachiyo.chiba.jp","yokaichiba.chiba.jp","yokoshibahikari.chiba.jp","yotsukaido.chiba.jp","ainan.ehime.jp","honai.ehime.jp","ikata.ehime.jp","imabari.ehime.jp","iyo.ehime.jp","kamijima.ehime.jp","kihoku.ehime.jp","kumakogen.ehime.jp","masaki.ehime.jp","matsuno.ehime.jp","matsuyama.ehime.jp","namikata.ehime.jp","niihama.ehime.jp","ozu.ehime.jp","saijo.ehime.jp","seiyo.ehime.jp","shikokuchuo.ehime.jp","tobe.ehime.jp","toon.ehime.jp","uchiko.ehime.jp","uwajima.ehime.jp","yawatahama.ehime.jp","echizen.fukui.jp","eiheiji.fukui.jp","fukui.fukui.jp","ikeda.fukui.jp","katsuyama.fukui.jp","mihama.fukui.jp","minamiechizen.fukui.jp","obama.fukui.jp","ohi.fukui.jp","ono.fukui.jp","sabae.fukui.jp","sakai.fukui.jp","takahama.fukui.jp","tsuruga.fukui.jp","wakasa.fukui.jp","ashiya.fukuoka.jp","buzen.fukuoka.jp","chikugo.fukuoka.jp","chikuho.fukuoka.jp","chikujo.fukuoka.jp","chikushino.fukuoka.jp","chikuzen.fukuoka.jp","chuo.fukuoka.jp","dazaifu.fukuoka.jp","fukuchi.fukuoka.jp","hakata.fukuoka.jp","higashi.fukuoka.jp","hirokawa.fukuoka.jp","hisayama.fukuoka.jp","iizuka.fukuoka.jp","inatsuki.fukuoka.jp","kaho.fukuoka.jp","kasuga.fukuoka.jp","kasuya.fukuoka.jp","kawara.fukuoka.jp","keisen.fukuoka.jp","koga.fukuoka.jp","kurate.fukuoka.jp","kurogi.fukuoka.jp","kurume.fukuoka.jp","minami.fukuoka.jp","miyako.fukuoka.jp","miyama.fukuoka.jp","miyawaka.fukuoka.jp","mizumaki.fukuoka.jp","munakata.fukuoka.jp","nakagawa.fukuoka.jp","nakama.fukuoka.jp","nishi.fukuoka.jp","nogata.fukuoka.jp","ogori.fukuoka.jp","okagaki.fukuoka.jp","okawa.fukuoka.jp","oki.fukuoka.jp","omuta.fukuoka.jp","onga.fukuoka.jp","onojo.fukuoka.jp","oto.fukuoka.jp","saigawa.fukuoka.jp","sasaguri.fukuoka.jp","shingu.fukuoka.jp","shinyoshitomi.fukuoka.jp","shonai.fukuoka.jp","soeda.fukuoka.jp","sue.fukuoka.jp","tachiarai.fukuoka.jp","tagawa.fukuoka.jp","takata.fukuoka.jp","toho.fukuoka.jp","toyotsu.fukuoka.jp","tsuiki.fukuoka.jp","ukiha.fukuoka.jp","umi.fukuoka.jp","usui.fukuoka.jp","yamada.fukuoka.jp","yame.fukuoka.jp","yanagawa.fukuoka.jp","yukuhashi.fukuoka.jp","aizubange.fukushima.jp","aizumisato.fukushima.jp","aizuwakamatsu.fukushima.jp","asakawa.fukushima.jp","bandai.fukushima.jp","date.fukushima.jp","fukushima.fukushima.jp","furudono.fukushima.jp","futaba.fukushima.jp","hanawa.fukushima.jp","higashi.fukushima.jp","hirata.fukushima.jp","hirono.fukushima.jp","iitate.fukushima.jp","inawashiro.fukushima.jp","ishikawa.fukushima.jp","iwaki.fukushima.jp","izumizaki.fukushima.jp","kagamiishi.fukushima.jp","kaneyama.fukushima.jp","kawamata.fukushima.jp","kitakata.fukushima.jp","kitashiobara.fukushima.jp","koori.fukushima.jp","koriyama.fukushima.jp","kunimi.fukushima.jp","miharu.fukushima.jp","mishima.fukushima.jp","namie.fukushima.jp","nango.fukushima.jp","nishiaizu.fukushima.jp","nishigo.fukushima.jp","okuma.fukushima.jp","omotego.fukushima.jp","ono.fukushima.jp","otama.fukushima.jp","samegawa.fukushima.jp","shimogo.fukushima.jp","shirakawa.fukushima.jp","showa.fukushima.jp","soma.fukushima.jp","sukagawa.fukushima.jp","taishin.fukushima.jp","tamakawa.fukushima.jp","tanagura.fukushima.jp","tenei.fukushima.jp","yabuki.fukushima.jp","yamato.fukushima.jp","yamatsuri.fukushima.jp","yanaizu.fukushima.jp","yugawa.fukushima.jp","anpachi.gifu.jp","ena.gifu.jp","gifu.gifu.jp","ginan.gifu.jp","godo.gifu.jp","gujo.gifu.jp","hashima.gifu.jp","hichiso.gifu.jp","hida.gifu.jp","higashishirakawa.gifu.jp","ibigawa.gifu.jp","ikeda.gifu.jp","kakamigahara.gifu.jp","kani.gifu.jp","kasahara.gifu.jp","kasamatsu.gifu.jp","kawaue.gifu.jp","kitagata.gifu.jp","mino.gifu.jp","minokamo.gifu.jp","mitake.gifu.jp","mizunami.gifu.jp","motosu.gifu.jp","nakatsugawa.gifu.jp","ogaki.gifu.jp","sakahogi.gifu.jp","seki.gifu.jp","sekigahara.gifu.jp","shirakawa.gifu.jp","tajimi.gifu.jp","takayama.gifu.jp","tarui.gifu.jp","toki.gifu.jp","tomika.gifu.jp","wanouchi.gifu.jp","yamagata.gifu.jp","yaotsu.gifu.jp","yoro.gifu.jp","annaka.gunma.jp","chiyoda.gunma.jp","fujioka.gunma.jp","higashiagatsuma.gunma.jp","isesaki.gunma.jp","itakura.gunma.jp","kanna.gunma.jp","kanra.gunma.jp","katashina.gunma.jp","kawaba.gunma.jp","kiryu.gunma.jp","kusatsu.gunma.jp","maebashi.gunma.jp","meiwa.gunma.jp","midori.gunma.jp","minakami.gunma.jp","naganohara.gunma.jp","nakanojo.gunma.jp","nanmoku.gunma.jp","numata.gunma.jp","oizumi.gunma.jp","ora.gunma.jp","ota.gunma.jp","shibukawa.gunma.jp","shimonita.gunma.jp","shinto.gunma.jp","showa.gunma.jp","takasaki.gunma.jp","takayama.gunma.jp","tamamura.gunma.jp","tatebayashi.gunma.jp","tomioka.gunma.jp","tsukiyono.gunma.jp","tsumagoi.gunma.jp","ueno.gunma.jp","yoshioka.gunma.jp","asaminami.hiroshima.jp","daiwa.hiroshima.jp","etajima.hiroshima.jp","fuchu.hiroshima.jp","fukuyama.hiroshima.jp","hatsukaichi.hiroshima.jp","higashihiroshima.hiroshima.jp","hongo.hiroshima.jp","jinsekikogen.hiroshima.jp","kaita.hiroshima.jp","kui.hiroshima.jp","kumano.hiroshima.jp","kure.hiroshima.jp","mihara.hiroshima.jp","miyoshi.hiroshima.jp","naka.hiroshima.jp","onomichi.hiroshima.jp","osakikamijima.hiroshima.jp","otake.hiroshima.jp","saka.hiroshima.jp","sera.hiroshima.jp","seranishi.hiroshima.jp","shinichi.hiroshima.jp","shobara.hiroshima.jp","takehara.hiroshima.jp","abashiri.hokkaido.jp","abira.hokkaido.jp","aibetsu.hokkaido.jp","akabira.hokkaido.jp","akkeshi.hokkaido.jp","asahikawa.hokkaido.jp","ashibetsu.hokkaido.jp","ashoro.hokkaido.jp","assabu.hokkaido.jp","atsuma.hokkaido.jp","bibai.hokkaido.jp","biei.hokkaido.jp","bifuka.hokkaido.jp","bihoro.hokkaido.jp","biratori.hokkaido.jp","chippubetsu.hokkaido.jp","chitose.hokkaido.jp","date.hokkaido.jp","ebetsu.hokkaido.jp","embetsu.hokkaido.jp","eniwa.hokkaido.jp","erimo.hokkaido.jp","esan.hokkaido.jp","esashi.hokkaido.jp","fukagawa.hokkaido.jp","fukushima.hokkaido.jp","furano.hokkaido.jp","furubira.hokkaido.jp","haboro.hokkaido.jp","hakodate.hokkaido.jp","hamatonbetsu.hokkaido.jp","hidaka.hokkaido.jp","higashikagura.hokkaido.jp","higashikawa.hokkaido.jp","hiroo.hokkaido.jp","hokuryu.hokkaido.jp","hokuto.hokkaido.jp","honbetsu.hokkaido.jp","horokanai.hokkaido.jp","horonobe.hokkaido.jp","ikeda.hokkaido.jp","imakane.hokkaido.jp","ishikari.hokkaido.jp","iwamizawa.hokkaido.jp","iwanai.hokkaido.jp","kamifurano.hokkaido.jp","kamikawa.hokkaido.jp","kamishihoro.hokkaido.jp","kamisunagawa.hokkaido.jp","kamoenai.hokkaido.jp","kayabe.hokkaido.jp","kembuchi.hokkaido.jp","kikonai.hokkaido.jp","kimobetsu.hokkaido.jp","kitahiroshima.hokkaido.jp","kitami.hokkaido.jp","kiyosato.hokkaido.jp","koshimizu.hokkaido.jp","kunneppu.hokkaido.jp","kuriyama.hokkaido.jp","kuromatsunai.hokkaido.jp","kushiro.hokkaido.jp","kutchan.hokkaido.jp","kyowa.hokkaido.jp","mashike.hokkaido.jp","matsumae.hokkaido.jp","mikasa.hokkaido.jp","minamifurano.hokkaido.jp","mombetsu.hokkaido.jp","moseushi.hokkaido.jp","mukawa.hokkaido.jp","muroran.hokkaido.jp","naie.hokkaido.jp","nakagawa.hokkaido.jp","nakasatsunai.hokkaido.jp","nakatombetsu.hokkaido.jp","nanae.hokkaido.jp","nanporo.hokkaido.jp","nayoro.hokkaido.jp","nemuro.hokkaido.jp","niikappu.hokkaido.jp","niki.hokkaido.jp","nishiokoppe.hokkaido.jp","noboribetsu.hokkaido.jp","numata.hokkaido.jp","obihiro.hokkaido.jp","obira.hokkaido.jp","oketo.hokkaido.jp","okoppe.hokkaido.jp","otaru.hokkaido.jp","otobe.hokkaido.jp","otofuke.hokkaido.jp","otoineppu.hokkaido.jp","oumu.hokkaido.jp","ozora.hokkaido.jp","pippu.hokkaido.jp","rankoshi.hokkaido.jp","rebun.hokkaido.jp","rikubetsu.hokkaido.jp","rishiri.hokkaido.jp","rishirifuji.hokkaido.jp","saroma.hokkaido.jp","sarufutsu.hokkaido.jp","shakotan.hokkaido.jp","shari.hokkaido.jp","shibecha.hokkaido.jp","shibetsu.hokkaido.jp","shikabe.hokkaido.jp","shikaoi.hokkaido.jp","shimamaki.hokkaido.jp","shimizu.hokkaido.jp","shimokawa.hokkaido.jp","shinshinotsu.hokkaido.jp","shintoku.hokkaido.jp","shiranuka.hokkaido.jp","shiraoi.hokkaido.jp","shiriuchi.hokkaido.jp","sobetsu.hokkaido.jp","sunagawa.hokkaido.jp","taiki.hokkaido.jp","takasu.hokkaido.jp","takikawa.hokkaido.jp","takinoue.hokkaido.jp","teshikaga.hokkaido.jp","tobetsu.hokkaido.jp","tohma.hokkaido.jp","tomakomai.hokkaido.jp","tomari.hokkaido.jp","toya.hokkaido.jp","toyako.hokkaido.jp","toyotomi.hokkaido.jp","toyoura.hokkaido.jp","tsubetsu.hokkaido.jp","tsukigata.hokkaido.jp","urakawa.hokkaido.jp","urausu.hokkaido.jp","uryu.hokkaido.jp","utashinai.hokkaido.jp","wakkanai.hokkaido.jp","wassamu.hokkaido.jp","yakumo.hokkaido.jp","yoichi.hokkaido.jp","aioi.hyogo.jp","akashi.hyogo.jp","ako.hyogo.jp","amagasaki.hyogo.jp","aogaki.hyogo.jp","asago.hyogo.jp","ashiya.hyogo.jp","awaji.hyogo.jp","fukusaki.hyogo.jp","goshiki.hyogo.jp","harima.hyogo.jp","himeji.hyogo.jp","ichikawa.hyogo.jp","inagawa.hyogo.jp","itami.hyogo.jp","kakogawa.hyogo.jp","kamigori.hyogo.jp","kamikawa.hyogo.jp","kasai.hyogo.jp","kasuga.hyogo.jp","kawanishi.hyogo.jp","miki.hyogo.jp","minamiawaji.hyogo.jp","nishinomiya.hyogo.jp","nishiwaki.hyogo.jp","ono.hyogo.jp","sanda.hyogo.jp","sannan.hyogo.jp","sasayama.hyogo.jp","sayo.hyogo.jp","shingu.hyogo.jp","shinonsen.hyogo.jp","shiso.hyogo.jp","sumoto.hyogo.jp","taishi.hyogo.jp","taka.hyogo.jp","takarazuka.hyogo.jp","takasago.hyogo.jp","takino.hyogo.jp","tamba.hyogo.jp","tatsuno.hyogo.jp","toyooka.hyogo.jp","yabu.hyogo.jp","yashiro.hyogo.jp","yoka.hyogo.jp","yokawa.hyogo.jp","ami.ibaraki.jp","asahi.ibaraki.jp","bando.ibaraki.jp","chikusei.ibaraki.jp","daigo.ibaraki.jp","fujishiro.ibaraki.jp","hitachi.ibaraki.jp","hitachinaka.ibaraki.jp","hitachiomiya.ibaraki.jp","hitachiota.ibaraki.jp","ibaraki.ibaraki.jp","ina.ibaraki.jp","inashiki.ibaraki.jp","itako.ibaraki.jp","iwama.ibaraki.jp","joso.ibaraki.jp","kamisu.ibaraki.jp","kasama.ibaraki.jp","kashima.ibaraki.jp","kasumigaura.ibaraki.jp","koga.ibaraki.jp","miho.ibaraki.jp","mito.ibaraki.jp","moriya.ibaraki.jp","naka.ibaraki.jp","namegata.ibaraki.jp","oarai.ibaraki.jp","ogawa.ibaraki.jp","omitama.ibaraki.jp","ryugasaki.ibaraki.jp","sakai.ibaraki.jp","sakuragawa.ibaraki.jp","shimodate.ibaraki.jp","shimotsuma.ibaraki.jp","shirosato.ibaraki.jp","sowa.ibaraki.jp","suifu.ibaraki.jp","takahagi.ibaraki.jp","tamatsukuri.ibaraki.jp","tokai.ibaraki.jp","tomobe.ibaraki.jp","tone.ibaraki.jp","toride.ibaraki.jp","tsuchiura.ibaraki.jp","tsukuba.ibaraki.jp","uchihara.ibaraki.jp","ushiku.ibaraki.jp","yachiyo.ibaraki.jp","yamagata.ibaraki.jp","yawara.ibaraki.jp","yuki.ibaraki.jp","anamizu.ishikawa.jp","hakui.ishikawa.jp","hakusan.ishikawa.jp","kaga.ishikawa.jp","kahoku.ishikawa.jp","kanazawa.ishikawa.jp","kawakita.ishikawa.jp","komatsu.ishikawa.jp","nakanoto.ishikawa.jp","nanao.ishikawa.jp","nomi.ishikawa.jp","nonoichi.ishikawa.jp","noto.ishikawa.jp","shika.ishikawa.jp","suzu.ishikawa.jp","tsubata.ishikawa.jp","tsurugi.ishikawa.jp","uchinada.ishikawa.jp","wajima.ishikawa.jp","fudai.iwate.jp","fujisawa.iwate.jp","hanamaki.iwate.jp","hiraizumi.iwate.jp","hirono.iwate.jp","ichinohe.iwate.jp","ichinoseki.iwate.jp","iwaizumi.iwate.jp","iwate.iwate.jp","joboji.iwate.jp","kamaishi.iwate.jp","kanegasaki.iwate.jp","karumai.iwate.jp","kawai.iwate.jp","kitakami.iwate.jp","kuji.iwate.jp","kunohe.iwate.jp","kuzumaki.iwate.jp","miyako.iwate.jp","mizusawa.iwate.jp","morioka.iwate.jp","ninohe.iwate.jp","noda.iwate.jp","ofunato.iwate.jp","oshu.iwate.jp","otsuchi.iwate.jp","rikuzentakata.iwate.jp","shiwa.iwate.jp","shizukuishi.iwate.jp","sumita.iwate.jp","tanohata.iwate.jp","tono.iwate.jp","yahaba.iwate.jp","yamada.iwate.jp","ayagawa.kagawa.jp","higashikagawa.kagawa.jp","kanonji.kagawa.jp","kotohira.kagawa.jp","manno.kagawa.jp","marugame.kagawa.jp","mitoyo.kagawa.jp","naoshima.kagawa.jp","sanuki.kagawa.jp","tadotsu.kagawa.jp","takamatsu.kagawa.jp","tonosho.kagawa.jp","uchinomi.kagawa.jp","utazu.kagawa.jp","zentsuji.kagawa.jp","akune.kagoshima.jp","amami.kagoshima.jp","hioki.kagoshima.jp","isa.kagoshima.jp","isen.kagoshima.jp","izumi.kagoshima.jp","kagoshima.kagoshima.jp","kanoya.kagoshima.jp","kawanabe.kagoshima.jp","kinko.kagoshima.jp","kouyama.kagoshima.jp","makurazaki.kagoshima.jp","matsumoto.kagoshima.jp","minamitane.kagoshima.jp","nakatane.kagoshima.jp","nishinoomote.kagoshima.jp","satsumasendai.kagoshima.jp","soo.kagoshima.jp","tarumizu.kagoshima.jp","yusui.kagoshima.jp","aikawa.kanagawa.jp","atsugi.kanagawa.jp","ayase.kanagawa.jp","chigasaki.kanagawa.jp","ebina.kanagawa.jp","fujisawa.kanagawa.jp","hadano.kanagawa.jp","hakone.kanagawa.jp","hiratsuka.kanagawa.jp","isehara.kanagawa.jp","kaisei.kanagawa.jp","kamakura.kanagawa.jp","kiyokawa.kanagawa.jp","matsuda.kanagawa.jp","minamiashigara.kanagawa.jp","miura.kanagawa.jp","nakai.kanagawa.jp","ninomiya.kanagawa.jp","odawara.kanagawa.jp","oi.kanagawa.jp","oiso.kanagawa.jp","sagamihara.kanagawa.jp","samukawa.kanagawa.jp","tsukui.kanagawa.jp","yamakita.kanagawa.jp","yamato.kanagawa.jp","yokosuka.kanagawa.jp","yugawara.kanagawa.jp","zama.kanagawa.jp","zushi.kanagawa.jp","aki.kochi.jp","geisei.kochi.jp","hidaka.kochi.jp","higashitsuno.kochi.jp","ino.kochi.jp","kagami.kochi.jp","kami.kochi.jp","kitagawa.kochi.jp","kochi.kochi.jp","mihara.kochi.jp","motoyama.kochi.jp","muroto.kochi.jp","nahari.kochi.jp","nakamura.kochi.jp","nankoku.kochi.jp","nishitosa.kochi.jp","niyodogawa.kochi.jp","ochi.kochi.jp","okawa.kochi.jp","otoyo.kochi.jp","otsuki.kochi.jp","sakawa.kochi.jp","sukumo.kochi.jp","susaki.kochi.jp","tosa.kochi.jp","tosashimizu.kochi.jp","toyo.kochi.jp","tsuno.kochi.jp","umaji.kochi.jp","yasuda.kochi.jp","yusuhara.kochi.jp","amakusa.kumamoto.jp","arao.kumamoto.jp","aso.kumamoto.jp","choyo.kumamoto.jp","gyokuto.kumamoto.jp","kamiamakusa.kumamoto.jp","kikuchi.kumamoto.jp","kumamoto.kumamoto.jp","mashiki.kumamoto.jp","mifune.kumamoto.jp","minamata.kumamoto.jp","minamioguni.kumamoto.jp","nagasu.kumamoto.jp","nishihara.kumamoto.jp","oguni.kumamoto.jp","ozu.kumamoto.jp","sumoto.kumamoto.jp","takamori.kumamoto.jp","uki.kumamoto.jp","uto.kumamoto.jp","yamaga.kumamoto.jp","yamato.kumamoto.jp","yatsushiro.kumamoto.jp","ayabe.kyoto.jp","fukuchiyama.kyoto.jp","higashiyama.kyoto.jp","ide.kyoto.jp","ine.kyoto.jp","joyo.kyoto.jp","kameoka.kyoto.jp","kamo.kyoto.jp","kita.kyoto.jp","kizu.kyoto.jp","kumiyama.kyoto.jp","kyotamba.kyoto.jp","kyotanabe.kyoto.jp","kyotango.kyoto.jp","maizuru.kyoto.jp","minami.kyoto.jp","minamiyamashiro.kyoto.jp","miyazu.kyoto.jp","muko.kyoto.jp","nagaokakyo.kyoto.jp","nakagyo.kyoto.jp","nantan.kyoto.jp","oyamazaki.kyoto.jp","sakyo.kyoto.jp","seika.kyoto.jp","tanabe.kyoto.jp","uji.kyoto.jp","ujitawara.kyoto.jp","wazuka.kyoto.jp","yamashina.kyoto.jp","yawata.kyoto.jp","asahi.mie.jp","inabe.mie.jp","ise.mie.jp","kameyama.mie.jp","kawagoe.mie.jp","kiho.mie.jp","kisosaki.mie.jp","kiwa.mie.jp","komono.mie.jp","kumano.mie.jp","kuwana.mie.jp","matsusaka.mie.jp","meiwa.mie.jp","mihama.mie.jp","minamiise.mie.jp","misugi.mie.jp","miyama.mie.jp","nabari.mie.jp","shima.mie.jp","suzuka.mie.jp","tado.mie.jp","taiki.mie.jp","taki.mie.jp","tamaki.mie.jp","toba.mie.jp","tsu.mie.jp","udono.mie.jp","ureshino.mie.jp","watarai.mie.jp","yokkaichi.mie.jp","furukawa.miyagi.jp","higashimatsushima.miyagi.jp","ishinomaki.miyagi.jp","iwanuma.miyagi.jp","kakuda.miyagi.jp","kami.miyagi.jp","kawasaki.miyagi.jp","marumori.miyagi.jp","matsushima.miyagi.jp","minamisanriku.miyagi.jp","misato.miyagi.jp","murata.miyagi.jp","natori.miyagi.jp","ogawara.miyagi.jp","ohira.miyagi.jp","onagawa.miyagi.jp","osaki.miyagi.jp","rifu.miyagi.jp","semine.miyagi.jp","shibata.miyagi.jp","shichikashuku.miyagi.jp","shikama.miyagi.jp","shiogama.miyagi.jp","shiroishi.miyagi.jp","tagajo.miyagi.jp","taiwa.miyagi.jp","tome.miyagi.jp","tomiya.miyagi.jp","wakuya.miyagi.jp","watari.miyagi.jp","yamamoto.miyagi.jp","zao.miyagi.jp","aya.miyazaki.jp","ebino.miyazaki.jp","gokase.miyazaki.jp","hyuga.miyazaki.jp","kadogawa.miyazaki.jp","kawaminami.miyazaki.jp","kijo.miyazaki.jp","kitagawa.miyazaki.jp","kitakata.miyazaki.jp","kitaura.miyazaki.jp","kobayashi.miyazaki.jp","kunitomi.miyazaki.jp","kushima.miyazaki.jp","mimata.miyazaki.jp","miyakonojo.miyazaki.jp","miyazaki.miyazaki.jp","morotsuka.miyazaki.jp","nichinan.miyazaki.jp","nishimera.miyazaki.jp","nobeoka.miyazaki.jp","saito.miyazaki.jp","shiiba.miyazaki.jp","shintomi.miyazaki.jp","takaharu.miyazaki.jp","takanabe.miyazaki.jp","takazaki.miyazaki.jp","tsuno.miyazaki.jp","achi.nagano.jp","agematsu.nagano.jp","anan.nagano.jp","aoki.nagano.jp","asahi.nagano.jp","azumino.nagano.jp","chikuhoku.nagano.jp","chikuma.nagano.jp","chino.nagano.jp","fujimi.nagano.jp","hakuba.nagano.jp","hara.nagano.jp","hiraya.nagano.jp","iida.nagano.jp","iijima.nagano.jp","iiyama.nagano.jp","iizuna.nagano.jp","ikeda.nagano.jp","ikusaka.nagano.jp","ina.nagano.jp","karuizawa.nagano.jp","kawakami.nagano.jp","kiso.nagano.jp","kisofukushima.nagano.jp","kitaaiki.nagano.jp","komagane.nagano.jp","komoro.nagano.jp","matsukawa.nagano.jp","matsumoto.nagano.jp","miasa.nagano.jp","minamiaiki.nagano.jp","minamimaki.nagano.jp","minamiminowa.nagano.jp","minowa.nagano.jp","miyada.nagano.jp","miyota.nagano.jp","mochizuki.nagano.jp","nagano.nagano.jp","nagawa.nagano.jp","nagiso.nagano.jp","nakagawa.nagano.jp","nakano.nagano.jp","nozawaonsen.nagano.jp","obuse.nagano.jp","ogawa.nagano.jp","okaya.nagano.jp","omachi.nagano.jp","omi.nagano.jp","ookuwa.nagano.jp","ooshika.nagano.jp","otaki.nagano.jp","otari.nagano.jp","sakae.nagano.jp","sakaki.nagano.jp","saku.nagano.jp","sakuho.nagano.jp","shimosuwa.nagano.jp","shinanomachi.nagano.jp","shiojiri.nagano.jp","suwa.nagano.jp","suzaka.nagano.jp","takagi.nagano.jp","takamori.nagano.jp","takayama.nagano.jp","tateshina.nagano.jp","tatsuno.nagano.jp","togakushi.nagano.jp","togura.nagano.jp","tomi.nagano.jp","ueda.nagano.jp","wada.nagano.jp","yamagata.nagano.jp","yamanouchi.nagano.jp","yasaka.nagano.jp","yasuoka.nagano.jp","chijiwa.nagasaki.jp","futsu.nagasaki.jp","goto.nagasaki.jp","hasami.nagasaki.jp","hirado.nagasaki.jp","iki.nagasaki.jp","isahaya.nagasaki.jp","kawatana.nagasaki.jp","kuchinotsu.nagasaki.jp","matsuura.nagasaki.jp","nagasaki.nagasaki.jp","obama.nagasaki.jp","omura.nagasaki.jp","oseto.nagasaki.jp","saikai.nagasaki.jp","sasebo.nagasaki.jp","seihi.nagasaki.jp","shimabara.nagasaki.jp","shinkamigoto.nagasaki.jp","togitsu.nagasaki.jp","tsushima.nagasaki.jp","unzen.nagasaki.jp","ando.nara.jp","gose.nara.jp","heguri.nara.jp","higashiyoshino.nara.jp","ikaruga.nara.jp","ikoma.nara.jp","kamikitayama.nara.jp","kanmaki.nara.jp","kashiba.nara.jp","kashihara.nara.jp","katsuragi.nara.jp","kawai.nara.jp","kawakami.nara.jp","kawanishi.nara.jp","koryo.nara.jp","kurotaki.nara.jp","mitsue.nara.jp","miyake.nara.jp","nara.nara.jp","nosegawa.nara.jp","oji.nara.jp","ouda.nara.jp","oyodo.nara.jp","sakurai.nara.jp","sango.nara.jp","shimoichi.nara.jp","shimokitayama.nara.jp","shinjo.nara.jp","soni.nara.jp","takatori.nara.jp","tawaramoto.nara.jp","tenkawa.nara.jp","tenri.nara.jp","uda.nara.jp","yamatokoriyama.nara.jp","yamatotakada.nara.jp","yamazoe.nara.jp","yoshino.nara.jp","aga.niigata.jp","agano.niigata.jp","gosen.niigata.jp","itoigawa.niigata.jp","izumozaki.niigata.jp","joetsu.niigata.jp","kamo.niigata.jp","kariwa.niigata.jp","kashiwazaki.niigata.jp","minamiuonuma.niigata.jp","mitsuke.niigata.jp","muika.niigata.jp","murakami.niigata.jp","myoko.niigata.jp","nagaoka.niigata.jp","niigata.niigata.jp","ojiya.niigata.jp","omi.niigata.jp","sado.niigata.jp","sanjo.niigata.jp","seiro.niigata.jp","seirou.niigata.jp","sekikawa.niigata.jp","shibata.niigata.jp","tagami.niigata.jp","tainai.niigata.jp","tochio.niigata.jp","tokamachi.niigata.jp","tsubame.niigata.jp","tsunan.niigata.jp","uonuma.niigata.jp","yahiko.niigata.jp","yoita.niigata.jp","yuzawa.niigata.jp","beppu.oita.jp","bungoono.oita.jp","bungotakada.oita.jp","hasama.oita.jp","hiji.oita.jp","himeshima.oita.jp","hita.oita.jp","kamitsue.oita.jp","kokonoe.oita.jp","kuju.oita.jp","kunisaki.oita.jp","kusu.oita.jp","oita.oita.jp","saiki.oita.jp","taketa.oita.jp","tsukumi.oita.jp","usa.oita.jp","usuki.oita.jp","yufu.oita.jp","akaiwa.okayama.jp","asakuchi.okayama.jp","bizen.okayama.jp","hayashima.okayama.jp","ibara.okayama.jp","kagamino.okayama.jp","kasaoka.okayama.jp","kibichuo.okayama.jp","kumenan.okayama.jp","kurashiki.okayama.jp","maniwa.okayama.jp","misaki.okayama.jp","nagi.okayama.jp","niimi.okayama.jp","nishiawakura.okayama.jp","okayama.okayama.jp","satosho.okayama.jp","setouchi.okayama.jp","shinjo.okayama.jp","shoo.okayama.jp","soja.okayama.jp","takahashi.okayama.jp","tamano.okayama.jp","tsuyama.okayama.jp","wake.okayama.jp","yakage.okayama.jp","aguni.okinawa.jp","ginowan.okinawa.jp","ginoza.okinawa.jp","gushikami.okinawa.jp","haebaru.okinawa.jp","higashi.okinawa.jp","hirara.okinawa.jp","iheya.okinawa.jp","ishigaki.okinawa.jp","ishikawa.okinawa.jp","itoman.okinawa.jp","izena.okinawa.jp","kadena.okinawa.jp","kin.okinawa.jp","kitadaito.okinawa.jp","kitanakagusuku.okinawa.jp","kumejima.okinawa.jp","kunigami.okinawa.jp","minamidaito.okinawa.jp","motobu.okinawa.jp","nago.okinawa.jp","naha.okinawa.jp","nakagusuku.okinawa.jp","nakijin.okinawa.jp","nanjo.okinawa.jp","nishihara.okinawa.jp","ogimi.okinawa.jp","okinawa.okinawa.jp","onna.okinawa.jp","shimoji.okinawa.jp","taketomi.okinawa.jp","tarama.okinawa.jp","tokashiki.okinawa.jp","tomigusuku.okinawa.jp","tonaki.okinawa.jp","urasoe.okinawa.jp","uruma.okinawa.jp","yaese.okinawa.jp","yomitan.okinawa.jp","yonabaru.okinawa.jp","yonaguni.okinawa.jp","zamami.okinawa.jp","abeno.osaka.jp","chihayaakasaka.osaka.jp","chuo.osaka.jp","daito.osaka.jp","fujiidera.osaka.jp","habikino.osaka.jp","hannan.osaka.jp","higashiosaka.osaka.jp","higashisumiyoshi.osaka.jp","higashiyodogawa.osaka.jp","hirakata.osaka.jp","ibaraki.osaka.jp","ikeda.osaka.jp","izumi.osaka.jp","izumiotsu.osaka.jp","izumisano.osaka.jp","kadoma.osaka.jp","kaizuka.osaka.jp","kanan.osaka.jp","kashiwara.osaka.jp","katano.osaka.jp","kawachinagano.osaka.jp","kishiwada.osaka.jp","kita.osaka.jp","kumatori.osaka.jp","matsubara.osaka.jp","minato.osaka.jp","minoh.osaka.jp","misaki.osaka.jp","moriguchi.osaka.jp","neyagawa.osaka.jp","nishi.osaka.jp","nose.osaka.jp","osakasayama.osaka.jp","sakai.osaka.jp","sayama.osaka.jp","sennan.osaka.jp","settsu.osaka.jp","shijonawate.osaka.jp","shimamoto.osaka.jp","suita.osaka.jp","tadaoka.osaka.jp","taishi.osaka.jp","tajiri.osaka.jp","takaishi.osaka.jp","takatsuki.osaka.jp","tondabayashi.osaka.jp","toyonaka.osaka.jp","toyono.osaka.jp","yao.osaka.jp","ariake.saga.jp","arita.saga.jp","fukudomi.saga.jp","genkai.saga.jp","hamatama.saga.jp","hizen.saga.jp","imari.saga.jp","kamimine.saga.jp","kanzaki.saga.jp","karatsu.saga.jp","kashima.saga.jp","kitagata.saga.jp","kitahata.saga.jp","kiyama.saga.jp","kouhoku.saga.jp","kyuragi.saga.jp","nishiarita.saga.jp","ogi.saga.jp","omachi.saga.jp","ouchi.saga.jp","saga.saga.jp","shiroishi.saga.jp","taku.saga.jp","tara.saga.jp","tosu.saga.jp","yoshinogari.saga.jp","arakawa.saitama.jp","asaka.saitama.jp","chichibu.saitama.jp","fujimi.saitama.jp","fujimino.saitama.jp","fukaya.saitama.jp","hanno.saitama.jp","hanyu.saitama.jp","hasuda.saitama.jp","hatogaya.saitama.jp","hatoyama.saitama.jp","hidaka.saitama.jp","higashichichibu.saitama.jp","higashimatsuyama.saitama.jp","honjo.saitama.jp","ina.saitama.jp","iruma.saitama.jp","iwatsuki.saitama.jp","kamiizumi.saitama.jp","kamikawa.saitama.jp","kamisato.saitama.jp","kasukabe.saitama.jp","kawagoe.saitama.jp","kawaguchi.saitama.jp","kawajima.saitama.jp","kazo.saitama.jp","kitamoto.saitama.jp","koshigaya.saitama.jp","kounosu.saitama.jp","kuki.saitama.jp","kumagaya.saitama.jp","matsubushi.saitama.jp","minano.saitama.jp","misato.saitama.jp","miyashiro.saitama.jp","miyoshi.saitama.jp","moroyama.saitama.jp","nagatoro.saitama.jp","namegawa.saitama.jp","niiza.saitama.jp","ogano.saitama.jp","ogawa.saitama.jp","ogose.saitama.jp","okegawa.saitama.jp","omiya.saitama.jp","otaki.saitama.jp","ranzan.saitama.jp","ryokami.saitama.jp","saitama.saitama.jp","sakado.saitama.jp","satte.saitama.jp","sayama.saitama.jp","shiki.saitama.jp","shiraoka.saitama.jp","soka.saitama.jp","sugito.saitama.jp","toda.saitama.jp","tokigawa.saitama.jp","tokorozawa.saitama.jp","tsurugashima.saitama.jp","urawa.saitama.jp","warabi.saitama.jp","yashio.saitama.jp","yokoze.saitama.jp","yono.saitama.jp","yorii.saitama.jp","yoshida.saitama.jp","yoshikawa.saitama.jp","yoshimi.saitama.jp","aisho.shiga.jp","gamo.shiga.jp","higashiomi.shiga.jp","hikone.shiga.jp","koka.shiga.jp","konan.shiga.jp","kosei.shiga.jp","koto.shiga.jp","kusatsu.shiga.jp","maibara.shiga.jp","moriyama.shiga.jp","nagahama.shiga.jp","nishiazai.shiga.jp","notogawa.shiga.jp","omihachiman.shiga.jp","otsu.shiga.jp","ritto.shiga.jp","ryuoh.shiga.jp","takashima.shiga.jp","takatsuki.shiga.jp","torahime.shiga.jp","toyosato.shiga.jp","yasu.shiga.jp","akagi.shimane.jp","ama.shimane.jp","gotsu.shimane.jp","hamada.shimane.jp","higashiizumo.shimane.jp","hikawa.shimane.jp","hikimi.shimane.jp","izumo.shimane.jp","kakinoki.shimane.jp","masuda.shimane.jp","matsue.shimane.jp","misato.shimane.jp","nishinoshima.shimane.jp","ohda.shimane.jp","okinoshima.shimane.jp","okuizumo.shimane.jp","shimane.shimane.jp","tamayu.shimane.jp","tsuwano.shimane.jp","unnan.shimane.jp","yakumo.shimane.jp","yasugi.shimane.jp","yatsuka.shimane.jp","arai.shizuoka.jp","atami.shizuoka.jp","fuji.shizuoka.jp","fujieda.shizuoka.jp","fujikawa.shizuoka.jp","fujinomiya.shizuoka.jp","fukuroi.shizuoka.jp","gotemba.shizuoka.jp","haibara.shizuoka.jp","hamamatsu.shizuoka.jp","higashiizu.shizuoka.jp","ito.shizuoka.jp","iwata.shizuoka.jp","izu.shizuoka.jp","izunokuni.shizuoka.jp","kakegawa.shizuoka.jp","kannami.shizuoka.jp","kawanehon.shizuoka.jp","kawazu.shizuoka.jp","kikugawa.shizuoka.jp","kosai.shizuoka.jp","makinohara.shizuoka.jp","matsuzaki.shizuoka.jp","minamiizu.shizuoka.jp","mishima.shizuoka.jp","morimachi.shizuoka.jp","nishiizu.shizuoka.jp","numazu.shizuoka.jp","omaezaki.shizuoka.jp","shimada.shizuoka.jp","shimizu.shizuoka.jp","shimoda.shizuoka.jp","shizuoka.shizuoka.jp","susono.shizuoka.jp","yaizu.shizuoka.jp","yoshida.shizuoka.jp","ashikaga.tochigi.jp","bato.tochigi.jp","haga.tochigi.jp","ichikai.tochigi.jp","iwafune.tochigi.jp","kaminokawa.tochigi.jp","kanuma.tochigi.jp","karasuyama.tochigi.jp","kuroiso.tochigi.jp","mashiko.tochigi.jp","mibu.tochigi.jp","moka.tochigi.jp","motegi.tochigi.jp","nasu.tochigi.jp","nasushiobara.tochigi.jp","nikko.tochigi.jp","nishikata.tochigi.jp","nogi.tochigi.jp","ohira.tochigi.jp","ohtawara.tochigi.jp","oyama.tochigi.jp","sakura.tochigi.jp","sano.tochigi.jp","shimotsuke.tochigi.jp","shioya.tochigi.jp","takanezawa.tochigi.jp","tochigi.tochigi.jp","tsuga.tochigi.jp","ujiie.tochigi.jp","utsunomiya.tochigi.jp","yaita.tochigi.jp","aizumi.tokushima.jp","anan.tokushima.jp","ichiba.tokushima.jp","itano.tokushima.jp","kainan.tokushima.jp","komatsushima.tokushima.jp","matsushige.tokushima.jp","mima.tokushima.jp","minami.tokushima.jp","miyoshi.tokushima.jp","mugi.tokushima.jp","nakagawa.tokushima.jp","naruto.tokushima.jp","sanagochi.tokushima.jp","shishikui.tokushima.jp","tokushima.tokushima.jp","wajiki.tokushima.jp","adachi.tokyo.jp","akiruno.tokyo.jp","akishima.tokyo.jp","aogashima.tokyo.jp","arakawa.tokyo.jp","bunkyo.tokyo.jp","chiyoda.tokyo.jp","chofu.tokyo.jp","chuo.tokyo.jp","edogawa.tokyo.jp","fuchu.tokyo.jp","fussa.tokyo.jp","hachijo.tokyo.jp","hachioji.tokyo.jp","hamura.tokyo.jp","higashikurume.tokyo.jp","higashimurayama.tokyo.jp","higashiyamato.tokyo.jp","hino.tokyo.jp","hinode.tokyo.jp","hinohara.tokyo.jp","inagi.tokyo.jp","itabashi.tokyo.jp","katsushika.tokyo.jp","kita.tokyo.jp","kiyose.tokyo.jp","kodaira.tokyo.jp","koganei.tokyo.jp","kokubunji.tokyo.jp","komae.tokyo.jp","koto.tokyo.jp","kouzushima.tokyo.jp","kunitachi.tokyo.jp","machida.tokyo.jp","meguro.tokyo.jp","minato.tokyo.jp","mitaka.tokyo.jp","mizuho.tokyo.jp","musashimurayama.tokyo.jp","musashino.tokyo.jp","nakano.tokyo.jp","nerima.tokyo.jp","ogasawara.tokyo.jp","okutama.tokyo.jp","ome.tokyo.jp","oshima.tokyo.jp","ota.tokyo.jp","setagaya.tokyo.jp","shibuya.tokyo.jp","shinagawa.tokyo.jp","shinjuku.tokyo.jp","suginami.tokyo.jp","sumida.tokyo.jp","tachikawa.tokyo.jp","taito.tokyo.jp","tama.tokyo.jp","toshima.tokyo.jp","chizu.tottori.jp","hino.tottori.jp","kawahara.tottori.jp","koge.tottori.jp","kotoura.tottori.jp","misasa.tottori.jp","nanbu.tottori.jp","nichinan.tottori.jp","sakaiminato.tottori.jp","tottori.tottori.jp","wakasa.tottori.jp","yazu.tottori.jp","yonago.tottori.jp","asahi.toyama.jp","fuchu.toyama.jp","fukumitsu.toyama.jp","funahashi.toyama.jp","himi.toyama.jp","imizu.toyama.jp","inami.toyama.jp","johana.toyama.jp","kamiichi.toyama.jp","kurobe.toyama.jp","nakaniikawa.toyama.jp","namerikawa.toyama.jp","nanto.toyama.jp","nyuzen.toyama.jp","oyabe.toyama.jp","taira.toyama.jp","takaoka.toyama.jp","tateyama.toyama.jp","toga.toyama.jp","tonami.toyama.jp","toyama.toyama.jp","unazuki.toyama.jp","uozu.toyama.jp","yamada.toyama.jp","arida.wakayama.jp","aridagawa.wakayama.jp","gobo.wakayama.jp","hashimoto.wakayama.jp","hidaka.wakayama.jp","hirogawa.wakayama.jp","inami.wakayama.jp","iwade.wakayama.jp","kainan.wakayama.jp","kamitonda.wakayama.jp","katsuragi.wakayama.jp","kimino.wakayama.jp","kinokawa.wakayama.jp","kitayama.wakayama.jp","koya.wakayama.jp","koza.wakayama.jp","kozagawa.wakayama.jp","kudoyama.wakayama.jp","kushimoto.wakayama.jp","mihama.wakayama.jp","misato.wakayama.jp","nachikatsuura.wakayama.jp","shingu.wakayama.jp","shirahama.wakayama.jp","taiji.wakayama.jp","tanabe.wakayama.jp","wakayama.wakayama.jp","yuasa.wakayama.jp","yura.wakayama.jp","asahi.yamagata.jp","funagata.yamagata.jp","higashine.yamagata.jp","iide.yamagata.jp","kahoku.yamagata.jp","kaminoyama.yamagata.jp","kaneyama.yamagata.jp","kawanishi.yamagata.jp","mamurogawa.yamagata.jp","mikawa.yamagata.jp","murayama.yamagata.jp","nagai.yamagata.jp","nakayama.yamagata.jp","nanyo.yamagata.jp","nishikawa.yamagata.jp","obanazawa.yamagata.jp","oe.yamagata.jp","oguni.yamagata.jp","ohkura.yamagata.jp","oishida.yamagata.jp","sagae.yamagata.jp","sakata.yamagata.jp","sakegawa.yamagata.jp","shinjo.yamagata.jp","shirataka.yamagata.jp","shonai.yamagata.jp","takahata.yamagata.jp","tendo.yamagata.jp","tozawa.yamagata.jp","tsuruoka.yamagata.jp","yamagata.yamagata.jp","yamanobe.yamagata.jp","yonezawa.yamagata.jp","yuza.yamagata.jp","abu.yamaguchi.jp","hagi.yamaguchi.jp","hikari.yamaguchi.jp","hofu.yamaguchi.jp","iwakuni.yamaguchi.jp","kudamatsu.yamaguchi.jp","mitou.yamaguchi.jp","nagato.yamaguchi.jp","oshima.yamaguchi.jp","shimonoseki.yamaguchi.jp","shunan.yamaguchi.jp","tabuse.yamaguchi.jp","tokuyama.yamaguchi.jp","toyota.yamaguchi.jp","ube.yamaguchi.jp","yuu.yamaguchi.jp","chuo.yamanashi.jp","doshi.yamanashi.jp","fuefuki.yamanashi.jp","fujikawa.yamanashi.jp","fujikawaguchiko.yamanashi.jp","fujiyoshida.yamanashi.jp","hayakawa.yamanashi.jp","hokuto.yamanashi.jp","ichikawamisato.yamanashi.jp","kai.yamanashi.jp","kofu.yamanashi.jp","koshu.yamanashi.jp","kosuge.yamanashi.jp","minami-alps.yamanashi.jp","minobu.yamanashi.jp","nakamichi.yamanashi.jp","nanbu.yamanashi.jp","narusawa.yamanashi.jp","nirasaki.yamanashi.jp","nishikatsura.yamanashi.jp","oshino.yamanashi.jp","otsuki.yamanashi.jp","showa.yamanashi.jp","tabayama.yamanashi.jp","tsuru.yamanashi.jp","uenohara.yamanashi.jp","yamanakako.yamanashi.jp","yamanashi.yamanashi.jp","ke","ac.ke","co.ke","go.ke","info.ke","me.ke","mobi.ke","ne.ke","or.ke","sc.ke","kg","org.kg","net.kg","com.kg","edu.kg","gov.kg","mil.kg","*.kh","ki","edu.ki","biz.ki","net.ki","org.ki","gov.ki","info.ki","com.ki","km","org.km","nom.km","gov.km","prd.km","tm.km","edu.km","mil.km","ass.km","com.km","coop.km","asso.km","presse.km","medecin.km","notaires.km","pharmaciens.km","veterinaire.km","gouv.km","kn","net.kn","org.kn","edu.kn","gov.kn","kp","com.kp","edu.kp","gov.kp","org.kp","rep.kp","tra.kp","kr","ac.kr","co.kr","es.kr","go.kr","hs.kr","kg.kr","mil.kr","ms.kr","ne.kr","or.kr","pe.kr","re.kr","sc.kr","busan.kr","chungbuk.kr","chungnam.kr","daegu.kr","daejeon.kr","gangwon.kr","gwangju.kr","gyeongbuk.kr","gyeonggi.kr","gyeongnam.kr","incheon.kr","jeju.kr","jeonbuk.kr","jeonnam.kr","seoul.kr","ulsan.kr","kw","com.kw","edu.kw","emb.kw","gov.kw","ind.kw","net.kw","org.kw","ky","edu.ky","gov.ky","com.ky","org.ky","net.ky","kz","org.kz","edu.kz","net.kz","gov.kz","mil.kz","com.kz","la","int.la","net.la","info.la","edu.la","gov.la","per.la","com.la","org.la","lb","com.lb","edu.lb","gov.lb","net.lb","org.lb","lc","com.lc","net.lc","co.lc","org.lc","edu.lc","gov.lc","li","lk","gov.lk","sch.lk","net.lk","int.lk","com.lk","org.lk","edu.lk","ngo.lk","soc.lk","web.lk","ltd.lk","assn.lk","grp.lk","hotel.lk","ac.lk","lr","com.lr","edu.lr","gov.lr","org.lr","net.lr","ls","ac.ls","biz.ls","co.ls","edu.ls","gov.ls","info.ls","net.ls","org.ls","sc.ls","lt","gov.lt","lu","lv","com.lv","edu.lv","gov.lv","org.lv","mil.lv","id.lv","net.lv","asn.lv","conf.lv","ly","com.ly","net.ly","gov.ly","plc.ly","edu.ly","sch.ly","med.ly","org.ly","id.ly","ma","co.ma","net.ma","gov.ma","org.ma","ac.ma","press.ma","mc","tm.mc","asso.mc","md","me","co.me","net.me","org.me","edu.me","ac.me","gov.me","its.me","priv.me","mg","org.mg","nom.mg","gov.mg","prd.mg","tm.mg","edu.mg","mil.mg","com.mg","co.mg","mh","mil","mk","com.mk","org.mk","net.mk","edu.mk","gov.mk","inf.mk","name.mk","ml","com.ml","edu.ml","gouv.ml","gov.ml","net.ml","org.ml","presse.ml","*.mm","mn","gov.mn","edu.mn","org.mn","mo","com.mo","net.mo","org.mo","edu.mo","gov.mo","mobi","mp","mq","mr","gov.mr","ms","com.ms","edu.ms","gov.ms","net.ms","org.ms","mt","com.mt","edu.mt","net.mt","org.mt","mu","com.mu","net.mu","org.mu","gov.mu","ac.mu","co.mu","or.mu","museum","academy.museum","agriculture.museum","air.museum","airguard.museum","alabama.museum","alaska.museum","amber.museum","ambulance.museum","american.museum","americana.museum","americanantiques.museum","americanart.museum","amsterdam.museum","and.museum","annefrank.museum","anthro.museum","anthropology.museum","antiques.museum","aquarium.museum","arboretum.museum","archaeological.museum","archaeology.museum","architecture.museum","art.museum","artanddesign.museum","artcenter.museum","artdeco.museum","arteducation.museum","artgallery.museum","arts.museum","artsandcrafts.museum","asmatart.museum","assassination.museum","assisi.museum","association.museum","astronomy.museum","atlanta.museum","austin.museum","australia.museum","automotive.museum","aviation.museum","axis.museum","badajoz.museum","baghdad.museum","bahn.museum","bale.museum","baltimore.museum","barcelona.museum","baseball.museum","basel.museum","baths.museum","bauern.museum","beauxarts.museum","beeldengeluid.museum","bellevue.museum","bergbau.museum","berkeley.museum","berlin.museum","bern.museum","bible.museum","bilbao.museum","bill.museum","birdart.museum","birthplace.museum","bonn.museum","boston.museum","botanical.museum","botanicalgarden.museum","botanicgarden.museum","botany.museum","brandywinevalley.museum","brasil.museum","bristol.museum","british.museum","britishcolumbia.museum","broadcast.museum","brunel.museum","brussel.museum","brussels.museum","bruxelles.museum","building.museum","burghof.museum","bus.museum","bushey.museum","cadaques.museum","california.museum","cambridge.museum","can.museum","canada.museum","capebreton.museum","carrier.museum","cartoonart.museum","casadelamoneda.museum","castle.museum","castres.museum","celtic.museum","center.museum","chattanooga.museum","cheltenham.museum","chesapeakebay.museum","chicago.museum","children.museum","childrens.museum","childrensgarden.museum","chiropractic.museum","chocolate.museum","christiansburg.museum","cincinnati.museum","cinema.museum","circus.museum","civilisation.museum","civilization.museum","civilwar.museum","clinton.museum","clock.museum","coal.museum","coastaldefence.museum","cody.museum","coldwar.museum","collection.museum","colonialwilliamsburg.museum","coloradoplateau.museum","columbia.museum","columbus.museum","communication.museum","communications.museum","community.museum","computer.museum","computerhistory.museum","comunicações.museum","contemporary.museum","contemporaryart.museum","convent.museum","copenhagen.museum","corporation.museum","correios-e-telecomunicações.museum","corvette.museum","costume.museum","countryestate.museum","county.museum","crafts.museum","cranbrook.museum","creation.museum","cultural.museum","culturalcenter.museum","culture.museum","cyber.museum","cymru.museum","dali.museum","dallas.museum","database.museum","ddr.museum","decorativearts.museum","delaware.museum","delmenhorst.museum","denmark.museum","depot.museum","design.museum","detroit.museum","dinosaur.museum","discovery.museum","dolls.museum","donostia.museum","durham.museum","eastafrica.museum","eastcoast.museum","education.museum","educational.museum","egyptian.museum","eisenbahn.museum","elburg.museum","elvendrell.museum","embroidery.museum","encyclopedic.museum","england.museum","entomology.museum","environment.museum","environmentalconservation.museum","epilepsy.museum","essex.museum","estate.museum","ethnology.museum","exeter.museum","exhibition.museum","family.museum","farm.museum","farmequipment.museum","farmers.museum","farmstead.museum","field.museum","figueres.museum","filatelia.museum","film.museum","fineart.museum","finearts.museum","finland.museum","flanders.museum","florida.museum","force.museum","fortmissoula.museum","fortworth.museum","foundation.museum","francaise.museum","frankfurt.museum","franziskaner.museum","freemasonry.museum","freiburg.museum","fribourg.museum","frog.museum","fundacio.museum","furniture.museum","gallery.museum","garden.museum","gateway.museum","geelvinck.museum","gemological.museum","geology.museum","georgia.museum","giessen.museum","glas.museum","glass.museum","gorge.museum","grandrapids.museum","graz.museum","guernsey.museum","halloffame.museum","hamburg.museum","handson.museum","harvestcelebration.museum","hawaii.museum","health.museum","heimatunduhren.museum","hellas.museum","helsinki.museum","hembygdsforbund.museum","heritage.museum","histoire.museum","historical.museum","historicalsociety.museum","historichouses.museum","historisch.museum","historisches.museum","history.museum","historyofscience.museum","horology.museum","house.museum","humanities.museum","illustration.museum","imageandsound.museum","indian.museum","indiana.museum","indianapolis.museum","indianmarket.museum","intelligence.museum","interactive.museum","iraq.museum","iron.museum","isleofman.museum","jamison.museum","jefferson.museum","jerusalem.museum","jewelry.museum","jewish.museum","jewishart.museum","jfk.museum","journalism.museum","judaica.museum","judygarland.museum","juedisches.museum","juif.museum","karate.museum","karikatur.museum","kids.museum","koebenhavn.museum","koeln.museum","kunst.museum","kunstsammlung.museum","kunstunddesign.museum","labor.museum","labour.museum","lajolla.museum","lancashire.museum","landes.museum","lans.museum","läns.museum","larsson.museum","lewismiller.museum","lincoln.museum","linz.museum","living.museum","livinghistory.museum","localhistory.museum","london.museum","losangeles.museum","louvre.museum","loyalist.museum","lucerne.museum","luxembourg.museum","luzern.museum","mad.museum","madrid.museum","mallorca.museum","manchester.museum","mansion.museum","mansions.museum","manx.museum","marburg.museum","maritime.museum","maritimo.museum","maryland.museum","marylhurst.museum","media.museum","medical.museum","medizinhistorisches.museum","meeres.museum","memorial.museum","mesaverde.museum","michigan.museum","midatlantic.museum","military.museum","mill.museum","miners.museum","mining.museum","minnesota.museum","missile.museum","missoula.museum","modern.museum","moma.museum","money.museum","monmouth.museum","monticello.museum","montreal.museum","moscow.museum","motorcycle.museum","muenchen.museum","muenster.museum","mulhouse.museum","muncie.museum","museet.museum","museumcenter.museum","museumvereniging.museum","music.museum","national.museum","nationalfirearms.museum","nationalheritage.museum","nativeamerican.museum","naturalhistory.museum","naturalhistorymuseum.museum","naturalsciences.museum","nature.museum","naturhistorisches.museum","natuurwetenschappen.museum","naumburg.museum","naval.museum","nebraska.museum","neues.museum","newhampshire.museum","newjersey.museum","newmexico.museum","newport.museum","newspaper.museum","newyork.museum","niepce.museum","norfolk.museum","north.museum","nrw.museum","nyc.museum","nyny.museum","oceanographic.museum","oceanographique.museum","omaha.museum","online.museum","ontario.museum","openair.museum","oregon.museum","oregontrail.museum","otago.museum","oxford.museum","pacific.museum","paderborn.museum","palace.museum","paleo.museum","palmsprings.museum","panama.museum","paris.museum","pasadena.museum","pharmacy.museum","philadelphia.museum","philadelphiaarea.museum","philately.museum","phoenix.museum","photography.museum","pilots.museum","pittsburgh.museum","planetarium.museum","plantation.museum","plants.museum","plaza.museum","portal.museum","portland.museum","portlligat.museum","posts-and-telecommunications.museum","preservation.museum","presidio.museum","press.museum","project.museum","public.museum","pubol.museum","quebec.museum","railroad.museum","railway.museum","research.museum","resistance.museum","riodejaneiro.museum","rochester.museum","rockart.museum","roma.museum","russia.museum","saintlouis.museum","salem.museum","salvadordali.museum","salzburg.museum","sandiego.museum","sanfrancisco.museum","santabarbara.museum","santacruz.museum","santafe.museum","saskatchewan.museum","satx.museum","savannahga.museum","schlesisches.museum","schoenbrunn.museum","schokoladen.museum","school.museum","schweiz.museum","science.museum","scienceandhistory.museum","scienceandindustry.museum","sciencecenter.museum","sciencecenters.museum","science-fiction.museum","sciencehistory.museum","sciences.museum","sciencesnaturelles.museum","scotland.museum","seaport.museum","settlement.museum","settlers.museum","shell.museum","sherbrooke.museum","sibenik.museum","silk.museum","ski.museum","skole.museum","society.museum","sologne.museum","soundandvision.museum","southcarolina.museum","southwest.museum","space.museum","spy.museum","square.museum","stadt.museum","stalbans.museum","starnberg.museum","state.museum","stateofdelaware.museum","station.museum","steam.museum","steiermark.museum","stjohn.museum","stockholm.museum","stpetersburg.museum","stuttgart.museum","suisse.museum","surgeonshall.museum","surrey.museum","svizzera.museum","sweden.museum","sydney.museum","tank.museum","tcm.museum","technology.museum","telekommunikation.museum","television.museum","texas.museum","textile.museum","theater.museum","time.museum","timekeeping.museum","topology.museum","torino.museum","touch.museum","town.museum","transport.museum","tree.museum","trolley.museum","trust.museum","trustee.museum","uhren.museum","ulm.museum","undersea.museum","university.museum","usa.museum","usantiques.museum","usarts.museum","uscountryestate.museum","usculture.museum","usdecorativearts.museum","usgarden.museum","ushistory.museum","ushuaia.museum","uslivinghistory.museum","utah.museum","uvic.museum","valley.museum","vantaa.museum","versailles.museum","viking.museum","village.museum","virginia.museum","virtual.museum","virtuel.museum","vlaanderen.museum","volkenkunde.museum","wales.museum","wallonie.museum","war.museum","washingtondc.museum","watchandclock.museum","watch-and-clock.museum","western.museum","westfalen.museum","whaling.museum","wildlife.museum","williamsburg.museum","windmill.museum","workshop.museum","york.museum","yorkshire.museum","yosemite.museum","youth.museum","zoological.museum","zoology.museum","ירושלים.museum","иком.museum","mv","aero.mv","biz.mv","com.mv","coop.mv","edu.mv","gov.mv","info.mv","int.mv","mil.mv","museum.mv","name.mv","net.mv","org.mv","pro.mv","mw","ac.mw","biz.mw","co.mw","com.mw","coop.mw","edu.mw","gov.mw","int.mw","museum.mw","net.mw","org.mw","mx","com.mx","org.mx","gob.mx","edu.mx","net.mx","my","com.my","net.my","org.my","gov.my","edu.my","mil.my","name.my","mz","ac.mz","adv.mz","co.mz","edu.mz","gov.mz","mil.mz","net.mz","org.mz","na","info.na","pro.na","name.na","school.na","or.na","dr.na","us.na","mx.na","ca.na","in.na","cc.na","tv.na","ws.na","mobi.na","co.na","com.na","org.na","name","nc","asso.nc","nom.nc","ne","net","nf","com.nf","net.nf","per.nf","rec.nf","web.nf","arts.nf","firm.nf","info.nf","other.nf","store.nf","ng","com.ng","edu.ng","gov.ng","i.ng","mil.ng","mobi.ng","name.ng","net.ng","org.ng","sch.ng","ni","ac.ni","biz.ni","co.ni","com.ni","edu.ni","gob.ni","in.ni","info.ni","int.ni","mil.ni","net.ni","nom.ni","org.ni","web.ni","nl","no","fhs.no","vgs.no","fylkesbibl.no","folkebibl.no","museum.no","idrett.no","priv.no","mil.no","stat.no","dep.no","kommune.no","herad.no","aa.no","ah.no","bu.no","fm.no","hl.no","hm.no","jan-mayen.no","mr.no","nl.no","nt.no","of.no","ol.no","oslo.no","rl.no","sf.no","st.no","svalbard.no","tm.no","tr.no","va.no","vf.no","gs.aa.no","gs.ah.no","gs.bu.no","gs.fm.no","gs.hl.no","gs.hm.no","gs.jan-mayen.no","gs.mr.no","gs.nl.no","gs.nt.no","gs.of.no","gs.ol.no","gs.oslo.no","gs.rl.no","gs.sf.no","gs.st.no","gs.svalbard.no","gs.tm.no","gs.tr.no","gs.va.no","gs.vf.no","akrehamn.no","åkrehamn.no","algard.no","ålgård.no","arna.no","brumunddal.no","bryne.no","bronnoysund.no","brønnøysund.no","drobak.no","drøbak.no","egersund.no","fetsund.no","floro.no","florø.no","fredrikstad.no","hokksund.no","honefoss.no","hønefoss.no","jessheim.no","jorpeland.no","jørpeland.no","kirkenes.no","kopervik.no","krokstadelva.no","langevag.no","langevåg.no","leirvik.no","mjondalen.no","mjøndalen.no","mo-i-rana.no","mosjoen.no","mosjøen.no","nesoddtangen.no","orkanger.no","osoyro.no","osøyro.no","raholt.no","råholt.no","sandnessjoen.no","sandnessjøen.no","skedsmokorset.no","slattum.no","spjelkavik.no","stathelle.no","stavern.no","stjordalshalsen.no","stjørdalshalsen.no","tananger.no","tranby.no","vossevangen.no","afjord.no","åfjord.no","agdenes.no","al.no","ål.no","alesund.no","ålesund.no","alstahaug.no","alta.no","áltá.no","alaheadju.no","álaheadju.no","alvdal.no","amli.no","åmli.no","amot.no","åmot.no","andebu.no","andoy.no","andøy.no","andasuolo.no","ardal.no","årdal.no","aremark.no","arendal.no","ås.no","aseral.no","åseral.no","asker.no","askim.no","askvoll.no","askoy.no","askøy.no","asnes.no","åsnes.no","audnedaln.no","aukra.no","aure.no","aurland.no","aurskog-holand.no","aurskog-høland.no","austevoll.no","austrheim.no","averoy.no","averøy.no","balestrand.no","ballangen.no","balat.no","bálát.no","balsfjord.no","bahccavuotna.no","báhccavuotna.no","bamble.no","bardu.no","beardu.no","beiarn.no","bajddar.no","bájddar.no","baidar.no","báidár.no","berg.no","bergen.no","berlevag.no","berlevåg.no","bearalvahki.no","bearalváhki.no","bindal.no","birkenes.no","bjarkoy.no","bjarkøy.no","bjerkreim.no","bjugn.no","bodo.no","bodø.no","badaddja.no","bådåddjå.no","budejju.no","bokn.no","bremanger.no","bronnoy.no","brønnøy.no","bygland.no","bykle.no","barum.no","bærum.no","bo.telemark.no","bø.telemark.no","bo.nordland.no","bø.nordland.no","bievat.no","bievát.no","bomlo.no","bømlo.no","batsfjord.no","båtsfjord.no","bahcavuotna.no","báhcavuotna.no","dovre.no","drammen.no","drangedal.no","dyroy.no","dyrøy.no","donna.no","dønna.no","eid.no","eidfjord.no","eidsberg.no","eidskog.no","eidsvoll.no","eigersund.no","elverum.no","enebakk.no","engerdal.no","etne.no","etnedal.no","evenes.no","evenassi.no","evenášši.no","evje-og-hornnes.no","farsund.no","fauske.no","fuossko.no","fuoisku.no","fedje.no","fet.no","finnoy.no","finnøy.no","fitjar.no","fjaler.no","fjell.no","flakstad.no","flatanger.no","flekkefjord.no","flesberg.no","flora.no","fla.no","flå.no","folldal.no","forsand.no","fosnes.no","frei.no","frogn.no","froland.no","frosta.no","frana.no","fræna.no","froya.no","frøya.no","fusa.no","fyresdal.no","forde.no","førde.no","gamvik.no","gangaviika.no","gáŋgaviika.no","gaular.no","gausdal.no","gildeskal.no","gildeskål.no","giske.no","gjemnes.no","gjerdrum.no","gjerstad.no","gjesdal.no","gjovik.no","gjøvik.no","gloppen.no","gol.no","gran.no","grane.no","granvin.no","gratangen.no","grimstad.no","grong.no","kraanghke.no","kråanghke.no","grue.no","gulen.no","hadsel.no","halden.no","halsa.no","hamar.no","hamaroy.no","habmer.no","hábmer.no","hapmir.no","hápmir.no","hammerfest.no","hammarfeasta.no","hámmárfeasta.no","haram.no","hareid.no","harstad.no","hasvik.no","aknoluokta.no","ákŋoluokta.no","hattfjelldal.no","aarborte.no","haugesund.no","hemne.no","hemnes.no","hemsedal.no","heroy.more-og-romsdal.no","herøy.møre-og-romsdal.no","heroy.nordland.no","herøy.nordland.no","hitra.no","hjartdal.no","hjelmeland.no","hobol.no","hobøl.no","hof.no","hol.no","hole.no","holmestrand.no","holtalen.no","holtålen.no","hornindal.no","horten.no","hurdal.no","hurum.no","hvaler.no","hyllestad.no","hagebostad.no","hægebostad.no","hoyanger.no","høyanger.no","hoylandet.no","høylandet.no","ha.no","hå.no","ibestad.no","inderoy.no","inderøy.no","iveland.no","jevnaker.no","jondal.no","jolster.no","jølster.no","karasjok.no","karasjohka.no","kárášjohka.no","karlsoy.no","galsa.no","gálsá.no","karmoy.no","karmøy.no","kautokeino.no","guovdageaidnu.no","klepp.no","klabu.no","klæbu.no","kongsberg.no","kongsvinger.no","kragero.no","kragerø.no","kristiansand.no","kristiansund.no","krodsherad.no","krødsherad.no","kvalsund.no","rahkkeravju.no","ráhkkerávju.no","kvam.no","kvinesdal.no","kvinnherad.no","kviteseid.no","kvitsoy.no","kvitsøy.no","kvafjord.no","kvæfjord.no","giehtavuoatna.no","kvanangen.no","kvænangen.no","navuotna.no","návuotna.no","kafjord.no","kåfjord.no","gaivuotna.no","gáivuotna.no","larvik.no","lavangen.no","lavagis.no","loabat.no","loabát.no","lebesby.no","davvesiida.no","leikanger.no","leirfjord.no","leka.no","leksvik.no","lenvik.no","leangaviika.no","leaŋgaviika.no","lesja.no","levanger.no","lier.no","lierne.no","lillehammer.no","lillesand.no","lindesnes.no","lindas.no","lindås.no","lom.no","loppa.no","lahppi.no","láhppi.no","lund.no","lunner.no","luroy.no","lurøy.no","luster.no","lyngdal.no","lyngen.no","ivgu.no","lardal.no","lerdal.no","lærdal.no","lodingen.no","lødingen.no","lorenskog.no","lørenskog.no","loten.no","løten.no","malvik.no","masoy.no","måsøy.no","muosat.no","muosát.no","mandal.no","marker.no","marnardal.no","masfjorden.no","meland.no","meldal.no","melhus.no","meloy.no","meløy.no","meraker.no","meråker.no","moareke.no","moåreke.no","midsund.no","midtre-gauldal.no","modalen.no","modum.no","molde.no","moskenes.no","moss.no","mosvik.no","malselv.no","målselv.no","malatvuopmi.no","málatvuopmi.no","namdalseid.no","aejrie.no","namsos.no","namsskogan.no","naamesjevuemie.no","nååmesjevuemie.no","laakesvuemie.no","nannestad.no","narvik.no","narviika.no","naustdal.no","nedre-eiker.no","nes.akershus.no","nes.buskerud.no","nesna.no","nesodden.no","nesseby.no","unjarga.no","unjárga.no","nesset.no","nissedal.no","nittedal.no","nord-aurdal.no","nord-fron.no","nord-odal.no","norddal.no","nordkapp.no","davvenjarga.no","davvenjárga.no","nordre-land.no","nordreisa.no","raisa.no","ráisa.no","nore-og-uvdal.no","notodden.no","naroy.no","nærøy.no","notteroy.no","nøtterøy.no","odda.no","oksnes.no","øksnes.no","oppdal.no","oppegard.no","oppegård.no","orkdal.no","orland.no","ørland.no","orskog.no","ørskog.no","orsta.no","ørsta.no","os.hedmark.no","os.hordaland.no","osen.no","osteroy.no","osterøy.no","ostre-toten.no","østre-toten.no","overhalla.no","ovre-eiker.no","øvre-eiker.no","oyer.no","øyer.no","oygarden.no","øygarden.no","oystre-slidre.no","øystre-slidre.no","porsanger.no","porsangu.no","porsáŋgu.no","porsgrunn.no","radoy.no","radøy.no","rakkestad.no","rana.no","ruovat.no","randaberg.no","rauma.no","rendalen.no","rennebu.no","rennesoy.no","rennesøy.no","rindal.no","ringebu.no","ringerike.no","ringsaker.no","rissa.no","risor.no","risør.no","roan.no","rollag.no","rygge.no","ralingen.no","rælingen.no","rodoy.no","rødøy.no","romskog.no","rømskog.no","roros.no","røros.no","rost.no","røst.no","royken.no","røyken.no","royrvik.no","røyrvik.no","rade.no","råde.no","salangen.no","siellak.no","saltdal.no","salat.no","sálát.no","sálat.no","samnanger.no","sande.more-og-romsdal.no","sande.møre-og-romsdal.no","sande.vestfold.no","sandefjord.no","sandnes.no","sandoy.no","sandøy.no","sarpsborg.no","sauda.no","sauherad.no","sel.no","selbu.no","selje.no","seljord.no","sigdal.no","siljan.no","sirdal.no","skaun.no","skedsmo.no","ski.no","skien.no","skiptvet.no","skjervoy.no","skjervøy.no","skierva.no","skiervá.no","skjak.no","skjåk.no","skodje.no","skanland.no","skånland.no","skanit.no","skánit.no","smola.no","smøla.no","snillfjord.no","snasa.no","snåsa.no","snoasa.no","snaase.no","snåase.no","sogndal.no","sokndal.no","sola.no","solund.no","songdalen.no","sortland.no","spydeberg.no","stange.no","stavanger.no","steigen.no","steinkjer.no","stjordal.no","stjørdal.no","stokke.no","stor-elvdal.no","stord.no","stordal.no","storfjord.no","omasvuotna.no","strand.no","stranda.no","stryn.no","sula.no","suldal.no","sund.no","sunndal.no","surnadal.no","sveio.no","svelvik.no","sykkylven.no","sogne.no","søgne.no","somna.no","sømna.no","sondre-land.no","søndre-land.no","sor-aurdal.no","sør-aurdal.no","sor-fron.no","sør-fron.no","sor-odal.no","sør-odal.no","sor-varanger.no","sør-varanger.no","matta-varjjat.no","mátta-várjjat.no","sorfold.no","sørfold.no","sorreisa.no","sørreisa.no","sorum.no","sørum.no","tana.no","deatnu.no","time.no","tingvoll.no","tinn.no","tjeldsund.no","dielddanuorri.no","tjome.no","tjøme.no","tokke.no","tolga.no","torsken.no","tranoy.no","tranøy.no","tromso.no","tromsø.no","tromsa.no","romsa.no","trondheim.no","troandin.no","trysil.no","trana.no","træna.no","trogstad.no","trøgstad.no","tvedestrand.no","tydal.no","tynset.no","tysfjord.no","divtasvuodna.no","divttasvuotna.no","tysnes.no","tysvar.no","tysvær.no","tonsberg.no","tønsberg.no","ullensaker.no","ullensvang.no","ulvik.no","utsira.no","vadso.no","vadsø.no","cahcesuolo.no","čáhcesuolo.no","vaksdal.no","valle.no","vang.no","vanylven.no","vardo.no","vardø.no","varggat.no","várggát.no","vefsn.no","vaapste.no","vega.no","vegarshei.no","vegårshei.no","vennesla.no","verdal.no","verran.no","vestby.no","vestnes.no","vestre-slidre.no","vestre-toten.no","vestvagoy.no","vestvågøy.no","vevelstad.no","vik.no","vikna.no","vindafjord.no","volda.no","voss.no","varoy.no","værøy.no","vagan.no","vågan.no","voagat.no","vagsoy.no","vågsøy.no","vaga.no","vågå.no","valer.ostfold.no","våler.østfold.no","valer.hedmark.no","våler.hedmark.no","*.np","nr","biz.nr","info.nr","gov.nr","edu.nr","org.nr","net.nr","com.nr","nu","nz","ac.nz","co.nz","cri.nz","geek.nz","gen.nz","govt.nz","health.nz","iwi.nz","kiwi.nz","maori.nz","mil.nz","māori.nz","net.nz","org.nz","parliament.nz","school.nz","om","co.om","com.om","edu.om","gov.om","med.om","museum.om","net.om","org.om","pro.om","onion","org","pa","ac.pa","gob.pa","com.pa","org.pa","sld.pa","edu.pa","net.pa","ing.pa","abo.pa","med.pa","nom.pa","pe","edu.pe","gob.pe","nom.pe","mil.pe","org.pe","com.pe","net.pe","pf","com.pf","org.pf","edu.pf","*.pg","ph","com.ph","net.ph","org.ph","gov.ph","edu.ph","ngo.ph","mil.ph","i.ph","pk","com.pk","net.pk","edu.pk","org.pk","fam.pk","biz.pk","web.pk","gov.pk","gob.pk","gok.pk","gon.pk","gop.pk","gos.pk","info.pk","pl","com.pl","net.pl","org.pl","aid.pl","agro.pl","atm.pl","auto.pl","biz.pl","edu.pl","gmina.pl","gsm.pl","info.pl","mail.pl","miasta.pl","media.pl","mil.pl","nieruchomosci.pl","nom.pl","pc.pl","powiat.pl","priv.pl","realestate.pl","rel.pl","sex.pl","shop.pl","sklep.pl","sos.pl","szkola.pl","targi.pl","tm.pl","tourism.pl","travel.pl","turystyka.pl","gov.pl","ap.gov.pl","ic.gov.pl","is.gov.pl","us.gov.pl","kmpsp.gov.pl","kppsp.gov.pl","kwpsp.gov.pl","psp.gov.pl","wskr.gov.pl","kwp.gov.pl","mw.gov.pl","ug.gov.pl","um.gov.pl","umig.gov.pl","ugim.gov.pl","upow.gov.pl","uw.gov.pl","starostwo.gov.pl","pa.gov.pl","po.gov.pl","psse.gov.pl","pup.gov.pl","rzgw.gov.pl","sa.gov.pl","so.gov.pl","sr.gov.pl","wsa.gov.pl","sko.gov.pl","uzs.gov.pl","wiih.gov.pl","winb.gov.pl","pinb.gov.pl","wios.gov.pl","witd.gov.pl","wzmiuw.gov.pl","piw.gov.pl","wiw.gov.pl","griw.gov.pl","wif.gov.pl","oum.gov.pl","sdn.gov.pl","zp.gov.pl","uppo.gov.pl","mup.gov.pl","wuoz.gov.pl","konsulat.gov.pl","oirm.gov.pl","augustow.pl","babia-gora.pl","bedzin.pl","beskidy.pl","bialowieza.pl","bialystok.pl","bielawa.pl","bieszczady.pl","boleslawiec.pl","bydgoszcz.pl","bytom.pl","cieszyn.pl","czeladz.pl","czest.pl","dlugoleka.pl","elblag.pl","elk.pl","glogow.pl","gniezno.pl","gorlice.pl","grajewo.pl","ilawa.pl","jaworzno.pl","jelenia-gora.pl","jgora.pl","kalisz.pl","kazimierz-dolny.pl","karpacz.pl","kartuzy.pl","kaszuby.pl","katowice.pl","kepno.pl","ketrzyn.pl","klodzko.pl","kobierzyce.pl","kolobrzeg.pl","konin.pl","konskowola.pl","kutno.pl","lapy.pl","lebork.pl","legnica.pl","lezajsk.pl","limanowa.pl","lomza.pl","lowicz.pl","lubin.pl","lukow.pl","malbork.pl","malopolska.pl","mazowsze.pl","mazury.pl","mielec.pl","mielno.pl","mragowo.pl","naklo.pl","nowaruda.pl","nysa.pl","olawa.pl","olecko.pl","olkusz.pl","olsztyn.pl","opoczno.pl","opole.pl","ostroda.pl","ostroleka.pl","ostrowiec.pl","ostrowwlkp.pl","pila.pl","pisz.pl","podhale.pl","podlasie.pl","polkowice.pl","pomorze.pl","pomorskie.pl","prochowice.pl","pruszkow.pl","przeworsk.pl","pulawy.pl","radom.pl","rawa-maz.pl","rybnik.pl","rzeszow.pl","sanok.pl","sejny.pl","slask.pl","slupsk.pl","sosnowiec.pl","stalowa-wola.pl","skoczow.pl","starachowice.pl","stargard.pl","suwalki.pl","swidnica.pl","swiebodzin.pl","swinoujscie.pl","szczecin.pl","szczytno.pl","tarnobrzeg.pl","tgory.pl","turek.pl","tychy.pl","ustka.pl","walbrzych.pl","warmia.pl","warszawa.pl","waw.pl","wegrow.pl","wielun.pl","wlocl.pl","wloclawek.pl","wodzislaw.pl","wolomin.pl","wroclaw.pl","zachpomor.pl","zagan.pl","zarow.pl","zgora.pl","zgorzelec.pl","pm","pn","gov.pn","co.pn","org.pn","edu.pn","net.pn","post","pr","com.pr","net.pr","org.pr","gov.pr","edu.pr","isla.pr","pro.pr","biz.pr","info.pr","name.pr","est.pr","prof.pr","ac.pr","pro","aaa.pro","aca.pro","acct.pro","avocat.pro","bar.pro","cpa.pro","eng.pro","jur.pro","law.pro","med.pro","recht.pro","ps","edu.ps","gov.ps","sec.ps","plo.ps","com.ps","org.ps","net.ps","pt","net.pt","gov.pt","org.pt","edu.pt","int.pt","publ.pt","com.pt","nome.pt","pw","co.pw","ne.pw","or.pw","ed.pw","go.pw","belau.pw","py","com.py","coop.py","edu.py","gov.py","mil.py","net.py","org.py","qa","com.qa","edu.qa","gov.qa","mil.qa","name.qa","net.qa","org.qa","sch.qa","re","asso.re","com.re","nom.re","ro","arts.ro","com.ro","firm.ro","info.ro","nom.ro","nt.ro","org.ro","rec.ro","store.ro","tm.ro","www.ro","rs","ac.rs","co.rs","edu.rs","gov.rs","in.rs","org.rs","ru","rw","ac.rw","co.rw","coop.rw","gov.rw","mil.rw","net.rw","org.rw","sa","com.sa","net.sa","org.sa","gov.sa","med.sa","pub.sa","edu.sa","sch.sa","sb","com.sb","edu.sb","gov.sb","net.sb","org.sb","sc","com.sc","gov.sc","net.sc","org.sc","edu.sc","sd","com.sd","net.sd","org.sd","edu.sd","med.sd","tv.sd","gov.sd","info.sd","se","a.se","ac.se","b.se","bd.se","brand.se","c.se","d.se","e.se","f.se","fh.se","fhsk.se","fhv.se","g.se","h.se","i.se","k.se","komforb.se","kommunalforbund.se","komvux.se","l.se","lanbib.se","m.se","n.se","naturbruksgymn.se","o.se","org.se","p.se","parti.se","pp.se","press.se","r.se","s.se","t.se","tm.se","u.se","w.se","x.se","y.se","z.se","sg","com.sg","net.sg","org.sg","gov.sg","edu.sg","per.sg","sh","com.sh","net.sh","gov.sh","org.sh","mil.sh","si","sj","sk","sl","com.sl","net.sl","edu.sl","gov.sl","org.sl","sm","sn","art.sn","com.sn","edu.sn","gouv.sn","org.sn","perso.sn","univ.sn","so","com.so","edu.so","gov.so","me.so","net.so","org.so","sr","ss","biz.ss","com.ss","edu.ss","gov.ss","net.ss","org.ss","st","co.st","com.st","consulado.st","edu.st","embaixada.st","gov.st","mil.st","net.st","org.st","principe.st","saotome.st","store.st","su","sv","com.sv","edu.sv","gob.sv","org.sv","red.sv","sx","gov.sx","sy","edu.sy","gov.sy","net.sy","mil.sy","com.sy","org.sy","sz","co.sz","ac.sz","org.sz","tc","td","tel","tf","tg","th","ac.th","co.th","go.th","in.th","mi.th","net.th","or.th","tj","ac.tj","biz.tj","co.tj","com.tj","edu.tj","go.tj","gov.tj","int.tj","mil.tj","name.tj","net.tj","nic.tj","org.tj","test.tj","web.tj","tk","tl","gov.tl","tm","com.tm","co.tm","org.tm","net.tm","nom.tm","gov.tm","mil.tm","edu.tm","tn","com.tn","ens.tn","fin.tn","gov.tn","ind.tn","intl.tn","nat.tn","net.tn","org.tn","info.tn","perso.tn","tourism.tn","edunet.tn","rnrt.tn","rns.tn","rnu.tn","mincom.tn","agrinet.tn","defense.tn","turen.tn","to","com.to","gov.to","net.to","org.to","edu.to","mil.to","tr","av.tr","bbs.tr","bel.tr","biz.tr","com.tr","dr.tr","edu.tr","gen.tr","gov.tr","info.tr","mil.tr","k12.tr","kep.tr","name.tr","net.tr","org.tr","pol.tr","tel.tr","tsk.tr","tv.tr","web.tr","nc.tr","gov.nc.tr","tt","co.tt","com.tt","org.tt","net.tt","biz.tt","info.tt","pro.tt","int.tt","coop.tt","jobs.tt","mobi.tt","travel.tt","museum.tt","aero.tt","name.tt","gov.tt","edu.tt","tv","tw","edu.tw","gov.tw","mil.tw","com.tw","net.tw","org.tw","idv.tw","game.tw","ebiz.tw","club.tw","網路.tw","組織.tw","商業.tw","tz","ac.tz","co.tz","go.tz","hotel.tz","info.tz","me.tz","mil.tz","mobi.tz","ne.tz","or.tz","sc.tz","tv.tz","ua","com.ua","edu.ua","gov.ua","in.ua","net.ua","org.ua","cherkassy.ua","cherkasy.ua","chernigov.ua","chernihiv.ua","chernivtsi.ua","chernovtsy.ua","ck.ua","cn.ua","cr.ua","crimea.ua","cv.ua","dn.ua","dnepropetrovsk.ua","dnipropetrovsk.ua","dominic.ua","donetsk.ua","dp.ua","if.ua","ivano-frankivsk.ua","kh.ua","kharkiv.ua","kharkov.ua","kherson.ua","khmelnitskiy.ua","khmelnytskyi.ua","kiev.ua","kirovograd.ua","km.ua","kr.ua","krym.ua","ks.ua","kv.ua","kyiv.ua","lg.ua","lt.ua","lugansk.ua","lutsk.ua","lv.ua","lviv.ua","mk.ua","mykolaiv.ua","nikolaev.ua","od.ua","odesa.ua","odessa.ua","pl.ua","poltava.ua","rivne.ua","rovno.ua","rv.ua","sb.ua","sebastopol.ua","sevastopol.ua","sm.ua","sumy.ua","te.ua","ternopil.ua","uz.ua","uzhgorod.ua","vinnica.ua","vinnytsia.ua","vn.ua","volyn.ua","yalta.ua","zaporizhzhe.ua","zaporizhzhia.ua","zhitomir.ua","zhytomyr.ua","zp.ua","zt.ua","ug","co.ug","or.ug","ac.ug","sc.ug","go.ug","ne.ug","com.ug","org.ug","uk","ac.uk","co.uk","gov.uk","ltd.uk","me.uk","net.uk","nhs.uk","org.uk","plc.uk","police.uk","*.sch.uk","us","dni.us","fed.us","isa.us","kids.us","nsn.us","ak.us","al.us","ar.us","as.us","az.us","ca.us","co.us","ct.us","dc.us","de.us","fl.us","ga.us","gu.us","hi.us","ia.us","id.us","il.us","in.us","ks.us","ky.us","la.us","ma.us","md.us","me.us","mi.us","mn.us","mo.us","ms.us","mt.us","nc.us","nd.us","ne.us","nh.us","nj.us","nm.us","nv.us","ny.us","oh.us","ok.us","or.us","pa.us","pr.us","ri.us","sc.us","sd.us","tn.us","tx.us","ut.us","vi.us","vt.us","va.us","wa.us","wi.us","wv.us","wy.us","k12.ak.us","k12.al.us","k12.ar.us","k12.as.us","k12.az.us","k12.ca.us","k12.co.us","k12.ct.us","k12.dc.us","k12.de.us","k12.fl.us","k12.ga.us","k12.gu.us","k12.ia.us","k12.id.us","k12.il.us","k12.in.us","k12.ks.us","k12.ky.us","k12.la.us","k12.ma.us","k12.md.us","k12.me.us","k12.mi.us","k12.mn.us","k12.mo.us","k12.ms.us","k12.mt.us","k12.nc.us","k12.ne.us","k12.nh.us","k12.nj.us","k12.nm.us","k12.nv.us","k12.ny.us","k12.oh.us","k12.ok.us","k12.or.us","k12.pa.us","k12.pr.us","k12.ri.us","k12.sc.us","k12.tn.us","k12.tx.us","k12.ut.us","k12.vi.us","k12.vt.us","k12.va.us","k12.wa.us","k12.wi.us","k12.wy.us","cc.ak.us","cc.al.us","cc.ar.us","cc.as.us","cc.az.us","cc.ca.us","cc.co.us","cc.ct.us","cc.dc.us","cc.de.us","cc.fl.us","cc.ga.us","cc.gu.us","cc.hi.us","cc.ia.us","cc.id.us","cc.il.us","cc.in.us","cc.ks.us","cc.ky.us","cc.la.us","cc.ma.us","cc.md.us","cc.me.us","cc.mi.us","cc.mn.us","cc.mo.us","cc.ms.us","cc.mt.us","cc.nc.us","cc.nd.us","cc.ne.us","cc.nh.us","cc.nj.us","cc.nm.us","cc.nv.us","cc.ny.us","cc.oh.us","cc.ok.us","cc.or.us","cc.pa.us","cc.pr.us","cc.ri.us","cc.sc.us","cc.sd.us","cc.tn.us","cc.tx.us","cc.ut.us","cc.vi.us","cc.vt.us","cc.va.us","cc.wa.us","cc.wi.us","cc.wv.us","cc.wy.us","lib.ak.us","lib.al.us","lib.ar.us","lib.as.us","lib.az.us","lib.ca.us","lib.co.us","lib.ct.us","lib.dc.us","lib.fl.us","lib.ga.us","lib.gu.us","lib.hi.us","lib.ia.us","lib.id.us","lib.il.us","lib.in.us","lib.ks.us","lib.ky.us","lib.la.us","lib.ma.us","lib.md.us","lib.me.us","lib.mi.us","lib.mn.us","lib.mo.us","lib.ms.us","lib.mt.us","lib.nc.us","lib.nd.us","lib.ne.us","lib.nh.us","lib.nj.us","lib.nm.us","lib.nv.us","lib.ny.us","lib.oh.us","lib.ok.us","lib.or.us","lib.pa.us","lib.pr.us","lib.ri.us","lib.sc.us","lib.sd.us","lib.tn.us","lib.tx.us","lib.ut.us","lib.vi.us","lib.vt.us","lib.va.us","lib.wa.us","lib.wi.us","lib.wy.us","pvt.k12.ma.us","chtr.k12.ma.us","paroch.k12.ma.us","ann-arbor.mi.us","cog.mi.us","dst.mi.us","eaton.mi.us","gen.mi.us","mus.mi.us","tec.mi.us","washtenaw.mi.us","uy","com.uy","edu.uy","gub.uy","mil.uy","net.uy","org.uy","uz","co.uz","com.uz","net.uz","org.uz","va","vc","com.vc","net.vc","org.vc","gov.vc","mil.vc","edu.vc","ve","arts.ve","co.ve","com.ve","e12.ve","edu.ve","firm.ve","gob.ve","gov.ve","info.ve","int.ve","mil.ve","net.ve","org.ve","rec.ve","store.ve","tec.ve","web.ve","vg","vi","co.vi","com.vi","k12.vi","net.vi","org.vi","vn","com.vn","net.vn","org.vn","edu.vn","gov.vn","int.vn","ac.vn","biz.vn","info.vn","name.vn","pro.vn","health.vn","vu","com.vu","edu.vu","net.vu","org.vu","wf","ws","com.ws","net.ws","org.ws","gov.ws","edu.ws","yt","امارات","հայ","বাংলা","бг","бел","中国","中國","الجزائر","مصر","ею","موريتانيا","გე","ελ","香港","公司.香港","教育.香港","政府.香港","個人.香港","網絡.香港","組織.香港","ಭಾರತ","ଭାରତ","ভাৰত","भारतम्","भारोत","ڀارت","ഭാരതം","भारत","بارت","بھارت","భారత్","ભારત","ਭਾਰਤ","ভারত","இந்தியா","ایران","ايران","عراق","الاردن","한국","қаз","ලංකා","இலங்கை","المغرب","мкд","мон","澳門","澳门","مليسيا","عمان","پاکستان","پاكستان","فلسطين","срб","пр.срб","орг.срб","обр.срб","од.срб","упр.срб","ак.срб","рф","قطر","السعودية","السعودیة","السعودیۃ","السعوديه","سودان","新加坡","சிங்கப்பூர்","سورية","سوريا","ไทย","ศึกษา.ไทย","ธุรกิจ.ไทย","รัฐบาล.ไทย","ทหาร.ไทย","เน็ต.ไทย","องค์กร.ไทย","تونس","台灣","台湾","臺灣","укр","اليمن","xxx","*.ye","ac.za","agric.za","alt.za","co.za","edu.za","gov.za","grondar.za","law.za","mil.za","net.za","ngo.za","nic.za","nis.za","nom.za","org.za","school.za","tm.za","web.za","zm","ac.zm","biz.zm","co.zm","com.zm","edu.zm","gov.zm","info.zm","mil.zm","net.zm","org.zm","sch.zm","zw","ac.zw","co.zw","gov.zw","mil.zw","org.zw","aaa","aarp","abarth","abb","abbott","abbvie","abc","able","abogado","abudhabi","academy","accenture","accountant","accountants","aco","actor","adac","ads","adult","aeg","aetna","afamilycompany","afl","africa","agakhan","agency","aig","aigo","airbus","airforce","airtel","akdn","alfaromeo","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","aol","apartments","app","apple","aquarelle","arab","aramco","archi","army","art","arte","asda","associates","athleta","attorney","auction","audi","audible","audio","auspost","author","auto","autos","avianca","aws","axa","azure","baby","baidu","banamex","bananarepublic","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bbc","bbt","bbva","bcg","bcn","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bharti","bible","bid","bike","bing","bingo","bio","black","blackfriday","blockbuster","blog","bloomberg","blue","bms","bmw","bnpparibas","boats","boehringer","bofa","bom","bond","boo","book","booking","bosch","bostik","boston","bot","boutique","box","bradesco","bridgestone","broadway","broker","brother","brussels","budapest","bugatti","build","builders","business","buy","buzz","bzh","cab","cafe","cal","call","calvinklein","cam","camera","camp","cancerresearch","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","casa","case","caseih","cash","casino","catering","catholic","cba","cbn","cbre","cbs","ceb","center","ceo","cern","cfa","cfd","chanel","channel","charity","chase","chat","cheap","chintai","christmas","chrome","church","cipriani","circle","cisco","citadel","citi","citic","city","cityeats","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","coach","codes","coffee","college","cologne","comcast","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cookingchannel","cool","corsica","country","coupon","coupons","courses","cpa","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","csc","cuisinella","cymru","cyou","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dnp","docs","doctor","dog","domains","dot","download","drive","dtv","dubai","duck","dunlop","dupont","durban","dvag","dvr","earth","eat","eco","edeka","education","email","emerck","energy","engineer","engineering","enterprises","epson","equipment","ericsson","erni","esq","estate","esurance","etisalat","eurovision","eus","events","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fiat","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","flickr","flights","flir","florist","flowers","fly","foo","food","foodnetwork","football","ford","forex","forsale","forum","foundation","fox","free","fresenius","frl","frogans","frontdoor","frontier","ftr","fujitsu","fujixerox","fun","fund","furniture","futbol","fyi","gal","gallery","gallo","gallup","game","games","gap","garden","gay","gbiz","gdn","gea","gent","genting","george","ggee","gift","gifts","gives","giving","glade","glass","gle","global","globo","gmail","gmbh","gmo","gmx","godaddy","gold","goldpoint","golf","goo","goodyear","goog","google","gop","got","grainger","graphics","gratis","green","gripe","grocery","group","guardian","gucci","guge","guide","guitars","guru","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hgtv","hiphop","hisamitsu","hitachi","hiv","hkt","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","horse","hospital","host","hosting","hot","hoteles","hotels","hotmail","house","how","hsbc","hughes","hyatt","hyundai","ibm","icbc","ice","icu","ieee","ifm","ikano","imamat","imdb","immo","immobilien","inc","industries","infiniti","ing","ink","institute","insurance","insure","intel","international","intuit","investments","ipiranga","irish","ismaili","ist","istanbul","itau","itv","iveco","jaguar","java","jcb","jcp","jeep","jetzt","jewelry","jio","jll","jmp","jnj","joburg","jot","joy","jpmorgan","jprs","juegos","juniper","kaufen","kddi","kerryhotels","kerrylogistics","kerryproperties","kfh","kia","kim","kinder","kindle","kitchen","kiwi","koeln","komatsu","kosher","kpmg","kpn","krd","kred","kuokgroup","kyoto","lacaixa","lamborghini","lamer","lancaster","lancia","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","liaison","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","linde","link","lipsy","live","living","lixil","llc","llp","loan","loans","locker","locus","loft","lol","london","lotte","lotto","love","lpl","lplfinancial","ltd","ltda","lundbeck","lupin","luxe","luxury","macys","madrid","maif","maison","makeup","man","management","mango","map","market","marketing","markets","marriott","marshalls","maserati","mattel","mba","mckinsey","med","media","meet","melbourne","meme","memorial","men","menu","merckmsd","metlife","miami","microsoft","mini","mint","mit","mitsubishi","mlb","mls","mma","mobile","moda","moe","moi","mom","monash","money","monster","mormon","mortgage","moscow","moto","motorcycles","mov","movie","movistar","msd","mtn","mtr","mutual","nab","nadex","nagoya","nationwide","natura","navy","nba","nec","netbank","netflix","network","neustar","new","newholland","news","next","nextdirect","nexus","nfl","ngo","nhk","nico","nike","nikon","ninja","nissan","nissay","nokia","northwesternmutual","norton","now","nowruz","nowtv","nra","nrw","ntt","nyc","obi","observer","off","office","okinawa","olayan","olayangroup","oldnavy","ollo","omega","one","ong","onl","online","onyourside","ooo","open","oracle","orange","organic","origins","osaka","otsuka","ott","ovh","page","panasonic","paris","pars","partners","parts","party","passagens","pay","pccw","pet","pfizer","pharmacy","phd","philips","phone","photo","photography","photos","physio","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","place","play","playstation","plumbing","plus","pnc","pohl","poker","politie","porn","pramerica","praxi","press","prime","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","pub","pwc","qpon","quebec","quest","qvc","racing","radio","raid","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","rightathome","ril","rio","rip","rmit","rocher","rocks","rodeo","rogers","room","rsvp","rugby","ruhr","run","rwe","ryukyu","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sarl","sas","save","saxo","sbi","sbs","sca","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scjohnson","scor","scot","search","seat","secure","security","seek","select","sener","services","ses","seven","sew","sex","sexy","sfr","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","showtime","shriram","silk","sina","singles","site","ski","skin","sky","skype","sling","smart","smile","sncf","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","spa","space","sport","spot","spreadbetting","srl","stada","staples","star","statebank","statefarm","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","sucks","supplies","supply","support","surf","surgery","suzuki","swatch","swiftcover","swiss","sydney","symantec","systems","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tci","tdk","team","tech","technology","telefonica","temasek","tennis","teva","thd","theater","theatre","tiaa","tickets","tienda","tiffany","tips","tires","tirol","tjmaxx","tjx","tkmaxx","tmall","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","trade","trading","training","travel","travelchannel","travelers","travelersinsurance","trust","trv","tube","tui","tunes","tushu","tvs","ubank","ubs","unicom","university","uno","uol","ups","vacations","vana","vanguard","vegas","ventures","verisign","versicherung","vet","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","vistaprint","viva","vivo","vlaanderen","vodka","volkswagen","volvo","vote","voting","voto","voyage","vuelos","wales","walmart","walter","wang","wanggou","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","wtc","wtf","xbox","xerox","xfinity","xihuan","xin","कॉम","セール","佛山","慈善","集团","在线","大众汽车","点看","คอม","八卦","موقع","公益","公司","香格里拉","网站","移动","我爱你","москва","католик","онлайн","сайт","联通","קום","时尚","微博","淡马锡","ファッション","орг","नेट","ストア","삼성","商标","商店","商城","дети","ポイント","新闻","工行","家電","كوم","中文网","中信","娱乐","谷歌","電訊盈科","购物","クラウド","通販","网店","संगठन","餐厅","网络","ком","诺基亚","食品","飞利浦","手表","手机","ارامكو","العليان","اتصالات","بازار","ابوظبي","كاثوليك","همراه","닷컴","政府","شبكة","بيتك","عرب","机构","组织机构","健康","招聘","рус","珠宝","大拿","みんな","グーグル","世界","書籍","网址","닷넷","コム","天主教","游戏","vermögensberater","vermögensberatung","企业","信息","嘉里大酒店","嘉里","广东","政务","xyz","yachts","yahoo","yamaxun","yandex","yodobashi","yoga","yokohama","you","youtube","yun","zappos","zara","zero","zip","zone","zuerich","cc.ua","inf.ua","ltd.ua","beep.pl","barsy.ca","*.compute.estate","*.alces.network","altervista.org","alwaysdata.net","cloudfront.net","*.compute.amazonaws.com","*.compute-1.amazonaws.com","*.compute.amazonaws.com.cn","us-east-1.amazonaws.com","cn-north-1.eb.amazonaws.com.cn","cn-northwest-1.eb.amazonaws.com.cn","elasticbeanstalk.com","ap-northeast-1.elasticbeanstalk.com","ap-northeast-2.elasticbeanstalk.com","ap-northeast-3.elasticbeanstalk.com","ap-south-1.elasticbeanstalk.com","ap-southeast-1.elasticbeanstalk.com","ap-southeast-2.elasticbeanstalk.com","ca-central-1.elasticbeanstalk.com","eu-central-1.elasticbeanstalk.com","eu-west-1.elasticbeanstalk.com","eu-west-2.elasticbeanstalk.com","eu-west-3.elasticbeanstalk.com","sa-east-1.elasticbeanstalk.com","us-east-1.elasticbeanstalk.com","us-east-2.elasticbeanstalk.com","us-gov-west-1.elasticbeanstalk.com","us-west-1.elasticbeanstalk.com","us-west-2.elasticbeanstalk.com","*.elb.amazonaws.com","*.elb.amazonaws.com.cn","s3.amazonaws.com","s3-ap-northeast-1.amazonaws.com","s3-ap-northeast-2.amazonaws.com","s3-ap-south-1.amazonaws.com","s3-ap-southeast-1.amazonaws.com","s3-ap-southeast-2.amazonaws.com","s3-ca-central-1.amazonaws.com","s3-eu-central-1.amazonaws.com","s3-eu-west-1.amazonaws.com","s3-eu-west-2.amazonaws.com","s3-eu-west-3.amazonaws.com","s3-external-1.amazonaws.com","s3-fips-us-gov-west-1.amazonaws.com","s3-sa-east-1.amazonaws.com","s3-us-gov-west-1.amazonaws.com","s3-us-east-2.amazonaws.com","s3-us-west-1.amazonaws.com","s3-us-west-2.amazonaws.com","s3.ap-northeast-2.amazonaws.com","s3.ap-south-1.amazonaws.com","s3.cn-north-1.amazonaws.com.cn","s3.ca-central-1.amazonaws.com","s3.eu-central-1.amazonaws.com","s3.eu-west-2.amazonaws.com","s3.eu-west-3.amazonaws.com","s3.us-east-2.amazonaws.com","s3.dualstack.ap-northeast-1.amazonaws.com","s3.dualstack.ap-northeast-2.amazonaws.com","s3.dualstack.ap-south-1.amazonaws.com","s3.dualstack.ap-southeast-1.amazonaws.com","s3.dualstack.ap-southeast-2.amazonaws.com","s3.dualstack.ca-central-1.amazonaws.com","s3.dualstack.eu-central-1.amazonaws.com","s3.dualstack.eu-west-1.amazonaws.com","s3.dualstack.eu-west-2.amazonaws.com","s3.dualstack.eu-west-3.amazonaws.com","s3.dualstack.sa-east-1.amazonaws.com","s3.dualstack.us-east-1.amazonaws.com","s3.dualstack.us-east-2.amazonaws.com","s3-website-us-east-1.amazonaws.com","s3-website-us-west-1.amazonaws.com","s3-website-us-west-2.amazonaws.com","s3-website-ap-northeast-1.amazonaws.com","s3-website-ap-southeast-1.amazonaws.com","s3-website-ap-southeast-2.amazonaws.com","s3-website-eu-west-1.amazonaws.com","s3-website-sa-east-1.amazonaws.com","s3-website.ap-northeast-2.amazonaws.com","s3-website.ap-south-1.amazonaws.com","s3-website.ca-central-1.amazonaws.com","s3-website.eu-central-1.amazonaws.com","s3-website.eu-west-2.amazonaws.com","s3-website.eu-west-3.amazonaws.com","s3-website.us-east-2.amazonaws.com","amsw.nl","t3l3p0rt.net","tele.amune.org","apigee.io","on-aptible.com","user.aseinet.ne.jp","gv.vc","d.gv.vc","user.party.eus","pimienta.org","poivron.org","potager.org","sweetpepper.org","myasustor.com","myfritz.net","*.awdev.ca","*.advisor.ws","b-data.io","backplaneapp.io","balena-devices.com","app.banzaicloud.io","betainabox.com","bnr.la","blackbaudcdn.net","boomla.net","boxfuse.io","square7.ch","bplaced.com","bplaced.de","square7.de","bplaced.net","square7.net","browsersafetymark.io","uk0.bigv.io","dh.bytemark.co.uk","vm.bytemark.co.uk","mycd.eu","carrd.co","crd.co","uwu.ai","ae.org","ar.com","br.com","cn.com","com.de","com.se","de.com","eu.com","gb.com","gb.net","hu.com","hu.net","jp.net","jpn.com","kr.com","mex.com","no.com","qc.com","ru.com","sa.com","se.net","uk.com","uk.net","us.com","uy.com","za.bz","za.com","africa.com","gr.com","in.net","us.org","co.com","c.la","certmgr.org","xenapponazure.com","discourse.group","virtueeldomein.nl","cleverapps.io","*.lcl.dev","*.stg.dev","c66.me","cloud66.ws","cloud66.zone","jdevcloud.com","wpdevcloud.com","cloudaccess.host","freesite.host","cloudaccess.net","cloudcontrolled.com","cloudcontrolapp.com","cloudera.site","trycloudflare.com","workers.dev","wnext.app","co.ca","*.otap.co","co.cz","c.cdn77.org","cdn77-ssl.net","r.cdn77.net","rsc.cdn77.org","ssl.origin.cdn77-secure.org","cloudns.asia","cloudns.biz","cloudns.club","cloudns.cc","cloudns.eu","cloudns.in","cloudns.info","cloudns.org","cloudns.pro","cloudns.pw","cloudns.us","cloudeity.net","cnpy.gdn","co.nl","co.no","webhosting.be","hosting-cluster.nl","ac.ru","edu.ru","gov.ru","int.ru","mil.ru","test.ru","dyn.cosidns.de","dynamisches-dns.de","dnsupdater.de","internet-dns.de","l-o-g-i-n.de","dynamic-dns.info","feste-ip.net","knx-server.net","static-access.net","realm.cz","*.cryptonomic.net","cupcake.is","*.customer-oci.com","*.oci.customer-oci.com","*.ocp.customer-oci.com","*.ocs.customer-oci.com","cyon.link","cyon.site","daplie.me","localhost.daplie.me","dattolocal.com","dattorelay.com","dattoweb.com","mydatto.com","dattolocal.net","mydatto.net","biz.dk","co.dk","firm.dk","reg.dk","store.dk","*.dapps.earth","*.bzz.dapps.earth","builtwithdark.com","edgestack.me","debian.net","dedyn.io","dnshome.de","online.th","shop.th","drayddns.com","dreamhosters.com","mydrobo.com","drud.io","drud.us","duckdns.org","dy.fi","tunk.org","dyndns-at-home.com","dyndns-at-work.com","dyndns-blog.com","dyndns-free.com","dyndns-home.com","dyndns-ip.com","dyndns-mail.com","dyndns-office.com","dyndns-pics.com","dyndns-remote.com","dyndns-server.com","dyndns-web.com","dyndns-wiki.com","dyndns-work.com","dyndns.biz","dyndns.info","dyndns.org","dyndns.tv","at-band-camp.net","ath.cx","barrel-of-knowledge.info","barrell-of-knowledge.info","better-than.tv","blogdns.com","blogdns.net","blogdns.org","blogsite.org","boldlygoingnowhere.org","broke-it.net","buyshouses.net","cechire.com","dnsalias.com","dnsalias.net","dnsalias.org","dnsdojo.com","dnsdojo.net","dnsdojo.org","does-it.net","doesntexist.com","doesntexist.org","dontexist.com","dontexist.net","dontexist.org","doomdns.com","doomdns.org","dvrdns.org","dyn-o-saur.com","dynalias.com","dynalias.net","dynalias.org","dynathome.net","dyndns.ws","endofinternet.net","endofinternet.org","endoftheinternet.org","est-a-la-maison.com","est-a-la-masion.com","est-le-patron.com","est-mon-blogueur.com","for-better.biz","for-more.biz","for-our.info","for-some.biz","for-the.biz","forgot.her.name","forgot.his.name","from-ak.com","from-al.com","from-ar.com","from-az.net","from-ca.com","from-co.net","from-ct.com","from-dc.com","from-de.com","from-fl.com","from-ga.com","from-hi.com","from-ia.com","from-id.com","from-il.com","from-in.com","from-ks.com","from-ky.com","from-la.net","from-ma.com","from-md.com","from-me.org","from-mi.com","from-mn.com","from-mo.com","from-ms.com","from-mt.com","from-nc.com","from-nd.com","from-ne.com","from-nh.com","from-nj.com","from-nm.com","from-nv.com","from-ny.net","from-oh.com","from-ok.com","from-or.com","from-pa.com","from-pr.com","from-ri.com","from-sc.com","from-sd.com","from-tn.com","from-tx.com","from-ut.com","from-va.com","from-vt.com","from-wa.com","from-wi.com","from-wv.com","from-wy.com","ftpaccess.cc","fuettertdasnetz.de","game-host.org","game-server.cc","getmyip.com","gets-it.net","go.dyndns.org","gotdns.com","gotdns.org","groks-the.info","groks-this.info","ham-radio-op.net","here-for-more.info","hobby-site.com","hobby-site.org","home.dyndns.org","homedns.org","homeftp.net","homeftp.org","homeip.net","homelinux.com","homelinux.net","homelinux.org","homeunix.com","homeunix.net","homeunix.org","iamallama.com","in-the-band.net","is-a-anarchist.com","is-a-blogger.com","is-a-bookkeeper.com","is-a-bruinsfan.org","is-a-bulls-fan.com","is-a-candidate.org","is-a-caterer.com","is-a-celticsfan.org","is-a-chef.com","is-a-chef.net","is-a-chef.org","is-a-conservative.com","is-a-cpa.com","is-a-cubicle-slave.com","is-a-democrat.com","is-a-designer.com","is-a-doctor.com","is-a-financialadvisor.com","is-a-geek.com","is-a-geek.net","is-a-geek.org","is-a-green.com","is-a-guru.com","is-a-hard-worker.com","is-a-hunter.com","is-a-knight.org","is-a-landscaper.com","is-a-lawyer.com","is-a-liberal.com","is-a-libertarian.com","is-a-linux-user.org","is-a-llama.com","is-a-musician.com","is-a-nascarfan.com","is-a-nurse.com","is-a-painter.com","is-a-patsfan.org","is-a-personaltrainer.com","is-a-photographer.com","is-a-player.com","is-a-republican.com","is-a-rockstar.com","is-a-socialist.com","is-a-soxfan.org","is-a-student.com","is-a-teacher.com","is-a-techie.com","is-a-therapist.com","is-an-accountant.com","is-an-actor.com","is-an-actress.com","is-an-anarchist.com","is-an-artist.com","is-an-engineer.com","is-an-entertainer.com","is-by.us","is-certified.com","is-found.org","is-gone.com","is-into-anime.com","is-into-cars.com","is-into-cartoons.com","is-into-games.com","is-leet.com","is-lost.org","is-not-certified.com","is-saved.org","is-slick.com","is-uberleet.com","is-very-bad.org","is-very-evil.org","is-very-good.org","is-very-nice.org","is-very-sweet.org","is-with-theband.com","isa-geek.com","isa-geek.net","isa-geek.org","isa-hockeynut.com","issmarterthanyou.com","isteingeek.de","istmein.de","kicks-ass.net","kicks-ass.org","knowsitall.info","land-4-sale.us","lebtimnetz.de","leitungsen.de","likes-pie.com","likescandy.com","merseine.nu","mine.nu","misconfused.org","mypets.ws","myphotos.cc","neat-url.com","office-on-the.net","on-the-web.tv","podzone.net","podzone.org","readmyblog.org","saves-the-whales.com","scrapper-site.net","scrapping.cc","selfip.biz","selfip.com","selfip.info","selfip.net","selfip.org","sells-for-less.com","sells-for-u.com","sells-it.net","sellsyourhome.org","servebbs.com","servebbs.net","servebbs.org","serveftp.net","serveftp.org","servegame.org","shacknet.nu","simple-url.com","space-to-rent.com","stuff-4-sale.org","stuff-4-sale.us","teaches-yoga.com","thruhere.net","traeumtgerade.de","webhop.biz","webhop.info","webhop.net","webhop.org","worse-than.tv","writesthisblog.com","ddnss.de","dyn.ddnss.de","dyndns.ddnss.de","dyndns1.de","dyn-ip24.de","home-webserver.de","dyn.home-webserver.de","myhome-server.de","ddnss.org","definima.net","definima.io","bci.dnstrace.pro","ddnsfree.com","ddnsgeek.com","giize.com","gleeze.com","kozow.com","loseyourip.com","ooguy.com","theworkpc.com","casacam.net","dynu.net","accesscam.org","camdvr.org","freeddns.org","mywire.org","webredirect.org","myddns.rocks","blogsite.xyz","dynv6.net","e4.cz","en-root.fr","mytuleap.com","onred.one","staging.onred.one","enonic.io","customer.enonic.io","eu.org","al.eu.org","asso.eu.org","at.eu.org","au.eu.org","be.eu.org","bg.eu.org","ca.eu.org","cd.eu.org","ch.eu.org","cn.eu.org","cy.eu.org","cz.eu.org","de.eu.org","dk.eu.org","edu.eu.org","ee.eu.org","es.eu.org","fi.eu.org","fr.eu.org","gr.eu.org","hr.eu.org","hu.eu.org","ie.eu.org","il.eu.org","in.eu.org","int.eu.org","is.eu.org","it.eu.org","jp.eu.org","kr.eu.org","lt.eu.org","lu.eu.org","lv.eu.org","mc.eu.org","me.eu.org","mk.eu.org","mt.eu.org","my.eu.org","net.eu.org","ng.eu.org","nl.eu.org","no.eu.org","nz.eu.org","paris.eu.org","pl.eu.org","pt.eu.org","q-a.eu.org","ro.eu.org","ru.eu.org","se.eu.org","si.eu.org","sk.eu.org","tr.eu.org","uk.eu.org","us.eu.org","eu-1.evennode.com","eu-2.evennode.com","eu-3.evennode.com","eu-4.evennode.com","us-1.evennode.com","us-2.evennode.com","us-3.evennode.com","us-4.evennode.com","twmail.cc","twmail.net","twmail.org","mymailer.com.tw","url.tw","apps.fbsbx.com","ru.net","adygeya.ru","bashkiria.ru","bir.ru","cbg.ru","com.ru","dagestan.ru","grozny.ru","kalmykia.ru","kustanai.ru","marine.ru","mordovia.ru","msk.ru","mytis.ru","nalchik.ru","nov.ru","pyatigorsk.ru","spb.ru","vladikavkaz.ru","vladimir.ru","abkhazia.su","adygeya.su","aktyubinsk.su","arkhangelsk.su","armenia.su","ashgabad.su","azerbaijan.su","balashov.su","bashkiria.su","bryansk.su","bukhara.su","chimkent.su","dagestan.su","east-kazakhstan.su","exnet.su","georgia.su","grozny.su","ivanovo.su","jambyl.su","kalmykia.su","kaluga.su","karacol.su","karaganda.su","karelia.su","khakassia.su","krasnodar.su","kurgan.su","kustanai.su","lenug.su","mangyshlak.su","mordovia.su","msk.su","murmansk.su","nalchik.su","navoi.su","north-kazakhstan.su","nov.su","obninsk.su","penza.su","pokrovsk.su","sochi.su","spb.su","tashkent.su","termez.su","togliatti.su","troitsk.su","tselinograd.su","tula.su","tuva.su","vladikavkaz.su","vladimir.su","vologda.su","channelsdvr.net","fastly-terrarium.com","fastlylb.net","map.fastlylb.net","freetls.fastly.net","map.fastly.net","a.prod.fastly.net","global.prod.fastly.net","a.ssl.fastly.net","b.ssl.fastly.net","global.ssl.fastly.net","fastpanel.direct","fastvps-server.com","fhapp.xyz","fedorainfracloud.org","fedorapeople.org","cloud.fedoraproject.org","app.os.fedoraproject.org","app.os.stg.fedoraproject.org","mydobiss.com","filegear.me","filegear-au.me","filegear-de.me","filegear-gb.me","filegear-ie.me","filegear-jp.me","filegear-sg.me","firebaseapp.com","flynnhub.com","flynnhosting.net","0e.vc","freebox-os.com","freeboxos.com","fbx-os.fr","fbxos.fr","freebox-os.fr","freeboxos.fr","freedesktop.org","*.futurecms.at","*.ex.futurecms.at","*.in.futurecms.at","futurehosting.at","futuremailing.at","*.ex.ortsinfo.at","*.kunden.ortsinfo.at","*.statics.cloud","service.gov.uk","gehirn.ne.jp","usercontent.jp","gentapps.com","lab.ms","github.io","githubusercontent.com","gitlab.io","glitch.me","lolipop.io","cloudapps.digital","london.cloudapps.digital","homeoffice.gov.uk","ro.im","shop.ro","goip.de","run.app","a.run.app","web.app","*.0emm.com","appspot.com","*.r.appspot.com","blogspot.ae","blogspot.al","blogspot.am","blogspot.ba","blogspot.be","blogspot.bg","blogspot.bj","blogspot.ca","blogspot.cf","blogspot.ch","blogspot.cl","blogspot.co.at","blogspot.co.id","blogspot.co.il","blogspot.co.ke","blogspot.co.nz","blogspot.co.uk","blogspot.co.za","blogspot.com","blogspot.com.ar","blogspot.com.au","blogspot.com.br","blogspot.com.by","blogspot.com.co","blogspot.com.cy","blogspot.com.ee","blogspot.com.eg","blogspot.com.es","blogspot.com.mt","blogspot.com.ng","blogspot.com.tr","blogspot.com.uy","blogspot.cv","blogspot.cz","blogspot.de","blogspot.dk","blogspot.fi","blogspot.fr","blogspot.gr","blogspot.hk","blogspot.hr","blogspot.hu","blogspot.ie","blogspot.in","blogspot.is","blogspot.it","blogspot.jp","blogspot.kr","blogspot.li","blogspot.lt","blogspot.lu","blogspot.md","blogspot.mk","blogspot.mr","blogspot.mx","blogspot.my","blogspot.nl","blogspot.no","blogspot.pe","blogspot.pt","blogspot.qa","blogspot.re","blogspot.ro","blogspot.rs","blogspot.ru","blogspot.se","blogspot.sg","blogspot.si","blogspot.sk","blogspot.sn","blogspot.td","blogspot.tw","blogspot.ug","blogspot.vn","cloudfunctions.net","cloud.goog","codespot.com","googleapis.com","googlecode.com","pagespeedmobilizer.com","publishproxy.com","withgoogle.com","withyoutube.com","awsmppl.com","fin.ci","free.hr","caa.li","ua.rs","conf.se","hs.zone","hs.run","hashbang.sh","hasura.app","hasura-app.io","hepforge.org","herokuapp.com","herokussl.com","myravendb.com","ravendb.community","ravendb.me","development.run","ravendb.run","bpl.biz","orx.biz","ng.city","biz.gl","ng.ink","col.ng","firm.ng","gen.ng","ltd.ng","ngo.ng","ng.school","sch.so","häkkinen.fi","*.moonscale.io","moonscale.net","iki.fi","dyn-berlin.de","in-berlin.de","in-brb.de","in-butter.de","in-dsl.de","in-dsl.net","in-dsl.org","in-vpn.de","in-vpn.net","in-vpn.org","biz.at","info.at","info.cx","ac.leg.br","al.leg.br","am.leg.br","ap.leg.br","ba.leg.br","ce.leg.br","df.leg.br","es.leg.br","go.leg.br","ma.leg.br","mg.leg.br","ms.leg.br","mt.leg.br","pa.leg.br","pb.leg.br","pe.leg.br","pi.leg.br","pr.leg.br","rj.leg.br","rn.leg.br","ro.leg.br","rr.leg.br","rs.leg.br","sc.leg.br","se.leg.br","sp.leg.br","to.leg.br","pixolino.com","ipifony.net","mein-iserv.de","test-iserv.de","iserv.dev","iobb.net","myjino.ru","*.hosting.myjino.ru","*.landing.myjino.ru","*.spectrum.myjino.ru","*.vps.myjino.ru","*.triton.zone","*.cns.joyent.com","js.org","kaas.gg","khplay.nl","keymachine.de","kinghost.net","uni5.net","knightpoint.systems","oya.to","co.krd","edu.krd","git-repos.de","lcube-server.de","svn-repos.de","leadpages.co","lpages.co","lpusercontent.com","lelux.site","co.business","co.education","co.events","co.financial","co.network","co.place","co.technology","app.lmpm.com","linkitools.space","linkyard.cloud","linkyard-cloud.ch","members.linode.com","nodebalancer.linode.com","we.bs","loginline.app","loginline.dev","loginline.io","loginline.services","loginline.site","krasnik.pl","leczna.pl","lubartow.pl","lublin.pl","poniatowa.pl","swidnik.pl","uklugs.org","glug.org.uk","lug.org.uk","lugs.org.uk","barsy.bg","barsy.co.uk","barsyonline.co.uk","barsycenter.com","barsyonline.com","barsy.club","barsy.de","barsy.eu","barsy.in","barsy.info","barsy.io","barsy.me","barsy.menu","barsy.mobi","barsy.net","barsy.online","barsy.org","barsy.pro","barsy.pub","barsy.shop","barsy.site","barsy.support","barsy.uk","*.magentosite.cloud","mayfirst.info","mayfirst.org","hb.cldmail.ru","miniserver.com","memset.net","cloud.metacentrum.cz","custom.metacentrum.cz","flt.cloud.muni.cz","usr.cloud.muni.cz","meteorapp.com","eu.meteorapp.com","co.pl","azurecontainer.io","azurewebsites.net","azure-mobile.net","cloudapp.net","mozilla-iot.org","bmoattachments.org","net.ru","org.ru","pp.ru","ui.nabu.casa","pony.club","of.fashion","on.fashion","of.football","in.london","of.london","for.men","and.mom","for.mom","for.one","for.sale","of.work","to.work","nctu.me","bitballoon.com","netlify.com","4u.com","ngrok.io","nh-serv.co.uk","nfshost.com","dnsking.ch","mypi.co","n4t.co","001www.com","ddnslive.com","myiphost.com","forumz.info","16-b.it","32-b.it","64-b.it","soundcast.me","tcp4.me","dnsup.net","hicam.net","now-dns.net","ownip.net","vpndns.net","dynserv.org","now-dns.org","x443.pw","now-dns.top","ntdll.top","freeddns.us","crafting.xyz","zapto.xyz","nsupdate.info","nerdpol.ovh","blogsyte.com","brasilia.me","cable-modem.org","ciscofreak.com","collegefan.org","couchpotatofries.org","damnserver.com","ddns.me","ditchyourip.com","dnsfor.me","dnsiskinky.com","dvrcam.info","dynns.com","eating-organic.net","fantasyleague.cc","geekgalaxy.com","golffan.us","health-carereform.com","homesecuritymac.com","homesecuritypc.com","hopto.me","ilovecollege.info","loginto.me","mlbfan.org","mmafan.biz","myactivedirectory.com","mydissent.net","myeffect.net","mymediapc.net","mypsx.net","mysecuritycamera.com","mysecuritycamera.net","mysecuritycamera.org","net-freaks.com","nflfan.org","nhlfan.net","no-ip.ca","no-ip.co.uk","no-ip.net","noip.us","onthewifi.com","pgafan.net","point2this.com","pointto.us","privatizehealthinsurance.net","quicksytes.com","read-books.org","securitytactics.com","serveexchange.com","servehumour.com","servep2p.com","servesarcasm.com","stufftoread.com","ufcfan.org","unusualperson.com","workisboring.com","3utilities.com","bounceme.net","ddns.net","ddnsking.com","gotdns.ch","hopto.org","myftp.biz","myftp.org","myvnc.com","no-ip.biz","no-ip.info","no-ip.org","noip.me","redirectme.net","servebeer.com","serveblog.net","servecounterstrike.com","serveftp.com","servegame.com","servehalflife.com","servehttp.com","serveirc.com","serveminecraft.net","servemp3.com","servepics.com","servequake.com","sytes.net","webhop.me","zapto.org","stage.nodeart.io","nodum.co","nodum.io","pcloud.host","nyc.mn","nom.ae","nom.af","nom.ai","nom.al","nym.by","nym.bz","nom.cl","nym.ec","nom.gd","nom.ge","nom.gl","nym.gr","nom.gt","nym.gy","nym.hk","nom.hn","nym.ie","nom.im","nom.ke","nym.kz","nym.la","nym.lc","nom.li","nym.li","nym.lt","nym.lu","nym.me","nom.mk","nym.mn","nym.mx","nom.nu","nym.nz","nym.pe","nym.pt","nom.pw","nom.qa","nym.ro","nom.rs","nom.si","nym.sk","nom.st","nym.su","nym.sx","nom.tj","nym.tw","nom.ug","nom.uy","nom.vc","nom.vg","cya.gg","cloudycluster.net","nid.io","opencraft.hosting","operaunite.com","skygearapp.com","outsystemscloud.com","ownprovider.com","own.pm","ox.rs","oy.lc","pgfog.com","pagefrontapp.com","art.pl","gliwice.pl","krakow.pl","poznan.pl","wroc.pl","zakopane.pl","pantheonsite.io","gotpantheon.com","mypep.link","perspecta.cloud","on-web.fr","*.platform.sh","*.platformsh.site","dyn53.io","co.bn","xen.prgmr.com","priv.at","prvcy.page","*.dweb.link","protonet.io","chirurgiens-dentistes-en-france.fr","byen.site","pubtls.org","qualifioapp.com","instantcloud.cn","ras.ru","qa2.com","qcx.io","*.sys.qcx.io","dev-myqnapcloud.com","alpha-myqnapcloud.com","myqnapcloud.com","*.quipelements.com","vapor.cloud","vaporcloud.io","rackmaze.com","rackmaze.net","*.on-k3s.io","*.on-rancher.cloud","*.on-rio.io","readthedocs.io","rhcloud.com","app.render.com","onrender.com","repl.co","repl.run","resindevice.io","devices.resinstaging.io","hzc.io","wellbeingzone.eu","ptplus.fit","wellbeingzone.co.uk","git-pages.rit.edu","sandcats.io","logoip.de","logoip.com","schokokeks.net","gov.scot","scrysec.com","firewall-gateway.com","firewall-gateway.de","my-gateway.de","my-router.de","spdns.de","spdns.eu","firewall-gateway.net","my-firewall.org","myfirewall.org","spdns.org","biz.ua","co.ua","pp.ua","shiftedit.io","myshopblocks.com","shopitsite.com","mo-siemens.io","1kapp.com","appchizi.com","applinzi.com","sinaapp.com","vipsinaapp.com","siteleaf.net","bounty-full.com","alpha.bounty-full.com","beta.bounty-full.com","stackhero-network.com","static.land","dev.static.land","sites.static.land","apps.lair.io","*.stolos.io","spacekit.io","customer.speedpartner.de","api.stdlib.com","storj.farm","utwente.io","soc.srcf.net","user.srcf.net","temp-dns.com","applicationcloud.io","scapp.io","*.s5y.io","*.sensiosite.cloud","syncloud.it","diskstation.me","dscloud.biz","dscloud.me","dscloud.mobi","dsmynas.com","dsmynas.net","dsmynas.org","familyds.com","familyds.net","familyds.org","i234.me","myds.me","synology.me","vpnplus.to","direct.quickconnect.to","taifun-dns.de","gda.pl","gdansk.pl","gdynia.pl","med.pl","sopot.pl","edugit.org","telebit.app","telebit.io","*.telebit.xyz","gwiddle.co.uk","thingdustdata.com","cust.dev.thingdust.io","cust.disrec.thingdust.io","cust.prod.thingdust.io","cust.testing.thingdust.io","arvo.network","azimuth.network","bloxcms.com","townnews-staging.com","12hp.at","2ix.at","4lima.at","lima-city.at","12hp.ch","2ix.ch","4lima.ch","lima-city.ch","trafficplex.cloud","de.cool","12hp.de","2ix.de","4lima.de","lima-city.de","1337.pictures","clan.rip","lima-city.rocks","webspace.rocks","lima.zone","*.transurl.be","*.transurl.eu","*.transurl.nl","tuxfamily.org","dd-dns.de","diskstation.eu","diskstation.org","dray-dns.de","draydns.de","dyn-vpn.de","dynvpn.de","mein-vigor.de","my-vigor.de","my-wan.de","syno-ds.de","synology-diskstation.de","synology-ds.de","uber.space","*.uberspace.de","hk.com","hk.org","ltd.hk","inc.hk","virtualuser.de","virtual-user.de","lib.de.us","2038.io","router.management","v-info.info","voorloper.cloud","wafflecell.com","*.webhare.dev","wedeploy.io","wedeploy.me","wedeploy.sh","remotewd.com","wmflabs.org","half.host","xnbay.com","u2.xnbay.com","u2-local.xnbay.com","cistron.nl","demon.nl","xs4all.space","yandexcloud.net","storage.yandexcloud.net","website.yandexcloud.net","official.academy","yolasite.com","ybo.faith","yombo.me","homelink.one","ybo.party","ybo.review","ybo.science","ybo.trade","nohost.me","noho.st","za.net","za.org","now.sh","bss.design","basicserver.io","virtualserver.io","site.builder.nu","enterprisecloud.nu"]
},function(e,t,i){
"use strict"
var a,o="object"==typeof Reflect?Reflect:null,r=o&&"function"==typeof o.apply?o.apply:function(e,t,i){
return Function.prototype.apply.call(e,t,i)
}
a=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){
return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
}:function(e){
return Object.getOwnPropertyNames(e)
}
var n=Number.isNaN||function(e){
return e!=e
}
function s(){
s.init.call(this)
}
e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,
s.prototype._maxListeners=void 0
var l=10
function c(e){
return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners
}
function u(e,t,i,a){
var o,r,n
if("function"!=typeof i){
throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i)
}
if(void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),
r=e._events),
n=r[t]),void 0===n){
n=r[t]=i,++e._eventsCount
}else if("function"==typeof n?n=r[t]=a?[i,n]:[n,i]:a?n.unshift(i):n.push(i),
(o=c(e))>0&&n.length>o&&!n.warned){
n.warned=!0
var s=new Error("Possible EventEmitter memory leak detected. "+n.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit")
s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=n.length,console&&console.warn
}
return e
}
function p(){
for(var e=[],t=0;t<arguments.length;t++){
e.push(arguments[t])
}
this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,r(this.listener,this.target,e))
}
function d(e,t,i){
var a={
fired:!1,
wrapFn:void 0,
target:e,
type:t,
listener:i
},o=p.bind(a)
return o.listener=i,a.wrapFn=o,o
}
function g(e,t,i){
var a=e._events
if(void 0===a){
return[]
}
var o=a[t]
return void 0===o?[]:"function"==typeof o?i?[o.listener||o]:[o]:i?function(e){
for(var t=new Array(e.length),i=0;i<t.length;++i){
t[i]=e[i].listener||e[i]
}
return t
}(o):h(o,o.length)
}
function m(e){
var t=this._events
if(void 0!==t){
var i=t[e]
if("function"==typeof i){
return 1
}
if(void 0!==i){
return i.length
}
}
return 0
}
function h(e,t){
for(var i=new Array(t),a=0;a<t;++a){
i[a]=e[a]
}
return i
}
Object.defineProperty(s,"defaultMaxListeners",{
enumerable:!0,
get:function(){
return l
},
set:function(e){
if("number"!=typeof e||e<0||n(e)){
throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".")
}
l=e
}
}),s.init=function(){
void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),
this._eventsCount=0),
this._maxListeners=this._maxListeners||void 0
},s.prototype.setMaxListeners=function(e){
if("number"!=typeof e||e<0||n(e)){
throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".")
}
return this._maxListeners=e,this
},s.prototype.getMaxListeners=function(){
return c(this)
},s.prototype.emit=function(e){
for(var t=[],i=1;i<arguments.length;i++){
t.push(arguments[i])
}
var a="error"===e,o=this._events
if(void 0!==o){
a=a&&void 0===o.error
}else if(!a){
return!1
}
if(a){
var n
if(t.length>0&&(n=t[0]),n instanceof Error){
throw n
}
var s=new Error("Unhandled error."+(n?" ("+n.message+")":""))
throw s.context=n,s
}
var l=o[e]
if(void 0===l){
return!1
}
if("function"==typeof l){
r(l,this,t)
}else{
var c=l.length,u=h(l,c)
for(i=0;i<c;++i){
r(u[i],this,t)
}
}
return!0
},s.prototype.addListener=function(e,t){
return u(this,e,t,!1)
},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){
return u(this,e,t,!0)
},s.prototype.once=function(e,t){
if("function"!=typeof t){
throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)
}
return this.on(e,d(this,e,t)),this
},s.prototype.prependOnceListener=function(e,t){
if("function"!=typeof t){
throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)
}
return this.prependListener(e,d(this,e,t)),this
},s.prototype.removeListener=function(e,t){
var i,a,o,r,n
if("function"!=typeof t){
throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)
}
if(void 0===(a=this._events)){
return this
}
if(void 0===(i=a[e])){
return this
}
if(i===t||i.listener===t){
0==--this._eventsCount?this._events=Object.create(null):(delete a[e],
a.removeListener&&this.emit("removeListener",e,i.listener||t))
}else if("function"!=typeof i){
for(o=-1,r=i.length-1;r>=0;r--){
if(i[r]===t||i[r].listener===t){
n=i[r].listener,o=r
break
}
}
if(o<0){
return this
}
0===o?i.shift():function(e,t){
for(;t+1<e.length;t++){
e[t]=e[t+1]
}
e.pop()
}(i,o),1===i.length&&(a[e]=i[0]),void 0!==a.removeListener&&this.emit("removeListener",e,n||t)
}
return this
},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){
var t,i,a
if(void 0===(i=this._events)){
return this
}
if(void 0===i.removeListener){
return 0===arguments.length?(this._events=Object.create(null),
this._eventsCount=0):void 0!==i[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[e]),
this
}
if(0===arguments.length){
var o,r=Object.keys(i)
for(a=0;a<r.length;++a){
"removeListener"!==(o=r[a])&&this.removeAllListeners(o)
}
return this.removeAllListeners("removeListener"),this._events=Object.create(null),
this._eventsCount=0,
this
}
if("function"==typeof(t=i[e])){
this.removeListener(e,t)
}else if(void 0!==t){
for(a=t.length-1;a>=0;a--){
this.removeListener(e,t[a])
}
}
return this
},s.prototype.listeners=function(e){
return g(this,e,!0)
},s.prototype.rawListeners=function(e){
return g(this,e,!1)
},s.listenerCount=function(e,t){
return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)
},s.prototype.listenerCount=m,
s.prototype.eventNames=function(){
return this._eventsCount>0?a(this._events):[]
}
},function(e,t,i){
var a
!function(o,r){
"use strict"
var n="model",s="name",l="type",c="vendor",u="version",p="mobile",d="tablet",g={
extend:function(e,t){
var i={}
for(var a in e){
t[a]&&t[a].length%2==0?i[a]=t[a].concat(e[a]):i[a]=e[a]
}
return i
},
has:function(e,t){
return"string"==typeof e&&-1!==t.toLowerCase().indexOf(e.toLowerCase())
},
lowerize:function(e){
return e.toLowerCase()
},
major:function(e){
return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0
},
trim:function(e){
return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")
}
},m={
rgx:function(e,t){
for(var i,a,o,r,n,s,l=0;l<t.length&&!n;){
var c=t[l],u=t[l+1]
for(i=a=0;i<c.length&&!n;){
if(n=c[i++].exec(e)){
for(o=0;o<u.length;o++){
s=n[++a],"object"==typeof(r=u[o])&&r.length>0?2==r.length?"function"==typeof r[1]?this[r[0]]=r[1].call(this,s):this[r[0]]=r[1]:3==r.length?"function"!=typeof r[1]||r[1].exec&&r[1].test?this[r[0]]=s?s.replace(r[1],r[2]):void 0:this[r[0]]=s?r[1].call(this,s,r[2]):void 0:4==r.length&&(this[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):void 0):this[r]=s||void 0
}
}
}
l+=2
}
},
str:function(e,t){
for(var i in t){
if("object"==typeof t[i]&&t[i].length>0){
for(var a=0;a<t[i].length;a++){
if(g.has(t[i][a],e)){
return"?"===i?void 0:i
}
}
}else if(g.has(t[i],e)){
return"?"===i?void 0:i
}
}
return e
}
},h={
browser:{
oldsafari:{
version:{
"1.0":"/8",
1.2:"/1",
1.3:"/3",
"2.0":"/412",
"2.0.2":"/416",
"2.0.3":"/417",
"2.0.4":"/419",
"?":"/"
}
}
},
device:{
amazon:{
model:{
"Fire Phone":["SD","KF"]
}
},
sprint:{
model:{
"Evo Shift 4G":"7373KT"
},
vendor:{
HTC:"APA",
Sprint:"Sprint"
}
}
},
os:{
windows:{
version:{
ME:"4.90",
"NT 3.11":"NT3.51",
"NT 4.0":"NT4.0",
2e3:"NT 5.0",
XP:["NT 5.1","NT 5.2"],
Vista:"NT 6.0",
7:"NT 6.1",
8:"NT 6.2",
8.1:"NT 6.3",
10:["NT 6.4","NT 10.0"],
RT:"ARM"
}
}
}
},k={
browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[s,u],[/(opios)[\/\s]+([\w\.]+)/i],[[s,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[s,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[s,u],[/(konqueror)\/([\w\.]+)/i],[[s,"Konqueror"],u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[s,"IE"],u],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[s,"Edge"],u],[/(yabrowser)\/([\w\.]+)/i],[[s,"Yandex"],u],[/(puffin)\/([\w\.]+)/i],[[s,"Puffin"],u],[/(focus)\/([\w\.]+)/i],[[s,"Firefox Focus"],u],[/(opt)\/([\w\.]+)/i],[[s,"Opera Touch"],u],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[s,"UCBrowser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[s,/_/g," "],u],[/(windowswechat qbcore)\/([\w\.]+)/i],[[s,"WeChat(Win) Desktop"],u],[/(micromessenger)\/([\w\.]+)/i],[[s,"WeChat"],u],[/(brave)\/([\w\.]+)/i],[[s,"Brave"],u],[/(qqbrowserlite)\/([\w\.]+)/i],[s,u],[/(QQ)\/([\d\.]+)/i],[s,u],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[s,u],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[s,u],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[s,u],[/(MetaSr)[\/\s]?([\w\.]+)/i],[s],[/(LBBROWSER)/i],[s],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[s,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[u,[s,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[s,u],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[s,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[s,/(.+)/,"$1 WebView"],u],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[s,/(.+(?:g|us))(.+)/,"$1 $2"],u],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[u,[s,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[s,"Sailfish Browser"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[s,u],[/(dolfin)\/([\w\.]+)/i],[[s,"Dolphin"],u],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[s,"Chrome"],u],[/(coast)\/([\w\.]+)/i],[[s,"Opera Coast"],u],[/fxios\/([\w\.-]+)/i],[u,[s,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[s,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,s],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[s,"GSA"],u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[s,[u,m.str,h.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[s,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[s,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[s,u]],
cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",g.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",g.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",g.lowerize]]],
device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[n,c,[l,d]],[/applecoremedia\/[\w\.]+ \((ipad)/],[n,[c,"Apple"],[l,d]],[/(apple\s{0,1}tv)/i],[[n,"Apple TV"],[c,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,n,[l,d]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[n,[c,"Amazon"],[l,d]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[n,m.str,h.device.amazon.model],[c,"Amazon"],[l,p]],[/android.+aft([bms])\sbuild/i],[n,[c,"Amazon"],[l,"smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[n,c,[l,p]],[/\((ip[honed|\s\w*]+);/i],[n,[c,"Apple"],[l,p]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,n,[l,p]],[/\(bb10;\s(\w+)/i],[n,[c,"BlackBerry"],[l,p]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[n,[c,"Asus"],[l,d]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[c,"Sony"],[n,"Xperia Tablet"],[l,d]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[n,[c,"Sony"],[l,p]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[c,n,[l,"console"]],[/android.+;\s(shield)\sbuild/i],[n,[c,"Nvidia"],[l,"console"]],[/(playstation\s[34portablevi]+)/i],[n,[c,"Sony"],[l,"console"]],[/(sprint\s(\w+))/i],[[c,m.str,h.device.sprint.vendor],[n,m.str,h.device.sprint.model],[l,p]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[n,/_/g," "],[l,p]],[/(nexus\s9)/i],[n,[c,"HTC"],[l,d]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[n,[c,"Huawei"],[l,p]],[/(microsoft);\s(lumia[\s\w]+)/i],[c,n,[l,p]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[n,[c,"Microsoft"],[l,"console"]],[/(kin\.[onetw]{3})/i],[[n,/\./g," "],[c,"Microsoft"],[l,p]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[n,[c,"Motorola"],[l,p]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[n,[c,"Motorola"],[l,d]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,g.trim],[n,g.trim],[l,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[n,/^/,"SmartTV"],[c,"Samsung"],[l,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[n,[c,"Sharp"],[l,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[c,"Samsung"],n,[l,d]],[/smart-tv.+(samsung)/i],[c,[l,"smarttv"],n],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[c,"Samsung"],n,[l,p]],[/sie-(\w*)/i],[n,[c,"Siemens"],[l,p]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[c,"Nokia"],n,[l,p]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[n,[c,"Acer"],[l,d]],[/android.+([vl]k\-?\d{3})\s+build/i],[n,[c,"LG"],[l,d]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],n,[l,d]],[/(lg) netcast\.tv/i],[c,n,[l,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[n,[c,"LG"],[l,p]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[c,n,[l,d]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[n,[c,"Lenovo"],[l,d]],[/(lenovo)[_\s-]?([\w-]+)/i],[c,n,[l,p]],[/linux;.+((jolla));/i],[c,n,[l,p]],[/((pebble))app\/[\d\.]+\s/i],[c,n,[l,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,n,[l,p]],[/crkey/i],[[n,"Chromecast"],[c,"Google"]],[/android.+;\s(glass)\s\d/i],[n,[c,"Google"],[l,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[n,[c,"Google"],[l,d]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[n,[c,"Google"],[l,p]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[n,/_/g," "],[c,"Xiaomi"],[l,p]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[n,/_/g," "],[c,"Xiaomi"],[l,d]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[n,[c,"Meizu"],[l,p]],[/(mz)-([\w-]{2,})/i],[[c,"Meizu"],n,[l,p]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[n,[c,"OnePlus"],[l,p]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[n,[c,"RCA"],[l,d]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[n,[c,"Dell"],[l,d]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[n,[c,"Verizon"],[l,d]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[c,"Barnes & Noble"],n,[l,d]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[n,[c,"NuVision"],[l,d]],[/android.+;\s(k88)\sbuild/i],[n,[c,"ZTE"],[l,d]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[n,[c,"Swiss"],[l,p]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[n,[c,"Swiss"],[l,d]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[n,[c,"Zeki"],[l,d]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[c,"Dragon Touch"],n,[l,d]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[n,[c,"Insignia"],[l,d]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[n,[c,"NextBook"],[l,d]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[c,"Voice"],n,[l,p]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[c,"LvTel"],n,[l,p]],[/android.+;\s(PH-1)\s/i],[n,[c,"Essential"],[l,p]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[n,[c,"Envizen"],[l,d]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[c,n,[l,d]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[n,[c,"MachSpeed"],[l,d]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[c,n,[l,d]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[n,[c,"Rotor"],[l,d]],[/android.+(KS(.+))\s+build/i],[n,[c,"Amazon"],[l,d]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[c,n,[l,d]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,g.lowerize],c,n],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,"smarttv"]],[/(android[\w\.\s\-]{0,9});.+build/i],[n,[c,"Generic"]]],
engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[s,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)/i],[[s,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[s,u],[/rv\:([\w\.]{1,9}).+(gecko)/i],[u,s]],
os:[[/microsoft\s(windows)\s(vista|xp)/i],[s,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[s,[u,m.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[s,"Windows"],[u,m.str,h.os.windows.version]],[/\((bb)(10);/i],[[s,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[s,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[s,"Symbian"],u],[/\((series40);/i],[s],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[s,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[s,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[s,"Chromium OS"],u],[/(sunos)\s?([\w\.\d]*)/i],[[s,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[s,u],[/(haiku)\s(\w+)/i],[s,u],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[u,/_/g,"."],[s,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[s,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[s,u]]
},b=function(e,t){
if("object"==typeof e&&(t=e,e=void 0),!(this instanceof b)){
return new b(e,t).getResult()
}
var i=e||(o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),a=t?g.extend(k,t):k
return this.getBrowser=function(){
var e={
name:void 0,
version:void 0
}
return m.rgx.call(e,i,a.browser),e.major=g.major(e.version),e
},this.getCPU=function(){
var e={
architecture:void 0
}
return m.rgx.call(e,i,a.cpu),e
},this.getDevice=function(){
var e={
vendor:void 0,
model:void 0,
type:void 0
}
return m.rgx.call(e,i,a.device),e
},this.getEngine=function(){
var e={
name:void 0,
version:void 0
}
return m.rgx.call(e,i,a.engine),e
},this.getOS=function(){
var e={
name:void 0,
version:void 0
}
return m.rgx.call(e,i,a.os),e
},this.getResult=function(){
return{
ua:this.getUA(),
browser:this.getBrowser(),
engine:this.getEngine(),
os:this.getOS(),
device:this.getDevice(),
cpu:this.getCPU()
}
},this.getUA=function(){
return i
},this.setUA=function(e){
return i=e,this
},this
}
b.VERSION="0.7.20",b.BROWSER={
NAME:s,
MAJOR:"major",
VERSION:u
},b.CPU={
ARCHITECTURE:"architecture"
},b.DEVICE={
MODEL:n,
VENDOR:c,
TYPE:l,
CONSOLE:"console",
MOBILE:p,
SMARTTV:"smarttv",
TABLET:d,
WEARABLE:"wearable",
EMBEDDED:"embedded"
},b.ENGINE={
NAME:s,
VERSION:u
},b.OS={
NAME:s,
VERSION:u
},void 0!==t?(void 0!==e&&e.exports&&(t=e.exports=b),t.UAParser=b):void 0===(a=function(){
return b
}.call(t,i,t,e))||(e.exports=a)
var f=o&&(o.jQuery||o.Zepto)
if(void 0!==f&&!f.ua){
var y=new b
f.ua=y.getResult(),f.ua.get=function(){
return y.getUA()
},f.ua.set=function(e){
y.setUA(e)
var t=y.getResult()
for(var i in t){
f.ua[i]=t[i]
}
}
}
}("object"==typeof window?window:this)
},function(e,t){
const i={
_activity(e,t){
let i=Object.assign({
common:{
session_id:this._sessionId,
test_id:this._abTests.map((function(e){
return e.test_id
})).join(","),
test_group_id:this._abTests.map((function(e){
return e.test_group_id
})).join(","),
error_state:this._errorState
}
},t)
const a={
type:5,
subtype:e,
time:Date.now()
}
this.sendEvent({
event:a,
activity:i
})
},
activity:{
click:1,
view:2,
ipm:3,
auto:10
},
heartbeat(e){
let t={
uptime:e
}
const i={
type:2,
subtype:1,
time:Date.now()
}
this.sendEvent({
event:i,
heartbeat:t
})
},
install(e){
let t={
operation:e||1
}
const i={
type:1,
subtype:t.operation,
time:Date.now()
}
this.sendEvent({
event:i,
install:t
})
},
aosWebshieldScanning(e){
let t=Object.assign({
caller_id:this._options.caller_id,
product_av:{
identity:this._options.extensionProductIdentity,
product:this._options.extensionProduct
}
},e)
const i={
type:41,
subtype:1,
time:Date.now()
}
this.sendEvent({
event:i,
aos_webshield_scanning:t
})
},
update(e={}){
const t=e.action||3,i=Date.now(),a=Object.assign({
action:t,
component:1,
type:1,
time:{
ends:i
}
},e),o={
type:4,
subtype:t,
time:i
}
this.sendEvent({
event:o,
updates:a
})
},
preferences(e=[]){
const t={
config:{
configuration:e
}
},i={
type:6,
subtype:1,
time:Date.now()
}
this.sendEvent({
event:i,
preferences:t
})
},
maliciousUrl(e){
const t={
type:46,
subtype:1,
time:Date.now()
}
this.sendEvent({
event:t,
malicious:{
url:e
}
})
},
vote(e,t){
const i={
type:47,
subtype:1,
time:Date.now()
}
this.sendEvent({
event:i,
vote:{
url:e,
rating:t
}
})
},
_issue(e,t,i){
let a={
category:e,
source:void 0!==i?i:3,
error:Object.assign(t)
}
const o={
type:9,
subtype:e,
time:Date.now()
}
this.sendEvent({
event:o,
issue:a
})
},
issue:{
debug:1,
crash:2,
error:3,
failure:4,
warning:5
}
}
e.exports={
bind:function(e){
let t={}
for(let a in i){
if(a.startsWith("_")||"function"!=typeof i[a]){
if("object"==typeof i[a]){
t[a]={}
for(let o in i[a]){
t[a][o]=i["_"+a].bind(e,i[a][o])
}
}
}else{
t[a]=i[a].bind(e)
}
}
return t
}
}
},function(e,t,i){
"use strict"
e.exports={
browserNameToEnum:function(e){
return"avast secure browser"===(e=e.toLowerCase())||"avg secure browser"===e?2:e.includes("chrome")?3:e.includes("firefox")?4:e.includes("safari")?5:e.includes("edge")?6:e.includes("opera")?7:"ie"===e?8:"ucbrowser"===e?11:"yandex"===e?12:"coc coc"===e?13:"chromium"===e?14:"vivaldi"===e?15:1
},
platformNameToEnum:function(e){
return e?e.startsWith("Win")?1:e.startsWith("Mac")?2:e.startsWith("iP")?3:e.toLowerCase().startsWith("android")?5:e.toLowerCase().startsWith("chromium os")?6:4:5
},
cpuToEnum:function(e){
return"arm"===e?3:"arm64"===e?4:"amd64"===e||"ia64"===e?2:"ia32"===e?1:5
}
}
},function(e,t,i){
(function(a){
var o,r,n
r=[i(35)],void 0===(n="function"==typeof(o=function(e,t){
"use strict"
var o,r={}
return r.ByteBuffer=e,r.Long=e.Long||null,r.VERSION="5.0.3",r.WIRE_TYPES={},r.WIRE_TYPES.VARINT=0,
r.WIRE_TYPES.BITS64=1,
r.WIRE_TYPES.LDELIM=2,r.WIRE_TYPES.STARTGROUP=3,r.WIRE_TYPES.ENDGROUP=4,
r.WIRE_TYPES.BITS32=5,
r.PACKABLE_WIRE_TYPES=[r.WIRE_TYPES.VARINT,r.WIRE_TYPES.BITS64,r.WIRE_TYPES.BITS32],
r.TYPES={
int32:{
name:"int32",
wireType:r.WIRE_TYPES.VARINT,
defaultValue:0
},
uint32:{
name:"uint32",
wireType:r.WIRE_TYPES.VARINT,
defaultValue:0
},
sint32:{
name:"sint32",
wireType:r.WIRE_TYPES.VARINT,
defaultValue:0
},
int64:{
name:"int64",
wireType:r.WIRE_TYPES.VARINT,
defaultValue:r.Long?r.Long.ZERO:void 0
},
uint64:{
name:"uint64",
wireType:r.WIRE_TYPES.VARINT,
defaultValue:r.Long?r.Long.UZERO:void 0
},
sint64:{
name:"sint64",
wireType:r.WIRE_TYPES.VARINT,
defaultValue:r.Long?r.Long.ZERO:void 0
},
bool:{
name:"bool",
wireType:r.WIRE_TYPES.VARINT,
defaultValue:!1
},
double:{
name:"double",
wireType:r.WIRE_TYPES.BITS64,
defaultValue:0
},
string:{
name:"string",
wireType:r.WIRE_TYPES.LDELIM,
defaultValue:""
},
bytes:{
name:"bytes",
wireType:r.WIRE_TYPES.LDELIM,
defaultValue:null
},
fixed32:{
name:"fixed32",
wireType:r.WIRE_TYPES.BITS32,
defaultValue:0
},
sfixed32:{
name:"sfixed32",
wireType:r.WIRE_TYPES.BITS32,
defaultValue:0
},
fixed64:{
name:"fixed64",
wireType:r.WIRE_TYPES.BITS64,
defaultValue:r.Long?r.Long.UZERO:void 0
},
sfixed64:{
name:"sfixed64",
wireType:r.WIRE_TYPES.BITS64,
defaultValue:r.Long?r.Long.ZERO:void 0
},
float:{
name:"float",
wireType:r.WIRE_TYPES.BITS32,
defaultValue:0
},
enum:{
name:"enum",
wireType:r.WIRE_TYPES.VARINT,
defaultValue:0
},
message:{
name:"message",
wireType:r.WIRE_TYPES.LDELIM,
defaultValue:null
},
group:{
name:"group",
wireType:r.WIRE_TYPES.STARTGROUP,
defaultValue:null
}
},r.MAP_KEY_TYPES=[r.TYPES.int32,r.TYPES.sint32,r.TYPES.sfixed32,r.TYPES.uint32,r.TYPES.fixed32,r.TYPES.int64,r.TYPES.sint64,r.TYPES.sfixed64,r.TYPES.uint64,r.TYPES.fixed64,r.TYPES.bool,r.TYPES.string,r.TYPES.bytes],
r.ID_MIN=1,
r.ID_MAX=536870911,r.convertFieldsToCamelCase=!1,r.populateAccessors=!0,
r.populateDefaults=!0,
r.Util=((o={}).IS_NODE=!("object"!=typeof a||a+""!="[object process]"||a.browser),
o.XHR=function(){
for(var e=[function(){
return new XMLHttpRequest
},function(){
return new ActiveXObject("Msxml2.XMLHTTP")
},function(){
return new ActiveXObject("Msxml3.XMLHTTP")
},function(){
return new ActiveXObject("Microsoft.XMLHTTP")
}],t=null,i=0;i<e.length;i++){
try{
t=e[i]()
}catch(e){
continue
}
break
}
if(!t){
throw Error("XMLHttpRequest is not supported")
}
return t
},o.fetch=function(e,t){
if(t&&"function"!=typeof t&&(t=null),o.IS_NODE){
var a=i(37)
if(t){
a.readFile(e,(function(e,i){
t(e?null:""+i)
}))
}else{
try{
return a.readFileSync(e)
}catch(e){
return null
}
}
}else{
var r=o.XHR()
if(r.open("GET",e,!!t),r.setRequestHeader("Accept","text/plain"),"function"==typeof r.overrideMimeType&&r.overrideMimeType("text/plain"),
!t){
return r.send(null),200==r.status||0==r.status&&"string"==typeof r.responseText?r.responseText:null
}
if(r.onreadystatechange=function(){
4==r.readyState&&(200==r.status||0==r.status&&"string"==typeof r.responseText?t(r.responseText):t(null))
},
4==r.readyState){
return
}
r.send(null)
}
},o.toCamelCase=function(e){
return e.replace(/_([a-zA-Z])/g,(function(e,t){
return t.toUpperCase()
}))
},o),r.Lang={
DELIM:/[\s\{\}=;:\[\],'"\(\)<>]/g,
RULE:/^(?:required|optional|repeated|map)$/,
TYPE:/^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
NAME:/^[a-zA-Z_][a-zA-Z_0-9]*$/,
TYPEDEF:/^[a-zA-Z][a-zA-Z_0-9]*$/,
TYPEREF:/^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
FQTYPEREF:/^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
NUMBER:/^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
NUMBER_DEC:/^(?:[1-9][0-9]*|0)$/,
NUMBER_HEX:/^0[xX][0-9a-fA-F]+$/,
NUMBER_OCT:/^0[0-7]+$/,
NUMBER_FLT:/^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
BOOL:/^(?:true|false)$/i,
ID:/^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
NEGID:/^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
WHITESPACE:/\s/,
STRING:/(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
STRING_DQ:/(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
STRING_SQ:/(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
},r.DotProto=function(e,t){
var i={},a=function(e){
this.source=e+"",this.index=0,this.line=1,this.stack=[],this._stringOpen=null
},o=a.prototype
o._readString=function(){
var e='"'===this._stringOpen?t.STRING_DQ:t.STRING_SQ
e.lastIndex=this.index-1
var i=e.exec(this.source)
if(!i){
throw Error("unterminated string")
}
return this.index=e.lastIndex,this.stack.push(this._stringOpen),this._stringOpen=null,
i[1]
},o.next=function(){
if(this.stack.length>0){
return this.stack.shift()
}
if(this.index>=this.source.length){
return null
}
if(null!==this._stringOpen){
return this._readString()
}
var e,i,a
do{
for(e=!1;t.WHITESPACE.test(a=this.source.charAt(this.index));){
if("\n"===a&&++this.line,
++this.index===this.source.length){
return null
}
}
if("/"===this.source.charAt(this.index)){
if(++this.index,"/"===this.source.charAt(this.index)){
for(;"\n"!==this.source.charAt(++this.index);){
if(this.index==this.source.length){
return null
}
}
++this.index,++this.line,e=!0
}else{
if("*"!==(a=this.source.charAt(this.index))){
return"/"
}
do{
if("\n"===a&&++this.line,++this.index===this.source.length){
return null
}
i=a,a=this.source.charAt(this.index)
}while("*"!==i||"/"!==a)
;++this.index,e=!0
}
}
}while(e)
if(this.index===this.source.length){
return null
}
var o=this.index
if(t.DELIM.lastIndex=0,!t.DELIM.test(this.source.charAt(o++))){
for(;o<this.source.length&&!t.DELIM.test(this.source.charAt(o));){
++o
}
}
var r=this.source.substring(this.index,this.index=o)
return'"'!==r&&"'"!==r||(this._stringOpen=r),r
},o.peek=function(){
if(0===this.stack.length){
var e=this.next()
if(null===e){
return null
}
this.stack.push(e)
}
return this.stack[0]
},o.skip=function(e){
var t=this.next()
if(t!==e){
throw Error("illegal '"+t+"', '"+e+"' expected")
}
},o.omit=function(e){
return this.peek()===e&&(this.next(),!0)
},o.toString=function(){
return"Tokenizer ("+this.index+"/"+this.source.length+" at line "+this.line+")"
},
i.Tokenizer=a
var r=function(e){
this.tn=new a(e),this.proto3=!1
},n=r.prototype
function s(e,i){
var a=-1,o=1
if("-"==e.charAt(0)&&(o=-1,e=e.substring(1)),t.NUMBER_DEC.test(e)){
a=parseInt(e)
}else if(t.NUMBER_HEX.test(e)){
a=parseInt(e.substring(2),16)
}else{
if(!t.NUMBER_OCT.test(e)){
throw Error("illegal id value: "+(o<0?"-":"")+e)
}
a=parseInt(e.substring(1),8)
}
if(a=o*a|0,!i&&a<0){
throw Error("illegal id value: "+(o<0?"-":"")+e)
}
return a
}
function l(e){
var i=1
if("-"==e.charAt(0)&&(i=-1,e=e.substring(1)),t.NUMBER_DEC.test(e)){
return i*parseInt(e,10)
}
if(t.NUMBER_HEX.test(e)){
return i*parseInt(e.substring(2),16)
}
if(t.NUMBER_OCT.test(e)){
return i*parseInt(e.substring(1),8)
}
if("inf"===e){
return i*(1/0)
}
if("nan"===e){
return NaN
}
if(t.NUMBER_FLT.test(e)){
return i*parseFloat(e)
}
throw Error("illegal number value: "+(i<0?"-":"")+e)
}
function c(e,t,i){
void 0===e[t]?e[t]=i:(Array.isArray(e[t])||(e[t]=[e[t]]),e[t].push(i))
}
return n.parse=function(){
var e,i,a={
name:"[ROOT]",
package:null,
messages:[],
enums:[],
imports:[],
options:{},
services:[]
},o=!0
try{
for(;e=this.tn.next();){
switch(e){
case"package":
if(!o||null!==a.package){
throw Error("unexpected 'package'")
}
if(e=this.tn.next(),!t.TYPEREF.test(e)){
throw Error("illegal package name: "+e)
}
this.tn.skip(";"),a.package=e
break
case"import":
if(!o){
throw Error("unexpected 'import'")
}
("public"===(e=this.tn.peek())||(i="weak"===e))&&this.tn.next(),e=this._readString(),
this.tn.skip(";"),
i||a.imports.push(e)
break
case"syntax":
if(!o){
throw Error("unexpected 'syntax'")
}
this.tn.skip("="),"proto3"===(a.syntax=this._readString())&&(this.proto3=!0),this.tn.skip(";")
break
case"message":
this._parseMessage(a,null),o=!1
break
case"enum":
this._parseEnum(a),o=!1
break
case"option":
this._parseOption(a)
break
case"service":
this._parseService(a)
break
case"extend":
this._parseExtend(a)
break
default:
throw Error("unexpected '"+e+"'")
}
}
}catch(e){
throw e.message="Parse error at line "+this.tn.line+": "+e.message,e
}
return delete a.name,a
},r.parse=function(e){
return new r(e).parse()
},n._readString=function(){
var e,t,i=""
do{
if("'"!==(t=this.tn.next())&&'"'!==t){
throw Error("illegal string delimiter: "+t)
}
i+=this.tn.next(),this.tn.skip(t),e=this.tn.peek()
}while('"'===e||'"'===e)
return i
},n._readValue=function(e){
var i=this.tn.peek()
if('"'===i||"'"===i){
return this._readString()
}
if(this.tn.next(),t.NUMBER.test(i)){
return l(i)
}
if(t.BOOL.test(i)){
return"true"===i.toLowerCase()
}
if(e&&t.TYPEREF.test(i)){
return i
}
throw Error("illegal value: "+i)
},n._parseOption=function(e,i){
var a=this.tn.next(),o=!1
if("("===a&&(o=!0,a=this.tn.next()),!t.TYPEREF.test(a)){
throw Error("illegal option name: "+a)
}
var r=a
o&&(this.tn.skip(")"),r="("+r+")",a=this.tn.peek(),t.FQTYPEREF.test(a)&&(r+=a,this.tn.next())),
this.tn.skip("="),
this._parseOptionValue(e,r),i||this.tn.skip(";")
},n._parseOptionValue=function(e,i){
var a=this.tn.peek()
if("{"!==a){
c(e.options,i,this._readValue(!0))
}else{
for(this.tn.skip("{");"}"!==(a=this.tn.next());){
if(!t.NAME.test(a)){
throw Error("illegal option name: "+i+"."+a)
}
this.tn.omit(":")?c(e.options,i+"."+a,this._readValue(!0)):this._parseOptionValue(e,i+"."+a)
}
}
},n._parseService=function(e){
var i=this.tn.next()
if(!t.NAME.test(i)){
throw Error("illegal service name at line "+this.tn.line+": "+i)
}
var a={
name:i,
rpc:{},
options:{}
}
for(this.tn.skip("{");"}"!==(i=this.tn.next());){
if("option"===i){
this._parseOption(a)
}else{
if("rpc"!==i){
throw Error("illegal service token: "+i)
}
this._parseServiceRPC(a)
}
}
this.tn.omit(";"),e.services.push(a)
},n._parseServiceRPC=function(e){
var i=this.tn.next()
if(!t.NAME.test(i)){
throw Error("illegal rpc service method name: "+i)
}
var a=i,o={
request:null,
response:null,
request_stream:!1,
response_stream:!1,
options:{}
}
if(this.tn.skip("("),"stream"===(i=this.tn.next()).toLowerCase()&&(o.request_stream=!0,
i=this.tn.next()),
!t.TYPEREF.test(i)){
throw Error("illegal rpc service request type: "+i)
}
if(o.request=i,this.tn.skip(")"),"returns"!==(i=this.tn.next()).toLowerCase()){
throw Error("illegal rpc service request type delimiter: "+i)
}
if(this.tn.skip("("),"stream"===(i=this.tn.next()).toLowerCase()&&(o.response_stream=!0,
i=this.tn.next()),
o.response=i,this.tn.skip(")"),"{"===(i=this.tn.peek())){
for(this.tn.next();"}"!==(i=this.tn.next());){
if("option"!==i){
throw Error("illegal rpc service token: "+i)
}
this._parseOption(o)
}
this.tn.omit(";")
}else{
this.tn.skip(";")
}
void 0===e.rpc&&(e.rpc={}),e.rpc[a]=o
},n._parseMessage=function(e,i){
var a=!!i,o=this.tn.next(),r={
name:"",
fields:[],
enums:[],
messages:[],
options:{},
services:[],
oneofs:{}
}
if(!t.NAME.test(o)){
throw Error("illegal "+(a?"group":"message")+" name: "+o)
}
for(r.name=o,a&&(this.tn.skip("="),i.id=s(this.tn.next()),r.isGroup=!0),"["===(o=this.tn.peek())&&i&&this._parseFieldOptions(i),
this.tn.skip("{");"}"!==(o=this.tn.next());){
if(t.RULE.test(o)){
this._parseMessageField(r,o)
}else if("oneof"===o){
this._parseMessageOneOf(r)
}else if("enum"===o){
this._parseEnum(r)
}else if("message"===o){
this._parseMessage(r)
}else if("option"===o){
this._parseOption(r)
}else if("service"===o){
this._parseService(r)
}else if("extensions"===o){
r.hasOwnProperty("extensions")?r.extensions=r.extensions.concat(this._parseExtensionRanges()):r.extensions=this._parseExtensionRanges()
}else if("reserved"===o){
this._parseIgnored()
}else if("extend"===o){
this._parseExtend(r)
}else{
if(!t.TYPEREF.test(o)){
throw Error("illegal message token: "+o)
}
if(!this.proto3){
throw Error("illegal field rule: "+o)
}
this._parseMessageField(r,"optional",o)
}
}
return this.tn.omit(";"),e.messages.push(r),r
},n._parseIgnored=function(){
for(;";"!==this.tn.peek();){
this.tn.next()
}
this.tn.skip(";")
},n._parseMessageField=function(e,i,a){
if(!t.RULE.test(i)){
throw Error("illegal message field rule: "+i)
}
var o,r={
rule:i,
type:"",
name:"",
options:{},
id:0
}
if("map"===i){
if(a){
throw Error("illegal type: "+a)
}
if(this.tn.skip("<"),o=this.tn.next(),!t.TYPE.test(o)&&!t.TYPEREF.test(o)){
throw Error("illegal message field type: "+o)
}
if(r.keytype=o,this.tn.skip(","),o=this.tn.next(),!t.TYPE.test(o)&&!t.TYPEREF.test(o)){
throw Error("illegal message field: "+o)
}
if(r.type=o,this.tn.skip(">"),o=this.tn.next(),!t.NAME.test(o)){
throw Error("illegal message field name: "+o)
}
r.name=o,this.tn.skip("="),r.id=s(this.tn.next()),"["===(o=this.tn.peek())&&this._parseFieldOptions(r),
this.tn.skip(";")
}else if("group"===(a=void 0!==a?a:this.tn.next())){
var n=this._parseMessage(e,r)
if(!/^[A-Z]/.test(n.name)){
throw Error("illegal group name: "+n.name)
}
r.type=n.name,r.name=n.name.toLowerCase(),this.tn.omit(";")
}else{
if(!t.TYPE.test(a)&&!t.TYPEREF.test(a)){
throw Error("illegal message field type: "+a)
}
if(r.type=a,o=this.tn.next(),!t.NAME.test(o)){
throw Error("illegal message field name: "+o)
}
r.name=o,this.tn.skip("="),r.id=s(this.tn.next()),"["===(o=this.tn.peek())&&this._parseFieldOptions(r),
this.tn.skip(";")
}
return e.fields.push(r),r
},n._parseMessageOneOf=function(e){
var i=this.tn.next()
if(!t.NAME.test(i)){
throw Error("illegal oneof name: "+i)
}
var a,o=i,r=[]
for(this.tn.skip("{");"}"!==(i=this.tn.next());){
(a=this._parseMessageField(e,"optional",i)).oneof=o,
r.push(a.id)
}
this.tn.omit(";"),e.oneofs[o]=r
},n._parseFieldOptions=function(e){
this.tn.skip("[")
for(var t=!0;"]"!==this.tn.peek();){
t||this.tn.skip(","),this._parseOption(e,!0),
t=!1
}
this.tn.next()
},n._parseEnum=function(e){
var i={
name:"",
values:[],
options:{}
},a=this.tn.next()
if(!t.NAME.test(a)){
throw Error("illegal name: "+a)
}
for(i.name=a,this.tn.skip("{");"}"!==(a=this.tn.next());){
if("option"===a){
this._parseOption(i)
}else{
if(!t.NAME.test(a)){
throw Error("illegal name: "+a)
}
this.tn.skip("=")
var o={
name:a,
id:s(this.tn.next(),!0)
}
"["===(a=this.tn.peek())&&this._parseFieldOptions({
options:{}
}),this.tn.skip(";"),i.values.push(o)
}
}
this.tn.omit(";"),e.enums.push(i)
},n._parseExtensionRanges=function(){
var t,i,a,o=[]
do{
for(i=[];;){
switch(t=this.tn.next()){
case"min":
a=e.ID_MIN
break
case"max":
a=e.ID_MAX
break
default:
a=l(t)
}
if(i.push(a),2===i.length){
break
}
if("to"!==this.tn.peek()){
i.push(a)
break
}
this.tn.next()
}
o.push(i)
}while(this.tn.omit(","))
return this.tn.skip(";"),o
},n._parseExtend=function(e){
var i=this.tn.next()
if(!t.TYPEREF.test(i)){
throw Error("illegal extend reference: "+i)
}
var a={
ref:i,
fields:[]
}
for(this.tn.skip("{");"}"!==(i=this.tn.next());){
if(t.RULE.test(i)){
this._parseMessageField(a,i)
}else{
if(!t.TYPEREF.test(i)){
throw Error("illegal extend token: "+i)
}
if(!this.proto3){
throw Error("illegal field rule: "+i)
}
this._parseMessageField(a,"optional",i)
}
}
return this.tn.omit(";"),e.messages.push(a),a
},n.toString=function(){
return"Parser at line "+this.tn.line
},i.Parser=r,i
}(r,r.Lang),r.Reflect=function(t){
var i={},a=function(e,t,i){
this.builder=e,this.parent=t,this.name=i,this.className
},o=a.prototype
o.fqn=function(){
for(var e=this.name,t=this;null!=(t=t.parent);){
e=t.name+"."+e
}
return e
},o.toString=function(e){
return(e?this.className+" ":"")+this.fqn()
},o.build=function(){
throw Error(this.toString(!0)+" cannot be built directly")
},i.T=a
var r=function(e,t,i,o,r){
a.call(this,e,t,i),this.className="Namespace",this.children=[],
this.options=o||{},
this.syntax=r||"proto2"
},n=r.prototype=Object.create(a.prototype)
n.getChildren=function(e){
if(null==(e=e||null)){
return this.children.slice()
}
for(var t=[],i=0,a=this.children.length;i<a;++i){
this.children[i]instanceof e&&t.push(this.children[i])
}
return t
},n.addChild=function(e){
var t
if(t=this.getChild(e.name)){
if(t instanceof u.Field&&t.name!==t.originalName&&null===this.getChild(t.originalName)){
t.name=t.originalName
}else{
if(!(e instanceof u.Field&&e.name!==e.originalName&&null===this.getChild(e.originalName))){
throw Error("Duplicate name in namespace "+this.toString(!0)+": "+e.name)
}
e.name=e.originalName
}
}
this.children.push(e)
},n.getChild=function(e){
for(var t="number"==typeof e?"id":"name",i=0,a=this.children.length;i<a;++i){
if(this.children[i][t]===e){
return this.children[i]
}
}
return null
},n.resolve=function(e,t){
var a,o="string"==typeof e?e.split("."):e,r=this,n=0
if(""===o[n]){
for(;null!==r.parent;){
r=r.parent
}
n++
}
do{
do{
if(!(r instanceof i.Namespace)){
r=null
break
}
if(!(a=r.getChild(o[n]))||!(a instanceof i.T)||t&&!(a instanceof i.Namespace)){
r=null
break
}
r=a,n++
}while(n<o.length)
if(null!=r){
break
}
if(null!==this.parent){
return this.parent.resolve(e,t)
}
}while(null!=r)
return r
},n.qn=function(e){
var t=[],a=e
do{
t.unshift(a.name),a=a.parent
}while(null!==a)
for(var o=1;o<=t.length;o++){
var r=t.slice(t.length-o)
if(e===this.resolve(r,e instanceof i.Namespace)){
return r.join(".")
}
}
return e.fqn()
},n.build=function(){
for(var e,t={},i=this.children,a=0,o=i.length;a<o;++a){
(e=i[a])instanceof r&&(t[e.name]=e.build())
}
return Object.defineProperty&&Object.defineProperty(t,"$options",{
value:this.buildOpt()
}),t
},n.buildOpt=function(){
for(var e={},t=Object.keys(this.options),i=0,a=t.length;i<a;++i){
var o=t[i],r=this.options[t[i]]
e[o]=r
}
return e
},n.getOption=function(e){
return void 0===e?this.options:void 0!==this.options[e]?this.options[e]:null
},i.Namespace=r
var s=function(e,i,a,o,r){
if(this.type=e,this.resolvedType=i,this.isMapKey=a,this.syntax=o,
this.name=r,a&&t.MAP_KEY_TYPES.indexOf(e)<0){
throw Error("Invalid map key type: "+e.name)
}
},l=s.prototype
function c(e,i){
if(e&&"number"==typeof e.low&&"number"==typeof e.high&&"boolean"==typeof e.unsigned&&e.low==e.low&&e.high==e.high){
return new t.Long(e.low,e.high,void 0===i?e.unsigned:i)
}
if("string"==typeof e){
return t.Long.fromString(e,i||!1,10)
}
if("number"==typeof e){
return t.Long.fromNumber(e,i||!1)
}
throw Error("not convertible to Long")
}
s.defaultFieldValue=function(i){
if("string"==typeof i&&(i=t.TYPES[i]),void 0===i.defaultValue){
throw Error("default value for type "+i.name+" is not supported")
}
return i==t.TYPES.bytes?new e(0):i.defaultValue
},l.toString=function(){
return(this.name||"")+(this.isMapKey?"map":"value")+" element"
},l.verifyValue=function(i){
var a=this
function o(e,t){
throw Error("Illegal value for "+a.toString(!0)+" of type "+a.type.name+": "+e+" ("+t+")")
}
switch(this.type){
case t.TYPES.int32:
case t.TYPES.sint32:
case t.TYPES.sfixed32:
return("number"!=typeof i||i==i&&i%1!=0)&&o(typeof i,"not an integer"),
i>4294967295?0|i:i
case t.TYPES.uint32:
case t.TYPES.fixed32:
return("number"!=typeof i||i==i&&i%1!=0)&&o(typeof i,"not an integer"),
i<0?i>>>0:i
case t.TYPES.int64:
case t.TYPES.sint64:
case t.TYPES.sfixed64:
if(t.Long){
try{
return c(i,!1)
}catch(e){
o(typeof i,e.message)
}
}else{
o(typeof i,"requires Long.js")
}
case t.TYPES.uint64:
case t.TYPES.fixed64:
if(t.Long){
try{
return c(i,!0)
}catch(e){
o(typeof i,e.message)
}
}else{
o(typeof i,"requires Long.js")
}
case t.TYPES.bool:
return"boolean"!=typeof i&&o(typeof i,"not a boolean"),i
case t.TYPES.float:
case t.TYPES.double:
return"number"!=typeof i&&o(typeof i,"not a number"),i
case t.TYPES.string:
return"string"==typeof i||i&&i instanceof String||o(typeof i,"not a string"),
""+i
case t.TYPES.bytes:
return e.isByteBuffer(i)?i:e.wrap(i,"base64")
case t.TYPES.enum:
var r=this.resolvedType.getChildren(t.Reflect.Enum.Value)
for(s=0;s<r.length;s++){
if(r[s].name==i){
return r[s].id
}
if(r[s].id==i){
return r[s].id
}
}
if("proto3"===this.syntax){
return("number"!=typeof i||i==i&&i%1!=0)&&o(typeof i,"not an integer"),
(i>4294967295||i<0)&&o(typeof i,"not in range for uint32"),
i
}
o(i,"not a valid enum value")
case t.TYPES.group:
case t.TYPES.message:
if(i&&"object"==typeof i||o(typeof i,"object expected"),i instanceof this.resolvedType.clazz){
return i
}
if(i instanceof t.Builder.Message){
var n={}
for(var s in i){
i.hasOwnProperty(s)&&(n[s]=i[s])
}
i=n
}
return new this.resolvedType.clazz(i)
}
throw Error("[INTERNAL] Illegal value for "+this.toString(!0)+": "+i+" (undefined type "+this.type+")")
},
l.calculateLength=function(i,a){
if(null===a){
return 0
}
var o
switch(this.type){
case t.TYPES.int32:
return a<0?e.calculateVarint64(a):e.calculateVarint32(a)
case t.TYPES.uint32:
return e.calculateVarint32(a)
case t.TYPES.sint32:
return e.calculateVarint32(e.zigZagEncode32(a))
case t.TYPES.fixed32:
case t.TYPES.sfixed32:
case t.TYPES.float:
return 4
case t.TYPES.int64:
case t.TYPES.uint64:
return e.calculateVarint64(a)
case t.TYPES.sint64:
return e.calculateVarint64(e.zigZagEncode64(a))
case t.TYPES.fixed64:
case t.TYPES.sfixed64:
return 8
case t.TYPES.bool:
return 1
case t.TYPES.enum:
return e.calculateVarint32(a)
case t.TYPES.double:
return 8
case t.TYPES.string:
return o=e.calculateUTF8Bytes(a),e.calculateVarint32(o)+o
case t.TYPES.bytes:
if(a.remaining()<0){
throw Error("Illegal value for "+this.toString(!0)+": "+a.remaining()+" bytes remaining")
}
return e.calculateVarint32(a.remaining())+a.remaining()
case t.TYPES.message:
return o=this.resolvedType.calculate(a),e.calculateVarint32(o)+o
case t.TYPES.group:
return(o=this.resolvedType.calculate(a))+e.calculateVarint32(i<<3|t.WIRE_TYPES.ENDGROUP)
}
throw Error("[INTERNAL] Illegal value to encode in "+this.toString(!0)+": "+a+" (unknown type)")
},
l.encodeValue=function(i,a,o){
if(null===a){
return o
}
switch(this.type){
case t.TYPES.int32:
a<0?o.writeVarint64(a):o.writeVarint32(a)
break
case t.TYPES.uint32:
o.writeVarint32(a)
break
case t.TYPES.sint32:
o.writeVarint32ZigZag(a)
break
case t.TYPES.fixed32:
o.writeUint32(a)
break
case t.TYPES.sfixed32:
o.writeInt32(a)
break
case t.TYPES.int64:
case t.TYPES.uint64:
o.writeVarint64(a)
break
case t.TYPES.sint64:
o.writeVarint64ZigZag(a)
break
case t.TYPES.fixed64:
o.writeUint64(a)
break
case t.TYPES.sfixed64:
o.writeInt64(a)
break
case t.TYPES.bool:
"string"==typeof a?o.writeVarint32("false"===a.toLowerCase()?0:!!a):o.writeVarint32(a?1:0)
break
case t.TYPES.enum:
o.writeVarint32(a)
break
case t.TYPES.float:
o.writeFloat32(a)
break
case t.TYPES.double:
o.writeFloat64(a)
break
case t.TYPES.string:
o.writeVString(a)
break
case t.TYPES.bytes:
if(a.remaining()<0){
throw Error("Illegal value for "+this.toString(!0)+": "+a.remaining()+" bytes remaining")
}
var r=a.offset
o.writeVarint32(a.remaining()),o.append(a),a.offset=r
break
case t.TYPES.message:
var n=(new e).LE()
this.resolvedType.encode(a,n),o.writeVarint32(n.offset),o.append(n.flip())
break
case t.TYPES.group:
this.resolvedType.encode(a,o),o.writeVarint32(i<<3|t.WIRE_TYPES.ENDGROUP)
break
default:
throw Error("[INTERNAL] Illegal value to encode in "+this.toString(!0)+": "+a+" (unknown type)")
}
return o
},l.decode=function(e,i,a){
if(i!=this.type.wireType){
throw Error("Unexpected wire type for element")
}
var o,r
switch(this.type){
case t.TYPES.int32:
return 0|e.readVarint32()
case t.TYPES.uint32:
return e.readVarint32()>>>0
case t.TYPES.sint32:
return 0|e.readVarint32ZigZag()
case t.TYPES.fixed32:
return e.readUint32()>>>0
case t.TYPES.sfixed32:
return 0|e.readInt32()
case t.TYPES.int64:
return e.readVarint64()
case t.TYPES.uint64:
return e.readVarint64().toUnsigned()
case t.TYPES.sint64:
return e.readVarint64ZigZag()
case t.TYPES.fixed64:
return e.readUint64()
case t.TYPES.sfixed64:
return e.readInt64()
case t.TYPES.bool:
return!!e.readVarint32()
case t.TYPES.enum:
return e.readVarint32()
case t.TYPES.float:
return e.readFloat()
case t.TYPES.double:
return e.readDouble()
case t.TYPES.string:
return e.readVString()
case t.TYPES.bytes:
if(r=e.readVarint32(),e.remaining()<r){
throw Error("Illegal number of bytes for "+this.toString(!0)+": "+r+" required but got only "+e.remaining())
}
return(o=e.clone()).limit=o.offset+r,e.offset+=r,o
case t.TYPES.message:
return r=e.readVarint32(),this.resolvedType.decode(e,r)
case t.TYPES.group:
return this.resolvedType.decode(e,-1,a)
}
throw Error("[INTERNAL] Illegal decode type")
},l.valueFromString=function(i){
if(!this.isMapKey){
throw Error("valueFromString() called on non-map-key element")
}
switch(this.type){
case t.TYPES.int32:
case t.TYPES.sint32:
case t.TYPES.sfixed32:
case t.TYPES.uint32:
case t.TYPES.fixed32:
return this.verifyValue(parseInt(i))
case t.TYPES.int64:
case t.TYPES.sint64:
case t.TYPES.sfixed64:
case t.TYPES.uint64:
case t.TYPES.fixed64:
return this.verifyValue(i)
case t.TYPES.bool:
return"true"===i
case t.TYPES.string:
return this.verifyValue(i)
case t.TYPES.bytes:
return e.fromBinary(i)
}
},l.valueToString=function(e){
if(!this.isMapKey){
throw Error("valueToString() called on non-map-key element")
}
return this.type===t.TYPES.bytes?e.toString("binary"):e.toString()
},i.Element=s
var u=function(e,t,i,a,o,n){
r.call(this,e,t,i,a,n),this.className="Message",this.extensions=void 0,
this.clazz=null,
this.isGroup=!!o,this._fields=null,this._fieldsById=null,this._fieldsByName=null
},p=u.prototype=Object.create(r.prototype)
function d(e,i){
var a=i.readVarint32(),o=7&a,r=a>>>3
switch(o){
case t.WIRE_TYPES.VARINT:
do{
a=i.readUint8()
}while(128==(128&a))
break
case t.WIRE_TYPES.BITS64:
i.offset+=8
break
case t.WIRE_TYPES.LDELIM:
a=i.readVarint32(),i.offset+=a
break
case t.WIRE_TYPES.STARTGROUP:
d(r,i)
break
case t.WIRE_TYPES.ENDGROUP:
if(r===e){
return!1
}
throw Error("Illegal GROUPEND after unknown group: "+r+" ("+e+" expected)")
case t.WIRE_TYPES.BITS32:
i.offset+=4
break
default:
throw Error("Illegal wire type in unknown group "+e+": "+o)
}
return!0
}
p.build=function(i){
if(this.clazz&&!i){
return this.clazz
}
var a=function(t,i){
var a=i.getChildren(t.Reflect.Message.Field),o=i.getChildren(t.Reflect.Message.OneOf),r=function(n,s){
t.Builder.Message.call(this)
for(var l=0,c=o.length;l<c;++l){
this[o[l].name]=null
}
for(l=0,c=a.length;l<c;++l){
var u=a[l]
this[u.name]=u.repeated?[]:u.map?new t.Map(u):null,!u.required&&"proto3"!==i.syntax||null===u.defaultValue||(this[u.name]=u.defaultValue)
}
var p
if(arguments.length>0){
if(1!==arguments.length||null===n||"object"!=typeof n||!("function"!=typeof n.encode||n instanceof r)||Array.isArray(n)||n instanceof t.Map||e.isByteBuffer(n)||n instanceof ArrayBuffer||t.Long&&n instanceof t.Long){
for(l=0,
c=arguments.length;l<c;++l){
void 0!==(p=arguments[l])&&this.$set(a[l].name,p)
}
}else{
this.$set(n)
}
}
},n=r.prototype=Object.create(t.Builder.Message.prototype)
n.add=function(e,a,o){
var r=i._fieldsByName[e]
if(!o){
if(!r){
throw Error(this+"#"+e+" is undefined")
}
if(!(r instanceof t.Reflect.Message.Field)){
throw Error(this+"#"+e+" is not a field: "+r.toString(!0))
}
if(!r.repeated){
throw Error(this+"#"+e+" is not a repeated field")
}
a=r.verifyValue(a,!0)
}
return null===this[e]&&(this[e]=[]),this[e].push(a),this
},n.$add=n.add,n.set=function(e,a,o){
if(e&&"object"==typeof e){
for(var r in o=a,e){
e.hasOwnProperty(r)&&void 0!==(a=e[r])&&void 0===i._oneofsByName[r]&&this.$set(r,a,o)
}
return this
}
var n=i._fieldsByName[e]
if(o){
this[e]=a
}else{
if(!n){
throw Error(this+"#"+e+" is not a field: undefined")
}
if(!(n instanceof t.Reflect.Message.Field)){
throw Error(this+"#"+e+" is not a field: "+n.toString(!0))
}
this[n.name]=a=n.verifyValue(a)
}
if(n&&n.oneof){
var s=this[n.oneof.name]
null!==a?(null!==s&&s!==n.name&&(this[s]=null),this[n.oneof.name]=n.name):s===e&&(this[n.oneof.name]=null)
}
return this
},n.$set=n.set,n.get=function(e,a){
if(a){
return this[e]
}
var o=i._fieldsByName[e]
if(!(o&&o instanceof t.Reflect.Message.Field)){
throw Error(this+"#"+e+" is not a field: undefined")
}
if(!(o instanceof t.Reflect.Message.Field)){
throw Error(this+"#"+e+" is not a field: "+o.toString(!0))
}
return this[o.name]
},n.$get=n.get
for(var s=0;s<a.length;s++){
var l=a[s]
l instanceof t.Reflect.Message.ExtensionField||i.builder.options.populateAccessors&&function(e){
var t=e.originalName.replace(/(_[a-zA-Z])/g,(function(e){
return e.toUpperCase().replace("_","")
}))
t=t.substring(0,1).toUpperCase()+t.substring(1)
var a=e.originalName.replace(/([A-Z])/g,(function(e){
return"_"+e
})),o=function(t,i){
return this[e.name]=i?t:e.verifyValue(t),this
},r=function(){
return this[e.name]
}
null===i.getChild("set"+t)&&(n["set"+t]=o),null===i.getChild("set_"+a)&&(n["set_"+a]=o),
null===i.getChild("get"+t)&&(n["get"+t]=r),
null===i.getChild("get_"+a)&&(n["get_"+a]=r)
}(l)
}
function c(i,a,o,r){
if(null===i||"object"!=typeof i){
if(r&&r instanceof t.Reflect.Enum){
var n=t.Reflect.Enum.getName(r.object,i)
if(null!==n){
return n
}
}
return i
}
if(e.isByteBuffer(i)){
return a?i.toBase64():i.toBuffer()
}
if(t.Long.isLong(i)){
return o?i.toString():t.Long.fromValue(i)
}
var s
if(Array.isArray(i)){
return s=[],i.forEach((function(e,t){
s[t]=c(e,a,o,r)
})),s
}
if(s={},i instanceof t.Map){
for(var l=i.entries(),u=l.next();!u.done;u=l.next()){
s[i.keyElem.valueToString(u.value[0])]=c(u.value[1],a,o,i.valueElem.resolvedType)
}
return s
}
var p=i.$type,d=void 0
for(var g in i){
i.hasOwnProperty(g)&&(p&&(d=p.getChild(g))?s[g]=c(i[g],a,o,d.resolvedType):s[g]=c(i[g],a,o))
}
return s
}
return n.encode=function(t,a){
"boolean"==typeof t&&(a=t,t=void 0)
var o=!1
t||(t=new e,o=!0)
var r=t.littleEndian
try{
return i.encode(this,t.LE(),a),(o?t.flip():t).LE(r)
}catch(e){
throw t.LE(r),e
}
},r.encode=function(e,t,i){
return new r(e).encode(t,i)
},n.calculate=function(){
return i.calculate(this)
},n.encodeDelimited=function(t,a){
var o=!1
t||(t=new e,o=!0)
var r=(new e).LE()
return i.encode(this,r,a).flip(),t.writeVarint32(r.remaining()),t.append(r),o?t.flip():t
},
n.encodeAB=function(){
try{
return this.encode().toArrayBuffer()
}catch(e){
throw e.encoded&&(e.encoded=e.encoded.toArrayBuffer()),e
}
},n.toArrayBuffer=n.encodeAB,n.encodeNB=function(){
try{
return this.encode().toBuffer()
}catch(e){
throw e.encoded&&(e.encoded=e.encoded.toBuffer()),e
}
},n.toBuffer=n.encodeNB,n.encode64=function(){
try{
return this.encode().toBase64()
}catch(e){
throw e.encoded&&(e.encoded=e.encoded.toBase64()),e
}
},n.toBase64=n.encode64,n.encodeHex=function(){
try{
return this.encode().toHex()
}catch(e){
throw e.encoded&&(e.encoded=e.encoded.toHex()),e
}
},n.toHex=n.encodeHex,n.toRaw=function(e,t){
return c(this,!!e,!!t,this.$type)
},n.encodeJSON=function(){
return JSON.stringify(c(this,!0,!0,this.$type))
},r.decode=function(t,a,o){
"string"==typeof a&&(o=a,a=-1),"string"==typeof t?t=e.wrap(t,o||"base64"):e.isByteBuffer(t)||(t=e.wrap(t))
var r=t.littleEndian
try{
var n=i.decode(t.LE(),a)
return t.LE(r),n
}catch(e){
throw t.LE(r),e
}
},r.decodeDelimited=function(t,a){
if("string"==typeof t?t=e.wrap(t,a||"base64"):e.isByteBuffer(t)||(t=e.wrap(t)),
t.remaining()<1){
return null
}
var o=t.offset,r=t.readVarint32()
if(t.remaining()<r){
return t.offset=o,null
}
try{
var n=i.decode(t.slice(t.offset,t.offset+r).LE())
return t.offset+=r,n
}catch(e){
throw t.offset+=r,e
}
},r.decode64=function(e){
return r.decode(e,"base64")
},r.decodeHex=function(e){
return r.decode(e,"hex")
},r.decodeJSON=function(e){
return new r(JSON.parse(e))
},n.toString=function(){
return i.toString()
},Object.defineProperty&&(Object.defineProperty(r,"$options",{
value:i.buildOpt()
}),Object.defineProperty(n,"$options",{
value:r.$options
}),Object.defineProperty(r,"$type",{
value:i
}),Object.defineProperty(n,"$type",{
value:i
})),r
}(t,this)
this._fields=[],this._fieldsById={},this._fieldsByName={},this._oneofsByName={}
for(var o,r=0,n=this.children.length;r<n;r++){
if((o=this.children[r])instanceof k||o instanceof u||o instanceof y){
if(a.hasOwnProperty(o.name)){
throw Error("Illegal reflect child of "+this.toString(!0)+": "+o.toString(!0)+" cannot override static property '"+o.name+"'")
}
a[o.name]=o.build()
}else if(o instanceof u.Field){
o.build(),this._fields.push(o),this._fieldsById[o.id]=o,
this._fieldsByName[o.name]=o
}else if(o instanceof u.OneOf){
this._oneofsByName[o.name]=o
}else if(!(o instanceof u.OneOf||o instanceof f)){
throw Error("Illegal reflect child of "+this.toString(!0)+": "+this.children[r].toString(!0))
}
}
return this.clazz=a
},p.encode=function(e,t,i){
for(var a,o,r=null,n=0,s=this._fields.length;n<s;++n){
o=e[(a=this._fields[n]).name],
a.required&&null===o?null===r&&(r=a):a.encode(i?o:a.verifyValue(o),t,e)
}
if(null!==r){
var l=Error("Missing at least one required field for "+this.toString(!0)+": "+r)
throw l.encoded=t,l
}
return t
},p.calculate=function(e){
for(var t,i,a=0,o=0,r=this._fields.length;o<r;++o){
if(i=e[(t=this._fields[o]).name],
t.required&&null===i){
throw Error("Missing at least one required field for "+this.toString(!0)+": "+t)
}
a+=t.calculate(i,e)
}
return a
},p.decode=function(e,i,a){
"number"!=typeof i&&(i=-1)
for(var o,r,n,s,l=e.offset,c=new this.clazz;e.offset<l+i||-1===i&&e.remaining()>0;){
if(n=(o=e.readVarint32())>>>3,
(r=7&o)===t.WIRE_TYPES.ENDGROUP){
if(n!==a){
throw Error("Illegal group end indicator for "+this.toString(!0)+": "+n+" ("+(a?a+" expected":"not a group")+")")
}
break
}
if(s=this._fieldsById[n]){
if(s.repeated&&!s.options.packed){
c[s.name].push(s.decode(r,e))
}else if(s.map){
var u=s.decode(r,e)
c[s.name].set(u[0],u[1])
}else if(c[s.name]=s.decode(r,e),s.oneof){
var p=c[s.oneof.name]
null!==p&&p!==s.name&&(c[p]=null),c[s.oneof.name]=s.name
}
}else{
switch(r){
case t.WIRE_TYPES.VARINT:
e.readVarint32()
break
case t.WIRE_TYPES.BITS32:
e.offset+=4
break
case t.WIRE_TYPES.BITS64:
e.offset+=8
break
case t.WIRE_TYPES.LDELIM:
var g=e.readVarint32()
e.offset+=g
break
case t.WIRE_TYPES.STARTGROUP:
for(;d(n,e);){}
break
default:
throw Error("Illegal wire type for unknown field "+n+" in "+this.toString(!0)+"#decode: "+r)
}
}
}
for(var m=0,h=this._fields.length;m<h;++m){
if(null===c[(s=this._fields[m]).name]){
if("proto3"===this.syntax){
c[s.name]=s.defaultValue
}else{
if(s.required){
var k=Error("Missing at least one required field for "+this.toString(!0)+": "+s.name)
throw k.decoded=c,k
}
t.populateDefaults&&null!==s.defaultValue&&(c[s.name]=s.defaultValue)
}
}
}
return c
},i.Message=u
var g=function(e,i,o,r,n,s,l,c,p,d){
a.call(this,e,i,s),this.className="Message.Field",
this.required="required"===o,this.repeated="repeated"===o,
this.map="map"===o,this.keyType=r||null,
this.type=n,this.resolvedType=null,this.id=l,
this.options=c||{},this.defaultValue=null,
this.oneof=p||null,this.syntax=d||"proto2",
this.originalName=this.name,this.element=null,
this.keyElement=null,!this.builder.options.convertFieldsToCamelCase||this instanceof u.ExtensionField||(this.name=t.Util.toCamelCase(this.name))
},m=g.prototype=Object.create(a.prototype)
m.build=function(){
this.element=new s(this.type,this.resolvedType,!1,this.syntax,this.name),
this.map&&(this.keyElement=new s(this.keyType,void 0,!0,this.syntax,this.name)),
"proto3"!==this.syntax||this.repeated||this.map?void 0!==this.options.default&&(this.defaultValue=this.verifyValue(this.options.default)):this.defaultValue=s.defaultFieldValue(this.type)
},
m.verifyValue=function(e,i){
i=i||!1
var a,o=this
function r(e,t){
throw Error("Illegal value for "+o.toString(!0)+" of type "+o.type.name+": "+e+" ("+t+")")
}
if(null===e){
return this.required&&r(typeof e,"required"),"proto3"===this.syntax&&this.type!==t.TYPES.message&&r(typeof e,"proto3 field without field presence cannot be null"),
null
}
if(this.repeated&&!i){
Array.isArray(e)||(e=[e])
var n=[]
for(a=0;a<e.length;a++){
n.push(this.element.verifyValue(e[a]))
}
return n
}
return this.map&&!i?e instanceof t.Map?e:(e instanceof Object||r(typeof e,"expected ProtoBuf.Map or raw object for map field"),
new t.Map(this,e)):(!this.repeated&&Array.isArray(e)&&r(typeof e,"no array expected"),
this.element.verifyValue(e))
},m.hasWirePresence=function(e,i){
if("proto3"!==this.syntax){
return null!==e
}
if(this.oneof&&i[this.oneof.name]===this.name){
return!0
}
switch(this.type){
case t.TYPES.int32:
case t.TYPES.sint32:
case t.TYPES.sfixed32:
case t.TYPES.uint32:
case t.TYPES.fixed32:
return 0!==e
case t.TYPES.int64:
case t.TYPES.sint64:
case t.TYPES.sfixed64:
case t.TYPES.uint64:
case t.TYPES.fixed64:
return 0!==e.low||0!==e.high
case t.TYPES.bool:
return e
case t.TYPES.float:
case t.TYPES.double:
return 0!==e
case t.TYPES.string:
return e.length>0
case t.TYPES.bytes:
return e.remaining()>0
case t.TYPES.enum:
return 0!==e
case t.TYPES.message:
return null!==e
default:
return!0
}
},m.encode=function(i,a,o){
if(null===this.type||"object"!=typeof this.type){
throw Error("[INTERNAL] Unresolved type in "+this.toString(!0)+": "+this.type)
}
if(null===i||this.repeated&&0==i.length){
return a
}
try{
var r
if(this.repeated){
if(this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0){
a.writeVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),
a.ensureCapacity(a.offset+=1)
var n=a.offset
for(r=0;r<i.length;r++){
this.element.encodeValue(this.id,i[r],a)
}
var s=a.offset-n,l=e.calculateVarint32(s)
if(l>1){
var c=a.slice(n,a.offset)
n+=l-1,a.offset=n,a.append(c)
}
a.writeVarint32(s,n-l)
}else{
for(r=0;r<i.length;r++){
a.writeVarint32(this.id<<3|this.type.wireType),this.element.encodeValue(this.id,i[r],a)
}
}
}else{
this.map?i.forEach((function(i,o,r){
var n=e.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,o)+e.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,i)
a.writeVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),a.writeVarint32(n),a.writeVarint32(8|this.keyType.wireType),
this.keyElement.encodeValue(1,o,a),
a.writeVarint32(16|this.type.wireType),this.element.encodeValue(2,i,a)
}),this):this.hasWirePresence(i,o)&&(a.writeVarint32(this.id<<3|this.type.wireType),
this.element.encodeValue(this.id,i,a))
}
}catch(e){
throw Error("Illegal value for "+this.toString(!0)+": "+i+" ("+e+")")
}
return a
},m.calculate=function(i,a){
if(i=this.verifyValue(i),null===this.type||"object"!=typeof this.type){
throw Error("[INTERNAL] Unresolved type in "+this.toString(!0)+": "+this.type)
}
if(null===i||this.repeated&&0==i.length){
return 0
}
var o=0
try{
var r,n
if(this.repeated){
if(this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0){
for(o+=e.calculateVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),
n=0,r=0;r<i.length;r++){
n+=this.element.calculateLength(this.id,i[r])
}
o+=e.calculateVarint32(n),o+=n
}else{
for(r=0;r<i.length;r++){
o+=e.calculateVarint32(this.id<<3|this.type.wireType),o+=this.element.calculateLength(this.id,i[r])
}
}
}else{
this.map?i.forEach((function(i,a,r){
var n=e.calculateVarint32(8|this.keyType.wireType)+this.keyElement.calculateLength(1,a)+e.calculateVarint32(16|this.type.wireType)+this.element.calculateLength(2,i)
o+=e.calculateVarint32(this.id<<3|t.WIRE_TYPES.LDELIM),o+=e.calculateVarint32(n),
o+=n
}),this):this.hasWirePresence(i,a)&&(o+=e.calculateVarint32(this.id<<3|this.type.wireType),
o+=this.element.calculateLength(this.id,i))
}
}catch(e){
throw Error("Illegal value for "+this.toString(!0)+": "+i+" ("+e+")")
}
return o
},m.decode=function(e,i,a){
var o,r
if(!(!this.map&&e==this.type.wireType||!a&&this.repeated&&this.options.packed&&e==t.WIRE_TYPES.LDELIM||this.map&&e==t.WIRE_TYPES.LDELIM)){
throw Error("Illegal wire type for field "+this.toString(!0)+": "+e+" ("+this.type.wireType+" expected)")
}
if(e==t.WIRE_TYPES.LDELIM&&this.repeated&&this.options.packed&&t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType)>=0&&!a){
r=i.readVarint32(),
r=i.offset+r
for(var n=[];i.offset<r;){
n.push(this.decode(this.type.wireType,i,!0))
}
return n
}
if(this.map){
var l=s.defaultFieldValue(this.keyType)
if(o=s.defaultFieldValue(this.type),r=i.readVarint32(),i.remaining()<r){
throw Error("Illegal number of bytes for "+this.toString(!0)+": "+r+" required but got only "+i.remaining())
}
var c=i.clone()
for(c.limit=c.offset+r,i.offset+=r;c.remaining()>0;){
var u=c.readVarint32()
e=7&u
var p=u>>>3
if(1===p){
l=this.keyElement.decode(c,e,p)
}else{
if(2!==p){
throw Error("Unexpected tag in map field key/value submessage")
}
o=this.element.decode(c,e,p)
}
}
return[l,o]
}
return this.element.decode(i,e,this.id)
},i.Message.Field=g
var h=function(e,t,i,a,o,r,n){
g.call(this,e,t,i,null,a,o,r,n),this.extension
}
h.prototype=Object.create(g.prototype),i.Message.ExtensionField=h,i.Message.OneOf=function(e,t,i){
a.call(this,e,t,i),
this.fields=[]
}
var k=function(e,t,i,a,o){
r.call(this,e,t,i,a,o),this.className="Enum",this.object=null
}
k.getName=function(e,t){
for(var i,a=Object.keys(e),o=0;o<a.length;++o){
if(e[i=a[o]]===t){
return i
}
}
return null
},(k.prototype=Object.create(r.prototype)).build=function(e){
if(this.object&&!e){
return this.object
}
for(var i=new t.Builder.Enum,a=this.getChildren(k.Value),o=0,r=a.length;o<r;++o){
i[a[o].name]=a[o].id
}
return Object.defineProperty&&Object.defineProperty(i,"$options",{
value:this.buildOpt(),
enumerable:!1
}),this.object=i
},i.Enum=k
var b=function(e,t,i,o){
a.call(this,e,t,i),this.className="Enum.Value",this.id=o
}
b.prototype=Object.create(a.prototype),i.Enum.Value=b
var f=function(e,t,i,o){
a.call(this,e,t,i),this.field=o
}
f.prototype=Object.create(a.prototype),i.Extension=f
var y=function(e,t,i,a){
r.call(this,e,t,i,a),this.className="Service",this.clazz=null
}
;(y.prototype=Object.create(r.prototype)).build=function(i){
return this.clazz&&!i?this.clazz:this.clazz=function(t,i){
for(var a=function(e){
t.Builder.Service.call(this),this.rpcImpl=e||function(e,t,i){
setTimeout(i.bind(this,Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")),0)
}
},o=a.prototype=Object.create(t.Builder.Service.prototype),r=i.getChildren(t.Reflect.Service.RPCMethod),n=0;n<r.length;n++){
!function(t){
o[t.name]=function(a,o){
try{
try{
a=t.resolvedRequestType.clazz.decode(e.wrap(a))
}catch(e){
if(!(e instanceof TypeError)){
throw e
}
}
if(null===a||"object"!=typeof a){
throw Error("Illegal arguments")
}
a instanceof t.resolvedRequestType.clazz||(a=new t.resolvedRequestType.clazz(a)),
this.rpcImpl(t.fqn(),a,(function(e,a){
if(e){
o(e)
}else{
null===a&&(a="")
try{
a=t.resolvedResponseType.clazz.decode(a)
}catch(e){}
a&&a instanceof t.resolvedResponseType.clazz?o(null,a):o(Error("Illegal response type received in service method "+i.name+"#"+t.name))
}
}))
}catch(e){
setTimeout(o.bind(this,e),0)
}
},a[t.name]=function(e,i,o){
new a(e)[t.name](i,o)
},Object.defineProperty&&(Object.defineProperty(a[t.name],"$options",{
value:t.buildOpt()
}),Object.defineProperty(o[t.name],"$options",{
value:a[t.name].$options
}))
}(r[n])
}
return Object.defineProperty&&(Object.defineProperty(a,"$options",{
value:i.buildOpt()
}),Object.defineProperty(o,"$options",{
value:a.$options
}),Object.defineProperty(a,"$type",{
value:i
}),Object.defineProperty(o,"$type",{
value:i
})),a
}(t,this)
},i.Service=y
var v=function(e,t,i,o){
a.call(this,e,t,i),this.className="Service.Method",this.options=o||{}
}
;(v.prototype=Object.create(a.prototype)).buildOpt=n.buildOpt,i.Service.Method=v
var w=function(e,t,i,a,o,r,n,s){
v.call(this,e,t,i,s),this.className="Service.RPCMethod",
this.requestName=a,this.responseName=o,
this.requestStream=r,this.responseStream=n,
this.resolvedRequestType=null,this.resolvedResponseType=null
}
return w.prototype=Object.create(v.prototype),i.Service.RPCMethod=w,i
}(r),r.Builder=function(e,t,a){
var o=function(e){
this.ns=new a.Namespace(this,null,""),this.ptr=this.ns,this.resolved=!1,
this.result=null,
this.files={},this.importRoot=null,this.options=e||{}
},r=o.prototype
return o.isMessage=function(e){
return"string"==typeof e.name&&void 0===e.values&&void 0===e.rpc
},o.isMessageField=function(e){
return"string"==typeof e.rule&&"string"==typeof e.name&&"string"==typeof e.type&&void 0!==e.id
},
o.isEnum=function(e){
return"string"==typeof e.name&&!(void 0===e.values||!Array.isArray(e.values)||0===e.values.length)
},
o.isService=function(e){
return!("string"!=typeof e.name||"object"!=typeof e.rpc||!e.rpc)
},o.isExtend=function(e){
return"string"==typeof e.ref
},r.reset=function(){
return this.ptr=this.ns,this
},r.define=function(e){
if("string"!=typeof e||!t.TYPEREF.test(e)){
throw Error("illegal namespace: "+e)
}
return e.split(".").forEach((function(e){
var t=this.ptr.getChild(e)
null===t&&this.ptr.addChild(t=new a.Namespace(this,this.ptr,e)),this.ptr=t
}),this),
this
},r.create=function(t){
if(!t){
return this
}
if(Array.isArray(t)){
if(0===t.length){
return this
}
t=t.slice()
}else{
t=[t]
}
for(var i=[t];i.length>0;){
if(t=i.pop(),!Array.isArray(t)){
throw Error("not a valid namespace: "+JSON.stringify(t))
}
for(;t.length>0;){
var r=t.shift()
if(o.isMessage(r)){
var n=new a.Message(this,this.ptr,r.name,r.options,r.isGroup,r.syntax),s={}
r.oneofs&&Object.keys(r.oneofs).forEach((function(e){
n.addChild(s[e]=new a.Message.OneOf(this,n,e))
}),this),r.fields&&r.fields.forEach((function(e){
if(null!==n.getChild(0|e.id)){
throw Error("duplicate or invalid field id in "+n.name+": "+e.id)
}
if(e.options&&"object"!=typeof e.options){
throw Error("illegal field options in "+n.name+"#"+e.name)
}
var t=null
if("string"==typeof e.oneof&&!(t=s[e.oneof])){
throw Error("illegal oneof in "+n.name+"#"+e.name+": "+e.oneof)
}
e=new a.Message.Field(this,n,e.rule,e.keytype,e.type,e.name,e.id,e.options,t,r.syntax),
t&&t.fields.push(e),
n.addChild(e)
}),this)
var l=[]
if(r.enums&&r.enums.forEach((function(e){
l.push(e)
})),r.messages&&r.messages.forEach((function(e){
l.push(e)
})),r.services&&r.services.forEach((function(e){
l.push(e)
})),r.extensions&&("number"==typeof r.extensions[0]?n.extensions=[r.extensions]:n.extensions=r.extensions),
this.ptr.addChild(n),
l.length>0){
i.push(t),t=l,l=null,this.ptr=n,n=null
continue
}
l=null
}else if(o.isEnum(r)){
n=new a.Enum(this,this.ptr,r.name,r.options,r.syntax),r.values.forEach((function(e){
n.addChild(new a.Enum.Value(this,n,e.name,e.id))
}),this),this.ptr.addChild(n)
}else if(o.isService(r)){
n=new a.Service(this,this.ptr,r.name,r.options),Object.keys(r.rpc).forEach((function(e){
var t=r.rpc[e]
n.addChild(new a.Service.RPCMethod(this,n,e,t.request,t.response,!!t.request_stream,!!t.response_stream,t.options))
}),this),
this.ptr.addChild(n)
}else{
if(!o.isExtend(r)){
throw Error("not a valid definition: "+JSON.stringify(r))
}
if(n=this.ptr.resolve(r.ref,!0)){
r.fields.forEach((function(t){
if(null!==n.getChild(0|t.id)){
throw Error("duplicate extended field id in "+n.name+": "+t.id)
}
if(n.extensions){
var i=!1
if(n.extensions.forEach((function(e){
t.id>=e[0]&&t.id<=e[1]&&(i=!0)
})),!i){
throw Error("illegal extended field id in "+n.name+": "+t.id+" (not within valid ranges)")
}
}
var o=t.name
this.options.convertFieldsToCamelCase&&(o=e.Util.toCamelCase(o))
var r=new a.Message.ExtensionField(this,n,t.rule,t.type,this.ptr.fqn()+"."+o,t.id,t.options),s=new a.Extension(this,this.ptr,t.name,r)
r.extension=s,this.ptr.addChild(s),n.addChild(r)
}),this)
}else if(!/\.?google\.protobuf\./.test(r.ref)){
throw Error("extended message "+r.ref+" is not defined")
}
}
r=null,n=null
}
t=null,this.ptr=this.ptr.parent
}
return this.resolved=!1,this.result=null,this
},r.import=function(t,a){
var o="/"
if("string"==typeof a){
if(e.Util.IS_NODE&&(a=i(7).resolve(a)),!0===this.files[a]){
return this.reset()
}
this.files[a]=!0
}else if("object"==typeof a){
var r,n=a.root
if(e.Util.IS_NODE&&(n=i(7).resolve(n)),(n.indexOf("\\")>=0||a.file.indexOf("\\")>=0)&&(o="\\"),
r=e.Util.IS_NODE?i(7).join(n,a.file):n+o+a.file,
!0===this.files[r]){
return this.reset()
}
this.files[r]=!0
}
if(t.imports&&t.imports.length>0){
var s,l=!1
"object"==typeof a?(this.importRoot=a.root,l=!0,s=this.importRoot,a=a.file,(s.indexOf("\\")>=0||a.indexOf("\\")>=0)&&(o="\\")):"string"==typeof a?this.importRoot?s=this.importRoot:a.indexOf("/")>=0?""===(s=a.replace(/\/[^\/]*$/,""))&&(s="/"):a.indexOf("\\")>=0?(s=a.replace(/\\[^\\]*$/,""),
o="\\"):s=".":s=null
for(var c=0;c<t.imports.length;c++){
if("string"==typeof t.imports[c]){
if(!s){
throw Error("cannot determine import root")
}
var u=t.imports[c]
if("google/protobuf/descriptor.proto"===u){
continue
}
if(u=e.Util.IS_NODE?i(7).join(s,u):s+o+u,!0===this.files[u]){
continue
}
/\.proto$/i.test(u)&&!e.DotProto&&(u=u.replace(/\.proto$/,".json"))
var p=e.Util.fetch(u)
if(null===p){
throw Error("failed to import '"+u+"' in '"+a+"': file not found")
}
/\.json$/i.test(u)?this.import(JSON.parse(p+""),u):this.import(e.DotProto.Parser.parse(p),u)
}else{
a?/\.(\w+)$/.test(a)?this.import(t.imports[c],a.replace(/^(.+)\.(\w+)$/,(function(e,t,i){
return t+"_import"+c+"."+i
}))):this.import(t.imports[c],a+"_import"+c):this.import(t.imports[c])
}
}
l&&(this.importRoot=null)
}
t.package&&this.define(t.package),t.syntax&&function e(t){
t.messages&&t.messages.forEach((function(i){
i.syntax=t.syntax,e(i)
})),t.enums&&t.enums.forEach((function(e){
e.syntax=t.syntax
}))
}(t)
var d=this.ptr
return t.options&&Object.keys(t.options).forEach((function(e){
d.options[e]=t.options[e]
})),t.messages&&(this.create(t.messages),this.ptr=d),t.enums&&(this.create(t.enums),
this.ptr=d),
t.services&&(this.create(t.services),this.ptr=d),t.extends&&this.create(t.extends),
this.reset()
},r.resolveAll=function(){
var i
if(null==this.ptr||"object"==typeof this.ptr.type){
return this
}
if(this.ptr instanceof a.Namespace){
this.ptr.children.forEach((function(e){
this.ptr=e,this.resolveAll()
}),this)
}else if(this.ptr instanceof a.Message.Field){
if(t.TYPE.test(this.ptr.type)){
this.ptr.type=e.TYPES[this.ptr.type]
}else{
if(!t.TYPEREF.test(this.ptr.type)){
throw Error("illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.type)
}
if(!(i=(this.ptr instanceof a.Message.ExtensionField?this.ptr.extension.parent:this.ptr.parent).resolve(this.ptr.type,!0))){
throw Error("unresolvable type reference in "+this.ptr.toString(!0)+": "+this.ptr.type)
}
if(this.ptr.resolvedType=i,i instanceof a.Enum){
if(this.ptr.type=e.TYPES.enum,"proto3"===this.ptr.syntax&&"proto3"!==i.syntax){
throw Error("proto3 message cannot reference proto2 enum")
}
}else{
if(!(i instanceof a.Message)){
throw Error("illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.type)
}
this.ptr.type=i.isGroup?e.TYPES.group:e.TYPES.message
}
}
if(this.ptr.map){
if(!t.TYPE.test(this.ptr.keyType)){
throw Error("illegal key type for map field in "+this.ptr.toString(!0)+": "+this.ptr.keyType)
}
this.ptr.keyType=e.TYPES[this.ptr.keyType]
}
"proto3"===this.ptr.syntax&&this.ptr.repeated&&void 0===this.ptr.options.packed&&-1!==e.PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType)&&(this.ptr.options.packed=!0)
}else if(this.ptr instanceof e.Reflect.Service.Method){
if(!(this.ptr instanceof e.Reflect.Service.RPCMethod)){
throw Error("illegal service type in "+this.ptr.toString(!0))
}
if(!((i=this.ptr.parent.resolve(this.ptr.requestName,!0))&&i instanceof e.Reflect.Message)){
throw Error("Illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.requestName)
}
if(this.ptr.resolvedRequestType=i,!((i=this.ptr.parent.resolve(this.ptr.responseName,!0))&&i instanceof e.Reflect.Message)){
throw Error("Illegal type reference in "+this.ptr.toString(!0)+": "+this.ptr.responseName)
}
this.ptr.resolvedResponseType=i
}else if(!(this.ptr instanceof e.Reflect.Message.OneOf||this.ptr instanceof e.Reflect.Extension||this.ptr instanceof e.Reflect.Enum.Value)){
throw Error("illegal object in namespace: "+typeof this.ptr+": "+this.ptr)
}
return this.reset()
},r.build=function(e){
if(this.reset(),this.resolved||(this.resolveAll(),this.resolved=!0,
this.result=null),
null===this.result&&(this.result=this.ns.build()),!e){
return this.result
}
for(var t="string"==typeof e?e.split("."):e,i=this.result,a=0;a<t.length;a++){
if(!i[t[a]]){
i=null
break
}
i=i[t[a]]
}
return i
},r.lookup=function(e,t){
return e?this.ns.resolve(e,t):this.ns
},r.toString=function(){
return"Builder"
},o.Message=function(){},o.Enum=function(){},o.Service=function(){},
o
}(r,r.Lang,r.Reflect),r.Map=function(e,t){
var i=function(e,i){
if(!e.map){
throw Error("field is not a map")
}
if(this.field=e,this.keyElem=new t.Element(e.keyType,null,!0,e.syntax),this.valueElem=new t.Element(e.type,e.resolvedType,!1,e.syntax),
this.map={},
Object.defineProperty(this,"size",{
get:function(){
return Object.keys(this.map).length
}
}),i){
for(var a=Object.keys(i),o=0;o<a.length;o++){
var r=this.keyElem.valueFromString(a[o]),n=this.valueElem.verifyValue(i[a[o]])
this.map[this.keyElem.valueToString(r)]={
key:r,
value:n
}
}
}
},a=i.prototype
function o(e){
var t=0
return{
next:function(){
return t<e.length?{
done:!1,
value:e[t++]
}:{
done:!0
}
}
}
}
return a.clear=function(){
this.map={}
},a.delete=function(e){
var t=this.keyElem.valueToString(this.keyElem.verifyValue(e)),i=t in this.map
return delete this.map[t],i
},a.entries=function(){
for(var e,t=[],i=Object.keys(this.map),a=0;a<i.length;a++){
t.push([(e=this.map[i[a]]).key,e.value])
}
return o(t)
},a.keys=function(){
for(var e=[],t=Object.keys(this.map),i=0;i<t.length;i++){
e.push(this.map[t[i]].key)
}
return o(e)
},a.values=function(){
for(var e=[],t=Object.keys(this.map),i=0;i<t.length;i++){
e.push(this.map[t[i]].value)
}
return o(e)
},a.forEach=function(e,t){
for(var i,a=Object.keys(this.map),o=0;o<a.length;o++){
e.call(t,(i=this.map[a[o]]).value,i.key,this)
}
},a.set=function(e,t){
var i=this.keyElem.verifyValue(e),a=this.valueElem.verifyValue(t)
return this.map[this.keyElem.valueToString(i)]={
key:i,
value:a
},this
},a.get=function(e){
var t=this.keyElem.valueToString(this.keyElem.verifyValue(e))
if(t in this.map){
return this.map[t].value
}
},a.has=function(e){
return this.keyElem.valueToString(this.keyElem.verifyValue(e))in this.map
},i
}(0,r.Reflect),r.loadProto=function(e,t,i){
return("string"==typeof t||t&&"string"==typeof t.file&&"string"==typeof t.root)&&(i=t,
t=void 0),
r.loadJson(r.DotProto.Parser.parse(e),t,i)
},r.protoFromString=r.loadProto,r.loadProtoFile=function(e,t,i){
if(t&&"object"==typeof t?(i=t,
t=null):t&&"function"==typeof t||(t=null),t){
return r.Util.fetch("string"==typeof e?e:e.root+"/"+e.file,(function(a){
if(null!==a){
try{
t(null,r.loadProto(a,i,e))
}catch(e){
t(e)
}
}else{
t(Error("Failed to fetch file"))
}
}))
}
var a=r.Util.fetch("object"==typeof e?e.root+"/"+e.file:e)
return null===a?null:r.loadProto(a,i,e)
},r.protoFromFile=r.loadProtoFile,r.newBuilder=function(e){
return void 0===(e=e||{}).convertFieldsToCamelCase&&(e.convertFieldsToCamelCase=r.convertFieldsToCamelCase),
void 0===e.populateAccessors&&(e.populateAccessors=r.populateAccessors),
new r.Builder(e)
},r.loadJson=function(e,t,i){
return("string"==typeof t||t&&"string"==typeof t.file&&"string"==typeof t.root)&&(i=t,
t=null),
t&&"object"==typeof t||(t=r.newBuilder()),"string"==typeof e&&(e=JSON.parse(e)),
t.import(e,i),
t.resolveAll(),t
},r.loadJsonFile=function(e,t,i){
if(t&&"object"==typeof t?(i=t,t=null):t&&"function"==typeof t||(t=null),
t){
return r.Util.fetch("string"==typeof e?e:e.root+"/"+e.file,(function(a){
if(null!==a){
try{
t(null,r.loadJson(JSON.parse(a),i,e))
}catch(e){
t(e)
}
}else{
t(Error("Failed to fetch file"))
}
}))
}
var a=r.Util.fetch("object"==typeof e?e.root+"/"+e.file:e)
return null===a?null:r.loadJson(JSON.parse(a),i,e)
},r
})?o.apply(t,r):o)||(e.exports=n)
}).call(this,i(6))
},function(e,t,i){
var a,o,r
o=[i(36)],void 0===(r="function"==typeof(a=function(e){
"use strict"
var t=function(e,i,o){
if(void 0===e&&(e=t.DEFAULT_CAPACITY),void 0===i&&(i=t.DEFAULT_ENDIAN),
void 0===o&&(o=t.DEFAULT_NOASSERT),
!o){
if((e|=0)<0){
throw RangeError("Illegal capacity")
}
i=!!i,o=!!o
}
this.buffer=0===e?a:new ArrayBuffer(e),this.view=0===e?null:new Uint8Array(this.buffer),
this.offset=0,
this.markedOffset=-1,this.limit=e,this.littleEndian=i,this.noAssert=o
}
t.VERSION="5.0.1",t.LITTLE_ENDIAN=!0,t.BIG_ENDIAN=!1,t.DEFAULT_CAPACITY=16,t.DEFAULT_ENDIAN=t.BIG_ENDIAN,
t.DEFAULT_NOASSERT=!1,
t.Long=e||null
var i=t.prototype
i.__isByteBuffer__,Object.defineProperty(i,"__isByteBuffer__",{
value:!0,
enumerable:!1,
configurable:!1
})
var a=new ArrayBuffer(0),o=String.fromCharCode
function r(e){
var t=0
return function(){
return t<e.length?e.charCodeAt(t++):null
}
}
function n(){
var e=[],t=[]
return function(){
if(0===arguments.length){
return t.join("")+o.apply(String,e)
}
e.length+arguments.length>1024&&(t.push(o.apply(String,e)),e.length=0),Array.prototype.push.apply(e,arguments)
}
}
function s(e,t,i,a,o){
var r,n,s=8*o-a-1,l=(1<<s)-1,c=l>>1,u=-7,p=i?o-1:0,d=i?-1:1,g=e[t+p]
for(p+=d,r=g&(1<<-u)-1,g>>=-u,u+=s;u>0;r=256*r+e[t+p],p+=d,u-=8){}
for(n=r&(1<<-u)-1,
r>>=-u,u+=a;u>0;n=256*n+e[t+p],p+=d,u-=8){}
if(0===r){
r=1-c
}else{
if(r===l){
return n?NaN:1/0*(g?-1:1)
}
n+=Math.pow(2,a),r-=c
}
return(g?-1:1)*n*Math.pow(2,r-a)
}
function l(e,t,i,a,o,r){
var n,s,l,c=8*r-o-1,u=(1<<c)-1,p=u>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,g=a?0:r-1,m=a?1:-1,h=t<0||0===t&&1/t<0?1:0
for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,n=u):(n=Math.floor(Math.log(t)/Math.LN2),
t*(l=Math.pow(2,-n))<1&&(n--,
l*=2),(t+=n+p>=1?d/l:d*Math.pow(2,1-p))*l>=2&&(n++,
l/=2),n+p>=u?(s=0,n=u):n+p>=1?(s=(t*l-1)*Math.pow(2,o),
n+=p):(s=t*Math.pow(2,p-1)*Math.pow(2,o),
n=0));o>=8;e[i+g]=255&s,g+=m,s/=256,o-=8){}
for(n=n<<o|s,c+=o;c>0;e[i+g]=255&n,g+=m,
n/=256,c-=8){}
e[i+g-m]|=128*h
}
t.accessor=function(){
return Uint8Array
},t.allocate=function(e,i,a){
return new t(e,i,a)
},t.concat=function(e,i,a,o){
"boolean"!=typeof i&&"string"==typeof i||(o=a,a=i,i=void 0)
for(var r,n=0,s=0,l=e.length;s<l;++s){
t.isByteBuffer(e[s])||(e[s]=t.wrap(e[s],i)),
(r=e[s].limit-e[s].offset)>0&&(n+=r)
}
if(0===n){
return new t(0,a,o)
}
var c,u=new t(n,a,o)
for(s=0;s<l;){
(r=(c=e[s++]).limit-c.offset)<=0||(u.view.set(c.view.subarray(c.offset,c.limit),u.offset),
u.offset+=r)
}
return u.limit=u.offset,u.offset=0,u
},t.isByteBuffer=function(e){
return!0===(e&&e.__isByteBuffer__)
},t.type=function(){
return ArrayBuffer
},t.wrap=function(e,a,o,r){
if("string"!=typeof a&&(r=o,o=a,a=void 0),"string"==typeof e){
switch(void 0===a&&(a="utf8"),
a){
case"base64":
return t.fromBase64(e,o)
case"hex":
return t.fromHex(e,o)
case"binary":
return t.fromBinary(e,o)
case"utf8":
return t.fromUTF8(e,o)
case"debug":
return t.fromDebug(e,o)
default:
throw Error("Unsupported encoding: "+a)
}
}
if(null===e||"object"!=typeof e){
throw TypeError("Illegal buffer")
}
var n
if(t.isByteBuffer(e)){
return(n=i.clone.call(e)).markedOffset=-1,n
}
if(e instanceof Uint8Array){
n=new t(0,o,r),e.length>0&&(n.buffer=e.buffer,n.offset=e.byteOffset,
n.limit=e.byteOffset+e.byteLength,
n.view=new Uint8Array(e.buffer))
}else if(e instanceof ArrayBuffer){
n=new t(0,o,r),e.byteLength>0&&(n.buffer=e,n.offset=0,
n.limit=e.byteLength,n.view=e.byteLength>0?new Uint8Array(e):null)
}else{
if("[object Array]"!==Object.prototype.toString.call(e)){
throw TypeError("Illegal buffer")
}
(n=new t(e.length,o,r)).limit=e.length
for(var s=0;s<e.length;++s){
n.view[s]=e[s]
}
}
return n
},i.writeBitSet=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if(!(e instanceof Array)){
throw TypeError("Illegal BitSet: Not an array")
}
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
var a,o=t,r=e.length,n=r>>3,s=0
for(t+=this.writeVarint32(r,t);n--;){
a=1&!!e[s++]|(1&!!e[s++])<<1|(1&!!e[s++])<<2|(1&!!e[s++])<<3|(1&!!e[s++])<<4|(1&!!e[s++])<<5|(1&!!e[s++])<<6|(1&!!e[s++])<<7,
this.writeByte(a,t++)
}
if(s<r){
var l=0
for(a=0;s<r;){
a|=(1&!!e[s++])<<l++
}
this.writeByte(a,t++)
}
return i?(this.offset=t,this):t-o
},i.readBitSet=function(e){
var t=void 0===e
t&&(e=this.offset)
var i,a=this.readVarint32(e),o=a.value,r=o>>3,n=0,s=[]
for(e+=a.length;r--;){
i=this.readByte(e++),s[n++]=!!(1&i),s[n++]=!!(2&i),s[n++]=!!(4&i),
s[n++]=!!(8&i),
s[n++]=!!(16&i),s[n++]=!!(32&i),s[n++]=!!(64&i),s[n++]=!!(128&i)
}
if(n<o){
var l=0
for(i=this.readByte(e++);n<o;){
s[n++]=!!(i>>l++&1)
}
}
return t&&(this.offset=e),s
},i.readBytes=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+e>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+"+e+") <= "+this.buffer.byteLength)
}
}
var a=this.slice(t,t+e)
return i&&(this.offset+=e),a
},i.writeBytes=i.append,i.writeInt8=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal value: "+e+" (not an integer)")
}
if(e|=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
t+=1
var a=this.buffer.byteLength
return t>a&&this.resize((a*=2)>t?a:t),t-=1,this.view[t]=e,i&&(this.offset+=1),this
},
i.writeByte=i.writeInt8,i.readInt8=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+1>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)
}
}
var i=this.view[e]
return 128==(128&i)&&(i=-(255-i+1)),t&&(this.offset+=1),i
},i.readByte=i.readInt8,
i.writeUint8=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal value: "+e+" (not an integer)")
}
if(e>>>=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
t+=1
var a=this.buffer.byteLength
return t>a&&this.resize((a*=2)>t?a:t),t-=1,this.view[t]=e,i&&(this.offset+=1),this
},
i.writeUInt8=i.writeUint8,i.readUint8=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+1>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)
}
}
var i=this.view[e]
return t&&(this.offset+=1),i
},i.readUInt8=i.readUint8,i.writeInt16=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal value: "+e+" (not an integer)")
}
if(e|=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
t+=2
var a=this.buffer.byteLength
return t>a&&this.resize((a*=2)>t?a:t),t-=2,this.littleEndian?(this.view[t+1]=(65280&e)>>>8,
this.view[t]=255&e):(this.view[t]=(65280&e)>>>8,
this.view[t+1]=255&e),i&&(this.offset+=2),
this
},i.writeShort=i.writeInt16,i.readInt16=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+2>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+2) <= "+this.buffer.byteLength)
}
}
var i=0
return this.littleEndian?(i=this.view[e],i|=this.view[e+1]<<8):(i=this.view[e]<<8,
i|=this.view[e+1]),
32768==(32768&i)&&(i=-(65535-i+1)),t&&(this.offset+=2),i
},i.readShort=i.readInt16,
i.writeUint16=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal value: "+e+" (not an integer)")
}
if(e>>>=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
t+=2
var a=this.buffer.byteLength
return t>a&&this.resize((a*=2)>t?a:t),t-=2,this.littleEndian?(this.view[t+1]=(65280&e)>>>8,
this.view[t]=255&e):(this.view[t]=(65280&e)>>>8,
this.view[t+1]=255&e),i&&(this.offset+=2),
this
},i.writeUInt16=i.writeUint16,i.readUint16=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+2>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+2) <= "+this.buffer.byteLength)
}
}
var i=0
return this.littleEndian?(i=this.view[e],i|=this.view[e+1]<<8):(i=this.view[e]<<8,
i|=this.view[e+1]),
t&&(this.offset+=2),i
},i.readUInt16=i.readUint16,i.writeInt32=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal value: "+e+" (not an integer)")
}
if(e|=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
t+=4
var a=this.buffer.byteLength
return t>a&&this.resize((a*=2)>t?a:t),t-=4,this.littleEndian?(this.view[t+3]=e>>>24&255,
this.view[t+2]=e>>>16&255,
this.view[t+1]=e>>>8&255,this.view[t]=255&e):(this.view[t]=e>>>24&255,
this.view[t+1]=e>>>16&255,
this.view[t+2]=e>>>8&255,this.view[t+3]=255&e),i&&(this.offset+=4),
this
},i.writeInt=i.writeInt32,i.readInt32=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+4>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)
}
}
var i=0
return this.littleEndian?(i=this.view[e+2]<<16,i|=this.view[e+1]<<8,i|=this.view[e],
i+=this.view[e+3]<<24>>>0):(i=this.view[e+1]<<16,
i|=this.view[e+2]<<8,i|=this.view[e+3],
i+=this.view[e]<<24>>>0),i|=0,t&&(this.offset+=4),
i
},i.readInt=i.readInt32,i.writeUint32=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal value: "+e+" (not an integer)")
}
if(e>>>=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
t+=4
var a=this.buffer.byteLength
return t>a&&this.resize((a*=2)>t?a:t),t-=4,this.littleEndian?(this.view[t+3]=e>>>24&255,
this.view[t+2]=e>>>16&255,
this.view[t+1]=e>>>8&255,this.view[t]=255&e):(this.view[t]=e>>>24&255,
this.view[t+1]=e>>>16&255,
this.view[t+2]=e>>>8&255,this.view[t+3]=255&e),i&&(this.offset+=4),
this
},i.writeUInt32=i.writeUint32,i.readUint32=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+4>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)
}
}
var i=0
return this.littleEndian?(i=this.view[e+2]<<16,i|=this.view[e+1]<<8,i|=this.view[e],
i+=this.view[e+3]<<24>>>0):(i=this.view[e+1]<<16,
i|=this.view[e+2]<<8,i|=this.view[e+3],
i+=this.view[e]<<24>>>0),t&&(this.offset+=4),
i
},i.readUInt32=i.readUint32,e&&(i.writeInt64=function(t,i){
var a=void 0===i
if(a&&(i=this.offset),!this.noAssert){
if("number"==typeof t){
t=e.fromNumber(t)
}else if("string"==typeof t){
t=e.fromString(t)
}else if(!(t&&t instanceof e)){
throw TypeError("Illegal value: "+t+" (not an integer or Long)")
}
if("number"!=typeof i||i%1!=0){
throw TypeError("Illegal offset: "+i+" (not an integer)")
}
if((i>>>=0)<0||i+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+i+" (+0) <= "+this.buffer.byteLength)
}
}
"number"==typeof t?t=e.fromNumber(t):"string"==typeof t&&(t=e.fromString(t)),i+=8
var o=this.buffer.byteLength
i>o&&this.resize((o*=2)>i?o:i),i-=8
var r=t.low,n=t.high
return this.littleEndian?(this.view[i+3]=r>>>24&255,this.view[i+2]=r>>>16&255,this.view[i+1]=r>>>8&255,
this.view[i]=255&r,
i+=4,this.view[i+3]=n>>>24&255,this.view[i+2]=n>>>16&255,this.view[i+1]=n>>>8&255,
this.view[i]=255&n):(this.view[i]=n>>>24&255,
this.view[i+1]=n>>>16&255,this.view[i+2]=n>>>8&255,
this.view[i+3]=255&n,i+=4,this.view[i]=r>>>24&255,
this.view[i+1]=r>>>16&255,this.view[i+2]=r>>>8&255,
this.view[i+3]=255&r),a&&(this.offset+=8),
this
},i.writeLong=i.writeInt64,i.readInt64=function(t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+8>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+8) <= "+this.buffer.byteLength)
}
}
var a=0,o=0
this.littleEndian?(a=this.view[t+2]<<16,a|=this.view[t+1]<<8,a|=this.view[t],a+=this.view[t+3]<<24>>>0,
t+=4,
o=this.view[t+2]<<16,o|=this.view[t+1]<<8,o|=this.view[t],o+=this.view[t+3]<<24>>>0):(o=this.view[t+1]<<16,
o|=this.view[t+2]<<8,
o|=this.view[t+3],o+=this.view[t]<<24>>>0,t+=4,a=this.view[t+1]<<16,
a|=this.view[t+2]<<8,
a|=this.view[t+3],a+=this.view[t]<<24>>>0)
var r=new e(a,o,!1)
return i&&(this.offset+=8),r
},i.readLong=i.readInt64,i.writeUint64=function(t,i){
var a=void 0===i
if(a&&(i=this.offset),!this.noAssert){
if("number"==typeof t){
t=e.fromNumber(t)
}else if("string"==typeof t){
t=e.fromString(t)
}else if(!(t&&t instanceof e)){
throw TypeError("Illegal value: "+t+" (not an integer or Long)")
}
if("number"!=typeof i||i%1!=0){
throw TypeError("Illegal offset: "+i+" (not an integer)")
}
if((i>>>=0)<0||i+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+i+" (+0) <= "+this.buffer.byteLength)
}
}
"number"==typeof t?t=e.fromNumber(t):"string"==typeof t&&(t=e.fromString(t)),i+=8
var o=this.buffer.byteLength
i>o&&this.resize((o*=2)>i?o:i),i-=8
var r=t.low,n=t.high
return this.littleEndian?(this.view[i+3]=r>>>24&255,this.view[i+2]=r>>>16&255,this.view[i+1]=r>>>8&255,
this.view[i]=255&r,
i+=4,this.view[i+3]=n>>>24&255,this.view[i+2]=n>>>16&255,this.view[i+1]=n>>>8&255,
this.view[i]=255&n):(this.view[i]=n>>>24&255,
this.view[i+1]=n>>>16&255,this.view[i+2]=n>>>8&255,
this.view[i+3]=255&n,i+=4,this.view[i]=r>>>24&255,
this.view[i+1]=r>>>16&255,this.view[i+2]=r>>>8&255,
this.view[i+3]=255&r),a&&(this.offset+=8),
this
},i.writeUInt64=i.writeUint64,i.readUint64=function(t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+8>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+8) <= "+this.buffer.byteLength)
}
}
var a=0,o=0
this.littleEndian?(a=this.view[t+2]<<16,a|=this.view[t+1]<<8,a|=this.view[t],a+=this.view[t+3]<<24>>>0,
t+=4,
o=this.view[t+2]<<16,o|=this.view[t+1]<<8,o|=this.view[t],o+=this.view[t+3]<<24>>>0):(o=this.view[t+1]<<16,
o|=this.view[t+2]<<8,
o|=this.view[t+3],o+=this.view[t]<<24>>>0,t+=4,a=this.view[t+1]<<16,
a|=this.view[t+2]<<8,
a|=this.view[t+3],a+=this.view[t]<<24>>>0)
var r=new e(a,o,!0)
return i&&(this.offset+=8),r
},i.readUInt64=i.readUint64),i.writeFloat32=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof e){
throw TypeError("Illegal value: "+e+" (not a number)")
}
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
t+=4
var a=this.buffer.byteLength
return t>a&&this.resize((a*=2)>t?a:t),t-=4,l(this.view,e,t,this.littleEndian,23,4),
i&&(this.offset+=4),
this
},i.writeFloat=i.writeFloat32,i.readFloat32=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+4>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)
}
}
var i=s(this.view,e,this.littleEndian,23,4)
return t&&(this.offset+=4),i
},i.readFloat=i.readFloat32,i.writeFloat64=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof e){
throw TypeError("Illegal value: "+e+" (not a number)")
}
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
t+=8
var a=this.buffer.byteLength
return t>a&&this.resize((a*=2)>t?a:t),t-=8,l(this.view,e,t,this.littleEndian,52,8),
i&&(this.offset+=8),
this
},i.writeDouble=i.writeFloat64,i.readFloat64=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+8>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+8) <= "+this.buffer.byteLength)
}
}
var i=s(this.view,e,this.littleEndian,52,8)
return t&&(this.offset+=8),i
},i.readDouble=i.readFloat64,t.MAX_VARINT32_BYTES=5,
t.calculateVarint32=function(e){
return(e>>>=0)<128?1:e<16384?2:e<1<<21?3:e<1<<28?4:5
},t.zigZagEncode32=function(e){
return((e|=0)<<1^e>>31)>>>0
},t.zigZagDecode32=function(e){
return e>>>1^-(1&e)|0
},i.writeVarint32=function(e,i){
var a=void 0===i
if(a&&(i=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal value: "+e+" (not an integer)")
}
if(e|=0,"number"!=typeof i||i%1!=0){
throw TypeError("Illegal offset: "+i+" (not an integer)")
}
if((i>>>=0)<0||i+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+i+" (+0) <= "+this.buffer.byteLength)
}
}
var o,r=t.calculateVarint32(e)
i+=r
var n=this.buffer.byteLength
for(i>n&&this.resize((n*=2)>i?n:i),i-=r,e>>>=0;e>=128;){
o=127&e|128,this.view[i++]=o,
e>>>=7
}
return this.view[i++]=e,a?(this.offset=i,this):r
},i.writeVarint32ZigZag=function(e,i){
return this.writeVarint32(t.zigZagEncode32(e),i)
},i.readVarint32=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+1>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)
}
}
var i,a=0,o=0
do{
if(!this.noAssert&&e>this.limit){
var r=Error("Truncated")
throw r.truncated=!0,r
}
i=this.view[e++],a<5&&(o|=(127&i)<<7*a),++a
}while(0!=(128&i))
return o|=0,t?(this.offset=e,o):{
value:o,
length:a
}
},i.readVarint32ZigZag=function(e){
var i=this.readVarint32(e)
return"object"==typeof i?i.value=t.zigZagDecode32(i.value):i=t.zigZagDecode32(i),
i
},e&&(t.MAX_VARINT64_BYTES=10,t.calculateVarint64=function(t){
"number"==typeof t?t=e.fromNumber(t):"string"==typeof t&&(t=e.fromString(t))
var i=t.toInt()>>>0,a=t.shiftRightUnsigned(28).toInt()>>>0,o=t.shiftRightUnsigned(56).toInt()>>>0
return 0==o?0==a?i<16384?i<128?1:2:i<1<<21?3:4:a<16384?a<128?5:6:a<1<<21?7:8:o<128?9:10
},
t.zigZagEncode64=function(t){
return"number"==typeof t?t=e.fromNumber(t,!1):"string"==typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),
t.shiftLeft(1).xor(t.shiftRight(63)).toUnsigned()
},t.zigZagDecode64=function(t){
return"number"==typeof t?t=e.fromNumber(t,!1):"string"==typeof t?t=e.fromString(t,!1):!1!==t.unsigned&&(t=t.toSigned()),
t.shiftRightUnsigned(1).xor(t.and(e.ONE).toSigned().negate()).toSigned()
},i.writeVarint64=function(i,a){
var o=void 0===a
if(o&&(a=this.offset),!this.noAssert){
if("number"==typeof i){
i=e.fromNumber(i)
}else if("string"==typeof i){
i=e.fromString(i)
}else if(!(i&&i instanceof e)){
throw TypeError("Illegal value: "+i+" (not an integer or Long)")
}
if("number"!=typeof a||a%1!=0){
throw TypeError("Illegal offset: "+a+" (not an integer)")
}
if((a>>>=0)<0||a+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+a+" (+0) <= "+this.buffer.byteLength)
}
}
"number"==typeof i?i=e.fromNumber(i,!1):"string"==typeof i?i=e.fromString(i,!1):!1!==i.unsigned&&(i=i.toSigned())
var r=t.calculateVarint64(i),n=i.toInt()>>>0,s=i.shiftRightUnsigned(28).toInt()>>>0,l=i.shiftRightUnsigned(56).toInt()>>>0
a+=r
var c=this.buffer.byteLength
switch(a>c&&this.resize((c*=2)>a?c:a),a-=r,r){
case 10:
this.view[a+9]=l>>>7&1
case 9:
this.view[a+8]=9!==r?128|l:127&l
case 8:
this.view[a+7]=8!==r?s>>>21|128:s>>>21&127
case 7:
this.view[a+6]=7!==r?s>>>14|128:s>>>14&127
case 6:
this.view[a+5]=6!==r?s>>>7|128:s>>>7&127
case 5:
this.view[a+4]=5!==r?128|s:127&s
case 4:
this.view[a+3]=4!==r?n>>>21|128:n>>>21&127
case 3:
this.view[a+2]=3!==r?n>>>14|128:n>>>14&127
case 2:
this.view[a+1]=2!==r?n>>>7|128:n>>>7&127
case 1:
this.view[a]=1!==r?128|n:127&n
}
return o?(this.offset+=r,this):r
},i.writeVarint64ZigZag=function(e,i){
return this.writeVarint64(t.zigZagEncode64(e),i)
},i.readVarint64=function(t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+1>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+1) <= "+this.buffer.byteLength)
}
}
var a=t,o=0,r=0,n=0,s=0
if(o=127&(s=this.view[t++]),128&s&&(o|=(127&(s=this.view[t++]))<<7,(128&s||this.noAssert&&void 0===s)&&(o|=(127&(s=this.view[t++]))<<14,
(128&s||this.noAssert&&void 0===s)&&(o|=(127&(s=this.view[t++]))<<21,
(128&s||this.noAssert&&void 0===s)&&(r=127&(s=this.view[t++]),
(128&s||this.noAssert&&void 0===s)&&(r|=(127&(s=this.view[t++]))<<7,
(128&s||this.noAssert&&void 0===s)&&(r|=(127&(s=this.view[t++]))<<14,
(128&s||this.noAssert&&void 0===s)&&(r|=(127&(s=this.view[t++]))<<21,
(128&s||this.noAssert&&void 0===s)&&(n=127&(s=this.view[t++]),
(128&s||this.noAssert&&void 0===s)&&(n|=(127&(s=this.view[t++]))<<7,
128&s||this.noAssert&&void 0===s)))))))))){
throw Error("Buffer overrun")
}
var l=e.fromBits(o|r<<28,r>>>4|n<<24,!1)
return i?(this.offset=t,l):{
value:l,
length:t-a
}
},i.readVarint64ZigZag=function(i){
var a=this.readVarint64(i)
return a&&a.value instanceof e?a.value=t.zigZagDecode64(a.value):a=t.zigZagDecode64(a),
a
}),i.writeCString=function(e,t){
var i=void 0===t
i&&(t=this.offset)
var a,o=e.length
if(!this.noAssert){
if("string"!=typeof e){
throw TypeError("Illegal str: Not a string")
}
for(a=0;a<o;++a){
if(0===e.charCodeAt(a)){
throw RangeError("Illegal str: Contains NULL-characters")
}
}
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
o=u.calculateUTF16asUTF8(r(e))[1],t+=o+1
var n=this.buffer.byteLength
return t>n&&this.resize((n*=2)>t?n:t),t-=o+1,u.encodeUTF16toUTF8(r(e),function(e){
this.view[t++]=e
}.bind(this)),this.view[t++]=0,i?(this.offset=t,this):o
},i.readCString=function(e){
var t=void 0===e
if(t&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+1>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)
}
}
var i,a=e,o=-1
return u.decodeUTF8toUTF16(function(){
if(0===o){
return null
}
if(e>=this.limit){
throw RangeError("Illegal range: Truncated data, "+e+" < "+this.limit)
}
return 0===(o=this.view[e++])?null:o
}.bind(this),i=n(),!0),t?(this.offset=e,i()):{
string:i(),
length:e-a
}
},i.writeIString=function(e,t){
var i=void 0===t
if(i&&(t=this.offset),!this.noAssert){
if("string"!=typeof e){
throw TypeError("Illegal str: Not a string")
}
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
var a,o=t
a=u.calculateUTF16asUTF8(r(e),this.noAssert)[1],t+=4+a
var n=this.buffer.byteLength
if(t>n&&this.resize((n*=2)>t?n:t),t-=4+a,this.littleEndian?(this.view[t+3]=a>>>24&255,
this.view[t+2]=a>>>16&255,
this.view[t+1]=a>>>8&255,this.view[t]=255&a):(this.view[t]=a>>>24&255,
this.view[t+1]=a>>>16&255,
this.view[t+2]=a>>>8&255,this.view[t+3]=255&a),t+=4,u.encodeUTF16toUTF8(r(e),function(e){
this.view[t++]=e
}.bind(this)),t!==o+4+a){
throw RangeError("Illegal range: Truncated data, "+t+" == "+(t+4+a))
}
return i?(this.offset=t,this):t-o
},i.readIString=function(e){
var i=void 0===e
if(i&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+4>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+4) <= "+this.buffer.byteLength)
}
}
var a=e,o=this.readUint32(e),r=this.readUTF8String(o,t.METRICS_BYTES,e+=4)
return e+=r.length,i?(this.offset=e,r.string):{
string:r.string,
length:e-a
}
},t.METRICS_CHARS="c",t.METRICS_BYTES="b",i.writeUTF8String=function(e,t){
var i,a=void 0===t
if(a&&(t=this.offset),!this.noAssert){
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: "+t+" (not an integer)")
}
if((t>>>=0)<0||t+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+t+" (+0) <= "+this.buffer.byteLength)
}
}
var o=t
i=u.calculateUTF16asUTF8(r(e))[1],t+=i
var n=this.buffer.byteLength
return t>n&&this.resize((n*=2)>t?n:t),t-=i,u.encodeUTF16toUTF8(r(e),function(e){
this.view[t++]=e
}.bind(this)),a?(this.offset=t,this):t-o
},i.writeString=i.writeUTF8String,t.calculateUTF8Chars=function(e){
return u.calculateUTF16asUTF8(r(e))[0]
},t.calculateUTF8Bytes=function(e){
return u.calculateUTF16asUTF8(r(e))[1]
},t.calculateString=t.calculateUTF8Bytes,i.readUTF8String=function(e,i,a){
"number"==typeof i&&(a=i,
i=void 0)
var o=void 0===a
if(o&&(a=this.offset),void 0===i&&(i=t.METRICS_CHARS),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal length: "+e+" (not an integer)")
}
if(e|=0,"number"!=typeof a||a%1!=0){
throw TypeError("Illegal offset: "+a+" (not an integer)")
}
if((a>>>=0)<0||a+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+a+" (+0) <= "+this.buffer.byteLength)
}
}
var r,s=0,l=a
if(i===t.METRICS_CHARS){
if(r=n(),u.decodeUTF8(function(){
return s<e&&a<this.limit?this.view[a++]:null
}.bind(this),(function(e){
++s,u.UTF8toUTF16(e,r)
})),s!==e){
throw RangeError("Illegal range: Truncated data, "+s+" == "+e)
}
return o?(this.offset=a,r()):{
string:r(),
length:a-l
}
}
if(i===t.METRICS_BYTES){
if(!this.noAssert){
if("number"!=typeof a||a%1!=0){
throw TypeError("Illegal offset: "+a+" (not an integer)")
}
if((a>>>=0)<0||a+e>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+a+" (+"+e+") <= "+this.buffer.byteLength)
}
}
var c=a+e
if(u.decodeUTF8toUTF16(function(){
return a<c?this.view[a++]:null
}.bind(this),r=n(),this.noAssert),a!==c){
throw RangeError("Illegal range: Truncated data, "+a+" == "+c)
}
return o?(this.offset=a,r()):{
string:r(),
length:a-l
}
}
throw TypeError("Unsupported metrics: "+i)
},i.readString=i.readUTF8String,i.writeVString=function(e,i){
var a=void 0===i
if(a&&(i=this.offset),!this.noAssert){
if("string"!=typeof e){
throw TypeError("Illegal str: Not a string")
}
if("number"!=typeof i||i%1!=0){
throw TypeError("Illegal offset: "+i+" (not an integer)")
}
if((i>>>=0)<0||i+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+i+" (+0) <= "+this.buffer.byteLength)
}
}
var o,n,s=i
o=u.calculateUTF16asUTF8(r(e),this.noAssert)[1],n=t.calculateVarint32(o),i+=n+o
var l=this.buffer.byteLength
if(i>l&&this.resize((l*=2)>i?l:i),i-=n+o,i+=this.writeVarint32(o,i),u.encodeUTF16toUTF8(r(e),function(e){
this.view[i++]=e
}.bind(this)),i!==s+o+n){
throw RangeError("Illegal range: Truncated data, "+i+" == "+(i+o+n))
}
return a?(this.offset=i,this):i-s
},i.readVString=function(e){
var i=void 0===e
if(i&&(e=this.offset),!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+1>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+1) <= "+this.buffer.byteLength)
}
}
var a=e,o=this.readVarint32(e),r=this.readUTF8String(o.value,t.METRICS_BYTES,e+=o.length)
return e+=r.length,i?(this.offset=e,r.string):{
string:r.string,
length:e-a
}
},i.append=function(e,i,a){
"number"!=typeof i&&"string"==typeof i||(a=i,i=void 0)
var o=void 0===a
if(o&&(a=this.offset),!this.noAssert){
if("number"!=typeof a||a%1!=0){
throw TypeError("Illegal offset: "+a+" (not an integer)")
}
if((a>>>=0)<0||a+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+a+" (+0) <= "+this.buffer.byteLength)
}
}
e instanceof t||(e=t.wrap(e,i))
var r=e.limit-e.offset
if(r<=0){
return this
}
a+=r
var n=this.buffer.byteLength
return a>n&&this.resize((n*=2)>a?n:a),a-=r,this.view.set(e.view.subarray(e.offset,e.limit),a),
e.offset+=r,
o&&(this.offset+=r),this
},i.appendTo=function(e,t){
return e.append(this,t),this
},i.assert=function(e){
return this.noAssert=!e,this
},i.capacity=function(){
return this.buffer.byteLength
},i.clear=function(){
return this.offset=0,this.limit=this.buffer.byteLength,this.markedOffset=-1,
this
},i.clone=function(e){
var i=new t(0,this.littleEndian,this.noAssert)
return e?(i.buffer=new ArrayBuffer(this.buffer.byteLength),i.view=new Uint8Array(i.buffer)):(i.buffer=this.buffer,
i.view=this.view),
i.offset=this.offset,i.markedOffset=this.markedOffset,i.limit=this.limit,
i
},i.compact=function(e,t){
if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),
!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal begin: Not an integer")
}
if(e>>>=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal end: Not an integer")
}
if(t>>>=0,e<0||e>t||t>this.buffer.byteLength){
throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)
}
}
if(0===e&&t===this.buffer.byteLength){
return this
}
var i=t-e
if(0===i){
return this.buffer=a,this.view=null,this.markedOffset>=0&&(this.markedOffset-=e),
this.offset=0,
this.limit=0,this
}
var o=new ArrayBuffer(i),r=new Uint8Array(o)
return r.set(this.view.subarray(e,t)),this.buffer=o,this.view=r,this.markedOffset>=0&&(this.markedOffset-=e),
this.offset=0,
this.limit=i,this
},i.copy=function(e,i){
if(void 0===e&&(e=this.offset),void 0===i&&(i=this.limit),
!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal begin: Not an integer")
}
if(e>>>=0,"number"!=typeof i||i%1!=0){
throw TypeError("Illegal end: Not an integer")
}
if(i>>>=0,e<0||e>i||i>this.buffer.byteLength){
throw RangeError("Illegal range: 0 <= "+e+" <= "+i+" <= "+this.buffer.byteLength)
}
}
if(e===i){
return new t(0,this.littleEndian,this.noAssert)
}
var a=i-e,o=new t(a,this.littleEndian,this.noAssert)
return o.offset=0,o.limit=a,o.markedOffset>=0&&(o.markedOffset-=e),this.copyTo(o,0,e,i),
o
},i.copyTo=function(e,i,a,o){
var r,n
if(!this.noAssert&&!t.isByteBuffer(e)){
throw TypeError("Illegal target: Not a ByteBuffer")
}
if(i=(n=void 0===i)?e.offset:0|i,a=(r=void 0===a)?this.offset:0|a,o=void 0===o?this.limit:0|o,
i<0||i>e.buffer.byteLength){
throw RangeError("Illegal target range: 0 <= "+i+" <= "+e.buffer.byteLength)
}
if(a<0||o>this.buffer.byteLength){
throw RangeError("Illegal source range: 0 <= "+a+" <= "+this.buffer.byteLength)
}
var s=o-a
return 0===s?e:(e.ensureCapacity(i+s),e.view.set(this.view.subarray(a,o),i),r&&(this.offset+=s),
n&&(e.offset+=s),
this)
},i.ensureCapacity=function(e){
var t=this.buffer.byteLength
return t<e?this.resize((t*=2)>e?t:e):this
},i.fill=function(e,t,i){
var a=void 0===t
if(a&&(t=this.offset),"string"==typeof e&&e.length>0&&(e=e.charCodeAt(0)),void 0===t&&(t=this.offset),
void 0===i&&(i=this.limit),
!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal value: "+e+" (not an integer)")
}
if(e|=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal begin: Not an integer")
}
if(t>>>=0,"number"!=typeof i||i%1!=0){
throw TypeError("Illegal end: Not an integer")
}
if(i>>>=0,t<0||t>i||i>this.buffer.byteLength){
throw RangeError("Illegal range: 0 <= "+t+" <= "+i+" <= "+this.buffer.byteLength)
}
}
if(t>=i){
return this
}
for(;t<i;){
this.view[t++]=e
}
return a&&(this.offset=t),this
},i.flip=function(){
return this.limit=this.offset,this.offset=0,this
},i.mark=function(e){
if(e=void 0===e?this.offset:e,!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal offset: "+e+" (not an integer)")
}
if((e>>>=0)<0||e+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+e+" (+0) <= "+this.buffer.byteLength)
}
}
return this.markedOffset=e,this
},i.order=function(e){
if(!this.noAssert&&"boolean"!=typeof e){
throw TypeError("Illegal littleEndian: Not a boolean")
}
return this.littleEndian=!!e,this
},i.LE=function(e){
return this.littleEndian=void 0===e||!!e,this
},i.BE=function(e){
return this.littleEndian=void 0!==e&&!e,this
},i.prepend=function(e,i,a){
"number"!=typeof i&&"string"==typeof i||(a=i,i=void 0)
var o=void 0===a
if(o&&(a=this.offset),!this.noAssert){
if("number"!=typeof a||a%1!=0){
throw TypeError("Illegal offset: "+a+" (not an integer)")
}
if((a>>>=0)<0||a+0>this.buffer.byteLength){
throw RangeError("Illegal offset: 0 <= "+a+" (+0) <= "+this.buffer.byteLength)
}
}
e instanceof t||(e=t.wrap(e,i))
var r=e.limit-e.offset
if(r<=0){
return this
}
var n=r-a
if(n>0){
var s=new ArrayBuffer(this.buffer.byteLength+n),l=new Uint8Array(s)
l.set(this.view.subarray(a,this.buffer.byteLength),r),this.buffer=s,this.view=l,
this.offset+=n,
this.markedOffset>=0&&(this.markedOffset+=n),this.limit+=n,a+=n
}else{
new Uint8Array(this.buffer)
}
return this.view.set(e.view.subarray(e.offset,e.limit),a-r),e.offset=e.limit,o&&(this.offset-=r),
this
},i.prependTo=function(e,t){
return e.prepend(this,t),this
},i.printDebug=function(e){
"function"!=typeof e&&(e=void 0),e(this.toString()+"\n-------------------------------------------------------------------\n"+this.toDebug(!0))
},
i.remaining=function(){
return this.limit-this.offset
},i.reset=function(){
return this.markedOffset>=0?(this.offset=this.markedOffset,
this.markedOffset=-1):this.offset=0,
this
},i.resize=function(e){
if(!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal capacity: "+e+" (not an integer)")
}
if((e|=0)<0){
throw RangeError("Illegal capacity: 0 <= "+e)
}
}
if(this.buffer.byteLength<e){
var t=new ArrayBuffer(e),i=new Uint8Array(t)
i.set(this.view),this.buffer=t,this.view=i
}
return this
},i.reverse=function(e,t){
if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),
!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal begin: Not an integer")
}
if(e>>>=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal end: Not an integer")
}
if(t>>>=0,e<0||e>t||t>this.buffer.byteLength){
throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)
}
}
return e===t?this:(Array.prototype.reverse.call(this.view.subarray(e,t)),this)
},
i.skip=function(e){
if(!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal length: "+e+" (not an integer)")
}
e|=0
}
var t=this.offset+e
if(!this.noAssert&&(t<0||t>this.buffer.byteLength)){
throw RangeError("Illegal length: 0 <= "+this.offset+" + "+e+" <= "+this.buffer.byteLength)
}
return this.offset=t,this
},i.slice=function(e,t){
if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),
!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal begin: Not an integer")
}
if(e>>>=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal end: Not an integer")
}
if(t>>>=0,e<0||e>t||t>this.buffer.byteLength){
throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)
}
}
var i=this.clone()
return i.offset=e,i.limit=t,i
},i.toBuffer=function(e){
var t=this.offset,i=this.limit
if(!this.noAssert){
if("number"!=typeof t||t%1!=0){
throw TypeError("Illegal offset: Not an integer")
}
if(t>>>=0,"number"!=typeof i||i%1!=0){
throw TypeError("Illegal limit: Not an integer")
}
if(i>>>=0,t<0||t>i||i>this.buffer.byteLength){
throw RangeError("Illegal range: 0 <= "+t+" <= "+i+" <= "+this.buffer.byteLength)
}
}
if(!e&&0===t&&i===this.buffer.byteLength){
return this.buffer
}
if(t===i){
return a
}
var o=new ArrayBuffer(i-t)
return new Uint8Array(o).set(new Uint8Array(this.buffer).subarray(t,i),0),o
},i.toArrayBuffer=i.toBuffer,
i.toString=function(e,t,i){
if(void 0===e){
return"ByteBufferAB(offset="+this.offset+",markedOffset="+this.markedOffset+",limit="+this.limit+",capacity="+this.capacity()+")"
}
switch("number"==typeof e&&(i=t=e="utf8"),e){
case"utf8":
return this.toUTF8(t,i)
case"base64":
return this.toBase64(t,i)
case"hex":
return this.toHex(t,i)
case"binary":
return this.toBinary(t,i)
case"debug":
return this.toDebug()
case"columns":
return this.toColumns()
default:
throw Error("Unsupported encoding: "+e)
}
}
var c=function(){
for(var e={},t=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47],i=[],a=0,o=t.length;a<o;++a){
i[t[a]]=a
}
return e.encode=function(e,i){
for(var a,o;null!==(a=e());){
i(t[a>>2&63]),o=(3&a)<<4,null!==(a=e())?(i(t[63&((o|=a>>4&15)|a>>4&15)]),
o=(15&a)<<2,
null!==(a=e())?(i(t[63&(o|a>>6&3)]),i(t[63&a])):(i(t[63&o]),i(61))):(i(t[63&o]),
i(61),
i(61))
}
},e.decode=function(e,t){
var a,o,r
function n(e){
throw Error("Illegal character code: "+e)
}
for(;null!==(a=e());){
if(void 0===(o=i[a])&&n(a),null!==(a=e())&&(void 0===(r=i[a])&&n(a),
t(o<<2>>>0|(48&r)>>4),
null!==(a=e()))){
if(void 0===(o=i[a])){
if(61===a){
break
}
n(a)
}
if(t((15&r)<<4>>>0|(60&o)>>2),null!==(a=e())){
if(void 0===(r=i[a])){
if(61===a){
break
}
n(a)
}
t((3&o)<<6>>>0|r)
}
}
}
},e.test=function(e){
return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
},
e
}()
i.toBase64=function(e,t){
if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),
t|=0,(e|=0)<0||t>this.capacity||e>t){
throw RangeError("begin, end")
}
var i
return c.encode(function(){
return e<t?this.view[e++]:null
}.bind(this),i=n()),i()
},t.fromBase64=function(e,i){
if("string"!=typeof e){
throw TypeError("str")
}
var a=new t(e.length/4*3,i),o=0
return c.decode(r(e),(function(e){
a.view[o++]=e
})),a.limit=o,a
},t.btoa=function(e){
return t.fromBinary(e).toBase64()
},t.atob=function(e){
return t.fromBase64(e).toBinary()
},i.toBinary=function(e,t){
if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),
t|=0,(e|=0)<0||t>this.capacity()||e>t){
throw RangeError("begin, end")
}
if(e===t){
return""
}
for(var i=[],a=[];e<t;){
i.push(this.view[e++]),i.length>=1024&&(a.push(String.fromCharCode.apply(String,i)),
i=[])
}
return a.join("")+String.fromCharCode.apply(String,i)
},t.fromBinary=function(e,i){
if("string"!=typeof e){
throw TypeError("str")
}
for(var a,o=0,r=e.length,n=new t(r,i);o<r;){
if((a=e.charCodeAt(o))>255){
throw RangeError("illegal char code: "+a)
}
n.view[o++]=a
}
return n.limit=r,n
},i.toDebug=function(e){
for(var t,i=-1,a=this.buffer.byteLength,o="",r="",n="";i<a;){
if(-1!==i&&(o+=(t=this.view[i])<16?"0"+t.toString(16).toUpperCase():t.toString(16).toUpperCase(),
e&&(r+=t>32&&t<127?String.fromCharCode(t):".")),
++i,e&&i>0&&i%16==0&&i!==a){
for(;o.length<51;){
o+=" "
}
n+=o+r+"\n",o=r=""
}
i===this.offset&&i===this.limit?o+=i===this.markedOffset?"!":"|":i===this.offset?o+=i===this.markedOffset?"[":"<":i===this.limit?o+=i===this.markedOffset?"]":">":o+=i===this.markedOffset?"'":e||0!==i&&i!==a?" ":""
}
if(e&&" "!==o){
for(;o.length<51;){
o+=" "
}
n+=o+r+"\n"
}
return e?n:o
},t.fromDebug=function(e,i,a){
for(var o,r,n=e.length,s=new t((n+1)/3|0,i,a),l=0,c=0,u=!1,p=!1,d=!1,g=!1,m=!1;l<n;){
switch(o=e.charAt(l++)){
case"!":
if(!a){
if(p||d||g){
m=!0
break
}
p=d=g=!0
}
s.offset=s.markedOffset=s.limit=c,u=!1
break
case"|":
if(!a){
if(p||g){
m=!0
break
}
p=g=!0
}
s.offset=s.limit=c,u=!1
break
case"[":
if(!a){
if(p||d){
m=!0
break
}
p=d=!0
}
s.offset=s.markedOffset=c,u=!1
break
case"<":
if(!a){
if(p){
m=!0
break
}
p=!0
}
s.offset=c,u=!1
break
case"]":
if(!a){
if(g||d){
m=!0
break
}
g=d=!0
}
s.limit=s.markedOffset=c,u=!1
break
case">":
if(!a){
if(g){
m=!0
break
}
g=!0
}
s.limit=c,u=!1
break
case"'":
if(!a){
if(d){
m=!0
break
}
d=!0
}
s.markedOffset=c,u=!1
break
case" ":
u=!1
break
default:
if(!a&&u){
m=!0
break
}
if(r=parseInt(o+e.charAt(l++),16),!a&&(isNaN(r)||r<0||r>255)){
throw TypeError("Illegal str: Not a debug encoded string")
}
s.view[c++]=r,u=!0
}
if(m){
throw TypeError("Illegal str: Invalid symbol at "+l)
}
}
if(!a){
if(!p||!g){
throw TypeError("Illegal str: Missing offset or limit")
}
if(c<s.buffer.byteLength){
throw TypeError("Illegal str: Not a debug encoded string (is it hex?) "+c+" < "+n)
}
}
return s
},i.toHex=function(e,t){
if(e=void 0===e?this.offset:e,t=void 0===t?this.limit:t,
!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal begin: Not an integer")
}
if(e>>>=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal end: Not an integer")
}
if(t>>>=0,e<0||e>t||t>this.buffer.byteLength){
throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)
}
}
for(var i,a=new Array(t-e);e<t;){
(i=this.view[e++])<16?a.push("0",i.toString(16)):a.push(i.toString(16))
}
return a.join("")
},t.fromHex=function(e,i,a){
if(!a){
if("string"!=typeof e){
throw TypeError("Illegal str: Not a string")
}
if(e.length%2!=0){
throw TypeError("Illegal str: Length not a multiple of 2")
}
}
for(var o,r=e.length,n=new t(r/2|0,i),s=0,l=0;s<r;s+=2){
if(o=parseInt(e.substring(s,s+2),16),
!a&&(!isFinite(o)||o<0||o>255)){
throw TypeError("Illegal str: Contains non-hex characters")
}
n.view[l++]=o
}
return n.limit=l,n
}
var u=function(){
var e={
MAX_CODEPOINT:1114111,
encodeUTF8:function(e,t){
var i=null
for("number"==typeof e&&(i=e,e=function(){
return null
});null!==i||null!==(i=e());){
i<128?t(127&i):i<2048?(t(i>>6&31|192),t(63&i|128)):i<65536?(t(i>>12&15|224),
t(i>>6&63|128),
t(63&i|128)):(t(i>>18&7|240),t(i>>12&63|128),t(i>>6&63|128),t(63&i|128)),
i=null
}
},
decodeUTF8:function(e,t){
for(var i,a,o,r,n=function(e){
e=e.slice(0,e.indexOf(null))
var t=Error(e.toString())
throw t.name="TruncatedError",t.bytes=e,t
};null!==(i=e());){
if(0==(128&i)){
t(i)
}else if(192==(224&i)){
null===(a=e())&&n([i,a]),t((31&i)<<6|63&a)
}else if(224==(240&i)){
(null===(a=e())||null===(o=e()))&&n([i,a,o]),t((15&i)<<12|(63&a)<<6|63&o)
}else{
if(240!=(248&i)){
throw RangeError("Illegal starting byte: "+i)
}
(null===(a=e())||null===(o=e())||null===(r=e()))&&n([i,a,o,r]),t((7&i)<<18|(63&a)<<12|(63&o)<<6|63&r)
}
}
},
UTF16toUTF8:function(e,t){
for(var i,a=null;null!==(i=null!==a?a:e());){
i>=55296&&i<=57343&&null!==(a=e())&&a>=56320&&a<=57343?(t(1024*(i-55296)+a-56320+65536),
a=null):t(i)
}
null!==a&&t(a)
},
UTF8toUTF16:function(e,t){
var i=null
for("number"==typeof e&&(i=e,e=function(){
return null
});null!==i||null!==(i=e());){
i<=65535?t(i):(t(55296+((i-=65536)>>10)),t(i%1024+56320)),
i=null
}
},
encodeUTF16toUTF8:function(t,i){
e.UTF16toUTF8(t,(function(t){
e.encodeUTF8(t,i)
}))
},
decodeUTF8toUTF16:function(t,i){
e.decodeUTF8(t,(function(t){
e.UTF8toUTF16(t,i)
}))
},
calculateCodePoint:function(e){
return e<128?1:e<2048?2:e<65536?3:4
},
calculateUTF8:function(e){
for(var t,i=0;null!==(t=e());){
i+=t<128?1:t<2048?2:t<65536?3:4
}
return i
},
calculateUTF16asUTF8:function(t){
var i=0,a=0
return e.UTF16toUTF8(t,(function(e){
++i,a+=e<128?1:e<2048?2:e<65536?3:4
})),[i,a]
}
}
return e
}()
return i.toUTF8=function(e,t){
if(void 0===e&&(e=this.offset),void 0===t&&(t=this.limit),
!this.noAssert){
if("number"!=typeof e||e%1!=0){
throw TypeError("Illegal begin: Not an integer")
}
if(e>>>=0,"number"!=typeof t||t%1!=0){
throw TypeError("Illegal end: Not an integer")
}
if(t>>>=0,e<0||e>t||t>this.buffer.byteLength){
throw RangeError("Illegal range: 0 <= "+e+" <= "+t+" <= "+this.buffer.byteLength)
}
}
var i
try{
u.decodeUTF8toUTF16(function(){
return e<t?this.view[e++]:null
}.bind(this),i=n())
}catch(i){
if(e!==t){
throw RangeError("Illegal range: Truncated data, "+e+" != "+t)
}
}
return i()
},t.fromUTF8=function(e,i,a){
if(!a&&"string"!=typeof e){
throw TypeError("Illegal str: Not a string")
}
var o=new t(u.calculateUTF16asUTF8(r(e),!0)[1],i,a),n=0
return u.encodeUTF16toUTF8(r(e),(function(e){
o.view[n++]=e
})),o.limit=n,o
},t
})?a.apply(t,o):a)||(e.exports=r)
},function(e,t,i){
var a,o,r
o=[],void 0===(r="function"==typeof(a=function(){
"use strict"
function e(e,t,i){
this.low=0|e,this.high=0|t,this.unsigned=!!i
}
function t(e){
return!0===(e&&e.__isLong__)
}
e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{
value:!0,
enumerable:!1,
configurable:!1
}),e.isLong=t
var i={},a={}
function o(e,t){
var o,r,s
return t?(s=0<=(e>>>=0)&&e<256)&&(r=a[e])?r:(o=n(e,(0|e)<0?-1:0,!0),s&&(a[e]=o),
o):(s=-128<=(e|=0)&&e<128)&&(r=i[e])?r:(o=n(e,e<0?-1:0,!1),
s&&(i[e]=o),o)
}
function r(e,t){
if(isNaN(e)||!isFinite(e)){
return t?h:m
}
if(t){
if(e<0){
return h
}
if(e>=p){
return v
}
}else{
if(e<=-d){
return w
}
if(e+1>=d){
return y
}
}
return e<0?r(-e,t).neg():n(e%u|0,e/u|0,t)
}
function n(t,i,a){
return new e(t,i,a)
}
e.fromInt=o,e.fromNumber=r,e.fromBits=n
var s=Math.pow
function l(e,t,i){
if(0===e.length){
throw Error("empty string")
}
if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e){
return m
}
if("number"==typeof t?(i=t,t=!1):t=!!t,(i=i||10)<2||36<i){
throw RangeError("radix")
}
var a
if((a=e.indexOf("-"))>0){
throw Error("interior hyphen")
}
if(0===a){
return l(e.substring(1),t,i).neg()
}
for(var o=r(s(i,8)),n=m,c=0;c<e.length;c+=8){
var u=Math.min(8,e.length-c),p=parseInt(e.substring(c,c+u),i)
if(u<8){
var d=r(s(i,u))
n=n.mul(d).add(r(p))
}else{
n=(n=n.mul(o)).add(r(p))
}
}
return n.unsigned=t,n
}
function c(t){
return t instanceof e?t:"number"==typeof t?r(t):"string"==typeof t?l(t):n(t.low,t.high,t.unsigned)
}
e.fromString=l,e.fromValue=c
var u=4294967296,p=u*u,d=p/2,g=o(1<<24),m=o(0)
e.ZERO=m
var h=o(0,!0)
e.UZERO=h
var k=o(1)
e.ONE=k
var b=o(1,!0)
e.UONE=b
var f=o(-1)
e.NEG_ONE=f
var y=n(-1,2147483647,!1)
e.MAX_VALUE=y
var v=n(-1,-1,!0)
e.MAX_UNSIGNED_VALUE=v
var w=n(0,-2147483648,!1)
e.MIN_VALUE=w
var j=e.prototype
return j.toInt=function(){
return this.unsigned?this.low>>>0:this.low
},j.toNumber=function(){
return this.unsigned?(this.high>>>0)*u+(this.low>>>0):this.high*u+(this.low>>>0)
},
j.toString=function(e){
if((e=e||10)<2||36<e){
throw RangeError("radix")
}
if(this.isZero()){
return"0"
}
if(this.isNegative()){
if(this.eq(w)){
var t=r(e),i=this.div(t),a=i.mul(t).sub(this)
return i.toString(e)+a.toInt().toString(e)
}
return"-"+this.neg().toString(e)
}
for(var o=r(s(e,6),this.unsigned),n=this,l="";;){
var c=n.div(o),u=(n.sub(c.mul(o)).toInt()>>>0).toString(e)
if((n=c).isZero()){
return u+l
}
for(;u.length<6;){
u="0"+u
}
l=""+u+l
}
},j.getHighBits=function(){
return this.high
},j.getHighBitsUnsigned=function(){
return this.high>>>0
},j.getLowBits=function(){
return this.low
},j.getLowBitsUnsigned=function(){
return this.low>>>0
},j.getNumBitsAbs=function(){
if(this.isNegative()){
return this.eq(w)?64:this.neg().getNumBitsAbs()
}
for(var e=0!=this.high?this.high:this.low,t=31;t>0&&0==(e&1<<t);t--){}
return 0!=this.high?t+33:t+1
},j.isZero=function(){
return 0===this.high&&0===this.low
},j.isNegative=function(){
return!this.unsigned&&this.high<0
},j.isPositive=function(){
return this.unsigned||this.high>=0
},j.isOdd=function(){
return 1==(1&this.low)
},j.isEven=function(){
return 0==(1&this.low)
},j.equals=function(e){
return t(e)||(e=c(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low
},
j.eq=j.equals,j.notEquals=function(e){
return!this.eq(e)
},j.neq=j.notEquals,j.lessThan=function(e){
return this.comp(e)<0
},j.lt=j.lessThan,j.lessThanOrEqual=function(e){
return this.comp(e)<=0
},j.lte=j.lessThanOrEqual,j.greaterThan=function(e){
return this.comp(e)>0
},j.gt=j.greaterThan,j.greaterThanOrEqual=function(e){
return this.comp(e)>=0
},j.gte=j.greaterThanOrEqual,j.compare=function(e){
if(t(e)||(e=c(e)),this.eq(e)){
return 0
}
var i=this.isNegative(),a=e.isNegative()
return i&&!a?-1:!i&&a?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1
},
j.comp=j.compare,j.negate=function(){
return!this.unsigned&&this.eq(w)?w:this.not().add(k)
},j.neg=j.negate,j.add=function(e){
t(e)||(e=c(e))
var i=this.high>>>16,a=65535&this.high,o=this.low>>>16,r=65535&this.low,s=e.high>>>16,l=65535&e.high,u=e.low>>>16,p=0,d=0,g=0,m=0
return g+=(m+=r+(65535&e.low))>>>16,d+=(g+=o+u)>>>16,p+=(d+=a+l)>>>16,p+=i+s,n((g&=65535)<<16|(m&=65535),(p&=65535)<<16|(d&=65535),this.unsigned)
},
j.subtract=function(e){
return t(e)||(e=c(e)),this.add(e.neg())
},j.sub=j.subtract,j.multiply=function(e){
if(this.isZero()){
return m
}
if(t(e)||(e=c(e)),e.isZero()){
return m
}
if(this.eq(w)){
return e.isOdd()?w:m
}
if(e.eq(w)){
return this.isOdd()?w:m
}
if(this.isNegative()){
return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg()
}
if(e.isNegative()){
return this.mul(e.neg()).neg()
}
if(this.lt(g)&&e.lt(g)){
return r(this.toNumber()*e.toNumber(),this.unsigned)
}
var i=this.high>>>16,a=65535&this.high,o=this.low>>>16,s=65535&this.low,l=e.high>>>16,u=65535&e.high,p=e.low>>>16,d=65535&e.low,h=0,k=0,b=0,f=0
return b+=(f+=s*d)>>>16,k+=(b+=o*d)>>>16,b&=65535,k+=(b+=s*p)>>>16,h+=(k+=a*d)>>>16,
k&=65535,
h+=(k+=o*p)>>>16,k&=65535,h+=(k+=s*u)>>>16,h+=i*d+a*p+o*u+s*l,n((b&=65535)<<16|(f&=65535),(h&=65535)<<16|(k&=65535),this.unsigned)
},
j.mul=j.multiply,j.divide=function(e){
if(t(e)||(e=c(e)),e.isZero()){
throw Error("division by zero")
}
if(this.isZero()){
return this.unsigned?h:m
}
var i,a,o
if(this.unsigned){
if(e.unsigned||(e=e.toUnsigned()),e.gt(this)){
return h
}
if(e.gt(this.shru(1))){
return b
}
o=h
}else{
if(this.eq(w)){
return e.eq(k)||e.eq(f)?w:e.eq(w)?k:(i=this.shr(1).div(e).shl(1)).eq(m)?e.isNegative()?k:f:(a=this.sub(e.mul(i)),
o=i.add(a.div(e)))
}
if(e.eq(w)){
return this.unsigned?h:m
}
if(this.isNegative()){
return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg()
}
if(e.isNegative()){
return this.div(e.neg()).neg()
}
o=m
}
for(a=this;a.gte(e);){
i=Math.max(1,Math.floor(a.toNumber()/e.toNumber()))
for(var n=Math.ceil(Math.log(i)/Math.LN2),l=n<=48?1:s(2,n-48),u=r(i),p=u.mul(e);p.isNegative()||p.gt(a);){
p=(u=r(i-=l,this.unsigned)).mul(e)
}
u.isZero()&&(u=k),o=o.add(u),a=a.sub(p)
}
return o
},j.div=j.divide,j.modulo=function(e){
return t(e)||(e=c(e)),this.sub(this.div(e).mul(e))
},j.mod=j.modulo,j.not=function(){
return n(~this.low,~this.high,this.unsigned)
},j.and=function(e){
return t(e)||(e=c(e)),n(this.low&e.low,this.high&e.high,this.unsigned)
},j.or=function(e){
return t(e)||(e=c(e)),n(this.low|e.low,this.high|e.high,this.unsigned)
},j.xor=function(e){
return t(e)||(e=c(e)),n(this.low^e.low,this.high^e.high,this.unsigned)
},j.shiftLeft=function(e){
return t(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?n(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):n(0,this.low<<e-32,this.unsigned)
},
j.shl=j.shiftLeft,j.shiftRight=function(e){
return t(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?n(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):n(this.high>>e-32,this.high>=0?0:-1,this.unsigned)
},
j.shr=j.shiftRight,j.shiftRightUnsigned=function(e){
if(t(e)&&(e=e.toInt()),0==(e&=63)){
return this
}
var i=this.high
return e<32?n(this.low>>>e|i<<32-e,i>>>e,this.unsigned):n(32===e?i:i>>>e-32,0,this.unsigned)
},
j.shru=j.shiftRightUnsigned,j.toSigned=function(){
return this.unsigned?n(this.low,this.high,!1):this
},j.toUnsigned=function(){
return this.unsigned?this:n(this.low,this.high,!0)
},j.toBytes=function(e){
return e?this.toBytesLE():this.toBytesBE()
},j.toBytesLE=function(){
var e=this.high,t=this.low
return[255&t,t>>>8&255,t>>>16&255,t>>>24&255,255&e,e>>>8&255,e>>>16&255,e>>>24&255]
},
j.toBytesBE=function(){
var e=this.high,t=this.low
return[e>>>24&255,e>>>16&255,e>>>8&255,255&e,t>>>24&255,t>>>16&255,t>>>8&255,255&t]
},
e
})?a.apply(t,o):a)||(e.exports=r)
},function(e,t){},function(e,t,i){
"use strict"
var a=t
function o(){
a.Reader._configure(a.BufferReader),a.util._configure()
}
a.build="minimal",a.Writer=i(14),a.BufferWriter=i(47),a.Reader=i(15),a.BufferReader=i(48),
a.util=i(5),
a.rpc=i(49),a.roots=i(51),a.configure=o,a.Writer._configure(a.BufferWriter),
o()
},function(e,t,i){
"use strict"
e.exports=function(e,t){
var i=new Array(arguments.length-1),a=0,o=2,r=!0
for(;o<arguments.length;){
i[a++]=arguments[o++]
}
return new Promise((function(o,n){
i[a]=function(e){
if(r){
if(r=!1,e){
n(e)
}else{
for(var t=new Array(arguments.length-1),i=0;i<t.length;){
t[i++]=arguments[i]
}
o.apply(null,t)
}
}
}
try{
e.apply(t||null,i)
}catch(e){
r&&(r=!1,n(e))
}
}))
}
},function(e,t,i){
"use strict"
var a=t
a.length=function(e){
var t=e.length
if(!t){
return 0
}
for(var i=0;--t%4>1&&"="===e.charAt(t);){
++i
}
return Math.ceil(3*e.length)/4-i
}
for(var o=new Array(64),r=new Array(123),n=0;n<64;){
r[o[n]=n<26?n+65:n<52?n+71:n<62?n-4:n-59|43]=n++
}
a.encode=function(e,t,i){
for(var a,r=null,n=[],s=0,l=0;t<i;){
var c=e[t++]
switch(l){
case 0:
n[s++]=o[c>>2],a=(3&c)<<4,l=1
break
case 1:
n[s++]=o[a|c>>4],a=(15&c)<<2,l=2
break
case 2:
n[s++]=o[a|c>>6],n[s++]=o[63&c],l=0
}
s>8191&&((r||(r=[])).push(String.fromCharCode.apply(String,n)),s=0)
}
return l&&(n[s++]=o[a],n[s++]=61,1===l&&(n[s++]=61)),r?(s&&r.push(String.fromCharCode.apply(String,n.slice(0,s))),
r.join("")):String.fromCharCode.apply(String,n.slice(0,s))
}
a.decode=function(e,t,i){
for(var a,o=i,n=0,s=0;s<e.length;){
var l=e.charCodeAt(s++)
if(61===l&&n>1){
break
}
if(void 0===(l=r[l])){
throw Error("invalid encoding")
}
switch(n){
case 0:
a=l,n=1
break
case 1:
t[i++]=a<<2|(48&l)>>4,a=l,n=2
break
case 2:
t[i++]=(15&a)<<4|(60&l)>>2,a=l,n=3
break
case 3:
t[i++]=(3&a)<<6|l,n=0
}
}
if(1===n){
throw Error("invalid encoding")
}
return i-o
},a.test=function(e){
return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
}
},function(e,t,i){
"use strict"
function a(){
this._listeners={}
}
e.exports=a,a.prototype.on=function(e,t,i){
return(this._listeners[e]||(this._listeners[e]=[])).push({
fn:t,
ctx:i||this
}),this
},a.prototype.off=function(e,t){
if(void 0===e){
this._listeners={}
}else if(void 0===t){
this._listeners[e]=[]
}else{
for(var i=this._listeners[e],a=0;a<i.length;){
i[a].fn===t?i.splice(a,1):++a
}
}
return this
},a.prototype.emit=function(e){
var t=this._listeners[e]
if(t){
for(var i=[],a=1;a<arguments.length;){
i.push(arguments[a++])
}
for(a=0;a<t.length;){
t[a].fn.apply(t[a++].ctx,i)
}
}
return this
}
},function(e,t,i){
"use strict"
function a(e){
return"undefined"!=typeof Float32Array?function(){
var t=new Float32Array([-0]),i=new Uint8Array(t.buffer),a=128===i[3]
function o(e,a,o){
t[0]=e,a[o]=i[0],a[o+1]=i[1],a[o+2]=i[2],a[o+3]=i[3]
}
function r(e,a,o){
t[0]=e,a[o]=i[3],a[o+1]=i[2],a[o+2]=i[1],a[o+3]=i[0]
}
function n(e,a){
return i[0]=e[a],i[1]=e[a+1],i[2]=e[a+2],i[3]=e[a+3],t[0]
}
function s(e,a){
return i[3]=e[a],i[2]=e[a+1],i[1]=e[a+2],i[0]=e[a+3],t[0]
}
e.writeFloatLE=a?o:r,e.writeFloatBE=a?r:o,e.readFloatLE=a?n:s,e.readFloatBE=a?s:n
}():function(){
function t(e,t,i,a){
var o=t<0?1:0
if(o&&(t=-t),0===t){
e(1/t>0?0:2147483648,i,a)
}else if(isNaN(t)){
e(2143289344,i,a)
}else if(t>34028234663852886e22){
e((o<<31|2139095040)>>>0,i,a)
}else if(t<11754943508222875e-54){
e((o<<31|Math.round(t/1401298464324817e-60))>>>0,i,a)
}else{
var r=Math.floor(Math.log(t)/Math.LN2)
e((o<<31|r+127<<23|8388607&Math.round(t*Math.pow(2,-r)*8388608))>>>0,i,a)
}
}
function i(e,t,i){
var a=e(t,i),o=2*(a>>31)+1,r=a>>>23&255,n=8388607&a
return 255===r?n?NaN:o*(1/0):0===r?1401298464324817e-60*o*n:o*Math.pow(2,r-150)*(n+8388608)
}
e.writeFloatLE=t.bind(null,o),e.writeFloatBE=t.bind(null,r),e.readFloatLE=i.bind(null,n),
e.readFloatBE=i.bind(null,s)
}(),"undefined"!=typeof Float64Array?function(){
var t=new Float64Array([-0]),i=new Uint8Array(t.buffer),a=128===i[7]
function o(e,a,o){
t[0]=e,a[o]=i[0],a[o+1]=i[1],a[o+2]=i[2],a[o+3]=i[3],a[o+4]=i[4],
a[o+5]=i[5],a[o+6]=i[6],
a[o+7]=i[7]
}
function r(e,a,o){
t[0]=e,a[o]=i[7],a[o+1]=i[6],a[o+2]=i[5],a[o+3]=i[4],a[o+4]=i[3],
a[o+5]=i[2],a[o+6]=i[1],
a[o+7]=i[0]
}
function n(e,a){
return i[0]=e[a],i[1]=e[a+1],i[2]=e[a+2],i[3]=e[a+3],i[4]=e[a+4],
i[5]=e[a+5],i[6]=e[a+6],
i[7]=e[a+7],t[0]
}
function s(e,a){
return i[7]=e[a],i[6]=e[a+1],i[5]=e[a+2],i[4]=e[a+3],i[3]=e[a+4],
i[2]=e[a+5],i[1]=e[a+6],
i[0]=e[a+7],t[0]
}
e.writeDoubleLE=a?o:r,e.writeDoubleBE=a?r:o,e.readDoubleLE=a?n:s,e.readDoubleBE=a?s:n
}():function(){
function t(e,t,i,a,o,r){
var n=a<0?1:0
if(n&&(a=-a),0===a){
e(0,o,r+t),e(1/a>0?0:2147483648,o,r+i)
}else if(isNaN(a)){
e(0,o,r+t),e(2146959360,o,r+i)
}else if(a>17976931348623157e292){
e(0,o,r+t),e((n<<31|2146435072)>>>0,o,r+i)
}else{
var s
if(a<22250738585072014e-324){
e((s=a/5e-324)>>>0,o,r+t),e((n<<31|s/4294967296)>>>0,o,r+i)
}else{
var l=Math.floor(Math.log(a)/Math.LN2)
1024===l&&(l=1023),e(4503599627370496*(s=a*Math.pow(2,-l))>>>0,o,r+t),e((n<<31|l+1023<<20|1048576*s&1048575)>>>0,o,r+i)
}
}
}
function i(e,t,i,a,o){
var r=e(a,o+t),n=e(a,o+i),s=2*(n>>31)+1,l=n>>>20&2047,c=4294967296*(1048575&n)+r
return 2047===l?c?NaN:s*(1/0):0===l?5e-324*s*c:s*Math.pow(2,l-1075)*(c+4503599627370496)
}
e.writeDoubleLE=t.bind(null,o,0,4),e.writeDoubleBE=t.bind(null,r,4,0),e.readDoubleLE=i.bind(null,n,0,4),
e.readDoubleBE=i.bind(null,s,4,0)
}(),e
}
function o(e,t,i){
t[i]=255&e,t[i+1]=e>>>8&255,t[i+2]=e>>>16&255,t[i+3]=e>>>24
}
function r(e,t,i){
t[i]=e>>>24,t[i+1]=e>>>16&255,t[i+2]=e>>>8&255,t[i+3]=255&e
}
function n(e,t){
return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0
}
function s(e,t){
return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0
}
e.exports=a(a)
},function(module,exports,__webpack_require__){
"use strict"
function inquire(moduleName){
try{
var mod=eval("quire".replace(/^/,"re"))(moduleName)
if(mod&&(mod.length||Object.keys(mod).length)){
return mod
}
}catch(e){}
return null
}
module.exports=inquire
},function(e,t,i){
"use strict"
var a=t
a.length=function(e){
for(var t=0,i=0,a=0;a<e.length;++a){
(i=e.charCodeAt(a))<128?t+=1:i<2048?t+=2:55296==(64512&i)&&56320==(64512&e.charCodeAt(a+1))?(++a,
t+=4):t+=3
}
return t
},a.read=function(e,t,i){
if(i-t<1){
return""
}
for(var a,o=null,r=[],n=0;t<i;){
(a=e[t++])<128?r[n++]=a:a>191&&a<224?r[n++]=(31&a)<<6|63&e[t++]:a>239&&a<365?(a=((7&a)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++])-65536,
r[n++]=55296+(a>>10),
r[n++]=56320+(1023&a)):r[n++]=(15&a)<<12|(63&e[t++])<<6|63&e[t++],
n>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,r)),
n=0)
}
return o?(n&&o.push(String.fromCharCode.apply(String,r.slice(0,n))),o.join("")):String.fromCharCode.apply(String,r.slice(0,n))
},
a.write=function(e,t,i){
for(var a,o,r=i,n=0;n<e.length;++n){
(a=e.charCodeAt(n))<128?t[i++]=a:a<2048?(t[i++]=a>>6|192,
t[i++]=63&a|128):55296==(64512&a)&&56320==(64512&(o=e.charCodeAt(n+1)))?(a=65536+((1023&a)<<10)+(1023&o),
++n,
t[i++]=a>>18|240,t[i++]=a>>12&63|128,t[i++]=a>>6&63|128,t[i++]=63&a|128):(t[i++]=a>>12|224,
t[i++]=a>>6&63|128,
t[i++]=63&a|128)
}
return i-r
}
},function(e,t,i){
"use strict"
e.exports=function(e,t,i){
var a=i||8192,o=a>>>1,r=null,n=a
return function(i){
if(i<1||i>o){
return e(i)
}
n+i>a&&(r=e(a),n=0)
var s=t.call(r,n,n+=i)
return 7&n&&(n=1+(7|n)),s
}
}
},function(e,t,i){
"use strict"
e.exports=o
var a=i(5)
function o(e,t){
this.lo=e>>>0,this.hi=t>>>0
}
var r=o.zero=new o(0,0)
r.toNumber=function(){
return 0
},r.zzEncode=r.zzDecode=function(){
return this
},r.length=function(){
return 1
}
var n=o.zeroHash="\0\0\0\0\0\0\0\0"
o.fromNumber=function(e){
if(0===e){
return r
}
var t=e<0
t&&(e=-e)
var i=e>>>0,a=(e-i)/4294967296>>>0
return t&&(a=~a>>>0,i=~i>>>0,++i>4294967295&&(i=0,++a>4294967295&&(a=0))),new o(i,a)
},
o.from=function(e){
if("number"==typeof e){
return o.fromNumber(e)
}
if(a.isString(e)){
if(!a.Long){
return o.fromNumber(parseInt(e,10))
}
e=a.Long.fromString(e)
}
return e.low||e.high?new o(e.low>>>0,e.high>>>0):r
},o.prototype.toNumber=function(e){
if(!e&&this.hi>>>31){
var t=1+~this.lo>>>0,i=~this.hi>>>0
return t||(i=i+1>>>0),-(t+4294967296*i)
}
return this.lo+4294967296*this.hi
},o.prototype.toLong=function(e){
return a.Long?new a.Long(0|this.lo,0|this.hi,Boolean(e)):{
low:0|this.lo,
high:0|this.hi,
unsigned:Boolean(e)
}
}
var s=String.prototype.charCodeAt
o.fromHash=function(e){
return e===n?r:new o((s.call(e,0)|s.call(e,1)<<8|s.call(e,2)<<16|s.call(e,3)<<24)>>>0,(s.call(e,4)|s.call(e,5)<<8|s.call(e,6)<<16|s.call(e,7)<<24)>>>0)
},
o.prototype.toHash=function(){
return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)
},
o.prototype.zzEncode=function(){
var e=this.hi>>31
return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this
},
o.prototype.zzDecode=function(){
var e=-(1&this.lo)
return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this
},
o.prototype.length=function(){
var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,i=this.hi>>>24
return 0===i?0===t?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:i<128?9:10
}
},function(e,t,i){
"use strict"
e.exports=n
var a=i(14)
;(n.prototype=Object.create(a.prototype)).constructor=n
var o=i(5),r=o.Buffer
function n(){
a.call(this)
}
n.alloc=function(e){
return(n.alloc=o._Buffer_allocUnsafe)(e)
}
var s=r&&r.prototype instanceof Uint8Array&&"set"===r.prototype.set.name?function(e,t,i){
t.set(e,i)
}:function(e,t,i){
if(e.copy){
e.copy(t,i,0,e.length)
}else{
for(var a=0;a<e.length;){
t[i++]=e[a++]
}
}
}
function l(e,t,i){
e.length<40?o.utf8.write(e,t,i):t.utf8Write(e,i)
}
n.prototype.bytes=function(e){
o.isString(e)&&(e=o._Buffer_from(e,"base64"))
var t=e.length>>>0
return this.uint32(t),t&&this._push(s,t,e),this
},n.prototype.string=function(e){
var t=r.byteLength(e)
return this.uint32(t),t&&this._push(l,t,e),this
}
},function(e,t,i){
"use strict"
e.exports=r
var a=i(15)
;(r.prototype=Object.create(a.prototype)).constructor=r
var o=i(5)
function r(e){
a.call(this,e)
}
o.Buffer&&(r.prototype._slice=o.Buffer.prototype.slice),r.prototype.string=function(){
var e=this.uint32()
return this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len))
}
},function(e,t,i){
"use strict"
t.Service=i(50)
},function(e,t,i){
"use strict"
e.exports=o
var a=i(5)
function o(e,t,i){
if("function"!=typeof e){
throw TypeError("rpcImpl must be a function")
}
a.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=Boolean(t),this.responseDelimited=Boolean(i)
}
(o.prototype=Object.create(a.EventEmitter.prototype)).constructor=o,o.prototype.rpcCall=function e(t,i,o,r,n){
if(!r){
throw TypeError("request must be specified")
}
var s=this
if(!n){
return a.asPromise(e,s,t,i,o,r)
}
if(s.rpcImpl){
try{
return s.rpcImpl(t,i[s.requestDelimited?"encodeDelimited":"encode"](r).finish(),(function(e,i){
if(e){
return s.emit("error",e,t),n(e)
}
if(null!==i){
if(!(i instanceof o)){
try{
i=o[s.responseDelimited?"decodeDelimited":"decode"](i)
}catch(e){
return s.emit("error",e,t),n(e)
}
}
return s.emit("data",i,t),n(null,i)
}
s.end(!0)
}))
}catch(e){
return s.emit("error",e,t),void setTimeout((function(){
n(e)
}),0)
}
}else{
setTimeout((function(){
n(Error("already ended"))
}),0)
}
},o.prototype.end=function(e){
return this.rpcImpl&&(e||this.rpcImpl(null,null,null),
this.rpcImpl=null,this.emit("end").off()),
this
}
},function(e,t,i){
"use strict"
e.exports={}
},function(e,t,i){
e.exports={
locale:i(12)
}
},function(e,t,i){
"use strict"
i.r(t)
var a=i(1),o=a.a.Symbol,r=Object.prototype,n=r.hasOwnProperty,s=r.toString,l=o?o.toStringTag:void 0
var c=function(e){
var t=n.call(e,l),i=e[l]
try{
e[l]=void 0
var a=!0
}catch(e){}
var o=s.call(e)
return a&&(t?e[l]=i:delete e[l]),o
},u=Object.prototype.toString
var p=function(e){
return u.call(e)
},d="[object Null]",g="[object Undefined]",m=o?o.toStringTag:void 0
var h=function(e){
return null==e?void 0===e?g:d:m&&m in Object(e)?c(e):p(e)
}
var k=function(e){
var t=typeof e
return null!=e&&("object"==t||"function"==t)
},b="[object AsyncFunction]",f="[object Function]",y="[object GeneratorFunction]",v="[object Proxy]"
var w,j=function(e){
if(!k(e)){
return!1
}
var t=h(e)
return t==f||t==y||t==b||t==v
},A=a.a["__core-js_shared__"],S=(w=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+w:""
var T=function(e){
return!!S&&S in e
},O=Function.prototype.toString
var E=function(e){
if(null!=e){
try{
return O.call(e)
}catch(e){}
try{
return e+""
}catch(e){}
}
return""
},I=/^\[object .+?Constructor\]$/,R=Function.prototype,_=Object.prototype,B=R.toString,C=_.hasOwnProperty,z=RegExp("^"+B.call(C).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
var N=function(e){
return!(!k(e)||T(e))&&(j(e)?z:I).test(E(e))
}
var P=function(e,t){
return null==e?void 0:e[t]
}
var x=function(e,t){
var i=P(e,t)
return N(i)?i:void 0
},W=function(){
try{
var e=x(Object,"defineProperty")
return e({},"",{}),e
}catch(e){}
}()
var L=function(e,t,i){
"__proto__"==t&&W?W(e,t,{
configurable:!0,
enumerable:!0,
value:i,
writable:!0
}):e[t]=i
}
var U=function(e,t){
return e===t||e!=e&&t!=t
},D=Object.prototype.hasOwnProperty
var V=function(e,t,i){
var a=e[t]
D.call(e,t)&&U(a,i)&&(void 0!==i||t in e)||L(e,t,i)
}
var q=function(e,t,i,a){
var o=!i
i||(i={})
for(var r=-1,n=t.length;++r<n;){
var s=t[r],l=a?a(i[s],e[s],s,i,e):void 0
void 0===l&&(l=e[s]),o?L(i,s,l):V(i,s,l)
}
return i
}
var G=function(e){
return e
}
var M=function(e,t,i){
switch(i.length){
case 0:
return e.call(t)
case 1:
return e.call(t,i[0])
case 2:
return e.call(t,i[0],i[1])
case 3:
return e.call(t,i[0],i[1],i[2])
}
return e.apply(t,i)
},F=Math.max
var H=function(e,t,i){
return t=F(void 0===t?e.length-1:t,0),function(){
for(var a=arguments,o=-1,r=F(a.length-t,0),n=Array(r);++o<r;){
n[o]=a[t+o]
}
o=-1
for(var s=Array(t+1);++o<t;){
s[o]=a[o]
}
return s[t]=i(n),M(e,this,s)
}
}
var Y=function(e){
return function(){
return e
}
},K=W?function(e,t){
return W(e,"toString",{
configurable:!0,
enumerable:!1,
value:Y(t),
writable:!0
})
}:G,Z=800,J=16,Q=Date.now
var X=function(e){
var t=0,i=0
return function(){
var a=Q(),o=J-(a-i)
if(i=a,o>0){
if(++t>=Z){
return arguments[0]
}
}else{
t=0
}
return e.apply(void 0,arguments)
}
}(K)
var $=function(e,t){
return X(H(e,t,G),e+"")
},ee=9007199254740991
var te=function(e){
return"number"==typeof e&&e>-1&&e%1==0&&e<=ee
}
var ie=function(e){
return null!=e&&te(e.length)&&!j(e)
},ae=9007199254740991,oe=/^(?:0|[1-9]\d*)$/
var re=function(e,t){
var i=typeof e
return!!(t=null==t?ae:t)&&("number"==i||"symbol"!=i&&oe.test(e))&&e>-1&&e%1==0&&e<t
}
var ne=function(e,t,i){
if(!k(i)){
return!1
}
var a=typeof t
return!!("number"==a?ie(i)&&re(t,i.length):"string"==a&&t in i)&&U(i[t],e)
}
var se=function(e){
return $((function(t,i){
var a=-1,o=i.length,r=o>1?i[o-1]:void 0,n=o>2?i[2]:void 0
for(r=e.length>3&&"function"==typeof r?(o--,r):void 0,n&&ne(i[0],i[1],n)&&(r=o<3?void 0:r,
o=1),
t=Object(t);++a<o;){
var s=i[a]
s&&e(t,s,a,r)
}
return t
}))
}
var le=function(e,t){
for(var i=-1,a=Array(e);++i<e;){
a[i]=t(i)
}
return a
}
var ce=function(e){
return null!=e&&"object"==typeof e
},ue="[object Arguments]"
var pe=function(e){
return ce(e)&&h(e)==ue
},de=Object.prototype,ge=de.hasOwnProperty,me=de.propertyIsEnumerable,he=pe(function(){
return arguments
}())?pe:function(e){
return ce(e)&&ge.call(e,"callee")&&!me.call(e,"callee")
},ke=Array.isArray,be=i(3),fe={}
fe["[object Float32Array]"]=fe["[object Float64Array]"]=fe["[object Int8Array]"]=fe["[object Int16Array]"]=fe["[object Int32Array]"]=fe["[object Uint8Array]"]=fe["[object Uint8ClampedArray]"]=fe["[object Uint16Array]"]=fe["[object Uint32Array]"]=!0,
fe["[object Arguments]"]=fe["[object Array]"]=fe["[object ArrayBuffer]"]=fe["[object Boolean]"]=fe["[object DataView]"]=fe["[object Date]"]=fe["[object Error]"]=fe["[object Function]"]=fe["[object Map]"]=fe["[object Number]"]=fe["[object Object]"]=fe["[object RegExp]"]=fe["[object Set]"]=fe["[object String]"]=fe["[object WeakMap]"]=!1
var ye=function(e){
return ce(e)&&te(e.length)&&!!fe[h(e)]
}
var ve=function(e){
return function(t){
return e(t)
}
},we=i(4),je=we.a&&we.a.isTypedArray,Ae=je?ve(je):ye,Se=Object.prototype.hasOwnProperty
var Te=function(e,t){
var i=ke(e),a=!i&&he(e),o=!i&&!a&&Object(be.a)(e),r=!i&&!a&&!o&&Ae(e),n=i||a||o||r,s=n?le(e.length,String):[],l=s.length
for(var c in e){
!t&&!Se.call(e,c)||n&&("length"==c||o&&("offset"==c||"parent"==c)||r&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||re(c,l))||s.push(c)
}
return s
},Oe=Object.prototype
var Ee=function(e){
var t=e&&e.constructor
return e===("function"==typeof t&&t.prototype||Oe)
}
var Ie=function(e){
var t=[]
if(null!=e){
for(var i in Object(e)){
t.push(i)
}
}
return t
},Re=Object.prototype.hasOwnProperty
var _e=function(e){
if(!k(e)){
return Ie(e)
}
var t=Ee(e),i=[]
for(var a in e){
("constructor"!=a||!t&&Re.call(e,a))&&i.push(a)
}
return i
}
var Be=function(e){
return ie(e)?Te(e,!0):_e(e)
},Ce=se((function(e,t){
q(t,Be(t),e)
}))
const ze=i(12)
class Ne{
constructor(){
this.RATING_PENDING=-1,this.RATING_NONE=0,this.RATING_GOOD=1,this.RATING_AVERAGE=2,
this.RATING_BAD=3,
this.EXT_TYPE_AOS=1,this.EXT_TYPE_SP=2,this.EXT_TYPE_AOSP=3,this.EXT_TYPE_ABOS=4,
this.EXT_TYPE_SP_AP=5,
this.EXT_TYPE_AOS_SZ=6,this.EXT_TYPE_WTU=7,this.BRANDING_TYPE_AVAST=0,
this.BRANDING_TYPE_AVG=1,
this.browserVersion=0,this.ABEK={
locale:ze
},this.initedTabs={},this.AvastConfig={
get:function(e){
function t(e){
return!/[A-Fa-f0-9]{64}/.test(e)&&/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/.test(e)
}
this.getStorage(this.AvastConfig.config.localStorageKeyName,(function(i){
let a=JSON.parse(i)
for(let e in a){
a[e]&&t(a[e])&&(a[e]=window.atob(a[e]))
}
e(a?JSON.stringify(a):a)
}))
}.bind(this),
set:function(e){
let t=JSON.parse(JSON.stringify(e))
for(let i in e){
t[i]&&(t[i]=window.btoa(e[i]))
}
this.setStorage(this.AvastConfig.config.localStorageKeyName,JSON.stringify(t))
}.bind(this),
config:{
localStorageKeyName:"AvastConfig"
}
}
}
init(e){
return this.bs.initPlatform(),this.CONFIG.CALLERID=e,this.CONFIG.LOCAL_ENABLED=this.Utils.getBrowserInfo().isWindows(),
this.CONFIG.VERSION=this.bs.getVersion(),
this.CONFIG.OS_VERSION=this.Utils.getBrowserInfo().getOSBuild(),
this.CONFIG.OS=this.Utils.getBrowserInfo().getOSType(),
this.load(),this.bindEvents(),
this
}
serializeWebshieldStatus(){
let e=null
if(this.CONFIG.WEBSHIELD){
let t=this.CONFIG.WEBSHIELD
e=[t.ProviderEnabled,t.TemporaryDisabled,t.HttpsScanning,t.WebScanning,t.ScriptScanning,t.URLBlocking,t.HardenedMode,t.TaskSensitivity,t.PassiveMode,t.RestartNeeded].join(",")
}
return e
}
getBrowserVersion(){
var e=0,t=this.Utils.getBrowserInfo().getBrowserVersion().match(/(\d)+/)
return"object"==typeof t&&null!=t&&t.length>0&&(e=parseInt(t[0])),e
}
getWTUSearchURL(){
var e=this.CONFIG.SEARCH_URL
return e+="sap=wtu",e+="&pid=wtu",e+="&cid=%7B"+this.CONFIG.PLG_GUID.toUpperCase()+"%7D",
e+="&mid="+this.CONFIG.GUID.toUpperCase(),
e+="&ds=AVG",e+="&v="+this.CONFIG.VERSION,
e+="&lang="+this.ABEK.locale.getBrowserLang().toLowerCase(),
e+="&pr=fr",e+="&d="+encodeURIComponent(this.CONFIG.InstallDate),
e+="&ud=xx",e+="&cmpid=0000xx",
e+="&domain=mysearch.avg.com",e+="&FileUpdateDate=1503997528000",
e+="&protocol=https",
e+="&q="
}
getWindowStorage(e){
return 0===this.browserVersion&&(this.browserVersion=this.getBrowserVersion()),
this.Utils.getBrowserInfo().isFirefox()&&this.browserVersion<48||"undefined"==typeof localStorage?this.bs.getLocalStorage().getItem(storage):localStorage[e]
}
getStorage(e,t){
if(0===this.browserVersion&&(this.browserVersion=this.getBrowserVersion()),
this.Utils.getBrowserInfo().isSafari()){
const i=localStorage.getItem(e)
t("string"==typeof i?JSON.parse(i):i)
}else{
if(!(this.Utils.getBrowserInfo().isFirefox()&&this.browserVersion<48||"undefined"==typeof localStorage)){
return this.bs.getLocalStorage(e,t)
}
t(JSON.parse(this.bs.getLocalStorage().getItem(e)))
}
}
getStorageAsync(e){
var t=this
return new Promise((function(i,a){
t.getStorage(e,(function(e,t){
if(!e){
return a(t)
}
i(e)
}))
}))
}
setStorage(e,t){
0===this.browserVersion&&(this.browserVersion=this.getBrowserVersion()),
this.Utils.getBrowserInfo().isSafari()?localStorage.setItem(e,JSON.stringify(t)):this.Utils.getBrowserInfo().isFirefox()&&this.browserVersion<48||"undefined"==typeof localStorage?this.bs.getLocalStorage().setItem(e,JSON.stringify(t)):this.bs.setLocalStorage(e,t)
}
bindEvents(){}
load(){
this.Cache.load()
}
getUrlInfoUnthrottled(e,t){
return"object"==typeof e&&(e.customKeyValue=e.customKeyValue||[],
e.customKeyValue.push({
key:"throttled",
value:!1
})),this.getUrlInfo(e,t)
}
getUrlInfoThrottled(e,t){
return"object"==typeof e&&(e.customKeyValue=e.customKeyValue||[],
e.customKeyValue.push({
key:"throttled",
value:!0
})),this.getUrlInfo(e,t)
}
getUrlInfo(e,t){
let i=this
var a=[],o=[],r=0,n=[],s=null,l=[]
if(e){
var c=typeof e
"string"==c?l=[e]:"object"==c&&(e.url?(s=e,l=e.url instanceof Array?e.url:[e.url]):l=e)
for(var u=0,p=l.length;u<p;u++){
var d=l[u],g=null,m=null
if("string"==typeof d?g=d.trim():d&&d.url&&(g=d.url.trim(),m=d.fullUrl),g&&(this.bs.checkUrl(g)||l.length>1)){
if(this.bal.sp){
var h=this.Cache.get(0===g.indexOf("http")?this.Utils.getDomain(g):g)
}else if(this.bal.aos){
h=!1
}
h?n.push(h):(a.push(g),o.push(m),m&&r++)
}
}
if(0===a.length&&n.length>0){
return t(n)
}
if(0!==a.length){
var k={
url:a,
callback:function(e){
for(var i=0,a=n.length;i<a;i++){
e.push(n[i])
}
t(e)
}
}
if(s){
switch(k.referer=s.referer,k.tabNum=s.tabNum,k.windowNum=s.windowNum,k.reqServices=s.reqServices,
k.originType=s.originType,
k.customKeyValue=s.customKeyValue,k.fromCache=s.fromCache,
k.clientTimestamp=s.clientTimestamp,
typeof s.tabUpdated){
case"undefined":
k.windowEvent=i.EV_TYPE_CLICK
break
case"boolean":
k.windowEvent=s.tabUpdated?i.EV_TYPE_CLICK:i.EV_TYPE_TABFOCUS
break
default:
k.windowEvent=s.tabUpdated
}
}else{
k.url.length>1&&(k.windowEvent=this.proto.UrlInfo.EventType.SERP)
}
r>0&&(k.fullUrls=o),new this.Query.UrlInfo(this,k)
}
}
}
setVote(e,t,i){
new this.Query.Vote(this,Ce({
url:e,
method:"put",
callback:function(e){
i&&i(e)
}
},t))
}
loginRefresh(){}
onTabRemoved(e,t){
t&&t.isWindowClosing&&this.Utils.Burger&&this.CONFIG.EXT_TYPE==this.EXT_TYPE_SP&&this.Utils.Burger.initBurger(!0,!0),
delete this.initedTabs[e],
delete this.bs.tabsMessagesBuffer[e],this.TabReqCache.drop(e)
}
onSendHeaders(e){
let t=this.bs.retrieveRequestHeaderValue(e.requestHeaders,"Referer")
if(-1!==e.url.indexOf(atob("d3d3LmZhY2Vib29rLmNvbS90cg=="))&&-1!==e.url.indexOf(atob("dGVzY28uY29t"))){
var i={}
i.url=e.url,i.referer=t,i.customKeyValue=[{
key:"request",
value:"ajax"
}],i.reqServices=0,this.get(i,(function(e){}))
}
"main_frame"===e.type?(this.TabReqCache.set(e.tabId,"referer",t),this.bs.ciuvoASdetector&&this.bs.ciuvoASdetector.onNavigationEvent(e.tabId,e.url,e.requestId,e.timeStamp)):this.TabReqCache.set("request_"+e.requestId,"referer",t)
}
onErrorOccurred(e){
this.TabReqCache.drop("request_"+e.requestId)
}
onCompleted(e){
this.TabReqCache.drop("request_"+e.requestId)
}
}
class Pe{
constructor(e,t,i,a){
this.AvastWRC=e,this.url=t,this.defaults={
ajax:null,
rating:-1,
weight:-1,
flagmask:null,
flags:{
shopping:null,
social:null,
news:null,
it:null,
corporate:null,
pornography:null,
violence:null,
gambling:null,
drugs:null,
illegal:null,
others:null
},
phishing:null,
phishingDomain:null,
is_typo:!1,
block:-1,
ttl:3600,
ttl_multi:3600,
ttl_phishing:3600,
rating_level:0
},i.webrep?(this.values=Ce({},this.defaults,{
ajax:i.ajax
},i.phishing,i.webrep,i.blocker,i.typo),i.webrep.hasOwnProperty("rating_level")||(this.values.rating_level=this.defaults.rating_level),
a?this.values.ttl_multi=i.webrep.ttl:this.values.ttl=i.webrep.ttl,
i.phishing&&(this.values.ttl_phishing=i.phishing.ttl),
i.webrep.hasOwnProperty("rating_level")&&i.webrep.rating_level&&(this.values.rating_level=i.webrep.rating_level)):this.values=Ce({},this.defaults,i),
this.values.expireTime=this.values.phishing>1||1==this.values.block||this.values.phishingDomain>1&&0==this.values.rating_level?this.setExpireTime(this.values.ttl_phishing):this.setExpireTime(this.values.ttl),
this.values.expireTimeMulti=this.setExpireTime(this.values.ttl_multi),
this.values.flagmask?this.flagsToMask():"number"==typeof this.values.flags&&this.flagsFromMask(this.values.flags),
this.save()
}
save(){
this.AvastWRC.Cache.set(this.url,this)
}
clearProperty(e){
this.values[e]&&(this.values[e]=this.defaults[e])
}
setExpireTime(e){
let t=this.AvastWRC
return void 0===e&&(e=this.AvastWRC.DEFAULTS.TTL),this.AvastWRC.Utils.dateFormat(new Date((new Date).valueOf()+1e3*e),t.TTL_DATE_FORMAT)
}
getExpireTime(){
return this.values.expireTime
}
getExpireTimeMulti(){
return this.values.expireTimeMulti
}
getAll(){
return Ce({},this.values)
}
getPhishing(){
return this.values.phishing
}
getPhishingDomain(){
return this.values.phishingDomain
}
getBlocker(){
return this.values.block
}
getRating(){
return this.values.rating
}
getRatingLevel(){
return this.values.rating_level
}
getWeight(){
return this.values.weight
}
getFlags(e){
if(!e){
return this.values.flags
}
var t={}
for(var i in this.values.flags){
1==this.values.flags[i]&&(t[i]=!0)
}
return t
}
setFlags(e){
this.values.flags=Ce(this.values.flags,e),this.flagsToBitmask()
}
getFlag(e){
this.values.flags[e]
}
setFlag(e,t){
t?(this.values.flags[e]=!0,this.values.flagsmask.addBitmask(this.AvastWRC.DEFAULTS.WEBREP_FLAGS_MASK[e])):(this.values.flags[e]=null,
this.values.flagsmask.removeBitmask(this.AvastWRC.DEFAULTS.WEBREP_FLAGS_MASK[e]))
}
flagsFromMask(e){
this.values.flagmask=this.AvastWRC.Utils.BitWriter(e),this.values.flags=this.AvastWRC.Bitmask.fromMask(this.values.flagmask,this.AvastWRC.DEFAULTS.WEBREP_FLAGS_MASK)
}
flagsToMask(e){
if(!e){
e=this.values.flags
}
this.values.flagmask=this.AvastWRC.Bitmask.toMask(e,this.AvastWRC.DEFAULTS.WEBREP_FLAGS_MASK)
}
getRatingCategoryOld(){
let e=this.AvastWRC
var t=this.getRating()
return t>=0&&t<=e.RATING_THRESHOLD_BAD?e.RATING_BAD:t>e.RATING_THRESHOLD_BAD&&t<=e.RATING_THRESHOLD_AVERAGE?e.RATING_AVERAGE:t>e.RATING_THRESHOLD_AVERAGE&&t<=e.RATING_THRESHOLD_GOOD?e.RATING_GOOD:e.RATING_NONE
}
getRatingCategoryV4(){
let e=this.AvastWRC
if(this.getPhishing()>1||this.getBlocker()>0){
return e.RATING_BAD
}
if(this.getRating()>-1){
var t=this.getRating()
return t>=0&&t<=e.RATING_THRESHOLD_AVERAGE?e.RATING_AVERAGE:e.RATING_GOOD
}
return e.RATING_NONE
}
getRatingCategory(){
let e=this.AvastWRC
return-1===this.getRatingLevel()?this.getRatingCategoryV4():this.getPhishing()>1||this.getBlocker()>0?e.RATING_BAD:this.getRatingLevel()
}
getWeightCategory(){
return this.AvastWRC.WEIGHT3
}
getIcon(){
let e=this.AvastWRC
if(this.getPhishing()>1){
return e.ICON_STRING33
}
switch(this.getRatingCategory()){
case e.RATING_NONE:
return e.ICON_STRING0
case e.RATING_GOOD:
switch(this.getWeightCategory()){
case e.WEIGHT1:
return e.ICON_STRING11
case e.WEIGHT2:
return e.ICON_STRING12
case e.WEIGHT3:
return e.ICON_STRING13
default:
return e.ICON_STRING0
}
break
case e.RATING_AVERAGE:
switch(this.getWeightCategory()){
case e.WEIGHT1:
return e.ICON_STRING21
case e.WEIGHT2:
return e.ICON_STRING22
case e.WEIGHT3:
return e.ICON_STRING23
default:
return e.ICON_STRING0
}
break
case e.RATING_BAD:
switch(this.getWeightCategory()){
case e.WEIGHT1:
return e.ICON_STRING31
case e.WEIGHT2:
return e.ICON_STRING32
case e.WEIGHT3:
return e.ICON_STRING33
default:
return e.ICON_STRING0
}
break
case e.RATING_PENDING:
default:
return"wrcx"
}
}
getRatingReasonString(){
let e=this.AvastWRC
switch(this.getRatingCategory()){
case e.RATING_NONE:
return e.REASON_UNKNOWN_TEXT
case e.RATING_GOOD:
case e.RATING_AVERAGE:
return""
case e.RATING_BAD:
if(this.getPhishing()>1&&this.getBlocker()>0||this.getBlocker()>0){
return e.REASON_BLOCKER_TEXT
}
if(this.getPhishing()>1){
return e.REASON_PHISHING_TEXT
}
default:
return""
}
}
getRatingString(){
let e=this.AvastWRC
switch(this.getRatingCategory()){
case e.RATING_NONE:
return e.RATING0_TEXT
case e.RATING_GOOD:
return e.RATING1_TEXT
case e.RATING_AVERAGE:
return e.RATING2_TEXT
case e.RATING_BAD:
if(this.getPhishing()>1&&this.getBlocker()>0||this.getBlocker()>0){
return e.RATING4_TEXT
}
if(this.getPhishing()>1){
return e.RATING3_TEXT
}
default:
return e.RATING0_TEXT
}
}
getScoreClass(){
let e=this.AvastWRC
switch(this.getRatingCategory()){
case e.RATING_NONE:
return"wrc0"
case e.RATING_GOOD:
switch(this.getWeightCategory()){
case e.WEIGHT1:
return"wrc11"
case e.WEIGHT2:
return"wrc12"
case e.WEIGHT3:
return"wrc13"
default:
return"wrc0"
}
break
case e.RATING_AVERAGE:
switch(this.getWeightCategory()){
case e.WEIGHT1:
return"wrc21"
case e.WEIGHT2:
return"wrc22"
case e.WEIGHT3:
return"wrc23"
default:
return"wrc0"
}
break
case e.RATING_BAD:
switch(this.getWeightCategory()){
case e.WEIGHT1:
return"wrc31"
case e.WEIGHT2:
return"wrc32"
case e.WEIGHT3:
return"wrc33"
default:
return"wrc0"
}
break
case e.RATING_PENDING:
default:
return"wrcx"
}
}
isMalware(){
return 1===this.values.block
}
isPhishing(){
return this.values.phishing>1
}
}
class xe{
constructor(e){
this.AvastWRC=e,this.cache={},this.throttle=this.AvastWRC.throttle
}
init(){
this.load(),this.clean()
}
load(){
this.AvastWRC.getStorage(this.AvastWRC.DEFAULTS.CACHE.DOMAIN,e=>{
"string"==typeof e&&(this.cache=JSON.parse(e),
setTimeout(this.clean.bind(self),6e4))
})
}
clean(){
for(var e in this.cache){
var t=this.cache[e]
t.expireTime&&14==t.expireTime.length&&this.validateTtl(t.expireTime)?this.ttl(e):this.remove(e)
}
}
ttl(e,t){
if(this.cache[e]){
if(this.cache[e]instanceof this.AvastWRC.WRCUrlInfo||(this.cache[e]=new this.AvastWRC.WRCUrlInfo(this.AvastWRC,e,this.cache[e])),
t){
if(!this.validateTtl(this.cache[e].getExpireTimeMulti())){
return void this.remove(e)
}
}else if(!this.validateTtl(this.cache[e].getExpireTime())){
return void this.remove(e)
}
return this.cache[e]
}
}
validateTtl(e){
let t=this.AvastWRC
return e>this.AvastWRC.Utils.dateFormat(new Date,t.TTL_DATE_FORMAT)
}
remove(e){
delete this.cache[e]
}
save(){
return this.throttle((function(){
var e={}
for(var t in this.cache){
e[t]=this.cache[t]instanceof AvastWRC.WRCUrlInfo?this.cache[t].getAll():this.cache[t]
}
this.storage=JSON.stringify(e),AvastWRC.setStorage(AvastWRC.DEFAULTS.CACHE.DOMAIN,this.storage)
}),2e3)
}
get(e,t){
if(this.cache[e]){
return this.ttl(e,t)
}
}
getNoTTL(e){
return this.cache[e]?this.cache[e]:this.cache[this.AvastWRC.Utils.getDomain(e)]?this.cache[this.AvastWRC.Utils.getDomain(e)]:void 0
}
set(e,t){
this.cache[e]&&delete this.cache[e],this.cache[e]=t,this.save()
var i=this.AvastWRC.Utils.getDomain(e)
e!=i&&null!=i&&(this.cache[i]=new this.AvastWRC.WRCUrlInfo(this.AvastWRC,i,Ce({},t.getAll())),
1==this.cache[i].getPhishingDomain()&&this.cache[i].clearProperty("phishing"))
}
}
class We{
constructor(){
this.reqCache={}
}
set(e,t,i){
var a=this.reqCache[e]
a?a[t]=i:((a={})[t]=i,this.reqCache[e]=a)
}
get(e,t){
var i=null,a=this.reqCache[e]
return a&&(i=a[t]),i
}
drop(e){
this.reqCache[e]&&delete this.reqCache[e]
}
tabIds(){
return Object.keys(this.reqCache)
}
}
class Le{
constructor(){
this.queue={}
}
set(e,t){
var i=this.queue[e]
i?i.push(t):((i=[]).push(t),this.queue[e]=i)
}
get(e){
var t=null,i=this.queue[e]
return i&&(t=i.pop()),t
}
drop(e){
this.queue[e]&&delete this.queue[e]
}
}
class Ue{
constructor(){
this.browser="",this.version="",this.OS="",this.OSVersion="",this.dataBrowser=[{
string:navigator.userAgent,
subString:"Edge",
identity:"MS_EDGE",
versionSearch:"Version"
},{
string:navigator.userAgent,
subString:"OPR",
identity:"OPERA",
versionSearch:"Version"
},{
string:navigator.userAgent,
subString:"Avast",
identity:"AVAST",
versionSearch:"Version"
},{
string:navigator.userAgent,
subString:"Chrome",
identity:"CHROME",
versionSearch:"Version"
},{
string:navigator.vendor,
subString:"Apple",
identity:"SAFARI",
versionSearch:"Version"
},{
string:navigator.userAgent,
subString:"Firefox",
identity:"FIREFOX",
versionSearch:"Version"
}],this.dataOS=[{
string:navigator.platform,
subString:"Win",
identity:"Windows"
},{
string:navigator.platform,
subString:"Mac",
identity:"Mac"
},{
string:navigator.userAgent,
subString:"iPhone",
identity:"iPhone/iPod"
},{
string:navigator.platform,
subString:"Linux",
identity:"Linux"
}],this.dataOSVersion=[{
string:navigator.userAgent,
subString:"Windows 10.0",
identity:"10.0 (Windows 10.0)"
},{
string:navigator.userAgent,
subString:"Windows NT 10.0",
identity:"10.0 (Windows NT 10.0)"
},{
string:navigator.userAgent,
subString:"Windows 8.1",
identity:"6.3 (Windows 8.1)"
},{
string:navigator.userAgent,
subString:"Windows NT 6.3",
identity:"6.3 (Windows NT 6.3)"
},{
string:navigator.userAgent,
subString:"Windows 8",
identity:"6.2 (Windows 8)"
},{
string:navigator.userAgent,
subString:"Windows NT 6.2",
identity:"6.2 (Windows NT 6.2)"
},{
string:navigator.userAgent,
subString:"Windows 7",
identity:"6.1 (Windows 7)"
},{
string:navigator.userAgent,
subString:"Windows NT 6.1",
identity:"6.1 (Windows NT 6.1)"
},{
string:navigator.userAgent,
subString:"Windows NT 6.0",
identity:"6.0 (Windows NT 6.0)"
},{
string:navigator.userAgent,
subString:"Windows NT 5.2",
identity:"5.2 (Windows NT 5.2)"
},{
string:navigator.userAgent,
subString:"Windows NT 5.1",
identity:"5.1 (Windows NT 5.1)"
},{
string:navigator.userAgent,
subString:"Windows XP",
identity:"5.1 (Windows XP)"
},{
string:navigator.userAgent,
subString:"Windows NT 5.0",
identity:"5.0 (Windows NT 5.0)"
},{
string:navigator.userAgent,
subString:"Windows 2000",
identity:"5.0 (Windows 2000)"
},{
string:navigator.userAgent,
subString:"Win 9x 4.90",
identity:"4.90 (Win 9x 4.90)"
},{
string:navigator.userAgent,
subString:"Windows ME",
identity:"4.90 (Windows ME)"
},{
string:navigator.userAgent,
subString:"Windows 98",
identity:"4.10 (Windows 98)"
},{
string:navigator.userAgent,
subString:"Win98",
identity:"4.10 (Win98)"
},{
string:navigator.userAgent,
subString:"Windows 95",
identity:"4.03 (Windows 95)"
},{
string:navigator.userAgent,
subString:"Win95",
identity:"4.03 (Win95)"
},{
string:navigator.userAgent,
subString:"Windows_95",
identity:"4.03 (Windows_95)"
},{
string:navigator.userAgent,
subString:"Windows NT 4.0",
identity:"4.0 (Windows NT 4.0)"
},{
string:navigator.userAgent,
subString:"WinNT4.0",
identity:"4.0 (WinNT4.0)"
},{
string:navigator.userAgent,
subString:"WinNT",
identity:"4.0 (WinNT)"
},{
string:navigator.userAgent,
subString:"Windows NT",
identity:"4.0 (Windows NT)"
},{
string:navigator.userAgent,
subString:"Win16",
identity:"3.11 (Win16)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_13",
identity:"10.13 (macOS High Sierra)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_12",
identity:"10.12 (macOS Sierra)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_11",
identity:"10.11 (macOS El Capitan)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_10",
identity:"10.10 (macOS Yosemite)"
},{
string:navigator.userAgent,
subString:"Intel Mac OS X 10_9",
identity:"10.9 (macOS Mavericks)"
}]
}
get(e){
if("browser"===e){
return""===this.browser&&(this.browser=this.searchString(this.dataBrowser)||"An unknown browser"),
this.browser
}
if("version"===e){
return""===this.version&&(this.version=this.searchVersion(this.dataBrowser)||"an unknown version"),
this.version
}
if("OS"===e){
return""===this.OS&&(this.OS=this.searchString(this.dataOS)||"an unknown OS"),
this.OS
}
if("OSVersion"===e){
return""===this.OSVersion&&(this.OSVersion=this.searchString(this.dataOSVersion)||"0.0 an unknown OS Version"),
this.OSVersion
}
if("OSType"===e){
switch(this.get("OS")){
case"Windows":
return"WIN"
case"Mac":
return"MAC"
case"iPhone/iPad":
return"IOS"
case"Linux":
return-1!==navigator.userAgent.indexOf("Android")?"ANDROID":"LINUX"
default:
return""
}
}
if("OSBuild"===e){
var t=this.get("OSVersion").match(/^[0-9.]+/)
return t?t[0]+".0":""
}
return"not found"
}
searchString(e){
for(var t=0;t<e.length;t++){
var i=e[t].string
if(this.versionSearchString=e[t].versionSearch||e[t].identity,i&&-1!=i.indexOf(e[t].subString)){
return e[t].identity
}
}
}
searchVersion(e){
for(var t=0;t<e.length;t++){
var i=e[t].string,a=new RegExp("("+e[t].subString+")/?\\s*([\\d\\.]+)","i"),o=i.match(a)||[]
if(3===o.length){
return o[2]
}
}
return!1
}
}
class De{
constructor(e){
this.AvastWRC=e,this.throttle=this.AvastWRC.throttle,this.dateFormat=function(){
var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,i=/[^-+\dA-Z]/g,a=function(e,t){
for(e=String(e),
t=t||2;e.length<t;){
e="0"+e
}
return e
}
return function(o,r,n){
var s=this.dateFormat
if(1!=arguments.length||"[object String]"!=Object.prototype.toString.call(o)||/\d/.test(o)||(r=o,
o=void 0),
o=o?new Date(o):new Date,isNaN(o)){
throw SyntaxError("invalid date")
}
"UTC:"==(r=String(s.masks[r]||r||s.masks.default)).slice(0,4)&&(r=r.slice(4),n=!0)
var l=n?"getUTC":"get",c=o[l+"Date"](),u=o[l+"Day"](),p=o[l+"Month"](),d=o[l+"FullYear"](),g=o[l+"Hours"](),m=o[l+"Minutes"](),h=o[l+"Seconds"](),k=o[l+"Milliseconds"](),b=n?0:o.getTimezoneOffset(),f={
d:c,
dd:a(c),
ddd:s.i18n.dayNames[u],
dddd:s.i18n.dayNames[u+7],
m:p+1,
mm:a(p+1),
mmm:s.i18n.monthNames[p],
mmmm:s.i18n.monthNames[p+12],
yy:String(d).slice(2),
yyyy:d,
h:g%12||12,
hh:a(g%12||12),
H:g,
HH:a(g),
M:m,
MM:a(m),
s:h,
ss:a(h),
l:a(k,3),
L:a(k>99?Math.round(k/10):k),
t:g<12?"a":"p",
tt:g<12?"am":"pm",
T:g<12?"A":"P",
TT:g<12?"AM":"PM",
Z:n?"UTC":(String(o).match(t)||[""]).pop().replace(i,""),
o:(b>0?"-":"+")+a(100*Math.floor(Math.abs(b)/60)+Math.abs(b)%60,4),
S:["th","st","nd","rd"][c%10>3?0:(c%100-c%10!=10)*c%10]
}
return r.replace(e,(function(e){
return e in f?f[e]:e.slice(1,e.length-1)
}))
}.bind(this)
}.bind(this)(),this.dateFormat.masks={
default:"ddd mmm dd yyyy HH:MM:ss",
shortDate:"m/d/yy",
mediumDate:"mmm d, yyyy",
longDate:"mmmm d, yyyy",
fullDate:"dddd, mmmm d, yyyy",
shortTime:"h:MM TT",
mediumTime:"h:MM:ss TT",
longTime:"h:MM:ss TT Z",
isoDate:"yyyy-mm-dd",
isoTime:"HH:MM:ss",
isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",
isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
},this.dateFormat.i18n={
dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]
}
}
getProperties(){
var e=0,t=void 0
if(arguments.length>0){
for(t=arguments[e++];t&&e<arguments.length;){
t=t[arguments[e++]]
}
}
return t
}
setProperties(){
var e=arguments.length
if(e>2){
for(var t=arguments[0],i=1;i<e-2;i++){
t[arguments[i]]||(t[arguments[i]]={}),t=t[arguments[i]]
}
t[arguments[e-2]]=arguments[e-1]
}
}
getPriceValue(e){
for(var t=Array.isArray(e)?e.length>0?e[0]:"":e||"",i=/^[^0-9\.\,]*([0-9]{0,3}(?:[\.\,\s]?[0-9]{3})*?)(?:([\.\,])([0-9]{1,2}))?[^0-9]*$/i.exec(t),a=0,o=100,r=1;r<i.length;r++){
var n=i[r]
n&&("."===n||","===n?o=1:a+=parseFloat(String(n).replace(/[\,\s\.]/g,""))*o)
}
return a
}
resolveLocalMock(e){
for(var t=this.AvastWRC.DEFAULTS.DNT_MOCKS_RULES,i=0;i<t.length;i++){
if(RegExp(t[i].pattern).test(e)){
return t[i].mock
}
}
return null
}
fixBool(e){
return 1==e||"1"==e
}
getDomain(e){
if(void 0===e||null==e){
return null
}
var t=this.getUrlTarget(e)
t&&(e="http://"+t)
var i=e.match(new RegExp("^(ftp|http|https)://(w+:{0,1}w*@)?(www.)?([a-z0-9-.]+[a-z]{2,6})(:[0-9]+)?(.*)?$"))
if(i&&i.length>4){
i[1],i[2],i[3]
var a=i[4]
i[5]
return a
}
return null
}
getUrlTarget(e){
var t=this.getUrlVars(e)
for(var i in t){
if(t.hasOwnProperty(i)){
try{
var a=/((https?\:\/\/(www\.)?|www\.)(([\w|\-]+\.)+(\w+)))([\/#\?].*)?/,o=decodeURIComponent(t[i]),r=o.match(a)
if(r){
return r[2]+r[4]
}
if(r=atob(o).match(a)){
return r[2]+r[4]
}
}catch(e){}
}
}
return null
}
getUrlVars(e){
var t={}
if(void 0===e||null==e){
return t
}
e.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(e,i,a){
t[i]=a
}))
return t
}
BitWriter(e){
var t=Math.abs(e),i=function(){},a=null,o=function(e){
if(0>e){
return!1
}
for(var t=0,i=1;i<=e;){
if(i===e){
return!0
}
t+=1,i=Math.pow(2,t)
}
return!1
}
return i.prototype={
addBitmask:function(e){
return!o(e)||a.hasBitmask(e)?t:t|=e
},
getValue:function(){
return t
},
hasBitmask:function(e){
return!o(e)||e>t?0:t&e
},
removeBitmask:function(e){
return o(e)&&a.hasBitmask(e)?t^=e:t
}
},a=new i
}
aosFormat(e,t){
for(var i in t){
e=e.replace("%s",t[i])
}
return e
}
getBrowserInfo(){
let e=new Ue
return{
osVersion:e.get("OSVersion"),
os:e.get("OS"),
getBrowser:function(){
return e.get("browser")
},
getBrowserVersion:function(){
return e.get("version")
},
getBrowserVersionMajor:function(){
let t=e.get("version").split(".")
return t.length>=1?t[0]:0
},
getOS:function(){
return e.get("OS")
},
getOSVersion:function(){
return e.get("OSVersion")
},
getOSType:function(){
return e.get("OSType")
},
getOSBuild:function(){
return e.get("OSBuild")
},
isWindows:function(){
return null!==this.os&&/Windows/.test(this.os)
},
isFirefox:function(){
return"FIREFOX"===e.get("browser")
},
isChrome:function(){
return"CHROME"===e.get("browser")
},
isEdge:function(){
return"MS_EDGE"===e.get("browser")
},
isOpera:function(){
return"OPERA"===e.get("browser")
},
isSafari:function(){
return"SAFARI"===e.get("browser")
},
isAvast:function(){
return"AVAST"===e.get("browser")
}
}
}
}
var Ve=function(e,t){
for(var i=-1,a=null==e?0:e.length,o=Array(a);++i<a;){
o[i]=t(e[i],i,e)
}
return o
}
var qe=function(){
this.__data__=[],this.size=0
}
var Ge=function(e,t){
for(var i=e.length;i--;){
if(U(e[i][0],t)){
return i
}
}
return-1
},Me=Array.prototype.splice
var Fe=function(e){
var t=this.__data__,i=Ge(t,e)
return!(i<0)&&(i==t.length-1?t.pop():Me.call(t,i,1),--this.size,!0)
}
var He=function(e){
var t=this.__data__,i=Ge(t,e)
return i<0?void 0:t[i][1]
}
var Ye=function(e){
return Ge(this.__data__,e)>-1
}
var Ke=function(e,t){
var i=this.__data__,a=Ge(i,e)
return a<0?(++this.size,i.push([e,t])):i[a][1]=t,this
}
function Ze(e){
var t=-1,i=null==e?0:e.length
for(this.clear();++t<i;){
var a=e[t]
this.set(a[0],a[1])
}
}
Ze.prototype.clear=qe,Ze.prototype.delete=Fe,Ze.prototype.get=He,Ze.prototype.has=Ye,
Ze.prototype.set=Ke
var Je=Ze
var Qe=function(){
this.__data__=new Je,this.size=0
}
var Xe=function(e){
var t=this.__data__,i=t.delete(e)
return this.size=t.size,i
}
var $e=function(e){
return this.__data__.get(e)
}
var et=function(e){
return this.__data__.has(e)
},tt=x(a.a,"Map"),it=x(Object,"create")
var at=function(){
this.__data__=it?it(null):{},this.size=0
}
var ot=function(e){
var t=this.has(e)&&delete this.__data__[e]
return this.size-=t?1:0,t
},rt="__lodash_hash_undefined__",nt=Object.prototype.hasOwnProperty
var st=function(e){
var t=this.__data__
if(it){
var i=t[e]
return i===rt?void 0:i
}
return nt.call(t,e)?t[e]:void 0
},lt=Object.prototype.hasOwnProperty
var ct=function(e){
var t=this.__data__
return it?void 0!==t[e]:lt.call(t,e)
},ut="__lodash_hash_undefined__"
var pt=function(e,t){
var i=this.__data__
return this.size+=this.has(e)?0:1,i[e]=it&&void 0===t?ut:t,this
}
function dt(e){
var t=-1,i=null==e?0:e.length
for(this.clear();++t<i;){
var a=e[t]
this.set(a[0],a[1])
}
}
dt.prototype.clear=at,dt.prototype.delete=ot,dt.prototype.get=st,dt.prototype.has=ct,
dt.prototype.set=pt
var gt=dt
var mt=function(){
this.size=0,this.__data__={
hash:new gt,
map:new(tt||Je),
string:new gt
}
}
var ht=function(e){
var t=typeof e
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e
}
var kt=function(e,t){
var i=e.__data__
return ht(t)?i["string"==typeof t?"string":"hash"]:i.map
}
var bt=function(e){
var t=kt(this,e).delete(e)
return this.size-=t?1:0,t
}
var ft=function(e){
return kt(this,e).get(e)
}
var yt=function(e){
return kt(this,e).has(e)
}
var vt=function(e,t){
var i=kt(this,e),a=i.size
return i.set(e,t),this.size+=i.size==a?0:1,this
}
function wt(e){
var t=-1,i=null==e?0:e.length
for(this.clear();++t<i;){
var a=e[t]
this.set(a[0],a[1])
}
}
wt.prototype.clear=mt,wt.prototype.delete=bt,wt.prototype.get=ft,wt.prototype.has=yt,
wt.prototype.set=vt
var jt=wt,At=200
var St=function(e,t){
var i=this.__data__
if(i instanceof Je){
var a=i.__data__
if(!tt||a.length<At-1){
return a.push([e,t]),this.size=++i.size,this
}
i=this.__data__=new jt(a)
}
return i.set(e,t),this.size=i.size,this
}
function Tt(e){
var t=this.__data__=new Je(e)
this.size=t.size
}
Tt.prototype.clear=Qe,Tt.prototype.delete=Xe,Tt.prototype.get=$e,Tt.prototype.has=et,
Tt.prototype.set=St
var Ot=Tt,Et="__lodash_hash_undefined__"
var It=function(e){
return this.__data__.set(e,Et),this
}
var Rt=function(e){
return this.__data__.has(e)
}
function _t(e){
var t=-1,i=null==e?0:e.length
for(this.__data__=new jt;++t<i;){
this.add(e[t])
}
}
_t.prototype.add=_t.prototype.push=It,_t.prototype.has=Rt
var Bt=_t
var Ct=function(e,t){
for(var i=-1,a=null==e?0:e.length;++i<a;){
if(t(e[i],i,e)){
return!0
}
}
return!1
}
var zt=function(e,t){
return e.has(t)
},Nt=1,Pt=2
var xt=function(e,t,i,a,o,r){
var n=i&Nt,s=e.length,l=t.length
if(s!=l&&!(n&&l>s)){
return!1
}
var c=r.get(e)
if(c&&r.get(t)){
return c==t
}
var u=-1,p=!0,d=i&Pt?new Bt:void 0
for(r.set(e,t),r.set(t,e);++u<s;){
var g=e[u],m=t[u]
if(a){
var h=n?a(m,g,u,t,e,r):a(g,m,u,e,t,r)
}
if(void 0!==h){
if(h){
continue
}
p=!1
break
}
if(d){
if(!Ct(t,(function(e,t){
if(!zt(d,t)&&(g===e||o(g,e,i,a,r))){
return d.push(t)
}
}))){
p=!1
break
}
}else if(g!==m&&!o(g,m,i,a,r)){
p=!1
break
}
}
return r.delete(e),r.delete(t),p
},Wt=a.a.Uint8Array
var Lt=function(e){
var t=-1,i=Array(e.size)
return e.forEach((function(e,a){
i[++t]=[a,e]
})),i
}
var Ut=function(e){
var t=-1,i=Array(e.size)
return e.forEach((function(e){
i[++t]=e
})),i
},Dt=1,Vt=2,qt="[object Boolean]",Gt="[object Date]",Mt="[object Error]",Ft="[object Map]",Ht="[object Number]",Yt="[object RegExp]",Kt="[object Set]",Zt="[object String]",Jt="[object Symbol]",Qt="[object ArrayBuffer]",Xt="[object DataView]",$t=o?o.prototype:void 0,ei=$t?$t.valueOf:void 0
var ti=function(e,t,i,a,o,r,n){
switch(i){
case Xt:
if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset){
return!1
}
e=e.buffer,t=t.buffer
case Qt:
return!(e.byteLength!=t.byteLength||!r(new Wt(e),new Wt(t)))
case qt:
case Gt:
case Ht:
return U(+e,+t)
case Mt:
return e.name==t.name&&e.message==t.message
case Yt:
case Zt:
return e==t+""
case Ft:
var s=Lt
case Kt:
var l=a&Dt
if(s||(s=Ut),e.size!=t.size&&!l){
return!1
}
var c=n.get(e)
if(c){
return c==t
}
a|=Vt,n.set(e,t)
var u=xt(s(e),s(t),a,o,r,n)
return n.delete(e),u
case Jt:
if(ei){
return ei.call(e)==ei.call(t)
}
}
return!1
}
var ii=function(e,t){
for(var i=-1,a=t.length,o=e.length;++i<a;){
e[o+i]=t[i]
}
return e
}
var ai=function(e,t,i){
var a=t(e)
return ke(e)?a:ii(a,i(e))
}
var oi=function(e,t){
for(var i=-1,a=null==e?0:e.length,o=0,r=[];++i<a;){
var n=e[i]
t(n,i,e)&&(r[o++]=n)
}
return r
}
var ri=function(){
return[]
},ni=Object.prototype.propertyIsEnumerable,si=Object.getOwnPropertySymbols,li=si?function(e){
return null==e?[]:(e=Object(e),
oi(si(e),(function(t){
return ni.call(e,t)
})))
}:ri
var ci=function(e,t){
return function(i){
return e(t(i))
}
},ui=ci(Object.keys,Object),pi=Object.prototype.hasOwnProperty
var di=function(e){
if(!Ee(e)){
return ui(e)
}
var t=[]
for(var i in Object(e)){
pi.call(e,i)&&"constructor"!=i&&t.push(i)
}
return t
}
var gi=function(e){
return ie(e)?Te(e):di(e)
}
var mi=function(e){
return ai(e,gi,li)
},hi=1,ki=Object.prototype.hasOwnProperty
var bi=function(e,t,i,a,o,r){
var n=i&hi,s=mi(e),l=s.length
if(l!=mi(t).length&&!n){
return!1
}
for(var c=l;c--;){
var u=s[c]
if(!(n?u in t:ki.call(t,u))){
return!1
}
}
var p=r.get(e)
if(p&&r.get(t)){
return p==t
}
var d=!0
r.set(e,t),r.set(t,e)
for(var g=n;++c<l;){
var m=e[u=s[c]],h=t[u]
if(a){
var k=n?a(h,m,u,t,e,r):a(m,h,u,e,t,r)
}
if(!(void 0===k?m===h||o(m,h,i,a,r):k)){
d=!1
break
}
g||(g="constructor"==u)
}
if(d&&!g){
var b=e.constructor,f=t.constructor
b!=f&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof f&&f instanceof f)&&(d=!1)
}
return r.delete(e),r.delete(t),d
},fi=x(a.a,"DataView"),yi=x(a.a,"Promise"),vi=x(a.a,"Set"),wi=x(a.a,"WeakMap"),ji=E(fi),Ai=E(tt),Si=E(yi),Ti=E(vi),Oi=E(wi),Ei=h
;(fi&&"[object DataView]"!=Ei(new fi(new ArrayBuffer(1)))||tt&&"[object Map]"!=Ei(new tt)||yi&&"[object Promise]"!=Ei(yi.resolve())||vi&&"[object Set]"!=Ei(new vi)||wi&&"[object WeakMap]"!=Ei(new wi))&&(Ei=function(e){
var t=h(e),i="[object Object]"==t?e.constructor:void 0,a=i?E(i):""
if(a){
switch(a){
case ji:
return"[object DataView]"
case Ai:
return"[object Map]"
case Si:
return"[object Promise]"
case Ti:
return"[object Set]"
case Oi:
return"[object WeakMap]"
}
}
return t
})
var Ii=Ei,Ri=1,_i="[object Arguments]",Bi="[object Array]",Ci="[object Object]",zi=Object.prototype.hasOwnProperty
var Ni=function(e,t,i,a,o,r){
var n=ke(e),s=ke(t),l=n?Bi:Ii(e),c=s?Bi:Ii(t),u=(l=l==_i?Ci:l)==Ci,p=(c=c==_i?Ci:c)==Ci,d=l==c
if(d&&Object(be.a)(e)){
if(!Object(be.a)(t)){
return!1
}
n=!0,u=!1
}
if(d&&!u){
return r||(r=new Ot),n||Ae(e)?xt(e,t,i,a,o,r):ti(e,t,l,i,a,o,r)
}
if(!(i&Ri)){
var g=u&&zi.call(e,"__wrapped__"),m=p&&zi.call(t,"__wrapped__")
if(g||m){
var h=g?e.value():e,k=m?t.value():t
return r||(r=new Ot),o(h,k,i,a,r)
}
}
return!!d&&(r||(r=new Ot),bi(e,t,i,a,o,r))
}
var Pi=function e(t,i,a,o,r){
return t===i||(null==t||null==i||!ce(t)&&!ce(i)?t!=t&&i!=i:Ni(t,i,a,o,e,r))
},xi=1,Wi=2
var Li=function(e,t,i,a){
var o=i.length,r=o,n=!a
if(null==e){
return!r
}
for(e=Object(e);o--;){
var s=i[o]
if(n&&s[2]?s[1]!==e[s[0]]:!(s[0]in e)){
return!1
}
}
for(;++o<r;){
var l=(s=i[o])[0],c=e[l],u=s[1]
if(n&&s[2]){
if(void 0===c&&!(l in e)){
return!1
}
}else{
var p=new Ot
if(a){
var d=a(c,u,l,e,t,p)
}
if(!(void 0===d?Pi(u,c,xi|Wi,a,p):d)){
return!1
}
}
}
return!0
}
var Ui=function(e){
return e==e&&!k(e)
}
var Di=function(e){
for(var t=gi(e),i=t.length;i--;){
var a=t[i],o=e[a]
t[i]=[a,o,Ui(o)]
}
return t
}
var Vi=function(e,t){
return function(i){
return null!=i&&(i[e]===t&&(void 0!==t||e in Object(i)))
}
}
var qi=function(e){
var t=Di(e)
return 1==t.length&&t[0][2]?Vi(t[0][0],t[0][1]):function(i){
return i===e||Li(i,e,t)
}
},Gi="[object Symbol]"
var Mi=function(e){
return"symbol"==typeof e||ce(e)&&h(e)==Gi
},Fi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Hi=/^\w*$/
var Yi=function(e,t){
if(ke(e)){
return!1
}
var i=typeof e
return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=e&&!Mi(e))||(Hi.test(e)||!Fi.test(e)||null!=t&&e in Object(t))
},Ki="Expected a function"
function Zi(e,t){
if("function"!=typeof e||null!=t&&"function"!=typeof t){
throw new TypeError(Ki)
}
var i=function(){
var a=arguments,o=t?t.apply(this,a):a[0],r=i.cache
if(r.has(o)){
return r.get(o)
}
var n=e.apply(this,a)
return i.cache=r.set(o,n)||r,n
}
return i.cache=new(Zi.Cache||jt),i
}
Zi.Cache=jt
var Ji=Zi,Qi=500
var Xi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$i=/\\(\\)?/g,ea=function(e){
var t=Ji(e,(function(e){
return i.size===Qi&&i.clear(),e
})),i=t.cache
return t
}((function(e){
var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(Xi,(function(e,i,a,o){
t.push(a?o.replace($i,"$1"):i||e)
})),t
})),ta=1/0,ia=o?o.prototype:void 0,aa=ia?ia.toString:void 0
var oa=function e(t){
if("string"==typeof t){
return t
}
if(ke(t)){
return Ve(t,e)+""
}
if(Mi(t)){
return aa?aa.call(t):""
}
var i=t+""
return"0"==i&&1/t==-ta?"-0":i
}
var ra=function(e){
return null==e?"":oa(e)
}
var na=function(e,t){
return ke(e)?e:Yi(e,t)?[e]:ea(ra(e))
},sa=1/0
var la=function(e){
if("string"==typeof e||Mi(e)){
return e
}
var t=e+""
return"0"==t&&1/e==-sa?"-0":t
}
var ca=function(e,t){
for(var i=0,a=(t=na(t,e)).length;null!=e&&i<a;){
e=e[la(t[i++])]
}
return i&&i==a?e:void 0
}
var ua=function(e,t,i){
var a=null==e?void 0:ca(e,t)
return void 0===a?i:a
}
var pa=function(e,t){
return null!=e&&t in Object(e)
}
var da=function(e,t,i){
for(var a=-1,o=(t=na(t,e)).length,r=!1;++a<o;){
var n=la(t[a])
if(!(r=null!=e&&i(e,n))){
break
}
e=e[n]
}
return r||++a!=o?r:!!(o=null==e?0:e.length)&&te(o)&&re(n,o)&&(ke(e)||he(e))
}
var ga=function(e,t){
return null!=e&&da(e,t,pa)
},ma=1,ha=2
var ka=function(e,t){
return Yi(e)&&Ui(t)?Vi(la(e),t):function(i){
var a=ua(i,e)
return void 0===a&&a===t?ga(i,e):Pi(t,a,ma|ha)
}
}
var ba=function(e){
return function(t){
return null==t?void 0:t[e]
}
}
var fa=function(e){
return function(t){
return ca(t,e)
}
}
var ya=function(e){
return Yi(e)?ba(la(e)):fa(e)
}
var va=function(e){
return"function"==typeof e?e:null==e?G:"object"==typeof e?ke(e)?ka(e[0],e[1]):qi(e):ya(e)
}
var wa=function(e){
return function(t,i,a){
for(var o=-1,r=Object(t),n=a(t),s=n.length;s--;){
var l=n[e?s:++o]
if(!1===i(r[l],l,r)){
break
}
}
return t
}
}()
var ja=function(e,t){
return function(i,a){
if(null==i){
return i
}
if(!ie(i)){
return e(i,a)
}
for(var o=i.length,r=t?o:-1,n=Object(i);(t?r--:++r<o)&&!1!==a(n[r],r,n);){}
return i
}
}((function(e,t){
return e&&wa(e,t,gi)
}))
var Aa=function(e,t){
var i=-1,a=ie(e)?Array(e.length):[]
return ja(e,(function(e,o,r){
a[++i]=t(e,o,r)
})),a
}
var Sa=function(e,t){
return(ke(e)?Ve:Aa)(e,va(t,3))
}
var Ta=function(e){
return function(t,i,a){
var o=Object(t)
if(!ie(t)){
var r=va(i,3)
t=gi(t),i=function(e){
return r(o[e],e,o)
}
}
var n=e(t,i,a)
return n>-1?o[r?t[n]:n]:void 0
}
}
var Oa=function(e,t,i,a){
for(var o=e.length,r=i+(a?1:-1);a?r--:++r<o;){
if(t(e[r],r,e)){
return r
}
}
return-1
},Ea=NaN,Ia=/^\s+|\s+$/g,Ra=/^[-+]0x[0-9a-f]+$/i,_a=/^0b[01]+$/i,Ba=/^0o[0-7]+$/i,Ca=parseInt
var za=function(e){
if("number"==typeof e){
return e
}
if(Mi(e)){
return Ea
}
if(k(e)){
var t="function"==typeof e.valueOf?e.valueOf():e
e=k(t)?t+"":t
}
if("string"!=typeof e){
return 0===e?e:+e
}
e=e.replace(Ia,"")
var i=_a.test(e)
return i||Ba.test(e)?Ca(e.slice(2),i?2:8):Ra.test(e)?Ea:+e
},Na=1/0,Pa=17976931348623157e292
var xa=function(e){
return e?(e=za(e))===Na||e===-Na?(e<0?-1:1)*Pa:e==e?e:0:0===e?e:0
}
var Wa=function(e){
var t=xa(e),i=t%1
return t==t?i?t-i:t:0
},La=Math.max
var Ua=Ta((function(e,t,i){
var a=null==e?0:e.length
if(!a){
return-1
}
var o=null==i?0:Wa(i)
return o<0&&(o=La(a+o,0)),Oa(e,va(t,3),o)
}))
const Da=i(13)
class Va{
constructor(e){
this.AvastWRC=e,this.CHECK_LOCAL_PORT=5e5,this._connectAvastTimer=null,
this._bal=null,
this.webshieldProperties=["avcfg://WebShield/Common/ProviderEnabled","avcfg://WebShield/Common/TemporaryDisabled","avcfg://WebShield/WebScanner/HttpsScanning","avcfg://WebShield/WebScanner/WebScanning","avcfg://WebShield/WebScanner/ScriptScaning","avcfg://WebShield/WebScanner/URLBlocking","avcfg://settings/Common/HardenedMode","avcfg://WebShield/Common/TaskSensitivity"]
}
connect(e){
this._bal=e
var t=Da.defer()
return this.AvastWRC.CONFIG.LOCAL_ENABLED?(this.findActiveAvastPort().then(function(e){
this.AvastWRC.Query.CONST.LOCAL_PORT=e.port,
this.AvastWRC.Query.CONST.LOCAL_TIMESTAMP=1*new Date,
this._bal.emitEvent("local.init",e.port),
this.retrieveGuid(),this.retrieveVersions(),
this.retrieveWebshieldSettings(),t.resolve({
localPort:e.port,
avastEdition:e.edition
})
}.bind(this)).fail(function(e){
this.AvastWRC.CONFIG.WEBSHIELD=null,t.resolve({
localPort:null,
avastEdition:null
})
}.bind(this)).done(),this._connectAvastTimer=setInterval(this.recheckAvastPort.bind(this),this.CHECK_LOCAL_PORT),
t.promise):(t.resolve({
localPort:null,
avastEdition:null
}),t.promise)
}
findActiveAvastPort(){
var e=Da.defer(),t=Sa(this.AvastWRC.Query.CONST.LOCAL_PORTS,function(e){
return this.connectAvastCheck(e)
}.bind(this))
Da.allSettled(t).then(function(t){
var i=Ua(t,(function(e){
return"fulfilled"===e.state
}))
i?e.resolve(i.value):e.reject(new Error("No open port found"))
}.bind(this)).done()
return e.promise
}
recheckAvastPort(){
var e=this.AvastWRC.Query.CONST.LOCAL_PORT
;(e?this.connectAvastCheck(e):this.findActiveAvastPort()).then(e=>{
this.AvastWRC.Query.CONST.LOCAL_PORT=e.port,
this.AvastWRC.Query.CONST.LOCAL_TIMESTAMP=1*new Date,
this.retrieveVersions(),this.retrieveWebshieldSettings()
}).fail(()=>{
this.AvastWRC.Query.CONST.LOCAL_PORT=null,this.AvastWRC.Query.CONST.LOCAL_TIMESTAMP=1*new Date,
this.AvastWRC.CONFIG.WEBSHIELD=null
}).done()
}
_mapWebshieldResults(e){
return{
ProviderEnabled:e[0],
TemporaryDisabled:e[1],
HttpsScanning:e[2],
WebScanning:e[3],
ScriptScanning:e[4],
URLBlocking:e[5],
HardenedMode:e[6],
TaskSensitivity:e[7],
PassiveMode:e[8],
RestartNeeded:e[9]
}
}
retrieveWebshieldSettingsV1(e){
this.getProperties(this.webshieldProperties,t=>{
let i=null
t&&t.length===this.webshieldProperties.length&&(i=this._mapWebshieldResults(t)),
this.AvastWRC.CONFIG.WEBSHIELD=i,
"function"==typeof e&&e(i)
},()=>{
this.AvastWRC.CONFIG.WEBSHIELD=null
})
}
retrieveWebshieldSettingsV2(e){
let t=Array.from(this.webshieldProperties)
t.push("avprop://Common/PassiveMode/Enabled"),t.push("avprop://Common/RestartNeeded/Value"),
this.getProperties(t,i=>{
let a=null
i&&i.length===t.length?(a=this._mapWebshieldResults(i),this.AvastWRC.CONFIG.WEBSHIELD=a,
"function"==typeof e&&e(a)):this.retrieveWebshieldSettingsV1(e)
},()=>{
this.AvastWRC.CONFIG.WEBSHIELD=null
})
}
retrieveWebshieldSettings(e){
return this.retrieveWebshieldSettingsV2(e)
}
retrieveGuid(e){
this.AvastWRC.local.getGuid().then(t=>{
this._bal.emitEvent("local.paired",t[0],t[2]),
"function"==typeof e&&e(result)
})
}
retrieveVersions(e){
this.AvastWRC.local.getVersions().then(t=>{
3===t.length&&(this._bal.emitEvent("local.versions",t[0],t[1],t[2]),
"function"==typeof e&&e(result))
})
}
connectAvastCheck(e){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED){
return Da.reject()
}
var t=Da.defer()
return new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"ACKNOWLEDGEMENT",
server:"http://localhost:"+e+"/command",
callback:function(i){
if(i.result&&i.result[0]===this.AvastWRC.DEFAULTS.BRAND_NAME&&i.result.length>2){
const a=i.result[1]?Number.parseInt(i.result[1]):null,o=i.result[2]?Number.parseInt(i.result[2]):null
this.AvastWRC.Query.CONST.LOCAL_TOKEN=i.result[3]||null,t.resolve({
port:e,
edition:3===a?o:0
})
}else{
t.reject(new Error("Not connected to "+this.AvastWRC.DEFAULTS.BRAND_NAME))
}
}.bind(this),
error:function(e){
t.reject(new Error(e))
}
}),t.promise
}
getGuid(){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED){
return Da.reject()
}
var e=Da.defer()
return new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"GET_GUIDS",
callback:function(t){
e.resolve(t.result)
}.bind(this),
error:function(t){
e.reject(new Error(t))
}
}),e.promise
}
getVersions(){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED){
return Da.reject()
}
var e=Da.defer()
return new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"GET_VERSIONS",
callback:function(t){
e.resolve(t.result)
},
error:function(t){
e.reject(new Error(t))
}
}),e.promise
}
getProperties(e,t,i){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED){
return Da.reject()
}
new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"GET_PROPERTIES",
params:e,
callback:function(e){
t&&t(e.result)
}.bind(this),
error:function(e){
403===e.status&&(this.AvastWRC.Query.CONST.LOCAL_TOKEN=null,this.AvastWRC.local.findActiveAvastPort()),
i&&i()
}.bind(this)
})
}
setProperties(e,t,i){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED||!this.AvastWRC.Query.CONST.LOCAL_PORT){
return Da.reject()
}
new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"SET_PROPERTIES",
params:e,
values:t,
callback:function(e){
i&&i(e)
}
})
}
getProperty(e,t){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED){
return Da.reject()
}
new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"GET_PROPERTY",
property:e,
callback:function(e){
t&&t(e)
}
})
}
setProperty(e,t,i){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED||!this.CONFIG.ENABLE_SAFEZONE_CONTROL){
return Da.reject()
}
new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"SET_PROPERTY",
property:e,
value:t,
callback:function(e){
log(e),i&&i(e)
}
})
}
getBanks(){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED){
return Da.reject()
}
new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"GET_EBANKING_LIST",
callback:function(e){
log("Get Banks response: ",e),callback&&callback(e)
}
})
}
switchToSafeZone(e){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED){
return Da.reject()
}
var t=Da.defer()
return new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"SWITCH_TO_SAFEZONE",
value:e,
callback:function(e){
t.resolve(e)
},
error:function(e){
t.reject(e)
}
}),t.promise
}
isSafeZoneAvailable(){
if(!this.AvastWRC.CONFIG.LOCAL_ENABLED){
return Da.reject()
}
var e=Da.defer()
return new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"IS_SAFEZONE_AVAILABLE",
callback:function(t){
e.resolve(t)
},
error:function(t){
e.reject(t)
}
}),e.promise
}
}
class qa{
constructor(e){
this.execute=e
}
setIcon(){
return this.execute("browserAction","setIcon",...arguments)
}
}
class Ga{
constructor(e){
this.execute=e
}
getURL(){
return this.execute("extension","getURL",...arguments)
}
}
class Ma{
constructor(e){
this.execute=e
}
get onInstalled(){
return{
addListener:this.execute.bind(this,"runtime.onInstalled","addListener")
}
}
setUninstallURL(){
return this.execute("runtime","setUninstallURL",...arguments)
}
get onMessage(){
return{
addListener:this.execute.bind(this,"runtime.onMessage","addListener")
}
}
}
class Fa{
constructor(e){
this.execute=e
}
getUILanguage(){
return this.execute("i18n","getUILanguage")
}
}
class Ha{
constructor(e){
this.execute=e
}
sendMessage(){
return this.execute("tabs","sendMessage",...arguments)
}
create(){
return this.execute("tabs","create",...arguments)
}
query(){
return this.execute("tabs","query",...arguments)
}
remove(){
return this.execute("tabs","remove",...arguments)
}
update(){
return this.execute("tabs","update",...arguments)
}
get onActivated(){
return{
addListener:this.execute.bind(this,"tabs.onActivated","addListener")
}
}
get onUpdated(){
return{
addListener:this.execute.bind(this,"tabs.onUpdated","addListener")
}
}
get onCreated(){
return{
addListener:this.execute.bind(this,"tabs.onCreated","addListener")
}
}
}
class Ya{
constructor(e){
this.execute=e
}
get onCommitted(){
return{
addListener:this.execute.bind(this,"webNavigation.onCommitted","addListener")
}
}
get onHistoryStateUpdated(){
return{
addListener:this.execute.bind(this,"webNavigation.onHistoryStateUpdated","addListener")
}
}
get onReferenceFragmentUpdated(){
return{
addListener:this.execute.bind(this,"webNavigation.onReferenceFragmentUpdated","addListener")
}
}
get onBeforeNavigate(){
return{
addListener:this.execute.bind(this,"webNavigation.onBeforeNavigate","addListener")
}
}
}
class Ka{
constructor(e){
this.execute=e
}
get onResponseStarted(){
return{
addListener:this.execute.bind(this,"webRequest.onResponseStarted","addListener")
}
}
get onBeforeRequest(){
return{
addListener:this.execute.bind(this,"webRequest.onBeforeRequest","addListener"),
removeListener:this.execute.bind(this,"webRequest.onBeforeRequest","removeListener")
}
}
get onCompleted(){
return{
addListener:this.execute.bind(this,"webRequest.onCompleted","addListener")
}
}
get onErrorOccurred(){
return{
addListener:this.execute.bind(this,"webRequest.onErrorOccurred","addListener")
}
}
get onSendHeaders(){
return{
addListener:this.execute.bind(this,"webRequest.onSendHeaders","addListener")
}
}
get onHeadersReceived(){
return{
addListener:this.execute.bind(this,"webRequest.onHeadersReceived","addListener")
}
}
}
const Za=function(){
const e=[...arguments],t=ua(chrome,e.shift())||{},i=t[e.shift()]
return"function"==typeof i?i.apply(t,e):null
}
var Ja=new class{
constructor(){
this.browserAction=new qa(Za),this.extension=new Ga(Za),this.runtime=new Ma(Za),
this.i18n=new Fa(Za),
this.tabs=new Ha(Za),this.webNavigation=new Ya(Za),this.webRequest=new Ka(Za)
}
}
var Qa=function(e,t){
for(var i=-1,a=null==e?0:e.length;++i<a&&!1!==t(e[i],i,e);){}
return e
}
var Xa=function(e){
return"function"==typeof e?e:G
}
var $a=function(e,t){
return(ke(e)?Qa:ja)(e,Xa(t))
}
var eo=function(e,t,i){
(void 0===i||U(e[t],i))&&(void 0!==i||t in e)||L(e,t,i)
},to=i(9)
var io=function(e){
var t=new e.constructor(e.byteLength)
return new Wt(t).set(new Wt(e)),t
}
var ao=function(e,t){
var i=t?io(e.buffer):e.buffer
return new e.constructor(i,e.byteOffset,e.length)
}
var oo=function(e,t){
var i=-1,a=e.length
for(t||(t=Array(a));++i<a;){
t[i]=e[i]
}
return t
},ro=Object.create,no=function(){
function e(){}
return function(t){
if(!k(t)){
return{}
}
if(ro){
return ro(t)
}
e.prototype=t
var i=new e
return e.prototype=void 0,i
}
}(),so=ci(Object.getPrototypeOf,Object)
var lo=function(e){
return"function"!=typeof e.constructor||Ee(e)?{}:no(so(e))
}
var co=function(e){
return ce(e)&&ie(e)
},uo="[object Object]",po=Function.prototype,go=Object.prototype,mo=po.toString,ho=go.hasOwnProperty,ko=mo.call(Object)
var bo=function(e){
if(!ce(e)||h(e)!=uo){
return!1
}
var t=so(e)
if(null===t){
return!0
}
var i=ho.call(t,"constructor")&&t.constructor
return"function"==typeof i&&i instanceof i&&mo.call(i)==ko
}
var fo=function(e,t){
if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t){
return e[t]
}
}
var yo=function(e){
return q(e,Be(e))
}
var vo=function(e,t,i,a,o,r,n){
var s=fo(e,i),l=fo(t,i),c=n.get(l)
if(c){
eo(e,i,c)
}else{
var u=r?r(s,l,i+"",e,t,n):void 0,p=void 0===u
if(p){
var d=ke(l),g=!d&&Object(be.a)(l),m=!d&&!g&&Ae(l)
u=l,d||g||m?ke(s)?u=s:co(s)?u=oo(s):g?(p=!1,u=Object(to.a)(l,!0)):m?(p=!1,u=ao(l,!0)):u=[]:bo(l)||he(l)?(u=s,
he(s)?u=yo(s):k(s)&&!j(s)||(u=lo(l))):p=!1
}
p&&(n.set(l,u),o(u,l,a,r,n),n.delete(l)),eo(e,i,u)
}
}
var wo=function e(t,i,a,o,r){
t!==i&&wa(i,(function(n,s){
if(r||(r=new Ot),k(n)){
vo(t,i,s,a,e,o,r)
}else{
var l=o?o(fo(t,s),n,s+"",t,i,r):void 0
void 0===l&&(l=n),eo(t,s,l)
}
}),Be)
},jo=se((function(e,t,i){
wo(e,t,i)
}))
var Ao=function(e,t,i,a){
var o=-1,r=null==e?0:e.length
for(a&&r&&(i=e[++o]);++o<r;){
i=t(i,e[o],o,e)
}
return i
}
var So=function(e,t,i,a,o){
return o(e,(function(e,o,r){
i=a?(a=!1,e):t(i,e,o,r)
})),i
}
var To=function(e,t,i){
var a=ke(e)?Ao:So,o=arguments.length<3
return a(e,va(t,4),i,o,ja)
}
var Oo=function(e,t){
return e&&q(t,gi(t),e)
}
var Eo=function(e,t){
return e&&q(t,Be(t),e)
}
var Io=function(e,t){
return q(e,li(e),t)
},Ro=Object.getOwnPropertySymbols?function(e){
for(var t=[];e;){
ii(t,li(e)),e=so(e)
}
return t
}:ri
var _o=function(e,t){
return q(e,Ro(e),t)
}
var Bo=function(e){
return ai(e,Be,Ro)
},Co=Object.prototype.hasOwnProperty
var zo=function(e){
var t=e.length,i=new e.constructor(t)
return t&&"string"==typeof e[0]&&Co.call(e,"index")&&(i.index=e.index,i.input=e.input),
i
}
var No=function(e,t){
var i=t?io(e.buffer):e.buffer
return new e.constructor(i,e.byteOffset,e.byteLength)
},Po=/\w*$/
var xo=function(e){
var t=new e.constructor(e.source,Po.exec(e))
return t.lastIndex=e.lastIndex,t
},Wo=o?o.prototype:void 0,Lo=Wo?Wo.valueOf:void 0
var Uo=function(e){
return Lo?Object(Lo.call(e)):{}
},Do="[object Boolean]",Vo="[object Date]",qo="[object Map]",Go="[object Number]",Mo="[object RegExp]",Fo="[object Set]",Ho="[object String]",Yo="[object Symbol]",Ko="[object ArrayBuffer]",Zo="[object DataView]",Jo="[object Float32Array]",Qo="[object Float64Array]",Xo="[object Int8Array]",$o="[object Int16Array]",er="[object Int32Array]",tr="[object Uint8Array]",ir="[object Uint8ClampedArray]",ar="[object Uint16Array]",or="[object Uint32Array]"
var rr=function(e,t,i){
var a=e.constructor
switch(t){
case Ko:
return io(e)
case Do:
case Vo:
return new a(+e)
case Zo:
return No(e,i)
case Jo:
case Qo:
case Xo:
case $o:
case er:
case tr:
case ir:
case ar:
case or:
return ao(e,i)
case qo:
return new a
case Go:
case Ho:
return new a(e)
case Mo:
return xo(e)
case Fo:
return new a
case Yo:
return Uo(e)
}
},nr="[object Map]"
var sr=function(e){
return ce(e)&&Ii(e)==nr
},lr=we.a&&we.a.isMap,cr=lr?ve(lr):sr,ur="[object Set]"
var pr=function(e){
return ce(e)&&Ii(e)==ur
},dr=we.a&&we.a.isSet,gr=dr?ve(dr):pr,mr=1,hr=2,kr=4,br="[object Arguments]",fr="[object Function]",yr="[object GeneratorFunction]",vr="[object Object]",wr={}
wr[br]=wr["[object Array]"]=wr["[object ArrayBuffer]"]=wr["[object DataView]"]=wr["[object Boolean]"]=wr["[object Date]"]=wr["[object Float32Array]"]=wr["[object Float64Array]"]=wr["[object Int8Array]"]=wr["[object Int16Array]"]=wr["[object Int32Array]"]=wr["[object Map]"]=wr["[object Number]"]=wr[vr]=wr["[object RegExp]"]=wr["[object Set]"]=wr["[object String]"]=wr["[object Symbol]"]=wr["[object Uint8Array]"]=wr["[object Uint8ClampedArray]"]=wr["[object Uint16Array]"]=wr["[object Uint32Array]"]=!0,
wr["[object Error]"]=wr[fr]=wr["[object WeakMap]"]=!1
var jr=function e(t,i,a,o,r,n){
var s,l=i&mr,c=i&hr,u=i&kr
if(a&&(s=r?a(t,o,r,n):a(t)),void 0!==s){
return s
}
if(!k(t)){
return t
}
var p=ke(t)
if(p){
if(s=zo(t),!l){
return oo(t,s)
}
}else{
var d=Ii(t),g=d==fr||d==yr
if(Object(be.a)(t)){
return Object(to.a)(t,l)
}
if(d==vr||d==br||g&&!r){
if(s=c||g?{}:lo(t),!l){
return c?_o(t,Eo(s,t)):Io(t,Oo(s,t))
}
}else{
if(!wr[d]){
return r?t:{}
}
s=rr(t,d,l)
}
}
n||(n=new Ot)
var m=n.get(t)
if(m){
return m
}
n.set(t,s),gr(t)?t.forEach((function(o){
s.add(e(o,i,a,o,t,n))
})):cr(t)&&t.forEach((function(o,r){
s.set(r,e(o,i,a,r,t,n))
}))
var h=u?c?Bo:mi:c?keysIn:gi,b=p?void 0:h(t)
return Qa(b||t,(function(o,r){
b&&(o=t[r=o]),V(s,r,e(o,i,a,r,t,n))
})),s
},Ar=1,Sr=4
var Tr=function(e){
return jr(e,Ar|Sr)
}
class Or{
constructor(e){
this.AvastWRC=e
}
getDefaults(){
return{
close:this.AvastWRC.bs.getLocalImageURL("icn_close.png"),
btnLearn:this.AvastWRC.bs.getLocalizedString("sideDetails").toUpperCase(),
btnRate:this.AvastWRC.bs.getLocalizedString("sideRate").toUpperCase(),
btnDash:this.AvastWRC.bs.getLocalizedString("sideDashboard").toUpperCase(),
btnSettings:this.AvastWRC.bs.getLocalizedString("sideSettings").toUpperCase(),
rating:{
headline:this.AvastWRC.bs.getLocalizedString("ratingRate"),
footer:this.AvastWRC.bs.getLocalizedString("ratingNoRate"),
close:this.AvastWRC.bs.getLocalImageURL("icn_close_small.png"),
elements:[{
text:this.AvastWRC.bs.getLocalizedString("votePositive").toUpperCase(),
image:this.AvastWRC.bs.getLocalImageURL("icnthumbsmall.png")
},{
text:this.AvastWRC.bs.getLocalizedString("voteNegative").toUpperCase(),
image:this.AvastWRC.bs.getLocalImageURL("icnthumbdownsmall.png")
}],
negative:{
close:this.AvastWRC.bs.getLocalImageURL("icn_close_small.png"),
headline:this.AvastWRC.bs.getLocalizedString("ratingNegative"),
button:this.AvastWRC.bs.getLocalizedString("ratingDone").toUpperCase(),
elements:[{
text:this.AvastWRC.bs.getLocalizedString("pornography"),
data:"pornography"
},{
text:this.AvastWRC.bs.getLocalizedString("violence"),
data:"violence"
},{
text:this.AvastWRC.bs.getLocalizedString("gambling"),
data:"gambling"
},{
text:this.AvastWRC.bs.getLocalizedString("drugs"),
data:"drugs"
},{
text:this.AvastWRC.bs.getLocalizedString("illegal"),
data:"illegal"
},{
text:this.AvastWRC.bs.getLocalizedString("others"),
data:"others"
}]
}
},
thanks:{
close:this.AvastWRC.bs.getLocalImageURL("icn_close_small.png"),
image:this.AvastWRC.bs.getLocalImageURL("icn_checkbig.png"),
headline:this.AvastWRC.bs.getLocalizedString("thanksHeadline"),
message:this.AvastWRC.bs.getLocalizedString("thanksMessage")
}
}
}
compute(e){
var t=this.AvastWRC.Cache.getNoTTL(e),i=this.AvastWRC.bal.WebRep.getDefaults()
if(t&&t.values){
var a=t.values
switch(t.getRatingCategory()){
case this.AvastWRC.RATING_GOOD:
i.icon=this.AvastWRC.bs.getLocalImageURL("icn_thumbup_big.png"),
i.text=this.AvastWRC.bs.getLocalizedString("ratingTextPositive")
break
case this.AvastWRC.RATING_AVERAGE:
i.icon=this.AvastWRC.bs.getLocalImageURL("icn_thumbright_big.png"),
i.text=this.AvastWRC.bs.getLocalizedString("ratingTextAverage")
break
case this.AvastWRC.RATING_BAD:
i.icon=this.AvastWRC.bs.getLocalImageURL("icn_thumbdown_big.png"),
i.text=this.AvastWRC.bs.getLocalizedString("ratingTextBad")
}
i.color=this.AvastWRC.bal.RATING_COLOR[t.getRatingCategory()],i.details={
close:this.AvastWRC.bs.getLocalImageURL("icn_close_small.png"),
headline:this.AvastWRC.bs.getLocalizedString("detailsHeadline"),
elements:[{
text:this.AvastWRC.bs.getLocalizedString("detailsMalware"+(1==a.block?"Yes":"No")),
image:this.AvastWRC.bs.getLocalImageURL("icn_bug.png"),
color:1==a.block?this.AvastWRC.bal.RATING_COLOR[this.AvastWRC.RATING_BAD]:this.AvastWRC.bal.RATING_COLOR[this.AvastWRC.RATING_GOOD],
title:""
},{
text:this.AvastWRC.bs.getLocalizedString("detailsPhishing"+(a.phishing?"Yes":"No")),
image:this.AvastWRC.bs.getLocalImageURL("icn_eye.png"),
color:a.phishing>1?this.AvastWRC.bal.RATING_COLOR[this.AvastWRC.RATING_BAD]:this.AvastWRC.bal.RATING_COLOR[this.AvastWRC.RATING_GOOD],
title:""
},{
text:this.AvastWRC.bs.getLocalizedString("ratingCommunity",[this.AvastWRC.bs.getLocalizedString("ratingLevel"+this.AvastWRC.bal.RATING_LEVEL[t.getRatingCategory()])]),
image:this.AvastWRC.bs.getLocalImageURL("icn_thumblearn.png"),
color:this.AvastWRC.bal.RATING_COLOR[t.getRatingCategory()],
title:a.rating
}]
}
}else{
i.icon=this.AvastWRC.bs.getLocalImageURL("icn_norating_big.png"),i.text=this.AvastWRC.bs.getLocalizedString("ratingTextUndefined"),
i.color=this.AvastWRC.bal.RATING_COLOR[this.AvastWRC.RATING_NONE],
i.close=this.AvastWRC.bs.getLocalImageURL("icn_close.png")
}
return i
}
}
class Er{
constructor(e,t){
this.AvastWRC=e,this.bal=t
}
registerModuleListeners(e){
e.on("local.init",e=>{
this.bal.initLocalService(e)
}),e.on("local.paired",(e,t)=>{
""!==e&&(this.AvastWRC.CONFIG.GUID=e),""!==t&&(this.AvastWRC.CONFIG.HWID=t)
const i={
guid:this.AvastWRC.CONFIG.GUID,
plg_guid:this.AvastWRC.CONFIG.PLG_GUID,
hwid:this.AvastWRC.CONFIG.HWID
}
this.AvastWRC.AvastConfig.set(i)
}),e.on("local.versions",(e,t,i)=>{
""!==e&&(this.AvastWRC.CONFIG.AV_VERSION=e),""!==t&&(this.AvastWRC.CONFIG.OS_VERSION=t),
""!==i&&(this.AvastWRC.CONFIG.OS=i)
})
}
}
class Ir{
constructor(e){
this.AvastWRC=e
}
loadLocalizedStrings(e,t){
return To(t,(e,t)=>(e[t]=this.AvastWRC.bs.getLocalizedString(t),
e),e)
}
getLocalImageURLs(e,t){
return To(t,(e,t,i)=>(e[i]=this.AvastWRC.bs.getLocalImageURL(t),
e),e)
}
getRandomUID(){
for(var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",t="0123456789abcdef",i=0,a="",o=0;o<e.length;o++){
"-"!==e[o]&&"4"!==e[o]&&(i=16*Math.random()|0),
"x"===e[o]?a+=t[i]:"y"===e[o]?(i&=3,
a+=t[i|=8]):a+=e[o]
}
return a
}
getHash(e){
var t=0
if(0===e.length){
return t
}
for(var i=0;i<e.length;i++){
t=(t<<5)-t+e.charCodeAt(i),t&=t
}
return t
}
}
var Rr=function(){
return a.a.Date.now()
},_r="Expected a function",Br=Math.max,Cr=Math.min
var zr=function(e,t,i){
var a,o,r,n,s,l,c=0,u=!1,p=!1,d=!0
if("function"!=typeof e){
throw new TypeError(_r)
}
function g(t){
var i=a,r=o
return a=o=void 0,c=t,n=e.apply(r,i)
}
function m(e){
var i=e-l
return void 0===l||i>=t||i<0||p&&e-c>=r
}
function h(){
var e=Rr()
if(m(e)){
return b(e)
}
s=setTimeout(h,function(e){
var i=t-(e-l)
return p?Cr(i,r-(e-c)):i
}(e))
}
function b(e){
return s=void 0,d&&a?g(e):(a=o=void 0,n)
}
function f(){
var e=Rr(),i=m(e)
if(a=arguments,o=this,l=e,i){
if(void 0===s){
return function(e){
return c=e,s=setTimeout(h,t),u?g(e):n
}(l)
}
if(p){
return clearTimeout(s),s=setTimeout(h,t),g(l)
}
}
return void 0===s&&(s=setTimeout(h,t)),n
}
return t=za(t)||0,k(i)&&(u=!!i.leading,r=(p="maxWait"in i)?Br(za(i.maxWait)||0,t):r,
d="trailing"in i?!!i.trailing:d),
f.cancel=function(){
void 0!==s&&clearTimeout(s),c=0,a=l=o=s=void 0
},f.flush=function(){
return void 0===s?n:b(Rr())
},f
},Nr="Expected a function"
var Pr=function(e,t,i){
var a=!0,o=!0
if("function"!=typeof e){
throw new TypeError(Nr)
}
return k(i)&&(a="leading"in i?!!i.leading:a,o="trailing"in i?!!i.trailing:o),zr(e,t,{
leading:a,
maxWait:t,
trailing:o
})
}
class xr{
constructor(e){
this.AvastWRC=e,this.RETRIEVE_AVAST_SETTINGS_THROTLE=2e4,this.AVAST_DNL_PROPERTY="PropertyDataSharing"
}
init(e){
e.hookOnFeatureChange("communityIQ",e=>{
this.AvastWRC.local.setProperties([this.AVAST_DNL_PROPERTY],[e?"1":"0"])
})
}
commonMessageHubAos(e,t,i){
if(void 0!==i){
switch(e){
case"tabInitialized":
this.AvastWRC.initedTabs[i.id]=t.session,this.AvastWRC.bs.messageTab(i,{
message:"tabInitAccepted"
}),this.AvastWRC.bs.flushTabMessages(i)
break
case"unload":
this.AvastWRC.initedTabs[i.id]===t.session&&(this.AvastWRC.initedTabs[i.id]=!1)
break
case"messageBoxFeedback":
switch(t.type){
case"phishing":
case"malware":
this.AvastWRC.bs.tabRedirect(i,t.safety_url)
break
default:
this.AvastWRC.bal.emitEvent("message.messageBoxFeedback."+t.type,t,i)
}
break
case"afterInstallAction":
this.AvastWRC.CONFIG.URL_CONSENT=t.urlConsent,localStorage.setItem("URL_CONSENT",""+t.urlConsent),
this.AvastWRC.bal.settingFeatureSet("urlConsent",t.urlConsent,t.clickSource),
!0===t.urlConsent&&(this.AvastWRC.bal.emitEvent("control.setIcon",void 0,"common/ui/icons/icon-unknown.png"),
this.AvastWRC.bs.accessContent(i,{
message:"openSidebar",
data:{
openSettings:!0
}
}))
break
case"closeTab":
this.AvastWRC.bs.closeTab(i)
break
default:
this.AvastWRC.bal.emitEvent("message."+e,t,i)
}
}
}
getSafePageUrl(){
return this.AvastWRC.PHISHING_REDIRECT
}
tabPhishing(e,t,i){
t.isPhishing()?(this.showPhishingPage(i.id),this.AvastWRC.bal.emitEvent("security.phishing.open",e)):t.isMalware()&&(this.showMalwarePage(i.id),
this.AvastWRC.bal.emitEvent("security.malware.open",e))
}
showPhishingPage(e){
this._showMaliciousPage("phishing",e)
}
showMalwarePage(e){
this._showMaliciousPage("malware",e)
}
_showMaliciousPage(e,t){
const i={
type:e,
safety_url:this.getSafePageUrl(),
brandName:this.AvastWRC.DEFAULTS.BRAND_NAME
},a={
url:this.AvastWRC.bs.getLocalResourceURL("common/messagebox.html?data="+btoa(JSON.stringify(i)))
}
this.AvastWRC.Utils.getBrowserInfo().isFirefox()&&(a.loadReplace=!0),this.AvastWRC.bs.tabUpdate(t,a)
}
registerModuleListeners(e){
e.on("urlInfo.response",this.tabPhishing.bind(this)),
e.on("urlInfo.response",Pr(this.retrieveAvastSettings.bind(this),this.RETRIEVE_AVAST_SETTINGS_THROTLE)),
e.on("shepherd.updated",e=>{
if(!e){
return
}
const t=e&&e.surveys&&e.surveys.uninstall||{},{browserLang:i,browserLang2:a}=this.AvastWRC.bal.getBrowserLangs(),o=t[i]||t[a]||""
this.AvastWRC.bal.setUninstallURL(o)
})
}
getModuleDefaultSettings(){
return{
safeZone:{
declined:{}
},
phishing:{
trusted:{}
},
features:{
phishing:!0,
dnt:!0,
dntBadge:!0,
dntAutoBlock:!1,
dntSocial:!1,
dntAdTracking:!1,
dntWebAnalytics:!1,
dntOthers:!1,
secureBrowser:!0,
communityIQ:!1,
serp:!0,
serpPopup:!0,
productAnalysis:!0,
urlConsent:null
}
}
}
retrieveAvastSettings(e){
let t=this.AVAST_DNL_PROPERTY,i=this.AvastWRC.bal.settings.get(),a=i.features.communityIQ
this.AvastWRC.local.getProperties([t],t=>{
let o
t&&t.length>0&&(o="1"===t[0],o!==a&&(i.features.communityIQ=o,this.AvastWRC.bal.settings.set(i),
this.AvastWRC.CONFIG.COMMUNITY_IQ=o)),
"function"==typeof e&&e()
})
}
}
var Wr=function(e,t){
return null==e?e:wa(e,Xa(t),Be)
},Lr=Array.prototype.reverse
var Ur=function(e){
return null==e?e:Lr.call(e)
},Dr=i(17)
class Vr{
constructor(e,t){
this.AvastWRC=e,this.bal=t,this.SUPPORTED_TRACKER_TYPES=["Others","WebAnalytics","AdTracking","Social"],
this.domainTrackers={},
this.patternTrackers=[],this.trkrType=this.SUPPORTED_TRACKER_TYPES
}
isBlocked(e,t,i){
let a=this.blockList.get()
return!1!==this.AvastWRC.bal.settings.get().features.dnt&&(!0===this.AvastWRC.bal.settings.get().features.dntAutoBlock||(!0===a.categories[i]||!0===a.trackers[t]))
}
resetModuleSettings(){
let e=this.AvastWRC.bal.settings.get(),t=this.blockList.get()
t.categories.Others=e.features.dntOthers,t.categories.WebAnalytics=e.features.dntWebAnalytics,
t.categories.AdTracking=e.features.dntAdTracking,
t.categories.Social=e.features.dntSocial,
t.trackers={},this.blockList.set(t)
}
setDntFeatures(e,t,i){
let a=this.AvastWRC.bal.settings.get(),o=a.features,r={
Others:"dntOthers",
WebAnalytics:"dntWebAnalytics",
AdTracking:"dntAdTracking",
Social:"dntSocial"
}
for(let e in r){
let t=r[e]
i[e]!==o[t]&&(o[t]=i[e],this.bal.featureSettingChanged(t,!o[t],o[t]))
}
null!==e&&e!==o.dnt&&(o.dnt=e,this.bal.featureSettingChanged("dnt",!e,e)),o.dntAutoBlock=t,
a.features=o,
this.AvastWRC.bal.settings.set(a)
}
init(e){
return this.bal=e,e.hookOnFeatureChange("dntBadge",e=>{
this.updateAllTabs()
}),e.hookOnFeatureChange("dntAutoBlock",e=>{
this.updateAllTabs()
}),e.hookOnFeatureChange("dntSocial",e=>{
this.updateAllTabs()
}),e.hookOnFeatureChange("dntAdTracking",e=>{
this.updateAllTabs()
}),e.hookOnFeatureChange("dntWebAnalytics",e=>{
this.updateAllTabs()
}),e.hookOnFeatureChange("dntOthers",e=>{
this.updateAllTabs()
}),new Promise(e=>{
const t=[new Promise(e=>{
this.AvastWRC.getStorage("trackers",t=>{
this.trackers=this.bal.troughStorage("trackers",t||{}),
e()
})
}),new Promise(e=>{
this.AvastWRC.getStorage("whiteList",t=>{
this.whiteList=this.bal.troughStorage("whiteList",t||{}),
e()
})
}),new Promise(e=>{
this.AvastWRC.getStorage("blockList",t=>{
this.blockList=this.bal.troughStorage("blockList",t||{}),
e()
})
})]
Promise.all(t).then(()=>{
var t=this.AvastWRC.bal.storage.get("trackers")
t&&(this.trackers.set(t),this.AvastWRC.bal.storage.delete("trackers"))
var i=this.AvastWRC.bal.storage.get("whiteList")
i&&(this.whiteList.set(i),this.AvastWRC.bal.storage.delete("whiteList"))
let a=this.trackers.get()
this.trackersByCategory=this.trackersToCategories(a)
var o=this.AvastWRC.bal.settings.get(),r=this.blockList.get()
void 0===r.categories&&(r.categories={}),r.categories.Others=o.features.dntOthers,
r.categories.WebAnalytics=o.features.dntWebAnalytics,
r.categories.AdTracking=o.features.dntAdTracking,
r.categories.Social=o.features.dntSocial,
void 0===r.trackers&&(r.trackers={})
var n=this.whiteList.get()
if(n&&n.trk){
for(let e in n.trk){
for(let t in n.trk[e]){
n.trk[e][t]&&(r.trackers[t]=!0)
}
}
for(let e in n){
"trk"!==e&&delete n[e]
}
n=null,this.whiteList.set(n)
}
this.blockList.set(r)
let s=this.trackers.get()
s&&0!==Object.keys(s).length?this.updateDetectionRules(s):this.reloadLocalDntRules(),
e()
})
})
}
reloadLocalDntRules(){
this.trackers.set({}),this.addDNTrules(Dr)
}
registerModuleListeners(e){
e.on("request.dnt_enable",e=>{
e||this.bal.emitEvent("request.dnt.block",null)
var t=this.AvastWRC.bal.settings.get()
t.features.dnt=e,this.AvastWRC.bal.settings.set(t)
}),e.on("request.dntWhitelist",(e,t,i,a)=>{
let o=this.blockList.get()
if(e){
if(o.categories[e]=a,!a){
let t=this.trackersByCategory[e]
for(let e in t){
let i=t[e]
!0===o.trackers[i]&&delete o.trackers[i]
}
}
}else{
let e=t
Array.isArray(e)||(e=[t])
for(let t in e){
let i=e[t]
a?o.trackers[i]=!0:delete o.trackers[i]
}
}
this.blockList.set(o),this.setDntFeatures(!0,!1,o.categories),this.bal.emitEvent("dnt.changed")
}),
e.on("request.dnt.activate",()=>{
let e=this.blockList.get()
for(let t in this.trkrType){
e.categories[this.trkrType[t]]=!0
}
e.trackers={},this.blockList.set(e),this.setDntFeatures(!0,!0,e.categories),this.bal.emitEvent("dnt.changed")
}),
e.on("request.dnt.block",()=>{
let e=this.blockList.get()
for(let t in this.trkrType){
e.categories[this.trkrType[t]]=!1
}
this.blockList.set(e),this.setDntFeatures(!0,!1,e.categories),this.bal.emitEvent("dnt.changed")
}),
e.on("shepherd.updated",e=>{
e&&e.DNT&&this.addDNTrules(e.DNT.trackers)
})
}
getCategory(e){
switch(e){
case 0:
return"Others"
case 1:
return"WebAnalytics"
case 2:
return"Others"
case 3:
case 4:
case 5:
return"AdTracking"
case 11:
case 12:
case 13:
return"Social"
default:
return"Others"
}
}
addDNTrules(e){
if(!e){
return
}
let t=this.trackers.get()||{}
for(let i=0;i<e.length;i+=1){
let a=e[i]
a.name?(a.category=this.getCategory(a.category),t[a.id]=a):delete t[a.id]
}
this.trackers.set(t),this.updateDetectionRules(t),this.trackersByCategory=this.trackersToCategories(t)
}
trackersToCategories(e){
let t={}
for(let i in e){
let a=e[i],o=a.category
t[o]||(t[o]=[]),t[o].push(a.id)
}
return t
}
updateDetectionRules(e){
var t={},i=[]
Wr(e,e=>{
if(e&&e.name){
var a=e.domains
a&&a.length>0?$a(a,(function(i){
var a=t[i]
a||(a={
domainTracker:null,
patternTrackers:[]
},t[i]=a),e.pattern&&e.pattern.length>0?a.patternTrackers.push(e):a.domainTracker=e
})):e.pattern&&e.pattern.length>0&&i.push(e),
-1===this.trkrType.indexOf(e.category)&&this.trkrType.push(e.category)
}
}),this.domainTrackers=t,this.patternTrackers=i
}
initTab(e){
var t={}
for(var i in this.trkrType){
t[this.trkrType[i]]=[]
}
this.AvastWRC.TabReqCache.set(e,"dntTrackers",t),this.AvastWRC.bal.emitEvent("badgeInfoUpdated",e,null,this.computeTotal.bind(this))
}
updateAllTabs(){
this.AvastWRC.bs.getTabs(e=>{
for(let t=0;t<e.length;t+=1){
let i=e[t]
if(this.AvastWRC.bs.checkExtensionUrl(i.url)){
continue
}
let a=i.id,o=this.AvastWRC.bs.getHostInTab(a)
this.AvastWRC.bal.emitEvent("badgeInfoUpdated",a,o,this.computeTotal.bind(this))
}
})
}
getTab(e){
return this.AvastWRC.TabReqCache.get(e,"dntTrackers")||this.initTab(e),
this.AvastWRC.TabReqCache.get(e,"dntTrackers")
}
resetAllTabs(){
let e=this.AvastWRC.TabReqCache.tabIds()
for(let t=0;t<e.length;t+=1){
this.initTab(e[t])
}
}
callRegExp(e,t){
return RegExp(e.pattern).test(t)
}
isTracking(e,t,i){
var a=!1,o="object"==typeof i?i.id:i
e=e.toLowerCase()
var r=this.AvastWRC.bal.getHostFromUrl(e)
if(r&&r!==t){
var n=null,s=this.domainTrackers[this.AvastWRC.bal.getDomainFromHost(r)]
if(s&&((n=Ua(s.patternTrackers,t=>this.callRegExp(t,e)))||(n=s.domainTracker)),n||(n=Ua(this.patternTrackers,t=>this.callRegExp(t,e))),
n){
let e=this.getTab(o)
e&&!e[n.category].includes(n.id)&&(e[n.category].push(n.id),this.AvastWRC.bal.emitEvent("badgeInfoUpdated",i,t,this.computeTotal.bind(this)),
this.AvastWRC.bal.emitEvent("message.panelAction",{
data:{
type:"panelUpdate"
}
},{
id:i
})),a=this.isBlocked(t,n.id,n.category)
}
}
return a
}
getUIData(e,t){
let i=this.getTab(e),a=this.trackers.get(),o=this.blockList.get(),r=this.AvastWRC.bal.settings.get().features,n=r.dntAutoBlock
t||(t=""),t=t.replace("www.","")
let s=[],l=this.trkrType,c={
actives:0,
total:0
}
for(let e=0;e<l.length;e+=1){
let n=l[e],u=0,p=[]
for(let e=0;e<i[n].length;e+=1){
let r=i[n][e],s=this.isBlocked(t,r,n)
s&&(u+=1),p.push({
id:r,
name:a[r].name,
active:s||o.categories[n],
disabled:o.categories[n],
type:n
})
}
let d=i[n].length,g=0,m=0,h=this.trackersByCategory[n]
for(let e in h){
let t=h[e]
m+=1,o.trackers[t]&&(g+=1)
}
s.push({
type:n,
type_desc_key:"dnt"+n+"Networks",
activeTrackers:u,
active:o.categories[n],
totalTrackers:d,
trackers:p,
featureEnabled:r["dnt"+n],
allAllowed:!o.categories[n]&&0===g&&m>0,
allBlocked:(o.categories[n]||g===m)&&m>0,
someBlocked:!o.categories[n]&&g>0&&g<m
}),c.actives+=u,c.total+=d
}
return{
tabId:e,
host:t,
enabled:r.dnt,
active:n,
stat:c,
groups:Ur(s)
}
}
computeTotal(e,t){
let i=this.AvastWRC.bal.RATING_COLOR
if(-1==e||!t){
return{
text:"0",
color:i[0]
}
}
let a=this.getTab(e),o=this.trkrType,r=0,n=0
for(let e=0;e<o.length;e+=1){
let i=o[e]
r+=a[i].length
for(let e=0;e<a[i].length;e+=1){
let o=a[i][e]
this.isBlocked(t,o,i)||(n+=1)
}
}
let s=i[0]
return r>0&&(s=0===n?i[1]:n<r?i[2]:i[3]),{
text:r.toString(),
color:s
}
}
trace(e){
e("--- bal.dnt ---")
let t=0,i=0,a=this.AvastWRC.TabReqCache.tabIds()
for(let e=0;e<a.length;e+=1){
let o=this.AvastWRC.TabReqCache.get(a[e],"dntTrackers")
t+=1,i+=To(o,(function(e,t){
return e+t.length
}),0)
}
e({
tabs:t,
trackers:i
})
}
}
class qr{
constructor(e,t){
this.AvastWRC=e,this.bal=t
}
registerModuleListeners(e){
e.on("message.checkLinks",this.onCheckLinks.bind(this))
}
onCheckLinks(e,t){
const i=[],a=this._getSerpRules(t.url)
if(a.urlExtractor){
for(let t=0;t<e.links.length;t++){
let o=e.links[t],r=decodeURIComponent(o).match(a.urlExtractor)
if(null!=r&&r.length>1){
let a=r[1]
void 0===i[a]&&(i[a]=[]),i[a].push(e.links[t]),e.links[t]=a
}
}
}
const o={
url:e.links
}
e.usecases&&e.usecases.length>0&&(o.customKeyValue=e.usecases),this.AvastWRC.get(o,e=>{
for(let t=0;t<e.length;t++){
if(i[e[t].url]){
let a=i[e[t].url].shift()
a&&(e[t].url=a)
}
}
this.AvastWRC.bs.accessContent(t,{
message:"checkLinksResult",
data:{
result:e.map((function(e){
return{
url:e.url,
rating:e.getRatingCategory()
}
})),
showPopup:this.AvastWRC.CONFIG.ENABLE_SERP_POPUP,
rules:a
}
})
})
}
_getStyle(e){
return[["wrcx",0],["wrc0",0],["wrc1",1],["wrc2",2],["wrc3",3]].map(t=>e.style.replace(/WRCN/g,t[0])).join("\n")
}
_getContainer(e){
return e.container
}
_getSerpRules(e){
if(!this.AvastWRC.Shepherd){
return!1
}
let t=this.AvastWRC.Shepherd.getSerpRule(e)
return!(!t||0===Object.keys(t).length)&&t
}
checkSearch(e){
if(!this.AvastWRC.CONFIG.URL_CONSENT){
return
}
let t=this._getSerpRules(e.url)
if(!t){
return
}
let i=this._getStyle(t),a=this._getContainer(t)
this.AvastWRC.bs.accessContent(e,{
message:"parseLinks",
data:{
style:i,
container:a,
serpRules:t
}
})
}
}
const Gr=i(13),Mr=i(26),Fr=i(11)
var Hr=function(){}
class Yr{
constructor(e){
this.AvastWRC=e,this.options={},this.request=null,this.completed=!1,
this.headers={}
}
init(){
this.headers=Ce({},this.AvastWRC.Query.CONST.HEADERS,this.headers),this.message(),
this.options.go&&this.post()
}
set(e,t){
return this.options[e]=t,this
}
get(e){
return this.options[e]
}
post(){
if(-1!==this.options.server.indexOf(":null")){
return this
}
var e=this.getBuffer(this.request),t=this,i=new XMLHttpRequest
for(var a in i.open(this.options.method.toUpperCase(),this.options.server,!0),i.responseType="arraybuffer",
i.withCredentials=!0,
i.timeout=this.options.timeout||0,this.headers){
i.setRequestHeader(a,this.headers[a])
}
return i.onload=function(e){
var a=0
if(void 0!==e.srcElement?a=e.srcElement.status:void 0!==e.target&&(a=e.target.status),
403===a&&t.error(i),
400===a){
String.fromCharCode.apply(String,new Uint8Array(i.response))
}
t.callback(i.response)
},i.onerror=function(){
t.error(i)
},i.ontimeout=function(){
t.error(i)
},i.send(e),this
}
message(){}
getBuffer(e){}
callback(e){}
error(e){
this.options.error&&this.options.error(e)
}
encodeUTF8(e){
let t,i,a,o,r,n=e.length,s=[]
for(let l=0;l<n;l++){
t=e.charCodeAt(l),0==(65408&t)?s.push(t):(55296==(64512&t)&&(i=e.charCodeAt(l+1),
56320==(64512&i)&&(t=65536+((1023&t)<<10|1023&i),
l++)),a=255&t,o=65280&t,r=16711680&t,
t<=2047?(s.push(192|o>>6|a>>6),s.push(128|63&a)):t<=65535?(s.push(224|o>>12),
s.push(128|o>>6&63|a>>6),
s.push(128|63&a)):t<=1114111?(s.push(240|r>>18),s.push(128|r>>12&63|o>>12),
s.push(128|o>>6&63|a>>6),
s.push(128|63&a)):s.push("?".charCodeAt(0)))
}
return s
}
decodeUTF8(e){
if(!e){
return""
}
let t,i,a,o,r=e.length,n=""
for(let s=0;s<r;s++){
if(t=e[s],0==(128&t)){}else if(240==(248&t)){
if(i=e[s+1],a=e[s+2],o=e[s+3],128!=(192&i)||128!=(192&a)||128!=(192&o)){
continue
}
t=(7&t)<<18|(63&i)<<12|(63&a)<<6|63&o,s+=3
}else if(224==(240&t)){
if(i=e[s+1],a=e[s+2],128!=(192&i)||128!=(192&a)){
continue
}
t=(15&t)<<12|(63&i)<<6|63&a,s+=2
}else{
if(192!=(224&t)){
continue
}
if(i=e[s+1],128!=(192&i)){
continue
}
t=(31&t)<<6|63&i,s+=1
}
t<=65535?n+=String.fromCharCode(t):t>65535&&t<=1114111&&(t-=65536,n+=String.fromCharCode(55296|t>>10)+String.fromCharCode(56320|1023&t))
}
return n
}
}
class Kr extends Yr{
constructor(e,t){
super(e),this.options=Ce({
url:null,
type:"GET_PROPERTIES",
property:"",
value:"",
server:"http://localhost:"+this.AvastWRC.Query.CONST.LOCAL_PORT+"/command",
method:"post",
callback:Hr,
timeout:0,
go:!0
},t),this.AvastWRC.Query.CONST.LOCAL_TOKEN&&(this.headers=Ce({
"X-AVAST-APP-ID":this.AvastWRC.Query.CONST.LOCAL_TOKEN
},this.headers)),this.AvastWRC.Utils.getBrowserInfo().isEdge()&&(this.options.timeout=1),
this.request=null,
this.response=null,this.proto=this.AvastWRC.proto.AV,this.init()
}
getBuffer(e){
return this.proto.LocalServerCommandRequest.encode(e).finish()
}
callback(e){
const t=this.proto.LocalServerCommandResponse.decode(new Uint8Array(e)),i={
result:[],
error:this.decodeUTF8(t.error)
}
for(let e=0;e<t.result.length;e+=1){
i.result.push(this.decodeUTF8(t.result[e]))
}
this.options.callback(i),this.completed=!0
}
fixPropertyName(e){
return e.startsWith("avcfg://")||e.startsWith("avprop://")||(e="avcfg://settings/Common/"+e),
e
}
message(){
const e=this.proto,t=this.AvastWRC.Utils.getBrowserInfo()
let i
switch(this.request=e.LocalServerCommandRequest.create(),this.request.type=e.CommandType[this.options.type],
this.request.browser=e.BrowserType[t.getBrowser()],
this.options.type){
case"ACKNOWLEDGEMENT":
this.request.params.push(this.encodeUTF8(this.AvastWRC.CONFIG.VERSION))
break
case"GET_PROPERTY":
i=this.fixPropertyName(this.options.property),this.request.params.push(this.encodeUTF8(i))
break
case"SET_PROPERTY":
i=this.fixPropertyName(this.options.property),this.request.params.push(this.encodeUTF8(i)),
this.request.params.push(this.encodeUTF8(this.options.value))
break
case"GET_PROPERTIES":
for(let e=0;e<this.options.params.length;e+=1){
i=this.fixPropertyName(this.options.params[e]),
this.request.params.push(this.encodeUTF8(i))
}
break
case"SET_PROPERTIES":
for(let e=0;e<this.options.params.length;e+=1){
i=this.fixPropertyName(this.options.params[e]),
this.request.params.push(this.encodeUTF8(i+"="+this.options.values[e]))
}
break
case"IS_BANKING_SITE":
case"IS_SAFEZONE_CUSTOM_SITE":
case"SITECORRECT":
case"SWITCH_TO_SAFEZONE":
this.request.params.push(this.encodeUTF8(this.options.value))
}
return this
}
}
const Zr=i(11)
class Jr{
constructor(e){
this.AvastWRC=e,this._loadedFiles={}
}
initPlatform(){}
getVersion(){
return 8
}
loadFile(e,t,i){
var a=new XMLHttpRequest,o=this.getLocalResourceURL(e)
return!i&&this._loadedFiles[o]?(t(this._loadedFiles[o]),!1):(a.open("GET",o,!0),
a.overrideMimeType("text/plain"),
a.onreadystatechange=()=>{
4!=a.readyState||200!=a.status&&0!=a.status||(i||(this._loadedFiles[o]=a.responseText),
t(a.responseText))
},a.send(null),a)
}
getLocalizedString(e){
return e
}
tabExists(e,t){
t&&t.call(self)
}
checkUrl(e){
if(!e||""==e){
return!1
}
for(var t=0,i=this.AvastWRC.DEFAULTS.IGNORE_TABS.length;t<i;t++){
var a=new RegExp(this.AvastWRC.DEFAULTS.IGNORE_TABS[t],"i")
if(e.match(a)){
return!1
}
}
return!0
}
checkExtensionUrl(e){
return!(!e||0!=e.indexOf(this.AvastWRC.bs.getLocalResourceURL("")))
}
getMessageFromExtensionUrl(e){
if(!this.checkExtensionUrl(e)){
return!1
}
let t=e.match(/([^/]+\.html)/)
return!!t&&t[1]
}
getDataFromExtensionUrl(e){
if(!this.checkExtensionUrl(e)){
return!1
}
let t=e.match(/\?data=([^&]+)/)
if(!t){
return!1
}
let i=t[1],a={}
try{
a=JSON.parse(atob(i))
}catch(e){
a={}
}
return a
}
}
class Qr extends Jr{
constructor(e){
super(e),this.bal=null,this.hostInTab=[],this.scriptInTab=[],this.url_map=new Map,
this.ajax_map=new Map,
this.browserInfo=this.AvastWRC.Utils.getBrowserInfo()
}
extensionCustomPage(e,t){
this.AvastWRC.bal.emitEvent("control.show",e),this.AvastWRC.bs.aos.updateButtonFromExtensionUrl(t,e)
}
createCustomKeys({additionalCustomKeys:e,tabId:t,checkOriginTypeCnt:i,event:a,originType:o}){
const r=Tr(this.AvastWRC.TabReqCache.get(t,"pageTitle"))||[]
i&&1!==this.AvastWRC.bs.aos.originTypeCnt&&r.push({
key:"iuaPossibleOverwrite",
value:!0
}),r.push({
key:"api_port",
value:this.AvastWRC.Query.CONST.LOCAL_PORT||!1
}),r.push({
key:"api_timestamp",
value:this.AvastWRC.Query.CONST.LOCAL_TIMESTAMP
})
const n=this.AvastWRC.serializeWebshieldStatus()
n&&r.push({
key:"webshieldStatus",
value:n
}),"number"==typeof o&&r.push({
key:"initiating_user_action",
value:o
})
for(const t in e){
let i=e[t]
;("duplicated"!==t||"onUpdatedLoading"===i||"tabChange"===i&&!1===a)&&("served_from_cache"===t&&void 0===i||"internalRedirect"===t&&!0!==i||r.push({
key:t,
value:i
}))
}
return r
}
urlInfoChange(e,t,i,a,o){
if(this.AvastWRC.CONFIG.ENABLE_WEBREP_CONTROL){
var r=[e]
if(t.id){
r={
url:e,
referer:this.AvastWRC.TabReqCache.get(t.id,"referer"),
tabNum:t.id,
windowNum:t.windowId,
reqServices:this.bal.reqUrlInfoServices,
tabUpdated:a,
originType:this.AvastWRC.TabReqCache.get(t.id,"originType"),
customKeyValue:[],
fromCache:o.served_from_cache,
clientTimestamp:(new Date).getTime()
}
let i=!0
!1===a&&(i=!1),void 0!==r.originType&&null!==r.originType||(r.originType=this.AvastWRC.proto.UrlInfo.OriginType.SESSION_RESTORE,
i=!1),
a===this.AvastWRC.proto.UrlInfo.EventType.SERVER_REDIRECT&&(r.originType=this.AvastWRC.proto.UrlInfo.OriginType.OTHER,
i=!1),
r.customKeyValue=this.createCustomKeys({
additionalCustomKeys:o,
tabId:t.id,
checkOriginTypeCnt:i,
event:a,
originType:r.originType
}),i&&(this.AvastWRC.bs.aos.originTypeCnt-=1)
}
this.AvastWRC.CONFIG.EXT_TYPE===this.AvastWRC.EXT_TYPE_AOS&&this.ajax_map.get(this.AvastWRC.bal.getDomainFromUrl(e))&&(r.reqServices=447),
r.reqServices|=256,
this.AvastWRC.get(r,function(i){
var o=this.AvastWRC.bal.getDomainFromUrl(e)
this.AvastWRC.bal.emitEvent("urlInfo.response",e,i[0],t,a),i[0].values.ajax?(this.AvastWRC.TabReqCache.set(o,"isAjax",i[0].values.ajax.collect),
this.ajax_map.set(this.AvastWRC.bal.getDomainFromUrl(e),i[0].values.ajax.collect)):this.AvastWRC.TabReqCache.set(o,"isAjax","notSet")
}.bind(this))
}
a&&this.AvastWRC.bal.DNT&&this.AvastWRC.bal.DNT.initTab&&this.AvastWRC.bal.DNT.initTab(t.id)
}
onCommitted(e){
0===e.frameId&&(this.AvastWRC.TabReqCache.set(e.tabId,"reported",!1),
this.AvastWRC.bs.clearTabMessages(e.tabId))
}
onTabUpdated(e,t,i){
this.AvastWRC.bs.tabExists.call(this,e,()=>{
if(this.AvastWRC.bs.checkExtensionUrl(i.url)){
return void this.extensionCustomPage(i.id,i.url)
}
if(!this.AvastWRC.bs.checkUrl(i.url)){
return void this.AvastWRC.bal.emitEvent("control.hide",e)
}
this.AvastWRC.bal.emitEvent("control.show",e)
const a=this.AvastWRC.bal.getHostFromUrl(i.url),o=this.AvastWRC.Utils.getBrowserInfo().isFirefox(),r=this.AvastWRC.TabReqCache.get(i.id,"reported")?"onUpdatedLoading":"",n=this.AvastWRC.TabReqCache.get(i.id,"fromCache")||{}
let s=void 0
n.url===i.url&&n.validUntil>1*new Date&&(s=n.cache)
const l={
served_from_cache:s,
duplicated:r
}
switch(t.status){
case"loading":
this.AvastWRC.TabReqCache.set(i.id,"timer",Date.now()),o&&t.url&&(this.urlInfoChange(i.url,i,t.status,!0,l),
this.AvastWRC.TabReqCache.set(i.id,"reported",!0)),
o||(this.urlInfoChange(i.url,i,t.status,!0,l),
this.AvastWRC.TabReqCache.set(i.id,"reported",!0)),
a&&delete this.scriptInTab[i.id]
break
case"complete":
Date.now(),this.AvastWRC.TabReqCache.get(i.id,"timer")
void 0===this.hostInTab[e]&&this.urlInfoChange(i.url,i,t.status,!0,l)
}
this.url_map.set(e,i.url),a&&(this.hostInTab[e]=a)
})
}
onActivated(e){
this.AvastWRC.bs.tabExists.call(this,e.tabId,(function(){
chrome.tabs.get(e.tabId,function(t){
if(this.AvastWRC.bs.checkExtensionUrl(t.url)){
return void this.extensionCustomPage(e.tabId,t.url)
}
if(!this.AvastWRC.bs.checkUrl(t.url)){
return void this.AvastWRC.bal.emitEvent("control.hide",e.tabId)
}
this.AvastWRC.bal.emitEvent("control.show",e.tabId)
const i=this.AvastWRC.TabReqCache.get(e.tabId,"tabActivated"),a={
duplicated:"loading"===t.status&&void 0===i?"tabChange":""
}
this.urlInfoChange(t.url,t,"complete",!1,a),this.AvastWRC.TabReqCache.set(e.tabId,"tabActivated",!0)
}.bind(this))
}))
}
isRedirectInternal(e){
let t=!1
return t=this.browserInfo.isChrome()||this.browserInfo.isOpera()||this.browserInfo.isAvast()?void 0===e.ip&&307===e.statusCode&&!!e.statusLine.match(/Internal Redirect/i):this.browserInfo.isFirefox()?null===e.ip&&0===e.statusCode&&""===e.statusLine:this.browserInfo.isEdge()?void 0===e.ip&&301===e.statusCode:void 0===e.ip||null===e.ip,
t
}
onRedirect(e){
this.AvastWRC.bs.tabExists.call(this,e.tabId,function(){
chrome.tabs.get(e.tabId,t=>{
chrome.runtime.lastError
if(this.AvastWRC.bs.checkExtensionUrl(e.url)){
return void this.extensionCustomPage(e.tabId,e.url)
}
if(!this.AvastWRC.bs.checkUrl(t.url)){
return void this.AvastWRC.bal.emitEvent("control.hide",e.tabId)
}
this.AvastWRC.bal.emitEvent("control.show",e.tabId)
const i=this.isRedirectInternal(e),a={
served_from_cache:e.fromCache,
internalRedirect:i
}
this.urlInfoChange(e.url,t,null,this.AvastWRC.proto.UrlInfo.EventType.SERVER_REDIRECT,a)
})
}.bind(this))
}
onResponseStarted(e){
"main_frame"===e.type&&this.AvastWRC.bal.DNT&&this.AvastWRC.bal.DNT.initTab&&this.AvastWRC.bal.DNT.initTab(e.tabId)
}
accessContent(e,t){
this.AvastWRC.bs.messageTab(e,t)
}
getHostInTab(e){
return this.hostInTab[e]
}
setHostInTab(e,t){
this.hostInTab[e]=t
}
getLocalStorage(e,t){
chrome.storage.local.get(e,(function(i){
"object"==typeof i&&i[e]?t(i[e]):t(null)
}))
}
setLocalStorage(e,t){
var i={}
i[e]=t,chrome.storage.local.set(i)
}
init(e){
this.bal=e
const t=chrome.webRequest||{},i=chrome.webNavigation||{}
chrome.tabs.onUpdated.addListener(this.onTabUpdated.bind(this)),chrome.tabs.onActivated.addListener(this.onActivated.bind(this)),
chrome.tabs.onRemoved.addListener(this.AvastWRC.onTabRemoved.bind(this.AvastWRC)),
i.onCommitted&&i.onCommitted.addListener(this.onCommitted.bind(this)),
t.onBeforeRedirect&&t.onBeforeRedirect.addListener(this.onRedirect.bind(this),{
urls:["http://*/*","https://*/*"],
types:["main_frame"]
})
var a=["requestHeaders"]
;(this.browserInfo.isChrome()||this.browserInfo.isAvast())&&this.browserInfo.getBrowserVersionMajor()>=72&&a.push("extraHeaders"),
t.onResponseStarted&&t.onResponseStarted.addListener(this.onResponseStarted.bind(this),{
urls:["http://*/*","https://*/*"],
types:["main_frame"]
}),t.onSendHeaders&&t.onSendHeaders.addListener(this.AvastWRC.onSendHeaders.bind(this.AvastWRC),{
urls:["http://*/*","https://*/*"]
},a),t.onErrorOccurred&&t.onErrorOccurred.addListener(this.AvastWRC.onErrorOccurred.bind(this.AvastWRC),{
urls:["http://*/*","https://*/*"]
}),t.onCompleted&&t.onCompleted.addListener(this.AvastWRC.onCompleted.bind(this.AvastWRC),{
urls:["http://*/*","https://*/*"]
}),this.AvastWRC.bs.getActiveTab(e=>{
this.AvastWRC.bs.checkExtensionUrl(e.url)&&this.extensionCustomPage(e.id,e.url)
})
}
}
class Xr{
constructor(e,t){
this.AvastWRC=e,this._bal=this.AvastWRC.bal,this.panelbl=this.AvastWRC.panelbl,
this.tabId=t.tabId,
this.url=t.url,this.host=e.bal.getHostFromUrl(t.url),this.data={}
}
init(){
this.prepareData(),this.initPanel()
}
prepareData(){
this.data={
URL_CONSENT:this.AvastWRC.CONFIG.URL_CONSENT,
brandName:this.AvastWRC.DEFAULTS.BRAND_NAME,
isBeta:this.AvastWRC.DEFAULTS.IS_BETA,
uiAction:{
showVoteThanks:!1,
closeDetails:!1,
showDefault:!1
},
settings:[],
web:{},
security:{},
vote:{},
privacy:{}
},this.prepareDataSettings(),this.prepareDataWeb(),this.prepareDataSecurity(),
this.prepareDataPrivacy(),
this.prepareDataVote()
}
prepareDataSettings(){
const e=this.AvastWRC.bal.settings.get().features,t=this.AvastWRC.Utils.getBrowserInfo(),i=t.isSafari()
t.isFirefox()
this.data.settings=[{
categoryId:"security",
items:[{
id:"serp",
nls:"serp",
value:e.serp,
enabled:!0,
subitems:[{
id:"serpPopup",
nls:"serpPopup",
value:e.serpPopup,
enabled:e.serp
}]
},{
id:"secureBrowser",
nls:"secureBrowser."+this.AvastWRC.DEFAULTS.BRAND_NAME,
value:e.secureBrowser,
enabled:this.AvastWRC.bal.aos.SZ.config.safezoneAvailable&&this.AvastWRC.Query.CONST.LOCAL_PORT,
hide:i
}]
},{
categoryId:"privacy",
items:[{
id:"dntBadge",
nls:"dntBadge",
value:e.dntBadge,
enabled:!0,
hide:i
},{
id:"dntAutoBlock",
nls:"dntAutoBlock",
value:e.dntAutoBlock,
enabled:!0,
hide:i,
subitems:[{
id:"dntSocial",
nls:"dntSocial",
noTitle:!0,
value:e.dntSocial,
enabled:!e.dntAutoBlock,
hide:i
},{
id:"dntAdTracking",
nls:"dntAdTracking",
noTitle:!0,
value:e.dntAdTracking,
enabled:!e.dntAutoBlock,
hide:i
},{
id:"dntWebAnalytics",
nls:"dntWebAnalytics",
noTitle:!0,
value:e.dntWebAnalytics,
enabled:!e.dntAutoBlock,
hide:i
},{
id:"dntOthers",
nls:"dntOthers",
noTitle:!0,
value:e.dntOthers,
enabled:!e.dntAutoBlock,
hide:i
}]
},{
id:"productAnalysis",
nls:"productAnalysis",
noDesc:!0,
value:e.productAnalysis,
enabled:!0
}]
}]
}
prepareDataWeb(){
const e=this.AvastWRC.bal.DNT.getUIData(this.tabId,this.host)
this.data.web={
name:e.host
}
}
prepareDataSecurity(){
const e={
status:{
safe:!1,
bad:!1,
unsafe:!1,
unknown:!1
},
phishing:!1,
malware:!1,
safetyUrl:""
},t=this.url
if(this.AvastWRC.bs.checkExtensionUrl(this.url)){
const t=this.AvastWRC.bs.getMessageFromExtensionUrl(this.url)
let i=this.AvastWRC.bs.getDataFromExtensionUrl(this.url)
i&&"messagebox.html"===t&&("phishing"===i.type?(e.status.unsafe=!0,e.phishing=!0,
e.safetyUrl=i.safety_url):"malware"===i.type?(e.status.unsafe=!0,
e.malware=!0,e.safetyUrl=i.safety_url):e.status.unknown=!0)
}else{
const i=this.AvastWRC.Cache.getNoTTL(t)
if(i&&i.values){
switch(i.getRatingCategory()){
case this.AvastWRC.RATING_NONE:
e.status.unknown=!0
break
case this.AvastWRC.RATING_GOOD:
e.status.safe=!0
break
case this.AvastWRC.RATING_AVERAGE:
e.status.bad=!0
break
case this.AvastWRC.RATING_BAD:
e.status.unsafe=!0
}
e.phishing=i.isPhishing(),e.malware=i.isMalware()
}else{
e.status.unknown=!0
}
e.safetyUrl=this.AvastWRC.bal.aos.getSafePageUrl()||this.AvastWRC.PHISHING_REDIRECT
}
this.data.security=e
}
prepareDataPrivacy(){
const e=this.AvastWRC.bal.DNT.getUIData(this.tabId,this.host),t={
status:{
on:e.stat.actives===e.stat.total,
some:e.stat.actives>0&&e.stat.actives<e.stat.total,
off:0===e.stat.actives&&e.stat.total>0
},
trackersFound:e.stat.total,
trackersBlocked:e.stat.actives,
autoBlock:e.active,
groups:[]
}
for(let i=0;i<e.groups.length;i+=1){
const a=e.groups[i],o=[]
for(let e=0;e<a.trackers.length;e+=1){
let t=a.trackers[e],i={
id:t.id,
name:t.name,
blocked:t.active
}
o.push(i)
}
const r={
id:a.type,
blocked:a.active,
status:{
on:a.activeTrackers===a.totalTrackers,
some:a.activeTrackers>0&&a.activeTrackers<a.totalTrackers,
off:0===a.activeTrackers&&a.totalTrackers>0
},
trackersFound:a.totalTrackers,
trackersBlocked:a.activeTrackers,
trackers:o
}
t.groups.push(r)
}
this.data.privacy=t
}
prepareDataVote(){
const e=this.AvastWRC.Voting.get(this.url),t={
status:{
unrated:!1,
trusted:!1,
untrusted:!1
},
showThanks:!1,
categories:[]
}
e===this.AvastWRC.DEFAULTS.VOTING.POSITIVE?t.status.trusted=!0:e===this.AvastWRC.DEFAULTS.VOTING.NEGATIVE?t.status.untrusted=!0:t.status.unrated=!0,
this.data.vote=t
}
tabSendMessage(e){
this.AvastWRC.bs.messageTab({
id:this.tabId
},e)
}
messageHandler(e,t){
let i
switch(e){
case"panelOpening":
i=this.panelOpening()
break
case"panelClosing":
i=this.panelClosing()
break
case"panelUpdate":
i=!0
break
case"viewOpen":
i=this.viewOpen()
break
case"viewClose":
i=this.viewClose()
break
case"ratePositive":
i=this.ratePositive()
break
case"rateNegative":
i=this.rateNegative(t.categories)
break
case"rateRevert":
i=this.rateRevert()
break
case"trackerBlock":
i=this.trackerBlock(t.trackerId,t.trackerGroup,t.trackerName)
break
case"trackerUnblock":
i=this.trackerUnblock(t.trackerId,t.trackerGroup,t.trackerName)
break
case"trackerGroupBlock":
i=this.trackerGroupBlock(t.groupId)
break
case"trackerGroupUnblock":
i=this.trackerGroupUnblock(t.groupId)
break
case"settingFeatureSet":
i=this.AvastWRC.bal.settingFeatureSet(t.feature,t.value,t.trackCategory)
break
case"trackSettingsOpened":
i=this.trackSettingsOpened()
break
case"settingSave":
i=this.settingSave()
break
case"afterInstallAction":
this.AvastWRC.CONFIG.URL_CONSENT=t.urlConsent,localStorage.setItem("URL_CONSENT",""+t.urlConsent),
this.AvastWRC.bal.settingFeatureSet("urlConsent",t.urlConsent,t.clickSource),
!0===t.urlConsent&&this.AvastWRC.bal.emitEvent("control.setIcon",void 0,"common/ui/icons/icon-unknown.png")
}
void 0===i&&(i=!0),i&&(this.prepareData(),this.viewUpdate())
}
initPanel(){
this.tabSendMessage({
data:{
data:this.data,
isSafari:this.AvastWRC.Utils.getBrowserInfo().isSafari()
},
message:"initPanel"
})
}
panelOpening(){
return this.prepareData(),this.data.uiAction.showDefault=!0,this.viewUpdate(),
!1
}
panelClosing(){
return this.prepareData(),this.data.uiAction.closeDetails=!0,this.viewUpdate(),
!1
}
viewOpen(){
return this.tabSendMessage({
message:"openSidebar"
}),!1
}
viewClose(e){
return void 0===e&&(e=!1),this.tabSendMessage({
message:"closeSidebar",
data:{
immediately:e
}
}),!1
}
viewUpdate(){
this.tabSendMessage({
message:"updatePanel",
data:{
data:this.data
}
})
}
ratePositive(){
return this._bal.emitEvent("rated.positive",this.url),this.prepareData(),
this.data.uiAction.showVoteThanks=!0,
this.viewUpdate(),!1
}
rateNegative(){
return this._bal.emitEvent("rated.negative",this.url),this.prepareData(),
this.data.uiAction.showVoteThanks=!0,
this.viewUpdate(),!1
}
rateRevert(){
return this._bal.emitEvent("rated.remove",this.url),this.prepareData(),
this.viewUpdate(),
!1
}
trackSettingsOpened(){
return this._bal.emitEvent("track.settingsOpened"),!0
}
trackerBlock(e,t,i){
return this._bal.emitEvent("analytics.dntTracker",t,i,!0),this._bal.emitEvent("request.dntWhitelist",void 0,e,this.host,!0),
!0
}
trackerUnblock(e,t,i){
return this._bal.emitEvent("analytics.dntTracker",t,i,!1),
this._bal.emitEvent("request.dntWhitelist",void 0,e,this.host,!1),
!0
}
trackerGroupBlock(e){
return this._bal.emitEvent("analytics.dntGroup",e,!0),this._bal.emitEvent("request.dntWhitelist",e,null,this.host,!0),
!0
}
trackerGroupUnblock(e){
return this._bal.emitEvent("analytics.dntGroup",e,!1),this._bal.emitEvent("request.dntWhitelist",e,null,this.host,!1),
!0
}
settingSave(){
return this.prepareData(),this.data.uiAction.showDefault=!0,this.viewUpdate(),
!1
}
}
var $r="[object String]"
var en=function(e){
return"string"==typeof e||!ke(e)&&ce(e)&&h(e)==$r
}
class tn{
init(){}
sendHB(){}
sendWebshield(e,t,i,a,o,r,n){}
install(e=1){}
productUpdate(){}
preferences(e){}
click(e,t,i){}
view(e,t){}
vote(e,t){}
log(e,t){}
}
var an=i(18),on=i.n(an),rn=i(19),nn=i.n(rn),sn=i(20),ln=i.n(sn)
const cn=i(11)
var un=i(0)
const pn=un.Reader,dn=un.Writer,gn=un.util,mn=un.roots.default||(un.roots.default={}),hn=(mn.com=(()=>{
const e={}
return e.avast=function(){
const e={}
return e.cloud=function(){
const e={}
return e.webrep=function(){
const e={}
return e.proto=function(){
const e={}
return e.DomainInfoRequest=function(){
function e(e){
if(this.domain=[],e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.domain=gn.emptyArray,e.prototype.callerId=gn.Long?gn.Long.fromBits(0,0,!1):0,
e.prototype.apikey=gn.newBuffer([]),
e.prototype.identity=null,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
if(t||(t=dn.create()),null!=e.domain&&e.domain.length){
for(let i=0;i<e.domain.length;++i){
t.uint32(10).string(e.domain[i])
}
}
return null!=e.callerId&&e.hasOwnProperty("callerId")&&t.uint32(16).sint64(e.callerId),
null!=e.apikey&&e.hasOwnProperty("apikey")&&t.uint32(26).bytes(e.apikey),
null!=e.identity&&e.hasOwnProperty("identity")&&mn.com.avast.cloud.webrep.proto.AvastIdentity.encode(e.identity,t.uint32(34).fork()).ldelim(),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.DomainInfoRequest
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.domain&&a.domain.length||(a.domain=[]),a.domain.push(e.string())
break
case 2:
a.callerId=e.sint64()
break
case 3:
a.apikey=e.bytes()
break
case 4:
a.identity=mn.com.avast.cloud.webrep.proto.AvastIdentity.decode(e,e.uint32())
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.domain&&e.hasOwnProperty("domain")){
if(!Array.isArray(e.domain)){
return"domain: array expected"
}
for(let t=0;t<e.domain.length;++t){
if(!gn.isString(e.domain[t])){
return"domain: string[] expected"
}
}
}
if(null!=e.callerId&&e.hasOwnProperty("callerId")&&!(gn.isInteger(e.callerId)||e.callerId&&gn.isInteger(e.callerId.low)&&gn.isInteger(e.callerId.high))){
return"callerId: integer|Long expected"
}
if(null!=e.apikey&&e.hasOwnProperty("apikey")&&!(e.apikey&&"number"==typeof e.apikey.length||gn.isString(e.apikey))){
return"apikey: buffer expected"
}
if(null!=e.identity&&e.hasOwnProperty("identity")){
let t=mn.com.avast.cloud.webrep.proto.AvastIdentity.verify(e.identity)
if(t){
return"identity."+t
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.DomainInfoRequest){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.DomainInfoRequest
if(e.domain){
if(!Array.isArray(e.domain)){
throw TypeError(".com.avast.cloud.webrep.proto.DomainInfoRequest.domain: array expected")
}
t.domain=[]
for(let i=0;i<e.domain.length;++i){
t.domain[i]=String(e.domain[i])
}
}
if(null!=e.callerId&&(gn.Long?(t.callerId=gn.Long.fromValue(e.callerId)).unsigned=!1:"string"==typeof e.callerId?t.callerId=parseInt(e.callerId,10):"number"==typeof e.callerId?t.callerId=e.callerId:"object"==typeof e.callerId&&(t.callerId=new gn.LongBits(e.callerId.low>>>0,e.callerId.high>>>0).toNumber())),
null!=e.apikey&&("string"==typeof e.apikey?gn.base64.decode(e.apikey,t.apikey=gn.newBuffer(gn.base64.length(e.apikey)),0):e.apikey.length&&(t.apikey=e.apikey)),
null!=e.identity){
if("object"!=typeof e.identity){
throw TypeError(".com.avast.cloud.webrep.proto.DomainInfoRequest.identity: object expected")
}
t.identity=mn.com.avast.cloud.webrep.proto.AvastIdentity.fromObject(e.identity)
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
if((t.arrays||t.defaults)&&(i.domain=[]),t.defaults){
if(gn.Long){
let e=new gn.Long(0,0,!1)
i.callerId=t.longs===String?e.toString():t.longs===Number?e.toNumber():e
}else{
i.callerId=t.longs===String?"0":0
}
t.bytes===String?i.apikey="":(i.apikey=[],t.bytes!==Array&&(i.apikey=gn.newBuffer(i.apikey))),
i.identity=null
}
if(e.domain&&e.domain.length){
i.domain=[]
for(let t=0;t<e.domain.length;++t){
i.domain[t]=e.domain[t]
}
}
return null!=e.callerId&&e.hasOwnProperty("callerId")&&("number"==typeof e.callerId?i.callerId=t.longs===String?String(e.callerId):e.callerId:i.callerId=t.longs===String?gn.Long.prototype.toString.call(e.callerId):t.longs===Number?new gn.LongBits(e.callerId.low>>>0,e.callerId.high>>>0).toNumber():e.callerId),
null!=e.apikey&&e.hasOwnProperty("apikey")&&(i.apikey=t.bytes===String?gn.base64.encode(e.apikey,0,e.apikey.length):t.bytes===Array?Array.prototype.slice.call(e.apikey):e.apikey),
null!=e.identity&&e.hasOwnProperty("identity")&&(i.identity=mn.com.avast.cloud.webrep.proto.AvastIdentity.toObject(e.identity,t)),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.DomainInfoResponse=function(){
function e(e){
if(this.domainInfo=[],e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.domainInfo=gn.emptyArray,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
if(t||(t=dn.create()),null!=e.domainInfo&&e.domainInfo.length){
for(let i=0;i<e.domainInfo.length;++i){
mn.com.avast.cloud.webrep.proto.DomainInfoResponse.DomainInfo.encode(e.domainInfo[i],t.uint32(10).fork()).ldelim()
}
}
return t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.DomainInfoResponse
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.domainInfo&&a.domainInfo.length||(a.domainInfo=[]),a.domainInfo.push(mn.com.avast.cloud.webrep.proto.DomainInfoResponse.DomainInfo.decode(e,e.uint32()))
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.domainInfo&&e.hasOwnProperty("domainInfo")){
if(!Array.isArray(e.domainInfo)){
return"domainInfo: array expected"
}
for(let t=0;t<e.domainInfo.length;++t){
let i=mn.com.avast.cloud.webrep.proto.DomainInfoResponse.DomainInfo.verify(e.domainInfo[t])
if(i){
return"domainInfo."+i
}
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.DomainInfoResponse){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.DomainInfoResponse
if(e.domainInfo){
if(!Array.isArray(e.domainInfo)){
throw TypeError(".com.avast.cloud.webrep.proto.DomainInfoResponse.domainInfo: array expected")
}
t.domainInfo=[]
for(let i=0;i<e.domainInfo.length;++i){
if("object"!=typeof e.domainInfo[i]){
throw TypeError(".com.avast.cloud.webrep.proto.DomainInfoResponse.domainInfo: object expected")
}
t.domainInfo[i]=mn.com.avast.cloud.webrep.proto.DomainInfoResponse.DomainInfo.fromObject(e.domainInfo[i])
}
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
if((t.arrays||t.defaults)&&(i.domainInfo=[]),e.domainInfo&&e.domainInfo.length){
i.domainInfo=[]
for(let a=0;a<e.domainInfo.length;++a){
i.domainInfo[a]=mn.com.avast.cloud.webrep.proto.DomainInfoResponse.DomainInfo.toObject(e.domainInfo[a],t)
}
}
return i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e.DomainInfo=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.domain="",e.prototype.clean=!1,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.domain&&e.hasOwnProperty("domain")&&t.uint32(10).string(e.domain),
null!=e.clean&&e.hasOwnProperty("clean")&&t.uint32(16).bool(e.clean),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.DomainInfoResponse.DomainInfo
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.domain=e.string()
break
case 2:
a.clean=e.bool()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.domain&&e.hasOwnProperty("domain")&&!gn.isString(e.domain)?"domain: string expected":null!=e.clean&&e.hasOwnProperty("clean")&&"boolean"!=typeof e.clean?"clean: boolean expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.DomainInfoResponse.DomainInfo){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.DomainInfoResponse.DomainInfo
return null!=e.domain&&(t.domain=String(e.domain)),null!=e.clean&&(t.clean=Boolean(e.clean)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.domain="",i.clean=!1),null!=e.domain&&e.hasOwnProperty("domain")&&(i.domain=e.domain),
null!=e.clean&&e.hasOwnProperty("clean")&&(i.clean=e.clean),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e
}(),e.UrlInfoRequest=function(){
function e(e){
if(this.uri=[],this.customKeyValue=[],e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.uri=gn.emptyArray,e.prototype.callerId=gn.Long?gn.Long.fromBits(0,0,!1):0,
e.prototype.locale="",
e.prototype.apikey=gn.newBuffer([]),e.prototype.identity=null,
e.prototype.visited=!1,
e.prototype.updateRequest=null,e.prototype.requestedServices=0,
e.prototype.customKeyValue=gn.emptyArray,
e.prototype.referer="",e.prototype.windowNum=0,
e.prototype.tabNum=0,e.prototype.windowEvent=0,
e.prototype.origin=0,e.prototype.dnl=!1,
e.prototype.reserved=gn.newBuffer([]),e.prototype.safeShop=gn.Long?gn.Long.fromBits(0,0,!1):0,
e.prototype.client=null,
e.prototype.originHash=0,e.prototype.lastOrigin=null,e.prototype.clientTimestamp=gn.Long?gn.Long.fromBits(0,0,!1):0,
e.prototype.refererDetails=null,
e.prototype.initiating_user_action=0,e.prototype.served_from_cache=!1,
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
if(t||(t=dn.create()),null!=e.uri&&e.uri.length){
for(let i=0;i<e.uri.length;++i){
t.uint32(10).string(e.uri[i])
}
}
if(null!=e.callerId&&e.hasOwnProperty("callerId")&&t.uint32(16).sint64(e.callerId),
null!=e.locale&&e.hasOwnProperty("locale")&&t.uint32(26).string(e.locale),
null!=e.apikey&&e.hasOwnProperty("apikey")&&t.uint32(34).bytes(e.apikey),
null!=e.identity&&e.hasOwnProperty("identity")&&mn.com.avast.cloud.webrep.proto.Identity.encode(e.identity,t.uint32(42).fork()).ldelim(),
null!=e.visited&&e.hasOwnProperty("visited")&&t.uint32(48).bool(e.visited),
null!=e.updateRequest&&e.hasOwnProperty("updateRequest")&&mn.com.avast.cloud.webrep.proto.UpdateRequest.encode(e.updateRequest,t.uint32(58).fork()).ldelim(),
null!=e.requestedServices&&e.hasOwnProperty("requestedServices")&&t.uint32(64).sint32(e.requestedServices),
null!=e.customKeyValue&&e.customKeyValue.length){
for(let i=0;i<e.customKeyValue.length;++i){
mn.com.avast.cloud.webrep.proto.KeyValue.encode(e.customKeyValue[i],t.uint32(74).fork()).ldelim()
}
}
return null!=e.referer&&e.hasOwnProperty("referer")&&t.uint32(82).string(e.referer),
null!=e.windowNum&&e.hasOwnProperty("windowNum")&&t.uint32(88).sint32(e.windowNum),
null!=e.tabNum&&e.hasOwnProperty("tabNum")&&t.uint32(96).sint32(e.tabNum),
null!=e.windowEvent&&e.hasOwnProperty("windowEvent")&&t.uint32(104).int32(e.windowEvent),
null!=e.origin&&e.hasOwnProperty("origin")&&t.uint32(112).int32(e.origin),
null!=e.dnl&&e.hasOwnProperty("dnl")&&t.uint32(120).bool(e.dnl),
null!=e.reserved&&e.hasOwnProperty("reserved")&&t.uint32(130).bytes(e.reserved),
null!=e.safeShop&&e.hasOwnProperty("safeShop")&&t.uint32(136).int64(e.safeShop),
null!=e.client&&e.hasOwnProperty("client")&&mn.com.avast.cloud.webrep.proto.Client.encode(e.client,t.uint32(146).fork()).ldelim(),
null!=e.originHash&&e.hasOwnProperty("originHash")&&t.uint32(152).int32(e.originHash),
null!=e.lastOrigin&&e.hasOwnProperty("lastOrigin")&&mn.com.avast.cloud.webrep.proto.Origin.encode(e.lastOrigin,t.uint32(162).fork()).ldelim(),
null!=e.clientTimestamp&&e.hasOwnProperty("clientTimestamp")&&t.uint32(168).int64(e.clientTimestamp),
null!=e.refererDetails&&e.hasOwnProperty("refererDetails")&&mn.com.avast.cloud.webrep.proto.RefererDetails.encode(e.refererDetails,t.uint32(178).fork()).ldelim(),
null!=e.initiating_user_action&&e.hasOwnProperty("initiating_user_action")&&t.uint32(184).int32(e.initiating_user_action),
null!=e.served_from_cache&&e.hasOwnProperty("served_from_cache")&&t.uint32(192).bool(e.served_from_cache),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.UrlInfoRequest
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.uri&&a.uri.length||(a.uri=[]),a.uri.push(e.string())
break
case 2:
a.callerId=e.sint64()
break
case 3:
a.locale=e.string()
break
case 4:
a.apikey=e.bytes()
break
case 5:
a.identity=mn.com.avast.cloud.webrep.proto.Identity.decode(e,e.uint32())
break
case 6:
a.visited=e.bool()
break
case 7:
a.updateRequest=mn.com.avast.cloud.webrep.proto.UpdateRequest.decode(e,e.uint32())
break
case 8:
a.requestedServices=e.sint32()
break
case 9:
a.customKeyValue&&a.customKeyValue.length||(a.customKeyValue=[]),a.customKeyValue.push(mn.com.avast.cloud.webrep.proto.KeyValue.decode(e,e.uint32()))
break
case 10:
a.referer=e.string()
break
case 11:
a.windowNum=e.sint32()
break
case 12:
a.tabNum=e.sint32()
break
case 13:
a.windowEvent=e.int32()
break
case 14:
a.origin=e.int32()
break
case 15:
a.dnl=e.bool()
break
case 16:
a.reserved=e.bytes()
break
case 17:
a.safeShop=e.int64()
break
case 18:
a.client=mn.com.avast.cloud.webrep.proto.Client.decode(e,e.uint32())
break
case 19:
a.originHash=e.int32()
break
case 20:
a.lastOrigin=mn.com.avast.cloud.webrep.proto.Origin.decode(e,e.uint32())
break
case 21:
a.clientTimestamp=e.int64()
break
case 22:
a.refererDetails=mn.com.avast.cloud.webrep.proto.RefererDetails.decode(e,e.uint32())
break
case 23:
a.initiating_user_action=e.int32()
break
case 24:
a.served_from_cache=e.bool()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.uri&&e.hasOwnProperty("uri")){
if(!Array.isArray(e.uri)){
return"uri: array expected"
}
for(let t=0;t<e.uri.length;++t){
if(!gn.isString(e.uri[t])){
return"uri: string[] expected"
}
}
}
if(null!=e.callerId&&e.hasOwnProperty("callerId")&&!(gn.isInteger(e.callerId)||e.callerId&&gn.isInteger(e.callerId.low)&&gn.isInteger(e.callerId.high))){
return"callerId: integer|Long expected"
}
if(null!=e.locale&&e.hasOwnProperty("locale")&&!gn.isString(e.locale)){
return"locale: string expected"
}
if(null!=e.apikey&&e.hasOwnProperty("apikey")&&!(e.apikey&&"number"==typeof e.apikey.length||gn.isString(e.apikey))){
return"apikey: buffer expected"
}
if(null!=e.identity&&e.hasOwnProperty("identity")){
let t=mn.com.avast.cloud.webrep.proto.Identity.verify(e.identity)
if(t){
return"identity."+t
}
}
if(null!=e.visited&&e.hasOwnProperty("visited")&&"boolean"!=typeof e.visited){
return"visited: boolean expected"
}
if(null!=e.updateRequest&&e.hasOwnProperty("updateRequest")){
let t=mn.com.avast.cloud.webrep.proto.UpdateRequest.verify(e.updateRequest)
if(t){
return"updateRequest."+t
}
}
if(null!=e.requestedServices&&e.hasOwnProperty("requestedServices")&&!gn.isInteger(e.requestedServices)){
return"requestedServices: integer expected"
}
if(null!=e.customKeyValue&&e.hasOwnProperty("customKeyValue")){
if(!Array.isArray(e.customKeyValue)){
return"customKeyValue: array expected"
}
for(let t=0;t<e.customKeyValue.length;++t){
let i=mn.com.avast.cloud.webrep.proto.KeyValue.verify(e.customKeyValue[t])
if(i){
return"customKeyValue."+i
}
}
}
if(null!=e.referer&&e.hasOwnProperty("referer")&&!gn.isString(e.referer)){
return"referer: string expected"
}
if(null!=e.windowNum&&e.hasOwnProperty("windowNum")&&!gn.isInteger(e.windowNum)){
return"windowNum: integer expected"
}
if(null!=e.tabNum&&e.hasOwnProperty("tabNum")&&!gn.isInteger(e.tabNum)){
return"tabNum: integer expected"
}
if(null!=e.windowEvent&&e.hasOwnProperty("windowEvent")){
switch(e.windowEvent){
default:
return"windowEvent: enum value expected"
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
}
}
if(null!=e.origin&&e.hasOwnProperty("origin")){
switch(e.origin){
default:
return"origin: enum value expected"
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
case 12:
case 13:
case 14:
case 15:
case 16:
case 9999:
}
}
if(null!=e.dnl&&e.hasOwnProperty("dnl")&&"boolean"!=typeof e.dnl){
return"dnl: boolean expected"
}
if(null!=e.reserved&&e.hasOwnProperty("reserved")&&!(e.reserved&&"number"==typeof e.reserved.length||gn.isString(e.reserved))){
return"reserved: buffer expected"
}
if(null!=e.safeShop&&e.hasOwnProperty("safeShop")&&!(gn.isInteger(e.safeShop)||e.safeShop&&gn.isInteger(e.safeShop.low)&&gn.isInteger(e.safeShop.high))){
return"safeShop: integer|Long expected"
}
if(null!=e.client&&e.hasOwnProperty("client")){
let t=mn.com.avast.cloud.webrep.proto.Client.verify(e.client)
if(t){
return"client."+t
}
}
if(null!=e.originHash&&e.hasOwnProperty("originHash")&&!gn.isInteger(e.originHash)){
return"originHash: integer expected"
}
if(null!=e.lastOrigin&&e.hasOwnProperty("lastOrigin")){
let t=mn.com.avast.cloud.webrep.proto.Origin.verify(e.lastOrigin)
if(t){
return"lastOrigin."+t
}
}
if(null!=e.clientTimestamp&&e.hasOwnProperty("clientTimestamp")&&!(gn.isInteger(e.clientTimestamp)||e.clientTimestamp&&gn.isInteger(e.clientTimestamp.low)&&gn.isInteger(e.clientTimestamp.high))){
return"clientTimestamp: integer|Long expected"
}
if(null!=e.refererDetails&&e.hasOwnProperty("refererDetails")){
let t=mn.com.avast.cloud.webrep.proto.RefererDetails.verify(e.refererDetails)
if(t){
return"refererDetails."+t
}
}
if(null!=e.initiating_user_action&&e.hasOwnProperty("initiating_user_action")){
switch(e.initiating_user_action){
default:
return"initiating_user_action: enum value expected"
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
case 12:
case 13:
case 14:
case 15:
case 16:
case 9999:
}
}
return null!=e.served_from_cache&&e.hasOwnProperty("served_from_cache")&&"boolean"!=typeof e.served_from_cache?"served_from_cache: boolean expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.UrlInfoRequest){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.UrlInfoRequest
if(e.uri){
if(!Array.isArray(e.uri)){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoRequest.uri: array expected")
}
t.uri=[]
for(let i=0;i<e.uri.length;++i){
t.uri[i]=String(e.uri[i])
}
}
if(null!=e.callerId&&(gn.Long?(t.callerId=gn.Long.fromValue(e.callerId)).unsigned=!1:"string"==typeof e.callerId?t.callerId=parseInt(e.callerId,10):"number"==typeof e.callerId?t.callerId=e.callerId:"object"==typeof e.callerId&&(t.callerId=new gn.LongBits(e.callerId.low>>>0,e.callerId.high>>>0).toNumber())),
null!=e.locale&&(t.locale=String(e.locale)),
null!=e.apikey&&("string"==typeof e.apikey?gn.base64.decode(e.apikey,t.apikey=gn.newBuffer(gn.base64.length(e.apikey)),0):e.apikey.length&&(t.apikey=e.apikey)),
null!=e.identity){
if("object"!=typeof e.identity){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoRequest.identity: object expected")
}
t.identity=mn.com.avast.cloud.webrep.proto.Identity.fromObject(e.identity)
}
if(null!=e.visited&&(t.visited=Boolean(e.visited)),null!=e.updateRequest){
if("object"!=typeof e.updateRequest){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoRequest.updateRequest: object expected")
}
t.updateRequest=mn.com.avast.cloud.webrep.proto.UpdateRequest.fromObject(e.updateRequest)
}
if(null!=e.requestedServices&&(t.requestedServices=0|e.requestedServices),e.customKeyValue){
if(!Array.isArray(e.customKeyValue)){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoRequest.customKeyValue: array expected")
}
t.customKeyValue=[]
for(let i=0;i<e.customKeyValue.length;++i){
if("object"!=typeof e.customKeyValue[i]){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoRequest.customKeyValue: object expected")
}
t.customKeyValue[i]=mn.com.avast.cloud.webrep.proto.KeyValue.fromObject(e.customKeyValue[i])
}
}
switch(null!=e.referer&&(t.referer=String(e.referer)),null!=e.windowNum&&(t.windowNum=0|e.windowNum),
null!=e.tabNum&&(t.tabNum=0|e.tabNum),
e.windowEvent){
case"CLICK":
case 0:
t.windowEvent=0
break
case"FRESHOPEN":
case 1:
t.windowEvent=1
break
case"REOPEN":
case 2:
t.windowEvent=2
break
case"TABFOCUS":
case 3:
t.windowEvent=3
break
case"SERVER_REDIRECT":
case 4:
t.windowEvent=4
break
case"AJAX":
case 5:
t.windowEvent=5
break
case"TABCLOSE":
case 6:
t.windowEvent=6
break
case"WINDOWCLOSE":
case 7:
t.windowEvent=7
break
case"SERP":
case 8:
t.windowEvent=8
break
case"WEBSHIELD":
case 9:
t.windowEvent=9
}
switch(e.origin){
case"LINK":
case 0:
t.origin=0
break
case"ADDRESSBAR":
case 1:
t.origin=1
break
case"BOOKMARK":
case 2:
t.origin=2
break
case"SEARCHWINDOW":
case 3:
t.origin=3
break
case"JAVASCRIPT":
case 4:
t.origin=4
break
case"REDIRECT":
case 5:
t.origin=5
break
case"HOMEPAGE":
case 6:
t.origin=6
break
case"RELOAD":
case 7:
t.origin=7
break
case"STEPBACK":
case 8:
t.origin=8
break
case"SMS_KNOW_CONTACT":
case 9:
t.origin=9
break
case"SMS_UNKNOWN_CONTACT":
case 10:
t.origin=10
break
case"SMS_UNDEFINED_CONTACT":
case 11:
t.origin=11
break
case"FORM":
case 12:
t.origin=12
break
case"APPLICATION":
case 13:
t.origin=13
break
case"SESSION_RESTORE":
case 14:
t.origin=14
break
case"ANCHOR":
case 15:
t.origin=15
break
case"HISTORY_STATE":
case 16:
t.origin=16
break
case"OTHER":
case 9999:
t.origin=9999
}
if(null!=e.dnl&&(t.dnl=Boolean(e.dnl)),null!=e.reserved&&("string"==typeof e.reserved?gn.base64.decode(e.reserved,t.reserved=gn.newBuffer(gn.base64.length(e.reserved)),0):e.reserved.length&&(t.reserved=e.reserved)),
null!=e.safeShop&&(gn.Long?(t.safeShop=gn.Long.fromValue(e.safeShop)).unsigned=!1:"string"==typeof e.safeShop?t.safeShop=parseInt(e.safeShop,10):"number"==typeof e.safeShop?t.safeShop=e.safeShop:"object"==typeof e.safeShop&&(t.safeShop=new gn.LongBits(e.safeShop.low>>>0,e.safeShop.high>>>0).toNumber())),
null!=e.client){
if("object"!=typeof e.client){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoRequest.client: object expected")
}
t.client=mn.com.avast.cloud.webrep.proto.Client.fromObject(e.client)
}
if(null!=e.originHash&&(t.originHash=0|e.originHash),null!=e.lastOrigin){
if("object"!=typeof e.lastOrigin){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoRequest.lastOrigin: object expected")
}
t.lastOrigin=mn.com.avast.cloud.webrep.proto.Origin.fromObject(e.lastOrigin)
}
if(null!=e.clientTimestamp&&(gn.Long?(t.clientTimestamp=gn.Long.fromValue(e.clientTimestamp)).unsigned=!1:"string"==typeof e.clientTimestamp?t.clientTimestamp=parseInt(e.clientTimestamp,10):"number"==typeof e.clientTimestamp?t.clientTimestamp=e.clientTimestamp:"object"==typeof e.clientTimestamp&&(t.clientTimestamp=new gn.LongBits(e.clientTimestamp.low>>>0,e.clientTimestamp.high>>>0).toNumber())),
null!=e.refererDetails){
if("object"!=typeof e.refererDetails){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoRequest.refererDetails: object expected")
}
t.refererDetails=mn.com.avast.cloud.webrep.proto.RefererDetails.fromObject(e.refererDetails)
}
switch(e.initiating_user_action){
case"LINK":
case 0:
t.initiating_user_action=0
break
case"ADDRESSBAR":
case 1:
t.initiating_user_action=1
break
case"BOOKMARK":
case 2:
t.initiating_user_action=2
break
case"SEARCHWINDOW":
case 3:
t.initiating_user_action=3
break
case"JAVASCRIPT":
case 4:
t.initiating_user_action=4
break
case"REDIRECT":
case 5:
t.initiating_user_action=5
break
case"HOMEPAGE":
case 6:
t.initiating_user_action=6
break
case"RELOAD":
case 7:
t.initiating_user_action=7
break
case"STEPBACK":
case 8:
t.initiating_user_action=8
break
case"SMS_KNOW_CONTACT":
case 9:
t.initiating_user_action=9
break
case"SMS_UNKNOWN_CONTACT":
case 10:
t.initiating_user_action=10
break
case"SMS_UNDEFINED_CONTACT":
case 11:
t.initiating_user_action=11
break
case"FORM":
case 12:
t.initiating_user_action=12
break
case"APPLICATION":
case 13:
t.initiating_user_action=13
break
case"SESSION_RESTORE":
case 14:
t.initiating_user_action=14
break
case"ANCHOR":
case 15:
t.initiating_user_action=15
break
case"HISTORY_STATE":
case 16:
t.initiating_user_action=16
break
case"OTHER":
case 9999:
t.initiating_user_action=9999
}
return null!=e.served_from_cache&&(t.served_from_cache=Boolean(e.served_from_cache)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
if((t.arrays||t.defaults)&&(i.uri=[],i.customKeyValue=[]),t.defaults){
if(gn.Long){
let e=new gn.Long(0,0,!1)
i.callerId=t.longs===String?e.toString():t.longs===Number?e.toNumber():e
}else{
i.callerId=t.longs===String?"0":0
}
if(i.locale="",t.bytes===String?i.apikey="":(i.apikey=[],t.bytes!==Array&&(i.apikey=gn.newBuffer(i.apikey))),
i.identity=null,
i.visited=!1,i.updateRequest=null,i.requestedServices=0,i.referer="",
i.windowNum=0,
i.tabNum=0,i.windowEvent=t.enums===String?"CLICK":0,i.origin=t.enums===String?"LINK":0,
i.dnl=!1,
t.bytes===String?i.reserved="":(i.reserved=[],t.bytes!==Array&&(i.reserved=gn.newBuffer(i.reserved))),
gn.Long){
let e=new gn.Long(0,0,!1)
i.safeShop=t.longs===String?e.toString():t.longs===Number?e.toNumber():e
}else{
i.safeShop=t.longs===String?"0":0
}
if(i.client=null,i.originHash=0,i.lastOrigin=null,gn.Long){
let e=new gn.Long(0,0,!1)
i.clientTimestamp=t.longs===String?e.toString():t.longs===Number?e.toNumber():e
}else{
i.clientTimestamp=t.longs===String?"0":0
}
i.refererDetails=null,i.initiating_user_action=t.enums===String?"LINK":0,i.served_from_cache=!1
}
if(e.uri&&e.uri.length){
i.uri=[]
for(let t=0;t<e.uri.length;++t){
i.uri[t]=e.uri[t]
}
}
if(null!=e.callerId&&e.hasOwnProperty("callerId")&&("number"==typeof e.callerId?i.callerId=t.longs===String?String(e.callerId):e.callerId:i.callerId=t.longs===String?gn.Long.prototype.toString.call(e.callerId):t.longs===Number?new gn.LongBits(e.callerId.low>>>0,e.callerId.high>>>0).toNumber():e.callerId),
null!=e.locale&&e.hasOwnProperty("locale")&&(i.locale=e.locale),
null!=e.apikey&&e.hasOwnProperty("apikey")&&(i.apikey=t.bytes===String?gn.base64.encode(e.apikey,0,e.apikey.length):t.bytes===Array?Array.prototype.slice.call(e.apikey):e.apikey),
null!=e.identity&&e.hasOwnProperty("identity")&&(i.identity=mn.com.avast.cloud.webrep.proto.Identity.toObject(e.identity,t)),
null!=e.visited&&e.hasOwnProperty("visited")&&(i.visited=e.visited),
null!=e.updateRequest&&e.hasOwnProperty("updateRequest")&&(i.updateRequest=mn.com.avast.cloud.webrep.proto.UpdateRequest.toObject(e.updateRequest,t)),
null!=e.requestedServices&&e.hasOwnProperty("requestedServices")&&(i.requestedServices=e.requestedServices),
e.customKeyValue&&e.customKeyValue.length){
i.customKeyValue=[]
for(let a=0;a<e.customKeyValue.length;++a){
i.customKeyValue[a]=mn.com.avast.cloud.webrep.proto.KeyValue.toObject(e.customKeyValue[a],t)
}
}
return null!=e.referer&&e.hasOwnProperty("referer")&&(i.referer=e.referer),null!=e.windowNum&&e.hasOwnProperty("windowNum")&&(i.windowNum=e.windowNum),
null!=e.tabNum&&e.hasOwnProperty("tabNum")&&(i.tabNum=e.tabNum),
null!=e.windowEvent&&e.hasOwnProperty("windowEvent")&&(i.windowEvent=t.enums===String?mn.com.avast.cloud.webrep.proto.EventType[e.windowEvent]:e.windowEvent),
null!=e.origin&&e.hasOwnProperty("origin")&&(i.origin=t.enums===String?mn.com.avast.cloud.webrep.proto.OriginType[e.origin]:e.origin),
null!=e.dnl&&e.hasOwnProperty("dnl")&&(i.dnl=e.dnl),
null!=e.reserved&&e.hasOwnProperty("reserved")&&(i.reserved=t.bytes===String?gn.base64.encode(e.reserved,0,e.reserved.length):t.bytes===Array?Array.prototype.slice.call(e.reserved):e.reserved),
null!=e.safeShop&&e.hasOwnProperty("safeShop")&&("number"==typeof e.safeShop?i.safeShop=t.longs===String?String(e.safeShop):e.safeShop:i.safeShop=t.longs===String?gn.Long.prototype.toString.call(e.safeShop):t.longs===Number?new gn.LongBits(e.safeShop.low>>>0,e.safeShop.high>>>0).toNumber():e.safeShop),
null!=e.client&&e.hasOwnProperty("client")&&(i.client=mn.com.avast.cloud.webrep.proto.Client.toObject(e.client,t)),
null!=e.originHash&&e.hasOwnProperty("originHash")&&(i.originHash=e.originHash),
null!=e.lastOrigin&&e.hasOwnProperty("lastOrigin")&&(i.lastOrigin=mn.com.avast.cloud.webrep.proto.Origin.toObject(e.lastOrigin,t)),
null!=e.clientTimestamp&&e.hasOwnProperty("clientTimestamp")&&("number"==typeof e.clientTimestamp?i.clientTimestamp=t.longs===String?String(e.clientTimestamp):e.clientTimestamp:i.clientTimestamp=t.longs===String?gn.Long.prototype.toString.call(e.clientTimestamp):t.longs===Number?new gn.LongBits(e.clientTimestamp.low>>>0,e.clientTimestamp.high>>>0).toNumber():e.clientTimestamp),
null!=e.refererDetails&&e.hasOwnProperty("refererDetails")&&(i.refererDetails=mn.com.avast.cloud.webrep.proto.RefererDetails.toObject(e.refererDetails,t)),
null!=e.initiating_user_action&&e.hasOwnProperty("initiating_user_action")&&(i.initiating_user_action=t.enums===String?mn.com.avast.cloud.webrep.proto.OriginType[e.initiating_user_action]:e.initiating_user_action),
null!=e.served_from_cache&&e.hasOwnProperty("served_from_cache")&&(i.served_from_cache=e.served_from_cache),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.UrlInfo=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.webrep=null,e.prototype.phishing=null,e.prototype.blocker=null,
e.prototype.typo=null,
e.prototype.safeshop=null,e.prototype.categories=null,e.prototype.ajax=null,
e.prototype.iot_botnet=null,
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.webrep&&e.hasOwnProperty("webrep")&&mn.com.avast.cloud.webrep.proto.Webrep.encode(e.webrep,t.uint32(10).fork()).ldelim(),
null!=e.phishing&&e.hasOwnProperty("phishing")&&mn.com.avast.cloud.webrep.proto.Phishing.encode(e.phishing,t.uint32(18).fork()).ldelim(),
null!=e.blocker&&e.hasOwnProperty("blocker")&&mn.com.avast.cloud.webrep.proto.Blocker.encode(e.blocker,t.uint32(26).fork()).ldelim(),
null!=e.typo&&e.hasOwnProperty("typo")&&mn.com.avast.cloud.webrep.proto.Typo.encode(e.typo,t.uint32(34).fork()).ldelim(),
null!=e.safeshop&&e.hasOwnProperty("safeshop")&&mn.com.avast.cloud.webrep.proto.SafeShop.encode(e.safeshop,t.uint32(42).fork()).ldelim(),
null!=e.categories&&e.hasOwnProperty("categories")&&mn.com.avast.cloud.webrep.proto.Categories.encode(e.categories,t.uint32(50).fork()).ldelim(),
null!=e.ajax&&e.hasOwnProperty("ajax")&&mn.com.avast.cloud.webrep.proto.Ajax.encode(e.ajax,t.uint32(58).fork()).ldelim(),
null!=e.iot_botnet&&e.hasOwnProperty("iot_botnet")&&mn.com.avast.cloud.webrep.proto.IotBotnet.encode(e.iot_botnet,t.uint32(66).fork()).ldelim(),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.UrlInfo
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.webrep=mn.com.avast.cloud.webrep.proto.Webrep.decode(e,e.uint32())
break
case 2:
a.phishing=mn.com.avast.cloud.webrep.proto.Phishing.decode(e,e.uint32())
break
case 3:
a.blocker=mn.com.avast.cloud.webrep.proto.Blocker.decode(e,e.uint32())
break
case 4:
a.typo=mn.com.avast.cloud.webrep.proto.Typo.decode(e,e.uint32())
break
case 5:
a.safeshop=mn.com.avast.cloud.webrep.proto.SafeShop.decode(e,e.uint32())
break
case 6:
a.categories=mn.com.avast.cloud.webrep.proto.Categories.decode(e,e.uint32())
break
case 7:
a.ajax=mn.com.avast.cloud.webrep.proto.Ajax.decode(e,e.uint32())
break
case 8:
a.iot_botnet=mn.com.avast.cloud.webrep.proto.IotBotnet.decode(e,e.uint32())
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.webrep&&e.hasOwnProperty("webrep")){
let t=mn.com.avast.cloud.webrep.proto.Webrep.verify(e.webrep)
if(t){
return"webrep."+t
}
}
if(null!=e.phishing&&e.hasOwnProperty("phishing")){
let t=mn.com.avast.cloud.webrep.proto.Phishing.verify(e.phishing)
if(t){
return"phishing."+t
}
}
if(null!=e.blocker&&e.hasOwnProperty("blocker")){
let t=mn.com.avast.cloud.webrep.proto.Blocker.verify(e.blocker)
if(t){
return"blocker."+t
}
}
if(null!=e.typo&&e.hasOwnProperty("typo")){
let t=mn.com.avast.cloud.webrep.proto.Typo.verify(e.typo)
if(t){
return"typo."+t
}
}
if(null!=e.safeshop&&e.hasOwnProperty("safeshop")){
let t=mn.com.avast.cloud.webrep.proto.SafeShop.verify(e.safeshop)
if(t){
return"safeshop."+t
}
}
if(null!=e.categories&&e.hasOwnProperty("categories")){
let t=mn.com.avast.cloud.webrep.proto.Categories.verify(e.categories)
if(t){
return"categories."+t
}
}
if(null!=e.ajax&&e.hasOwnProperty("ajax")){
let t=mn.com.avast.cloud.webrep.proto.Ajax.verify(e.ajax)
if(t){
return"ajax."+t
}
}
if(null!=e.iot_botnet&&e.hasOwnProperty("iot_botnet")){
let t=mn.com.avast.cloud.webrep.proto.IotBotnet.verify(e.iot_botnet)
if(t){
return"iot_botnet."+t
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.UrlInfo){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.UrlInfo
if(null!=e.webrep){
if("object"!=typeof e.webrep){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfo.webrep: object expected")
}
t.webrep=mn.com.avast.cloud.webrep.proto.Webrep.fromObject(e.webrep)
}
if(null!=e.phishing){
if("object"!=typeof e.phishing){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfo.phishing: object expected")
}
t.phishing=mn.com.avast.cloud.webrep.proto.Phishing.fromObject(e.phishing)
}
if(null!=e.blocker){
if("object"!=typeof e.blocker){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfo.blocker: object expected")
}
t.blocker=mn.com.avast.cloud.webrep.proto.Blocker.fromObject(e.blocker)
}
if(null!=e.typo){
if("object"!=typeof e.typo){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfo.typo: object expected")
}
t.typo=mn.com.avast.cloud.webrep.proto.Typo.fromObject(e.typo)
}
if(null!=e.safeshop){
if("object"!=typeof e.safeshop){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfo.safeshop: object expected")
}
t.safeshop=mn.com.avast.cloud.webrep.proto.SafeShop.fromObject(e.safeshop)
}
if(null!=e.categories){
if("object"!=typeof e.categories){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfo.categories: object expected")
}
t.categories=mn.com.avast.cloud.webrep.proto.Categories.fromObject(e.categories)
}
if(null!=e.ajax){
if("object"!=typeof e.ajax){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfo.ajax: object expected")
}
t.ajax=mn.com.avast.cloud.webrep.proto.Ajax.fromObject(e.ajax)
}
if(null!=e.iot_botnet){
if("object"!=typeof e.iot_botnet){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfo.iot_botnet: object expected")
}
t.iot_botnet=mn.com.avast.cloud.webrep.proto.IotBotnet.fromObject(e.iot_botnet)
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.webrep=null,i.phishing=null,i.blocker=null,i.typo=null,i.safeshop=null,
i.categories=null,
i.ajax=null,i.iot_botnet=null),null!=e.webrep&&e.hasOwnProperty("webrep")&&(i.webrep=mn.com.avast.cloud.webrep.proto.Webrep.toObject(e.webrep,t)),
null!=e.phishing&&e.hasOwnProperty("phishing")&&(i.phishing=mn.com.avast.cloud.webrep.proto.Phishing.toObject(e.phishing,t)),
null!=e.blocker&&e.hasOwnProperty("blocker")&&(i.blocker=mn.com.avast.cloud.webrep.proto.Blocker.toObject(e.blocker,t)),
null!=e.typo&&e.hasOwnProperty("typo")&&(i.typo=mn.com.avast.cloud.webrep.proto.Typo.toObject(e.typo,t)),
null!=e.safeshop&&e.hasOwnProperty("safeshop")&&(i.safeshop=mn.com.avast.cloud.webrep.proto.SafeShop.toObject(e.safeshop,t)),
null!=e.categories&&e.hasOwnProperty("categories")&&(i.categories=mn.com.avast.cloud.webrep.proto.Categories.toObject(e.categories,t)),
null!=e.ajax&&e.hasOwnProperty("ajax")&&(i.ajax=mn.com.avast.cloud.webrep.proto.Ajax.toObject(e.ajax,t)),
null!=e.iot_botnet&&e.hasOwnProperty("iot_botnet")&&(i.iot_botnet=mn.com.avast.cloud.webrep.proto.IotBotnet.toObject(e.iot_botnet,t)),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.UrlInfoResponse=function(){
function e(e){
if(this.urlInfo=[],e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.urlInfo=gn.emptyArray,e.prototype.updateResponse=null,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
if(t||(t=dn.create()),null!=e.urlInfo&&e.urlInfo.length){
for(let i=0;i<e.urlInfo.length;++i){
mn.com.avast.cloud.webrep.proto.UrlInfo.encode(e.urlInfo[i],t.uint32(10).fork()).ldelim()
}
}
return null!=e.updateResponse&&e.hasOwnProperty("updateResponse")&&mn.com.avast.cloud.webrep.proto.UpdateResponse.encode(e.updateResponse,t.uint32(18).fork()).ldelim(),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.UrlInfoResponse
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.urlInfo&&a.urlInfo.length||(a.urlInfo=[]),a.urlInfo.push(mn.com.avast.cloud.webrep.proto.UrlInfo.decode(e,e.uint32()))
break
case 2:
a.updateResponse=mn.com.avast.cloud.webrep.proto.UpdateResponse.decode(e,e.uint32())
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.urlInfo&&e.hasOwnProperty("urlInfo")){
if(!Array.isArray(e.urlInfo)){
return"urlInfo: array expected"
}
for(let t=0;t<e.urlInfo.length;++t){
let i=mn.com.avast.cloud.webrep.proto.UrlInfo.verify(e.urlInfo[t])
if(i){
return"urlInfo."+i
}
}
}
if(null!=e.updateResponse&&e.hasOwnProperty("updateResponse")){
let t=mn.com.avast.cloud.webrep.proto.UpdateResponse.verify(e.updateResponse)
if(t){
return"updateResponse."+t
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.UrlInfoResponse){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.UrlInfoResponse
if(e.urlInfo){
if(!Array.isArray(e.urlInfo)){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoResponse.urlInfo: array expected")
}
t.urlInfo=[]
for(let i=0;i<e.urlInfo.length;++i){
if("object"!=typeof e.urlInfo[i]){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoResponse.urlInfo: object expected")
}
t.urlInfo[i]=mn.com.avast.cloud.webrep.proto.UrlInfo.fromObject(e.urlInfo[i])
}
}
if(null!=e.updateResponse){
if("object"!=typeof e.updateResponse){
throw TypeError(".com.avast.cloud.webrep.proto.UrlInfoResponse.updateResponse: object expected")
}
t.updateResponse=mn.com.avast.cloud.webrep.proto.UpdateResponse.fromObject(e.updateResponse)
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
if((t.arrays||t.defaults)&&(i.urlInfo=[]),t.defaults&&(i.updateResponse=null),e.urlInfo&&e.urlInfo.length){
i.urlInfo=[]
for(let a=0;a<e.urlInfo.length;++a){
i.urlInfo[a]=mn.com.avast.cloud.webrep.proto.UrlInfo.toObject(e.urlInfo[a],t)
}
}
return null!=e.updateResponse&&e.hasOwnProperty("updateResponse")&&(i.updateResponse=mn.com.avast.cloud.webrep.proto.UpdateResponse.toObject(e.updateResponse,t)),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.Webrep=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.rating=0,e.prototype.weight=0,e.prototype.ttl=0,e.prototype.flags=gn.Long?gn.Long.fromBits(0,0,!1):0,
e.prototype.rating_level=1,
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.rating&&e.hasOwnProperty("rating")&&t.uint32(8).sint32(e.rating),
null!=e.weight&&e.hasOwnProperty("weight")&&t.uint32(16).sint32(e.weight),
null!=e.ttl&&e.hasOwnProperty("ttl")&&t.uint32(24).sint32(e.ttl),
null!=e.flags&&e.hasOwnProperty("flags")&&t.uint32(32).int64(e.flags),
null!=e.rating_level&&e.hasOwnProperty("rating_level")&&t.uint32(40).int32(e.rating_level),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Webrep
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.rating=e.sint32()
break
case 2:
a.weight=e.sint32()
break
case 3:
a.ttl=e.sint32()
break
case 4:
a.flags=e.int64()
break
case 5:
a.rating_level=e.int32()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.rating&&e.hasOwnProperty("rating")&&!gn.isInteger(e.rating)){
return"rating: integer expected"
}
if(null!=e.weight&&e.hasOwnProperty("weight")&&!gn.isInteger(e.weight)){
return"weight: integer expected"
}
if(null!=e.ttl&&e.hasOwnProperty("ttl")&&!gn.isInteger(e.ttl)){
return"ttl: integer expected"
}
if(null!=e.flags&&e.hasOwnProperty("flags")&&!(gn.isInteger(e.flags)||e.flags&&gn.isInteger(e.flags.low)&&gn.isInteger(e.flags.high))){
return"flags: integer|Long expected"
}
if(null!=e.rating_level&&e.hasOwnProperty("rating_level")){
switch(e.rating_level){
default:
return"rating_level: enum value expected"
case 1:
case 2:
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Webrep){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Webrep
switch(null!=e.rating&&(t.rating=0|e.rating),null!=e.weight&&(t.weight=0|e.weight),
null!=e.ttl&&(t.ttl=0|e.ttl),
null!=e.flags&&(gn.Long?(t.flags=gn.Long.fromValue(e.flags)).unsigned=!1:"string"==typeof e.flags?t.flags=parseInt(e.flags,10):"number"==typeof e.flags?t.flags=e.flags:"object"==typeof e.flags&&(t.flags=new gn.LongBits(e.flags.low>>>0,e.flags.high>>>0).toNumber())),
e.rating_level){
case"GOOD":
case 1:
t.rating_level=1
break
case"AVERAGE":
case 2:
t.rating_level=2
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
if(t.defaults){
if(i.rating=0,i.weight=0,i.ttl=0,gn.Long){
let e=new gn.Long(0,0,!1)
i.flags=t.longs===String?e.toString():t.longs===Number?e.toNumber():e
}else{
i.flags=t.longs===String?"0":0
}
i.rating_level=t.enums===String?"GOOD":1
}
return null!=e.rating&&e.hasOwnProperty("rating")&&(i.rating=e.rating),null!=e.weight&&e.hasOwnProperty("weight")&&(i.weight=e.weight),
null!=e.ttl&&e.hasOwnProperty("ttl")&&(i.ttl=e.ttl),
null!=e.flags&&e.hasOwnProperty("flags")&&("number"==typeof e.flags?i.flags=t.longs===String?String(e.flags):e.flags:i.flags=t.longs===String?gn.Long.prototype.toString.call(e.flags):t.longs===Number?new gn.LongBits(e.flags.low>>>0,e.flags.high>>>0).toNumber():e.flags),
null!=e.rating_level&&e.hasOwnProperty("rating_level")&&(i.rating_level=t.enums===String?mn.com.avast.cloud.webrep.proto.Webrep.RatingLevel[e.rating_level]:e.rating_level),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e.RatingLevel=function(){
const e={},t=Object.create(e)
return t[e[1]="GOOD"]=1,t[e[2]="AVERAGE"]=2,t
}(),e
}(),e.Phishing=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.phishing=0,e.prototype.phishingDomain=0,e.prototype.ttl=0,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.phishing&&e.hasOwnProperty("phishing")&&t.uint32(8).sint32(e.phishing),
null!=e.phishingDomain&&e.hasOwnProperty("phishingDomain")&&t.uint32(16).sint32(e.phishingDomain),
null!=e.ttl&&e.hasOwnProperty("ttl")&&t.uint32(24).sint32(e.ttl),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Phishing
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.phishing=e.sint32()
break
case 2:
a.phishingDomain=e.sint32()
break
case 3:
a.ttl=e.sint32()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.phishing&&e.hasOwnProperty("phishing")&&!gn.isInteger(e.phishing)?"phishing: integer expected":null!=e.phishingDomain&&e.hasOwnProperty("phishingDomain")&&!gn.isInteger(e.phishingDomain)?"phishingDomain: integer expected":null!=e.ttl&&e.hasOwnProperty("ttl")&&!gn.isInteger(e.ttl)?"ttl: integer expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Phishing){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Phishing
return null!=e.phishing&&(t.phishing=0|e.phishing),null!=e.phishingDomain&&(t.phishingDomain=0|e.phishingDomain),
null!=e.ttl&&(t.ttl=0|e.ttl),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.phishing=0,i.phishingDomain=0,i.ttl=0),null!=e.phishing&&e.hasOwnProperty("phishing")&&(i.phishing=e.phishing),
null!=e.phishingDomain&&e.hasOwnProperty("phishingDomain")&&(i.phishingDomain=e.phishingDomain),
null!=e.ttl&&e.hasOwnProperty("ttl")&&(i.ttl=e.ttl),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.Typo=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.url_to="",e.prototype.brand_domain="",e.prototype.urlInfo=null,
e.prototype.is_typo=!1,
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.url_to&&e.hasOwnProperty("url_to")&&t.uint32(10).string(e.url_to),
null!=e.brand_domain&&e.hasOwnProperty("brand_domain")&&t.uint32(18).string(e.brand_domain),
null!=e.urlInfo&&e.hasOwnProperty("urlInfo")&&mn.com.avast.cloud.webrep.proto.UrlInfo.encode(e.urlInfo,t.uint32(26).fork()).ldelim(),
null!=e.is_typo&&e.hasOwnProperty("is_typo")&&t.uint32(32).bool(e.is_typo),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Typo
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.url_to=e.string()
break
case 2:
a.brand_domain=e.string()
break
case 3:
a.urlInfo=mn.com.avast.cloud.webrep.proto.UrlInfo.decode(e,e.uint32())
break
case 4:
a.is_typo=e.bool()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.url_to&&e.hasOwnProperty("url_to")&&!gn.isString(e.url_to)){
return"url_to: string expected"
}
if(null!=e.brand_domain&&e.hasOwnProperty("brand_domain")&&!gn.isString(e.brand_domain)){
return"brand_domain: string expected"
}
if(null!=e.urlInfo&&e.hasOwnProperty("urlInfo")){
let t=mn.com.avast.cloud.webrep.proto.UrlInfo.verify(e.urlInfo)
if(t){
return"urlInfo."+t
}
}
return null!=e.is_typo&&e.hasOwnProperty("is_typo")&&"boolean"!=typeof e.is_typo?"is_typo: boolean expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Typo){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Typo
if(null!=e.url_to&&(t.url_to=String(e.url_to)),null!=e.brand_domain&&(t.brand_domain=String(e.brand_domain)),
null!=e.urlInfo){
if("object"!=typeof e.urlInfo){
throw TypeError(".com.avast.cloud.webrep.proto.Typo.urlInfo: object expected")
}
t.urlInfo=mn.com.avast.cloud.webrep.proto.UrlInfo.fromObject(e.urlInfo)
}
return null!=e.is_typo&&(t.is_typo=Boolean(e.is_typo)),t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.url_to="",i.brand_domain="",i.urlInfo=null,i.is_typo=!1),null!=e.url_to&&e.hasOwnProperty("url_to")&&(i.url_to=e.url_to),
null!=e.brand_domain&&e.hasOwnProperty("brand_domain")&&(i.brand_domain=e.brand_domain),
null!=e.urlInfo&&e.hasOwnProperty("urlInfo")&&(i.urlInfo=mn.com.avast.cloud.webrep.proto.UrlInfo.toObject(e.urlInfo,t)),
null!=e.is_typo&&e.hasOwnProperty("is_typo")&&(i.is_typo=e.is_typo),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.Blocker=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.block=gn.Long?gn.Long.fromBits(0,0,!1):0,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.block&&e.hasOwnProperty("block")&&t.uint32(8).sint64(e.block),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Blocker
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.block=e.sint64()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.block&&e.hasOwnProperty("block")&&!(gn.isInteger(e.block)||e.block&&gn.isInteger(e.block.low)&&gn.isInteger(e.block.high))?"block: integer|Long expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Blocker){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Blocker
return null!=e.block&&(gn.Long?(t.block=gn.Long.fromValue(e.block)).unsigned=!1:"string"==typeof e.block?t.block=parseInt(e.block,10):"number"==typeof e.block?t.block=e.block:"object"==typeof e.block&&(t.block=new gn.LongBits(e.block.low>>>0,e.block.high>>>0).toNumber())),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
if(t.defaults){
if(gn.Long){
let e=new gn.Long(0,0,!1)
i.block=t.longs===String?e.toString():t.longs===Number?e.toNumber():e
}else{
i.block=t.longs===String?"0":0
}
}
return null!=e.block&&e.hasOwnProperty("block")&&("number"==typeof e.block?i.block=t.longs===String?String(e.block):e.block:i.block=t.longs===String?gn.Long.prototype.toString.call(e.block):t.longs===Number?new gn.LongBits(e.block.low>>>0,e.block.high>>>0).toNumber():e.block),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.IotBotnet=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.block=gn.Long?gn.Long.fromBits(0,0,!1):0,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.block&&e.hasOwnProperty("block")&&t.uint32(8).sint64(e.block),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.IotBotnet
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.block=e.sint64()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.block&&e.hasOwnProperty("block")&&!(gn.isInteger(e.block)||e.block&&gn.isInteger(e.block.low)&&gn.isInteger(e.block.high))?"block: integer|Long expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.IotBotnet){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.IotBotnet
return null!=e.block&&(gn.Long?(t.block=gn.Long.fromValue(e.block)).unsigned=!1:"string"==typeof e.block?t.block=parseInt(e.block,10):"number"==typeof e.block?t.block=e.block:"object"==typeof e.block&&(t.block=new gn.LongBits(e.block.low>>>0,e.block.high>>>0).toNumber())),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
if(t.defaults){
if(gn.Long){
let e=new gn.Long(0,0,!1)
i.block=t.longs===String?e.toString():t.longs===Number?e.toNumber():e
}else{
i.block=t.longs===String?"0":0
}
}
return null!=e.block&&e.hasOwnProperty("block")&&("number"==typeof e.block?i.block=t.longs===String?String(e.block):e.block:i.block=t.longs===String?gn.Long.prototype.toString.call(e.block):t.longs===Number?new gn.LongBits(e.block.low>>>0,e.block.high>>>0).toNumber():e.block),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.SafeShop=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.timestamp=gn.Long?gn.Long.fromBits(0,0,!1):0,e.prototype.regex="",
e.prototype.selector="",
e.prototype.match=!1,e.prototype.is_fake=!1,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.timestamp&&e.hasOwnProperty("timestamp")&&t.uint32(8).int64(e.timestamp),
null!=e.regex&&e.hasOwnProperty("regex")&&t.uint32(18).string(e.regex),
null!=e.selector&&e.hasOwnProperty("selector")&&t.uint32(26).string(e.selector),
null!=e.match&&e.hasOwnProperty("match")&&t.uint32(32).bool(e.match),
null!=e.is_fake&&e.hasOwnProperty("is_fake")&&t.uint32(40).bool(e.is_fake),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.SafeShop
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.timestamp=e.int64()
break
case 2:
a.regex=e.string()
break
case 3:
a.selector=e.string()
break
case 4:
a.match=e.bool()
break
case 5:
a.is_fake=e.bool()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.timestamp&&e.hasOwnProperty("timestamp")&&!(gn.isInteger(e.timestamp)||e.timestamp&&gn.isInteger(e.timestamp.low)&&gn.isInteger(e.timestamp.high))?"timestamp: integer|Long expected":null!=e.regex&&e.hasOwnProperty("regex")&&!gn.isString(e.regex)?"regex: string expected":null!=e.selector&&e.hasOwnProperty("selector")&&!gn.isString(e.selector)?"selector: string expected":null!=e.match&&e.hasOwnProperty("match")&&"boolean"!=typeof e.match?"match: boolean expected":null!=e.is_fake&&e.hasOwnProperty("is_fake")&&"boolean"!=typeof e.is_fake?"is_fake: boolean expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.SafeShop){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.SafeShop
return null!=e.timestamp&&(gn.Long?(t.timestamp=gn.Long.fromValue(e.timestamp)).unsigned=!1:"string"==typeof e.timestamp?t.timestamp=parseInt(e.timestamp,10):"number"==typeof e.timestamp?t.timestamp=e.timestamp:"object"==typeof e.timestamp&&(t.timestamp=new gn.LongBits(e.timestamp.low>>>0,e.timestamp.high>>>0).toNumber())),
null!=e.regex&&(t.regex=String(e.regex)),
null!=e.selector&&(t.selector=String(e.selector)),
null!=e.match&&(t.match=Boolean(e.match)),
null!=e.is_fake&&(t.is_fake=Boolean(e.is_fake)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
if(t.defaults){
if(gn.Long){
let e=new gn.Long(0,0,!1)
i.timestamp=t.longs===String?e.toString():t.longs===Number?e.toNumber():e
}else{
i.timestamp=t.longs===String?"0":0
}
i.regex="",i.selector="",i.match=!1,i.is_fake=!1
}
return null!=e.timestamp&&e.hasOwnProperty("timestamp")&&("number"==typeof e.timestamp?i.timestamp=t.longs===String?String(e.timestamp):e.timestamp:i.timestamp=t.longs===String?gn.Long.prototype.toString.call(e.timestamp):t.longs===Number?new gn.LongBits(e.timestamp.low>>>0,e.timestamp.high>>>0).toNumber():e.timestamp),
null!=e.regex&&e.hasOwnProperty("regex")&&(i.regex=e.regex),
null!=e.selector&&e.hasOwnProperty("selector")&&(i.selector=e.selector),
null!=e.match&&e.hasOwnProperty("match")&&(i.match=e.match),
null!=e.is_fake&&e.hasOwnProperty("is_fake")&&(i.is_fake=e.is_fake),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.Identity=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.guid=gn.newBuffer([]),e.prototype.uuid=gn.newBuffer([]),e.prototype.token=gn.newBuffer([]),
e.prototype.auid=gn.newBuffer([]),
e.prototype.browserType=0,e.prototype.token_verified=0,
e.prototype.ip_address=gn.newBuffer([]),
e.prototype.userid=gn.newBuffer([]),e.prototype.product=gn.newBuffer([]),
e.prototype.version=gn.newBuffer([]),
e.prototype.hwid=gn.newBuffer([]),e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.guid&&e.hasOwnProperty("guid")&&t.uint32(10).bytes(e.guid),
null!=e.uuid&&e.hasOwnProperty("uuid")&&t.uint32(18).bytes(e.uuid),
null!=e.token&&e.hasOwnProperty("token")&&t.uint32(26).bytes(e.token),
null!=e.auid&&e.hasOwnProperty("auid")&&t.uint32(34).bytes(e.auid),
null!=e.browserType&&e.hasOwnProperty("browserType")&&t.uint32(40).int32(e.browserType),
null!=e.token_verified&&e.hasOwnProperty("token_verified")&&t.uint32(48).sint32(e.token_verified),
null!=e.ip_address&&e.hasOwnProperty("ip_address")&&t.uint32(58).bytes(e.ip_address),
null!=e.userid&&e.hasOwnProperty("userid")&&t.uint32(66).bytes(e.userid),
null!=e.product&&e.hasOwnProperty("product")&&t.uint32(74).bytes(e.product),
null!=e.version&&e.hasOwnProperty("version")&&t.uint32(82).bytes(e.version),
null!=e.hwid&&e.hasOwnProperty("hwid")&&t.uint32(90).bytes(e.hwid),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Identity
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.guid=e.bytes()
break
case 2:
a.uuid=e.bytes()
break
case 3:
a.token=e.bytes()
break
case 4:
a.auid=e.bytes()
break
case 5:
a.browserType=e.int32()
break
case 6:
a.token_verified=e.sint32()
break
case 7:
a.ip_address=e.bytes()
break
case 8:
a.userid=e.bytes()
break
case 9:
a.product=e.bytes()
break
case 10:
a.version=e.bytes()
break
case 11:
a.hwid=e.bytes()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.guid&&e.hasOwnProperty("guid")&&!(e.guid&&"number"==typeof e.guid.length||gn.isString(e.guid))){
return"guid: buffer expected"
}
if(null!=e.uuid&&e.hasOwnProperty("uuid")&&!(e.uuid&&"number"==typeof e.uuid.length||gn.isString(e.uuid))){
return"uuid: buffer expected"
}
if(null!=e.token&&e.hasOwnProperty("token")&&!(e.token&&"number"==typeof e.token.length||gn.isString(e.token))){
return"token: buffer expected"
}
if(null!=e.auid&&e.hasOwnProperty("auid")&&!(e.auid&&"number"==typeof e.auid.length||gn.isString(e.auid))){
return"auid: buffer expected"
}
if(null!=e.browserType&&e.hasOwnProperty("browserType")){
switch(e.browserType){
default:
return"browserType: enum value expected"
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
}
}
return null!=e.token_verified&&e.hasOwnProperty("token_verified")&&!gn.isInteger(e.token_verified)?"token_verified: integer expected":null!=e.ip_address&&e.hasOwnProperty("ip_address")&&!(e.ip_address&&"number"==typeof e.ip_address.length||gn.isString(e.ip_address))?"ip_address: buffer expected":null!=e.userid&&e.hasOwnProperty("userid")&&!(e.userid&&"number"==typeof e.userid.length||gn.isString(e.userid))?"userid: buffer expected":null!=e.product&&e.hasOwnProperty("product")&&!(e.product&&"number"==typeof e.product.length||gn.isString(e.product))?"product: buffer expected":null!=e.version&&e.hasOwnProperty("version")&&!(e.version&&"number"==typeof e.version.length||gn.isString(e.version))?"version: buffer expected":null!=e.hwid&&e.hasOwnProperty("hwid")&&!(e.hwid&&"number"==typeof e.hwid.length||gn.isString(e.hwid))?"hwid: buffer expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Identity){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Identity
switch(null!=e.guid&&("string"==typeof e.guid?gn.base64.decode(e.guid,t.guid=gn.newBuffer(gn.base64.length(e.guid)),0):e.guid.length&&(t.guid=e.guid)),
null!=e.uuid&&("string"==typeof e.uuid?gn.base64.decode(e.uuid,t.uuid=gn.newBuffer(gn.base64.length(e.uuid)),0):e.uuid.length&&(t.uuid=e.uuid)),
null!=e.token&&("string"==typeof e.token?gn.base64.decode(e.token,t.token=gn.newBuffer(gn.base64.length(e.token)),0):e.token.length&&(t.token=e.token)),
null!=e.auid&&("string"==typeof e.auid?gn.base64.decode(e.auid,t.auid=gn.newBuffer(gn.base64.length(e.auid)),0):e.auid.length&&(t.auid=e.auid)),
e.browserType){
case"CHROME":
case 0:
t.browserType=0
break
case"FIREFOX":
case 1:
t.browserType=1
break
case"IE":
case 2:
t.browserType=2
break
case"OPERA":
case 3:
t.browserType=3
break
case"SAFAR":
case 4:
t.browserType=4
break
case"PRODUCTS":
case 5:
t.browserType=5
break
case"VIDEO":
case 6:
t.browserType=6
}
return null!=e.token_verified&&(t.token_verified=0|e.token_verified),null!=e.ip_address&&("string"==typeof e.ip_address?gn.base64.decode(e.ip_address,t.ip_address=gn.newBuffer(gn.base64.length(e.ip_address)),0):e.ip_address.length&&(t.ip_address=e.ip_address)),
null!=e.userid&&("string"==typeof e.userid?gn.base64.decode(e.userid,t.userid=gn.newBuffer(gn.base64.length(e.userid)),0):e.userid.length&&(t.userid=e.userid)),
null!=e.product&&("string"==typeof e.product?gn.base64.decode(e.product,t.product=gn.newBuffer(gn.base64.length(e.product)),0):e.product.length&&(t.product=e.product)),
null!=e.version&&("string"==typeof e.version?gn.base64.decode(e.version,t.version=gn.newBuffer(gn.base64.length(e.version)),0):e.version.length&&(t.version=e.version)),
null!=e.hwid&&("string"==typeof e.hwid?gn.base64.decode(e.hwid,t.hwid=gn.newBuffer(gn.base64.length(e.hwid)),0):e.hwid.length&&(t.hwid=e.hwid)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(t.bytes===String?i.guid="":(i.guid=[],t.bytes!==Array&&(i.guid=gn.newBuffer(i.guid))),
t.bytes===String?i.uuid="":(i.uuid=[],
t.bytes!==Array&&(i.uuid=gn.newBuffer(i.uuid))),
t.bytes===String?i.token="":(i.token=[],
t.bytes!==Array&&(i.token=gn.newBuffer(i.token))),
t.bytes===String?i.auid="":(i.auid=[],
t.bytes!==Array&&(i.auid=gn.newBuffer(i.auid))),
i.browserType=t.enums===String?"CHROME":0,
i.token_verified=0,t.bytes===String?i.ip_address="":(i.ip_address=[],
t.bytes!==Array&&(i.ip_address=gn.newBuffer(i.ip_address))),
t.bytes===String?i.userid="":(i.userid=[],
t.bytes!==Array&&(i.userid=gn.newBuffer(i.userid))),
t.bytes===String?i.product="":(i.product=[],
t.bytes!==Array&&(i.product=gn.newBuffer(i.product))),
t.bytes===String?i.version="":(i.version=[],
t.bytes!==Array&&(i.version=gn.newBuffer(i.version))),
t.bytes===String?i.hwid="":(i.hwid=[],
t.bytes!==Array&&(i.hwid=gn.newBuffer(i.hwid)))),
null!=e.guid&&e.hasOwnProperty("guid")&&(i.guid=t.bytes===String?gn.base64.encode(e.guid,0,e.guid.length):t.bytes===Array?Array.prototype.slice.call(e.guid):e.guid),
null!=e.uuid&&e.hasOwnProperty("uuid")&&(i.uuid=t.bytes===String?gn.base64.encode(e.uuid,0,e.uuid.length):t.bytes===Array?Array.prototype.slice.call(e.uuid):e.uuid),
null!=e.token&&e.hasOwnProperty("token")&&(i.token=t.bytes===String?gn.base64.encode(e.token,0,e.token.length):t.bytes===Array?Array.prototype.slice.call(e.token):e.token),
null!=e.auid&&e.hasOwnProperty("auid")&&(i.auid=t.bytes===String?gn.base64.encode(e.auid,0,e.auid.length):t.bytes===Array?Array.prototype.slice.call(e.auid):e.auid),
null!=e.browserType&&e.hasOwnProperty("browserType")&&(i.browserType=t.enums===String?mn.com.avast.cloud.webrep.proto.Identity.BrowserType[e.browserType]:e.browserType),
null!=e.token_verified&&e.hasOwnProperty("token_verified")&&(i.token_verified=e.token_verified),
null!=e.ip_address&&e.hasOwnProperty("ip_address")&&(i.ip_address=t.bytes===String?gn.base64.encode(e.ip_address,0,e.ip_address.length):t.bytes===Array?Array.prototype.slice.call(e.ip_address):e.ip_address),
null!=e.userid&&e.hasOwnProperty("userid")&&(i.userid=t.bytes===String?gn.base64.encode(e.userid,0,e.userid.length):t.bytes===Array?Array.prototype.slice.call(e.userid):e.userid),
null!=e.product&&e.hasOwnProperty("product")&&(i.product=t.bytes===String?gn.base64.encode(e.product,0,e.product.length):t.bytes===Array?Array.prototype.slice.call(e.product):e.product),
null!=e.version&&e.hasOwnProperty("version")&&(i.version=t.bytes===String?gn.base64.encode(e.version,0,e.version.length):t.bytes===Array?Array.prototype.slice.call(e.version):e.version),
null!=e.hwid&&e.hasOwnProperty("hwid")&&(i.hwid=t.bytes===String?gn.base64.encode(e.hwid,0,e.hwid.length):t.bytes===Array?Array.prototype.slice.call(e.hwid):e.hwid),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e.BrowserType=function(){
const e={},t=Object.create(e)
return t[e[0]="CHROME"]=0,t[e[1]="FIREFOX"]=1,t[e[2]="IE"]=2,t[e[3]="OPERA"]=3,t[e[4]="SAFAR"]=4,
t[e[5]="PRODUCTS"]=5,
t[e[6]="VIDEO"]=6,t
}(),e
}(),e.KeyValue=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.key="",e.prototype.value="",e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.key&&e.hasOwnProperty("key")&&t.uint32(10).string(e.key),
null!=e.value&&e.hasOwnProperty("value")&&t.uint32(18).string(e.value),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.KeyValue
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.key=e.string()
break
case 2:
a.value=e.string()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.key&&e.hasOwnProperty("key")&&!gn.isString(e.key)?"key: string expected":null!=e.value&&e.hasOwnProperty("value")&&!gn.isString(e.value)?"value: string expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.KeyValue){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.KeyValue
return null!=e.key&&(t.key=String(e.key)),null!=e.value&&(t.value=String(e.value)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.key="",i.value=""),null!=e.key&&e.hasOwnProperty("key")&&(i.key=e.key),
null!=e.value&&e.hasOwnProperty("value")&&(i.value=e.value),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.Origin=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.origin=0,e.prototype.hash=0,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.origin&&e.hasOwnProperty("origin")&&t.uint32(8).int32(e.origin),
null!=e.hash&&e.hasOwnProperty("hash")&&t.uint32(16).int32(e.hash),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Origin
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.origin=e.int32()
break
case 2:
a.hash=e.int32()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.origin&&e.hasOwnProperty("origin")){
switch(e.origin){
default:
return"origin: enum value expected"
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
case 12:
case 13:
case 14:
case 15:
case 16:
case 9999:
}
}
return null!=e.hash&&e.hasOwnProperty("hash")&&!gn.isInteger(e.hash)?"hash: integer expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Origin){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Origin
switch(e.origin){
case"LINK":
case 0:
t.origin=0
break
case"ADDRESSBAR":
case 1:
t.origin=1
break
case"BOOKMARK":
case 2:
t.origin=2
break
case"SEARCHWINDOW":
case 3:
t.origin=3
break
case"JAVASCRIPT":
case 4:
t.origin=4
break
case"REDIRECT":
case 5:
t.origin=5
break
case"HOMEPAGE":
case 6:
t.origin=6
break
case"RELOAD":
case 7:
t.origin=7
break
case"STEPBACK":
case 8:
t.origin=8
break
case"SMS_KNOW_CONTACT":
case 9:
t.origin=9
break
case"SMS_UNKNOWN_CONTACT":
case 10:
t.origin=10
break
case"SMS_UNDEFINED_CONTACT":
case 11:
t.origin=11
break
case"FORM":
case 12:
t.origin=12
break
case"APPLICATION":
case 13:
t.origin=13
break
case"SESSION_RESTORE":
case 14:
t.origin=14
break
case"ANCHOR":
case 15:
t.origin=15
break
case"HISTORY_STATE":
case 16:
t.origin=16
break
case"OTHER":
case 9999:
t.origin=9999
}
return null!=e.hash&&(t.hash=0|e.hash),t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.origin=t.enums===String?"LINK":0,i.hash=0),null!=e.origin&&e.hasOwnProperty("origin")&&(i.origin=t.enums===String?mn.com.avast.cloud.webrep.proto.OriginType[e.origin]:e.origin),
null!=e.hash&&e.hasOwnProperty("hash")&&(i.hash=e.hash),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.OriginType=function(){
const e={},t=Object.create(e)
return t[e[0]="LINK"]=0,t[e[1]="ADDRESSBAR"]=1,t[e[2]="BOOKMARK"]=2,t[e[3]="SEARCHWINDOW"]=3,
t[e[4]="JAVASCRIPT"]=4,
t[e[5]="REDIRECT"]=5,t[e[6]="HOMEPAGE"]=6,t[e[7]="RELOAD"]=7,
t[e[8]="STEPBACK"]=8,
t[e[9]="SMS_KNOW_CONTACT"]=9,t[e[10]="SMS_UNKNOWN_CONTACT"]=10,
t[e[11]="SMS_UNDEFINED_CONTACT"]=11,
t[e[12]="FORM"]=12,t[e[13]="APPLICATION"]=13,
t[e[14]="SESSION_RESTORE"]=14,t[e[15]="ANCHOR"]=15,
t[e[16]="HISTORY_STATE"]=16,t[e[9999]="OTHER"]=9999,
t
}(),e.EventType=function(){
const e={},t=Object.create(e)
return t[e[0]="CLICK"]=0,t[e[1]="FRESHOPEN"]=1,t[e[2]="REOPEN"]=2,t[e[3]="TABFOCUS"]=3,
t[e[4]="SERVER_REDIRECT"]=4,
t[e[5]="AJAX"]=5,t[e[6]="TABCLOSE"]=6,t[e[7]="WINDOWCLOSE"]=7,
t[e[8]="SERP"]=8,t[e[9]="WEBSHIELD"]=9,
t
}(),e.Client=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.id=null,e.prototype.type=1,e.prototype.browserExtInfo=null,e.prototype.messageClientInfo=null,
e.prototype.browserCleanUpInfo=null,
e.prototype.amsInfo=null,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.id&&e.hasOwnProperty("id")&&mn.com.avast.cloud.webrep.proto.AvastIdentity.encode(e.id,t.uint32(10).fork()).ldelim(),
null!=e.type&&e.hasOwnProperty("type")&&t.uint32(16).int32(e.type),
null!=e.browserExtInfo&&e.hasOwnProperty("browserExtInfo")&&mn.com.avast.cloud.webrep.proto.BrowserExtInfo.encode(e.browserExtInfo,t.uint32(26).fork()).ldelim(),
null!=e.messageClientInfo&&e.hasOwnProperty("messageClientInfo")&&mn.com.avast.cloud.webrep.proto.MessageClientInfo.encode(e.messageClientInfo,t.uint32(34).fork()).ldelim(),
null!=e.browserCleanUpInfo&&e.hasOwnProperty("browserCleanUpInfo")&&mn.com.avast.cloud.webrep.proto.BrowserCleanUpInfo.encode(e.browserCleanUpInfo,t.uint32(42).fork()).ldelim(),
null!=e.amsInfo&&e.hasOwnProperty("amsInfo")&&mn.com.avast.cloud.webrep.proto.AvastMobileSecurityInfo.encode(e.amsInfo,t.uint32(50).fork()).ldelim(),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Client
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.id=mn.com.avast.cloud.webrep.proto.AvastIdentity.decode(e,e.uint32())
break
case 2:
a.type=e.int32()
break
case 3:
a.browserExtInfo=mn.com.avast.cloud.webrep.proto.BrowserExtInfo.decode(e,e.uint32())
break
case 4:
a.messageClientInfo=mn.com.avast.cloud.webrep.proto.MessageClientInfo.decode(e,e.uint32())
break
case 5:
a.browserCleanUpInfo=mn.com.avast.cloud.webrep.proto.BrowserCleanUpInfo.decode(e,e.uint32())
break
case 6:
a.amsInfo=mn.com.avast.cloud.webrep.proto.AvastMobileSecurityInfo.decode(e,e.uint32())
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.id&&e.hasOwnProperty("id")){
let t=mn.com.avast.cloud.webrep.proto.AvastIdentity.verify(e.id)
if(t){
return"id."+t
}
}
if(null!=e.type&&e.hasOwnProperty("type")){
switch(e.type){
default:
return"type: enum value expected"
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
}
}
if(null!=e.browserExtInfo&&e.hasOwnProperty("browserExtInfo")){
let t=mn.com.avast.cloud.webrep.proto.BrowserExtInfo.verify(e.browserExtInfo)
if(t){
return"browserExtInfo."+t
}
}
if(null!=e.messageClientInfo&&e.hasOwnProperty("messageClientInfo")){
let t=mn.com.avast.cloud.webrep.proto.MessageClientInfo.verify(e.messageClientInfo)
if(t){
return"messageClientInfo."+t
}
}
if(null!=e.browserCleanUpInfo&&e.hasOwnProperty("browserCleanUpInfo")){
let t=mn.com.avast.cloud.webrep.proto.BrowserCleanUpInfo.verify(e.browserCleanUpInfo)
if(t){
return"browserCleanUpInfo."+t
}
}
if(null!=e.amsInfo&&e.hasOwnProperty("amsInfo")){
let t=mn.com.avast.cloud.webrep.proto.AvastMobileSecurityInfo.verify(e.amsInfo)
if(t){
return"amsInfo."+t
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Client){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Client
if(null!=e.id){
if("object"!=typeof e.id){
throw TypeError(".com.avast.cloud.webrep.proto.Client.id: object expected")
}
t.id=mn.com.avast.cloud.webrep.proto.AvastIdentity.fromObject(e.id)
}
switch(e.type){
case"TEST":
case 1:
t.type=1
break
case"AVAST":
case 2:
t.type=2
break
case"BROWSER_EXT":
case 3:
t.type=3
break
case"MESSAGE":
case 4:
t.type=4
break
case"PARTNER":
case 5:
t.type=5
break
case"WEBSITE":
case 6:
t.type=6
break
case"BROWSER_CLEANUP":
case 7:
t.type=7
break
case"BACKEND":
case 8:
t.type=8
}
if(null!=e.browserExtInfo){
if("object"!=typeof e.browserExtInfo){
throw TypeError(".com.avast.cloud.webrep.proto.Client.browserExtInfo: object expected")
}
t.browserExtInfo=mn.com.avast.cloud.webrep.proto.BrowserExtInfo.fromObject(e.browserExtInfo)
}
if(null!=e.messageClientInfo){
if("object"!=typeof e.messageClientInfo){
throw TypeError(".com.avast.cloud.webrep.proto.Client.messageClientInfo: object expected")
}
t.messageClientInfo=mn.com.avast.cloud.webrep.proto.MessageClientInfo.fromObject(e.messageClientInfo)
}
if(null!=e.browserCleanUpInfo){
if("object"!=typeof e.browserCleanUpInfo){
throw TypeError(".com.avast.cloud.webrep.proto.Client.browserCleanUpInfo: object expected")
}
t.browserCleanUpInfo=mn.com.avast.cloud.webrep.proto.BrowserCleanUpInfo.fromObject(e.browserCleanUpInfo)
}
if(null!=e.amsInfo){
if("object"!=typeof e.amsInfo){
throw TypeError(".com.avast.cloud.webrep.proto.Client.amsInfo: object expected")
}
t.amsInfo=mn.com.avast.cloud.webrep.proto.AvastMobileSecurityInfo.fromObject(e.amsInfo)
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.id=null,i.type=t.enums===String?"TEST":1,i.browserExtInfo=null,
i.messageClientInfo=null,
i.browserCleanUpInfo=null,i.amsInfo=null),null!=e.id&&e.hasOwnProperty("id")&&(i.id=mn.com.avast.cloud.webrep.proto.AvastIdentity.toObject(e.id,t)),
null!=e.type&&e.hasOwnProperty("type")&&(i.type=t.enums===String?mn.com.avast.cloud.webrep.proto.Client.CType[e.type]:e.type),
null!=e.browserExtInfo&&e.hasOwnProperty("browserExtInfo")&&(i.browserExtInfo=mn.com.avast.cloud.webrep.proto.BrowserExtInfo.toObject(e.browserExtInfo,t)),
null!=e.messageClientInfo&&e.hasOwnProperty("messageClientInfo")&&(i.messageClientInfo=mn.com.avast.cloud.webrep.proto.MessageClientInfo.toObject(e.messageClientInfo,t)),
null!=e.browserCleanUpInfo&&e.hasOwnProperty("browserCleanUpInfo")&&(i.browserCleanUpInfo=mn.com.avast.cloud.webrep.proto.BrowserCleanUpInfo.toObject(e.browserCleanUpInfo,t)),
null!=e.amsInfo&&e.hasOwnProperty("amsInfo")&&(i.amsInfo=mn.com.avast.cloud.webrep.proto.AvastMobileSecurityInfo.toObject(e.amsInfo,t)),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e.CType=function(){
const e={},t=Object.create(e)
return t[e[1]="TEST"]=1,t[e[2]="AVAST"]=2,t[e[3]="BROWSER_EXT"]=3,t[e[4]="MESSAGE"]=4,
t[e[5]="PARTNER"]=5,
t[e[6]="WEBSITE"]=6,t[e[7]="BROWSER_CLEANUP"]=7,t[e[8]="BACKEND"]=8,
t
}(),e
}(),e.AvastIdentity=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.guid=gn.newBuffer([]),e.prototype.uuid=gn.newBuffer([]),e.prototype.token=gn.newBuffer([]),
e.prototype.auid=gn.newBuffer([]),
e.prototype.userid=gn.newBuffer([]),e.prototype.hwid=gn.newBuffer([]),
e.prototype.android_advertisement_id=gn.newBuffer([]),
e.prototype.plugin_guid=gn.newBuffer([]),
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.guid&&e.hasOwnProperty("guid")&&t.uint32(10).bytes(e.guid),
null!=e.uuid&&e.hasOwnProperty("uuid")&&t.uint32(18).bytes(e.uuid),
null!=e.token&&e.hasOwnProperty("token")&&t.uint32(26).bytes(e.token),
null!=e.auid&&e.hasOwnProperty("auid")&&t.uint32(34).bytes(e.auid),
null!=e.userid&&e.hasOwnProperty("userid")&&t.uint32(42).bytes(e.userid),
null!=e.hwid&&e.hasOwnProperty("hwid")&&t.uint32(50).bytes(e.hwid),
null!=e.android_advertisement_id&&e.hasOwnProperty("android_advertisement_id")&&t.uint32(58).bytes(e.android_advertisement_id),
null!=e.plugin_guid&&e.hasOwnProperty("plugin_guid")&&t.uint32(66).bytes(e.plugin_guid),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.AvastIdentity
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.guid=e.bytes()
break
case 2:
a.uuid=e.bytes()
break
case 3:
a.token=e.bytes()
break
case 4:
a.auid=e.bytes()
break
case 5:
a.userid=e.bytes()
break
case 6:
a.hwid=e.bytes()
break
case 7:
a.android_advertisement_id=e.bytes()
break
case 8:
a.plugin_guid=e.bytes()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.guid&&e.hasOwnProperty("guid")&&!(e.guid&&"number"==typeof e.guid.length||gn.isString(e.guid))?"guid: buffer expected":null!=e.uuid&&e.hasOwnProperty("uuid")&&!(e.uuid&&"number"==typeof e.uuid.length||gn.isString(e.uuid))?"uuid: buffer expected":null!=e.token&&e.hasOwnProperty("token")&&!(e.token&&"number"==typeof e.token.length||gn.isString(e.token))?"token: buffer expected":null!=e.auid&&e.hasOwnProperty("auid")&&!(e.auid&&"number"==typeof e.auid.length||gn.isString(e.auid))?"auid: buffer expected":null!=e.userid&&e.hasOwnProperty("userid")&&!(e.userid&&"number"==typeof e.userid.length||gn.isString(e.userid))?"userid: buffer expected":null!=e.hwid&&e.hasOwnProperty("hwid")&&!(e.hwid&&"number"==typeof e.hwid.length||gn.isString(e.hwid))?"hwid: buffer expected":null!=e.android_advertisement_id&&e.hasOwnProperty("android_advertisement_id")&&!(e.android_advertisement_id&&"number"==typeof e.android_advertisement_id.length||gn.isString(e.android_advertisement_id))?"android_advertisement_id: buffer expected":null!=e.plugin_guid&&e.hasOwnProperty("plugin_guid")&&!(e.plugin_guid&&"number"==typeof e.plugin_guid.length||gn.isString(e.plugin_guid))?"plugin_guid: buffer expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.AvastIdentity){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.AvastIdentity
return null!=e.guid&&("string"==typeof e.guid?gn.base64.decode(e.guid,t.guid=gn.newBuffer(gn.base64.length(e.guid)),0):e.guid.length&&(t.guid=e.guid)),
null!=e.uuid&&("string"==typeof e.uuid?gn.base64.decode(e.uuid,t.uuid=gn.newBuffer(gn.base64.length(e.uuid)),0):e.uuid.length&&(t.uuid=e.uuid)),
null!=e.token&&("string"==typeof e.token?gn.base64.decode(e.token,t.token=gn.newBuffer(gn.base64.length(e.token)),0):e.token.length&&(t.token=e.token)),
null!=e.auid&&("string"==typeof e.auid?gn.base64.decode(e.auid,t.auid=gn.newBuffer(gn.base64.length(e.auid)),0):e.auid.length&&(t.auid=e.auid)),
null!=e.userid&&("string"==typeof e.userid?gn.base64.decode(e.userid,t.userid=gn.newBuffer(gn.base64.length(e.userid)),0):e.userid.length&&(t.userid=e.userid)),
null!=e.hwid&&("string"==typeof e.hwid?gn.base64.decode(e.hwid,t.hwid=gn.newBuffer(gn.base64.length(e.hwid)),0):e.hwid.length&&(t.hwid=e.hwid)),
null!=e.android_advertisement_id&&("string"==typeof e.android_advertisement_id?gn.base64.decode(e.android_advertisement_id,t.android_advertisement_id=gn.newBuffer(gn.base64.length(e.android_advertisement_id)),0):e.android_advertisement_id.length&&(t.android_advertisement_id=e.android_advertisement_id)),
null!=e.plugin_guid&&("string"==typeof e.plugin_guid?gn.base64.decode(e.plugin_guid,t.plugin_guid=gn.newBuffer(gn.base64.length(e.plugin_guid)),0):e.plugin_guid.length&&(t.plugin_guid=e.plugin_guid)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(t.bytes===String?i.guid="":(i.guid=[],t.bytes!==Array&&(i.guid=gn.newBuffer(i.guid))),
t.bytes===String?i.uuid="":(i.uuid=[],
t.bytes!==Array&&(i.uuid=gn.newBuffer(i.uuid))),
t.bytes===String?i.token="":(i.token=[],
t.bytes!==Array&&(i.token=gn.newBuffer(i.token))),
t.bytes===String?i.auid="":(i.auid=[],
t.bytes!==Array&&(i.auid=gn.newBuffer(i.auid))),
t.bytes===String?i.userid="":(i.userid=[],
t.bytes!==Array&&(i.userid=gn.newBuffer(i.userid))),
t.bytes===String?i.hwid="":(i.hwid=[],
t.bytes!==Array&&(i.hwid=gn.newBuffer(i.hwid))),
t.bytes===String?i.android_advertisement_id="":(i.android_advertisement_id=[],
t.bytes!==Array&&(i.android_advertisement_id=gn.newBuffer(i.android_advertisement_id))),
t.bytes===String?i.plugin_guid="":(i.plugin_guid=[],
t.bytes!==Array&&(i.plugin_guid=gn.newBuffer(i.plugin_guid)))),
null!=e.guid&&e.hasOwnProperty("guid")&&(i.guid=t.bytes===String?gn.base64.encode(e.guid,0,e.guid.length):t.bytes===Array?Array.prototype.slice.call(e.guid):e.guid),
null!=e.uuid&&e.hasOwnProperty("uuid")&&(i.uuid=t.bytes===String?gn.base64.encode(e.uuid,0,e.uuid.length):t.bytes===Array?Array.prototype.slice.call(e.uuid):e.uuid),
null!=e.token&&e.hasOwnProperty("token")&&(i.token=t.bytes===String?gn.base64.encode(e.token,0,e.token.length):t.bytes===Array?Array.prototype.slice.call(e.token):e.token),
null!=e.auid&&e.hasOwnProperty("auid")&&(i.auid=t.bytes===String?gn.base64.encode(e.auid,0,e.auid.length):t.bytes===Array?Array.prototype.slice.call(e.auid):e.auid),
null!=e.userid&&e.hasOwnProperty("userid")&&(i.userid=t.bytes===String?gn.base64.encode(e.userid,0,e.userid.length):t.bytes===Array?Array.prototype.slice.call(e.userid):e.userid),
null!=e.hwid&&e.hasOwnProperty("hwid")&&(i.hwid=t.bytes===String?gn.base64.encode(e.hwid,0,e.hwid.length):t.bytes===Array?Array.prototype.slice.call(e.hwid):e.hwid),
null!=e.android_advertisement_id&&e.hasOwnProperty("android_advertisement_id")&&(i.android_advertisement_id=t.bytes===String?gn.base64.encode(e.android_advertisement_id,0,e.android_advertisement_id.length):t.bytes===Array?Array.prototype.slice.call(e.android_advertisement_id):e.android_advertisement_id),
null!=e.plugin_guid&&e.hasOwnProperty("plugin_guid")&&(i.plugin_guid=t.bytes===String?gn.base64.encode(e.plugin_guid,0,e.plugin_guid.length):t.bytes===Array?Array.prototype.slice.call(e.plugin_guid):e.plugin_guid),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.BrowserExtInfo=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.extensionType=1,e.prototype.extensionVersion=0,e.prototype.browserType=0,
e.prototype.browserVersion="",
e.prototype.os=1,e.prototype.osVersion="",e.prototype.dataVersion=0,
e.prototype.avVersion="",
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.extensionType&&e.hasOwnProperty("extensionType")&&t.uint32(8).int32(e.extensionType),
null!=e.extensionVersion&&e.hasOwnProperty("extensionVersion")&&t.uint32(16).sint32(e.extensionVersion),
null!=e.browserType&&e.hasOwnProperty("browserType")&&t.uint32(24).int32(e.browserType),
null!=e.browserVersion&&e.hasOwnProperty("browserVersion")&&t.uint32(34).string(e.browserVersion),
null!=e.os&&e.hasOwnProperty("os")&&t.uint32(40).int32(e.os),
null!=e.osVersion&&e.hasOwnProperty("osVersion")&&t.uint32(50).string(e.osVersion),
null!=e.dataVersion&&e.hasOwnProperty("dataVersion")&&t.uint32(56).sint32(e.dataVersion),
null!=e.avVersion&&e.hasOwnProperty("avVersion")&&t.uint32(66).string(e.avVersion),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.BrowserExtInfo
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.extensionType=e.int32()
break
case 2:
a.extensionVersion=e.sint32()
break
case 3:
a.browserType=e.int32()
break
case 4:
a.browserVersion=e.string()
break
case 5:
a.os=e.int32()
break
case 6:
a.osVersion=e.string()
break
case 7:
a.dataVersion=e.sint32()
break
case 8:
a.avVersion=e.string()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.extensionType&&e.hasOwnProperty("extensionType")){
switch(e.extensionType){
default:
return"extensionType: enum value expected"
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
}
}
if(null!=e.extensionVersion&&e.hasOwnProperty("extensionVersion")&&!gn.isInteger(e.extensionVersion)){
return"extensionVersion: integer expected"
}
if(null!=e.browserType&&e.hasOwnProperty("browserType")){
switch(e.browserType){
default:
return"browserType: enum value expected"
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
case 12:
case 13:
case 14:
case 15:
case 16:
case 17:
case 18:
case 19:
case 20:
case 21:
}
}
if(null!=e.browserVersion&&e.hasOwnProperty("browserVersion")&&!gn.isString(e.browserVersion)){
return"browserVersion: string expected"
}
if(null!=e.os&&e.hasOwnProperty("os")){
switch(e.os){
default:
return"os: enum value expected"
case 1:
case 2:
case 3:
case 4:
case 5:
}
}
return null!=e.osVersion&&e.hasOwnProperty("osVersion")&&!gn.isString(e.osVersion)?"osVersion: string expected":null!=e.dataVersion&&e.hasOwnProperty("dataVersion")&&!gn.isInteger(e.dataVersion)?"dataVersion: integer expected":null!=e.avVersion&&e.hasOwnProperty("avVersion")&&!gn.isString(e.avVersion)?"avVersion: string expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.BrowserExtInfo){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.BrowserExtInfo
switch(e.extensionType){
case"AOS":
case 1:
t.extensionType=1
break
case"SP":
case 2:
t.extensionType=2
break
case"AOSP":
case 3:
t.extensionType=3
break
case"ABOS":
case 4:
t.extensionType=4
break
case"SPAP":
case 5:
t.extensionType=5
break
case"AOS_SZ":
case 6:
t.extensionType=6
}
switch(null!=e.extensionVersion&&(t.extensionVersion=0|e.extensionVersion),e.browserType){
case"CHROME":
case 0:
t.browserType=0
break
case"FIREFOX":
case 1:
t.browserType=1
break
case"IE":
case 2:
t.browserType=2
break
case"OPERA":
case 3:
t.browserType=3
break
case"SAFAR":
case 4:
t.browserType=4
break
case"PRODUCTS":
case 5:
t.browserType=5
break
case"VIDEO":
case 6:
t.browserType=6
break
case"STOCK":
case 7:
t.browserType=7
break
case"STOCK_JB":
case 8:
t.browserType=8
break
case"DOLPHIN_MINI":
case 9:
t.browserType=9
break
case"DOLPHIN":
case 10:
t.browserType=10
break
case"SILK":
case 11:
t.browserType=11
break
case"BOAT_MINI":
case 12:
t.browserType=12
break
case"BOAT":
case 13:
t.browserType=13
break
case"CHROME_M":
case 14:
t.browserType=14
break
case"MS_EDGE":
case 15:
t.browserType=15
break
case"SAFEZONE":
case 16:
t.browserType=16
break
case"DOLPHIN_TUNNY":
case 17:
t.browserType=17
break
case"OPERA_MINI":
case 18:
t.browserType=18
break
case"UC_BROWSER":
case 19:
t.browserType=19
break
case"SBROWSER":
case 20:
t.browserType=20
break
case"AVG_SECURE_SEARCH":
case 21:
t.browserType=21
}
switch(null!=e.browserVersion&&(t.browserVersion=String(e.browserVersion)),e.os){
case"WIN":
case 1:
t.os=1
break
case"MAC":
case 2:
t.os=2
break
case"LINUX":
case 3:
t.os=3
break
case"ANDROID":
case 4:
t.os=4
break
case"IOS":
case 5:
t.os=5
}
return null!=e.osVersion&&(t.osVersion=String(e.osVersion)),null!=e.dataVersion&&(t.dataVersion=0|e.dataVersion),
null!=e.avVersion&&(t.avVersion=String(e.avVersion)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.extensionType=t.enums===String?"AOS":1,i.extensionVersion=0,
i.browserType=t.enums===String?"CHROME":0,
i.browserVersion="",i.os=t.enums===String?"WIN":1,
i.osVersion="",i.dataVersion=0,
i.avVersion=""),null!=e.extensionType&&e.hasOwnProperty("extensionType")&&(i.extensionType=t.enums===String?mn.com.avast.cloud.webrep.proto.ExtensionType[e.extensionType]:e.extensionType),
null!=e.extensionVersion&&e.hasOwnProperty("extensionVersion")&&(i.extensionVersion=e.extensionVersion),
null!=e.browserType&&e.hasOwnProperty("browserType")&&(i.browserType=t.enums===String?mn.com.avast.cloud.webrep.proto.BrowserType[e.browserType]:e.browserType),
null!=e.browserVersion&&e.hasOwnProperty("browserVersion")&&(i.browserVersion=e.browserVersion),
null!=e.os&&e.hasOwnProperty("os")&&(i.os=t.enums===String?mn.com.avast.cloud.webrep.proto.OS[e.os]:e.os),
null!=e.osVersion&&e.hasOwnProperty("osVersion")&&(i.osVersion=e.osVersion),
null!=e.dataVersion&&e.hasOwnProperty("dataVersion")&&(i.dataVersion=e.dataVersion),
null!=e.avVersion&&e.hasOwnProperty("avVersion")&&(i.avVersion=e.avVersion),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.MessageClientInfo=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.os=1,e.prototype.osVersion="",e.prototype.dataVersion=0,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.os&&e.hasOwnProperty("os")&&t.uint32(8).int32(e.os),
null!=e.osVersion&&e.hasOwnProperty("osVersion")&&t.uint32(18).string(e.osVersion),
null!=e.dataVersion&&e.hasOwnProperty("dataVersion")&&t.uint32(24).sint32(e.dataVersion),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.MessageClientInfo
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.os=e.int32()
break
case 2:
a.osVersion=e.string()
break
case 3:
a.dataVersion=e.sint32()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.os&&e.hasOwnProperty("os")){
switch(e.os){
default:
return"os: enum value expected"
case 1:
case 2:
case 3:
case 4:
case 5:
}
}
return null!=e.osVersion&&e.hasOwnProperty("osVersion")&&!gn.isString(e.osVersion)?"osVersion: string expected":null!=e.dataVersion&&e.hasOwnProperty("dataVersion")&&!gn.isInteger(e.dataVersion)?"dataVersion: integer expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.MessageClientInfo){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.MessageClientInfo
switch(e.os){
case"WIN":
case 1:
t.os=1
break
case"MAC":
case 2:
t.os=2
break
case"LINUX":
case 3:
t.os=3
break
case"ANDROID":
case 4:
t.os=4
break
case"IOS":
case 5:
t.os=5
}
return null!=e.osVersion&&(t.osVersion=String(e.osVersion)),null!=e.dataVersion&&(t.dataVersion=0|e.dataVersion),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.os=t.enums===String?"WIN":1,i.osVersion="",i.dataVersion=0),
null!=e.os&&e.hasOwnProperty("os")&&(i.os=t.enums===String?mn.com.avast.cloud.webrep.proto.OS[e.os]:e.os),
null!=e.osVersion&&e.hasOwnProperty("osVersion")&&(i.osVersion=e.osVersion),
null!=e.dataVersion&&e.hasOwnProperty("dataVersion")&&(i.dataVersion=e.dataVersion),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.BrowserCleanUpInfo=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.productLanguage="",e.prototype.osLanguage="",e.prototype.os=1,
e.prototype.osDetail="",
e.prototype.location="",e.prototype.productType=0,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.productLanguage&&e.hasOwnProperty("productLanguage")&&t.uint32(10).string(e.productLanguage),
null!=e.osLanguage&&e.hasOwnProperty("osLanguage")&&t.uint32(18).string(e.osLanguage),
null!=e.os&&e.hasOwnProperty("os")&&t.uint32(24).int32(e.os),
null!=e.osDetail&&e.hasOwnProperty("osDetail")&&t.uint32(34).string(e.osDetail),
null!=e.location&&e.hasOwnProperty("location")&&t.uint32(42).string(e.location),
null!=e.productType&&e.hasOwnProperty("productType")&&t.uint32(48).int32(e.productType),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.BrowserCleanUpInfo
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.productLanguage=e.string()
break
case 2:
a.osLanguage=e.string()
break
case 3:
a.os=e.int32()
break
case 4:
a.osDetail=e.string()
break
case 5:
a.location=e.string()
break
case 6:
a.productType=e.int32()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.productLanguage&&e.hasOwnProperty("productLanguage")&&!gn.isString(e.productLanguage)){
return"productLanguage: string expected"
}
if(null!=e.osLanguage&&e.hasOwnProperty("osLanguage")&&!gn.isString(e.osLanguage)){
return"osLanguage: string expected"
}
if(null!=e.os&&e.hasOwnProperty("os")){
switch(e.os){
default:
return"os: enum value expected"
case 1:
case 2:
case 3:
case 4:
case 5:
}
}
return null!=e.osDetail&&e.hasOwnProperty("osDetail")&&!gn.isString(e.osDetail)?"osDetail: string expected":null!=e.location&&e.hasOwnProperty("location")&&!gn.isString(e.location)?"location: string expected":null!=e.productType&&e.hasOwnProperty("productType")&&!gn.isInteger(e.productType)?"productType: integer expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.BrowserCleanUpInfo){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.BrowserCleanUpInfo
switch(null!=e.productLanguage&&(t.productLanguage=String(e.productLanguage)),null!=e.osLanguage&&(t.osLanguage=String(e.osLanguage)),
e.os){
case"WIN":
case 1:
t.os=1
break
case"MAC":
case 2:
t.os=2
break
case"LINUX":
case 3:
t.os=3
break
case"ANDROID":
case 4:
t.os=4
break
case"IOS":
case 5:
t.os=5
}
return null!=e.osDetail&&(t.osDetail=String(e.osDetail)),null!=e.location&&(t.location=String(e.location)),
null!=e.productType&&(t.productType=0|e.productType),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.productLanguage="",i.osLanguage="",i.os=t.enums===String?"WIN":1,
i.osDetail="",
i.location="",i.productType=0),null!=e.productLanguage&&e.hasOwnProperty("productLanguage")&&(i.productLanguage=e.productLanguage),
null!=e.osLanguage&&e.hasOwnProperty("osLanguage")&&(i.osLanguage=e.osLanguage),
null!=e.os&&e.hasOwnProperty("os")&&(i.os=t.enums===String?mn.com.avast.cloud.webrep.proto.OS[e.os]:e.os),
null!=e.osDetail&&e.hasOwnProperty("osDetail")&&(i.osDetail=e.osDetail),
null!=e.location&&e.hasOwnProperty("location")&&(i.location=e.location),
null!=e.productType&&e.hasOwnProperty("productType")&&(i.productType=e.productType),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.AvastMobileSecurityInfo=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.versionCode=gn.Long?gn.Long.fromBits(0,0,!1):0,e.prototype.versionName="",
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.versionCode&&e.hasOwnProperty("versionCode")&&t.uint32(8).int64(e.versionCode),
null!=e.versionName&&e.hasOwnProperty("versionName")&&t.uint32(18).string(e.versionName),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.AvastMobileSecurityInfo
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.versionCode=e.int64()
break
case 2:
a.versionName=e.string()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.versionCode&&e.hasOwnProperty("versionCode")&&!(gn.isInteger(e.versionCode)||e.versionCode&&gn.isInteger(e.versionCode.low)&&gn.isInteger(e.versionCode.high))?"versionCode: integer|Long expected":null!=e.versionName&&e.hasOwnProperty("versionName")&&!gn.isString(e.versionName)?"versionName: string expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.AvastMobileSecurityInfo){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.AvastMobileSecurityInfo
return null!=e.versionCode&&(gn.Long?(t.versionCode=gn.Long.fromValue(e.versionCode)).unsigned=!1:"string"==typeof e.versionCode?t.versionCode=parseInt(e.versionCode,10):"number"==typeof e.versionCode?t.versionCode=e.versionCode:"object"==typeof e.versionCode&&(t.versionCode=new gn.LongBits(e.versionCode.low>>>0,e.versionCode.high>>>0).toNumber())),
null!=e.versionName&&(t.versionName=String(e.versionName)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
if(t.defaults){
if(gn.Long){
let e=new gn.Long(0,0,!1)
i.versionCode=t.longs===String?e.toString():t.longs===Number?e.toNumber():e
}else{
i.versionCode=t.longs===String?"0":0
}
i.versionName=""
}
return null!=e.versionCode&&e.hasOwnProperty("versionCode")&&("number"==typeof e.versionCode?i.versionCode=t.longs===String?String(e.versionCode):e.versionCode:i.versionCode=t.longs===String?gn.Long.prototype.toString.call(e.versionCode):t.longs===Number?new gn.LongBits(e.versionCode.low>>>0,e.versionCode.high>>>0).toNumber():e.versionCode),
null!=e.versionName&&e.hasOwnProperty("versionName")&&(i.versionName=e.versionName),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.Categories=function(){
function e(e){
if(this.matches=[],e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.matches=gn.emptyArray,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
if(t||(t=dn.create()),null!=e.matches&&e.matches.length){
for(let i=0;i<e.matches.length;++i){
mn.com.avast.cloud.webrep.proto.CategoryMatch.encode(e.matches[i],t.uint32(10).fork()).ldelim()
}
}
return t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Categories
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.matches&&a.matches.length||(a.matches=[]),a.matches.push(mn.com.avast.cloud.webrep.proto.CategoryMatch.decode(e,e.uint32()))
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.matches&&e.hasOwnProperty("matches")){
if(!Array.isArray(e.matches)){
return"matches: array expected"
}
for(let t=0;t<e.matches.length;++t){
let i=mn.com.avast.cloud.webrep.proto.CategoryMatch.verify(e.matches[t])
if(i){
return"matches."+i
}
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Categories){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Categories
if(e.matches){
if(!Array.isArray(e.matches)){
throw TypeError(".com.avast.cloud.webrep.proto.Categories.matches: array expected")
}
t.matches=[]
for(let i=0;i<e.matches.length;++i){
if("object"!=typeof e.matches[i]){
throw TypeError(".com.avast.cloud.webrep.proto.Categories.matches: object expected")
}
t.matches[i]=mn.com.avast.cloud.webrep.proto.CategoryMatch.fromObject(e.matches[i])
}
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
if((t.arrays||t.defaults)&&(i.matches=[]),e.matches&&e.matches.length){
i.matches=[]
for(let a=0;a<e.matches.length;++a){
i.matches[a]=mn.com.avast.cloud.webrep.proto.CategoryMatch.toObject(e.matches[a],t)
}
}
return i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.Ajax=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.collect=!1,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.collect&&e.hasOwnProperty("collect")&&t.uint32(8).bool(e.collect),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Ajax
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.collect=e.bool()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.collect&&e.hasOwnProperty("collect")&&"boolean"!=typeof e.collect?"collect: boolean expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Ajax){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Ajax
return null!=e.collect&&(t.collect=Boolean(e.collect)),t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.collect=!1),null!=e.collect&&e.hasOwnProperty("collect")&&(i.collect=e.collect),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.CategoryMatch=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.type=0,e.prototype.category=1,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.type&&e.hasOwnProperty("type")&&t.uint32(8).int32(e.type),
null!=e.category&&e.hasOwnProperty("category")&&t.uint32(16).int32(e.category),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.CategoryMatch
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.type=e.int32()
break
case 2:
a.category=e.int32()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.type&&e.hasOwnProperty("type")){
switch(e.type){
default:
return"type: enum value expected"
case 0:
}
}
if(null!=e.category&&e.hasOwnProperty("category")){
switch(e.category){
default:
return"category: enum value expected"
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.CategoryMatch){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.CategoryMatch
switch(e.type){
case"DOMAIN":
case 0:
t.type=0
}
switch(e.category){
case"PORNOGRAPHY":
case 1:
t.category=1
break
case"BANKING":
case 2:
t.category=2
break
case"SHOPPING":
case 3:
t.category=3
break
case"SOCIAL":
case 4:
t.category=4
break
case"VIOLENCE":
case 5:
t.category=5
break
case"GAMBLING":
case 6:
t.category=6
break
case"DRUGS":
case 7:
t.category=7
break
case"ILLEGAL":
case 8:
t.category=8
break
case"DATING":
case 9:
t.category=9
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.type=t.enums===String?"DOMAIN":0,i.category=t.enums===String?"PORNOGRAPHY":1),
null!=e.type&&e.hasOwnProperty("type")&&(i.type=t.enums===String?mn.com.avast.cloud.webrep.proto.CategoryMatchType[e.type]:e.type),
null!=e.category&&e.hasOwnProperty("category")&&(i.category=t.enums===String?mn.com.avast.cloud.webrep.proto.Category[e.category]:e.category),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.CategoryMatchType=function(){
const e={},t=Object.create(e)
return t[e[0]="DOMAIN"]=0,t
}(),e.Category=function(){
const e={},t=Object.create(e)
return t[e[1]="PORNOGRAPHY"]=1,t[e[2]="BANKING"]=2,t[e[3]="SHOPPING"]=3,t[e[4]="SOCIAL"]=4,
t[e[5]="VIOLENCE"]=5,
t[e[6]="GAMBLING"]=6,t[e[7]="DRUGS"]=7,t[e[8]="ILLEGAL"]=8,
t[e[9]="DATING"]=9,t
}(),e.BrowserType=function(){
const e={},t=Object.create(e)
return t[e[0]="CHROME"]=0,t[e[1]="FIREFOX"]=1,t[e[2]="IE"]=2,t[e[3]="OPERA"]=3,t[e[4]="SAFAR"]=4,
t[e[5]="PRODUCTS"]=5,
t[e[6]="VIDEO"]=6,t[e[7]="STOCK"]=7,t[e[8]="STOCK_JB"]=8,t[e[9]="DOLPHIN_MINI"]=9,
t[e[10]="DOLPHIN"]=10,
t[e[11]="SILK"]=11,t[e[12]="BOAT_MINI"]=12,t[e[13]="BOAT"]=13,
t[e[14]="CHROME_M"]=14,
t[e[15]="MS_EDGE"]=15,t[e[16]="SAFEZONE"]=16,t[e[17]="DOLPHIN_TUNNY"]=17,
t[e[18]="OPERA_MINI"]=18,
t[e[19]="UC_BROWSER"]=19,t[e[20]="SBROWSER"]=20,t[e[21]="AVG_SECURE_SEARCH"]=21,
t
}(),e.OS=function(){
const e={},t=Object.create(e)
return t[e[1]="WIN"]=1,t[e[2]="MAC"]=2,t[e[3]="LINUX"]=3,t[e[4]="ANDROID"]=4,t[e[5]="IOS"]=5,
t
}(),e.ExtensionType=function(){
const e={},t=Object.create(e)
return t[e[1]="AOS"]=1,t[e[2]="SP"]=2,t[e[3]="AOSP"]=3,t[e[4]="ABOS"]=4,t[e[5]="SPAP"]=5,
t[e[6]="AOS_SZ"]=6,
t
}(),e.RefererDetails=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.fakeReferer="",e.prototype.windowNum=0,e.prototype.tabNum=0,
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.fakeReferer&&e.hasOwnProperty("fakeReferer")&&t.uint32(10).string(e.fakeReferer),
null!=e.windowNum&&e.hasOwnProperty("windowNum")&&t.uint32(16).sint32(e.windowNum),
null!=e.tabNum&&e.hasOwnProperty("tabNum")&&t.uint32(24).sint32(e.tabNum),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.RefererDetails
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.fakeReferer=e.string()
break
case 2:
a.windowNum=e.sint32()
break
case 3:
a.tabNum=e.sint32()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.fakeReferer&&e.hasOwnProperty("fakeReferer")&&!gn.isString(e.fakeReferer)?"fakeReferer: string expected":null!=e.windowNum&&e.hasOwnProperty("windowNum")&&!gn.isInteger(e.windowNum)?"windowNum: integer expected":null!=e.tabNum&&e.hasOwnProperty("tabNum")&&!gn.isInteger(e.tabNum)?"tabNum: integer expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.RefererDetails){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.RefererDetails
return null!=e.fakeReferer&&(t.fakeReferer=String(e.fakeReferer)),null!=e.windowNum&&(t.windowNum=0|e.windowNum),
null!=e.tabNum&&(t.tabNum=0|e.tabNum),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.fakeReferer="",i.windowNum=0,i.tabNum=0),null!=e.fakeReferer&&e.hasOwnProperty("fakeReferer")&&(i.fakeReferer=e.fakeReferer),
null!=e.windowNum&&e.hasOwnProperty("windowNum")&&(i.windowNum=e.windowNum),
null!=e.tabNum&&e.hasOwnProperty("tabNum")&&(i.tabNum=e.tabNum),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.UpdateRequest=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.pluginType="",e.prototype.pluginVersion="",e.prototype.rulesVersion="",
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.pluginType&&e.hasOwnProperty("pluginType")&&t.uint32(10).string(e.pluginType),
null!=e.pluginVersion&&e.hasOwnProperty("pluginVersion")&&t.uint32(18).string(e.pluginVersion),
null!=e.rulesVersion&&e.hasOwnProperty("rulesVersion")&&t.uint32(26).string(e.rulesVersion),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.UpdateRequest
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.pluginType=e.string()
break
case 2:
a.pluginVersion=e.string()
break
case 3:
a.rulesVersion=e.string()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.pluginType&&e.hasOwnProperty("pluginType")&&!gn.isString(e.pluginType)?"pluginType: string expected":null!=e.pluginVersion&&e.hasOwnProperty("pluginVersion")&&!gn.isString(e.pluginVersion)?"pluginVersion: string expected":null!=e.rulesVersion&&e.hasOwnProperty("rulesVersion")&&!gn.isString(e.rulesVersion)?"rulesVersion: string expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.UpdateRequest){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.UpdateRequest
return null!=e.pluginType&&(t.pluginType=String(e.pluginType)),null!=e.pluginVersion&&(t.pluginVersion=String(e.pluginVersion)),
null!=e.rulesVersion&&(t.rulesVersion=String(e.rulesVersion)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.pluginType="",i.pluginVersion="",i.rulesVersion=""),null!=e.pluginType&&e.hasOwnProperty("pluginType")&&(i.pluginType=e.pluginType),
null!=e.pluginVersion&&e.hasOwnProperty("pluginVersion")&&(i.pluginVersion=e.pluginVersion),
null!=e.rulesVersion&&e.hasOwnProperty("rulesVersion")&&(i.rulesVersion=e.rulesVersion),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.UpdateResponse=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.pluginUpdate=null,e.prototype.rulesUpdate=null,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.pluginUpdate&&e.hasOwnProperty("pluginUpdate")&&mn.com.avast.cloud.webrep.proto.PluginUpdate.encode(e.pluginUpdate,t.uint32(10).fork()).ldelim(),
null!=e.rulesUpdate&&e.hasOwnProperty("rulesUpdate")&&mn.com.avast.cloud.webrep.proto.RulesUpdate.encode(e.rulesUpdate,t.uint32(18).fork()).ldelim(),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.UpdateResponse
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.pluginUpdate=mn.com.avast.cloud.webrep.proto.PluginUpdate.decode(e,e.uint32())
break
case 2:
a.rulesUpdate=mn.com.avast.cloud.webrep.proto.RulesUpdate.decode(e,e.uint32())
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.pluginUpdate&&e.hasOwnProperty("pluginUpdate")){
let t=mn.com.avast.cloud.webrep.proto.PluginUpdate.verify(e.pluginUpdate)
if(t){
return"pluginUpdate."+t
}
}
if(null!=e.rulesUpdate&&e.hasOwnProperty("rulesUpdate")){
let t=mn.com.avast.cloud.webrep.proto.RulesUpdate.verify(e.rulesUpdate)
if(t){
return"rulesUpdate."+t
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.UpdateResponse){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.UpdateResponse
if(null!=e.pluginUpdate){
if("object"!=typeof e.pluginUpdate){
throw TypeError(".com.avast.cloud.webrep.proto.UpdateResponse.pluginUpdate: object expected")
}
t.pluginUpdate=mn.com.avast.cloud.webrep.proto.PluginUpdate.fromObject(e.pluginUpdate)
}
if(null!=e.rulesUpdate){
if("object"!=typeof e.rulesUpdate){
throw TypeError(".com.avast.cloud.webrep.proto.UpdateResponse.rulesUpdate: object expected")
}
t.rulesUpdate=mn.com.avast.cloud.webrep.proto.RulesUpdate.fromObject(e.rulesUpdate)
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.pluginUpdate=null,i.rulesUpdate=null),null!=e.pluginUpdate&&e.hasOwnProperty("pluginUpdate")&&(i.pluginUpdate=mn.com.avast.cloud.webrep.proto.PluginUpdate.toObject(e.pluginUpdate,t)),
null!=e.rulesUpdate&&e.hasOwnProperty("rulesUpdate")&&(i.rulesUpdate=mn.com.avast.cloud.webrep.proto.RulesUpdate.toObject(e.rulesUpdate,t)),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.PluginUpdate=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.plyginType="",e.prototype.version="",e.prototype.releaseNotes="",
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.plyginType&&e.hasOwnProperty("plyginType")&&t.uint32(10).string(e.plyginType),
null!=e.version&&e.hasOwnProperty("version")&&t.uint32(18).string(e.version),
null!=e.releaseNotes&&e.hasOwnProperty("releaseNotes")&&t.uint32(26).string(e.releaseNotes),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.PluginUpdate
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.plyginType=e.string()
break
case 2:
a.version=e.string()
break
case 3:
a.releaseNotes=e.string()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.plyginType&&e.hasOwnProperty("plyginType")&&!gn.isString(e.plyginType)?"plyginType: string expected":null!=e.version&&e.hasOwnProperty("version")&&!gn.isString(e.version)?"version: string expected":null!=e.releaseNotes&&e.hasOwnProperty("releaseNotes")&&!gn.isString(e.releaseNotes)?"releaseNotes: string expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.PluginUpdate){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.PluginUpdate
return null!=e.plyginType&&(t.plyginType=String(e.plyginType)),null!=e.version&&(t.version=String(e.version)),
null!=e.releaseNotes&&(t.releaseNotes=String(e.releaseNotes)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.plyginType="",i.version="",i.releaseNotes=""),null!=e.plyginType&&e.hasOwnProperty("plyginType")&&(i.plyginType=e.plyginType),
null!=e.version&&e.hasOwnProperty("version")&&(i.version=e.version),
null!=e.releaseNotes&&e.hasOwnProperty("releaseNotes")&&(i.releaseNotes=e.releaseNotes),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.RulesUpdate=function(){
function e(e){
if(this.rules=[],e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.version="",e.prototype.rules=gn.emptyArray,e.create=function(t){
return new e(t)
},e.encode=function(e,t){
if(t||(t=dn.create()),null!=e.version&&e.hasOwnProperty("version")&&t.uint32(10).string(e.version),
null!=e.rules&&e.rules.length){
for(let i=0;i<e.rules.length;++i){
mn.com.avast.cloud.webrep.proto.Rule.encode(e.rules[i],t.uint32(18).fork()).ldelim()
}
}
return t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.RulesUpdate
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.version=e.string()
break
case 2:
a.rules&&a.rules.length||(a.rules=[]),a.rules.push(mn.com.avast.cloud.webrep.proto.Rule.decode(e,e.uint32()))
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.version&&e.hasOwnProperty("version")&&!gn.isString(e.version)){
return"version: string expected"
}
if(null!=e.rules&&e.hasOwnProperty("rules")){
if(!Array.isArray(e.rules)){
return"rules: array expected"
}
for(let t=0;t<e.rules.length;++t){
let i=mn.com.avast.cloud.webrep.proto.Rule.verify(e.rules[t])
if(i){
return"rules."+i
}
}
}
return null
},e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.RulesUpdate){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.RulesUpdate
if(null!=e.version&&(t.version=String(e.version)),e.rules){
if(!Array.isArray(e.rules)){
throw TypeError(".com.avast.cloud.webrep.proto.RulesUpdate.rules: array expected")
}
t.rules=[]
for(let i=0;i<e.rules.length;++i){
if("object"!=typeof e.rules[i]){
throw TypeError(".com.avast.cloud.webrep.proto.RulesUpdate.rules: object expected")
}
t.rules[i]=mn.com.avast.cloud.webrep.proto.Rule.fromObject(e.rules[i])
}
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
if((t.arrays||t.defaults)&&(i.rules=[]),t.defaults&&(i.version=""),null!=e.version&&e.hasOwnProperty("version")&&(i.version=e.version),
e.rules&&e.rules.length){
i.rules=[]
for(let a=0;a<e.rules.length;++a){
i.rules[a]=mn.com.avast.cloud.webrep.proto.Rule.toObject(e.rules[a],t)
}
}
return i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e.Rule=function(){
function e(e){
if(e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.domain="",e.prototype.url="",e.prototype.ignore="",e.prototype.style="",
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
return t||(t=dn.create()),null!=e.domain&&e.hasOwnProperty("domain")&&t.uint32(10).string(e.domain),
null!=e.url&&e.hasOwnProperty("url")&&t.uint32(18).string(e.url),
null!=e.ignore&&e.hasOwnProperty("ignore")&&t.uint32(26).string(e.ignore),
null!=e.style&&e.hasOwnProperty("style")&&t.uint32(34).string(e.style),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof pn||(e=pn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new mn.com.avast.cloud.webrep.proto.Rule
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.domain=e.string()
break
case 2:
a.url=e.string()
break
case 3:
a.ignore=e.string()
break
case 4:
a.style=e.string()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof pn||(e=new pn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
return"object"!=typeof e||null===e?"object expected":null!=e.domain&&e.hasOwnProperty("domain")&&!gn.isString(e.domain)?"domain: string expected":null!=e.url&&e.hasOwnProperty("url")&&!gn.isString(e.url)?"url: string expected":null!=e.ignore&&e.hasOwnProperty("ignore")&&!gn.isString(e.ignore)?"ignore: string expected":null!=e.style&&e.hasOwnProperty("style")&&!gn.isString(e.style)?"style: string expected":null
},
e.fromObject=function(e){
if(e instanceof mn.com.avast.cloud.webrep.proto.Rule){
return e
}
let t=new mn.com.avast.cloud.webrep.proto.Rule
return null!=e.domain&&(t.domain=String(e.domain)),null!=e.url&&(t.url=String(e.url)),
null!=e.ignore&&(t.ignore=String(e.ignore)),
null!=e.style&&(t.style=String(e.style)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
return t.defaults&&(i.domain="",i.url="",i.ignore="",i.style=""),null!=e.domain&&e.hasOwnProperty("domain")&&(i.domain=e.domain),
null!=e.url&&e.hasOwnProperty("url")&&(i.url=e.url),
null!=e.ignore&&e.hasOwnProperty("ignore")&&(i.ignore=e.ignore),
null!=e.style&&e.hasOwnProperty("style")&&(i.style=e.style),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
}(),e
}(),e
}(),e
}(),e
}(),e
})(),un.Reader),kn=un.Writer,bn=un.util,fn=un.roots.default||(un.roots.default={})
fn.BrowserType=function(){
const e={},t=Object.create(e)
return t[e[0]="INVALID"]=0,t[e[1]="IE"]=1,t[e[2]="FIREFOX"]=2,t[e[3]="CHROME"]=3,
t[e[4]="OPERA"]=4,
t[e[5]="SAFARI"]=5,t
}(),fn.CommandType=function(){
const e={},t=Object.create(e)
return t[e[1]="ACKNOWLEDGEMENT"]=1,t[e[6]="IS_SAFEZONE_AVAILABLE"]=6,t[e[7]="SWITCH_TO_SAFEZONE"]=7,
t[e[10]="GET_GUIDS"]=10,
t[e[11]="GET_PROPERTIES"]=11,t[e[12]="IS_BANKING_SITE"]=12,
t[e[13]="IS_SAFEZONE_CUSTOM_SITE"]=13,
t[e[14]="SET_PROPERTIES"]=14,t[e[15]="GET_VERSIONS"]=15,
t[e[16]="GET_BCU_DISTRIBUTION_ID"]=16,
t
}()
fn.LocalServerCommandRequest=(()=>{
function e(e){
if(this.params=[],e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.type=1,e.prototype.params=bn.emptyArray,e.prototype.browser=0,
e.create=function(t){
return new e(t)
},e.encode=function(e,t){
if(t||(t=kn.create()),null!=e.type&&e.hasOwnProperty("type")&&t.uint32(8).int32(e.type),
null!=e.params&&e.params.length){
for(let i=0;i<e.params.length;++i){
t.uint32(18).bytes(e.params[i])
}
}
return null!=e.browser&&e.hasOwnProperty("browser")&&t.uint32(24).int32(e.browser),
t
},e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof hn||(e=hn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new fn.LocalServerCommandRequest
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.type=e.int32()
break
case 2:
a.params&&a.params.length||(a.params=[]),a.params.push(e.bytes())
break
case 3:
a.browser=e.int32()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof hn||(e=new hn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.type&&e.hasOwnProperty("type")){
switch(e.type){
default:
return"type: enum value expected"
case 1:
case 6:
case 7:
case 10:
case 11:
case 12:
case 13:
case 14:
case 15:
case 16:
}
}
if(null!=e.params&&e.hasOwnProperty("params")){
if(!Array.isArray(e.params)){
return"params: array expected"
}
for(let t=0;t<e.params.length;++t){
if(!(e.params[t]&&"number"==typeof e.params[t].length||bn.isString(e.params[t]))){
return"params: buffer[] expected"
}
}
}
if(null!=e.browser&&e.hasOwnProperty("browser")){
switch(e.browser){
default:
return"browser: enum value expected"
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
}
}
return null
},e.fromObject=function(e){
if(e instanceof fn.LocalServerCommandRequest){
return e
}
let t=new fn.LocalServerCommandRequest
switch(e.type){
case"ACKNOWLEDGEMENT":
case 1:
t.type=1
break
case"IS_SAFEZONE_AVAILABLE":
case 6:
t.type=6
break
case"SWITCH_TO_SAFEZONE":
case 7:
t.type=7
break
case"GET_GUIDS":
case 10:
t.type=10
break
case"GET_PROPERTIES":
case 11:
t.type=11
break
case"IS_BANKING_SITE":
case 12:
t.type=12
break
case"IS_SAFEZONE_CUSTOM_SITE":
case 13:
t.type=13
break
case"SET_PROPERTIES":
case 14:
t.type=14
break
case"GET_VERSIONS":
case 15:
t.type=15
break
case"GET_BCU_DISTRIBUTION_ID":
case 16:
t.type=16
}
if(e.params){
if(!Array.isArray(e.params)){
throw TypeError(".LocalServerCommandRequest.params: array expected")
}
t.params=[]
for(let i=0;i<e.params.length;++i){
"string"==typeof e.params[i]?bn.base64.decode(e.params[i],t.params[i]=bn.newBuffer(bn.base64.length(e.params[i])),0):e.params[i].length&&(t.params[i]=e.params[i])
}
}
switch(e.browser){
case"INVALID":
case 0:
t.browser=0
break
case"IE":
case 1:
t.browser=1
break
case"FIREFOX":
case 2:
t.browser=2
break
case"CHROME":
case 3:
t.browser=3
break
case"OPERA":
case 4:
t.browser=4
break
case"SAFARI":
case 5:
t.browser=5
}
return t
},e.toObject=function(e,t){
t||(t={})
let i={}
if((t.arrays||t.defaults)&&(i.params=[]),t.defaults&&(i.type=t.enums===String?"ACKNOWLEDGEMENT":1,
i.browser=t.enums===String?"INVALID":0),
null!=e.type&&e.hasOwnProperty("type")&&(i.type=t.enums===String?fn.CommandType[e.type]:e.type),
e.params&&e.params.length){
i.params=[]
for(let a=0;a<e.params.length;++a){
i.params[a]=t.bytes===String?bn.base64.encode(e.params[a],0,e.params[a].length):t.bytes===Array?Array.prototype.slice.call(e.params[a]):e.params[a]
}
}
return null!=e.browser&&e.hasOwnProperty("browser")&&(i.browser=t.enums===String?fn.BrowserType[e.browser]:e.browser),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
})(),fn.LocalServerCommandResponse=(()=>{
function e(e){
if(this.result=[],e){
for(let t=Object.keys(e),i=0;i<t.length;++i){
null!=e[t[i]]&&(this[t[i]]=e[t[i]])
}
}
}
return e.prototype.result=bn.emptyArray,e.prototype.error=bn.newBuffer([]),e.create=function(t){
return new e(t)
},e.encode=function(e,t){
if(t||(t=kn.create()),null!=e.result&&e.result.length){
for(let i=0;i<e.result.length;++i){
t.uint32(10).bytes(e.result[i])
}
}
return null!=e.error&&e.hasOwnProperty("error")&&t.uint32(18).bytes(e.error),t
},
e.encodeDelimited=function(e,t){
return this.encode(e,t).ldelim()
},e.decode=function(e,t){
e instanceof hn||(e=hn.create(e))
let i=void 0===t?e.len:e.pos+t,a=new fn.LocalServerCommandResponse
for(;e.pos<i;){
let t=e.uint32()
switch(t>>>3){
case 1:
a.result&&a.result.length||(a.result=[]),a.result.push(e.bytes())
break
case 2:
a.error=e.bytes()
break
default:
e.skipType(7&t)
}
}
return a
},e.decodeDelimited=function(e){
return e instanceof hn||(e=new hn(e)),this.decode(e,e.uint32())
},e.verify=function(e){
if("object"!=typeof e||null===e){
return"object expected"
}
if(null!=e.result&&e.hasOwnProperty("result")){
if(!Array.isArray(e.result)){
return"result: array expected"
}
for(let t=0;t<e.result.length;++t){
if(!(e.result[t]&&"number"==typeof e.result[t].length||bn.isString(e.result[t]))){
return"result: buffer[] expected"
}
}
}
return null!=e.error&&e.hasOwnProperty("error")&&!(e.error&&"number"==typeof e.error.length||bn.isString(e.error))?"error: buffer expected":null
},
e.fromObject=function(e){
if(e instanceof fn.LocalServerCommandResponse){
return e
}
let t=new fn.LocalServerCommandResponse
if(e.result){
if(!Array.isArray(e.result)){
throw TypeError(".LocalServerCommandResponse.result: array expected")
}
t.result=[]
for(let i=0;i<e.result.length;++i){
"string"==typeof e.result[i]?bn.base64.decode(e.result[i],t.result[i]=bn.newBuffer(bn.base64.length(e.result[i])),0):e.result[i].length&&(t.result[i]=e.result[i])
}
}
return null!=e.error&&("string"==typeof e.error?bn.base64.decode(e.error,t.error=bn.newBuffer(bn.base64.length(e.error)),0):e.error.length&&(t.error=e.error)),
t
},e.toObject=function(e,t){
t||(t={})
let i={}
if((t.arrays||t.defaults)&&(i.result=[]),t.defaults&&(t.bytes===String?i.error="":(i.error=[],
t.bytes!==Array&&(i.error=bn.newBuffer(i.error)))),
e.result&&e.result.length){
i.result=[]
for(let a=0;a<e.result.length;++a){
i.result[a]=t.bytes===String?bn.base64.encode(e.result[a],0,e.result[a].length):t.bytes===Array?Array.prototype.slice.call(e.result[a]):e.result[a]
}
}
return null!=e.error&&e.hasOwnProperty("error")&&(i.error=t.bytes===String?bn.base64.encode(e.error,0,e.error.length):t.bytes===Array?Array.prototype.slice.call(e.error):e.error),
i
},e.prototype.toJSON=function(){
return this.constructor.toObject(this,un.util.toJSONOptions)
},e
})()
var yn=i(21),vn=i(22),wn=i.n(vn)
"object"==typeof window.browser&&(window.chrome=window.browser)
const jn=new class extends Ne{
constructor(){
super()
const e=((chrome.runtime.getManifest()||{}).name||"").indexOf("BETA")>-1
this.NUM_RATINGS=4,this.RATING_THRESHOLD_BAD=33,this.RATING_THRESHOLD_AVERAGE=66,
this.RATING_THRESHOLD_GOOD=100,
this.WEIGHT_THRESHOLD1=33,this.WEIGHT_THRESHOLD2=66,
this.WEIGHT_THRESHOLD3=100,this.WEIGHT0=0,
this.WEIGHT1=1,this.WEIGHT2=2,this.WEIGHT3=3,
this.REASON_BLOCKER_TEXT="reasonBlocker",
this.REASON_PHISHING_TEXT="reasonPhishing",
this.REASON_UNKNOWN_TEXT="reasonUnknownFullText",
this.RATING0_TEXT="noRating",this.RATING1_TEXT="ratingGood",
this.RATING2_TEXT="ratingAverage",
this.RATING3_TEXT="ratingBad",this.RATING4_TEXT="ratingVeryBad",
this.ICON_STRING0="icn_extensiontop.png",
this.ICON_STRING11="icn_extensiontop_green.png",
this.ICON_STRING12="icn_extensiontop_green.png",
this.ICON_STRING13="icn_extensiontop_green.png",
this.ICON_STRING21="icn_extensiontop_orange.png",
this.ICON_STRING22="icn_extensiontop_orange.png",
this.ICON_STRING23="icn_extensiontop_orange.png",
this.ICON_STRING31="icn_extensiontop_red.png",
this.ICON_STRING32="icn_extensiontop_red.png",
this.ICON_STRING33="icn_extensiontop_red.png",
this.TTL_DATE_FORMAT="yyyymmddHHMMss",
this.EV_TYPE_CLICK=0,this.EV_TYPE_TABFOCUS=3,
this.REMOVE_FLAG=!1,this.DEFAULTS={
LOG:!0,
USER:null,
THROTTLE:250,
TTL:3600,
CACHE:{
DOMAIN:"urlinfo",
WARNING:"warning",
URIS:"urlinfo-details",
RULES:"avastwrc_rules"
},
IGNORE_TABS:["^secure://","^chrome:\\/\\/","^chrome-extension:","^moz-extension:","^ms-browser-extension:","^chrome-devtools:\\/\\/","^https:\\/\\/chrome\\.google\\.com\\/webstore","^about:","^view-source:","^file:\\/\\/","^http(s)?:\\/\\/([\\w|\\d]+:[\\w|\\d]+@)?localhost","^data:text\\/html"],
URLINFO_MASK:{
webrep:1,
phishing:2,
blocker:4,
siteCorrect:8
},
WEBREP_FLAGS_MASK:{
shopping:1,
social:2,
news:4,
it:8,
corporate:16,
pornography:32,
violence:64,
gambling:128,
drugs:256,
illegal:512,
others:1024
},
PROPERTIES:["WebRepControl","WebRepPhishingFilter","WebRepSafeZone","WebRepNoPopups","SiteCorrect","SiteCorrectAutoRedirect"],
DNT_MOCKS_RULES:[{
pattern:"google-analytics\\.com\\/(ga\\.js)",
mock:"ga.js"
},{
pattern:"\\/(omniture|mbox|hbx|omniunih)(.*)?\\.js",
mock:"omniture.js"
},{
pattern:"adnxs\\.com",
mock:"empty.js"
},{
pattern:"gpt.js$",
mock:"gpt.js"
},{
pattern:"\\.googletagservices\\.com\\/tag\\/js\\/(.+)\\.js",
mock:"gpt.js"
}],
BURGER:{
production:"https://analytics.ff.avast.com/v4/receive/gpb",
stage:"https://analytics-stage.ff.avast.com/v4/receive/gpb"
},
SHEPHERD:{
production:"https://shepherd.ff.avast.com/?",
stage:"https://shepherd-preview.ff.avast.com/?"
},
IS_BETA:e,
SHEPHERD_ID:46,
VOTING:{
POSITIVE:100,
NEGATIVE:0
}
},this.CONFIG={
ENABLE_WEBREP_CONTROL:!0,
ENABLE_PHISHING_CONTROL:!0,
ENABLE_SAFEZONE_CONTROL:!1,
SHOW_POPUPS:!0,
ENABLE_SITECORRECT:!1,
ENABLE_SITECORRECT_AUTO:!1,
ENABLE_SERP:!0,
ENABLE_SERP_POPUP:!0,
URL_CONSENT:"true"===localStorage.getItem("URL_CONSENT"),
PRODUCT_ANALYSIS:!0,
LOGGING:!1,
VERSION:8,
GUID:null,
HWID:null,
LOCAL_ENABLED:!0,
CALLERID:1e4,
EXT_TYPE:1,
EXT_VER:0,
DATA_VER:0,
EDITION:0,
BRANDING_TYPE:0,
SEARCH_URL:"https://mysearch.avg.com/search?",
InstallDate:"",
WEBSHIELD:null,
BRAND:"",
AV_VERSION:"0",
OS:"",
OS_VERSION:"0"
},this.get=this.throttle(this.getUrlInfoUnthrottled,this.DEFAULTS.THROTTLE,this.getUrlInfoThrottled),
this.Browser={},
this.WRCUrlInfo=Pe,this.Utils=new De(this),this.Bitmask={
fromMask:function(e,t){
var i="Number"==typeof bitmaskavlue?this.Utils.BitWriter(e):e,a={}
for(var o in t){
i.hasBitmask(t[o])?a[o]=!0:a[o]=null
}
return a
}.bind(this),
toMask:function(e,t){
var i=this.Utils.BitWriter(0)
for(var a in e){
e[a]&&i.addBitmask(t[a])
}
return i
}.bind(this)
},this.Cache=new xe(this),this.TabReqCache=new We,this.Queue=new Le,
this.local=new Va(this)
}
throttle(e,t,i){
var a,o,r,n,s=0,l=function(){
s=new Date,r=null,n=e.apply(a,o)
}
return function(){
var c=new Date,u=t-(c-s)
return a=this,i&&r&&i.apply(a,o),o=arguments,u<=0?(clearTimeout(r),r=null,s=c,n=e.apply(a,o)):r||(r=setTimeout(l,u)),
n
}
}
}
jn.DEFAULTS.BRAND="AVAST",jn.DEFAULTS.BRAND_NAME="Avast",jn.DEFAULTS.PHISHING_REDIRECT="https://www.avast.com?utm_source=OnlineSecurity&utm_medium=redirect&utm_campaign=avast",
jn.PHISHING_REDIRECT=jn.DEFAULTS.PHISHING_REDIRECT,
jn.AVAST_UPGRADE_PAGE_URL="http://aos.avast.com/upgrade/",
jn.proto={
UrlInfo:mn.com.avast.cloud.webrep.proto,
AV:fn
}
const An=new class extends tn{
constructor(e){
super(),this.AvastWRC=e
}
init(){
const e=nn.a.create(Object.assign({},ln.a)),t=this._getBurgerOptions(),i=this._getBurgerServer()
this.client=new on.a(i,e,t)
}
_getBurgerServer(){
return this.AvastWRC.DEFAULTS.BURGER.production
}
_getBurgerOptions(){
const e=this._getIds(),t=this._getExtensionProductIdentity(),i=navigator&&navigator.language||"",a=this._getVersionApp()
return{
batchTimeoutMs:18e5,
localStorage:localStorage,
identity:e,
product:{
id:146,
lang:i,
version_app:a
},
license:{
type:"NO_LICENSE"
},
extensionProductIdentity:t,
extensionProduct:{
version_app:this.AvastWRC.CONFIG.AV_VERSION
},
platform:{
build:this._getOSbuild()+""
},
caller_id:this.AvastWRC.CONFIG.CALLERID,
settings:{
consent:{
third_party_analytics:this.AvastWRC.CONFIG.COMMUNITY_IQ
}
}
}
}
_getVersionApp(){
const e=this.AvastWRC.CONFIG.VERSION.split(".")
return e.length=3,e.join(".")
}
_getIds(){
return{
guid:this.AvastWRC.CONFIG.PLG_GUID,
hwid:this.AvastWRC.CONFIG.HWID
}
}
_getExtensionProductIdentity(){
return{
guid:this.AvastWRC.CONFIG.GUID,
hwid:this.AvastWRC.CONFIG.HWID
}
}
_getOSbuild(){
let e="string"==typeof this.AvastWRC.CONFIG.OS_VERSION&&this.AvastWRC.CONFIG.OS_VERSION.match(/^([0-9]+).([0-9]+).([0-9]+)$/)
return e?parseInt(e[3]):null
}
_updateClient(){
const e=this._getIds(),t=this._getExtensionProductIdentity()
this.client.updateIdentity(e).updatePlatform({
build:this._getOSbuild()+""
}).updateProduct({
version_app:this._getVersionApp()
}).updateExtensionProduct({
version_app:this.AvastWRC.CONFIG.AV_VERSION
}).updateExtensionProductIdentity(t).updateSettings({
consent:{
third_party_analytics:this.AvastWRC.CONFIG.COMMUNITY_IQ
}
})
}
sendHB(){
const e=performance&&performance.now()||-1
this._updateClient(),this.client.send.heartbeat(e),this.log("❤️ Sending heartbeat"),
this.client.flush().then(()=>this.log("Heartbeat flushed")).catch(e=>this.log("ERROR Heartbeat flush",e))
}
sendWebshield(e,t,i,a,o,r,n){
this._updateClient(),this.client.send.aosWebshieldScanning({
webshield_setting:e,
request_domain:t,
request_durations:{
headers_received:i,
response_started:a,
request_completed:o,
dom_loaded:r,
page_loaded:n
}
}),this.log("webshield data:",[e,t,i,a,o,r,n])
}
install(e=1){
this._updateClient(),this.client.send.install(e),this.log("Install Event sent, new version:",this.AvastWRC.CONFIG.VERSION)
}
productUpdate(){
const e=chrome.runtime.getManifest().version
this._updateClient(),this.client.send.update({
version:{
version_app:e
}
}),this.log("Update Event sent, version_app:",e)
}
preferences(e){
this._updateClient(),this.client.send.preferences(e),this.log("Preferences Sent",e)
}
click(e,t,i){
this.AvastWRC.CONFIG.PRODUCT_ANALYSIS&&(this._updateClient(),this.client.send.activity.click({
object:{
category:e,
action:t,
label:i
}
}),this.log("Activity click","Category: "+e+", Action: "+t+", Label: "+i))
}
view(e,t){
this.AvastWRC.CONFIG.PRODUCT_ANALYSIS&&(this._updateClient(),this.client.send.activity.view({
object:{
view:e
}
}),this.log("Activity view:",e))
}
vote(e,t){
this._updateClient()
const i=e.split("?")[0]
this.client.send.vote(i,t),this.log("Vote sent","Rating: "+t+", url: "+i)
}
log(e,t=""){}
}(jn)
jn.bal=new class{
constructor(e,t={}){
this.AvastWRC=e,this.sender=t,this.DEFAULT_EDITION=0,this.EDITION_FEATURES=[{
applicationEvents:!0,
newUrlInfoVersion:!0,
safePrice:!0
},{
applicationEvents:!1,
newUrlInfoVersion:!0,
safePrice:!1
}],this.CORE_DEFAULT_SETTINGS={
current:{
callerId:0
}
},this.localStorage=null,this.back,this._forcedEdition=null,this.RATING_LEVEL=["Undefined","Positive","Average","Bad"],
this.RATING_COLOR=["#767683","#0CB754","#F1C80B","#F5203E"],
this.AOS_URLS_ENABLED_URLS=/^http[s]?\:\/\/aos.avast.com(\:\d+)?\/upgrade(\/)?/,
this.AOS_URLS_ACTIONS={
settings:{
message:"openSettings",
data:{}
}
},this.EXT_ABOS_ID=1,this.brandingType=0,this._bal_modules=[],this._core_modules=[],
this._bootstrap_modules=[],
this._ee=new Mr({
wildcard:!0,
delimiter:"."
}),this.browser="",this.cache={
map:{},
add:function(e,t,i){
return(i?this.map[i]:this.map)[e]=t,t
},
get:function(e,t){
return(t?this.map[t]:this.map)[e]
},
contains:function(e,t){
return(t?this.map[t]:this.map).hasOwnProperty(e)
},
delete:function(e,t){
delete(t?this.map[t]:this.map)[e]
},
reset:function(e){
this.map[e]={}
}
},this.storage={
add:function(e,t){
return localStorage.setItem(e,JSON.stringify(t)),t
},
get:function(e,t){
var i=localStorage.getItem(e)
try{
return JSON.parse(i)
}catch(e){
return{}
}
},
contains:function(e,t){
return localStorage.hasOwnProperty(e)
},
delete:function(e,t){
delete localStorage[e]
}
},this.WebRep=new Or(this.AvastWRC),this.Core=new Er(this.AvastWRC,this),this.utils=new Ir(this.AvastWRC),
this.aos=new xr(this.AvastWRC,this),
this.DNT=new Vr(this.AvastWRC,this),this.search=new qr(this.AvastWRC,this),
Ja.runtime.onInstalled.addListener(this._onInstalledListener.bind(this))
}
_onInstalledListener(e={}){
const t="install"===e.reason,i="update"===e.reason,a=this.AvastWRC.Utils.getBrowserInfo().isFirefox(),o=null!==localStorage.getItem("URL_CONSENT")
a&&(t||i&&!o)?(this.AvastWRC.CONFIG.URL_CONSENT=!1,this.AvastWRC.bs.openAfterInstallPage()):o||(this.AvastWRC.CONFIG.URL_CONSENT=!0),
!1===this.AvastWRC.CONFIG.URL_CONSENT&&Ja.browserAction.setIcon({
path:"common/ui/icons/icon-danger.png"
}),localStorage.setItem("URL_CONSENT",""+this.AvastWRC.CONFIG.URL_CONSENT),
setTimeout(()=>{
const a=this.AvastWRC.bs.getVersion()
t?(this.sender.install(),this._setAfterInstallShepherdSettings()):i&&e.previousVersion!==a&&(this.sender.productUpdate(),
this.DNT.reloadLocalDntRules(),
this.AvastWRC.CONFIG.VERSION=a)
},5e3)
}
registerModule(e){
"function"==typeof e.bootstrap?this._bootstrap_modules.push(e):this._core_modules.push(e)
}
_setAfterInstallShepherdSettings(){
const e=this.AvastWRC.Shepherd.getDefaultSettings(),t=this.AvastWRC.bal.settings.get()
if(!(this.AvastWRC.Query.CONST.LOCAL_PORT>0)&&e.hasOwnProperty("dataSharing")){
const i=t.features.communityIQ
t.features.communityIQ=e.dataSharing,i!==e.dataSharing&&this.AvastWRC.bal.featureSettingChanged("communityIQ",i,e.dataSharing)
}
this.AvastWRC.bal.settings.set(t)
}
registerEvents(e,t){
"function"==typeof e&&e.call(t,this._ee)
}
emitEvent(){
this._ee.emit.apply(this._ee,arguments)
}
trace(e){
$a(this.modules,t=>{
"function"==typeof t.trace&&t.trace(e)
})
}
getDateAsString(){
var e=new Date
return e.getFullYear()+"/"+e.getMonth()+"/"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()
}
init(e,t,i,a){
this._forcedEdition=a,this.EDITION_FEATURES=ke(i)?jo(this.EDITION_FEATURES,i):Sa(this.EDITION_FEATURES,e=>jo(e,i)),
this.back=e,
this.localStorage=t,this.initEdition(null==this._forcedEdition?this.DEFAULT_EDITION:this._forcedEdition)
var o=this.getDefaultSettings(this._core_modules)
return this.settings=this.troughStorage("settings",o),this.AvastWRC.getStorageAsync("InstallDate").then(function(e){
this.AvastWRC.CONFIG.InstallDate=e
}.bind(this)).catch(e=>{
this.AvastWRC.CONFIG.InstallDate=this.getDateAsString(),
this.AvastWRC.setStorage("InstallDate",this.AvastWRC.CONFIG.InstallDate)
}),this.AvastWRC.AvastConfig.get(e=>{
if("string"!=typeof e&&(e=this.AvastWRC.getWindowStorage("AvastConfig")),
"string"==typeof e){
const i=JSON.parse(e)
if(i){
this.AvastWRC.CONFIG.GUID=i.guid,this.AvastWRC.CONFIG.HWID=i.hwid,i.plg_guid?this.AvastWRC.CONFIG.PLG_GUID=i.plg_guid:null!=i.guid&&null!=i.hwid?this.AvastWRC.CONFIG.PLG_GUID=this.utils.getRandomUID():null!=i.guid&&null==i.hwid&&(this.AvastWRC.CONFIG.PLG_GUID=i.guid,
this.AvastWRC.CONFIG.GUID=null)
var t={
guid:this.AvastWRC.CONFIG.GUID,
plg_guid:this.AvastWRC.CONFIG.PLG_GUID,
hwid:this.AvastWRC.CONFIG.HWID
}
this.AvastWRC.AvastConfig.set(t)
}
}else{
this.AvastWRC.CONFIG.PLG_GUID=this.AvastWRC.bal.utils.getRandomUID()
var i={
guid:this.AvastWRC.CONFIG.GUID,
plg_guid:this.AvastWRC.CONFIG.PLG_GUID,
hwid:this.AvastWRC.CONFIG.HWID
}
this.AvastWRC.AvastConfig.set(i)
}
}),Gr.fcall(()=>this._core_modules).then(this.initModuleSettings.bind(this)).then(this.initModules.bind(this)).then(()=>this.AvastWRC.local.connect(this)).get("avastEdition").then(this.getCurrentEdition.bind(this)).then(this.initEdition.bind(this)).fail((function(e){})),
ke(i)?this.brandingType=i[0].brandingType:this.brandingType=i.brandingType,
this
}
initEdition(e){
var t=this.EDITION_FEATURES[e]||e
return this.AvastWRC.CONFIG.EDITION=e,this.AvastWRC.CONFIG.FEATURES=t,this.reqUrlInfoServices=t.reqUrlInfoServices,
this.AvastWRC.CONFIG.CALLERID=t.callerId,
this.AvastWRC.CONFIG.EXT_TYPE=t.extType,
this.AvastWRC.CONFIG.EXT_VER=t.extVer,this.AvastWRC.CONFIG.DATA_VER=t.dataVer,
this.AvastWRC.CONFIG.SHOW_NEW_VERSION=t.showNewVersion||!1,
Gr.fcall((function(){
return e
}))
}
bootstrapInit(e){
var t=this.EDITION_FEATURES[e],i=To(this._bootstrap_modules,(function(e,i){
var a=i.bootstrap(t)
return a&&e.push(a),e
}),[],this)
return Gr.fcall((function(){
return i
}))
}
initModules(e){
let t=[]
return $a(e,e=>{
if(e&&"function"==typeof e.init){
let i=e.init(this)
i&&"function"==typeof i.then&&t.push(i)
}
}),new Promise(i=>{
Promise.all(t).then(()=>{
$a(e,e=>{
e&&("function"==typeof e.registerModuleListeners&&e.registerModuleListeners(this._ee),
this._bal_modules.push(e))
}),i(e)
})
})
}
initModuleSettings(e){
return new Promise(t=>{
this.AvastWRC.getStorage("settings",i=>{
if(i){
i.current.callerId<this.AvastWRC.CONFIG.CALLERID&&(i.current.callerId=this.AvastWRC.CONFIG.CALLERID),
this.settings.set(i),
this.removeOldSettings()
var a=this.AvastWRC.bal.getDefaultSettings(e)
this.mergeInSettings(a),this.updateOldSettings(),t(e)
}else{
var o=this.localStorage.getItem("settings")
if(o){
var r=JSON.parse(o)
r.current.callerId<this.AvastWRC.CONFIG.CALLERID&&(r.current.callerId=this.AvastWRC.CONFIG.CALLERID),
this.settings.set(r),
delete localStorage.settings
}else{
(a=this.getDefaultSettings(e))&&a.current&&a.current.callerId&&a.current.callerId<this.AvastWRC.CONFIG.CALLERID&&(a.current.callerId=this.AvastWRC.CONFIG.CALLERID),
this.mergeInSettings(a)
}
this.updateOldSettings(),t(e)
}
})
})
}
initLocalService(e){
$a(this._bal_modules,t=>{
"function"==typeof t.initLocalService&&t.initLocalService(e)
})
}
mergeInSettings(e){
var t,i,a=this.settings.get()
if(a){
for(t in e){
if(void 0===a[t]){
a[t]=e[t]
}else{
for(i in e[t]){
void 0===a[t][i]&&(a[t][i]=e[t][i])
}
}
}
}else{
this.settings.set(e)
}
this.settings.set(a)
}
updateOldSettings(){
const e=this.settings.get()
this.AvastWRC.CONFIG.COMMUNITY_IQ=e.features.communityIQ,this.AvastWRC.CONFIG.PRODUCT_ANALYSIS=e.features.productAnalysis,
this.AvastWRC.CONFIG.ENABLE_SERP=e.features.serp,
this.AvastWRC.CONFIG.ENABLE_SERP_POPUP=e.features.serpPopup,
void 0!==e.features.safeZone&&(e.features.secureBrowser=e.features.safeZone,
delete e.features.safeZone)
}
removeOldSettings(){
var e=this.settings.get()
e&&(e.features&&(void 0!==e.features.siteCorrect&&delete e.features.siteCorrect,
void 0!==e.features.siteCorrectAuto&&delete e.features.siteCorrectAuto),
void 0!==e.siteCorrect&&delete e.siteCorrect),
this.settings.set(e)
}
getCurrentEdition(e){
var t=Gr.defer()
if(null==this._forcedEdition){
var i=this.settings.get(),a=i.current.edition
null!=e?(a&&a===e||(i.current.edition=e,this.settings.set(i)),t.resolve(e)):t.resolve(a||this.DEFAULT_EDITION)
}else{
t.resolve(this._forcedEdition)
}
return t.promise
}
featureSettingChanged(e,t,i){
this._ee.emit("featureChanged."+e,i,t)
}
hookOnFeatureChange(e,t){
this._ee.on("featureChanged."+e,t),t(this.settings.get().features[e])
}
getDefaultSettings(e){
let t=Tr(this.CORE_DEFAULT_SETTINGS)
return To(e,(e,t)=>{
if(void 0!==t&&"function"==typeof t.getModuleDefaultSettings){
var i=t.getModuleDefaultSettings()
i&&(e=jo(e,i))
}
return e
},t)
}
troughStorage(e,t){
var i=null,a=e
return{
get:function(){
return i||(i=t)
},
set:function(e){
i=e,this.AvastWRC.setStorage(a,i)
}.bind(this)
}
}
isFirefox(){
return"Firefox"==this.browser
}
getHostFromUrl(e){
if(e){
var t=e.toLowerCase()
if(0==t.toLowerCase().indexOf("http")&&0!=t.toLowerCase().indexOf("chrome")&&0!=t.toLowerCase().indexOf("data")&&"about:newtab"!=t.toLowerCase()&&"about:blank"!=t.toLowerCase()){
var i=e.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/)
return i.length>2?i[2]:void 0
}
}
}
getDomainFromHost(e){
if(e){
let t=Fr.parse(e)
if(t.domain){
return t.domain
}
}
}
getDomainFromUrl(e){
return this.getDomainFromHost(this.getHostFromUrl(e))
}
setLocalStorage(e){
localStorage=e
}
getBrowserLangs(){
const e=Ja.i18n.getUILanguage(),t=e.substring(0,2)
return{
browserLang:e,
browserLang2:t
}
}
setUninstallURL(e=""){
Ja.runtime.setUninstallURL(e,()=>void 0)
}
settingFeatureSet(e,t,i){
let a=!1,o=t
switch(e){
case"dntWebAnalytics":
a="WebAnalytics"
break
case"dntSocial":
a="Social"
break
case"dntAdTracking":
a="AdTracking"
break
case"dntOthers":
a="Others"
}
if(a){
let e=this.DNT,t=e.blockList.get()
if(a&&(t.categories[a]=o,!o)){
let i=e.trackersByCategory[a]
for(let e in i){
let a=i[e]
!0===t.trackers[a]&&delete t.trackers[a]
}
}
e.blockList.set(t)
}
let r=this.settings.get(),n=r.features[e]
return r.features[e]=t,n!==t&&this.featureSettingChanged(e,n,t),this.settings.set(r),
this.updateOldSettings(),
this.emitEvent("analytics.settingFeature",i,e,t),!0
}
}(jn,An),jn.tracking=new class{
constructor(e,t={}){
this.sender=t,this.AvastWRC=e,this.SETTING_FEATURE_MAP={
serp:{
name:"searchEngine",
category:"security"
},
serpPopup:{
name:"searchPopups",
category:"security"
},
secureBrowser:{
name:"SafeZone",
category:"security"
},
dntBadge:{
name:"dntBadge",
category:"privacy"
},
dntAutoBlock:{
name:"dnt",
category:"privacy"
},
communityIQ:{
name:"dataSharing",
category:"privacy"
},
dntSocial:{
name:"dntSocial",
category:"privacy"
},
dntAdTracking:{
name:"dntAdTracking",
category:"privacy"
},
dntWebAnalytics:{
name:"dntWebAnalytics",
category:"privacy"
},
dntOthers:{
name:"dntOthers",
category:"privacy"
},
productAnalysis:{
name:"productAnalysis",
category:"privacy"
},
urlConsent:{
name:"urlConsent",
category:"privacy"
}
}
}
_getPreferencesList(){
const e=(this.AvastWRC.bal.settings.get()||{}).features||{},t=[]
for(const i in this.SETTING_FEATURE_MAP){
if(this.SETTING_FEATURE_MAP.hasOwnProperty(i)&&e.hasOwnProperty(i)){
const a=Object.assign({},this.SETTING_FEATURE_MAP[i],{
state:""+e[i]
})
t.push(a)
}
}
return t
}
registerModuleListeners(e){
const t=["Others","WebAnalytics","AdTracking","Social"]
e.on("analytics.settingFeature",(e,t,i)=>{
const a=this._getPreferencesList()
let o="settings",r=(i?"check.":"uncheck.")+(this.SETTING_FEATURE_MAP[t]||{
name:t,
category:"unknown"
}).name
"globalblock"===e?(o="globalblock",r=i?"disable.trackers":"enable.trackers"):["MainUi","Consent Page"].indexOf(e)>-1&&(o=e,
r=i?"consent.agree":"consent.disagree"),
this.sender.click(o,r),this.sender.preferences(a)
}),e.on("analytics.dntGroup",(e,i)=>{
if(-1===t.indexOf(e)){
return
}
const a=(i?"blockAll.":"allowAll.")+e,o=this._getPreferencesList()
this.sender.click("aos setting",a),this.sender.preferences(o)
}),e.on("rated.positive",e=>{
this.sender.click("webreputation","rated.positive"),
this.sender.vote(e,this.AvastWRC.DEFAULTS.VOTING.POSITIVE)
}),e.on("rated.negative",e=>{
this.sender.click("webreputation","rated.negative"),
this.sender.vote(e,this.AvastWRC.DEFAULTS.VOTING.NEGATIVE)
}),e.on("analytics.dntTracker",(e,t,i)=>{
const a=i?"block":"allow"
this.sender.click(a,e,t)
}),e.on("message.sidebarShow",()=>{
this.sender.view("main panel")
}),e.on("track.settingsOpened",()=>{
this.sender.view("settings")
}),e.on("security.phishing.open",e=>{
this.sender.view("phishing",e)
}),e.on("security.malware.open",e=>{
this.sender.view("malware",e)
})
}
}(jn,An),jn.bal.aos.SZ=new class{
constructor(e,t){
this.AvastWRC=e,this.bal=t,this.config={
safezoneAvailable:!1
}
}
initLocalService(e){
this.AvastWRC.CONFIG.LOCAL_ENABLED&&this.AvastWRC.local.isSafeZoneAvailable().then(function(e){
const t=this.AvastWRC.bal.settings.get(),i="yes"===e.result[0]
this.config.safezoneAvailable=i,this.AvastWRC.bal.settings.set(t)
}.bind(this)).done()
}
tabSafeZone(e,t,i){
this.AvastWRC.CONFIG.LOCAL_ENABLED&&this.config.safezoneAvailable&&this.AvastWRC.bal.settings.get().features.secureBrowser&&this.AvastWRC.CONFIG.EXT_TYPE!=this.AvastWRC.EXT_TYPE_WTU&&this.safeZoneCheck(e,i,"IS_BANKING_SITE")
}
safeZoneCheck(e,t,i){
var a=this.AvastWRC.bal.settings.get(),o=this.AvastWRC.bal.getHostFromUrl(e)
void 0!==this.AvastWRC.Utils.getProperties(a,"safeZone","declined",i)&&this.AvastWRC.Utils.getProperties(a,"safeZone","declined",i)||this.AvastWRC.Utils.getProperties(a,"safeZone","declined",o)||new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:i,
value:e,
callback:function(a){
"yes"===a.result[0]?this.tabSafeZoneShow(e,t,i):"IS_BANKING_SITE"===i&&this.safeZoneCheck(e,t,"IS_SAFEZONE_CUSTOM_SITE")
}.bind(this)
})
}
tabSafeZoneShow(e,t,i){
var a="IS_BANKING_SITE"==i?this.AvastWRC.bs.getLocalizedString("aosSafeZoneMsgDescBank4"):"IS_VIDEO_DOWNLOADER"==i?this.AvastWRC.bs.getLocalizedString("aosSafeZoneMsgDescVideo"):"IS_SHOPPING_SITE"==i?this.AvastWRC.bs.getLocalizedString("aosSafeZoneMsgDescShopping"):"IS_AD_TRACKER"==i?this.AvastWRC.bs.getLocalizedString("aosSafeZoneMsgDescAds"):"",o="IS_BANKING_SITE"==i?this.AvastWRC.bs.getLocalizedString("aosSafeZoneButtonMsgYes4"):"IS_VIDEO_DOWNLOADER"==i||"IS_SHOPPING_SITE"==i||"IS_AD_TRACKER"==i?this.AvastWRC.bs.getLocalizedString("aosSafeZoneButtonMsgOpen"):"",r={
message:"showTopBar",
data:{
icon:this.AvastWRC.bs.getLocalImageURL(this.AvastWRC.CONFIG.EXT_TYPE===this.AvastWRC.EXT_TYPE_AOS_SZ?"icon-warning.png":"icon-avast.png"),
iconInfo:this.AvastWRC.bs.getLocalImageURL("icon-info.png"),
iconCross:this.AvastWRC.bs.getLocalImageURL("icon-cross.png"),
emptyCheckbox:this.AvastWRC.bs.getLocalImageURL("checkbox-1.png"),
filledCheckbox:this.AvastWRC.bs.getLocalImageURL("checkbox-2.png"),
text:a,
buttonText:o,
hide:this.AvastWRC.bs.getLocalizedString("aosSafeZoneButtonMsgNotNow").toUpperCase(),
declineText:this.AvastWRC.bs.getLocalizedString("aosSafeZoneMsgDontShow2"),
infoText:this.AvastWRC.bs.getLocalizedString("aosBankModeName")+this.AvastWRC.bs.getLocalizedString(this.AvastWRC.CONFIG.EXT_TYPE===this.AvastWRC.EXT_TYPE_AOS_SZ?"aosBankModeInfoMessageAvastBrowser":"aosBankModeInfoMsgNonAvastBrowserUser"),
neverLight:this.AvastWRC.bs.getLocalImageURL("orange-light.png"),
neverTitle:this.AvastWRC.bs.getLocalizedString("aosSafeZoneNeverTitle"),
neverMsg1:this.AvastWRC.bs.getLocalizedString("aosSafeZoneNeverMsg1"),
neverMsg2:this.AvastWRC.bs.getLocalizedString("aosSafeZoneNeverMsg2"),
neverButton:this.AvastWRC.bs.getLocalizedString("aosSafeZoneNeverButton"),
neverLink:this.AvastWRC.bs.getLocalizedString("aosSafeZoneNeverLink")
}
}
this.AvastWRC.TabReqCache.set(this.AvastWRC.bs.getTabId(t),"safeZone_promo_type",i),
this.AvastWRC.bs.accessContent(t,r)
}
switchToSafeZone(e){
new this.AvastWRC.Query.Avast(this.AvastWRC,{
type:"SWITCH_TO_SAFEZONE",
value:e,
callback:function(e){}
})
}
modifySettingsItem(e,t,i){
return"secureBrowser"===e&&(i.enabled=this.config.safezoneAvailable,
i.show=this.AvastWRC.Utils.getBrowserInfo().isWindows()),
i
}
registerModuleListeners(e){
e.on("urlInfo.response",this.tabSafeZone.bind(this)),
e.on("message.messageBoxFeedback.safeZone",(e,t)=>{
if(e.ok){
this.switchToSafeZone(e.url_from)
}else{
var i=this.AvastWRC.bal.getHostFromUrl(e.url_from),a=this.AvastWRC.bal.settings.get()
if(e.decline){
this.AvastWRC.Utils.setProperties(a,"safeZone","declined",i,!0),this.AvastWRC.bal.settings.set(a)
}else{
var o=this.AvastWRC.TabReqCache.get(this.AvastWRC.bs.getTabId(t),"safeZone_promo_type")
this.AvastWRC.Utils.setProperties(a,"safeZone","declined",o,!0),this.AvastWRC.bal.settings.set(a)
}
}
})
}
}(jn,jn.bal),jn.Shepherd=new class{
constructor(e){
this.AvastWRC=e,this.rules={
expireTime:170926e9
}
}
init(){
this.restore(e=>{
e.isValidTtl()||e.load()
})
}
restore(e){
this.AvastWRC.getStorage("Shepherd",t=>{
this.rules=JSON.parse(t),this.AvastWRC.bal.emitEvent("shepherd.updated",this.rules),
e(this)
})
}
load(){
this.AvastWRC.Query.Shepherd((e,t)=>{
e.expireTime=this.getExpirationTime(t),this.rules=e,
this.save()
},e=>{
this.rules=this.rules||{},this.rules.expireTime=this.getExpirationTime(3600),
this.save()
})
}
getExpirationTime(e){
return Date.now()/1e3+parseInt(e)
}
isValidTtl(){
return(this.rules&&this.rules.expireTime||0)>Date.now()/1e3
}
save(){
this.AvastWRC.setStorage("Shepherd",JSON.stringify(this.rules)),this.AvastWRC.bal.emitEvent("shepherd.updated",this.rules)
}
getSerpRule(e){
if(this.isValidTtl()||this.load(),!this.rules||!this.rules.SERP){
return{}
}
var t=this.rules.SERP.rules?this.rules.SERP.rules:[]
for(var i of t){
if(i.url&&e.search(i.url)>-1){
return i
}
}
return{}
}
getBurgerRule(){
return this.isValidTtl()||this.load(),this.rules&&this.rules.Burger?this.rules.Burger:{}
}
getWebshieldRule(e){
if(this.isValidTtl()||this.load(),!this.rules||!this.rules.webShield){
return{}
}
let t=this.rules.webShield.trackDomains?this.rules.webShield.trackDomains:[]
return t[e]?t[e]:t["*"]?t["*"]:{
flags:0
}
}
getDefaultSettings(){
return this.isValidTtl()||this.load(),this.rules&&this.rules.settings&&this.rules.settings.default||{}
}
}(jn),jn.Query=new class{
constructor(e,t){
this.AvastWRC=e,this.HTTP_SERVER="http://ui.ff.avast.com",this.HTTP_PORT="80",
this.HTTPS_SERVER="https://uib.ff.avast.com",
this.HTTPS_PORT="443",this.USE_HTTPS=!0,
this.CONST={
HEADERS:{
"Content-Type":"application/octet-stream"
},
SERVER:this.USE_HTTPS?this.HTTPS_SERVER:this.HTTP_SERVER,
PORT:this.USE_HTTPS?this.HTTPS_PORT:this.HTTP_PORT,
HTTPS_SERVER:"https://uib.ff.avast.com:443",
VOTE_SERVER:"https://uiv.ff.avast.com:8443/v3/urlVote",
TA_SERVER:"http://ta.ff.avast.com/F/",
URLINFO:"urlinfo",
URLINFO_V4:"v4/urlinfo",
URLINFO_V5:"v5/urlinfo",
LOCAL_PORTS:[27275,18821,7754],
LOCAL_PORT:null,
LOCAL_TOKEN:null,
LOCAL_TIMESTAMP:null,
GAMIFICATION_SERVER:"https://gamification.ff.avast.com:8743/receiver"
},this.Avast=Kr,
this.UrlInfo=t
}
Shepherd(e,t){
let i=this.AvastWRC.DEFAULTS.SHEPHERD.production
const a=this.AvastWRC.CONFIG.GUID||this.AvastWRC.CONFIG.PLG_GUID||"",o=(this.AvastWRC.CONFIG.VERSION||"").split(".")
i+="p_pro="+this.AvastWRC.DEFAULTS.SHEPHERD_ID+"&",""!==a&&(i+="p_hid="+a+"&"),i+="p_vep="+o[0]+"&",
i+="p_ves="+o[1]+"&",
i+="p_vbd="+o[2]
const r=new XMLHttpRequest
r.open("GET",i,!0),r.onreadystatechange=function(){
let i,a
if(4===r.readyState){
if(i=r.status,200===i){
var o=r.getResponseHeader("ttl")
a=JSON.parse(r.responseText),e&&e(a,o)
}else{
t&&t(i)
}
}
},r.send()
}
}(jn,class extends Yr{
constructor(e,t){
super(e),e.CONFIG.URL_CONSENT&&("string"==typeof t&&(t={
url:t
}),this.options=Object.assign({
url:null,
server:this.AvastWRC.Query.CONST.SERVER+":"+this.AvastWRC.Query.CONST.PORT+"/"+this.AvastWRC.Query.CONST.URLINFO_V5,
method:"post",
callback:()=>{},
go:!0
},t),this.request=null,this.response=null,this.proto=this.AvastWRC.proto.UrlInfo,
this.init())
}
getBuffer(e){
return this.proto.UrlInfoRequest.encode(e).finish()
}
callback(e){
const t=this.proto.UrlInfoResponse.decode(new Uint8Array(e)),i=1===t.urlInfo.length,a=[]
for(let e=0;e<t.urlInfo.length;e+=1){
a.push(new this.AvastWRC.WRCUrlInfo(this.AvastWRC,this.options.url[e],t.urlInfo[e],!i))
}
this.options.callback(a),this.completed=!0
}
messageClientMinimal(){
const e=this.proto.Client.create()
return e.browserExtInfo=this.proto.BrowserExtInfo.create(),e.browserExtInfo.extensionVersion=this.AvastWRC.CONFIG.EXT_VER,
e
}
message(){
return this.request=this.proto.UrlInfoRequest.create(),this.request.callerId=this.AvastWRC.CONFIG.CALLERID,
this.request.dnl=!0,
this.request.client=this.messageClientMinimal(),this.options.url.forEach(e=>this.request.uri.push(e)),
this
}
}),jn.bs=new class extends Qr{
constructor(e){
super(e),this.tabsMessagesBuffer={},this.MAX_TAB_MESSAGES=10
}
getVersion(){
return chrome.runtime.getManifest().version
}
getVersionAsInt(){
const e=this.getVersion().split(".")
let t=1e6*e[0]
return t+=1e4*e[1],t+=1*e[2],t
}
getActiveTab(e){
chrome.tabs.query({
active:!0,
lastFocusedWindow:!0
},t=>{
t&&t.length>0&&e(t[0])
})
}
getTabs(e){
chrome.tabs.query({},(function(t){
e(t)
}))
}
retrieveRequestHeaderValue(e,t){
if(e){
for(var i=0;i<e.length;++i){
if(e[i].name===t){
return e[i].value
}
}
}
return null
}
getLocalizedString(e,t){
if(chrome.i18n&&chrome.i18n.getMessage){
var i=chrome.i18n.getMessage(e)
return t?this.AvastWRC.Utils.aosFormat(i,t):i
}
return""
}
tabRedirect(e,t){
this.tabUpdate(e.id,{
url:t
})
}
tabUpdate(e,t){
Ja.tabs.update(e,t)
}
getTabId(e){
return e.id
}
messageTab(e,t){
!!this.AvastWRC.initedTabs[e.id]||!1?Ja.tabs.sendMessage(e.id,t):this._putMessageInBuffer(e.id,t)
}
flushTabMessages(e){
let t=this.tabsMessagesBuffer[e.id]||[]
if(0===t.length){
return
}
let i=t.shift()
for(;i;){
this.messageTab(e,i),i=t.shift()
}
}
_putMessageInBuffer(e,t){
this.tabsMessagesBuffer[e]=this.tabsMessagesBuffer[e]||[],
this.tabsMessagesBuffer[e].push(t),
this.tabsMessagesBuffer[e].length>this.MAX_TAB_MESSAGES&&delete this.tabsMessagesBuffer[e]
}
clearTabMessages(e){
this.tabsMessagesBuffer[e]=[]
}
getLocalImageURL(e){
return chrome.extension.getURL("common/ui/icons/"+e)
}
getLocalResourceURL(e){
return Ja.extension.getURL(e)
}
checkUrl(e){
if(""==e){
return!1
}
for(var t=0,i=this.AvastWRC.DEFAULTS.IGNORE_TABS.length;t<i;t++){
var a=new RegExp(this.AvastWRC.DEFAULTS.IGNORE_TABS[t],"i")
if(e.match(a)){
return!1
}
}
return!0
}
tabExists(e,t){
chrome.tabs.query({},i=>{
i.find(t=>t.id===e)&&t.call(this)
})
}
tabExistsPromise(e){
return new Promise(t=>{
chrome.tabs.query({},i=>{
const a=i.find(t=>t.id===e)
a&&t(a)
})
})
}
tabNotExists(e,t){
chrome.tabs.query({},i=>{
i.find(t=>t.id===e)||"function"!=typeof t||t.call(this)
})
}
openAfterInstallPage(){
const e={
type:"afterInstallPage",
brandName:this.AvastWRC.DEFAULTS.BRAND_NAME
},t=this.getLocalResourceURL("common/messagebox.html?data="+btoa(JSON.stringify(e)))
this.openInNewTab(t)
}
openInNewTab(e){
Ja.tabs.create({
url:e
})
}
closeTab(e,t){
Ja.tabs.remove(e.id,t)
}
}(jn),jn.bs.icon=new class{
constructor(e){
this.AvastWRC=e
}
show(e){
this.AvastWRC.Utils.getBrowserInfo().isEdge()?chrome.browserAction.enable(e):chrome.browserAction.enable(e,()=>{
chrome.runtime.lastError
})
}
hide(e){
this.AvastWRC.Utils.getBrowserInfo().isEdge()?chrome.browserAction.disable(e):chrome.browserAction.disable(e,()=>{
chrome.runtime.lastError
})
}
showText(e,t,i){
this.AvastWRC.bs.tabExistsPromise(e).then(()=>{
const a=chrome.browserAction||{}
a.setBadgeText&&a.setBadgeText({
tabId:e,
text:t||""
}),this._setBadgeColor(e),this._setBadgeBgColor(e,i)
})
}
_setBadgeColor(e){
"function"==typeof chrome.browserAction.setBadgeTextColor&&chrome.browserAction.setBadgeTextColor({
tabId:e,
color:"#FFFFFF"
})
}
_setBadgeBgColor(e,t){
t&&chrome.browserAction.setBadgeBackgroundColor({
tabId:e,
color:t
})
}
setTitle(e,t){
chrome.browserAction.setTitle({
tabId:e,
title:t||""
})
}
setIcon(e,t){
chrome.browserAction.setIcon({
tabId:e,
path:t
},function(){
chrome.runtime.lastError
}.bind(this))
}
init(e){
e.registerEvents(e=>{
e.on("control.show",this.show.bind(this)),e.on("control.hide",this.hide.bind(this)),
e.on("control.showText",this.showText.bind(this)),
e.on("control.setTitle",this.setTitle.bind(this)),
e.on("control.setIcon",this.setIcon.bind(this))
}),chrome.browserAction.onClicked.addListener(e=>{
this.AvastWRC.bs.accessContent(e,{
message:"toggleSidebar"
})
})
}
}(jn),jn.bs.aos=new class{
constructor(e){
this.AvastWRC=e,this.timeSlot=900,this.timeWaitForCache=100,this.timeCacheValid=5e3,
this.bal=null,
this.classNameBlackList=["btn","btn-sm","btn-block","btn-secondary","btn-lg"],
this.currentPosition={},
this.pendingActions={},this.userAction=null,this.ajaxFilter={
urls:["http://*/*","https://*/*"],
types:["main_frame","xmlhttprequest"]
},this.ajaxRequestCached={},this.ajaxRequestCached2={},
this.originTypeCnt=0,this.prefetchRequests={}
}
UserActions(){
var e,t=[]
return{
isActive:function(){
return void 0!==e
},
getActive:function(){
return e
},
push:function(i){
this.isActive()?t.push(i):e=i,setTimeout((function(){
e=t.shift()
}),5e3)
}
}
}
localizeString(e,t){
return this.AvastWRC.localization?this.AvastWRC.localization.localizeString(e,t):e
}
getButtonTitle(e){
let t="",i=e.getRatingCategory(),a=this.AvastWRC.DEFAULTS.BRAND_NAME
switch(i){
case this.AvastWRC.RATING_NONE:
t=this.localizeString("background.icon.unknown",[a])
break
case this.AvastWRC.RATING_GOOD:
t=this.localizeString("background.icon.safe",[a])
break
case this.AvastWRC.RATING_AVERAGE:
t=this.localizeString("background.icon.bad",[a])
break
case this.AvastWRC.RATING_BAD:
t=this.localizeString("background.icon.unsafe",[a])
}
return t
}
getButtonIcon(e){
if(!1===this.AvastWRC.CONFIG.URL_CONSENT){
return"icon-danger.png"
}
switch(e.getRatingCategory()){
case this.AvastWRC.RATING_NONE:
return"icon-unknown.png"
case this.AvastWRC.RATING_GOOD:
return"icon-ok.png"
case this.AvastWRC.RATING_AVERAGE:
return"icon-bad.png"
case this.AvastWRC.RATING_BAD:
return"icon-danger.png"
default:
return"icon-unknown.png"
}
}
updateButton(e,t,i){
this.AvastWRC.bs.tabExists.call(this,i.id,(function(){
let e=this.getButtonTitle(t),a=this.getButtonIcon(t)
this.AvastWRC.bal.emitEvent("control.setIcon",i.id,"common/ui/icons/"+a),this.AvastWRC.Utils.getBrowserInfo().isEdge()||this.AvastWRC.bal.emitEvent("control.setTitle",i.id,e)
}))
}
updateButtonFromExtensionUrl(e,t){
this.AvastWRC.bs.tabExists.call(this,t,(function(){
let i=this.AvastWRC.bs.getMessageFromExtensionUrl(e),a=this.AvastWRC.bs.getDataFromExtensionUrl(e),o=this.AvastWRC.DEFAULTS.BRAND_NAME
if(a&&"messagebox.html"===i&&("phishing"===a.type||"malware"===a.type)){
let e=this.localizeString("background.icon.unsafe",[o]),i="icon-danger.png"
this.AvastWRC.bal.emitEvent("control.setIcon",t,"common/ui/icons/"+i),this.AvastWRC.Utils.getBrowserInfo().isEdge()||this.AvastWRC.bal.emitEvent("control.setTitle",t,e)
}
}))
}
onTabUpdated(e,t,i){
"complete"===t.status&&this.AvastWRC.CONFIG.ENABLE_WEBREP_CONTROL&&this.AvastWRC.CONFIG.ENABLE_SERP&&this.AvastWRC.bal.search&&this.AvastWRC.bal.search.checkSearch(i),
i.active&&(this.currentPosition.tabId=e,
this.currentPosition.domain=this.AvastWRC.bal.getDomainFromUrl(i.url),
this.currentPosition.url=i.url)
}
onCommitted(e){
let t=e.transitionType,i=e.transitionQualifiers,a=e.frameId,o=this.AvastWRC.proto.UrlInfo.OriginType.OTHER
if(0===a){
if(this.AvastWRC.TabReqCache.set(e.tabId,"userActions",null),!this.AvastWRC.bs.checkUrl(e.url)){
return void this.AvastWRC.bs.tabExists.call(this,e.tabId,()=>{
this.AvastWRC.bal.emitEvent("control.hide",e.tabId)
})
}
this.AvastWRC.bs.tabExists.call(this,e.tabId,()=>{
this.AvastWRC.bal.emitEvent("control.show",e.tabId)
})
let a=-1!==i.indexOf("client_redirect"),r=-1!==i.indexOf("forward_back"),n=-1!==i.indexOf("from_address_bar"),s=this.AvastWRC.TabReqCache.get(e.tabId,"tabCreating")
void 0===s&&(s=null)
let l=this.AvastWRC.proto.UrlInfo.OriginType
r?o=l.STEPBACK:"typed"!==t&&"link"!==t||!n?"auto_bookmark"===t?o=l.BOOKMARK:"generated"===t||"keyword"===t?o=l.SEARCHWINDOW:"link"===t&&a?o=l.JAVASCRIPT:"start_page"===t&&null===s?o=l.HOMEPAGE:"start_page"===t&&!0===s?o=l.APPLICATION:"link"!==t||a?"reload"!==t||a||!0!==s?"reload"!==t||a||!1!==s?"reload"!==t||a||null!==s?"form_submit"===t&&(o=l.FORM):o=l.SESSION_RESTORE:o=l.RELOAD:o=l.SESSION_RESTORE:o=l.LINK:o=l.ADDRESSBAR,
this.AvastWRC.TabReqCache.set(e.tabId,"tabCreating",!1),
this.AvastWRC.TabReqCache.set(e.tabId,"originType",o),
this.originTypeCnt+=1
}
this.AvastWRC.bs.tabNotExists.call(this,e.tabId,()=>{
this.AvastWRC.TabReqCache.drop(e.tabId)
})
}
onHistoryStateUpdated(e){
0===e.frameId&&(this.AvastWRC.TabReqCache.set(e.tabId,"reported",!1),
this.AvastWRC.TabReqCache.set(e.tabId,"originType",this.AvastWRC.proto.UrlInfo.OriginType.HISTORY_STATE),
this.AvastWRC.TabReqCache.set(e.tabId,"fromCache",void 0),
this.originTypeCnt+=1)
}
onReferenceFragmentUpdated(e){
0===e.frameId&&(this.AvastWRC.TabReqCache.set(e.tabId,"reported",!1),
this.AvastWRC.TabReqCache.set(e.tabId,"originType",this.AvastWRC.proto.UrlInfo.OriginType.ANCHOR),
this.AvastWRC.TabReqCache.set(e.tabId,"fromCache",void 0),
this.originTypeCnt+=1)
}
onBeforeNavigate(e){
this.originTypeCnt=0
}
onResponseStartedCheckCache(e){
if("main_frame"===e.type){
const t={
url:e.url,
validUntil:1*new Date+this.timeCacheValid,
cache:e.fromCache
}
this.AvastWRC.TabReqCache.set(e.tabId,"fromCache",t)
}
"xmlhttprequest"===e.type&&e.fromCache&&(this.ajaxRequestCached[e.requestId]=!0,
this.ajaxRequestCached2[e.requestId]=!0,
setTimeout(()=>{
delete this.ajaxRequestCached2[e.requestId]
},this.timeWaitForCache))
}
onTabCreated(e){
this.AvastWRC.TabReqCache.set(e.id,"tabCreating",!0)
}
filterClassName(e){
if(!en(e)||0===e.length||-1===e.indexOf(" ")){
return e
}
var t=e.split(" "),i=""
for(var a in t){
-1===this.classNameBlackList.indexOf(t[a])&&(i+=" "+t[a])
}
return i.trim()
}
updateCurrentWindowId(){
chrome.tabs.query({
active:!0,
lastFocusedWindow:!0
},e=>{
ke(e)&&0!==e.length&&(this.currentPosition.windowId=e[0].windowId,this.currentPosition.tabId=e[0].id,
this.currentPosition.domain=this.AvastWRC.bal.getDomainFromUrl(e[0].url))
})
}
isReqFromSamePage(e){
return this.currentPosition&&this.currentPosition.tabId===e.tabId&&this.currentPosition.domain===this.AvastWRC.bal.getDomainFromUrl(e.url)&&"main_frame"!==e.type
}
onBeforeRequest(e){
var t=e.requestId,i=e.tabId,a=(e.method,e.type),o=e.url
if("main_frame"===a){
var r=this.AvastWRC.TabReqCache.get(i,"onBeforeReq")
if(r&&1==r.blocked){
return{
cancel:!0
}
}
this.AvastWRC.Queue.set("previousUrls",o)
}
if(this.currentPosition&&this.currentPosition.tabId===i){
var n=this.AvastWRC.bal.getDomainFromUrl(o)
"main_frame"!=a&&this.currentPosition.domain===n&&(this.pendingActions[t]=e)
}
}
onResponseStarted(e){
var t=e.tabId,i=e.method,a=e.requestId
let o=!1
if(this.currentPosition&&this.currentPosition.tabId===t){
switch(i){
case"GET":
case"POST":
case"PUT":
case"DELETE":
if(this.pendingActions[a]&&this.userAction){
const i=this.pendingActions[a],r={
request:"ajax",
className:this.filterClassName(this.userAction.className),
method:i.method,
event:this.userAction.event,
ajaxLogic:"2016"
},n=this.AvastWRC.bal.getDomainFromUrl(i.url)
!0===this.AvastWRC.TabReqCache.get(n,"isAjax")&&(o=!0,(a=>{
setTimeout(()=>{
r.served_from_cache=!!this.ajaxRequestCached[e.requestId]
const o=this.prepareDataForAjaxRequest(i.url,t,this.currentPosition.windowId,0,r,{
referer:a
})
this.sendRequest(o),e.requestId in this.ajaxRequestCached&&delete this.ajaxRequestCached[e.requestId]
},this.timeWaitForCache)
})(this.AvastWRC.TabReqCache.get("request_"+e.requestId,"referer")))
}
}
}
o||setTimeout(()=>{
e.requestId in this.ajaxRequestCached&&delete this.ajaxRequestCached[e.requestId]
},this.timeWaitForCache)
}
onSendHeaders(e){
var t=e.tabId,i=e.method,a=e.url,o=this.AvastWRC.bal.getDomainFromUrl(a)
this.AvastWRC.bal.getHostFromUrl(a)
let r=this.AvastWRC.bs.retrieveRequestHeaderValue(e.requestHeaders,"Referer")
if("main_frame"===e.type){
var n=this.AvastWRC.TabReqCache.get(t,"onBeforeReq")
if(n&&!0===n.blocked&&a!==this.AvastWRC.SITE_CORRECT_MSG_REDIRECT){
return
}
this.AvastWRC.Queue.set("previousUrls",a)
}
var s=this.AvastWRC.TabReqCache.get(t,"userActions")
if(s&&s.isActive()&&this.isReqFromSamePage(e)){
switch(i){
case"GET":
case"POST":
case"PUT":
case"DELETE":
if(!0===this.AvastWRC.TabReqCache.get(o,"isAjax")){
const o=s.getActive(),n={
request:"ajax",
className:this.filterClassName(o.className),
method:i,
event:o.event,
ajaxLogic:"201905"
}
setTimeout(()=>{
n.served_from_cache=!!this.ajaxRequestCached2[e.requestId]
const i=this.prepareDataForAjaxRequest(a,t,this.currentPosition.windowId,0,n,{
referer:r
})
this.sendRequestAjax201905(i)
},this.timeWaitForCache)
}
}
}
}
sendRequest(e){
this.AvastWRC.CONFIG.COMMUNITY_IQ&&(this.AvastWRC.get(e,()=>{}),setTimeout(()=>this.userAction=null,this.timeSlot))
}
prepareDataForAjaxRequest(e,t,i,a,o,r){
var n={}
return"object"==typeof r&&(n=Object.assign(n,r)),(n=Object.assign(n,{
url:e,
tabNum:t,
windowNum:i,
reqServices:a,
customKeyValue:[],
originType:this.AvastWRC.proto.UrlInfo.OriginType.JAVASCRIPT,
tabUpdated:this.AvastWRC.proto.UrlInfo.EventType.AJAX,
fromCache:o.served_from_cache,
clientTimestamp:(new Date).getTime()
})).customKeyValue=this.AvastWRC.bs.createCustomKeys({
additionalCustomKeys:o,
tabId:t,
event:n.tabUpdated,
originType:n.originType
}),n
}
sendRequestAjax201905(e){
this.AvastWRC.CONFIG.COMMUNITY_IQ&&this.AvastWRC.getUrlInfo(e,()=>{})
}
onCompleted(e){
var t=e.tabId,i=e.requestId
this.currentPosition&&this.currentPosition.tabId===t&&delete this.pendingActions[i]
}
onErrorOccurred(e){
var t=e.requestId,i=e.tabId
;("main_frame"===e.type||"xmlhttprequest"===e.type&&this.currentPosition&&this.currentPosition.tabId===i)&&delete this.pendingActions[t]
}
onSendHeadersPrefetch(e){
let t=e.requestId,i=!1,a=null
for(let t=0;t<e.requestHeaders.length;t+=1){
let o=e.requestHeaders[t].name.toLowerCase(),r=e.requestHeaders[t].value.toLowerCase()
;("x-moz"===o&&"prefetch"===r||"purpose"===o&&"prefetch"===r||"purpose"===o&&"preview"===r||"x-purpose"===o&&"prefetch"===r||"x-purpose"===o&&"preview"===r)&&(i=!0),
"referer"===o&&(a=e.requestHeaders[t].value)
}
i&&(this.prefetchRequests[t]={
referer:a
})
}
onHeadersReceivedPrefetch(e){
let t=e.requestId
if(this.prefetchRequests[t]){
let t=e.type,i=null
for(let t=0;t<e.responseHeaders.length;t+=1){
let a=e.responseHeaders[t].name.toLowerCase(),o=e.responseHeaders[t].value.toLowerCase()
"content-type"===a&&(i=o)
}
let a=!1
const o=["text/html","text/plain","text/xml","text/json","application/json","application/pdf","application/xml","application/xhtml+xml","application/rtf"]
"main_frame"===t?a=!0:"other"!==t||null!==i&&-1===o.indexOf(i.replace(/;.*/,""))||(a=!0),
a||delete this.prefetchRequests[e.requestId]
}
}
onResponseStartedPrefetch(e){
let t=e.requestId
if(this.prefetchRequests[t]){
let i=e.url,a=e.fromCache,o=e.tabId,r=this.prefetchRequests[t].referer
delete this.prefetchRequests[e.requestId],chrome.tabs.get(o,t=>{
chrome.runtime.lastError
let o=null
t&&(o=t.windowId)
let n={
url:i,
referer:r,
tabNum:e.tabId,
windowNum:o,
reqServices:256|this.bal.reqUrlInfoServices,
tabUpdated:!0,
originType:this.AvastWRC.proto.UrlInfo.OriginType.LINK,
customKeyValue:[],
fromCache:a,
clientTimestamp:(new Date).getTime()
}
n.customKeyValue=this.AvastWRC.bs.createCustomKeys({
additionalCustomKeys:{},
tabId:e.tabId,
event:n.tabUpdated,
originType:17
}),this.AvastWRC.CONFIG.COMMUNITY_IQ&&this.AvastWRC.getUrlInfo(n,()=>{})
})
}
}
onErrorOccurredPrefetch(e){
this.prefetchRequests[e.requestId]&&delete this.prefetchRequests[e.requestId]
}
onMessage(e,t){
if(this.AvastWRC.bal.aos.commonMessageHubAos(e.message,e,t.tab),this.updateCurrentWindowId(),
"contentReady"===e.message&&chrome.tabs.sendMessage(t.tab.id,{
message:"domData",
domData:this.AvastWRC.TabReqCache.get(t.tab.id,"domData")
}),"domData"===e.message&&this.AvastWRC.TabReqCache.set(t.tab.id,"domData",e.domData),
this.AvastWRC.CONFIG.COMMUNITY_IQ){
if(e){
const t=["ajax","pageTitle"],i=["checkLinks","messageBoxFeedback"]
;(e.type&&t.indexOf(e.type)>=0||e.message&&i.indexOf(e.message)>=0)&&(this.userAction=e)
}
if("ajax"===e.type){
const i=this.AvastWRC.TabReqCache.get(t.tab.id,"userActions")||this.UserActions()
i.push(e),this.AvastWRC.TabReqCache.set(t.tab.id,"userActions",i)
}
if("pageTitle"===e.type&&0===t.frameId){
const i=t.tab,a=i.url||(i.contentDocument&&i.contentDocument.location?i.contentDocument.location.href:null),o=this.AvastWRC.bal.getHostFromUrl(a),r=[{
key:"title",
value:e.title
},{
key:"host",
value:o
}]
this.AvastWRC.TabReqCache.set(t.tab.id,"pageTitle",r)
}
}
}
checkDNT(e){
if("main_frame"!==e.type&&this.bal.DNT.isTracking(e.url,this.AvastWRC.bs.getHostInTab(e.tabId),e.tabId)){
if("sub_frame"===e.type){
return{
redirectUrl:"about:blank"
}
}
if("image"===e.type){
return{
redirectUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAFElEQVR4XgXAAQ0AAABAMP1L30IDCPwC/o5WcS4AAAAASUVORK5CYII="
}
}
var t=this.AvastWRC.Utils.resolveLocalMock(e.url)
return t?{
redirectUrl:chrome.extension.getURL("common/mocks/"+t)
}:{
cancel:!0
}
}
return{
cancel:!1
}
}
init(e){
this.bal=e,Ja.runtime.onMessage.addListener(this.onMessage.bind(this)),Ja.tabs.onUpdated.addListener(this.onTabUpdated.bind(this)),
Ja.tabs.onCreated.addListener(this.onTabCreated.bind(this)),
Ja.webNavigation.onCommitted.addListener(this.onCommitted.bind(this)),
Ja.webNavigation.onHistoryStateUpdated.addListener(this.onHistoryStateUpdated.bind(this)),
Ja.webNavigation.onReferenceFragmentUpdated.addListener(this.onReferenceFragmentUpdated.bind(this)),
Ja.webNavigation.onBeforeNavigate.addListener(this.onBeforeNavigate.bind(this)),
Ja.webRequest.onResponseStarted.addListener(this.onResponseStartedCheckCache.bind(this),{
urls:["http://*/*","https://*/*"],
types:["main_frame","xmlhttprequest"]
}),Ja.webRequest.onBeforeRequest.addListener(this.onBeforeRequest.bind(this),this.ajaxFilter,["blocking"]),
Ja.webRequest.onResponseStarted.addListener(this.onResponseStarted.bind(this),this.ajaxFilter,["responseHeaders"]),
Ja.webRequest.onCompleted.addListener(this.onCompleted.bind(this),this.ajaxFilter,["responseHeaders"]),
Ja.webRequest.onErrorOccurred.addListener(this.onErrorOccurred.bind(this),{
urls:["http://*/*","https://*/*"]
})
const t=this.AvastWRC.Utils.getBrowserInfo(),i=["requestHeaders"]
;(t.isChrome()||t.isAvast())&&t.getBrowserVersionMajor()>=72&&i.push("extraHeaders"),
Ja.webRequest.onSendHeaders.addListener(this.onSendHeaders.bind(this),this.ajaxFilter,i),
Ja.webRequest.onSendHeaders.addListener(this.onSendHeadersPrefetch.bind(this),{
urls:["http://*/*","https://*/*"]
},i),Ja.webRequest.onHeadersReceived.addListener(this.onHeadersReceivedPrefetch.bind(this),{
urls:["http://*/*","https://*/*"]
},["responseHeaders"]),Ja.webRequest.onErrorOccurred.addListener(this.onErrorOccurredPrefetch.bind(this),{
urls:["http://*/*","https://*/*"]
}),Ja.webRequest.onResponseStarted.addListener(this.onResponseStartedPrefetch.bind(this),{
urls:["http://*/*","https://*/*"]
}),this.checkDNTRef=this.checkDNT.bind(this),this.bal.hookOnFeatureChange("dnt",e=>{
e?Ja.webRequest.onBeforeRequest.addListener(this.checkDNTRef,{
urls:["http://*/*","https://*/*"]
},["blocking"]):(Ja.webRequest.onBeforeRequest.removeListener(this.checkDNTRef),
this.AvastWRC.bal.DNT.resetAllTabs())
})
}
registerModuleListeners(e){
e.on("dnt.changed",()=>{
this.AvastWRC.bal.DNT&&this.AvastWRC.bal.DNT.updateAllTabs&&this.AvastWRC.bal.DNT.updateAllTabs()
}),
e.on("badgeInfoUpdated",(e,t,i)=>{
if(!1===this.AvastWRC.CONFIG.URL_CONSENT){
return void this.AvastWRC.bal.emitEvent("control.showText",e)
}
const a=i(e,t)
if(a){
!1===this.AvastWRC.bal.settings.get().features.dntBadge?this.AvastWRC.bal.emitEvent("control.showText",e):this.AvastWRC.bal.emitEvent("control.showText",e,a.text,a.color)
}
}),e.on("urlInfo.response",(e,t,i)=>{
this.updateButton(e,t,i),this.AvastWRC.local.retrieveWebshieldSettings(),
this.AvastWRC.local.retrieveVersions()
})
}
}(jn),jn.bs.aos.sa=new class{
constructor(e){
this.AvastWRC=e,this.EDITIONS_CONFIG=[{
extType:e.EXT_TYPE_AOS,
callerId:1100,
reqUrlInfoServices:191,
extVer:e.bs.getVersionAsInt(),
dataVer:15
}],this._bal=null,this.EXT_EXTENSIONS=[{
linked:!1,
id:null,
extMatch:function(e){
return/SafePrice/.test(e.name)
},
msgHandle:function(e,t,i){
"event"===e.msg&&this.AvastWRC.bal.emitEvent(e.event,e)
}.bind(this)
}],this._activatedExt={}
}
findExtDesc(e){
return Ua(this.EXT_EXTENSIONS,(function(t){
return t.extMatch(e)
}))
}
initExt(e,t){
t.id&&chrome.runtime.sendMessage(t.id,{
msg:"init",
sender_id:chrome.runtime.id
},function(i){
e.id=t.id,e.linked=!0,this._activatedExt[t.id]=e
}.bind(this))
}
onStarted(e){
var t=this.findExtDesc(e)
t&&this.initExt(t,e)
}
onFinished(e){
var t=_activatedExt[e]
t&&(t.linked=!1,t.id=null,delete _activatedExt[e])
}
init(e){
this._bal=e
}
}(jn),jn.Voting=new class{
constructor(e){
this.AvastWRC=e,this.storedVotes={},this.AvastWRC.getStorage("votes",e=>{
"string"==typeof e&&(this.storedVotes=JSON.parse(e))
})
}
save(){
this.AvastWRC.setStorage("votes",JSON.stringify(this.storedVotes))
}
urlToDomain(e){
const t=e.match(new RegExp("^(ftp|http|https)://(w+:{0,1}w*@)?([a-z0-9-.]+[a-z]{2,6})(:[0-9]+)?(.*)?$"))
if(t&&t.length>4){
const e=t[3],i=cn.parse(e)
if(i.domain){
return i.domain
}
}
return null
}
get(e){
const t=this.urlToDomain(e)
return this.storedVotes[t]
}
_set(e,t){
const i=this.urlToDomain(e)
this.storedVotes[i]=t,this.save()
}
registerModuleListeners(e){
e.on("rated.positive",e=>this._set(e,this.AvastWRC.DEFAULTS.VOTING.POSITIVE)),
e.on("rated.negative",e=>this._set(e,this.AvastWRC.DEFAULTS.VOTING.NEGATIVE)),
e.on("rated.remove",e=>this._set(e,null))
}
}(jn),jn.ABEK=i(52),jn.panelbl=new class{
constructor(e){
this.AvastWRC=e,this.ABEK=this.AvastWRC.ABEK,this._tabPanelHandlers={}
}
init(){
Ja.tabs.onActivated.addListener(e=>{
let t=e.tabId
for(let e in this._tabPanelHandlers){
t!=e&&this._tabPanelHandlers[e].viewClose(!0)
}
})
}
registerModuleListeners(e){
e.on("message.iframeReady",(e,t)=>{
const i=new Xr(this.AvastWRC,{
tabId:t.id,
url:t.url
})
this._tabPanelHandlers[t.id]=i,i.init()
}),e.on("message.sidebarShow",(e,t)=>{
const i=this._tabPanelHandlers[t.id]
i&&i.messageHandler("panelOpening")
}),e.on("message.sidebarHide",(e,t)=>{
const i=this._tabPanelHandlers[t.id]
i&&i.messageHandler("panelClosing")
}),e.on("message.panelAction",(e,t)=>{
const i=this._tabPanelHandlers[t.id]
let a=e.data
i&&i.messageHandler(a.type,a)
})
}
getModuleDefaultSettings(){
return{}
}
}(jn),jn.localization=new class{
constructor(e,t,i){
this.AvastWRC=e,this.messages=t,this.plurals=i,this.lang=this.getDefaultLanguage()
}
getDefaultLanguage(){
let e="en"
if(chrome.i18n&&chrome.i18n.getUILanguage){
let t=chrome.i18n.getUILanguage(),i=t.substring(0,2)
this.messages?t in this.messages?e=t:i in this.messages&&(e=i):e=t
}
return e
}
localizeString(e,t){
let i=this.lang
if(this.messages){
this.messages[i][e]||(i="en")
let a=this.messages[i][e],o=!1
if(void 0!==t[0]&&"number"==typeof t[0]&&(o=this.plurals[i](t[0])),!1!==o){
let e=a.split(" | ")
void 0!==e[o]&&(a=e[o])
}
for(let e=0;e<t.length;e+=1){
let i=new RegExp("\\{"+e+"\\}","g")
a=a.replace(i,t[e])
}
return a
}
return chrome.i18n.getMessage(e)
}
}(jn,yn,wn.a),jn.heartbeat=new class{
constructor(e,t={}){
this.AvastWRC=e,this.sender=t,this.timeoutId=null,this.lastHeartBeatTime=null,
this.AvastWRC.getStorage("lastHeartbeatTime",e=>{
this.lastHeartBeatTime=this.AvastWRC.bal.troughStorage("lastHeartbeatTime",e)
})
this.BEAT_INTERVAL=this.BEAT_INTERVAL_DEFAULT=216e5,this.CHECK_WINDOW=this.CHECK_WINDOW_DEFAULT=36e5,
this.IS_HB_ON=this.IS_HB_ON_DEFAULT=!0
}
init(){
setTimeout(()=>{
this.startHB()
},3e4)
}
updateTimesFromShepherd(){
const e=this.AvastWRC.Shepherd.getBurgerRule().heartbeat||{}
this.BEAT_INTERVAL=36e5*e.intervalInHours||this.BEAT_INTERVAL_DEFAULT,this.CHECK_WINDOW=36e5*e.checkInHours||this.CHECK_WINDOW_DEFAULT,
this.IS_HB_ON=void 0===e.isHbOn?this.IS_HB_ON_DEFAULT:e.isHbOn
}
startHB(){
this.updateTimesFromShepherd()
const e=this.lastHeartBeatTime.get()||null,t=Date.now()-e,i=this.BEAT_INTERVAL-t,a=t>this.BEAT_INTERVAL,o=i<this.CHECK_WINDOW
this.sender.log("Last HB:",new Date(e)),this.sender.log("Time since last HB :",{
s:Math.floor(t/10)/100,
min:Math.floor(t/10/60)/100,
hours:Math.floor(t/10/60/60)/100
}),a?this.sendHBnow():o?this.postponeHB(i):this.postponeHB(this.CHECK_WINDOW)
}
sendHBnow(){
this.lastHeartBeatTime.set(Date.now()),this.IS_HB_ON?this.sender.sendHB():this.sender.log("HeartBeat is turned off via Shepherd"),
this.startHB()
}
postponeHB(e){
this.sender.log("Postponing heartbeat by:",{
s:Math.floor(e/10)/100,
min:Math.floor(e/10/60)/100,
hours:Math.floor(e/10/60/60)/100
}),clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{
clearTimeout(this.timeoutId),
this.sender.log("Timout expired, starting HB again"),
this.startHB()
},e)
}
}(jn,An),jn.bs.webshield=new class{
constructor(e,t={}){
this.AvastWRC=e,this.sender=t,this.bufferSize=1,this.buffer=[],
this.webRequests={},
this.tabs={},this.webshieldData=[],chrome.runtime.onMessage.addListener((e,t,i)=>{
"getWebshieldData"===e.message&&i({
webshieldData:this.webshieldData
})
})
}
requestOnSendHeaders(e){
let t=e.requestId,i=e.tabId
if(-1==i){
return
}
let a={
requestId:t,
tabId:i,
url:e.url,
type:e.type,
contentType:null,
timeSendHeaders:e.timeStamp,
timeHeadersReceived:null,
timeResponseStarted:null,
timeRequestCompleted:null,
timeDOMLoaded:null,
timePageLoaded:null
}
if(this.webRequests[t]=a,"main_frame"===a.type){
if(this.tabs[i]){
let e=this.tabs[i]
e.requestId!=t&&delete this.webRequests[e.requestId]
}
let e={
tabId:i,
requestId:t
}
this.tabs[i]=e
}
}
requestOnHeadersReceived(e){
let t=e.requestId
if(this.webRequests[t]){
this.webRequests[t].timeHeadersReceived=e.timeStamp
for(let i=0;i<e.responseHeaders.length;i+=1){
let a=e.responseHeaders[i]
if("content-type"==a.name.toLowerCase()){
let e=a.value.replace(/([a-zA-Z0-9]+\/[a-zA-Z0-9]+).*/,"$1").toLowerCase()
this.webRequests[t].contentType=e
break
}
}
}
}
requestOnResponseStarted(e){
let t=e.requestId
if(this.webRequests[t]&&(this.webRequests[t].timeResponseStarted=e.timeStamp,e.fromCache)){
let e=this.webRequests[t]
"main_frame"===e.type&&delete this.tabs[e.tabId],delete this.webRequests[t]
}
}
requestOnCompleted(e){
let t=e.requestId
if(this.webRequests[t]&&(this.webRequests[t].timeRequestCompleted=e.timeStamp,"main_frame"!==this.webRequests[t].type)){
this.bufferAppend(t)
let e=this.webRequests[t]
"main_frame"===e.type&&delete this.tabs[e.tabId],delete this.webRequests[t]
}
}
requestOnErrorOccurred(e){
let t=e.requestId
if(!this.webRequests[t]){
return
}
let i=this.webRequests[t]
"main_frame"===i.type&&delete this.tabs[i.tabId],delete this.webRequests[t]
}
navigationOnDOMContentLoaded(e){
if(0!=e.frameId){
return
}
let t=e.tabId
if(!this.tabs[t]){
return
}
let i=this.tabs[t].requestId
this.webRequests[i]&&this.webRequests[i].timeRequestCompleted&&(this.webRequests[i].timeDOMLoaded=e.timeStamp)
}
navigationOnCompleted(e){
if(0!=e.frameId){
return
}
let t=e.tabId
if(!this.tabs[t]){
return
}
let i=this.tabs[t].requestId
if(!this.webRequests[i]){
return
}
if(!this.webRequests[i].timeRequestCompleted){
return
}
this.webRequests[i].timePageLoaded=e.timeStamp,this.bufferAppend(i)
let a=this.webRequests[i]
"main_frame"===a.type&&delete this.tabs[a.tabId],delete this.webRequests[i]
}
navigationOnErrorOccurred(e){
if(0!=e.frameId){
return
}
let t=e.tabId
if(!this.tabs[t]){
return
}
let i=this.tabs[t].requestId,a=this.webRequests[i]
"main_frame"===a.type&&delete this.tabs[a.tabId],delete this.webRequests[i]
}
init(e){
this.bal=e
let t={
urls:["http://*/*","https://*/*"]
}
const i=chrome.webRequest,a=chrome.webNavigation
i.onSendHeaders&&chrome.webRequest.onSendHeaders.addListener(this.requestOnSendHeaders.bind(this),t),
i.onHeadersReceived&&chrome.webRequest.onHeadersReceived.addListener(this.requestOnHeadersReceived.bind(this),t,["responseHeaders"]),
i.onResponseStarted&&chrome.webRequest.onResponseStarted.addListener(this.requestOnResponseStarted.bind(this),t),
i.onCompleted&&chrome.webRequest.onCompleted.addListener(this.requestOnCompleted.bind(this),t),
i.onErrorOccurred&&chrome.webRequest.onErrorOccurred.addListener(this.requestOnErrorOccurred.bind(this),t),
a.onDOMContentLoaded&&chrome.webNavigation.onDOMContentLoaded.addListener(this.navigationOnDOMContentLoaded.bind(this)),
a.onCompleted&&chrome.webNavigation.onCompleted.addListener(this.navigationOnCompleted.bind(this)),
a.onErrorOccurred&&chrome.webNavigation.onErrorOccurred.addListener(this.navigationOnErrorOccurred.bind(this))
}
getWebshieldSetting(){
return new Promise((e,t)=>{
let i=["avcfg://WebShield/Common/ProviderEnabled","avcfg://WebShield/Common/TemporaryDisabled","avcfg://WebShield/WebScanner/HttpsScanning","avcfg://WebShield/WebScanner/WebScanning"]
this.AvastWRC.local.getProperties(i,t=>{
if(t&&t.length===i.length){
let i=1,a=0,o=1,r=1
e({
ProviderEnabled:""===t[0]?i:1*t[0],
TemporaryDisabled:""===t[1]?a:1*t[1],
HttpsScanning:""===t[2]?o:1*t[2],
WebScanning:""===t[3]?r:1*t[3]
})
}else{
e(null)
}
})
})
}
bufferAppend(e){
let t=this.webRequests[e]
if(!this.AvastWRC.Shepherd){
return
}
var i=t.url.match(new RegExp("^(ftp|http|https)://(w+:{0,1}w*@)?([a-z0-9-.]+[a-z]{2,6})(:[0-9]+)?(.*)?$"))
if(!i||i.length<=4){
return
}
let a=Zr.parse(i[3]).domain,o=this.AvastWRC.Shepherd.getWebshieldRule(a),r=!!(1&o.flags),n=!!(2&o.flags),s=!!(4&o.flags),l=!1
if(r&&"main_frame"===t.type?l=!0:!n||"main_frame"===t.type||"text/html"!==t.contentType&&"application/json"!==t.contentType?s&&"main_frame"!==t.type&&"text/html"!==t.contentType&&"application/json"!==t.contentType&&(l=!0):l=!0,
l){
let e={
url:t.url,
timeHeadersReceived:Math.round(t.timeHeadersReceived-t.timeSendHeaders),
timeResponseStarted:Math.round(t.timeResponseStarted-t.timeSendHeaders),
timeRequestCompleted:Math.round(t.timeRequestCompleted-t.timeSendHeaders)
}
"main_frame"===t.type&&(e.timeDOMLoaded=Math.round(t.timeDOMLoaded-t.timeSendHeaders),
e.timePageLoaded=Math.round(t.timePageLoaded-t.timeSendHeaders)),
this.buffer.push(e),
this.buffer.length>=this.bufferSize&&this.bufferSend()
}
}
bufferSend(){
let e=this.buffer
this.buffer=[],!1!==this.AvastWRC.CONFIG.COMMUNITY_IQ&&this.getWebshieldSetting().then(t=>{
if(null===t){
return
}
let i=0
i+=1*t.ProviderEnabled,i+=2*t.TemporaryDisabled,i+=4*t.HttpsScanning,i+=8*t.WebScanning
for(let t=0;t<e.length;t+=1){
let a=e[t],o=this.AvastWRC.bal.getHostFromUrl(a.url)
this.sender.sendWebshield(i,o,a.timeHeadersReceived,a.timeResponseStarted,a.timeRequestCompleted,a.timeDOMLoaded,a.timePageLoaded)
}
for(let t=0;t<e.length;t+=1){
let a=e[t]
this.webshieldData.push([i,a.url,a.timeHeadersReceived,a.timeResponseStarted,a.timeRequestCompleted,a.timeDOMLoaded,a.timePageLoaded])
}
})
}
}(jn,An),jn.bal.registerModule(jn.bal.search),jn.bal.registerModule(jn.bal.aos),
jn.bal.registerModule(jn.bal.aos.SZ),
jn.bal.registerModule(jn.bal.DNT),jn.bal.registerModule(jn.tracking),
jn.bal.registerModule(jn.bal.Core),
jn.bal.registerModule(jn.Shepherd),jn.bal.registerModule(jn.bs),
jn.bal.registerModule(jn.bs.icon),
jn.bal.registerModule(jn.bs.webshield),jn.bal.registerModule(jn.bs.aos),
jn.bal.registerModule(jn.bs.aos.sa),
jn.bal.registerModule(jn.panelbl),jn.bal.registerModule(An),
jn.bal.registerModule(jn.Voting),
jn.bal.registerModule(jn.heartbeat),jn.init(jn.bs.aos.sa.EDITIONS_CONFIG[0].callerId),
jn.bal.init(jn.bs,localStorage,jn.bs.aos.sa.EDITIONS_CONFIG)
}])
