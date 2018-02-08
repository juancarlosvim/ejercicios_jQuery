$(document).ready(function () {
    let p1 = $("<p class='italic'>Lorem ipsum dolor sit amet.</p>");
    let p2 = $("<p>Lorem ipsum dolor sit amet.</p>");
    let boton = $("<button>Eliminar parrafo</button>");
    $("body").append(p1, p2, boton);
    $("button").click(function () {
        $("p").remove(".italic");
    });
});