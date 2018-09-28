var txtValor = document.getElementById('txtValor');
var txtIva = document.getElementById('txtIva');
var lblValorIva = document.getElementById('lblValorIva');
var lblSubTotal = document.getElementById('lblSubTotal');
var lblTotal = document.getElementById('lblTotal');

/**
 * @description: Funcion de calcular total iva.
 */
function calcularTotalIva(){
    var valorIngresado;
    var porcentajeIva;
    var valorIvaGenerado;

    valorIngresado = txtValor.value;
    porcentajeIva = txtIva.value;

    if(valorIngresado === ''){
        alert('Debe ingresar un valor.');
        txtValor.focus();
        return;
    }else if (!/^[0-9]+$/g.test(valorIngresado)) {
        alert('Debe ingresar un valor numerico.');
        txtValor.focus();
        return;
    }

    if(porcentajeIva === ''){
        alert('Debe ingresar un % de IVA.');
        txtIva.focus();
        return;
    }else if (!/^[0-9]+$/g.test(porcentajeIva)) {
        alert('El IVA es un valor numerico.');
        txtIva.focus();
        return;
    }

    valorIvaGenerado = calcularValorIva(valorIngresado, porcentajeIva);

    lblSubTotal.innerHTML = valorIngresado;

    lblTotal.innerHTML = parseInt(valorIngresado) + parseInt(valorIvaGenerado);
}

/**
 * Función que se en cargar de calcular el valor del IVA
 * @param {*} valor 
 * @param {*} iva 
 */
function calcularValorIva(valor, iva){
    var valorIvaCalulado;

    valorIvaCalulado = parseInt(valor * (iva / 100));

    lblValorIva.innerHTML = valorIvaCalulado;

    return valorIvaCalulado;
}