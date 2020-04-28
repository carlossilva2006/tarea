var jsonPersona=[
    {
        id:1,
        rut:"12.233.365-5",
        nombre:"Carlos",
        comuna:"Puente Alto"
    },
    {
        id:2,
        rut:"15.658.987-1",
        nombre:"Camilo",
        comuna:"Ñuñoa"
    },
    {
        id:3,
        rut:"18.478.156-k",
        nombre:"Omar",
        comnuna:"Quilicura"
    }
]

var tabla = $("#tabClientes");
var Rut = $("#inRut");
var Nombre = $("#iNombre");
var Comuna = $("#inComuna");

cargarTab();

function agregarItem(){
    var jsonitem={
        rut:Rut.value,
        nombre:Nombre.value,
        comuna:Comuna.value     
    }
    jsonPersona.push(jsonitem);
    /* esta agregra una persona al presionar el boton */
    cargarTab();
   
}
    function cargarTab() {
    tabla.innerHTML="";
	for(var x = 0; x < jsonPersona.length; x++) {
	  filas(jsonPersona[x]);
	}
    
    function filas(item) {
	var fila = document.createElement("tr");
	var celdaRut = document.createElement("td");
	var celdaNombre = document.createElement("td");
	var celdaComuna = document.createElement("td");
	
	celdaRut.innerHTML = item.rut;
	celdaNombre.innerHTML = item.nombre;
	celdaComuna.innerHTML = item.comuna;
	
	fila.appendChild(celdaRut);
	fila.appendChild(celdaNombre);
	fila.appendChild(celdaComuna);
	
    $("#tabPersona").appendTo(fila);
    }
}