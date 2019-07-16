import Furniture from "./furniture";

export default class ConveyorBelt extends Furniture{
    constructor(){
        super()
        this.isBusy = false;
    }
}