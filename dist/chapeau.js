var Chapeau=function(){"use strict";const u=`
		<iframe class="c-video__iframe" style="display: none" frameborder="0" allow="fullscreen"></iframe>
		<img class="c-video__thumbnail">
		<div class="c-video__overlay">
			<a href="#" class="c-video__button w-button">Video laden</a>
			<span class="c-video__text">
			Das Video wird von YouTube eingebettet.<br>
			Es gelten die
			<a class="c-video__link" href="https://policies.google.com/privacy?hl=de"
				target="_blank">Datenschutzerklärungen</a>
			von Google.
			</span>
		</div>
	`;let d;function m(){Array.from(document.querySelectorAll(".w-richtext-figure-type-video > div, .w-embed-youtubevideo")).forEach(a=>{const t=a.querySelector("iframe").src;a.setAttribute("c-video",""),a.setAttribute("data-url",t)}),d=Array.from(document.querySelectorAll("[c-video]")).map(p),sessionStorage.getItem("c-accept_yt")=="true"&&r()}function r(){d.forEach(e=>e.load()),sessionStorage.setItem("c-accept_yt",!0)}function p(e){e.classList.add("c-video"),e.innerHTML=u;const a=e.querySelector(".c-video .c-video__iframe"),t=e.querySelector(".c-video .c-video__thumbnail"),c=e.querySelector(".c-video .c-video__overlay"),n=e.querySelector(".c-video .c-video__link"),s=e.dataset.url,o=v(s);e.dataset.thumbnail!=null?t.src=e.dataset.thumbnail:(t.src=`https://img.youtube.com/vi/${o}/maxresdefault.jpg`,t.addEventListener("load",()=>{t.naturalHeight<=90&&(t.src=`http://img.youtube.com/vi/${o}/sddefault.jpg`)})),c.addEventListener("click",()=>r()),n.addEventListener("click",l=>l.stopPropagation()),e.classList.contains("w-embed-youtubevideo")&&(e.style.paddingTop=null);function b(){const l=`https://www.youtube-nocookie.com/embed/${o}`;a.src=l,a.style.display=null,t.style.display="none",c.style.display="none"}return{load:b}}function v(e){const a=new URL(e);let t=a.searchParams.get("v");return t||(t=a.pathname.split("/").slice(-1)),t}const y=`
		<iframe class="c-map__iframe" style="display: none" frameborder="0" allow="fullscreen" referrerpolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
		<div class="c-map__overlay">
			<a href="#" class="c-map__button w-button">Karte laden</a>
			<p class="c-map__text">
			Die Karte wird von Google Maps eingebettet.<br>
			Es gelten die 
			<a class="c-map__link" href="https://policies.google.com/privacy?hl=de"
				target="_blank">Datenschutzerklärungen</a>
			von Google.
			</p>
		</div>
		`;function f(e){e.classList.add("c-map"),e.innerHTML=y;const a=e.querySelector(".c-map .c-map__iframe"),t=e.querySelector(".c-map .c-map__overlay"),c=e.querySelector(".c-map .c-map__link"),n=e.dataset.url;t.addEventListener("click",()=>i()),c.addEventListener("click",o=>o.stopPropagation());function s(){a.src=n,a.style.display=null,t.style.display="none"}return{load:s}}Array.from(document.querySelectorAll('[c-map="iframe"]')).forEach(e=>{const a=e.querySelector("iframe").src;e.setAttribute("data-url",a)});const _=Array.from(document.querySelectorAll("[c-map]")).map(f);function i(){_.forEach(e=>e.load()),sessionStorage.setItem("c-accept_gm",!0)}sessionStorage.getItem("c-accept_gm")=="true"&&i();function g(){window.CHAPEAU_DEV||m()}return g(),{loadVideos:r,loadMaps:i}}();
//# sourceMappingURL=chapeau.js.map
