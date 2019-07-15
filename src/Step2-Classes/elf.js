import {Packaging} from "./packaging";
import Box from "./box";

export default class Elf{
    constructor(nickname){
        this.nickname = nickname
    }

    set nickname(name){
        return this.nickname = name;
    }
    
    get nickname(){
        return this.nickname;
    }

    pack(wraping , item){
        if(wraping.toy != null ){
            console.log(`Sorry this package already filled`);
        }
        else if (wraping.isOpen == false || wraping instanceof Box){
            console.log(`Sorry this package is not open`);
        }
        else{
            insert(item);
            console.log(`Yeaaaah! Just packing the toy ~~ X ~~`);
        }
    }

    unpack(item){
        
    }
}