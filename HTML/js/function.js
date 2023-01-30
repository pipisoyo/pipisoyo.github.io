/*
document.getElementById('boton').onclick = function(){
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
}


document.addEventListener('click',function() {
    console.log("hola mundo desde Evenlistener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
}

*/

document.getElementById('boton').addEventListener('click', function() {
    console.log("hola mundo desde Evenlistener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
});

document.getElementById('boton_color_celeste').addEventListener('click',function() {
    console.log("hola mundo desde Evenlistener 2");
    document.body.style.backgroundColor = "#43D1BD"
});

document.getElementById('boton_color_rojo').addEventListener('click',function() {
    console.log("hola mundo desde Evenlistener 3");
    document.body.style.backgroundColor = "#FB0000"
});

document.getElementById('boton_ocultar').addEventListener('click',function(){
    document.getElementById('demo').style.display= 'none';
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "blue";
}