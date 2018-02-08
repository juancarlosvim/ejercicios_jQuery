$(document).ready(function () {
   let tabla = $("<table></table>");
   let columnas = 8;
   let filas = 8;
   $("body").append(tabla);

   for(let i=0;i<columnas;i++){
       let c = $("<tr></tr>");
       for(let j=0;j<filas;j++){
           let nombreF = [];
           nombreF[j] = "comulnas "+j;
           let f = $("<td>"+nombreF[j]+"</td>").css({
               "border": "0.1em solid black"
           });
           c.append(f);
       }
       tabla.append(c)
   }
   $("tr:gt(2)").css({
       "background-color": "red"
   });
    $("tr:lt(2)").css({
        "background-color": "blue"
    });






    //tabla.append(c);

});