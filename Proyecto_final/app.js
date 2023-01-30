//variables
const boton = document.querySelector('#boton');
const foto =document.getElementById('foto');
const nombre =document.getElementById('nombre');
const apellido =document.getElementById('apellido');
const correo =document.getElementById('correo');
const telefono =document.getElementById('telefono');
const fecha_nacimento =document.getElementById('fecha_nacimento');
const edad =document.getElementById('edad');
const lugar_de_nacimento =document.getElementById('lugar_de_nacimento');
const telefono_movil =document.getElementById('telefono_movil');
const localizacion_calle =document.getElementById('localizacion_calle');
const localizacion_numero =document.getElementById('localizacion_numero');
const localizacion_ciudad =document.getElementById('localizacion_ciudad');
const localizacion_provincia =document.getElementById('localizacion_provincia');
const localizacion_pais =document.getElementById('localizacion_pais');
const nacionalidad =document.getElementById('nacionalidad');
var fecha_str;
//funciones
const generarUsuario = async() => {
    try{
        const url='https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];
               
        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;
        correo.textContent = datos.email;
        telefono.textContent = datos.phone;
        
        edad.textContent = datos.dob.age;
        localizacion_calle.textContent = datos.location.street.name;
        localizacion_numero.textContent = datos.location.street.number;
        localizacion_ciudad.textContent = datos.location.city;
        localizacion_provincia.textContent = datos.location.state;
        localizacion_pais.textContent = datos.location.country;
        nacionalidad.textContent = datos.nat;
        telefono_movil.textContent = datos.cell;
        fecha_str=datos.dob.date;
        
    } catch (error){
        console.log(error);
    }
    var fecha; 
   
    fecha = new Date(fecha_str);
    console.log("Cadena: "+fecha.toString() );
    console.log("Cadena UTC: "+fecha.toUTCString() );
    console.log("ISO "+fecha.toISOString() );
    console.log("JSON: "+fecha.toJSON() ); 
    fecha_nacimento.textContent = fecha.toLocaleDateString();
}


function cambiar(i){
    var i;
    switch (i){
        case 1:
            document.getElementById("contenedor3").style.display = "block";
            document.getElementById("contenedor4").style.display = "none";
            document.getElementById("contenedor5").style.display = "none"; 
            document.getElementById("contenedor6").style.display = "none";  
            break;
        case 2:    
            document.getElementById("contenedor3").style.display = "none";
            document.getElementById("contenedor4").style.display = "block";
            document.getElementById("contenedor5").style.display = "none"; 
            document.getElementById("contenedor6").style.display = "none";  
            break; 
        case 3:
            document.getElementById("contenedor3").style.display = "none";
            document.getElementById("contenedor4").style.display = "none";
            document.getElementById("contenedor5").style.display = "block"; 
            document.getElementById("contenedor6").style.display = "none";   
            break;   
        case 4:
            document.getElementById("contenedor3").style.display = "none";
            document.getElementById("contenedor4").style.display = "none";
            document.getElementById("contenedor5").style.display = "none"; 
            document.getElementById("contenedor6").style.display = "block";   
            

    }

                       
}  

    document.getElementById("boton1").onclick = function(){
    var o;
    o = 1; 
    cambiar(o);
    console.log(" o = 1");
}
    document.getElementById("boton2").onclick = function(){
    var o; o = 2; 
        cambiar(o);    
        console.log(" o = 2");    
}
    document.getElementById("boton3").onclick = function(){
    var o; o = 3; 
        cambiar(o);    
        console.log(" o = 3");    
}
    document.getElementById("boton4").onclick = function(){
    var o; o = 4; 
        cambiar(o);    
        console.log(" o = 4");    
}
//boton2.addEventListener('click');
document.addEventListener('DOMContentLoaded', generarUsuario);//al abrir la pagina se genera el usuario