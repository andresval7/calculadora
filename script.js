const boton =document.getElementById('btnEjemplo');
console.log(boton);
boton.addEventListener('click',mostrarMensaje);

function mostrarMensaje(){
    alert('Ok');
}

function mostrarNombre(){
    let nombre = 'Juan';
    if(true)
    {
        let nombre = 'Maria';
        console.log(nombre);
    }
    console.log(nombre);
}

mostrarNombre();

function mostrarMensajeFormato(mensaje)
{
    let nuevoMensaje = mensaje.toString().toUpperCase();
    let resultado = 'Resultado: '+nuevoMensaje;
    console.log( resultado);
}

const sumar = function (num1, num2, callback)
{
    let result = num1+num2;
    callback(result);
}

const concatenar = function (nombre, apellido, callback)
{
    let result = nombre + ' ' + apellido;
    callback(result);
}

sumar(8,9,mostrarMensajeFormato);
concatenar('juAn','pEreZ',mostrarMensajeFormato);