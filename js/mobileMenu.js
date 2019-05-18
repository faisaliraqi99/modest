$(document).ready(function(){
	var navBtn = $('.hamburger');
	var navList = $('.header-nav__list');
	navBtn.on('click', function(){
		if(navBtn.hasClass('is-active')) navList.css('right', '-100%'), navBtn.removeClass('is-active')
		else navList.css('right', '0'), navBtn.addClass('is-active');
	});
});