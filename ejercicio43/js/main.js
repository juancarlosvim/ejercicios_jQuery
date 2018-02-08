$(document).ready(function () {
   let h1 =  $("<h1>Lorem ipsum dolor sit amet.</h1>");
   let h2 =  $("<h2>Lorem ipsum dolor sit amet.</h2>");
   let p =  $("<p>Lorem ipsum dolor sit amet.</p>");
   let botonInsertarClase = $("<button id='btnInsertar'>insertarClase</button>");

   $("body").append(h1, h2, p, botonInsertarClase);
   $("#btnInsertar").click(function () {
      $("h1, h2, p").toggleClass("cambiarColor");
   });

});