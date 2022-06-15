
/*<![CDATA[*/(function(b){b.fn.lazyload=function(a){var f={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(a){b.extend(f,a)}var e=this;if("scroll"==f.event){b(f.container).bind("scroll",function(c){var g=0;e.each(function(){if(b.abovethetop(this,f)||b.leftofbegin(this,f)){}else{if(!b.belowthefold(this,f)&&!b.rightoffold(this,f)){b(this).trigger("appear")}else{if(g++>f.failurelimit){return false}}}});var d=b.grep(e,function(h){return !h.loaded});e=b(d)})}this.each(function(){var c=this;if(undefined==b(c).attr("original")){b(c).attr("original",b(c).attr("src"))}if("scroll"!=f.event||undefined==b(c).attr("src")||f.placeholder==b(c).attr("src")||b.abovethetop(c,f)||b.leftofbegin(c,f)||b.belowthefold(c,f)||b.rightoffold(c,f)){if(f.placeholder){b(c).attr("src",f.placeholder)}else{b(c).removeAttr("src")}c.loaded=false}else{c.loaded=true}b(c).one("appear",function(){if(!this.loaded){b("<img />").bind("load",function(){b(c).hide().attr("src",b(c).attr("original"))[f.effect](f.effectspeed);c.loaded=true}).attr("src",b(c).attr("original"))}});if("scroll"!=f.event){b(c).bind(f.event,function(d){if(!c.loaded){b(c).trigger("appear")}})}});b(f.container).trigger(f.event);return this};b.belowthefold=function(a,f){if(f.container===undefined||f.container===window){var e=b(window).height()+b(window).scrollTop()}else{var e=b(f.container).offset().top+b(f.container).height()}return e<=b(a).offset().top-f.threshold};b.rightoffold=function(a,f){if(f.container===undefined||f.container===window){var e=b(window).width()+b(window).scrollLeft()}else{var e=b(f.container).offset().left+b(f.container).width()}return e<=b(a).offset().left-f.threshold};b.abovethetop=function(a,f){if(f.container===undefined||f.container===window){var e=b(window).scrollTop()}else{var e=b(f.container).offset().top}return e>=b(a).offset().top+f.threshold+b(a).height()};b.leftofbegin=function(a,f){if(f.container===undefined||f.container===window){var e=b(window).scrollLeft()}else{var e=b(f.container).offset().left}return e>=b(a).offset().left+f.threshold+b(a).width()};b.extend(b.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);$(function(){$("img").lazyload({placeholder:"data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAABwAQCdASoBAAEAAgA2JaACdAFAAAD+6wf7pP1P9F/9QZ//qDP/9QZ+ngAAAA==",effect:"fadeIn",threshold:"-50"})});

/*]]>*/

/*<![CDATA[*/let ATscrollProgress=()=>{let scrollProgress=document.getElementById("ATprogressbar");let progressValue=document.getElementById("progressValue");let pos=document.documentElement.scrollTop;let calcHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;let scrollvalue=Math.round(pos*100/calcHeight);scrollProgress.style.background=`conic-gradient(#007cff ${scrollvalue}%,#c0c0ff ${scrollvalue}%)`;progressValue.textContent=`🔝`;}
window.onscroll=ATscrollProgress;window.onload=ATscrollProgress;/*]]>*/


/*<![CDATA[*/document.querySelector('#sherubaba').addEventListener('click',event=>{if(navigator.share){navigator.share({title:'Harshit Jaiswal (@harshitj183)',url:'#'}).then(()=>{console.log('Thanks for sharing!');}).catch(err=>{console.log("Error while using Web share API:");console.log(err);});}else{alert(" &#9888;&#65039; Browser doesn't support this service !");}})/*]]>*/


/*<![CDATA[*/window.addEventListener("offline",function(){document.querySelector("#toastNotif").innerHTML="<span> 😔 No internet connection!📡 </span>"}),window.addEventListener("online",function(){document.querySelector("#toastNotif").innerHTML="<span> 😁Internet connection restored!📡</span>"});/*]]>*/


    var s = document.createElement("noscript")
    s.src = "https://notix.io/ent/current/enot.min.js"
    s.onload = function (sdk) {
        sdk.startInstall({
            appId: "1004e997d62a179d62937910ba945b9",
            loadSettings: true
        })
    }
    document.head.append(s)

