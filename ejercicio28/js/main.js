$(function () {
	$("div").css({
		"background-color": "red",
		"position": "absolute",
		"widht": "90px",
		"height": "90px",
		"margin": "2em"
	});
	$("#btnStart").click(function () {
		$("div").animate({
			left:100
		}, 3000).animate({
			fontSize: "2em"
		}, 3000);

	});
	$("#btnStop").click(function () {
		$("div").stop();
	});
	$("#btnStopAll").click(function () {
		$("div").stop(true);
	});
	$("#btnStopFinish").click(function () {
		$("div").finish();
	});
});
