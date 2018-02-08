$(document).ready(function () {
    let botones = [];
    let numBotones = 2;
    let cuadroTexto = $("<input type='text'>");
    for(let i=0;i<numBotones;i++){
        botones[i] = $("<button id='"+i+"'>lorem "+i+"</button>");
    }
    $("body").append(botones, cuadroTexto);
    $("#0").click(function () {
    $("input").focus();
    });
    $("#1").click(function () {
        $("input").focusout();
    });
});