$("div").css({
	"background-color": "red",
	"position": "absolute",
	"widht": "90px",
	"height": "90px",
	"margin": "5px"
});
$("div").click(function () {
	$(this).animate({
		left:100
	}, "slow").animate({
		fontSize: "2em"
	}, "slow");

});