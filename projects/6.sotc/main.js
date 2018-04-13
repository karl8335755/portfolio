$(document).ready(function(){
	$(document).scroll(function() {
		var y = $(this).scrollTop();

		if (y > 800) {
		  $('.nav').fadeIn();
		} else {
		  $('.nav').fadeOut();
		}
	});
});

