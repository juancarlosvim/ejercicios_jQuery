$("div").first().css("background-color", "red").hide();
$("div").last().css("background-color", "blue");
$("input").first().click(function () {
	$("div").first().stop();
});
$("input").last().click(function () {
	$("div").first().slideDown(5000);
});
