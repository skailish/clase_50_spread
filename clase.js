const frutas = ["🍎", "🥝", "🍐", "🍓", "🍒"]

// nos permite acceder a todos los elementos que contiene un array o un objeto
// sintax sugar: podemos escribirlo de otra manera, pero está forma nos facilita la vida
// SINTAXIS del spread operator

console.log(...frutas) // TRES PUNTOS más el objeto que quiero "esparcir" // devuelve 🍎🥝🍐🍓🍒 ELEMENTOS SUELTOS

const frutasConUva = [...frutas, '🍇']
frutasConUva //["🍎", "🥝", "🍐", "🍓", "🍒", "🍇"]
frutas // ["🍎", "🥝", "🍐", "🍓", "🍒"] NO LA MUTA

// sería exactamente lo mismo que hacer esto:
const fruitsWithGrape = frutas.slice();
fruitsWithGrape = fruitsWithGrape.push("🍇");

//// también se pueden "esparcir" OBJETOS
// la diferencia es que "esparce" ambos key:value

const persona = {
    nombre: "Ada",
    apellido: "Lovelace",
}

const clon = { ...persona } // NO QUEDA EL MISMO OBJETO, tienen los mismos valores... es decir clon !== persona
// si ponemos
const ada = persona; // ahora sí ada === persona, y si modifico ada, se modifica persona... porque ambas apuntan a un mismo objeto

const infoExtra = {
    email: "ada@gmail.com",
    nacionalidad: inglesa,
}

const adaLovelace = { ...persona, ...infoExtra } // ahora adaLovelace es un objeto con todos los keys de ambos

const adaProfesion = {
    ...adaLovelace,
    profesion: 'programadora',
}
// ahora contiene todo lo de adaLovelace, pero tambiénun nuevo key con profesión

