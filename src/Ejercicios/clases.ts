/*
    ===== Código de TypeScript =====
*/

// class Heroe {
//     private alterEgo: string; // SOLO VISIBLE DENTRO DE ESTA CLASE
//     public edad: number; // DESDE FUERA SE PUEDE VER ESTA PROPIEDAD
//     static nombreReal: number; // SE PUEDE ACCEDER SIN CREAR UNA INSTANCIA A LA CLASE
// } 

class PersonaNormal {
    constructor(
        public nombre: string,
        public address: string,
    ){}
}

class Heroe extends PersonaNormal{

    constructor(
        public alterEgo: string, 
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'NY');
        // asigna los valores de argumento de la clase PersonaNormal a Heroe
    }
    
} 

const ironman = new Heroe('Iron Man', 45, 'Tony');

console.log(ironman);
