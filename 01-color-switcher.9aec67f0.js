!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");console.log(e),console.log(t),e.addEventListener("click",c);var n=null;function c(){n=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),console.log("kkkkkkkkkkk"),e.removeEventListener("click",c)}t.addEventListener("click",(function(){clearInterval(n),e.addEventListener("click",c)}))}();
//# sourceMappingURL=01-color-switcher.9aec67f0.js.map
