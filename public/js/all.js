Element.prototype.hasClass=function(e){for(var s=this.className.split(" "),t=0;t<s.length;t++)if(s[t]===e)return!0;return!1},Element.prototype.removeClass=function(e){return!!this.hasClass(e)&&(this.className=this.className.replace(e,""),!0)},Element.prototype.addClass=function(e){return!this.hasClass(e)&&(this.className+=" "+e,!0)},Element.prototype.toggleClass=function(e){this.hasClass(e)?this.removeClass(e):this.addClass(e)},document.addEventListener("DOMContentLoaded",function(){var e=(document.getElementById("wrapper"),document.getElementById("scrollUp"));e&&(window.addEventListener("scroll",function(s){window.scrollY>300?e.removeClass("hidden"):e.addClass("hidden")}),e.addEventListener("click",function(e){window.scrollTo(0,0)}))});