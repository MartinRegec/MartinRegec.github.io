import Head from "./head.js";
import SnakePart from "./snake_part";
import Direction from "../enums.js";

export default class Snake
{
    constructor(start_x, start_y, head_color, body_color) {
        this.head = new Head(start_x, start_y, head_color);
        this.body_color = body_color;
        this.body = [];
        this.curr_dir = Direction.RIGHT;
    }

    move(dir, max_x, max_y) {
        if (dir !== Direction.get_opposite(this.curr_dir))
        {
            for (let i = this.body.length - 1; i > 0; i -= 1)
                this.body[i].move_to(this.body[i - 1].x, this.body[i - 1].y);
            if (this.body)
                this.body[0].move_to(this.head.x, this.head.y);
            this.head.move(dir, max_x, max_y);
            this.curr_dir = dir;
        }
    }

    add_and_move(dir, max_x, max_y) {
        let new_part
        if (this.body)
            new_part = this.body[this.body.length - 1].copy();
        else
            new_part = new SnakePart(this.head.x, this.head.y, this.body_color)
        this.move(dir, max_x, max_y);
        this.body.append(new_part);
    }

    move_next(max_x, max_y) {
        this.move(this.curr_dir, max_x, max_y);
    }

    add_and_move_next(max_x, max_y) {
        this.add_and_move(this.curr_dir, max_x, max_y);
    }
}