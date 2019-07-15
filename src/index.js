import Pony from "./Step1-Classes/pony";
import { DragonBall, DBHeroes } from "./Step1-Classes/dragonball";
import Elf from "./Step2-Classes/elf";
import Box from "./Step2-Classes/box";

console.log(`--- STEP #1 ---`);
 var pony = new Pony();
 var goku = new DragonBall(DBHeroes.BEERUS)

 pony.isMoved();
 goku.isMoved();

 console.log(`--- STEP #2 ---`);
 
var tommy = new Elf('Tommy');

tommy.pack(Box, goku);
