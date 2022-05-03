
 <!-- jQuery replaceText | http://benalman.com/projects/jquery-replacetext-plugin/ -->
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);

<!-- Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar -->
!function(a){a.fn.theiaStickySidebar=function(h){function g(k,i){return true===k.initialized||!(a("body").width()<k.minWidth)&&(function(m,l){m.initialized=true;if(0===a("#theia-sticky-sidebar-stylesheet-"+m.namespace).length){a("head").append(a('<style id="theia-sticky-sidebar-stylesheet-'+m.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'))}l.each(function(){function v(){p.fixedScrollTop=0;p.sidebar.css({"min-height":"1px"});p.stickySidebar.css({position:"static",width:"",transform:"none"})}var p={};if(p.sidebar=a(this),p.options=m||{},p.container=a(p.options.containerSelector),0==p.container.length&&(p.container=p.sidebar.parent()),p.sidebar.parent().css("-webkit-transform","none"),p.sidebar.css({position:p.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),p.stickySidebar=p.sidebar.find(".theiaStickySidebar"),0==p.stickySidebar.length){var o=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;p.sidebar.find("script").filter(function(x,s){return 0===s.type.length||s.type.match(o)}).remove();p.stickySidebar=a("<div>").addClass("theiaStickySidebar").append(p.sidebar.children());p.sidebar.append(p.stickySidebar)}p.marginBottom=parseInt(p.sidebar.css("margin-bottom"));p.paddingTop=parseInt(p.sidebar.css("padding-top"));p.paddingBottom=parseInt(p.sidebar.css("padding-bottom"));var n;var u;var w;var q=p.stickySidebar.offset().top;var r=p.stickySidebar.outerHeight();p.stickySidebar.css("padding-top",1);p.stickySidebar.css("padding-bottom",1);q=q-p.stickySidebar.offset().top;r=p.stickySidebar.outerHeight()-r-q;if(0==q){p.stickySidebar.css("padding-top",0);p.stickySidebarPaddingTop=0}else{p.stickySidebarPaddingTop=1}if(0==r){p.stickySidebar.css("padding-bottom",0);p.stickySidebarPaddingBottom=0}else{p.stickySidebarPaddingBottom=1}p.previousScrollTop=null;p.fixedScrollTop=0;v();p.onScroll=function(M){if(M.stickySidebar.is(":visible")){if(a("body").width()<M.options.minWidth){v()}else{if(M.options.disableOnResponsiveLayouts){if(M.sidebar.outerWidth("none"==M.sidebar.css("float"))+50>M.container.width()){return void v()}}var J;var I;var D=a(document).scrollTop();var B="static";if(D>=M.sidebar.offset().top+(M.paddingTop-M.options.additionalMarginTop)){var G;var L=M.paddingTop+m.additionalMarginTop;var K=M.paddingBottom+M.marginBottom+m.additionalMarginBottom;var N=M.sidebar.offset().top;var F=M.sidebar.offset().top+(J=M.container,I=J.height(),J.children().each(function(){I=Math.max(I,a(this).height())}),I);var H=0+m.additionalMarginTop;G=M.stickySidebar.outerHeight()+L+K<a(window).height()?H+M.stickySidebar.outerHeight():a(window).height()-M.marginBottom-M.paddingBottom-m.additionalMarginBottom;var E=N-D+M.paddingTop;var s=F-D-M.paddingBottom-M.marginBottom;var A=M.stickySidebar.offset().top-D;var z=M.previousScrollTop-D;if("fixed"==M.stickySidebar.css("position")&&"modern"==M.options.sidebarBehavior){A=A+z}if("stick-to-top"==M.options.sidebarBehavior){A=m.additionalMarginTop}if("stick-to-bottom"==M.options.sidebarBehavior){A=G-M.stickySidebar.outerHeight()}A=0<z?Math.min(A,H):Math.max(A,G-M.stickySidebar.outerHeight());A=Math.max(A,E);A=Math.min(A,s-M.stickySidebar.outerHeight());var C=M.container.height()==M.stickySidebar.outerHeight();B=!C&&A==H||!C&&A==G-M.stickySidebar.outerHeight()?"fixed":D+A-M.sidebar.offset().top-M.paddingTop<=m.additionalMarginTop?"static":"absolute"}if("fixed"==B){var O=a(document).scrollLeft();M.stickySidebar.css({position:"fixed",width:j(M.stickySidebar)+"px",transform:"translateY("+A+"px)",left:M.sidebar.offset().left+parseInt(M.sidebar.css("padding-left"))-O+"px",top:"0px"})}else{if("absolute"==B){var t={};if("absolute"!=M.stickySidebar.css("position")){t.position="absolute";t.transform="translateY("+(D+A-M.sidebar.offset().top-M.stickySidebarPaddingTop-M.stickySidebarPaddingBottom)+"px)";t.top="0px"}t.width=j(M.stickySidebar)+"px";t.left="";M.stickySidebar.css(t)}else{if("static"==B){v()}}}if("static"!=B&&1==M.options.updateSidebarHeight){M.sidebar.css({"min-height":M.stickySidebar.outerHeight()+M.stickySidebar.offset().top-M.sidebar.offset().top+M.paddingBottom})}M.previousScrollTop=D}}};p.onScroll(p);a(document).on("scroll."+p.options.namespace,(n=p,function(){n.onScroll(n)}));a(window).on("resize."+p.options.namespace,(u=p,function(){u.stickySidebar.css({position:"static"});u.onScroll(u)}));if("undefined"!=typeof ResizeSensor){new ResizeSensor(p.stickySidebar[0],(w=p,function(){w.onScroll(w)}))}})}(k,i),true)}function j(m){var k;try{k=m[0].getBoundingClientRect().width}catch(l){}return void 0===k&&(k=m.width()),k}var c;var f;var e;var b;var d;return(h=a.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:true,minWidth:0,disableOnResponsiveLayouts:true,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},h)).additionalMarginTop=parseInt(h.additionalMarginTop)||0,h.additionalMarginBottom=parseInt(h.additionalMarginBottom)||0,g(c=h,this)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),a(document).on("scroll."+c.namespace,(b=c,d=this,function(i){if(g(b,d)){a(this).unbind(i)}})),a(window).on("resize."+c.namespace,(f=c,e=this,function(i){if(g(f,e)){a(this).unbind(i)}}))),this}}(jQuery);

<!-- Table of Contents jQuery Plugin | https://github.com/ndabas/toc -->
!function(a){"use strict";var b=function(b){return this.each(function(){var c,d,e=a(this),f=e.data(),g=[e],h=this.tagName,i=0;c=a.extend({content:"body",headings:"h1,h2,h3"},{content:f.toc||void 0,headings:f.tocHeadings||void 0},b),d=c.headings.split(","),a(c.content).find(c.headings).attr("id",function(b,c){var d=function(a){0===a.length&&(a="?");for(var b=a.replace(/\s+/g,"_"),c="",d=1;null!==document.getElementById(b+c);)c="_"+d++;return b+c};return c||d(a(this).text())}).each(function(){var b=a(this),c=a.map(d,function(a,c){return b.is(a)?c:void 0})[0];if(c>i){var e=g[0].children("li:last")[0];e&&g.unshift(a("<"+h+"/>").appendTo(e))}else g.splice(0,Math.min(i-c,Math.max(g.length-1,0)));a("<li/>").appendTo(g[0]).append(a("<a/>").text(b.text()).attr("href","#"+b.attr("id"))),i=c})})},c=a.fn.toc;a.fn.toc=b,a.fn.toc.noConflict=function(){return a.fn.toc=c,this},a(function(){b.call(a("[data-toc]"))})}(window.jQuery);

<!-- Menuiki jQuery Plugin V2.0.0 | https://github.com/pikitemplates/scripts -->
!function(e){e.fn.Menuiki=function(){var n=this;n.find(".widget").addClass("show-menu"),n.each(function(){a=e(this),d=a.find(".LinkList ul > li").children("a"),g=d.length;for(var t=0;t<2;t++)for(var u=0;u<g;u++){let e=d.eq(u),n=e.text(),a=d.eq(u+1).text();if("_"!==n.charAt(0)&&"_"===a.charAt(0)){var i=e.parent();i.append(0==t?'<ul class="sub-menu m-sub"/>':'<ul class="sub-menu2 m-sub"/>')}"_"===n.charAt(0)&&(e.text(n.replace("_","")),e.parent().appendTo(i.children(0==t?".sub-menu":".sub-menu2")))}n.find(".LinkList ul li ul").parent("li").addClass("sub-tab")})}}(jQuery);

<!-- Lazy Loading jQuery Plugin  | v1.5.0 | https://github.com/pikitemplates/scripts -->
!function(t){t.fn.lazyimg=function(){return this.each(function(){var n=t(this),r=t(window),o=n.attr("data-src"),a="w"+Math.round(n.width()+n.width()/10)+"-h"+Math.round(n.height()+n.height()/10)+"-p-k-no-nu";o.match("googleusercontent.com")&&(o.match("=")?(parts=o.split("="),o=parts[1]&&""!=parts[1].trim()?parts[0]+"=w74-h74-p-k-no-nu":o):o+="=w74-h74-p-k-no-nu");var i={"/s74-c":["/s74-c","/"+a],"/w74-h":["/w74-h74-p-k-no-nu","/"+a],"=w74-h":["=w74-h74-p-k-no-nu","="+a]},h=o;for(var s in i)if(o.match(s)){h=o.replace(i[s][0],i[s][1]);break}n.is(":hidden")||r.on("load resize scroll",function t(){r.scrollTop()+r.height()>=n.offset().top&&(r.off("load resize scroll",t),n.attr("src",""+h).addClass("lazy-img"))}).trigger("scroll")})}}(jQuery);

<!-- Javascript Cookie - v1.5.1 | https://github.com/js-cookie/js-cookie  -->
!function(e){var n;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{n=require("jquery")}catch(e){}module.exports=e(n)}else{var o=window.Cookies,r=window.Cookies=e(window.jQuery);r.noConflict=function(){return window.Cookies=o,r}}}(function(e){var n=/\+/g;function o(e){return u.raw?e:encodeURIComponent(e)}function r(e){return o(u.json?JSON.stringify(e):String(e))}function t(e,o){var r=u.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),u.json?JSON.parse(e):e}catch(e){}}(e);return c(o)?o(r):r}function i(){for(var e,n,o=0,r={};o<arguments.length;o++)for(e in n=arguments[o])r[e]=n[e];return r}function c(e){return"[object Function]"===Object.prototype.toString.call(e)}var u=function(e,n,f){if(arguments.length>1&&!c(n)){if("number"==typeof(f=i(u.defaults,f)).expires){var s=f.expires,a=f.expires=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*s)}return document.cookie=[o(e),"=",r(n),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var d,p=e?void 0:{},l=document.cookie?document.cookie.split("; "):[],m=0,v=l.length;m<v;m++){var g=l[m].split("="),w=(d=g.shift(),u.raw?d:decodeURIComponent(d)),j=g.join("=");if(e===w){p=t(j,n);break}e||void 0===(j=t(j))||(p[w]=j)}return p};return u.get=u.set=u,u.defaults={},u.remove=function(e,n){return u(e,"",i(n,{expires:-1})),!u(e)},e&&(e.cookie=u,e.removeCookie=u.remove),u});

















