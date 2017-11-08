$(document).ready(function(){

	/*
  $('.carousel').slick({
  	slidesToShow: 1,
  	dots:true,
  	centerMode: true,
  });
 */

$('.carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,  
  arrows: false,
  pauseOnHover: false,

});


$(".single-item").slick({
	dots: true
});
});
