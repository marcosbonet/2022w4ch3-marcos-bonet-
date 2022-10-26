import { kind } from "./kind";

export class Character implements Icharacter {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    isAlive: boolean;
    message: string;
    static serie = "GoT";
    friend: kind | null;

    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = "";
        this.friend = null;
        this.isAlive = true;
    }
    communicate() {
        return this.message;
    }

    death() {
        this.lifeStatus = false;
    }
}
export interface Icharacter {
    name: string;
    age: number;
    family: string;
    isAlive: boolean;
    message: string;
}
