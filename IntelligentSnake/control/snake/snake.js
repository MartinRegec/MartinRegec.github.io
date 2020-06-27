// import Head from "./head.js";
// import SnakePart from "./snake_part";
// import Direction from "../enums.js";

class Snake
{
    constructor(start_x, start_y, head_color, body_color) {
        this.head = new Head(start_x, start_y, head_color);
        this.body_color = body_color;
        this.body = [];
        this.curr_dir = Direction.RIGHT;
        this.can_change_dir = false;
        this.movement_queue = [];
    }

    set_dir(dir) {
        if (!this.movement_queue.contains(dir))
        {
            this.movement_queue.push(dir);
            this.movement_queue = this.movement_queue.slice(0, 2);
        }
        // if (dir !== Direction.get_opposite(this.curr_dir) && this.can_change_dir) {
        //     this.curr_dir = dir;
        //     this.can_change_dir = false;
        // }
    }


    move(dir, max_x, max_y) {
        if (dir !== Direction.get_opposite(this.curr_dir))
        {
            for (let i = this.body.length - 1; i > 0; i -= 1)
                this.body[i].move_to(this.body[i - 1].x, this.body[i - 1].y);
            if (this.body.length)
                this.body[0].move_to(this.head.x, this.head.y);
            this.head.move(dir, max_x, max_y);
            this.curr_dir = dir;
        }
    }

    add_and_move(dir, max_x, max_y) {
        let new_part
        if (this.body.length)
            new_part = this.body[this.body.length - 1].copy();
        else
            new_part = new SnakePart(this.head.x, this.head.y, this.body_color)
        this.move(dir, max_x, max_y);
        this.body.push(new_part);
    }

    move_next(max_x, max_y) {
        this.move(this.get_next_dir(), max_x, max_y);
    }

    add_and_move_next(max_x, max_y) {
        this.add_and_move(this.get_next_dir(), max_x, max_y);
    }

    get_next_dir()
    {
        return this.movement_queue.pop();
    }
}