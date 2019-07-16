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

    pack(wrapping , item){
        if(wrapping.toy != null || wrapping.toy != undefined){
            console.log(`Sorry this package already filled`);
        }
        else if (wrapping.isOpen || wrapping instanceof Box){
          wrapping.insert(item);
          console.log(`Yeaaaah! Just packing the toy ~~ ${item.type} ~~`);
        }
        else{
          console.log(`Sorry this package is not open`);
        }
    }

    unpack(wrapping){
      console.log(wrapping);
      
      if(wrapping.isOpen || !wrapping.toy){
        console.log(`Sorry this package is already empty`);
      }
      else{
        var gift = wrapping.type;
        console.log(`Just unpacking the toy ~~ ${gift} ~~`);
        wrapping.type = null;
        return gift;
      }
    }

    take(){}

    put(){}

    look(){}
}
