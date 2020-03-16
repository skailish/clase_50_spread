
// getMoves()
// Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos

const getMoves = pokemon => {
    const moves = [...pokemon.moves]
    return moves
}

// getPrimaryAbility()
// Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria

const getPrimaryAbility = ({ ability: { primary } }) => {
    return primary
}

// getWeaknesses()
// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const getWeaknesses = ({ modifiers: { weakness } }) => {
    return weakness
}

// getResistances()
// Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil

const getResistances = ({ modifiers: { resistances } }) => {
    return resistances
}

// resistsType()
// Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo

const resistsType = ({ modifiers: { resistances } }, tipo) => {

    return resistances.includes(tipo)
}

// resistsMove()
// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque.El movimiento es un objeto que contiene nombre del mismo y tipo, p.ej.: { name: "Rain dance", type: "water" }
const resistsMove = ({ modifiers: { resistances } }, { type }) => {
    return resistances.includes(type);
}

// isWeakAgainst()
// Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon(p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es débil frente al tipo de pokémon que lo ataca

const isWeakAgainst = ({ type }, { modifiers: { weakness } }) => {

    return weakness.includes(type)

}

// isStrongAgainst()
// Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon(p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es resistente al tipo de pokémon que lo ataca

const isStrongAgainst = ({ type }, { modifiers: { resistances } }) => {

    return resistances.includes(type)

}


// addAbility()
// Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada

const addAbility = (pokemon, { typeAbility }) => {
    const { name, type, stats, moves, modifiers } = pokemon;
    let newAbility = { ...pokemon.ability, secondary: typeAbility };
    const pokemonUpdated = {

        name, type, ability: newAbility, stats, moves, modifiers
    };

    return pokemonUpdated
}


// addMove()
// Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva el pokémon con el movimiento agregado

const addMove = (pokemon, newMove) => {
    const { name, type, ability, stats, modifiers } = pokemon;
    let movesUpdated = [...pokemon.moves, newMove];
    const pokemonUpdated = {

        name, type, ability, stats, moves: movesUpdated, modifiers
    };

    return pokemonUpdated
}



// removeMove()
// Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva el pokémon con el movimiento agregado

const removeMove = (pokemon, moveToRemove) => {
    const { name, type, ability, stats, modifiers } = pokemon;
    const { moves: actualMoves } = pokemon;
    const indexToRemove = actualMoves.indexOf(moveToRemove);
    let movesUpdated = [...actualMoves];
    if (indexToRemove > 0 && indexToRemove < (actualMoves.length - 1)) {
        movesUpdated = [...actualMoves.slice(0, indexToRemove), ...actualMoves.slice(indexToRemove + 1)];

    } else if (indexToRemove === 0) {
        movesUpdated = [...actualMoves.slice(indexToRemove + 1)];

    } else if (indexToRemove === (actualMoves.length - 1)) {
        movesUpdated = [...actualMoves.slice(0, indexToRemove)];

    }
    const pokemonUpdated = {
        name, type, ability, stats, moves: movesUpdated, modifiers
    };

    return pokemonUpdated
}


// getAttackModifier()
// Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
// 2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
// 0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
// 1, si no es débil ni resistente

const getAttackModifier = (attacker, attacked) => {

    const { type } = attacker;
    const { modifiers } = attacked;

    const { weakness, resistances } = modifiers;
    let attackModifier = 0;

    if (resistances.includes(type)) {
        attackModifier = 0.5;

    } else if (weakness.includes(type)) {
        attackModifier = 2;

    } else {
        attackModifier = 1;

    }

    return attackModifier
}



// getAttackLog()
// Crear una función getAttackLog, que tome como argumento un objeto con las siguientes propiedades:
// {
//     attacker: "Squirtle",
//     attacked: "Pikachu",
//     move: "Water Gun",
//     damage: 12,
//     modifier: "weak" // otros valores: "resistant", "normal"
// }
// Y que devuelve un string con la siguiente plantilla:

// `${attacker} used ${move}! ${attacked} lost ${damage} HP!`
// Por ejemplo:

// "Squirtle used Water Gun! Pikachu lost 12 HP!"
// Si el pokémon es débil contra el tipo de su atacante, se debe agregar It's super effective!, si es resistente, se debe agregar It's not very effective!, por ejemplo:

// "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
const getAttackLog = (attacker, attacked, move, damage, modifier) => {


    let attackLog = `${attacker} used ${move}! ${attacked} lost ${damage} HP!`

    if (modifier === "weak") {

        attacked += " It's super effective!"

    } else if (modifier === "resistant") {

        attacked += " It's not very effective!"

    }

    return attackLog
}


// calculateDamage()
// Crear una función calculateDamage que tome como un argumento un objeto con la siguientes propiedades
// attack es el ataque del pokémon que ataca
// defense es la defensa del pokémon siendo atacado
// modifier el modificador del daño según el tipo del atacante y del atacado y devuelva el daño ocasionado. El daño se calcula con la siguiente fórmula:
// 0.5 * attack * (attack / defense) * modifier

const calculateDamage = (attacker, attacked) => {
    const { stats: { attack } } = attacker;

    const { stats: { deffense } } = attacked;

    const modifier = getAttackModifier(attacker, attacked)

    const damage = Math.round(0.5 * attack * (attack / deffense) * modifier);

    return damage

}



// battle()
// Crear un función battle que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
// Por ronda, cada pokémon ataca al contrario
// Comienza atacando el pokémon con más velocidad (speed)
// La batalla termina cuando la vida (hp, hit points, puntos de golpe) de un pokémon llega a 0 o menos
// El daño se obtiene con la función calculateDamage y se resta a la vida del pokémon atacado
// Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función getAttackLog
// El movimiento se elige de forma aleatoria en cada ataque
// El objeto que debe devolver como resultado debe seguir la siguiente estructura:
// {
//     rounds: 1,
//     results: {
//         winner: {
//             name: "Pikachu",
//             hp: 12 // vida restante
//         },
//         losser: {
//             name: "Squirtle",
//             hp: 0
//         }
//     },
//     history: [
//         "Squirtle used Water Gun! Pikachu lost 12 HP!", 
//         "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
//     ]
// }


const battle = (pokemon1, pokemon2) => {
    let gameLog = {
        rounds: 0,
        results: {
            winner: {
                name: "",
                hp: 0 // vida restante
            },
            losser: {
                name: "",
                hp: 0
            }
        },
        history: [
        ]
    }

    // Por ronda, cada pokémon ataca al contrario
    // Comienza atacando el pokémon con más velocidad (speed)
    let attacker = pokemon1.stats.speed > pokemon2.stats.speed ? { ...pokemon1 } : { ...pokemon2 };
    let attacked = pokemon1.stats.speed > pokemon2.stats.speed ? { ...pokemon2 } : { ...pokemon1 }
    let { stats: { hp: pokemon1HP } } = pokemon1;

    let { stats: { hp: pokemon1HP } } = pokemon1;

    while (pokemon1.stats.hp > 0 && pokemon2.stats.hp > 0) { // La batalla termina cuando la vida (hp, hit points, puntos de golpe) de un pokémon llega a 0 o menos



        // El movimiento se elige de forma aleatoria en cada ataque
        const movsAttacker = getMoves(attacker)
        const randomMove = movsAttacker[Math.ceil(Math.random() * ((movsAttacker.length) - 1))]

        // El daño se obtiene con la función calculateDamage y se resta a la vida del pokémon atacado
        const damage = calculateDamage(attacker, attacked);
        // Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función getAttackLog

        gameLog.push(getAttackLog(attacker.name, attacked.name, move, damage, modifier)

    }

}

}