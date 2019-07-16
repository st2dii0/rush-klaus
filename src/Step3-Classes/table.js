import Furniture from "./furniture";
import Object from "./object";

export default class Table extends Furniture{
    constructor(){
        super()
        this.content = [Object]
    }
}