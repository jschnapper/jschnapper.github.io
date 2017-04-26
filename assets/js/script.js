$(document).ready(function() {
	var navPosition = $("nav").offset().top;

	$(window).scroll(function() {
	  
	  var current = $(window).scrollTop();
	  console.log("potato scroll");
	  if (current < navPosition) {
	    $("nav").removeClass("fixed");
	  } else {
	    $("nav").addClass("fixed");
	  }
	});

	
// Fading text -- help from stack overflow -- it doesn't work
	// function fading() {
	// 	console.log("work please");
	// 	$(".fade-text").not(".hidden").fadeTo(1000, 0, function() {
	// 		var faded = this;
	// 		$(".hidden").fadeTo(1000,1, function() {
 // 				$(this).removeClass("hidden");
 // 				$(faded).addClass("hidden");
 // 				// fading();
	// 		});
	// 	});
	// }
 // 	setInterval(function(){fading(); }, 2000);

// New Fading Text with help from Emily, thank you Emily
 	var show = "#friends";
 	var hidden1 = "#family";

 	setInterval(function() {
 		$(show).fadeOut(800).delay(4000);
 		$(hidden1).fadeIn(800).delay(4000);
 		var nowNotShown = show;
 		show = hidden1;
 		hidden1 = nowNotShown;
 	}, 2000)

// Modal from HW7

	$("#closing").click(function(){
		console.log("click");
		$("#modal-container").show();
	});
	$("#submit").click(function(){
		$("#modal-container").hide();
	});
	$("#modal-overlay").click(function(){
		$("#modal-container").hide();
	});

});