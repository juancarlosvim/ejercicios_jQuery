$(function () {
    $('#btnPrimerEvento').click(function () {
       $("p").text(function (i, textoOriginal) {
          return("Texto original => "+textoOriginal+ "Nuevo texto => Hola Mundo1! (indice => "+i+")");
       });
    });
    $('#btnSegundoEvento').click(function () {
        $("p").html(function (i, textoOriginal) {
            return("Texto original => "+textoOriginal+ "Nuevo texto => Hola <strong>Mundo2!</strong>indice => "+i+")");
        });
    });
});