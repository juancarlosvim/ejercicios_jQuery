$(document).ready(function () {
    let boton = $("<button>Boton</button>");
    let p = $("<p>Lorem ipsum dolor sit amet, consectetur.</p>");
    $("body").append(boton, p);
    $("button").click(function () {
        let parrafo = jQuery("p");
        parrafo.text("TEXTO");

    });
});