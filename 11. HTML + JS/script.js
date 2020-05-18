/* function saludar(nombre) {
    alert('Hola ' + nombre);
}

console.log(document);

const cabecera1 = document.getElementById("titulo").innerHTML;

console.log(cabecera1);


/* Objeto 

const mascota1 = { nombre: 'Rayas', edad: 14, especie: 'gato' };
const mascota2 = { nombre: 'Paloma', edad: 15, especie: 'perro' };

const persona = {
    nombre: 'Mali',
    edad: 21,
    mascotaPreferida: mascota2,
    mascotas: [mascota1, mascota2],
}


/* Acceder a los elementos
console.log(persona.mascotaPreferida);
console.log(persona.nombre);

persona.nombre = 'Malinali';

console.log(persona.nombre);


console.log(persona.edad);

console.log(persona.mascotas);
console.log(persona.mascotas[1]);
console.log(persona.mascotas[1].especie);

console.log(persona);

Cierre de paréntesis 

 */
function ganar() {
    const jugador1 = document.getElementById('jugador1').value;
    const jugador2 = document.getElementById('jugador2').value;
    // codigo que elije al ganador
    console.log(jugador1);
    console.log(jugador2);
    document.getElementById('resultado').innerHTML ='Ganó jugador 2';
}