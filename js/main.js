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
	$logoHeight = $logo.height()

	if (window.outerWidth < 768) {
	
		if ($border.offset().top < ($tag.outerHeight(true) + $contact.outerHeight())) {
	
			$newHeight = $tag.outerHeight(true) + $contact.outerHeight()

			$header.css("height" , $newHeight)
		}

	} else {

		$header.css("height", $logoHeight)

	}

/******* #Contact-Info and #tagline Top Margin *******/

	$newMargin = $logoHeight / 2;
	$screenWidth = window.innerWidth

	if ($screenWidth > 992) {

		if ($tag.offset().top < $logoHeight) {
			$tag.css("top", $newMargin);
			$contact.css("top", $newMargin - 10);
		}
	}


	/****************** Responsive Slider Height *******************/
	if (document.title !== "Frasier Homes Testimonies") {

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
	}	

/****************** Testimony Image Resize ********************/

	if (document.title == "Frasier Homes Testimonies") {

	$testImgs = $(".testimonies > div > img")
	$firstHeight = $testImgs[0].height;
	$firstWidth = $testImgs[0].width;

	$testImgs.height($firstHeight);
	$testImgs.width($firstWidth);
	}
});