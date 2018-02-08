$(document).ready(function () {

    let botonVerDimensiones = $("<button>Ver dimensiones</button>");
    $("body").append(botonVerDimensiones);

   $("button").click(function () {
       let ancho = $(document).width();
       let alto = $(document).height();
       let ventanaAncho = $(window).width();
       let ventanaAlto = $(window).height();
      alert("ancho documento =>  "+ancho+"alto documento => "+alto+"ventana ancho => "+ventanaAncho+ "ventana alto => "+ventanaAlto);



   });

});