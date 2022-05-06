
//<![CDATA[
// source code : https://www.hartomy.com/2020/09/cara-membuat-tombol-bookmark-di-blogger.html
var massgEmpty = ('List of Favorite Articles Does Not Yet Exist'),
articleLabel = ('All Content'),
link_articleLabel = ('/search');
(function ($) {
"use strict";
var OptionManager = (function () {
var objToReturn = {};
var defaultOptions = {
bookmarkIcon: 'bookmarkIcon',
bookmarkBadge: 'show-bookmark',
articleQuantity: 'article-quantity',
affixBookmarkIcon: true,
showBookmarkModal: true,
clickOnAddToBookmark: function($addTobookmark) { },
clickOnbookmarkIcon: function($bookmarkIcon, konten ) { },
};
var getOptions = function (customOptions) {
var options = $.extend({}, defaultOptions);
if (typeof customOptions === 'object') {
$.extend(options, customOptions);
}
return options;
}
objToReturn.getOptions = getOptions;
return objToReturn;
}());
var articleManager = (function(){
var objToReturn = {};
localStorage.konten = localStorage.konten ? localStorage.konten : "";
var getIndexOfarticle = function(id){
var articleIndex = -1;
var konten = getAllkonten();
$.each(konten, function(index, value){
if(value.id == id){
articleIndex = index;
return;
}
});
return articleIndex;
}
var setAllkonten = function(konten){
localStorage.konten = JSON.stringify(konten);
}
var addarticle = function(id, title, link, summary, quantity, borkimage) {
var konten = getAllkonten();
konten.push({
id: id,
title: title,
link: link,
summary: summary,
quantity: quantity,
borkimage: borkimage
});
setAllkonten(konten);
}
var getAllkonten = function(){
try {
var konten = JSON.parse(localStorage.konten);
return konten;
} catch (e) {
return [];
}
}
var updatePoduct = function(id, quantity) {
var articleIndex = getIndexOfarticle(id);
if(articleIndex < 0){
return false;
}
var konten = getAllkonten();
konten[articleIndex].quantity = typeof quantity === "undefined" ? konten[articleIndex].quantity : quantity;
setAllkonten(konten);
return true;
}
var setarticle = function(id, title, link, summary, quantity, borkimage) {
if(typeof id === "undefined"){
console.error("id required")
return false;
}
if(typeof title === "undefined"){
console.error("title required")
return false;
}
if(typeof link === "undefined"){
console.error("link required")
return false;
}
if(typeof borkimage === "undefined"){
console.error("borkimage required")
return false;
}
summary = typeof summary === "undefined" ? "" : summary;
if(!updatePoduct(id)){
addarticle(id, title, link, summary, quantity, borkimage);
}
}
var cleararticle = function(){
setAllkonten([]);
}
var removearticle = function(id){
var konten = getAllkonten();
konten = $.grep(konten, function(value, index) {
return value.id != id;
});
setAllkonten(konten);
}
var getTotalQuantity = function(){
var total = 0;
var konten = getAllkonten();
$.each(konten, function(index, value){
total += value.quantity;
});
return total;
}
objToReturn.getAllkonten = getAllkonten;
objToReturn.updatePoduct = updatePoduct;
objToReturn.setarticle = setarticle;
objToReturn.cleararticle = cleararticle;
objToReturn.removearticle = removearticle;
objToReturn.getTotalQuantity = getTotalQuantity;
return objToReturn;
}());
var loadBookmarkEvent = function(userOptions){
var options = OptionManager.getOptions(userOptions);
var $bookmarkIcon = $("." + options.bookmarkIcon);
var $bookmarkBadge = $("." + options.bookmarkBadge);
var articleQuantity = options.articleQuantity;
var idBookmarkModal = 'cart-modal';
var idbookmarkTable = 'cart-table';
var idEmptyBookmarkMessage = 'cart-empty-message';
var AffixMybookmarkIcon = 'bookmarkIcon-affix';
$bookmarkBadge.text(articleManager.getTotalQuantity());
if(!$("#" + idBookmarkModal).length) {
$('body').append(
'<div class="pop-area" id="' + idBookmarkModal + '">' +
'<div class="pop-html">' +
'<div class="head-pop"><b>Bookmark</b><a class="close-btn buka-tutup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="15" y1="15" x2="9" y2="9"></line></svg></a></div>' +
'<div class="body-content">' +
'<span class="table-responsive" id="' + idbookmarkTable + '"></span>' +
'</div>' +
'</div>' +
'</div>'
);
}
var drawTable = function(){
var $bookmarkTable = $("#" + idbookmarkTable);
$bookmarkTable.empty();
var konten = articleManager.getAllkonten();
$.each(konten, function(){
$bookmarkTable.append(
'<table class="table">' +
'<tbody>' +
'<tr title="' + this.summary + '" data-id="' + this.id + '">' +
'<td class="item-left img-left"><img width="140px" height="60px" src="' + this.borkimage + '"/></td>' +
'<td class="item-left"><a href="' + this.link + '">' + this.title + '</a></td>' +
'<td class="item-left" title="Remove favorit" class="text-center" style="width: 30px;"><a class="btn-remove"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(3.500000, 2.000000)"><path d="M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524"></path><line x1="16.8651429" y1="4.47980952" x2="0.714666667" y2="4.47980952"></line><path d="M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952"></path></g></svg></a></td>' +
'</tr>' +
'</tbody>' +
'</table>'
);
});
$bookmarkTable.append(konten.length ? '':
'<div role="alert" id="' + idEmptyBookmarkMessage + '"><div class="text-center"><svg class="line" viewBox="0 0 24 24"><g transform="translate(4.500000, 2.500000)"><path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z"></path></g></svg><center>' + massgEmpty + '</center><a class="btn btn-outline-info m-2" href="' + link_articleLabel + '">' + articleLabel + '</a></div></div>'
);
}
var showModal = function(){
drawTable();
}
/*
EVENT ADD TO BOOKMARK LIST
*/
if(options.affixBookmarkIcon) {
var bookmarkIconBottom = $bookmarkIcon.offset().top * 1 + $bookmarkIcon.css("height").match(/\d+/) * 1;
$(window).scroll(function () {
$(window).scrollTop() >= bookmarkIconBottom ? $bookmarkIcon.addClass(AffixMybookmarkIcon) : $bookmarkIcon.removeClass(AffixMybookmarkIcon);
});
}
$bookmarkIcon.click(function(){
options.showBookmarkModal ? showModal() : options.clickOnbookmarkIcon($bookmarkIcon, articleManager.getAllkonten());
});
$(document).on('keypress', "." + articleQuantity, function(evt){
if(evt.keyCode == 38 || evt.keyCode == 40){
return ;
}
evt.preventDefault();
});
$(document).on({
click: function() {
var $tr = $(this).closest("tr");
var id = $tr.data("id");
$tr.hide(500, function(){
articleManager.removearticle(id);
drawTable();
$bookmarkBadge.text(articleManager.getTotalQuantity());
});
}}, '.btn-remove');
}
$(document).on({
click: function() {
$('.pop-area').toggleClass('open');
return false;
}}, '.buka-tutup');
$(function () {
var goTohartomyBookmark = function($addTobookmarkBtn){
}
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('q h=["\\B\\e\\M","\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f","\\x\\y\\f\\g\\C\\k\\y\\k\\y\\F","\\N\\z\\g\\i\\k\\e\\j\\G\\C\\x\\e\\e\\f\\j\\g\\i\\f\\C\\x\\k\\m","\\H\\z\\A\\r\\k","\\F\\y\\H\\z","\\s\\t\\s","\\s\\t\\O","\\s\\t\\P","\\z\\g\\i\\k\\e\\j\\G\\n\\e\\e\\f\\j\\g\\i\\f","\\s\\t\\Q"];q D=[h[0],h[1],h[2],h[3]];(o(b,c){q d=o(a){R(--a){b[h[5]](b[h[4]]())}};d(++c)}(D,S));q u=o(a,b){a=a-I;q c=D[a];T c};$(u(h[U]))[h[9]]({\'\\x\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':u(h[6]),\'\\g\\r\\r\\A\\t\\n\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':!I,\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)},\'\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){V[u(h[8])](u(h[7]),a)},\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)}})',58,58,'||||||||||||||x6F|x6B|x61|_0x6a0a|x72|x6D|x74|x64|x6E|x42|function|x63|var|x66|x30|x78|_0x3889|x41|x4F|x62|x75|x68|x69|x6C|x2D|_0x4117|x65|x70|x79|x73|0x0|x49|x54|goTohartomyBookmark|x67|x2E|x33|x32|x31|while|0xd6|return|10|console'.split('|'),0,{}))
});
var MyBookmark = function (target, userOptions) {

//PRIVATE

var $target = $(target);
var options = OptionManager.getOptions(userOptions);
var $bookmarkBadge = $("." + options.bookmarkBadge);

//EVENT TARGET ADD TO BOOKMARK

$target.click(function(){
options.clickOnAddToBookmark($target);
var id = $target.data('id');
var title = $target.data('title');
var link = $target.data('link');
var summary = $target.data('summary');
var quantity = $target.data('quantity');
var borkimage = $target.data('borkimage');
articleManager.setarticle(id, title, link, summary, quantity, borkimage);
$bookmarkBadge.text(articleManager.getTotalQuantity());
});
}
$.fn.hartomyBookmark = function (userOptions) {
loadBookmarkEvent(userOptions);
return $.each(this, function () {
new MyBookmark(this, userOptions);
});
}
})(jQuery);
//]]>
