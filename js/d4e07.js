jQuery(function(e){function t(){o&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function n(e){o&&(localStorage.setItem(a,e),sessionStorage.setItem(a,e))}function r(){e.ajax(s)}if("undefined"==typeof wc_cart_fragments_params)return!1;var o=!0,a=wc_cart_fragments_params.cart_hash_key;try{o="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){o=!1}var s={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(r){r&&r.fragments&&(e.each(r.fragments,function(t,n){e(t).replaceWith(n)}),o&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r.fragments)),n(r.cart_hash),r.cart_hash&&t()),e(document.body).trigger("wc_fragments_refreshed"))}};if(o){var i=null;e(document.body).on("wc_fragment_refresh updated_wc_div",function(){r()}),e(document.body).on("added_to_cart removed_from_cart",function(e,r,o){var s=sessionStorage.getItem(a);null!==s&&s!==undefined&&""!==s||t(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r)),n(o)}),e(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(r,864e5)}),e(window).on("storage onstorage",function(e){a===e.originalEvent.key&&localStorage.getItem(a)!==sessionStorage.getItem(a)&&r()}),e(window).on("pageshow",function(t){t.originalEvent.persisted&&(e(".widget_shopping_cart_content").empty(),e(document.body).trigger("wc_fragment_refresh"))});try{var c=e.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(a),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=1*m+864e5,f=(new Date).getTime();if(d<f)throw"Fragment expired";i=setTimeout(r,d-f)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";e.each(c,function(t,n){e(t).replaceWith(n)}),e(document.body).trigger("wc_fragments_loaded")}catch(w){r()}}else r();Cookies.get("woocommerce_items_in_cart")>0?e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),e(document.body).on("adding_to_cart",function(){e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()})});;/*!
* jQuery UI Accordion 1.11.4
* http://jqueryui.com
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license.
* http://jquery.org/license
*
* http://api.jqueryui.com/accordion/
*/!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],e):e(jQuery)}(function(d){return d.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=d(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():d()}},_createIcons:function(){var e=this.options.icons;e&&(d("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){"active"!==e?("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||!1!==this.options.active||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t))):this._activate(t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var t=d.ui.keyCode,i=this.headers.length,a=this.headers.index(e.target),s=!1;switch(e.keyCode){case t.RIGHT:case t.DOWN:s=this.headers[(a+1)%i];break;case t.LEFT:case t.UP:s=this.headers[(a-1+i)%i];break;case t.SPACE:case t.ENTER:this._eventHandler(e);break;case t.HOME:s=this.headers[0];break;case t.END:s=this.headers[i-1]}s&&(d(e.target).attr("tabIndex",-1),d(s).attr("tabIndex",0),s.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===d.ui.keyCode.UP&&e.ctrlKey&&d(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=d()):!1===e.active?this._activate(0):this.active.length&&!d.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=d()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var i,e=this.options,t=e.heightStyle,a=this.element.parent();this.active=this._findActive(e.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var e=d(this),t=e.uniqueId().attr("id"),i=e.next(),a=i.uniqueId().attr("id");e.attr("aria-controls",a),i.attr("aria-labelledby",t)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(e.event),"fill"===t?(i=a.height(),this.element.siblings(":visible").each(function(){var e=d(this),t=e.css("position");"absolute"!==t&&"fixed"!==t&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=d(this).outerHeight(!0)}),this.headers.next().each(function(){d(this).height(Math.max(0,i-d(this).innerHeight()+d(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.headers.next().each(function(){i=Math.max(i,d(this).css("height","").height())}).height(i))},_activate:function(e){var t=this._findActive(e)[0];t!==this.active[0]&&(t=t||this.active[0],this._eventHandler({target:t,currentTarget:t,preventDefault:d.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):d()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&d.each(e.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var t=this.options,i=this.active,a=d(e.currentTarget),s=a[0]===i[0],n=s&&t.collapsible,r=n?d():a.next(),o=i.next(),h={oldHeader:i,oldPanel:o,newHeader:n?d():a,newPanel:r};e.preventDefault(),s&&!t.collapsible||!1===this._trigger("beforeActivate",e,h)||(t.active=!n&&this.headers.index(a),this.active=s?d():a,this._toggle(h),i.removeClass("ui-accordion-header-active ui-state-active"),t.icons&&i.children(".ui-accordion-header-icon").removeClass(t.icons.activeHeader).addClass(t.icons.header),s||(a.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),t.icons&&a.children(".ui-accordion-header-icon").removeClass(t.icons.header).addClass(t.icons.activeHeader),a.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var t=e.newPanel,i=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=t,this.prevHide=i,this.options.animate?this._animate(t,i,e):(i.hide(),t.show(),this._toggleComplete(e)),i.attr({"aria-hidden":"true"}),i.prev().attr({"aria-selected":"false","aria-expanded":"false"}),t.length&&i.length?i.prev().attr({tabIndex:-1,"aria-expanded":"false"}):t.length&&this.headers.filter(function(){return 0===parseInt(d(this).attr("tabIndex"),10)}).attr("tabIndex",-1),t.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,i,t){function a(){o._toggleComplete(t)}var s,n,r,o=this,h=0,d=e.css("box-sizing"),c=e.length&&(!i.length||e.index()<i.index()),l=this.options.animate||{},u=c&&l.down||l;return"number"==typeof u&&(r=u),"string"==typeof u&&(n=u),n=n||u.easing||l.easing,r=r||u.duration||l.duration,i.length?e.length?(s=e.show().outerHeight(),i.animate(this.hideProps,{duration:r,easing:n,step:function(e,t){t.now=Math.round(e)}}),void e.hide().animate(this.showProps,{duration:r,easing:n,complete:a,step:function(e,t){t.now=Math.round(e),"height"!==t.prop?"content-box"===d&&(h+=t.now):"content"!==o.options.heightStyle&&(t.now=Math.round(s-i.outerHeight()-h),h=0)}})):i.animate(this.hideProps,r,n,a):e.animate(this.showProps,r,n,a)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})});