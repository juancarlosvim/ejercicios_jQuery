/*
    TODO
    fallo en la función autoejectuable;

 */
$(document).ready(function () {
    let numerosDeDiv =  2;
    let crearDiv = [];
    let nombres = [];
    let botonParar = $("<button>Cambiar color animacion</button>");
    for(let i=0;i<numerosDeDiv;i++){

        nombres[i] = "DIV "+i;
         crearDiv[i] = $("<div>"+nombres[i]+"</div>");
    }
    $("body").append(crearDiv, botonParar);



    let auto = () =>{
		$("div:eq(0)").css({
			"background-color": "blue"
		}).animate({width: "50%"}, 2000).animate({width: "100%"}, 2000);
		$("div:eq(1)").css({
			"background-color": "green"
		}).animate({width: "30%"}, 2000).animate({width: "100%"}, 2000);
    };
    setInterval(auto, true);
    $("button").click(function () {
       $(":animated").css({
          "background-color": "yellow"
       });
    });

});