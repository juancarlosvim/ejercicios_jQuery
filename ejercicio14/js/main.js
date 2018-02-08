$(function () {
	$("input").focus(function () {
		$(this).css("background-color", "red");
	}).blur(function () {
		$(this).css("background-color", "white");
	});
});