/*
    ===== Código de TypeScript =====
*/

import { calcularISV, Producto } from "./desesctructuracion-avanzada";


const carritocompra: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 149
    },
    {
        desc: 'telefono 2',
        precio: 99
    }
]

const [total, isv] = calcularISV(carritocompra);

console.log('Total: ', total);
console.log('ISV: ', isv);

// SE EJECUTA LOS CONSOLE.LOG DEL OTRO ARCHIVO PORQUE LO LEE ENTERO, Y AL LEERLO LO MUESTRA EN LA CONSOLA.