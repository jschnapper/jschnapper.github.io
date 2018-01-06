$(document).ready(function() {
	$("#title").hide().fadeIn(2000)
	$("#sub-title").hide().delay(500).fadeIn(2000)


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

	// title load

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
 		$(show).fadeOut(800).delay(2000);
 		$(hidden1).fadeIn(800).delay(2000);
 		var nowNotShown = show;
 		show = hidden1;
 		hidden1 = nowNotShown;
 	}, 2000)

// Modal from HW7

	$("#closing").click(function(){
		console.log("modal click");
		$("#modal-container").show();
	});
	$("#submit").click(function(){
		$("#modal-container").hide();
	});
	$("#modal-overlay").click(function(){
		$("#modal-container").hide();
	});

// LEGAL modal

	$(".footer-tags").click(function(){
		console.log("legal click");
		$("#legal-modal-container").show();
	});
	$("#legal-modal-overlay").click(function(){
		$("#legal-modal-container").hide();
	});


	// Scroll to part of page 
	// taken from w3 for smoother scrolling; does not count as my own jquery functions
  	// thank you w3, thank you 
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }

    }) 



// an easter egg!
$(".pea").click(function () {
	console.log("hi hi")
	if($(".pea").hasClass("changed")) {
		$(".pea").css("color", '#363537');
		$(".pea").removeClass("changed");
	} else {
		$(".pea").css("color", "#2ECC71");
		$(".pea").addClass("changed");
		alert("Thanks for Pea-ing on the site!");
	}
})



});