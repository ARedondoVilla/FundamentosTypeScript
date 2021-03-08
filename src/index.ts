/*
    ===== Código de TypeScript =====
*/

// class Heroe {
//     private alterEgo: string; // SOLO VISIBLE DENTRO DE ESTA CLASE
//     public edad: number; // DESDE FUERA SE PUEDE VER ESTA PROPIEDAD
//     static nombreReal: number; // SE PUEDE ACCEDER SIN CREAR UNA INSTANCIA A LA CLASE
// } 

class Heroe {
    alterEgo: string; 
    edad: number; 
    nombreReal: number; 
    imprimirNombre() {
        return this.alterEgo + ', ' + this.nombreReal;
    }
} 



const ironman = new Heroe();

    


console.log(ironman);
