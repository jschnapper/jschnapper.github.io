$(document).ready(function() {

	// Nav selections 
	$("#about-container").fadeIn(700);
	$("#projects-container").fadeIn(700);

	let last = "project";
	$(".top-text").click(function() {
		if ($(this).html() == "Resume") {
			$("#arrow-container").removeClass("projectsSelected");
			$("#arrow-container").addClass("resumeSelected");
			last = "resume";
		}
		else if (((($(this).html() == "Projects") && last == "project")) || ((($(this).html() == "Resume") && last == "resume"))) {
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
			}, 620);
		}
	});

	// Project Links

	$(".project").click(function() {
   		window.location = $(this).find("a").attr("href");
   	});

});

