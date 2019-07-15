 import Figurine from "./figurine";

export const DBHeroes = {
    SANGOKU: 'SANGOKU',
    BEJITA: 'BEJITA',
    BEERUS: 'BEERUS',
    KAMESENNIN: 'KAMESENNIN'
}

export class DragonBall extends Figurine{
    #_character = DBHeroes
    constructor(character){
        super()
        this.#_character = character
        this.pop();
    }

    pop (){
        console.log(`${this.#_character} is singing -->
                    CHA-LA HEAD CHA-LA
                    Nani ga okite mo kibun wa heno-heno kappa
                    CHA-LA HEAD CHA-LA
                    Mune ga pachi-pachi suru hodo
                    Sawagu Genki-Dama --Sparking !`);
        
    }

    isMoved(){
        console.log(`Kamé Hamé Ha!`);
    }
}
