$(document).ready(function() {

	// Nav selections 

	let last = "project";
	$(".top-text").click(function() {
		if ($(this).html() == "Resume") {
			$("#arrow-container").removeClass("projectsSelected");
			$("#arrow-container").addClass("resumeSelected");
			last = "resume";
		}
		else if ((($(this).html() == "Projects") && last == "project")) {
		}
		else {
			$("#arrow-container").removeClass("resumeSelected");
			$("#arrow-container").addClass("projectsSelected");
			last = "project";
		}
	});


	// Hidden Arrow

	$(".top-text").hover(
		function() {
			if (($(this).html()=="Projects" && !$(this).hasClass("active"))) {
				$(".project-arrow").css("visibility","visible");
			}
			else if (($(this).html()=="Resume" && !$(this).hasClass("active"))) {
				$(".resume-arrow").css("visibility","visible");
			}
		}, function() {
			$(".arrow-selector").css("visibility","hidden");
	});

	// Active

	$(".top-text").click(function() {
		$(".top-text").removeClass("active");
		$(this).addClass("active");
	});

	// Links 

	$(".project").click(function() {
   		window.location = $(this).find("a").attr("href");
   	});
});

