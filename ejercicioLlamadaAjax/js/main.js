$(document).ready(function () {
	$("p").load('texto1.txt', function (miResponse, miStatus, miObjeto) {
		console.log(miResponse);
		console.log(miStatus);
		console.log(miObjeto);
	});
});