!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.setAttribute("disabled","disabled"),e.addEventListener("click",a);var n=null;function a(){t.removeAttribute("disabled"),e.setAttribute("disabled","disabled"),r.style.backgroundColor=d(),n=setInterval((function(){r.style.backgroundColor=d()}),1e3),e.removeEventListener("click",a)}t.addEventListener("click",(function(){e.removeAttribute("disabled"),t.setAttribute("disabled","disabled"),clearInterval(n),e.addEventListener("click",a)}))}();
//# sourceMappingURL=01-color-switcher.a82d6886.js.map
