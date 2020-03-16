describe("getMoves()", () => {
    it("Debería retornar un array cuando se le pasa por parámetro un pókemon", () => {
        const pikachu = getPikachu();
        expect(getMoves(pikachu)).to.be.an('array');
    })
    it("Debería retornar los movimientos del pokemon que le pase a la función", () => {
        const bulbasur = getBulbasaur();
        expect(getMoves(bulbasur)).to.eql(['Growl', 'Tackle', 'Vine Whip', 'Razor Leaf']);
    })
})


describe("getPrimaryAbility()", () => {
    it("Debería retornar un string cuando se le pasa por parámetro un pókemon", () => {
        const pikachu = getPikachu();
        expect(getPrimaryAbility(pikachu)).to.be.a('string');
    })
    it("Debería retornar la habilidad principal cuando se le pasa por parámetro un pókemon", () => {
        const pikachu = getPikachu();
        expect(getPrimaryAbility(pikachu)).to.equal("Static");
    })

})

describe("getWeaknesses()", () => {
    it("Debería retornar un array", () => {
        const squirtle = getSquirtle();
        expect(getWeaknesses(squirtle)).to.be.an('array');
    })

    it("Debería retornar los tipos contra los que es débil un pókemon", () => {
        const pikachu = getPikachu();
        expect(getWeaknesses(pikachu)).to.eql(["ground"]);
    })

})

describe("getResistances()", () => {
    it("Debería retornar un array", () => {
        const charmander = getCharmander();
        expect(getResistances(charmander)).to.be.an('array');
    })

    it("Debería retornar los tipos contra los que es resistente un pókemon", () => {
        const pikachu = getPikachu();
        expect(getResistances(pikachu)).to.eql(['electric', 'flying', 'water', 'steel']);
    })

})

describe("resistsType()", () => {
    it("Debería retornar un booleano", () => {
        const charmander = getCharmander();
        expect(resistsType(charmander, "fire")).to.be.a('boolean');
    })

    it("Debería retornar true si el pokemon es resistente al tipo ingresado", () => {
        const pikachu = getPikachu();
        expect(resistsType(pikachu, "fire")).to.be.false;
    })

})

describe("resistsMove()", () => {
    it("Debería retornar un booleano", () => {
        const pikachu = getPikachu();
        expect(resistsMove(pikachu, { name: "Rain dance", type: "water" })).to.be.a('boolean');
    })

    it("Debería retornar false si el pokemon no es resistente al tipo ingresado", () => {
        const charmander = getCharmander();
        const move = {
            name: "Tackle",
            type: "water"
        }
        expect(resistsMove(charmander, move)).to.be.false;
    })

    it("Debería retornar true si el pokemon es resistente al tipo ingresado", () => {
        const squirtle = getSquirtle();
        const move = {
            name: "Growl",
            type: "fire"
        }
        expect(resistsMove(squirtle, move)).to.be.true;
    })

})

describe("isWeakAgainst()", () => {
    it("Debería retornar un booleano", () => {
        const pikachu = getPikachu();
        const charmander = getCharmander();
        expect(isWeakAgainst(pikachu, charmander)).to.be.a('boolean');
    })

    it("Debería retornar true si el type del attacker se encuentra en las weakness", () => {
        const pikachu = getPikachu();
        const squirtle = getSquirtle();
        expect(isWeakAgainst(pikachu, squirtle)).to.be.true;
    })

})

describe("isStrongAgainst()", () => {
    it("Debería retornar un booleano", () => {
        const pikachu = getPikachu();
        const charmander = getCharmander();
        expect(isStrongAgainst(pikachu, charmander)).to.be.a('boolean');
    })

    it("Debería retornar true si el type del attacker se encuentra en las resistances", () => {
        const pikachu = getPikachu();
        const bulbasur = getBulbasaur();
        expect(isStrongAgainst(pikachu, bulbasur)).to.be.true;
    })

})

describe("addAbility()", () => {
    it("Debería retornar un objeto", () => {
        const charmander = getCharmander();
        expect(addAbility(charmander, { typeAbility: "Fly away" })).to.be.an("object");
    })

    it("Debería agregarle las habilidades dadas al pokemon dado", () => {
        const pikachu = getPikachu();
        const newAbility = { typeAbility: "Jump" };
        const pikachuUpdated = addAbility(pikachu, newAbility)
        expect(pikachuUpdated).to.eql({
            name: 'Pikachu',
            type: 'electric',
            ability: {
                primary: 'Static',
                hidden: 'Lightning rod',
                secondary: 'Jump'
            },
            stats: {
                hp: 35,
                attack: 55,
                deffense: 40,
                speed: 90
            },
            moves: ['Quick Attack', 'Volt Tackle', 'Iron Tail', 'Thunderbolt'],
            modifiers: {
                weakness: ['ground'],
                resistances: ['electric', 'flying', 'water', 'steel']
            }
        })
    })
})


describe("addMove()", () => {
    it("Debería retornar un objeto", () => {
        const charmander = getCharmander();
        expect(addMove(charmander, "Fly away")).to.be.an("object");
    })

    it("Debería agregarle el movimiento dado al pokemon dado", () => {
        const pikachu = getPikachu();
        const newMove = 'Jump Attack';
        const pikachuUpdated = addMove(pikachu, newMove)
        expect(pikachuUpdated).to.eql({
            name: 'Pikachu',
            type: 'electric',
            ability: {
                primary: 'Static',
                hidden: 'Lightning rod',
            },
            stats: {
                hp: 35,
                attack: 55,
                deffense: 40,
                speed: 90
            },
            moves: ['Quick Attack', 'Volt Tackle', 'Iron Tail', 'Thunderbolt', 'Jump Attack'],
            modifiers: {
                weakness: ['ground'],
                resistances: ['electric', 'flying', 'water', 'steel']
            }
        })
    })
})

describe("removeMove()", () => {
    it("Debería retornar un objeto", () => {
        const bulbasaur = getBulbasaur();
        expect(removeMove(bulbasaur, "Tackle")).to.be.an("object");
    })

    it("Debería quitarle el movimiento dado al pokemon dado", () => {
        const pikachu = getPikachu();
        const moveToRemove = 'Quick Attack';
        const pikachuUpdated = removeMove(pikachu, moveToRemove)
        expect(pikachuUpdated).to.eql({
            name: "Pikachu",
            type: "electric",
            ability: { primary: "Static", hidden: "Lightning rod" },
            stats: { hp: 35, attack: 55, deffense: 40, speed: 90 },
            moves: ["Volt Tackle", "Iron Tail", "Thunderbolt"],
            modifiers: {
                weakness: ["ground"],
                resistances: ["electric", "flying", "water", "steel"]
            }
        })
    })
})

describe("getAttackModifier()", () => {
    it("Debería retornar un número", () => {
        const bulbasaur = getBulbasaur();
        const pikachu = getPikachu();
        expect(getAttackModifier(bulbasaur, pikachu)).to.be.finite;
    })

    it("Debería retornar 0.5 si el pokemon atacado es resistente al ataque", () => {
        const bulbasaur = getBulbasaur();
        const charmander = getCharmander();
        expect(getAttackModifier(bulbasaur, charmander)).to.equal(0.5);
    })

})


describe("getAttackLog()", () => {
    it("Debería retornar un string", () => {
        expect(getAttackLog("Pikachu", "Charmander", "Volt Tackle", 22, "normal")).to.be.a("string")
    })

    it("Debería retornar el attack log", () => {
        expect(getAttackLog("Pikachu", "Charmander", "Volt Tackle", 22, "normal")).to.be.equal("Pikachu used Volt Tackle! Charmander lost 22 HP!");
    })


})

describe("calculateDamage()", () => {
    it("Debería devolver un número", () => {
        const pikachu = getPikachu();
        const charmander = getCharmander();
        const damage = calculateDamage(pikachu, charmander)
        expect(damage).to.be.finite
    })

    it("Debería calcular el daño del ataque", () => {
        const bulbasaur = getBulbasaur();
        const charmander = getCharmander();
        const damage = calculateDamage(bulbasaur, charmander)
        expect(damage).to.equal(14)
    })

})