import { kind } from "./kind";
import { Figther } from "./figther";
import { Squire } from "./squire";
import { Advisor } from "./advisor";

export const characters = [
    new Figther("Jaime Lannister", "Lannister", 66, "knife", "runner"),
    new Advisor("Tyrion", "Lannister", 36),
    new kind("Joffrey Baratheon", "Baratheon", 78, 3),
    new Figther("Daenerys Targaryen", "Targaryen", 55, "hammer", "friendly"),
    new Squire("Bronn", "Black", 47, 9),
];
// (characters[1] as Advisor).boss = characters[0] as Figther;
// console.log(characters);

// // o bien
// (<Advisor>characters[1]).hired(<Figther>characters[0]);
