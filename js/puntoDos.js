var txtTexto = document.getElementById('txtTexto');
var lblNumerosCaracteres = document.getElementById('lblNumerosCaracteres');
var lblTextoInvertido = document.getElementById('lblTextoInvertido');
var lblTextoMayuscula = document.getElementById('lblTextoMayuscula');

/**
 * @description: Funcion que se ejecuta desde el evento onClick.
 */
function calcular(){
    var valorTextoCalcular;
    valorTextoCalcular = txtTexto.value;

    if(valorTextoCalcular === ''){
        alert('Debe ingresar un texto.');
        txtTexto.onfocus;
        return;
    }

    numerosDeCaracteres(valorTextoCalcular);
    invertirCadenaDeTexto(valorTextoCalcular);
    convertirCadenaDeTextoEnMayuscula(valorTextoCalcular);
}

/**
 * @description: Calcula el numero de caracteres del texto
 * @param {*} texto 
 */
function numerosDeCaracteres(texto){
    var cantidadCaractares;

    cantidadCaractares = texto.length;
    lblNumerosCaracteres.innerHTML = 'El numero de caracteres del texto es: ' + cantidadCaractares;
}

/**
 * @description: Invierte la cadena de texto
 * @param {*} texto 
 */
function invertirCadenaDeTexto(texto){
    var cantidadCaractares;
    var textoInvertido = '';

    cantidadCaractares = texto.length;

    while (cantidadCaractares >= 0){
        textoInvertido = textoInvertido + texto.charAt(cantidadCaractares);

        cantidadCaractares = cantidadCaractares - 1;
    }

    lblTextoInvertido.innerHTML = 'El texto invertido es: ' + textoInvertido;
}

/**
 * @description: Convierte una cadena de texto en mayusculas
 * @param {*} texto 
 */
function convertirCadenaDeTextoEnMayuscula(texto){
    var textoEnMayuscula;

    textoEnMayuscula = texto.toUpperCase();

    lblTextoMayuscula.innerHTML = 'Texto en mayuscula: ' + textoEnMayuscula;
}