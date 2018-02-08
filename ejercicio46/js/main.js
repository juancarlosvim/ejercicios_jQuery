$(document).ready(function () {
    let crearDiv = $("<div></div>");
    let botonVerDimensiones = $("<button>Ver dimensiones</button>");
    $("body").append(crearDiv, botonVerDimensiones);
    $("div").css({
       "background-color": "blue",
        "width": "300px",
        "height": "100px"
    });
   $("button").click(function () {
       let ancho = $("div").width();
       let alto = $("div").height();
       let tamDivAncho = $("<p></p>").text("Ancho "+ ancho);
       let tamDivAlto = $("<p></p>").text("Alto "+alto);
       $("div").append(tamDivAncho, tamDivAlto);



   });

});