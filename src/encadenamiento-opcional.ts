/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Lorenzo', 'Isabel']
}

function imprimeHijos( pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    // el ? significa que si existe la clave hijos devuelva la longitud y si es undefined que devuelva 0
    // Se lee undefined o 0 => Gana el cero y se muestra 0 en vez de undefined

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1)