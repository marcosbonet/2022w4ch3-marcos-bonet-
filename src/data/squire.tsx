import { Character } from "./character";

export class Squire extends Character {
    pelotism: number;

    constructor(name: string, family: string, age: number, pelotism: number) {
        super(name, family, age);
        this.pelotism = pelotism;
        this.message = "Soy un loser";
    }
}
