$(document).ready(function() {

	// prevent layout from changing
    $('#project-container a').each(function(project) {
    	 $(this).delay(100 * project).fadeIn('slow');
    });

	$(".nav-item").click(function() {
		if ($(this).hasClass("nav-inactive")) {
			$(".nav-item").toggleClass("nav-inactive");
			$(".nav-item").removeClass("nav-active");
			$(this).addClass("nav-active");
		}
 	});
});