import{a as g,S as p,i as a}from"./assets/vendor-D8hBcPQM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="52565301-d9213fb435e2a20dcf29b0aa1";function b(s){const o={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return g.get(y,{params:o}).then(r=>r.data).catch(r=>{throw r})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){if(!Array.isArray(s)||s.length===0)return;const o=s.map(r=>{const{webformatURL:n,largeImageURL:e,tags:t,likes:i,views:f,comments:m,downloads:d}=r;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <div class="thumb">
              <img loading="lazy" src="${n}" alt="${t}" />
            </div>
            <div class="info">
              <p><b>Likes</b>: ${i}</p>
              <p><b>Views</b>: ${f}</p>
              <p><b>Comments</b>: ${m}</p>
              <p><b>Downloads</b>: ${d}</p>
            </div>
          </a>
        </li>`}).join("");l.insertAdjacentHTML("beforeend",o),L.refresh()}function w(){l.innerHTML=""}function S(){c&&c.classList.add("is-active")}function q(){c&&c.classList.remove("is-active")}const u=document.querySelector(".form"),$=u.querySelector('input[name="search-text"]');u.addEventListener("submit",s=>{s.preventDefault();const o=$.value.trim();if(o===""){a.warning({title:"Warning",message:"Please enter a search query"});return}S(),w(),b(o).then(r=>{if(!r||!Array.isArray(r.hits)||r.hits.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}v(r.hits),a.success({title:"Success",message:`Found ${r.hits.length} images for "${o}"`})}).catch(r=>{console.error("Fetch error:",r),a.error({title:"Error",message:"Something went wrong while fetching images. Please try again later."})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
