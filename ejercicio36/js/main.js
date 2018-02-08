$(function () {
   $("#btnTexto").click(function () {
      $("p").prepend("<strong>Texto añadido</strong>");
   });
   $("#btnLista").click(function () {
       $("ul").prepend("<li>Lorem ipsum dolor.</li>")
   });
});