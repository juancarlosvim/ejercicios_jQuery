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
      $("div").width(500).height(300);



   });

});