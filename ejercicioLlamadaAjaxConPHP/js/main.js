$(document).ready(function () {
	let parametros = {};
	$.ajax({
		data: parametros,
		url: "http://daw2.iesoretania.es/alumno04/bdRecursos/bdprovincias.php",
		type: 'get',
		beforeSend: function () {
			$("p").html("enviando datos")
		},
		success: function (miResponse) {
			datos = JSON.parse(miResponse);
			console.log(datos);
			mostrarProvincias(datos)
		}
	});

	let mostrarProvincias = (d) =>{
		let contenido = d;
		let provincias = [];
		let select = $("<select id='provincias' name='provincias'></select>")
		for(let i=0;i<contenido.length;i++){
			provincias[i] = $("<option value='"+contenido[i].id_provincia+"'>"+contenido[i].provincia+"</option>");
		}
		select.append(provincias);
		$("body").append(select);
		//$("[name=provincias]").selectmenu();
		select.change(function (e) {
			let valorSelect = e.target.value;
			console.log(e.target.value);
			pasarMunicipios(valorSelect);
		});
	};

	let pasarMunicipios = (v) =>{
		let parametros = {numero: v};
		$.ajax({
			data: parametros,
			url: "http://daw2.iesoretania.es/alumno04/bdRecursos/municipios.php",
			type: 'post',
			beforeSend: function () {
				$("p").html("enviando datos")
			},
			success: function (miResponse) {
				datos = JSON.parse(miResponse);
				console.log(datos);
				mostrarMunicipios(datos);
			}
		});
	};

	let mostrarMunicipios = (m) =>{
		let contenidoMunicipio = m;
		let municipios = [];
		let selectMu = $("<select id='municipio' name='municipios'></select>")
		for(let i=0;i<contenidoMunicipio.length;i++){
			municipios[i] = $("<option value='"+contenidoMunicipio[i].id_municipio+"'>"+contenidoMunicipio[i].nombre+"</option>");
		}
		selectMu.append(municipios);
		$("body").append(selectMu);
		//$("[name=municipios]").selectmenu();
		selectMu.change(function (e) {
			console.log(e.target.value);
		});
	};

});