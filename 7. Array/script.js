// Indicar que es un arreglo.

// elemento que puede modificarse
// constante es una elemento estático

// conjunto de elementos ordenados por indices

var arreglo = [5,4,3,2,1,0];

var arregloNombres = ['Mali', 'Lili', 'Mari', 'Luis'];

var posibilidades = ['piedra', 'papel', 'tijera'];


// Lo índices nos permitir acceder a elementos dentro del arreglo
// console.log(arregloNombres[2], arregloNombres[3]);

// console.log(posibilidades[2]);

// uso del operador . para acceder a un método del objeto Array
console.log(arregloNombres);

arregloNombres.push('Pablo');

console.log(arregloNombres);
// ["Mali", "Lili", "Mari", "Luis", "Pablo"]

// primer parámetros el índice desde donde voy a borrar.
// segundo parámetros, es la cantidad de elementos a borrar.
arregloNombres.splice(0,1);

console.log(arregloNombres);

// arregloNombres.sort();

arregloNombres.reverse();

console.log(arregloNombres);

console.log(arreglo);
arreglo.sort();

console.log(arreglo.concat(arregloNombres));






for(var i = 0; i < numeroAnimales; i++) {
    console.log(animales[i]);
}

/* 
console.log(animales[0]);
console.log(animales[1]);
console.log(animales[2]);
console.log(animales[3]);
*/
