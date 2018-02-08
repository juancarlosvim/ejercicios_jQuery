$(document).ready(function () {
	let crearElementos = [];
	let nombres = [];
	let numElement = 6;
	let id = [];
	let enlaces = [];
	for(let i=0;i<numElement;i++){
		id[i] = ""+i;
		enlaces[i] = "enlace.com";
		nombres[i] = "lorem "+i;
		if(i<=3){
			crearElementos[i] = $("<a href='"+enlaces[i]+"' id='"+id[i]+"'>"+nombres[i]+"</a>");
		}else{
			crearElementos[i] = $("<a href='#'>"+nombres[i]+"</a>");
		}
	}
	$("body").append(crearElementos);
	$("a[href$='.com']").css({
		"background-color": "yellow"
	});
});