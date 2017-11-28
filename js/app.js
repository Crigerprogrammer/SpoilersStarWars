//Prevent spoilerphobes from seeing spoilers

//Solution:  Hide spoilers and reveal them trough user interaction

//1, Hide spoiler
$(".spoiler span").hide();
//2, Add a botton
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3, When button pressed
$("button").click(function(){
	//3.1 Show spoiler next to the button clicked
	$(this).prev().show();
	//3.2 Get rid of button
	$(this).remove();
});
