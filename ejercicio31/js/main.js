$(function () {
	$("#btn1").click(function () {
		$("p").text("Hola Mundo");
	});
	$("#btn2").click(function () {
		$("p").html("<strong>Hola Mundo</strong>");
	});
	$("#btn3").click(function () {
		$("#txtValor").val("Hola Mundo");
	});
});