$(document).ready(function() {

	setInterval(function() {
		console.log("new");
		$("#z-container").append("<div class='z snoring'>Z</div>");
	}, 1000);

	setInterval(function() {
		console.log("delete");
		$(".z:first-child").remove(); 
	}, 1200);	
});