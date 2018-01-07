$(document).ready(function() {

	$("#resume-container").fadeIn();

	// Nav selections 

	let last = "resume";
	$(".top-text").click(function() {
		if ($(this).html() == "Resume") {
			$("#arrow-container-resume-now").removeClass("projectsSelected");
			$("#arrow-container-resume-now").addClass("resumeSelected");
			last = "resume";
		}
		else if (((($(this).html() == "Projects") && last == "project")) || ((($(this).html() == "Resume") && last == "resume"))) {
		}
		else {
			$("#arrow-container-resume-now").removeClass("resumeSelected");
			$("#arrow-container-resume-now").addClass("projectsSelected");
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

	// Active and Top Link

	$(".top-text").click(function() {
		$(".top-text").removeClass("active");
		$(this).addClass("active");
		if ($(this).html() == "Resume") {
			$("#about-container").fadeOut();
			$("#projects-container").fadeOut();
			setTimeout(function() {
				window.location.href = "resume.html";
			}, 650);
		}
		else if ($(this).html() == "Projects") {
			$("#resume-container").fadeOut();
			setTimeout(function() {
				window.location.href = "index.html";
			}, 650);
		}
	});

});

