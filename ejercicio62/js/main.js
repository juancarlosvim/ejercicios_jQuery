$(document).ready(function () {
	let crearElementos = [];
	let nombres = [];
	let numElement = 6;
	for(let i=0;i<numElement;i++){

		nombres[i] = "lorem "+i;
			crearElementos[i] = $("<input type='password' value='"+nombres[i]+"'>");
	}
	$("body").append(crearElementos);
	$(":password").css({
		"background-color": "red"
	});
});