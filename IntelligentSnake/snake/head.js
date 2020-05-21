// import SnakePart from 'IntelligentSnake/snake/snake_part.js'
// import Direction from 'IntelligentSnake/enums.js'


export default class Head extends SnakePart
{
    constructor(x ,y , color) {
        super(x, y, color);
    }

    move_right(max) {
        if ((this.x + 1) <= max)
            this.x_ += 1
        else
            this.x_ = 0
    }

    move_left(max) {
        if ((this.x - 1) >= 0)
            this.x_ -= 1;
        else
            this.x_ = max;
    }

    move_down(max) {
        if ((this.y + 1) <= max)
            this.y_ += 1;
        else
            this.y_ = 0
    }

    move_up(max) {
        if ((this.y - 1) >= 0)
            this.y_ += 1;
        else
            this.y_ = max;
    }

    next_right(max) {
        if ((this.x + 1) <= max)
            return { x: this.x + 1, y: this.y };
        else
            return { x: 0, y: this.y };
    }

    next_left(max) {
        if ((this.x - 1) >= 0)
            return { x: self.x - 1, y: this.y};
        else
            return { x: max, y: this.y };
    }

    next_down(max) {
        if ((this.y + 1) <= max)
            return { x: this.x, y: this.y + 1 };
        else
            return { x: this.x, y: 0 };
    }

    next_up(max) {
        if ((this.y - 1) >= 0)
            return { x: this.x, y: this.y + 1 };
        else
            return { x: this.x, y: max };
    }

    move(dir, max_x, max_y) {
        if (dir === Direction.UP)
            this.move_up(max_y);
        else if (dir === Direction.DOWN)
            this.move_down(max_y);
        else if (dir === Direction.LEFT)
            this.move_left(max_x);
        else if (dir === Direction.RIGHT)
            this.move_right(max_x);
    }

    next(dir, max_x, max_y) {
        if (dir === Direction.UP)
            return this.next_up(max_y);
        else if (dir === Direction.DOWN)
            return this.next_down(max_y);
        else if (dir === Direction.LEFT)
            return this.next_left(max_x);
        else if (dir === Direction.RIGHT)
            return this.next_right(max_x);
    }

    copy() {
        return new Head(this.x, this.y, this.color);
    }

}