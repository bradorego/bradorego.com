Element.prototype.hasClass=function(e){for(var t=this.className.split(" "),o=0;o<t.length;o++)if(t[o]===e)return!0;return!1},Element.prototype.removeClass=function(e){return!!this.hasClass(e)&&(this.className=this.className.replace(e,""),!0)},Element.prototype.addClass=function(e){return!this.hasClass(e)&&(this.className+=" "+e,!0)},Element.prototype.toggleClass=function(e){this.hasClass(e)?this.removeClass(e):this.addClass(e)},document.addEventListener("DOMContentLoaded",function(){document.getElementById("wrapper");var e=document.getElementById("scrollUp");$toggles=Array.from(document.getElementsByClassName("showcase-toggle")),$body=document.querySelector("body"),$dmToggle=document.getElementById("darkmode-toggle"),toggleClickListener=(e=>{e.preventDefault(),e.stopPropagation();let t=e.target.parentElement.parentElement.parentElement;t.getElementsByTagName("img")[0].src=e.target.dataset.imgSrc,Array.from(t.getElementsByClassName("showcase-toggle")).forEach(e=>{e.removeClass("active")}),e.target.addClass("active")}),JSON.parse(window.localStorage.getItem("bjo-dark-mode"))&&($body.toggleClass("dark-mode"),$dmToggle.checked=!0),AOS.init({once:!0,duration:500}),$dmToggle.addEventListener("change",function(e){$body.toggleClass("dark-mode"),window.localStorage.setItem("bjo-dark-mode",!!this.checked)}),$toggles.forEach(e=>{e.addEventListener("click",toggleClickListener)}),window.location.hash&&window.scrollBy(0,-100),e&&(window.addEventListener("scroll",function(t){window.scrollY>300?e.removeClass("hidden"):e.addClass("hidden")}),e.addEventListener("click",function(e){window.scrollTo(0,0)})),window.setTimeout($body.removeClass("preload"),100)});