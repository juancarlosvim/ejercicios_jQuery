$(document).ready(function () {
   $("#btnTexto").click(function () {
       let texto1 = "I";
       let texto2 = $("<i></i>").text("Love");
       let texto3 = document.createElement("strong");
       texto3.innerHTML = "jQuery";
       $("img").after(texto1, texto2, texto3);
   }) ;
});