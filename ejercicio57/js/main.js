$(document).ready(function () {
   let tabla = $("<table></table>");
   let columnas = [];
   let filas = [];
   let nombres = [];
   let numC =7;
   let numF = 7;
    $("body").append(tabla);
   tabla.append(filas);
   tabla.css({
       "border": "0.1em solid black"
   });
   for(let j=0;j<numC;j++){
       nombres[j] = "texto "+j;
       if(j<=3){
           filas =  $("<tr>"+nombres[j]+"</tr>");
       }else{
           filas =  $("<tr></tr>");
       }
       tabla.append(filas);
       for(let i=0;i<numF;i++){
           nombres[i] = "lorem "+i;
           if(i<=3){
               columnas[i] = $("<td>"+nombres[i]+"</td>");
           }else{
               columnas[i] = $("<td></td>");
           }
       }
       filas.append(columnas);
   }

   $("td").css({
      "border": "0.1em solid black"
   });
   $("td:empty").css({
       "background-color": "yellow"
   });


});