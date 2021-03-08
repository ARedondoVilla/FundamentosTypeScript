/*
    ===== Código de TypeScript =====
*/

// DESESTRUCTURACION DE ARGUMENTOS

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'nokia 3310',
    precio: 200
}

const tablet: Producto = {
    desc: 'iPad',
    precio: 349
}

export function calcularISV(productos: Producto[]): [number, number] {
    let total = 0;
    
    // productos.forEach((producto) => {
    //     total += producto.precio
    // })

    productos.forEach(({precio}) => {
        total += precio
    })

    return [total, total * 0.21];
}

const articulos = [telefono, tablet]

const [total, isv] = calcularISV(articulos)

console.log('Total: ', total);
console.log('ISV: ', isv);
