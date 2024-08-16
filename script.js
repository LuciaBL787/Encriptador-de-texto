<<<<<<< HEAD
const textoIngreso = document.querySelector('.texto__ingreso');
const resultadoElemento = document.querySelector('.encriptado__resultado');
const textoDerecha = document.querySelector('.encriptado__texto');
const botonCopiar = document.querySelector('.encriptado__boton');
const imagenFondo = document.querySelector('.encriptado');

resultadoElemento.style.display = "none";
botonCopiar.style.display = "none";

function estilo() {
    imagenFondo.style.backgroundImage = 'none';
    resultadoElemento.style.display = "initial";
    textoDerecha.style.display = "none";
    botonCopiar.style.display = "initial";
    textoIngreso.value = "";
}

function encriptar() {    
    let texto = document.querySelector('.texto__ingreso').value;
    let resultado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    resultadoElemento.value = resultado;
    estilo();
}

function desencriptar() {
    let texto = document.querySelector('.texto__ingreso').value;
    let resultado = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    resultadoElemento.value = resultado;
    estilo();
}

function copiar() {
    let resultado = resultadoElemento.value;
    navigator.clipboard.writeText(resultado);
=======
>>>>>>> 9dfcc254bfbbfc0c8bb9c38f10b0a0ce07425608
}