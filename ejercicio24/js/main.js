$("div").css("background-color", "red")
	.css("height", "200px")
	.css("width", "200px");
$("div").click(function () {
	$(this).animate({"right": "250px"}).css("width", "340px").css("height", "340px").css("margin", "auto");
});