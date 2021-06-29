$(function(){
	$(".header_slider").slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
  		autoplaySpeed: 3000
	});
	$('.menu_btn').on('click',function(){
		$('.nav').toggleClass('active');
		$('.menu_btn_inner').toggleClass('active');
		$('body').toggleClass('lock');
	});
});