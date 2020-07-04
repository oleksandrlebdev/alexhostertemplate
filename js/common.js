$(function() {


	let feedbackSlider = $('.feedback__content');


	feedbackSlider.on('afterChange', function(event, slick, currentSlide) {

	  if (currentSlide == 0) {
	    $(".feedback-carousel-current").text(currentSlide + 1);
	  } else {
	    $(".feedback-carousel-current").text(currentSlide + 1);
	  }

	});



	feedbackSlider.slick({
		slidesToShow: 3,
		centerMode: true,
		nextArrow: $('.feedback-carousel-next'),
		prevArrow: $('.feedback-carousel-prev'),
		
	});

	$('.feedback-carousel-full').text(feedbackSlider.slick("getSlick").slideCount);



});
