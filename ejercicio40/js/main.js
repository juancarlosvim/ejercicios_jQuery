$(document).ready(function () {
    let crearDiv = $("<div></div>");
    let crearBoton = $("<button>Metodo REMOVE</button>");

    $("body").append(crearDiv, crearBoton);
    let $p1 = $("<p></p>").text("Lorem ipsum dolor.");
    let $p2 = $("<p></p>").text("Lorem ipsum dolor.");
    let $p3 = $("<p></p>").text("Lorem ipsum dolor.");
    $("button").attr({
       "id": "btnRemove"
    });
    $("div").css({
       "background-color": "yellow",
        "width": "300px",
        "height": "100px"
    }).append($p1, $p2, $p3);
    $("#btnRemove").click(function () {
        $("div").empty();
    });


});