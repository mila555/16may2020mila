!function(e){
var t={}
function n(o){
if(t[o]){
return t[o].exports
}
var i=t[o]={
i:o,
l:!1,
exports:{}
}
return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports
}
n.m=e,n.c=t,n.d=function(e,t,o){
n.o(e,t)||Object.defineProperty(e,t,{
enumerable:!0,
get:o
})
},n.r=function(e){
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{
value:"Module"
}),Object.defineProperty(e,"__esModule",{
value:!0
})
},n.t=function(e,t){
if(1&t&&(e=n(e)),8&t){
return e
}
if(4&t&&"object"==typeof e&&e&&e.__esModule){
return e
}
var o=Object.create(null)
if(n.r(o),Object.defineProperty(o,"default",{
enumerable:!0,
value:e
}),2&t&&"string"!=typeof e){
for(var i in e){
n.d(o,i,function(t){
return e[t]
}.bind(null,i))
}
}
return o
},n.n=function(e){
var t=e&&e.__esModule?function(){
return e.default
}:function(){
return e
}
return n.d(t,"a",t),t
},n.o=function(e,t){
return Object.prototype.hasOwnProperty.call(e,t)
},n.p="",n(n.s=0)
}([function(e,t,n){
"use strict"
n.r(t)
;(new class{
constructor(){
this.windowMouseDownBinded=this.windowMouseDown.bind(this),this.windowKeyDownBinded=this.windowKeyDown.bind(this),
this.windowLoadBinded=this.windowLoad.bind(this),
this.domData="",chrome.runtime&&(chrome.runtime.onMessage.addListener(e=>{
e&&"domData"===e.message&&(this.domData=e.domData)
}),chrome.runtime.sendMessage({
message:"contentReady"
}))
}
isAosElement(e){
if(!e){
return!1
}
let t=e
for(;t;){
if(t.dataset.aos===this.domData){
return!0
}
t=t.parentElement
}
return!1
}
start(){
window.addEventListener("mousedown",this.windowMouseDownBinded,!0),window.addEventListener("keydown",this.windowKeyDownBinded,!0),
window.addEventListener("load",this.windowLoadBinded,!1)
}
windowMouseDown(e){
try{
var t={}
if(t=void 0===e.srcElement?e.originalTarget:e.srcElement,!this.isAosElement(t)){
var n={
type:"ajax",
time:(new Date).getTime(),
className:t.className,
event:"mousedown"
}
chrome.runtime.sendMessage(n)
}
}catch(e){}
}
windowKeyDown(e){
try{
if(13!=e.keyCode){
return
}
var t={}
if(t=void 0===e.srcElement?e.originalTarget:e.srcElement,!this.isAosElement(t)){
var n={
type:"ajax",
time:(new Date).getTime(),
className:t.className,
event:"enterdown"
}
chrome.runtime.sendMessage(n)
}
}catch(e){}
}
windowLoad(e){
try{
if(""===document.title){
return
}
var t={
type:"pageTitle",
title:document.title
}
chrome.runtime.sendMessage(t)
}catch(e){}
}
}).start()
}])
