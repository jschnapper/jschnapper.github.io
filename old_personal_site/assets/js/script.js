$(document).ready(function() {

	$(".nav-item").click(function() {
		if ($(this).hasClass("nav-inactive")) {
			$(".nav-item").toggleClass("nav-inactive");
			$(".nav-item").removeClass("nav-active");
			$(this).addClass("nav-active");
		}
 	})
})