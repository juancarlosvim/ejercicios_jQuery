$(document).ready(function () {
	let lista = $("<ul></ul>");
	let btnColor = $("<button id='btnColor'>Cambiar Color</button>");
	let btnComprobar = $("<button id='btnComprobar'> Comprobar</button>");
	let btnTildes = $("<button id='btnTilde'>Quitar Tilde</button>");
	$("body").append(lista, btnColor, btnComprobar, btnTildes);
	$.ajax({
		url: "http://daw2.iesoretania.es/alumno09/horoscopo/palabras.php",
		method: "POST",
		data: null,
		statusCode: {
			200: function () {
				console.log("Connexión Correcta");
			},
			404: function () {
				console.log("Conexión incorrecta");
			}

		}
	}).done(function (data) {
		//console.log(data);
		//llamo a la funcion separarLetras
		seperarLetras(data);

	});
	// creamos una funcion que recibe un parametro que es el contenido de la llamada de ajax
	let seperarLetras = (c) =>{
		let contenido = c.toLowerCase();
		console.log("datos => "+contenido);
		let arrayPalabras = [];
		let tam = 9;
		for(let i=0;i<tam;i++){
			arrayPalabras[i] = contenido.split("-")[i];
		}
		console.log(arrayPalabras);
		crearLista(arrayPalabras);

	};
	// funcion que recibe un parametro en este caso un array y creamos los li y añadimos a la lista los li
	let crearLista = (a) =>{
		let tamTotal = a.length;
		let arrayPalabras = a.sort(); // si quitamos el sort nos dira que no esta ordenado
		let contenidoLista = [];
		for(let i=0;i<tamTotal;i++){
			contenidoLista[i] = $("<li>"+arrayPalabras[i]+"</li>");
		}

		lista.append(contenidoLista);
		btnComprobar.click(function () {
			let orden = comprobarListaOrdenada(arrayPalabras);
			console.log("orden => "+orden);
			if(orden===true){
				alert("Array ordenado");
			}else{
				alert("Array no ordenado");
			}
		});
		console.log(contenidoLista);

		//arrayElementos(contenidoLista);

		//console.log(arrayElementos(contenidoLista));
	};

	btnColor.click(function () {

		$("li:even").css({
			"background-color": "yellow"
		});
		$("li:odd").css({
			"background-color": "red"
		});
	});

	// funcion que le pasamos el array
	let comprobarListaOrdenada =  (l) =>{

		// cogemos los li
		let arrayContenidoLi = [];
		for(let i=0;i<l.length;i++){
			arrayContenidoLi[i] = $("li:eq("+i+")").text();
		}
		console.log(arrayContenidoLi);

		let arrayOrdenado = [];
		arrayOrdenado = l.sort();
		let ordenado;
		for(let i=0;i<1;i++){
			if(arrayContenidoLi[i] === arrayOrdenado[i]){
				 ordenado = true;
				console.log("ARRAY ORDENADO");
			}else{
				 ordenado = false
			}
		}
		return ordenado;
	};
	/*
		TODO
		Realizado que las palabras que lleven tilde, se las quito y me las devuelve en un array
		Falta por realizar que cuando pulse en el boton esas palabras se sustituyan por las de sin tilde
	 */

	let comprobarPalabra = (p) =>{
		let arrayPalabrasAcentuadas = ["á", "Á", "é", "É", "í", "Í", "ó", "Ó", "ú", "Ú"];
		let arrayPalabrassinAcentuadas = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
		let palabra;
		for(let i=0;i<arrayPalabrasAcentuadas.length;i++){
			if(p.indexOf(arrayPalabrasAcentuadas[i]) !== -1){
				palabra = p.replace(arrayPalabrasAcentuadas[i], arrayPalabrassinAcentuadas[i]);
			}
			//console.log(p.indexOf(arrayPalabrasAcentuadas[i]))
		}
		return palabra;
	};
	let arrayElementos = (elemnt) =>{
		console.log("entro en la funcion arrayElementos");
		let cont = elemnt;
		let array = [];
		let palabras =[];
		let tamLi = $("li").length;
		//console.log(comprobarPalabra(cont[0].text()));
		console.log(cont);

		for(let i=0;i<cont.length;i++){
			array[i] = comprobarPalabra(cont[i]);
			//console.log(array[i]);
			if(array[i] !== undefined){
				palabras.push(array[i]);
			}
		}
		//console.log(palabras);
		//console.log(palabras);
		//comprobar ul y li

		if(palabras.length>0){
			console.log(palabras);
			return palabras;
		}

		//return palabras;
	};
	btnTildes.click(function () {
		let tamLi = $("li").length;
		let contenido = [];
		for(let i=0;i<tamLi;i++){
			contenido[i] = $("li:eq("+i+")").text();
		}
		let palabrasSinTilde = arrayElementos(contenido);
		console.log(contenido);
		console.log(arrayElementos(contenido));
		posicionDePalabra(contenido);
		for(let j=0;j<contenido.length;j++){
			//reempazarPalabra(palabrasSinTilde[j], );
		}



	});
	/*
		Funcion para saber la posicion que tiene las palabras acentuadas
		recibe un parametro en este caso un array
	 */
	let posicionDePalabra = (c) =>{
		let palabras = c;
		let posicion = [];
		let p;
		console.log(palabras);
		for(let i=0;i<palabras.length;i++){
			posicion[i] = comprobarPalabra(palabras[i]);
			console.log(posicion);
			if(posicion[i]!==palabras[i]){
				// falta por scar la posicon de las palabras
			}
		}
		console.log("p "+p);
		//console.log("pos "+posicion);
		return posicion;
	};
	let reempazarPalabra = (palabra, posicion) =>{
		let tam = $("li").length;
		for(let i=0;i<tam;i++){
			$("li:eq("+posicion+")").text(palabra);
		}
	};

});