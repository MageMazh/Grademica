System.register(["./index-legacy-e06f94a0.js"],(function(e,t){"use strict";var i;return{setters:[e=>{i=e.K}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
const t=e("KEYBOARD_DID_OPEN","ionKeyboardDidShow"),s=e("KEYBOARD_DID_CLOSE","ionKeyboardDidHide");let o={},r={},a=!1;e("resetKeyboardAssist",(()=>{o={},r={},a=!1})),e("startKeyboardAssist",(e=>{if(i.getEngine())n(e);else{if(!e.visualViewport)return;r=b(e.visualViewport),e.visualViewport.onresize=()=>{y(e),g()||p(e)?d(e):c(e)&&h(e)}}}));const n=e=>{e.addEventListener("keyboardDidShow",(t=>d(e,t))),e.addEventListener("keyboardDidHide",(()=>h(e)))},d=e("setKeyboardOpen",((e,t)=>{f(e,t),a=!0})),h=e("setKeyboardClose",(e=>{u(e),a=!1})),g=e("keyboardDidOpen",(()=>{const e=(o.height-r.height)*r.scale;return!a&&o.width===r.width&&e>150})),p=e("keyboardDidResize",(e=>a&&!c(e))),c=e("keyboardDidClose",(e=>a&&r.height===e.innerHeight)),f=(e,i)=>{const s=i?i.keyboardHeight:e.innerHeight-r.height,o=new CustomEvent(t,{detail:{keyboardHeight:s}});e.dispatchEvent(o)},u=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},y=e("trackViewportChanges",(e=>{o=Object.assign({},r),r=b(e.visualViewport)})),b=e("copyVisualViewport",(e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})))}}}));
