/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['bash', 'counter', 'healing'];

// Se utilizan las interfaces para darle el tipo de dato a las claves de un objeto
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    pueblo?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing']
}

personaje.pueblo = "Arcos"



console.table(personaje);
