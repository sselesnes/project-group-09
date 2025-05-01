import{A as m}from"./assets/vendor-DwbG9ayR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u="/images/my-projects/sprite.svg";m.init();const g=[{src1x:"./my-projects/rectangle-11-1x.jpg",src2x:"./my-projects/rectangle-11-2x.jpg",src:"./my-projects/rectangle-11-1x.jpg",alt:"Wallet webservice",link:"https://github.com/sselesnes/project-group-09"},{src1x:"./my-projects/rectangle-9-1x.jpg",src2x:"./my-projects/rectangle-9-2x.jpg",src:"./my-projects/rectangle-9-1x.jpg",alt:"Green harvest webservice",link:"https://github.com/sselesnes/project-group-09"},{src1x:"./my-projects/rectangle-12-1x.jpg",src2x:"./my-projects/rectangle-12-2x.jpg",src:"./my-projects/rectangle-12-1x.jpg",alt:"English Excellence website",link:"https://github.com/sselesnes/project-group-09"},{src1x:"./my-projects/rectangle-10-1x.jpg",src2x:"./my-projects/rectangle-10-2x.jpg",src:"./my-projects/rectangle-10-1x.jpg",alt:"Power Pulse webservice",link:"https://github.com/sselesnes/project-group-09"},{src1x:"./my-projects/rectangle-7-1x.jpg",src2x:"./my-projects/rectangle-7-2x.jpg",src:"./my-projects/rectangle-7-1x.jpg",alt:"Mimino website",link:"https://github.com/sselesnes/project-group-09"},{src1x:"./my-projects/rectangle-8-1x.jpg",src2x:"./my-projects/rectangle-8-2x.jpg",src:"./my-projects/rectangle-8-1x.jpg",alt:"Vyshyvanka Vibes Landing Page",link:"https://github.com/sselesnes/project-group-09"},{src1x:"./my-projects/rectangle-6-1x.jpg",src2x:"./my-projects/rectangle-6-2x.jpg",src:"./my-projects/rectangle-6-1x.jpg",alt:"Chego Jewelry website",link:"https://github.com/sselesnes/project-group-09"},{src1x:"./my-projects/rectangle-4-1x.jpg",src2x:"./my-projects/rectangle-4-2x.jpg",src:"./my-projects/rectangle-4-1x.jpg",alt:"Energy Flow webservice",link:"https://github.com/sselesnes/project-group-09"},{src1x:"./my-projects/rectangle-5-1x.jpg",src2x:"./my-projects/rectangle-5-2x.jpg",src:"./my-projects/rectangle-5-1x.jpg",alt:"Fruitbox online store",link:"https://github.com/sselesnes/project-group-09"},{src1x:"./my-projects/first-screen-1-1x.jpg",src2x:"./my-projects/first-screen-1-2x.jpg",src:"./my-projects/first-screen-1-1x.jpg",alt:"Starlight Studio Landing Page",link:"https://github.com/sselesnes/project-group-09"}],i="/project-group-09/",p=document.querySelector(".gallery"),n=document.querySelector(".btn-load-more-my-project");let a=0;const d=3;function y(l){const s=l.map(({src1x:c,src2x:r,src:e,alt:t,link:o})=>`
      <li>
        <a href="${o}" class="gallery-link" target="_blank" rel="noopener noreferrer">
          <img data-aos="flip-up" data-aos-duration="500" data-aos-easing="linear"
            class="image-my-project" srcset="${i}${c} 1x, ${i}${r} 2x"
            src="${i}${e}" alt="${t}" />
        </a>
        <p class="text-my-project">React, JavaScript, Node JS, Git</p>
        <div class="div-my-project"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-easing="linear"
          data-aos-duration="500">
          <h3 class="names-my-project">${t}</h3>
          <button class="button-my-project" onclick="window.open('${o}', '_blank')">
            <span class="visit-my-project">VISIT</span>
            <svg class="svg-my-project" height="24" width="24">
              <use class="svg-visit-my-project" href="${u}#icon-visit-arrow"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("");p.insertAdjacentHTML("beforeend",s)}async function j(l=!0){n.disabled=!0,n.classList.add("disabled");const s=g.slice(a,a+d),c=p.lastElementChild;await new Promise(e=>setTimeout(e,200)),y(s);const r=c?c.nextElementSibling:p.firstElementChild;l&&r&&r.scrollIntoView({behavior:"smooth",block:"start"}),a+=s.length,a>=g.length?n.style.display="none":(n.disabled=!1,n.classList.remove("disabled"))}n.addEventListener("click",j);j(!1);
//# sourceMappingURL=index.js.map
