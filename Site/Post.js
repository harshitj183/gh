/*<![CDATA[*/(function gourabdesignmultiRelated(){var b="🩸𝔸𝕝𝕤𝕠 ℝ𝕖𝕒𝕕 ⚡";let r=Math.floor((relatedTitles.length-1)*Math.random());let i=0;let jumlah=document.querySelectorAll(".gourabdesignmultiRelated");while(i<relatedTitles.length&&i<jumlah.length){for(let a=0;a<jumlah.length;a++){jumlah[a]["innerHTML"]='<span class="content"><span class="text">'+b+'</span><a href="'+relatedUrls[r]+'" title="'+relatedTitles[r]+'">'+relatedTitles[r]+'</a></span><span class="icon"></span>';if(r<relatedTitles.length-1){r++}else{r=0}i++}}})();/*]]>*/
/*<![CDATA[*/function get_text(b){ret="";for(var a=b.childNodes.length,d=0;d<a;d++){var c=b.childNodes[d];8!=c.nodeType&&(ret+=1!=c.nodeType?c.nodeValue:get_text(c))}return ret}var words=get_text(document.getElementById("postBody")),count=words.split(" ").length,avg=200,counted=count/avg,maincount=Math.round(counted);document.getElementById("readTime").innerHTML=maincount+" minute read";/*]]>*/


/*<![CDATA[*/

// Multi Related Post

(function() {var jumlah = 7;let post = document['querySelectorAll']('.post-body br, .post-body p'),a = jumlah + 1,b = post['length'] / a;c = Array['from']({length: jumlah}, (redfx, blufx) => blufx + 1);

for (let d = 0; d < c['length']; d++) {let e = c[d],f = parseInt((b * e)),g = document['createElement']('div');g['className'] = 'gourabdesignmultiRelated';if (post[f]['nodeName'] == 'P') {post[f]['parentNode']['insertBefore'](g, post[f])} else {post[f]['parentNode']['insertBefore'](g, post[f]['nextSibling'])}}})();

var relatedTitles = new Array();var relatedTitlesNum = 0;var relatedUrls = new Array();function related_results_labels(nerdfx) {for (var desfx = 0; desfx < nerdfx['feed']['entry']['length']; desfx++) {var nefx = nerdfx['feed']['entry'][desfx];relatedTitles[relatedTitlesNum] = nefx['title']['$t'];for (var ciafx = 0; ciafx < nefx['link']['length']; ciafx++) {if (nefx['link'][ciafx]['rel'] == 'alternate') {relatedUrls[relatedTitlesNum] = nefx['link'][ciafx]['href'];relatedTitlesNum++;break}}}}

function removeRelatedDuplicates() {var viefx = new Array(0);var labfx = new Array(0);for (var desfx = 0; desfx < relatedUrls['length']; desfx++) {if (!contains(viefx, relatedUrls[desfx])) {viefx['length'] += 1;viefx[viefx['length'] - 1] = relatedUrls[desfx];labfx['length'] += 1;labfx[labfx['length'] - 1] = relatedTitles[desfx]}};relatedTitles = labfx;relatedUrls = viefx}

function contains(yelfx, yufx) {for (var grefx = 0; grefx < yelfx['length']; grefx++) {if (yelfx[grefx] == yufx) {return true}};return false}

/*]]>*/

