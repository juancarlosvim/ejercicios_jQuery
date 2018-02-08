$("div").css("background-color", "red")
	.css("height", "200px")
	.css("width", "200px");
$("div").click(function () {
	$(this).animate({"height": "60px"})

});