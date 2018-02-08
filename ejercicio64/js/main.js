$(document).ready(function () {
	let crearElementos = [];
	let crearInputCheck = [];
	let nombres = [];
	let numElement = 6;
	for(let i=0;i<numElement;i++){

		nombres[i] = "lorem "+i;
		if(i<=3){
            crearElementos[i] = $("<input type='submit' name='nombre' value='"+nombres[i]+"' disabled='disabled'>");
            crearInputCheck[i] = $("<input type='reset' value='limpiar"+i+"' disabled='disabled'>");
		}else{
            crearElementos[i] = $("<input type='submit' name='nombre' value='"+nombres[i]+"'>");
            crearInputCheck[i] = $("<input type='reset' value='limpiar"+i+"'>");
		}

	}
	$("body").append(crearElementos, crearInputCheck);

	$(":submit, :reset").css({
		"background-color": "red"
	});
});