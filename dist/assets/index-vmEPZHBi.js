(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function a(o,n){if(!o){console.error("Element not found.");return}let r,i,e,t;function s(c){r=c.clientX,i=c.clientY,e=r-o.getBoundingClientRect().left,t=i-o.getBoundingClientRect().top,document.addEventListener("mousemove",d),document.addEventListener("mouseup",f)}function d(c){const l=c.clientX-e,u=c.clientY-t;o.style.left=l+"px",o.style.top=u+"px",n({x:l,y:u})}function f(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",f)}o.addEventListener("mousedown",s),o.style.position="absolute"}const p=["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff","#800080","#008000","#000080","#ffa500"],m=()=>{const o=document.querySelector(".button-add"),n=document.querySelector(".battlefield");o.addEventListener("click",()=>{var t;const r=((t=document.querySelectorAll(".pt"))==null?void 0:t.length)+1,i=Math.random()*10,e=document.createElement("div");e.style.backgroundColor=p[r%10],e.classList.add("pt"),e.textContent=r,e.id=i,a(e,console.log),n.appendChild(e)})};m();
