// import MyScreen from "./snake_screen/my_screen";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
console.log(canvas)

let scale = 15;
let rows = canvas.height / scale;
let columns = canvas.width / scale;
let timeout = 125;
let snake_screen;

(function setup() {
    snake_screen = new MyScreen(rows, columns, Color.LIGHT_EMERALD_GREEN, Color.DARK_EMERALD_GREEN, Color.DARK_IMPERIAL_BLUE, Color.RED);
    snake_screen.draw(ctx, scale);

    window.setInterval(add_candy, timeout * 5);

    window.setInterval(() => {
        if (snake_screen.move_next() === "end")
            snake_screen.reset()
        snake_screen.draw(ctx, scale);
    }, timeout)
}())

window.addEventListener("keydown", ((evt) => {
    const direction = evt.key.replace("Arrow", "").toUpperCase();
    if(direction in Direction)
        snake_screen.snake.set_dir(direction);
    console.log(direction)
}))

function add_candy() {
    if (snake_screen.candies.length < 5)
        snake_screen.generate_candy()
}