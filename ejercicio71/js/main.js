$(document).ready(function () {
   let cuadrodeTexto = $("<input type='text'>");
   let select = $("<select></select>");
   let opcion = [];
   let numOpciones = 3;
   for(let i=0;i<numOpciones;i++){
       opcion[i] = $("<option id='"+i+"'>lorem"+i+"</option>");
   }
   select.append(opcion);
   $("body").append(cuadrodeTexto, select);
   $("input, select").on("change", function () {
      $(this).css({
         "background-color": "red"
      });
   });
});