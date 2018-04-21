$(document).ready(function() {
	$(".q2-button").click(function() {
		if ($(".q2-button").text() == "Party On") {
			$("p").css("display", "none");
			$(".q2-image").css("display", "block");
			$(".q2-button").css("background-color", "#EE6352");
			$(".q2-button").html("Party Off");
		} else if ($(".q2-button").text() == "Party Off"){
			$("p").css("display", "block");
			$(".q2-image").css("display", "none");
			$(".q2-button").css("background-color", "#62C370");
			$(".q2-button").html("Party On");
		}
	})
});

