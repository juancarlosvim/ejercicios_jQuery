$(document).ready(function () {
	let crearDiv = [];
	let elemento = [];
	let arrayLetras = [];
	let arrayAbc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
	let arrayAbc2 = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,v,w,x,y,z";
	for(let i=0;i<arrayAbc2.length;i++){
	 	crearDiv[i] = $("<div id='"+i+"' class='ui-widget-content'></div>");
	 	for(let j=0;j<1;j++){
	 		elemento = $("<p>lo</p>");
		}
	}

	$("body").append(crearDiv);
	$("div").append(elemento);
	$("div").draggable({
		revert: true
	}).css({
		"margin": "0.5em",
		"width": "20%"
	});

});