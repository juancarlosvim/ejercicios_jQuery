$(function () {
	$("input").click(function () {
		$("p").css({
			"color": "red"
		}).slideUp(3000).slideDown();
	});
});