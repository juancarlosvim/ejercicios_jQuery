$(document).ready(function () {
	let crearElementos = [];
	let nombres = [];
	let numElement = 6;
	for(let i=0;i<numElement;i++){

		nombres[i] = "lorem "+i;
			crearElementos[i] = $("<input type='text' value='"+nombres[i]+"'>");
	}
	$("body").append(crearElementos);
	$(":input").css({
		"background-color": "yellow"
	});
});