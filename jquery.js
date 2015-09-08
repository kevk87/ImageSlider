$(function() {
var currentPage = 0;
var pictures = $('.slider div');
var total = pictures.length;

function iterate () {
	var page = $(".slider div").eq(currentPage);
	pictures.hide();
	page.show();	
}

var slideAuto = setInterval(function() {
currentPage +=1;
if (currentPage > total -1) {
 currentPage = 0;
 }
 iterate();
}, 3000);

$('.next').click(function() {
clearInterval(slideAuto);	
currentPage +=1;
if (currentPage > total -1) {
 currentPage = 0;
 }
 iterate();
});


$('.prev').click (function() {
clearInterval(slideAuto);	
currentPage -=1;
if (currentPage < 0) {
 currentPage = total - 1;
 }
 iterate();
});


});