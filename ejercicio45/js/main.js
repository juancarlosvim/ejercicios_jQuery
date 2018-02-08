$(document).ready(function () {
    let p1= [];
    let clases = ["uno", "dos", "tres", "cuatro"];
    let color = "#FFFF00";
    let tamLetra = "1.2em";
    let colores = ["#FF0000", "#008000", "#FFFF00", "#0000FF"];
    let boton = $("<button id='btnColor'>Obtener color</button>");
    for(let i=0;i<4;i++){
        p1[i] = $("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>");
        p1[i].addClass(clases[i]);
        p1[i].css({
           "background-color": ""+colores[i]
        });
    }
    $("body").append(p1, boton);
    $("#btnColor").click(function () {
        $("p").css({
           "background-color": ""+color,
            "font-size": ""+tamLetra
        });
    });
});