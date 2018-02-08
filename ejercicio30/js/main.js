$(function () {
	$("#btn1").click(function () {
		alert(""+$("p").text());
	});
	$("#btn2").click(function () {
		alert(""+$("p").html());
	});
	$("#btn3").click(function () {
		alert(""+$("input[type=text]").val());
	});
	$("#btn4").click(function () {
		alert(""+$("a").attr("href"));
	});
});