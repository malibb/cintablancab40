console.log('Desde FOR');

// Contador
var i;

// arreglo.push(elementoAagregar);

// for ( darle al contador un valor inicial ; límite del contador por medio de una condicional ; aumento o decremento del contador (i++) )
/*for (i = 0; i < 10; i++) {
    //lineas de codigo que se repetiran en cada iteración
    console.log(i);
}*/
/* var tabla = parseInt(prompt('Introduce el numero del que quieres la tabla de multiplicar'));

for(var contador = 1; contador <= 10; contador++) {
    console.log('' + contador + ' * '+ tabla +'', contador * tabla);
} 
*/


// Acumulador
var nombres = '';

for( i = 1; i <= 5; i++){
    nombres += prompt('Tu nombre') + ' ';
}

//console.log(nombres, typeof nombres);

var arregloNombres = nombres.split(' ');

console.log(arregloNombres);

// Primero nos dice donde empieza
// segundo donde termina y omitirá el último
var corteDeElementosArreglo = arregloNombres.slice(0,3);

console.log(corteDeElementosArreglo);
console.log(arregloNombres);

