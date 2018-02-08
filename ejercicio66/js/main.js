$(document).ready(function () {
	let crearElementos = [];

	let nombres = [];
	let numElement = 6;
	let select = $("<select></select>");
	for(let i=0;i<numElement;i++){
		nombres[i] = "lorem "+i;
            if(i===1){
                crearElementos[i] = $("<option selected>"+nombres[i]+"</option>");
            }else{
                crearElementos[i] = $("<option>"+nombres[i]+"</option>");
            }
	}
    select.append(crearElementos);
	$("body").append(select);
	$(":selected").css({
		"background-color": "red"
	});
});