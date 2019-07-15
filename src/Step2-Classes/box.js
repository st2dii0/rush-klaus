import Packaging from "./packaging";

export default class Box extends Packaging{
    constructor(){
        super()
        this.isOpen = false;
    }
}