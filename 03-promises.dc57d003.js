function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=o);var i=o("7Y9D8");const l=document.querySelector(".form");let u=null;l.addEventListener("submit",(function(e){e.preventDefault();new FormData(e.currentTarget).forEach(((e,t)=>{a[t]=e})),setTimeout((()=>{u=setInterval(f,a.step),a.delayTime=Number(a.delay)}),a.delay)}));const a={};let d=0;const f=()=>{if(Number(a.amount)===d)return clearInterval(u),d=0,void(a.delayTime=0);d+=1,new Promise(((e,t)=>{Math.random()>.4&&e(),t()})).then(s).catch(c),1!==d&&(a.delayTime+=Number(a.step))};function s(){e(i).Notify.success(`✅ Fulfilled promise ${d} in ${a.delayTime}ms`,{timeout:6e3})}function c(){e(i).Notify.failure(`❌ Rejected promise ${d} in ${a.delayTime}ms`,{timeout:6e3})}
//# sourceMappingURL=03-promises.dc57d003.js.map
