$(document).ready(function () {
	let crearElementos = [];
	let crearInputCheck = [];
	let nombres = [];
	let numElement = 6;
	for(let i=0;i<numElement;i++){

		nombres[i] = "lorem "+i;
			crearElementos[i] = $("<input type='checkbox' name='nombre' value='"+nombres[i]+"'>");
			crearInputCheck[i] = $("<input type='radio'>");
	}
	$("body").append(crearElementos, crearInputCheck);
	/*
		Note: We use jQuerys .wrap method to highlight the selected elements, because Firefox does not support background color on checkboxes.
	 */
	$(":checkbox, :radio").wrap("<span style='background-color:red'>");
});