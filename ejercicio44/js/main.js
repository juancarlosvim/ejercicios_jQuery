$(document).ready(function () {
    let p1= [];
    let clases = ["uno", "dos", "tres", "cuatro"];
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
        alert("EL color de fondo es => "+ $("p.uno").css("background-color"));
    });
});