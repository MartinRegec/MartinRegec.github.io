// import Point from 'IntelligentSnake/point.js'

class SnakePart extends Point
{
    constructor(x, y, color) {
        super(x ,y, color);
    }

    move_to(x, y) {
        this.x_ = x;
        this.y_ = y;
    }

    copy() {
        return new SnakePart(this.x, this.y, this.color)
    }
}
