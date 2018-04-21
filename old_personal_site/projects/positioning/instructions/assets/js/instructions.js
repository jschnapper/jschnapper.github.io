$(document).ready(function() {
	$(".hint-button.press").click(function() {
		if ($(".tutorial").hasClass("hidden")) {
			$(".tutorial").slideDown(400, function() {
				$(".tutorial").removeClass("hidden");
				$(".hint-button.press").html("Possible Solution");
			});
			$(".tutorial").addClass("active");
		} else {
			$(".tutorial").slideUp(400, function() {
				$(".tutorial").removeClass("active");
				$(".hint-button.press").html("Possible Solution");
			});
			$(".tutorial").addClass("hidden");
		}
	});
});