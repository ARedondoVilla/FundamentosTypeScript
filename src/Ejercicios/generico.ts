/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {
    return argumento
}

let soyString = queTipoSoy('Hola mundo'); //establece que es string
let soyNumero = queTipoSoy(100) //establece que es number
let soyArreglo = queTipoSoy([1,2,3,4]) //establece que es array[]

let soyExplicito = queTipoSoy<number>(100) //establece el valor como number