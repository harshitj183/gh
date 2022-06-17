

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

