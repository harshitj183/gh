/*<![CDATA[*/(function gourabdesignmultiRelated(){var b="🩸𝔸𝕝𝕤𝕠 ℝ𝕖𝕒𝕕 ⚡";let r=Math.floor((relatedTitles.length-1)*Math.random());let i=0;let jumlah=document.querySelectorAll(".gourabdesignmultiRelated");while(i<relatedTitles.length&&i<jumlah.length){for(let a=0;a<jumlah.length;a++){jumlah[a]["innerHTML"]='<span class="content"><span class="text">'+b+'</span><a href="'+relatedUrls[r]+'" title="'+relatedTitles[r]+'">'+relatedTitles[r]+'</a></span><span class="icon"></span>';if(r<relatedTitles.length-1){r++}else{r=0}i++}}})();/*]]>*/
/*<![CDATA[*/function get_text(b){ret="";for(var a=b.childNodes.length,d=0;d<a;d++){var c=b.childNodes[d];8!=c.nodeType&&(ret+=1!=c.nodeType?c.nodeValue:get_text(c))}return ret}var words=get_text(document.getElementById("postBody")),count=words.split(" ").length,avg=200,counted=count/avg,maincount=Math.round(counted);document.getElementById("readTime").innerHTML=maincount+" minute read";/*]]>*/


 
