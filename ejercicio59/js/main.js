$(document).ready(function () {
	let crearElementos = [];
	let nombres = [];
	let numElement = 6;
	let id = [];
	for(let i=0;i<numElement;i++){
		id[i] = ""+i;
		nombres[i] = "lorem "+i;
		if(i<=3){
			crearElementos[i] = $("<p id='"+id[i]+"'>"+nombres[i]+"</p>");
		}else{
			crearElementos[i] = $("<p>"+nombres[i]+"</p>");
		}
	}
	$("body").append(crearElementos);
	$("[id]").css({
		"background-color": "red"
	});
});