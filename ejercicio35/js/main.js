$(function () {
   $("#btnTexto").click(function () {
      $("p").append("<strong>Texto añadido</strong>");
   });
   $("#btnLista").click(function () {
       $("ul").append("<li>Lorem ipsum dolor.</li>")
   });
});