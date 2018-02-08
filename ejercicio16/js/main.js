$(function () {
	$("input:first").click(function () {
		$("div:first").hide("fast");
	});
	$("input:last").click(function () {
		$("div:last").hide("fast");
	});
});