export default class Packaging{
    constructor(){
        this.isOpen = false;
        this.toy = null;
    }

    open(){
        this.isOpen = true;
    }

    insert(Toy){
        if(this.isOpen != true){
            this.open()
        }
        this.toy = Toy
    }
}