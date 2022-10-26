import { Character } from "./character";

export class Figther extends Character {
    weapon: string;
    skill: string;
    constructor(
        name: string,
        family: string,
        age: number,
        weapon: string,
        skill: string
    ) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
        this.message = "Primero pego y luego pregunto";
        this.lifeStatus = true;
    }
}
