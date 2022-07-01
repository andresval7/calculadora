const boton1 =document.getElementById('btn1');
const boton2 =document.getElementById('btn2');
const boton3 =document.getElementById('btn3');
const boton4 =document.getElementById('btn4');
const boton5 =document.getElementById('btn5');
const boton6 =document.getElementById('btn6');
const boton7 =document.getElementById('btn7');
const boton8 =document.getElementById('btn8');
const boton9 =document.getElementById('btn9');
const boton0 =document.getElementById('btn0');
const botonplus =document.getElementById('btnplus');
const botonminus =document.getElementById('btnminus');
const botonmult =document.getElementById('btnmult');
const botondiv =document.getElementById('btndiv');
const botoncls =document.getElementById('btncls');
const botoneqls =document.getElementById('btneqls');
const showText = document.getElementById('input');

let numero1=0;
let numero2=0;
let contadorDigitos=0;
let esNumero1=true;
let esNumero2=false;
let operacionRealizada=false;
let haciendoOperacion=false;

boton1.addEventListener("click",mostrar1);
boton2.addEventListener('click',mostrar2);
boton3.addEventListener('click',mostrar3);
boton4.addEventListener('click',mostrar4);
boton5.addEventListener('click',mostrar5);
boton6.addEventListener('click',mostrar6);
boton7.addEventListener('click',mostrar7);
boton8.addEventListener('click',mostrar8);
boton9.addEventListener('click',mostrar9);
boton0.addEventListener('click',mostrar0);
botonplus.addEventListener('click',sumar);
botonminus.addEventListener('click',restar);
botonmult.addEventListener('click',multiplicar);
botoncls.addEventListener('click',limpiar);
botondiv.addEventListener('click',dividir);
botoneqls.addEventListener('click',mostrarResultado);

function mostrar1(){
    if (esNumero1)
    {
        numero1= (numero1 * 10)+1;
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10)+1;
        showText.value = numero2;
        console.log(numero2);
    }
    
    
}

function mostrar2(){
    if (esNumero1)
    {
        numero1= (numero1 * 10)+2;
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10)+2;
        showText.value = numero2;
        console.log(numero2);
    }
    
}

function mostrar3(){
    if (esNumero1)
    {
        numero1= (numero1 * 10)+3;
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10)+3;
        showText.value = numero2;
        console.log(numero2);
    }
    
}

function mostrar4(){
    if (esNumero1)
    {
        numero1= (numero1 * 10)+4;
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10)+4;
        showText.value = numero2;
        console.log(numero2);
    }
}

function mostrar5(){
    if (esNumero1)
    {
        numero1= (numero1 * 10)+5;
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10)+5;
        showText.value = numero2;
        console.log(numero2);
    }
}

function mostrar6(){
    if (esNumero1)
    {
        numero1= (numero1 * 10)+6;
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10)+6;
        showText.value = numero2;
        console.log(numero2);
    }
}

function mostrar7(){
    if (esNumero1)
    {
        numero1= (numero1 * 10)+7;
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10)+7;
        showText.value = numero2;
        console.log(numero2);
    }
}

function mostrar8(){
    if (esNumero1)
    {
        numero1= (numero1 * 10)+8;
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10)+8;
        showText.value = numero2;
        console.log(numero2);
    }
}

function mostrar9(){
    if (esNumero1)
    {
        numero1= (numero1 * 10)+9;
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10)+9;
        showText.value = numero2;
        console.log(numero2);
    }
}

function mostrar0(){
    if (esNumero1)
    {
        numero1= (numero1 * 10);
        showText.value = numero1;
        console.log(numero1)
    }
    else if (esNumero2)
    {
        numero2 = (numero2 * 10);
        showText.value = numero2;
        console.log(numero2);
    }
}

function limpiar(){
    if(esNumero1 && !operacionRealizada)
    {
        numero1=0;
        contadorDigitos=0;
        showText.value = numero1;
    }
    //condicion para limpiar la pantalla si el numero a corregir es el 2do numero
    //sin haberse realizado alguna operacion
    else if(esNumero2 && !operacionRealizada) 
    {
        numero2=0;
        contadorDigitos=0;
        showText.value= numero2;
    }
    else if(operacionRealizada){
        numero1=0;
        numero2=0;
        resultado=0;
        esNumero1=true;
        esNumero2=false;
        showText.value= numero1;
        operacionRealizada=false;
    }
    
    
}

function sumar (){
    if(haciendoOperacion)
    {
        resultado = resultado + numero2;
        showText.value=resultado;
        numero1=resultado;
        numero2=0;
        haciendoOperacion=false;
        operacionRealizada = true;
    }
    else
    {
        resultado = numero1;
        haciendoOperacion=true;
    }
    esNumero1=false;
    esNumero2=true;
    operacion=1;
    //haciendoOperacion=true;

}

function restar(){
    if(haciendoOperacion)
    {
        resultado = resultado - numero2;
        showText.value=resultado;
        numero1=resultado;
        numero2=0;
        haciendoOperacion=false;
        operacionRealizada = true;
    }
    else
    {
        resultado = numero1;
        haciendoOperacion=true;
    }
        
    esNumero1=false;
    esNumero2=true;
    operacion=2;
    
}

function multiplicar(){
    if(haciendoOperacion)
    {
        resultado = resultado * numero2;
        showText.value=resultado;
        numero1=resultado;
        numero2=0;
    }
    else
    {
        resultado = numero1;
        haciendoOperacion=true;
    }
        
    esNumero1=false;
    esNumero2=true;
    operacion=3;
    
}

function dividir(){
    if(haciendoOperacion)
    {
        resultado = resultado / numero2;
        showText.value=resultado;
        numero1=resultado;
        numero2=0;
        haciendoOperacion=false;
    }
    else
    {
        resultado = numero1;
        haciendoOperacion=true;
    }
        
    esNumero1=false;
    esNumero2=true;
    operacion=4;
}

function mostrarResultado(){
    if(operacion===1)
        resultado = resultado + numero2;
    else if(operacion===2)
        resultado = resultado - numero2;
    else if(operacion===3)
        resultado = resultado * numero2;
    else if(operacion===4)
        resultado = resultado / numero2;

    showText.value=resultado;
    numero1=resultado;
    numero2=0;
    operacionRealizada = true;
}