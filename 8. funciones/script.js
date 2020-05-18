/*
ECMA 5

var definir una variable.

ECMA 6 
 
Tamaño fijo.
const nombrevariable;

Sin tamaño fijo.
let nombrevariable;

const nombre = 'Mali'

*/

console.log('Hola desde funciones');

// Definición de la función que no retorna nada
function suma(a, b) {
    console.log('suma', a, b, a + b);
}

// Definición de la función que retorna un valor;
function sumaR(a, b) {
    return a+b;
}


// Ejecución o invocación de la función
const resultadoSuma = suma(5, 9);
const resultadoSumaR = sumaR(5, 9);
console.log('Suma sin retorno de valor', resultadoSuma);
console.log('Suma que retorna un valor', resultadoSumaR);
suma(2, 1);
suma(8, 7);







//definición función
function crearListaAnimales() {
    const animales = [];
    const numeroAnimales = parseInt(prompt('Numero animales:'));
    for(var i = 0; i < numeroAnimales; i++) {
        animales.push(prompt('Animal: '));
    }
    return animales;
};

// ejecuto
const animalesMarinos = crearListaAnimales();
const animalesDeSelva = crearListaAnimales();
const animalesDeCaza = crearListaAnimales();

console.log(animalesMarinos);
console.log(animalesDeSelva);
console.log(animalesDeCaza);