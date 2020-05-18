/* 
if (true) {
    console.log('Estoy en el if que es verdadero')
}
if (false) {
    console.log('Estoy en el if que es falso')
} */

/* var cantidadDeGatos = prompt('Cantidad de gatos');
var cantidadDePerros = prompt('Cantidad de perros');

console.log('Perros:', cantidadDePerros);
console.log('Gatos: ', cantidadDeGatos);

if (cantidadDeGatos > cantidadDePerros) {
    console.log('Más gatos que perros')
}

if (cantidadDeGatos < cantidadDePerros) {
    console.log('Más perros que gatos')
}

/* = Asignar
 == Comparando el valor aunque tengan diferente tipo de dato.
 === Comparar el valor que sean iguales y con el mismo tipo de dato.

if ( cantidadDeGatos === cantidadDePerros ) {
    // codigo que se ejecuta en caso de que la condición verdadera, cierta
    console.log('Misma cantidad de gatos que de perros')
} else {
    console.log('Diferente cantidad de gatos que de perros')
    // codigo que se ejecuta en caso de que la condición falsa
} */



// Tipo number
var edad = parseInt(prompt('Ingresa tu edad'));
// var edad = prompt('Ingresa tu edad');
console.log(typeof edad);
// Sólo entra a la fiesta si tiene más de 18 años.

if (edad > 18) {
    console.log('SI puedes entrar a la fiesta');
    if (edad > 50) {
        console.log('Te tenemos una promoción este mes')
    }
} else if(edad === 18) {
    console.log('Si puedes entrar pero por poquito y te quedas fuera');
} else {
    console.log('Permiso denegado.');
}

var nombre = 'Mali ';
var apellido = 'Becerril';
var nombreCompleto =  nombre + apellido;
nombre = nombre + apellido;
nombre += apellido;

edad++;
edad += 12;

// edad = -12;
console.log(edad < 18);
console.log(edad > 0);

if (edad > 18 || edad === 18 ){
    console.log('Pasa a la fiesta.');
} else if (edad < 18 && edad > 0 ) {
    alert('este es un alert', edad < 18 && edad > 0, '.' );
    console.log('Permiso denegado.');
} else {
    console.log('Tu edad es inválida.')
}

/*

Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert, quién fue el jugador ganador.

*/