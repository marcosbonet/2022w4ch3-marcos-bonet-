import { Character } from "./character";

export class Advisor extends Character {
    constructor(name: string, family: string, age: number) {
        super(name, family, age);

        this.message = "No sé por qué, pero creo que voy a morir pronto";
    }
}
// hired (boss: Figther| Squire)
