class Character {
    constructor(
        protected name: string,
        protected health: number,
        protected strength: number
    ) {}
    attack() {
        console.log(`${this.name} атакует врага!`);
    }
    heal() {
        this.health += 10;
        console.log(`${this.name} исцеляется на 10 единиц здоровья.`);
    }
}
// Character здесь содержит свойства и методы. Используется принцип инкапсуляция и абстракция.

// Warrior здесь содержит свойства и методы. Используется принцип инкапсуляция и абстракция и наследование.
class Warrior extends Character {
    constructor(
        private armor: number,
        name: string,
        health: number,
        strength: number
    ) {
        super(name, health, strength);
    }

    defend() {
        console.log(
            `${this.name} защищается, используя броню в ${this.armor} единиц!`
        );
    }
}

// Ranger здесь содержит свойства и методы. Используется принцип инкапсуляция и абстракция и наследование и полиморфизм.
class Ranger extends Character {
    constructor(
        private bow: string,
        name: string,
        health: number,
        strength: number
    ) {
        super(name, health, strength);
    }
    attack() {
        console.log(`${this.name} стреляет из лука!`);
    }
    heal() {
        super.heal();
        console.log(`${this.name} также использует травы для исцеления.`);
    }
}
const warrior = new Warrior(100, "Nagibator777", 15, 10);

const ranger = new Ranger("Elven Bow", "Elven Archer", 80, 10);
warrior.attack(); // Nagibator777 атакует врага своим мечом!
ranger.attack(); // Elven Archer стреляет из лука!
