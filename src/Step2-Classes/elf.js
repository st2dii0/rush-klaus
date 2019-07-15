import Box from "./box";

export default class Elf{
    constructor(nickname){
        this.nickname = nickname
    }

    setNickname(name){
        return this.nickname = name;
    }

    getNickname(){
        return this.nickname;
    }

    pack(wraping , item){
        if(wraping.toy != null ){
            console.log(`Sorry this package already filled`);
        }
        else if (wraping.isOpen || wraping instanceof Box){
          wraping.insert(item);
          console.log(`Yeaaaah! Just packing the toy ~~ ${item.type} ~~`);
        }
        else{
          console.log(`Sorry this package is not open`);
        }
    }

    unpack(gift){
      if(gift.isOpen || !gift.toy){
        console.log(`Sorry this package is already empty`);
      }
      else{
        console.log(`Just unpacking the toy ~~ ${gift.type} ~~`);
      }
    }
}
