$(document).ready(function () {
    $("#btnTexto").click(function () {
       let pHtml = "<p>Texto</p>" ;
       let pJquery = $("<p></p>").text("Texto");
       let pJs = document.createElement("p");
       pJs.textContent = "Texto";
       $("body").append(pHtml, pJquery, pJs);

    });
});