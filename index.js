import{a as y,S as p,i as l}from"./assets/vendor-D8hBcPQM.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",h="52565301-d9213fb435e2a20dcf29b0aa1";function b(i){const s={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return y.get(g,{params:s}).then(t=>t.data).catch(t=>{throw t})}const c=document.querySelector(".gallery"),o=document.querySelector(".loader"),L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(i){if(!Array.isArray(i)||i.length===0)return;const s=i.map(t=>{const{webformatURL:a,largeImageURL:e,tags:r,likes:n,views:f,comments:d,downloads:m}=t;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <div class="thumb">
              <img loading="lazy" src="${a}" alt="${r}" />
            </div>
            <div class="info">
              <p><b>Likes</b>: ${n}</p>
              <p><b>Views</b>: ${f}</p>
              <p><b>Comments</b>: ${d}</p>
              <p><b>Downloads</b>: ${m}</p>
            </div>
          </a>
        </li>`}).join("");c.insertAdjacentHTML("beforeend",s),L.refresh()}function w(){c.innerHTML=""}function S(){o&&(o.classList.add("is-active"),o.style.display="block",o.setAttribute("aria-hidden","false"))}function A(){o&&(o.classList.remove("is-active"),o.style.display="none",o.setAttribute("aria-hidden","true"))}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",i=>{i.preventDefault();const s=q.value.trim();if(!s){l.warning({title:"Warning",message:"Please enter a search query"});return}S(),w(),b(s).then(t=>{if(!t||!Array.isArray(t.hits)||t.hits.length===0){l.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}v(t.hits),l.success({title:"Success",message:`Found ${t.hits.length} images for "${s}"`})}).catch(t=>{l.error({title:"Error",message:"Something went wrong while fetching images. Please try again later."})}).finally(()=>{A()})});
//# sourceMappingURL=index.js.map
