"use strict";(self.webpackChunkkuoni=self.webpackChunkkuoni||[]).push([[7943],{333:function(e,t,n){n(6774),n(806),n(1307)},1307:function(){var e=function(){function e(e){this.config=e,this.getDOM(e.selector,e.trigger),this.initSidebar(),this.initValidation(),this.errors=0}return e.prototype.getDOM=function(e,t){var n=this;this.sidebar=document.querySelector(e),this.sidebar&&(this.sidebarContent=this.sidebar.querySelector(".sidebar__content"),this.sidebarHeader=this.sidebar.querySelector(".sidebar__header"),this.fauxInput=this.sidebar.querySelector("#faux-input"),this.form=this.sidebar.querySelector("form")),this.sidebarContent&&(this.sidebarBody=this.sidebarContent.querySelector(".sidebar__body"),this.storeIdInput=this.sidebarContent.querySelector("[name='storeId']"),this.storeNameInput=this.sidebarContent.querySelector("[name='storeName']"),this.fauxSelect=this.sidebarContent.querySelector(".faux-select"),this.sidebarClose=this.sidebarContent.querySelector(".close-sidebar"),this.sidebarForm=this.sidebarContent.querySelector("form"),this.sidebarNotSureOptions=this.sidebarContent.querySelectorAll(".not-sure"),this.sidebarInputs=this.sidebarContent.querySelectorAll("input"),this.sidebarDateInput=function(){return n.sidebarContent.querySelector("input#appointment-date")},this.sidebarTimeInput=function(){return n.sidebarContent.querySelector("select#appointment-time")},this.sidebarDateInputs=this.sidebarContent.querySelectorAll("input.date-capture")),this.fauxSelect&&(this.fauxSelectSelected=this.fauxSelect.querySelector(".faux-select__selected"),this.fauxDropdown=this.fauxSelect.querySelector(".faux-select__dropdown")),this.fauxDropdown&&(this.fauxDropdownOptions=this.fauxDropdown.querySelectorAll("li")),this.sidebarOpen=function(){return document.querySelector(t)},this.body=document.querySelector("body"),this.theWindow=window,this.scrollAmount,this.form&&(this.formInputs=this.form.querySelectorAll("input[required]:not([type='hidden']), select[required], textarea[required]"),this.nextStageButton=this.form.querySelector("#form-button"))},e.prototype.unlockBody=function(){this.body.classList.remove("lock"),this.body.style="",this.theWindow.scrollTo(0,this.scrollAmount)},e.prototype.lockBody=function(){this.scrollAmount=this.theWindow.scrollY,this.body.classList.toggle("lock"),this.body.style.top=-this.scrollAmount+"px"},e.prototype.initSidebar=function(){var e=this;document.addEventListener("click",(function(t){var n=e.sidebarOpen();t.target instanceof Element&&(t.target!=n&&t.target.parentNode!=n||e.openSidebar(n.dataset.storeId,n.dataset.storeName,n.dataset.destination))})),this.sidebarNotSureOptions&&this.sidebarNotSureOptions.forEach((function(t){return t.addEventListener("click",(function(t){var n=t.currentTarget,i=Array.from(n.parentNode.parentNode.childNodes).find((function(e){return"INPUT"==e.tagName}));i instanceof HTMLInputElement&&(i.id.indexOf("faux")>-1?e.createTag("I'm not sure","enquiryDetails.destinations"):(i.type="text",i.value="I'm not sure",i.dispatchEvent(new Event("keyup"))))}))})),this.sidebarDateInputs&&this.sidebarDateInputs.forEach((function(e){return e.addEventListener("click",(function(t){e.type="date"}))})),this.sidebarClose&&this.sidebarClose.addEventListener("click",(function(){e.closeSidebar()})),this.sidebar&&this.sidebar.addEventListener("click",(function(){e.sidebar.classList.remove("active"),e.fauxDropdown.classList.remove("active"),e.unlockBody()})),this.sidebarContent&&this.sidebarContent.addEventListener("click",(function(t){t.stopPropagation(),e.fauxDropdown.classList.remove("active")})),this.fauxSelect&&this.fauxSelect.addEventListener("click",(function(t){t.stopPropagation(),e.fauxDropdown.classList.toggle("active")})),this.fauxDropdownOptions&&this.fauxDropdownOptions.forEach((function(t){t.addEventListener("click",(function(n){return e.createTag(t.textContent,n.target.dataset.name)}))}))},e.prototype.openSidebar=function(e,t,n){e&&this.setStore(e,t),n&&document.querySelectorAll('[id="faux-id-'+n+'"]').length<2&&this.setDestination(n),this.sidebar.classList.add("active"),this.lockBody()},e.prototype.closeSidebar=function(){this.sidebar.classList.remove("active"),this.unlockBody()},e.prototype.setDestination=function(e){document.querySelectorAll('[data-selector="'+e+'"]').forEach((function(e){return e.click()})),this.sidebarContent.click()},e.prototype.setStore=function(e,t){this.storeIdInput.value=e,this.storeNameInput.value=t,window.appointmentPiniaInstance.setLoading(!0),window.appointmentPiniaInstance.selectStoreById(e),window.appointmentPiniaInstance.calculateDates().then((function(){window.appointmentPiniaInstance.selectDate(new Date(window.appointmentPiniaInstance.selectableDates[1]||window.appointmentPiniaInstance.selectableDates[0])),window.appointmentPiniaInstance.calculateTimes().then((function(){window.appointmentPiniaInstance.setLoading(!1)}))}))},e.prototype.createTag=function(e,t){var n=this;if(this.sidebar.querySelector('[id="faux-id-'+e+'"]'))this.sidebar.querySelector('[id="faux-id-'+e+'"]').remove(),0==this.fauxSelectSelected.childElementCount&&(this.fauxInput.value="",this.fauxInput.nextElementSibling.style.display="none"),(i=this.sidebar.querySelector('[id="hidden-input-'+e+'"]')).remove();else{var i,r=document.createElement("li"),o=document.createElement("img");o.src="/images/icons/cancel.svg",r.textContent=e,r.id="faux-id-"+e,this.fauxInput.value="selected",r.appendChild(o),r.addEventListener("click",(function(e){return e.stopPropagation()})),o.addEventListener("click",(function(){return n.createTag(e,t)})),this.fauxSelectSelected.appendChild(r),this.fauxInput.nextElementSibling.style.display="none",(i=document.createElement("input")).type="hidden",i.name=t,i.value=e,i.id="hidden-input-"+e,this.sidebarForm.appendChild(i)}},e.prototype.sendData=function(e){var t=this,n=new FormData(this.form);console.log("Sending data",Array.from(n));for(var i=new XMLHttpRequest,r=[],o=0,s=Array.from(n);o<s.length;o++){var a=s[o],d=a[0],l=a[1];r.push(encodeURIComponent(d)+"="+encodeURIComponent(l))}var c=r.join("&").replace(/%20/g,"+");i.addEventListener("load",(function(e){200!=e.currentTarget.status?t.showFormError():t.showFormThanks()})),i.addEventListener("error",(function(e){t.showFormError()})),i.open("POST",e.action),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.send(c)},e.prototype.showFormError=function(){this.sidebarForm.remove(),this.sidebarHeader.remove();var e=document.createElement("div");e.className="form-fail";var t=document.createElement("h6"),n=document.createElement("p");t.innerText="Sorry",n.innerText="Something went wrong, please call with your enquiry.",e.appendChild(t),e.appendChild(n),this.sidebarBody.appendChild(e),document.querySelectorAll(".sidebar__content").forEach((function(e){return e.scrollTo({top:0,behavior:"smooth"})}))},e.prototype.showFormThanks=function(){var e,t,n=document.createElement("div");n.className="form-success";var i=document.createElement("div");i.setAttribute("style","width:100%; height:300px; margin-bottom:25px;"+(null===(t=null===(e=window.appointmentPiniaInstance)||void 0===e?void 0:e.selectedStore)||void 0===t?void 0:t.imageCss));var r=document.createElement("h6"),o=document.createElement("p"),s=this.config.thankyouMessage;this.storeNameInput&&(s=s.replace("<STORE NAME>",this.storeNameInput.value)),this.sidebarDateInput()&&(s=s.replace("<DATE>",this.sidebarDateInput().value)),this.sidebarTimeInput()&&(s=s.replace("<TIME>",this.sidebarTimeInput().value)),r.innerText="Thank you",o.innerText=s,n.appendChild(r),n.appendChild(o),this.sidebarForm.remove(),this.sidebarHeader.innerHTML="",this.sidebarHeader.appendChild(i),this.sidebarBody.appendChild(n),this.sidebarBody.style.padding="0",document.querySelectorAll(".sidebar__content").forEach((function(e){return e.scrollTo({top:0,behavior:"smooth"})}))},e.prototype.initValidation=function(){var e=this;this.form&&this.form.addEventListener("submit",(function(e){return e.preventDefault()})),this.formInputs&&this.formInputs.forEach((function(e){var t=document.createElement("small");t.className="error",e.after(t),"select-one"!=e.type?e.addEventListener("keyup",(function(){return e.nextElementSibling.classList.contains("error")&&(e.nextElementSibling.style.display="none")})):e.addEventListener("change",(function(){return e.nextElementSibling.classList.contains("error")&&(e.nextElementSibling.style.display="none")}))})),this.nextStageButton&&this.nextStageButton.addEventListener("click",(function(){e.errors=0,e.formInputs.forEach((function(t){var n;if(!t.value&&t.required){e.errors+=1;var i=null===(n=t.previousElementSibling)||void 0===n?void 0:n.textContent,r=t.nextElementSibling;r.classList.contains("error")&&(r.textContent=null!=i?i+" is required":"Required",t.hidden&&(r.textContent="Destination required"),r.style.display="block")}"email"==t.type&&(/@[a-zA-Z]+/.test(t.value)||(e.errors+=1,t.nextElementSibling.textContent="Email is not valid",t.nextElementSibling.style.display="block")),t.pattern&&(new RegExp(t.pattern).test(t.value)||(e.errors+=1,t.nextElementSibling.textContent="Please use a valid format",t.nextElementSibling.style.display="block"))})),0===e.errors?(e.nextStageButton.remove(),e.sendData(e.sidebarForm)):document.querySelector(".sidebar__body .form-input small.error[style='display: block;']").parentNode.scrollIntoView({behavior:"smooth"})}))},e}();window.kuoni=window.kuoni||{},window.kuoni.enquire=new e({selector:".sidebar.enquire",trigger:"#open-sidebar",thankyouMessage:window.CmsGlobalContent.KuoniEnquireThankYouText||"Your enquiry has been recieved and we will respond as soon as possible."}),window.kuoni.partnerForm=new e({selector:".sidebar.partner",trigger:"#open-partner-sidebar",thankyouMessage:window.CmsGlobalContent.PartnerEnquireThankYouText||"Your request for an appointment with <STORE NAME> on <DATE> at <TIME> has been sent"})}},function(e){e.O(0,[7064,6026,7239,7577],(function(){return 333,e(e.s=333)})),e.O()}]);