console.log('it works')

 $(document).ready(function(){
 	$('.submit1').click(function(event){
 		console.log('clicked that shit');

 		var email = $('.email').val();
 		var name = $('.name').val();
 		var message = $('.message').val();
 		var statusElm = $('.status');
 		statusElm.empty();

 		if(email.length >5 && email.includes('@') && email.includes('.')){
 			statusElm.append('<div>email is valid</div>');
 		} else {
 			event.preventDefault();
 			alert('<div>email is NOT valid</div>');
 		}

 		if(message.length >2){
 			statusElm.append('<div>Message is valid</div>');
 		} else {
 			event.preventDefault();
 			statusElm.append('<div>Message is Not valid</div>');
 		}

 		 if(name.length >1){
 			statusElm.append('<div>Name is valid</div>');
 		} else {
 			event.preventDefault();
 			statusElm.append('<div>Name is Not valid</div>');
 		}
 	});
 });
/*
	Introspect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Off-Canvas Navigation.

			// Navigation Panel Toggle.
				$('<a href="#navPanel" class="navPanelToggle"></a>')
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						$('#nav').html() +
						'<a href="#navPanel" class="close"></a>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');

	});

})(jQuery);