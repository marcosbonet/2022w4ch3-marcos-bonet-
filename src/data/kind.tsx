import { Character } from "./character";

export class kind extends Character {
    kindomYears: number;
    constructor(
        name: string,
        family: string,
        age: number,
        kindomYears: number
    ) {
        super(name, family, age);
        this.kindomYears = kindomYears;
        this.message = "Vais a morir todos";
        this.lifeStatus = true;
    }
}
