!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var a=r("6JpON"),i=document.querySelector(".form"),u=null;i.addEventListener("submit",(function(e){e.preventDefault(),new FormData(e.currentTarget).forEach((function(e,n){c[n]=e})),setTimeout((function(){u=setInterval(l,c.step),c.amaund=+c.delay}),c.delay)}));var c={};var f=0,l=function(){if(+c.amount===f)return clearInterval(u),f=0,void(c.amaund=0);f+=1,new Promise((function(e,n){Math.random()>.4&&e(),n()})).then(d).catch(s),1!==f&&(c.amaund+=+c.step)};function d(){e(a).Notify.success("✅ Fulfilled promise ".concat(f," in ").concat(c.amaund,"ms"),{timeout:6e3})}function s(){e(a).Notify.failure("❌ Rejected promise ".concat(f," in ").concat(c.amaund,"ms"),{timeout:6e3})}}();
//# sourceMappingURL=03-promises.f3d1dde3.js.map