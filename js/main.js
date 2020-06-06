$(document).ready(function(t){

$('.blogs-toggle').click(function(event) {
	event.preventDefault();	

	console.log('Click');

	$('.blogs-content').hide();


	var href = $(this).attr('href');
	console.log(href);

	$(href).fadeIn();
});

var windowHeight = $(window).height();

$(window).scroll(function(){

	console.log( $(this).scrollTop() );

	if ($(this).scrollTop() > windowHeight) {

		$('#scrollToTop').fadeIn();
	} else {
		$('#scrollToTop').fadeOut();
	}
});



$('#scrollToTop').click(function(event) {

	event.preventDefault();
	$('html').animate({scrollTop: 0}, 800);
});

});