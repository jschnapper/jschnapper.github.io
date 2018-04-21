$(document).ready(function() {



$("#load-container").delay(6000).fadeOut();
$("#contents").delay(6000).fadeIn(1000);


$("#load").click(function() {
	$("#astro-kirby").addClass("loading");
	$("#load").hide();
	$("#kirby-head").delay(4500).fadeIn();
	$("#launch").delay(5500).show(0);
});

$("#launch").click(function() {
	$("#launch").hide();
	$("#rocket-container").addClass("blast");
	$("#contents").delay(2000).fadeOut();
	$("#kirby-text").delay(2500).fadeIn();
	});


$('#kirby-text').typeIt({
 speed: 50,
 loop: true
})
.tiType("Happy Birthday Zach!")
.tiPause(3500)
.tiDelete(5)
.tiPause(1000)
.tiType("Kirby!")
.tiPause(2400)
.tiSettings({speed: 80})
.tiDelete(6)
.tiPause(1000)
.tiType("The Kirb Man!")
.tiPause(2900)
.tiSettings({speed: 95})
.tiDelete(13)
.tiSettings({speed: 10})
.tiType(". . . ")
.tiPause(1500)
.tiSettings({speed: 50})
.tiDelete(6)
.tiType("WDD Master!")
.tiPause(3000)
.tiDelete();


});

