parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../img/bg.jpg":[["bg.a2e7884d.jpg","JxVT"],"JxVT"]}],"VJXI":[function(require,module,exports) {
"use strict";function t(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor({selector:e,targetDate:s}){t(this,"start",()=>{this.isActive||(this.isActive=!0,this.intervalId=setInterval(()=>{const t=this.targetDate-Date.now(),e=this.getTimeComponents(t);this.runClockFace(e),t<0&&(clearInterval(this.intervalId),this.isActive=!1,document.querySelector(selector).innerHTML='<p class="end">EXPIRED</p>')},1e3))}),this.intervalId=null,this.isActive=!1,this.targetDate=s,this.daysValue=document.querySelector(`${e} [data-value="days"]`),this.hoursValue=document.querySelector(`${e} [data-value="hours"]`),this.minsValue=document.querySelector(`${e} [data-value="mins"]`),this.secsValue=document.querySelector(`${e} [data-value="secs"]`),this.daysText=document.querySelector(`${e} .time-count__days .time-count__text`),this.hoursText=document.querySelector(`${e} .time-count__hours .time-count__text`),this.minutesText=document.querySelector(`${e} .time-count__minutes .time-count__text`),this.secondsText=document.querySelector(`${e} .time-count__seconds .time-count__text`)}getTimeComponents(t){return{days:this.addZero(Math.floor(t/864e5)),hours:this.addZero(Math.floor(t%864e5/36e5)),mins:this.addZero(Math.floor(t%36e5/6e4)),seconds:this.addZero(Math.floor(t%6e4/1e3))}}addZero(t){return(parseInt(t,10)<10?"0":"")+t}declOfNum(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}runClockFace({days:t,hours:e,mins:s,seconds:o}){this.daysValue.textContent=t,this.hoursValue.textContent=e,this.minsValue.textContent=s,this.secsValue.textContent=o,this.daysText.textContent=this.declOfNum(t,["день","дня","дней"]),this.hoursText.textContent=this.declOfNum(e,["час","часа","часов"]),this.minutesText.textContent=this.declOfNum(s,["минута","минуты","минут"]),this.secondsText.textContent=this.declOfNum(o,["секунда","секунды","секунд"])}}exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=t(require("./js/сountdownTimer"));function t(e){return e&&e.__esModule?e:{default:e}}const r=new e.default({selector:"#timer-1",targetDate:new Date("jan 01, 2022")});r.start();
},{"./sass/main.scss":"clu1","./js/сountdownTimer":"VJXI"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.706d6aad.js.map