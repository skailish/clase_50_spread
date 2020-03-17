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




// Operaciones inmutables
// Haciendo uso del operador spread, del operador rest y la destructuración, podemos operar de forma inmutable con arrays y objetos, es decir, creando copias con el resultado esperado sin modificar el original.

//     Objetos
// Clonar objetos
// const user = {
//     firstname: 'Ada',
//     lastname: 'Lovelace'
// }

// const newUser = { ...user }

// newUser // { firstname: 'Ada', lastname: 'Lovelace' }
// user === newUser // false
// Clonar objetos anidados
// const user = {
//     fullname: {
//         firstname: 'Ada',
//         lastname: 'Lovelace'
//     }
// }

// const newUser = {
//     fullname: {
//         ...user.fullname
//     }
// }
// Unir objetos
// const personalInfo = {
//     firstname: 'Ada',
//     lastname: 'Lovelace'
// }

// const contactInfo = {
//     email: 'adalovelace@gmail.com'
// }

// const user = {
//     ...personalInfo,
//     ...contactInfo
// }

// user // { firstname: 'Ada', lastname: 'Lovelace', email: 'adalovelace@gmail.com' }
// Agregar propiedades
// const personalInfo = {
//     firstname: 'Ada',
//     lastname: 'Lovelace'
// }

// const user = {
//     ...personalInfo,
//     email: 'adalovelace@gmail.com'
// }

// user // { firstname: 'Ada', lastname: 'Lovelace', email: 'adalovelace@gmail.com' }
// Actualizar propiedades
// const user = {
//     firstname: 'Ada',
//     lastname: 'Lovelace',
//     email: 'adalovelace2002@yahoo.com'
// }

// const updatedUser = {
//     ...oldUser,
//     email: 'adalovelace@gmail.com'
// }

// updatedUser // { firstname: 'Ada', lastname: 'Lovelace', email: 'adalovelace@gmail.com' }
// O también

// const user = {
//     firstname: 'Ada',
//     lastname: 'Lovelace',
//     email: 'adalovelace2002@yahoo.com'
// }

// const newEmail = { email: 'adalovelace@gmail.com' }

// const updatedUser = {
//     ...oldUser,
//     ...newEmail
// }

// updatedUser // { firstname: 'Ada', lastname: 'Lovelace', email: 'adalovelace@gmail.com' }
// Eliminar propiedades
// const data = {
//     firstname: 'Ada',
//     lastname: 'Lovelace',
//     email: 'adalovelace2002@yahoo.com'
// }

// const { email, ...user } = data

// user // { firstname: 'Ada', lastname: 'Lovelace' }
// Array
// Clonar array(slice)
// const original = [0, 1, 2, 3, 4]
// const copy = [...original]

// original // [0, 1, 2, 3, 4]
// copy // [0, 1, 2, 3, 4]
// original === copy // false
// Concatenar arrays(concat)
// const arr1 = [0, 1, 2]
// const arr2 = [3, 4, 5]
// const arr3 = [6, 7, 8]

// const mergedArr = [
//     ...arr1,
//     ...arr2,
//     ...arr3,
// ]

// mergedArr // [0, 1, 2, 3, 4, 5, 6, 7, 8]
// Agregar item(s) al final(push)
// const numbers = [0, 1, 2, 3]

// const updatedNumbers = [...numbers, 4, 5]

// updatedNumbers // [0, 1, 2, 3, 4, 5]
// numbers // [0, 1, 2, 3]
// Agregar item(s) al principio(unshift)
// const numbers = [1, 2, 3]

// const updatedNumbers = [0, ...numbers]

// updatedNumbers // [0, 1, 2, 3]
// numbers // [1, 2, 3]
// Agregar items al principio y final(unshift y push)
// const numbers = [1, 2, 3]

// const updatedNumbers = [0, ...numbers, 4, 5]

// updatedNumbers // [0, 1, 2, 3, 4, 5]
// numbers // [1, 2, 3]
// Agregar item(s) en el medio(splice)
// const numbers = [0, 1, 4, 5]

// const indexToAdd = 2

// const updatedNumbers = [
//     ...numbers.slice(0, indexToAdd),
//     2,
//     3,
//     4,
//     ...numbers.slice(indexToAdd + 1)
// ]

// updatedNumbers // [0, 1, 2, 3, 4, 5]
// numbers // [0, 1, 4, 5]
// O también

// const numbers = [0, 1, 4, 5]

// const indexToAdd = 2
// const numbersToAdd = [2, 3, 4]

// const updatedNumbers = [
//     ...numbers.slice(0, indexToAdd),
//     ...numbersToAdd
//   ...numbers.slice(indexToAdd + 1)
// ]

// updatedNumbers // [0, 1, 2, 3, 4, 5]
// numbers // [0, 1, 4, 5]
// Reemplazar elementos(splice)
// const numbers = [0, 1, 2, 3, 4, 5, 6]
// const indexToReplace = 3
// const itemsToReplace = ["three", "four", "five"]

// const updatedNumbers = [
//     ...numbers.slice(0, indexToReplace),
//     ...itemsToReplace,
//     ...numbers.slice(indexToReplace + itemsToReplace.length),
// ]

// updatedNumbers // [0, 1, 2, "three", "four", "five", 6]
// numbers // [0, 1, 2, 3, 4, 5, 6]
// Remover item(s) al principio(shift)
// const numbers = [0, 1, 2, 3, 4, 5]
// const [first, second, ...others] = numbers

// others // [2, 3, 4, 5]
// numbers // [0, 1, 2, 3, 4, 5]
// Remover item(s) al final(pull)
// const numbers = [0, 1, 2, 3, 4, 5]
// const indexToRemove = 3

// const updatedNumbers = [
//     ...numbers.slice(0, numbers.length - indexToRemove),
// ]

// updatedNumbers // [0, 1, 2]
// numbers // [0, 1, 2, 3, 4, 5]
// Remover item(s) en el medio(splice)
// const numbers = [0, 1, 2, 3, 4]
// const indexToRemove = 3
// const itemsToRemove = 1

// const updatedNumbers = [
//     ...numbers.slice(0, indexToRemove),
//     ...numbers.slice(indexToRemove + itemsToRemove),
// ]

// updatedNumbers // [0, 1, 2, 4]
// numbers // [0, 1, 2, 3, 4]