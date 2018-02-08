$("div").first().css("background-color", "red");
$("div").last().css("background-color", "blue");
$("input").first().click(function () {
	$("div").first().slideUp();
});