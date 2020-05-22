// import MyScreen from "./snake_screen/my_screen";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
console.log(canvas)

const scale = 15;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const timeout = 125;

(function setup() {
    screen = new MyScreen(rows, columns, Color.LIGHT_EMERALD_GREEN, Color.DARK_EMERALD_GREEN, Color.DARK_IMPERIAL_BLUE, Color.RED);
    screen.draw(ctx, scale);

    window.setInterval(add_candy, timeout * 5);

    window.setInterval(() => {
        if (screen.move_next() === "end")
            screen.reset()
        screen.draw(ctx, scale);
    }, timeout)
}())

window.addEventListener("keydown", ((evt) => {
    const direction = evt.key.replace("Arrow", "").toUpperCase();
    if(direction in Direction)
        screen.snake.set_dir(direction);
    console.log(direction)
}))

function add_candy() {
    if (screen.candies.length < 5)
        screen.generate_candy()
}