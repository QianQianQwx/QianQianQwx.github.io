/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});
				
				// banner
				let currentIndex = 0;
				const slides = document.querySelectorAll('.carousel-slide');
				const dots = document.querySelectorAll('.dot');

				function showSlide(index) {
					slides.forEach((slide, i) => {
					slide.classList.toggle('active', i === index);
					dots[i].classList.toggle('active', i === index);
					});
					currentIndex = index;
				}

				document.querySelector('.prev').addEventListener('click', () => {
					showSlide((currentIndex - 1 + slides.length) % slides.length);
				});

				document.querySelector('.next').addEventListener('click', () => {
					showSlide((currentIndex + 1) % slides.length);
				});

				dots.forEach((dot, i) => {
					dot.addEventListener('click', () => {
					showSlide(i);
					});
  });


  setInterval(() => {
    showSlide((currentIndex + 1) % slides.length);
  }, 5000);

})(jQuery);