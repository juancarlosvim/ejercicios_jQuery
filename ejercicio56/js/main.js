$(document).ready(function () {
   let numerosP = 7;
   let contenido = [];
   for(let i=0;i<numerosP;i++){
       contenido[i] = $("<p>Lorem eu dolor sit amet, consectetur adipisicing elit. Ab blanditiis, commodi consequatur cumque delectus dignissimos eaque magni molestias nam, necessitatibus nesciunt nisi obcaecati odit optio pariatur quaerat, quas quod reiciendis.</p>");
   }
   $("body").append(contenido);
   $("p:contains(eu)").css({
      "background-color": "red"
   });
});