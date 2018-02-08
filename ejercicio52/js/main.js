$(document).ready(function () {
   let lista = [];
   let itemLista = [];
   let itemLista2 = [];
   let arrayCiudades = ["Andújar", "Linares", "Bailén", "Jaén", "La Carolina"];

   for(let i=0;i<2;i++){
	   lista[i] = $("<ul id='"+i+"'></ul>");
   }
	$("body").append(lista);
   for(let j=0; j<arrayCiudades.length;j++){
       itemLista[j] = $("<li>"+arrayCiudades[j]+"</li>");
       itemLista2[j] = $("<li>"+arrayCiudades[j]+"</li>");
   }
	lista[0].append(itemLista);
	lista[1].append(itemLista2);
    $("li:eq(1)").css({
       "background-color": "red"
    });
});