import Snake from "../snake/snake";
import Point from "../point";
import Candy from "./candy";


export default class Screen
{
    constructor(height, width, background_color, snake_body_color, snake_head_color, candies_color) {
        this.height = height;
        this.width = width;
        this.background_color = background_color;
        this.candies_color = candies_color;
        this.candies = [];
        this.snake = new Snake(Math.floor(width/2), Math.floor(height/2), snake_body_color);
        this.grid = this.generate_grid();
        this.update_grid();
    }

    generate_grid() {
        let grid = [];
        for (let y = 0; y < this.width; y++)
        {
            grid.append([]);
            for (let x = 0; x < this.height; x++)
                grid[y].append(new Point(x, y, this.background_color));
        }
        return grid;
    }

    clean_grid() {
        for (let y = 0; y < this.width; y++)
        {
            for (let x = 0; x < this.height; x++)
                this.grid[y][y].color = this.background_color;
        }
    }

    update_grid() {
        this.clean_grid();
        this.grid[this.snake.head.y][this.snake.head.x].color = this.snake.head.color;
        for (let i = 0; i < this.snake.body.length; i++)
            this.grid[this.snake.body[i].y][this.snake.body[i].x].color = this.snake.body[i].color;
    }

    move(dir) {
        this.snake.move(dir, this.width-1, this.height-1);
        this.update_grid();
    }

    move_next() {
        this.snake.move_next(this.width-1, this.height-1);
        this.update_grid();
    }

    add_and_move(dir) {
        this.snake.add_and_move(dir, this.width-1, this.height-1);
    }

    add_and_move_next() {
        this.snake.add_and_move_next(this.width-1, this.height-1);
    }

    check_next(dir) {
        return this.snake.head.next(dir,this.width-1, this.height-1);
    }

    collision_with_snake(point) {
        if (Point.compare(this.snake.head, point))
            return true;
        for (let i = 0; i < self.snake.body.length; i++)
        {
            if (Point.compare(this.snake.body[i], point))
                return true;
        }
        return false;
    }

    collision_with_candy(point) {
        for (let i = 0; i < this.candies.length; i++)
        {
            if (Point.compare(this.candies[i], point))
                return true;
        }
        return false;
    }

    is_pos_free(point) {
        return (!this.collision_with_candy(point) && !this.collision_with_snake(point));
    }

    generate_candy() {
        let new_candy
        do {
            new_candy = Candy.generate(this.width-1, this.height-1, this.candies_color);
        }while (this.is_pos_free(new_candy))
    }

}