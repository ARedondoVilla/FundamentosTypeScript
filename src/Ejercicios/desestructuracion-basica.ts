/*
    ===== Código de TypeScript =====
*/

// DESESTRUCTURACION DE OBJETOS

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    year: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 114,
    cancion: 'the end where i began',
    detalles: {
        autor: 'the script',
        year: 2009
    }
}

//desestructuracion de un objeto => extraer los valores de las claves en una variable

const { volumen, segundo, cancion, detalles} = reproductor
// Extrae el valor 90 en la variable volumen

const {autor, year} = detalles

// SE PUEDE UNIR LA LINEA 29 Y 32 EN LA SIGUIENTE:
// const { volumen, segundo, cancion, detalles: {autor, year}} = reproductor

console.log('el volumen actual es: ', volumen);
console.log('el segundo actual es: ', segundo);
console.log('la cancion actual es: ', cancion);
console.log('el autor actual es: ', autor);
console.log('el año es: ', year);


// DESESTRUCTURACION DE ARREGLOS

const vengadores: string [] = ['Iron Man', 'Cap. America', 'SpiderMan']

// ESTA DESESTRUCTURACION FUNCIONA POR EL ORDEN DE LOS ELEMENTOS
const [p1, p2, p3] = vengadores;

console.log('personaje 1: ', p1);
console.log('personaje 2: ', p2);
console.log('personaje 3: ', p3);

