import Toy from "./toy";

export default class Pony extends Toy{
    #_nb = 1
    constructor(id){
        super()
        this.id = this.#_nb
        this.#_nb ++
        this.pop()
    }

    pop(){
        console.log(`Pony ${this.id} is singing -->
                     Dou-double poney, j’fais izi money
                    D’où tu m’connais ? Parle moi en billets violets
                    Dou-double poney, j’fais izi money`);
    }

    isMoved(){
        console.log(`Huuuuuuhu!`);
    }
}