"use strict";(self.webpackChunkkuoni=self.webpackChunkkuoni||[]).push([[6418],{1654:function(t,e,i){var s=i(9257);i(6774),i(806),i(1307),i(9064),new(function(){function t(){this.getDOM(),this.initFilters(),this.initSwiper()}return t.prototype.getDOM=function(){this.filterTagsParent=document.querySelector("#filter-tags"),this.filterTagsParent&&(this.tagsMenu=this.filterTagsParent.querySelector("ul.tags"),this.tagsMenu&&(this.tagsCheckboxes=this.tagsMenu.querySelectorAll("input[type='checkbox']"))),this.sortByParent=document.querySelector("#sort-by"),this.sortByParent&&(this.sortByMenu=this.sortByParent.querySelector("ul.sort-by"),this.sortByText=document.querySelector("ul.sort-by > li:not(.filter-title)"),this.sortByCheckboxes=this.sortByText.querySelectorAll("input[type='checkbox']")),this.filterTags=document.querySelector(".filter-menu-tags"),this.filterTags&&(this.filterClear=this.filterTags.querySelector(".clear")),this.collectionsList=document.getElementById("collections-list"),this.collectionHighlight=document.getElementById("collection-highlight"),this.filters=document.querySelectorAll(".filter-menu__type > ul > li:not(.filter-title)"),this.filterClose=document.querySelectorAll(".filter-close"),this.body=document.querySelector("body"),this.theWindow=window,this.scrollAmount},t.prototype.initSwiper=function(){new s.ZP(".four-cards-swiper",{slidesPerView:"auto",spaceBetween:20,navigation:{nextEl:".swiper-button-next-four-cards",prevEl:".swiper-button-prev-four-cards"}})},t.prototype.initFilters=function(){var t,e,i,s,r,o=this;this.filteredCards=[],this.filterCount=0,this.filters.forEach((function(t){t.addEventListener("click",(function(e){e.stopPropagation(),window.innerWidth>=691?(o.filters.forEach((function(t){return t.classList.remove("active")})),t.classList.add("active")):t.classList.toggle("active")}))})),document.addEventListener("click",(function(){o.filters.forEach((function(t){return t.classList.remove("active")}))})),this.filterClose.forEach((function(t){return t.addEventListener("click",(function(t){var e;t.stopPropagation(),o.unlockBody(),o.tagsMenu.classList.remove("active"),o.filterTagsParent.classList.remove("active"),o.sortByParent.classList.remove("active"),o.sortByMenu.classList.remove("active"),null===(e=o.filterTags)||void 0===e||e.classList.remove("active")}))})),this.filters.forEach((function(t){var e=t.querySelectorAll("ul.tags li ul li"),i=t.querySelectorAll("ul.sort-by li ul li");e.forEach((function(t){return t.addEventListener("click",(function(e){e.stopPropagation(),o.createFilter(t.childNodes[0].textContent)}))})),i.forEach((function(t){return t.addEventListener("click",(function(e){e.stopPropagation(),o.sortByText.children[0].textContent=t.textContent,o.sortByCheckboxes.forEach((function(t){return t.checked=!1})),t.querySelector("input").checked=!0}))}))})),null===(t=this.filterClear)||void 0===t||t.addEventListener("click",(function(){o.filterTags.querySelectorAll("li:not(.clear, .button)").forEach((function(t){return t.remove()})),o.filterCount=0,o.filterClear.classList.remove("active"),o.tagsCheckboxes.forEach((function(t){return t.checked=!1})),o.filterTags.classList.remove("active"),o.cards().forEach((function(t){return t.classList.remove("hide")})),o.collectionsList.classList.remove("hide"),o.collectionHighlight.classList.remove("hide")})),null===(e=this.tagsMenu)||void 0===e||e.addEventListener("click",(function(t){return t.stopPropagation()})),null===(i=this.sortByMenu)||void 0===i||i.addEventListener("click",(function(t){return t.stopPropagation()})),null===(s=this.filterTagsParent)||void 0===s||s.addEventListener("click",(function(t){o.sortByMenu.classList.remove("active"),o.sortByParent.classList.remove("active"),o.tagsMenu.classList.toggle("active"),t.currentTarget.classList.toggle("active"),o.lockBody()})),null===(r=this.sortByParent)||void 0===r||r.addEventListener("click",(function(t){o.tagsMenu.classList.remove("active"),o.filterTagsParent.classList.remove("active"),o.sortByMenu.classList.toggle("active"),t.currentTarget.classList.toggle("active"),o.lockBody()}))},t.prototype.unlockBody=function(){this.body.classList.remove("lock"),this.body.style="",this.theWindow.scrollTo(0,this.scrollAmount)},t.prototype.lockBody=function(){this.scrollAmount=this.theWindow.scrollY,this.body.classList.toggle("lock"),this.body.style.top=-this.scrollAmount+"px"},t.prototype.cards=function(){return Array.from(document.querySelectorAll(".card"))},t.prototype.clearFilters=function(){this.filterClear.classList.remove("active"),this.filterTags.classList.remove("active"),this.cards().forEach((function(t){return t.classList.remove("hide")})),this.collectionsList.classList.remove("hide"),this.collectionHighlight.classList.remove("hide")},t.prototype.createFilter=function(t){var e=this;if(document.getElementById(t))document.getElementById(t).remove(),this.filterCount--,this.filteredCards.length=0,0===this.filterCount&&this.clearFilters(),this.filterCards(),document.getElementsByName(""+t).forEach((function(t){return t.checked=!1}));else{var i=document.createElement("li"),s=document.createElement("img");s.src="/images/icons/cancel.svg",i.textContent=t,i.id=t,i.appendChild(s),s.addEventListener("click",(function(){s.parentNode.remove(),e.filterCount--,e.filteredCards.length=0,0===e.filterCount&&e.clearFilters(),e.filterCards(),document.getElementsByName(""+t).forEach((function(t){return t.checked=!1}))})),this.filterTags.appendChild(i),this.filterCount++,this.filterCount>=1&&(this.filterClear.classList.add("active"),this.filterTags.classList.add("active")),this.filterCards()}},t.prototype.filterCards=function(){var t=this,e=this.filterTags.querySelectorAll("li:not(.clear, .button)");0==e.length?this.clearFilters():(this.collectionsList.classList.add("hide"),this.collectionHighlight.classList.add("hide"),e.forEach((function(e){t.cards().filter((function(t){return t.dataset.destinationfilter===e.textContent||t.dataset.authorfilter===e.textContent||t.dataset.holidaytypefilter===e.textContent||t.dataset.interestfilter===e.textContent})).forEach((function(e){return t.filteredCards.push(e)}))})),this.cards().forEach((function(t){return t.classList.add("hide")})),this.filteredCards.forEach((function(t){return t.classList.remove("hide")})))},t}())}},function(t){t.O(0,[7064,6026,7239,7577,4004],(function(){return 1654,t(t.s=1654)})),t.O()}]);