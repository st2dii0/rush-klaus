import Pony from "./Step1-Classes/pony";
import { DragonBall, DBHeroes } from "./Step1-Classes/dragonball";
import Elf from "./Step2-Classes/elf";
import Box from "./Step2-Classes/box";
import GiftWrap from "./Step2-Classes/giftWrap";


console.log(`--- STEP #1 ---`);
 var pony = new Pony();
 var goku = new DragonBall(DBHeroes.BEERUS)

 pony.isMoved();
 goku.isMoved();

 console.log(`--- STEP #2 ---`);

var tommy = new Elf('Tommy');
var box = new Box()
var paper = new GiftWrap();

var gift = tommy.pack(box, goku);
tommy.pack(box, goku);
tommy.pack(paper, pony);
tommy.pack(paper, pony);
tommy.unpack(gift);
