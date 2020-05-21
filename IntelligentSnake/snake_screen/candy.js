// import Point from "../point";


export default class Candy extends Point
{
    constructor(x, y, color) {
        super(x ,y ,color);
    }

    static generate(max_x, max_y, color) {
        let x = Math.floor(Math.random() * (max_x + 1));
        let y = Math.floor(Math.random() * (max_y + 1));
        return new Candy(x, y, color);
    }
}