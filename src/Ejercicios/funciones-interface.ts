/*
    ===== Código de TypeScript =====
*/


function sumar( a: number, b: number): number {
    return (a + b);
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, base: number, otroNumero?: number) {
    return numero * base
}


// const resultado = sumar(2, 15);
// const resultado2 = multiplicar(2, 15);


// console.log(resultado2, typeof(resultado));

interface PersonajeLOR {
    nombre: string;
    hp: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curacion: number): void {    
    personaje.hp += curacion;
    

    console.log(personaje);
    
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Iron Man",
    hp: 45,
    mostrarHp() {
        console.log('Punto de vida', this.hp);
        
    }
}

curar(nuevoPersonaje, 50)

nuevoPersonaje.mostrarHp()