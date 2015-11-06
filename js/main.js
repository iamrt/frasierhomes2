$(function() {

/***************Mobile Menu***************/

	$('#mobile-menu').on('click', function() {
		$('nav ul').fadeToggle(600)
		$('button').toggleClass('change-bg')
		$('.icon-bar').toggleClass('change-icon');
	});

/**************** Orientation Lock ******************/

	// if (window.innerWidth > window.innerHeight) {
	// 	$("body").css("transform", "rotate(90deg)")
	// };

/***************** Header Resize *******************/
	
	$tag = $('#tagline')
	$contact = $('#contact-info')
	$border = $('.border')
	$header = $('.header')
	$logo = $('#logo')

	if (window.outerWidth < 768) {
	
		if ($border.offset().top < ($tag.outerHeight(true) + $contact.outerHeight())) {
	
			$newHeight = $tag.outerHeight(true) + $contact.outerHeight()

			$header.css("height" , $newHeight + 10)
		}

	} else {

		$logoHeight = $logo.css("height")

		$header.css("height", $logoHeight)

	}

/****************** Responsive Slider Height *******************/

	$img = $('#slider > img')
	$imgHeight = $img.outerHeight(true)
	$slider = $('#slider')
	$first = $('#first-slide')
	$firstSiblings = $first.siblings()

	$slider.css("height", $imgHeight);
	$firstSiblings.css("display", "none");

/************* Slider Button Positions **************/	

	$left = $('#left')
	$right = $('#right')
	// Find mid point of first image
	$firstTop = $first.position().top
	$firstSize = ($first.innerHeight() / 2)
	$midpoint = $firstTop + ($firstSize)
	// Find the correct position for the Right button
	$galleryWidth = $('.gallery').outerWidth()
	$rightPos = ($galleryWidth - 15)

	$left.css("top", $midpoint)
	$left.css("left", 0)

	$right.css("top", $midpoint)
	$right.css("left", $rightPos)

	$left.css("display", "block");
	$right.css("display", "block");


/******************* Slider Code *********************/
	


});