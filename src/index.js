import Pony from "./Step1-Classes/pony";
import { DragonBall, DBHeroes } from "./Step1-Classes/dragonball";
import Elf from "./Step2-Classes/elf";
import Box from "./Step2-Classes/box";
import GiftWrap from "./Step2-Classes/giftWrap";
import Table from "./Step3-Classes/table";
import ConveyorBelt from "./Step3-Classes/conveyorBelt";


console.log(`--- STEP #1 ---`);
 var pony = new Pony();
 var goku = new DragonBall(DBHeroes.BEERUS)

 pony.isMoved();
 goku.isMoved();

console.log(`--- STEP #2 ---`);
 var majdi = new Elf("makiboto");
 var box = new Box();
 majdi.pack(box, goku);
 box.open();
 majdi.pack(box, goku);

 var paper = new GiftWrap();
 majdi.pack(paper, pony);
 majdi.pack(paper, pony);

 var toy = majdi.unpack(paper);
 console.log(toy  === pony);
 var r = majdi.unpack(paper);
 console.log(r == null);

console.log(`--- STEP #3 ---`);
 var table = new Table();
 var conveyor = new ConveyorBelt();

 majdi.put(table, paper);
 majdi.put(table, pony);
 majdi.put(table, box);