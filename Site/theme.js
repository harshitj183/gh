
//<![CDATA[
function _shortcodeiki(e,t,a){if(Array.isArray(e)){for(t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function pikiShortcode(e,t,a){return!!(e=[].concat(_shortcodeiki(e.matchAll(/(?:(#[a-zA-Z]{0,})=\(([^\)]+)\))/g))).find(function(e){return e[1].split("#")[1]===t}))&&e[2]}$(function(){function t(){return'<span class="error-status"><b>⚠️ Error:</b>&nbsp;'+pikiMessages.noResults+"</span>"}function a(e){var t=$("<div>").html(e).find("img").first().attr("src"),a=t.lastIndexOf("/");a||(a=0);var s=t.lastIndexOf("/",a-1);s||(s=0);var i=t.substring(s,a);return(i.match(/((\/s[0-9])|(\/w[0-9]))+/g)||"/d"==i)&&(i="/w74-h74-p-k-no-nu"),[t.substring(0,s),i,t.substring(a)].join("")}function s(e,t){return e.match("i.ytimg.com")?"video-nos":"image-nos"}function i(a,s,i,c){"block1"!=c&&"grid1"!=c&&"block2"!=c&&"video"!=c||(i.match("recent","random")?(e=showMoreText,e=""!=e?e:pikiMessages.showMore,a.parent().find(".widget-title").append('<a class="simple-viewmore" href="/search">'+e+"</a>")):(e=showMoreText,e=""!=e?e:pikiMessages.showMore,a.parent().find(".widget-title").append('<a class="simple-viewmore" href="/search/label/'+i+'">'+e+"</a>"))),"featured"==c||"grid1"==c||"block1"==c||"block2"==c||"video"==c||"related"==c||"sidebar"==c||"comments"==c||"footer"==c?o(a,s,i,c):a.html(t())}function o(e,i,o,c){var n="",l=Math.floor(Math.random()*i+1);void 0!==o&&(o.match("recent")?n="/feeds/posts/default?alt=json&max-results="+i:o.match("random")?n="/feeds/posts/default?alt=json&orderby=updated&start-index="+l+"&max-results="+i:o.match("show")?n="/feeds/comments/default?alt=json&max-results="+i:o.match("random")&&o.match("recent")||(n="/feeds/posts/default/-/"+o+"?alt=json&max-results="+i)),n.length>0&&$.ajax({type:"GET",url:n,cache:!0,dataType:"json",beforeSend:function(t){switch(c){case"megamenu":e.append('<div class="BiggerMenu"><div class="loading-icon"/></div>').addClass("loaded"),e.addClass("mega-menu");break;case"featured":case"grid1":case"block1":case"block2":case"video":case"sidebar":case"comments":case"related":case"footer":e.html('<div class="loading-icon"/>').parent().addClass("type-"+c+" open-iki")}},success:function(i){var o="";switch(c){case"megamenu":o+='<div class="BiggerMenu"><div class="Mega-uis">';break;case"featured":o+='<div class="featured-grid-all">';break;case"grid1":o+='<div class="piki-main-hero">';break;case"block1":o+='<div class="raw-main-wrapper">';break;case"block2":o+='<div class="block-hall">';break;case"video":o+='<div class="video-vg">';break;case"sidebar":o+='<div class="BiggerSidebarOk">';break;case"comments":o+='<div class="comment-list">';break;case"related":o+='<div class="BiggerRelated">';break;case"footer":o+='<div class="footer-nut">';break;default:o+="<ul>"}var n=i.feed.entry;if(null!=n){for(var l=0;l<n.length;l++){for(var r=0;r<n[l].link.length;r++)if("alternate"==n[l].link[r].rel){link=n[l].link[r].href;break}var d=n[l].title.$t?n[l].title.$t:pikiMessages.noTitle,p=n[l].author[0].name.$t,h=n[l].content.$t,m=$("<div>").html(h);m.text().substr(0,110),m.text().substr(0,210);if("category"in n[l]){if(void 0!==n[l].category[0].term)var u=n[l].category[0].term}else u="Uncategorized";if(n[l].author[0].gd$image)var f="//harshitj183.sirv.com/ezgif-2-aa159132a665.webp?size=72",g=(g=n[l].author[0].gd$image.src.replace("/s220","/w55-h55-p-k-no-nu")).replace("//img1.blogblog.com/img/blank.gif",f).replace("//img1.blogblog.com/img/b16-rounded.gif",f);var v=n[l].published.$t,b=v.substring(0,4),k=v.substring(5,7),w=v.substring(8,10),y=monthsName[parseInt(k,10)-1]+" "+w+", "+b,x="";h.indexOf(h.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1?h.indexOf("<img")>-1?h.indexOf(h.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<h.indexOf("<img")?$src=src.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):$src=a(h):$src=src.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):h.indexOf("<img")>-1?$src=a(h):$src=noThumb;var C=s($src);switch(c){case"megamenu":o+='<div class="Mega-ui"><div class="Mega-img-ui"><div class="post-filter-link '+C+'"><a class="snip-thumbnail lazy-img" href="'+link+'"><img class="snip-thumbnail lazy-img" alt="'+d+'" data-src="'+$src+'"/></a></div></div><div class="featured-meta"><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><span class="post-date">'+y+"</span></div></div></div>";break;case"featured":o+=0===l?'<div class="featuredui-block item'+l+'"><a class="post-filter-inner '+C+'" href="'+link+'"><span class="post-filter-link background-layer "><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></span><span class="featured-meta-fly"><span class="post-tag">'+u+'</span><h2 class="entry-title">'+d+'</h2><div class="post-snip"><img class="post-author-image" src="'+g+'"/><span class="post-author">'+p+'</span><span class="post-date">'+y+"</span></span></div></span></a></div>":(1===l?'<div class="featured-block">':"")+'<div class="featuredui-block item'+l+'"><a class="post-filter-inner '+C+'" href="'+link+'"><span class="post-filter-link background-layer "><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></span><span class="featured-meta-fly"><span class="post-tag">'+u+'</span><h2 class="entry-title">'+d+'</h2><div class="post-snip"><img class="post-author-image" src="'+g+'"/><span class="post-author">'+p+'</span><span class="post-date">'+y+"</span></span></div></span></a></div>";break;case"grid1":o+='<div class="modal-grid"><div class="modal-image"><a class="post-filter-inner" href="'+link+'"><span class="post-filter-link background-layer '+C+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></span><div class="featured-meta-fly"><span class="post-tag">'+u+'</span><h2 class="entry-title">'+d+'</h2><div class="post-snip"><span class="post-date">'+y+"</span></div></div></a></div></div>";break;case"block1":o+=0===l?'<div class="block-section fl item'+l+'"><div class="block-img"><a class="post-filter-link background-layer '+C+'" href="'+link+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></a><div class="featured-meta-fly"><span class="post-tag">'+u+'</span><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><img class="post-author-image" src="'+g+'"/><span class=" post-author">'+p+'</span><span class="post-date">'+y+"</span></div></div></div></div>":(1===l?'<div class="block-step-wrap fl">':"")+'<div class="block-step item'+l+'"><div class="block-thumb"><a class="post-filter-link '+C+'" href="'+link+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></a></div><div class="piki-hero-box"><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><span class="post-date">'+y+"</span></div></div></div>";break;case"block2":o+=0===l?'<div class="hall-section rv item'+l+'"><div class="hall-img"><a class="post-filter-link background-layer '+C+'" href="'+link+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></a><div class="featured-meta-fly"><span class="post-tag">'+u+'</span><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><img class="post-author-image" src="'+g+'"/><span class=" post-author">'+p+'</span><span class="post-date">'+y+"</span></div></div></div></div>":(1===l?'<div class="hall-grid rv">':"")+'<div class="hall-step item'+l+'"><div class="hall-thumb"><a class="post-filter-link '+C+'" href="'+link+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></a><span class="post-tag-fly">'+u+'</span></div><div class="piki-hero-box"><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><span class="post-date">'+y+"</span></div></div></div>";break;case"video":o+=0===l?'<div class="video-section vg-s item'+l+'"><div class="vblock-img"><a class="post-filter-link background-layer video-nos" href="'+link+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></a><div class="featured-meta-fly"><span class="post-tag">'+u+'</span><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><img class="post-author-image" src="'+g+'"/><span class=" post-author">'+p+'</span><span class="post-date">'+y+"</span></div></div></div></div>":(1===l?'<div class="video-grid vg-s">':"")+'<div class="video-step item'+l+'"><div class="vblock-thumb"><a class="post-filter-link video-nos" href="'+link+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></a></div><div class="piki-hero-box"><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><span class="post-date">'+y+"</span></div></div></div>";break;case"comments":o+='<div class="commentsBiggerSidebar"><a class="engine-link" href="'+link+'"><span class="comment-image"><img class="snip-thumbnail" data-src="'+g+'"/></span><div class="comment-hero"><h2 class="entry-title cmm-title">'+p+'</h2><p class="comment-snippet">'+d+"</p></div></a></div>";break;case"sidebar":o+='<div class="sidebarui-posts"><div class="glax-img"><a class="post-filter-link '+C+'" href="'+link+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></a><span class="post-tag-fly">'+u+'</span></div><div class="relatedui-posts-box"><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><span class="post-date">'+y+"</span></div></div></div>";break;case"related":o+='<div class="relatedui-posts"><div class="relatedui-posts-thumb"><a class="post-filter-link '+C+'" href="'+link+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></a></div><div class="relatedui-posts-box"><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><span class="post-date">'+y+"</span></div></div></div>";break;case"footer":o+='<div class="footer-sector"><div class="footer-sector-thumb"><a class="post-filter-link '+C+'" href="'+link+'"><img class="snip-thumbnail" alt="'+d+'" data-src="'+$src+'"/></a></div><div class="relatedui-posts-box"><h2 class="entry-title"><a href="'+link+'">'+d+'</a></h2><div class="post-snip"><span class="post-date">'+y+"</span></div></div></div>";break;default:e.html('<div class="loading-icon"/>').parent().addClass("open-iki"),o+=t(),e.parent().html(o)}}o+=x+="</ul>"}else switch(c){case"megamenu":o='<div class="BiggerMenu">'+t()+"</div>";break;default:o=t()}switch(c){case"megamenu":o+="</div></div>",e.addClass(c).find(".BiggerMenu").replaceWith(o);break;case"featured || grid1 || block1 || block2 || video || sidebar || comments || related || footer":e.html(o),o+="</div></div>";break;default:o+="</div>",e.html(o)}switch(c){case"megamenu":e.find("img.snip-thumbnail").lazyimg({onScroll:!1});break;default:e.find("img.snip-thumbnail").lazyimg()}},error:function(){switch(c){case"megamenu":e.append('<div class="BiggerMenu">'+t()+"</div>");break;default:e.html(t())}}})}$(".Super-FlexMenu li").each(function(e,a){var s=$(this);if((i=s.find("a").attr("href")).match("megamenu")){var i;if(2===(i=i.split("/")).length)a=i[0],e=i[1];c="recent"==e||"random"==e?"/search":"/search/label/"+e,s.children("a").attr("href",c),s.addClass("sub-tab"),s.mouseenter(function(){s.hasClass("loaded")||("megamenu"==a?o(s,5,e,a):s.append('<div class="BiggerMenu">'+t()+"</div>").addClass("loaded"))})}}),$(".flex-blocks .HTML .widget-content").each(function(e,t,a){var s,o=$(this);if(2===(s=(s=o.text().trim()).split("/")).length){a=s[0],t=s[1];switch(a){case"featured":e=5}$(window).on("load resize scroll",function s(){$(window).scrollTop()+$(window).height()>=o.offset().top&&($(window).off("load resize scroll",s),i(o,e,t,a))}).trigger("scroll")}}),$(".raw-box .HTML .widget-content").each(function(e,t,a){var s,o=$(this);if(2===(s=(s=o.text().trim()).split("/")).length){a=s[0],t=s[1];switch(a){case"grid1":e=4;break;case"block1":case"block2":case"video":e=5}$(window).on("load resize scroll",function s(){$(window).scrollTop()+$(window).height()>=o.offset().top&&($(window).off("load resize scroll",s),i(o,e,t,a))}).trigger("scroll")}}),$(".sidebar .HTML .widget-content").each(function(e,t,a){var s=$(this),o=s.text();if(o.match("sidebar")||o.match("comments")){var c=o.split("/");if(!isNaN(c[0])){e=c[0],a=c[1],t=c[2];$(window).on("load resize scroll",function o(){$(window).scrollTop()+$(window).height()>=s.offset().top&&($(window).off("load resize scroll",o),i(s,e,t,a))}).trigger("scroll")}}}),$(".Super-related").each(function(e,t,a){var s=$(this);t=s.find(".related-tag").attr("label"),e=relatedPostsNum;$(window).on("load resize scroll",function a(){$(window).scrollTop()+$(window).height()>=s.offset().top&&($(window).off("load resize scroll",a),i(s,e,t,"related"))}).trigger("scroll")}),$(".Footer-Function .HTML .widget-content").each(function(){var e=$(this),t=e.text().split("/");if(!isNaN(t[0])){var a=t[0],s=t[1],o=t[2];$(window).on("load resize scroll",function t(){$(window).scrollTop()+$(window).height()>=e.offset().top&&($(window).off("load resize scroll",t),i(e,a,o,s))}).trigger("scroll")}})}),$(function(){function e(){$("#feed-view, #sidebar-container").each(function(){1==fixedSidebar&&$(this).theiaStickySidebar({containerSelector:"#center-container > .container",additionalMarginTop:30,additionalMarginBottom:30})})}$(".dark-toggle").click(function(){localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"GalaxyNew":"darkmode"),"darkmode"===localStorage.getItem("mode")?($("#mainContent").addClass("dark"),document.querySelector("#darkroom").setAttribute("src",document.querySelector("#darkroom").getAttribute("data-dark")),document.querySelector("#darkroom1").setAttribute("src",document.querySelector("#darkroom1").getAttribute("data-dark"))):($("#mainContent").removeClass("dark"),document.querySelector("#darkroom").setAttribute("src",document.querySelector("#darkroom").getAttribute("data-normal")),document.querySelector("#darkroom1").setAttribute("src",document.querySelector("#darkroom1").getAttribute("data-normal")))});var t=new Date;t.setDate(t.getDate()),$(".date-format").html(" "+["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()),$("img.snip-thumbnail").lazyimg(),$("#Super-FlexMenu").Menuiki(),$(".menu li").each(function(){0<$(this).find("ul").length&&$(this).addClass("drop-down")}),$("#Super-Menu").each(function(){var e=$(this);$("#Super-FlexMenuList").clone().appendTo(e),$(".show-menu-space, .hide-Super-Menu").on("click",function(){$("body").toggleClass("spring-open")})}),$(".Super-Menu ul .mega-menu").removeClass("sub-tab"),$(".Super-Menu ul li a").on("click",function(){$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170)}),$("ul#Super-FlexMenuList li:nth-child(3) ul.sub-menu.m-sub").css("display","block"),$(".social-mobile").each(function(){var e=$(this);$(".Footer-adv ul.colorful-ico").clone().appendTo(e)}),$(".search-button-flex").on("click",function(){$("#search-flex").fadeIn(200).find("input").focus(),$("body").addClass("active-search")}),$(".overlay, .search-flex-close").on("click",function(){$("#search-flex").fadeOut(200).find("input").blur(),$("body").removeClass("active-search spring-open")}),$("#Super-MenuTested .Super-MenuWorks").each(function(){var e=$(this);if(1==fixedMenu&&0<e.length){var t=$(document).scrollTop(),a=e.offset().top,s=e.height(),i=a+s+50;$(window).scroll(function(){var o=$(document).scrollTop();o<$("#footer-wrapper").offset().top-s&&(o>i?e.addClass("fixed-nos"):o<a&&e.removeClass("fixed-nos"),o>t?e.removeClass("show"):e.addClass("show"),t=$(document).scrollTop())})}}),e(),$(".post-body iframe").each(function(){var e=$(this);e.attr("src").match("www.youtube.com")&&e.wrap('<div class="video-frame"/>')}),$(".post-body strike").each(function(){var e=$(this),t=e.text().trim();"(ads1)"==t&&e.replaceWith('<div id="inpost-ad"/>'),"(ads2)"==t&&e.replaceWith('<div id="outpost-ad"/>')}),$(".post-body blockquote").each(function(){var e=$(this),t=e.text().toLowerCase().trim(),a=e.html();if(t.match("(alert-success)")){const t=a.replace("(alert-success)","");e.replaceWith('<div class="alert-message success">'+t+"</div>")}if(t.match("(alert-passed)")){const t=a.replace("(alert-passed)","");e.replaceWith('<div class="alert-message passed">'+t+"</div>")}if(t.match("(alert-warning)")){const t=a.replace("(alert-warning)","");e.replaceWith('<div class="alert-message warning">'+t+"</div>")}if(t.match("(alert-error)")){const t=a.replace("(alert-error)","");e.replaceWith('<div class="alert-message error">'+t+"</div>")}if(t.match("(code-box)")){const t=a.replace("(code-box)","");newTemp=t.replace(/"/g,"'"),e.replaceWith('<pre class="code-box">'+t+'<button id="tune" class="tune">Copy Now</button><input id="showlink" readonly="readonly" type="text" value=" '+newTemp+' "/></pre>')}}),$(".tune, .copy-post").on("click",function(){$(".copy-post").addClass("copied");var e=document.querySelector("button");document.getElementById("showlink").select(),document.execCommand("copy"),e.textContent="Copied",setTimeout(function(){e.textContent="Copy",$(".copy-post").removeClass("copied")},5e3)}),$(".post-body a").each(function(){var e=$(this),t=e.text(),a=t.toLowerCase();t=pikiShortcode(t,"text"),a.match("getbutton")&&0!=t&&(e.replaceText(/([^{\(]+(?=\)))/,""),e.each(function(){var e=$(this),t=e.text(),a=pikiShortcode(t,"text"),s=pikiShortcode(t,"icon"),i=pikiShortcode(t,"color"),o=pikiShortcode(t,"size"),c=pikiShortcode(t,"file");t=pikiShortcode(t,"info"),e.addClass(0!=o?"main-button button l-bt":"main-button button").text(a),0!=t?(e.addClass(0!=s?"sp-bt "+s:"sp-bt"),e.append('<span class="bt-info" style="background:'+i+'">'+t+"</span>")):0!=s&&e.addClass(s),0!=c&&e.append('<span class="bt-text">'+c+"</span>"),0!=i&&e.not("a.main-button.button.sp-bt").attr("style","background:"+i+";")}))}),$(".post-body strike").each(function(){var e=$(this),t=e.text(),a=t.toLowerCase().trim();if(a.match("(toc)")&&(t=0!=(t=pikiShortcode(t,"title"))?t:"Table of Contents",e.replaceWith('<div class="tociki-pro"><div class="tociki-inner"><a href="javascript:;" class="tociki-title" role="button" title="Table of Contents"><span class="tociki-title-text">'+t+'</span></a><ol id="tociki"></ol></div></div>'),$(".tociki-title").each(function(e){(e=$(this)).on("click",function(){e.toggleClass("opened"),$("#tociki").slideToggle(180)})}),$("#tociki").toc({content:".post-body",headings:"h2,h3,h4"}),$("#tociki li a").each(function(e){(e=$(this)).click(function(){return $("html,body").animate({scrollTop:$(e.attr("href")).offset().top},500),!1})})),htmlorder=e.html(),a.match("(contact-form)")&&(e.replaceWith('<div class="contact-form"/>'),$(".contact-form").append($("#ContactForm1"))),a.match("(caps)")){const t=htmlorder.replace("(caps)","");e.replaceWith('<span class="firstword">'+t+"</span>")}if(a.match("(left-sidebar)")){htmlorder.replace("(left-sidebar)","");e.replaceWith("<style>.flex-section .outer-container{flex-direction:row-reverse;}</style>")}if(a.match("(right-sidebar)")){htmlorder.replace("(right-sidebar)","");e.replaceWith("<style>.flex-section .outer-container{flex-direction:initial;}</style>")}if(a.match("(full-width)")){htmlorder.replace("(full-width)","");e.replaceWith("<style>.item-view #feed-view{width:100%}.item-view #sidebar-container{display:none}</style>")}}),$(".share-runs .window-piki, .share-wrapper-icons .window-piki").on("click",function(){var e=$(this),t=e.data("url"),a=e.data("width");e=e.data("height"),window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+e+",left="+Math.round(window.screen.width/2-a/2)+",top="+Math.round(window.screen.height/2-e/2)).focus()}),$(".show-hid a, .share-top, .close-check").on("click",function(){$("body").toggleClass("show-share")}),$(".sidebar").each(function(e,t){var a=$(this),s=a.find(".sibForm .widget-content").data("shortcode");s&&(e=pikiShortcode(s,"title"),t=pikiShortcode(s,"caption"),0!=e&&a.find(".follow-by-email-title").html(e),0!=t&&a.find(".follow-by-email-caption").html(t))}),$("#inpost-ad").each(function(){var e=$(this);e.length&&$("#bottom-ad-placeholder").appendTo(e)}),$("#outpost-ad").each(function(){var e=$(this);e.length&&$("#top-ad-placeholder").appendTo(e)}),$("#upper-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#bottom-ad-placeholder"))}),$("#lower-ad .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#top-ad-placeholder"))}),$("#main-ads-post .widget").each(function(){var e=$(this);e.length&&e.appendTo($("#post-placeholder"))}),$(".author-description a").each(function(){$(this).attr("target","_blank")}),$(".about-author .author-description span a, .profile-info .profile-textblock a").each(function(){var e=$(this),t=e.text().trim(),a=e.attr("href");e.replaceWith('<li class="'+t+'"><a href="'+a+'" title="'+t+'" target="_blank"/></li>'),$(".profile-info .description-links").append($(".profile-info .profile-textblock li")),$(".about-author .description-links").append($(".author-description span li")),$(".description-links").addClass("show")}),$(".navigation-runs").each(function(){var e=$("a.prev-post-link").attr("href"),t=$("a.next-post-link").attr("href");$.ajax({url:e,type:"get",success:function(e){e=$(e).find(".blog-post h1.entry-title").text(),$(".post-prev a .navigation-posts p").text(e)}}),$.ajax({url:t,type:"get",success:function(e){e=$(e).find(".blog-post h1.entry-title").text(),$(".post-next a .navigation-posts p").text(e)}})}),$(".related-runs .widget-title h3").each(function(){var e=$(this),t=relatedPostsText;""!=t&&e.text(t)}),$(".comments-section").each(function(){var t=$(this),a=commentsSystem,s='<div class="fb-comments" data-width="100%" data-href="'+$(location).attr("href")+'" data-numposts="5"></div>',i="comments-system-"+a;"blogger"==a?$(this).addClass(i).show():"disqus"==a?((a=document.createElement("script")).type="text/javascript",a.async=!0,a.src="//"+disqusShortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a),$("#comments").remove(),$(this).append('<div id="disqus_thread"/>').addClass(i).show()):"facebook"==a?($("#comments").remove(),$(this).append(s).addClass(i).show()):"hide"==a?$(this).hide():$(this).addClass("comments-system-default").show(),$(".avatar-image-container img").each(function(){var e=this.src;$(this).removeAttr("src").attr("src",e.replace("//resources.blogblog.com/img/blank.gif","//harshitj183.sirv.com/ezgif-2-36cc1d6bd2a8.webp"))});var o=$(this).find(".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply"),c=$(this).find(".comments .toplevel-thread > #top-continue");o.on("click",function(){c.show(),$(".comment-replybox-thread").hide()}),c.on("click",function(){c.hide(),$(".comment-replybox-thread").show()});var n=t.find(".comments .comment-reply"),l=t.find(".comments #top-continue"),r=t.find("#show-comment-form");n.on("click",function(){l.show(),t.addClass("comment-section-visible"),r.remove()}),l.on("click",function(){l.hide()}),r.on("click",function(){t.addClass("comment-section-visible"),r.remove(),e()})}),$("p.comment-content").each(function(){var e=$(this);e.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>'),e.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="video-frame"><iframe id="youtube" width="100%" height="360" src="https://www.youtube.com/embed/$1" frameborder="0" allow="autoplay; accelerometer; gyroscope; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>')})}),$("#cookies-iki").each(function(){var e=$(this),t=e.find(".widget.HTML").text(),a=e.find(".cookies-bt");e.length>0&&(t&&(buttons=pikiShortcode(t,"buttons"),days=pikiShortcode(t,"days"),0!=buttons&&a.text(buttons),days=0!=days?Number(days):7),"1"!==$.cookie("cookies-magpaper")&&(e.css("display","block"),setTimeout(function(){e.addClass("cookies-show")},10)),$(".cookies-bt").off("click").on("click",function(t){t.preventDefault(),t.stopPropagation(),$.cookie("cookies-magpaper","1",{expires:days,path:"/"}),e.removeClass("cookies-show"),setTimeout(function(){e.css("display","none")},500)}),cookieChoices={})}),$(".backTop").each(function(){var e=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?e.fadeIn(250):e.fadeOut(250)}),e.click(function(){$("html, body").animate({scrollTop:0},500)})});
//]]>
