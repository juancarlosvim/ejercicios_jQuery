$(document).ready(function () {
   let lista = $("<ul></ul>");
   let itemLista = [];
   let arrayCiudades = ["Andújar", "Linares", "Bailén", "Jaén", "La Carolina"];
   $("body").append(lista);
   for(let i=0; i<arrayCiudades.length;i++){
       itemLista[i] = $("<li>"+arrayCiudades[i]+"</li>");
   }
   lista.append(itemLista);
    $("li:eq(1)").css({
       "background-color": "red"
    });
});