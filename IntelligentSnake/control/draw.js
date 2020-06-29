// import MyScreen from "./snake_screen/my_screen";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const left_half = document.querySelector(".left-half")
const enable_ai_switch = document.querySelector(".switch")
const curr_score_label = document.querySelector(".curr-score")
const max_score_label = document.querySelector(".max-score")
const speed_slider = document.getElementById("speed-slider");
const speed_label = document.getElementById("speed-label");
console.log(canvas)



let scale = 0;
let rows = 0;
let columns = 0;
let timeout = 125;
let snake_screen;
let score = 0;
let max_score = 0;
let control = "manual";

(function setup() {
    let size = get_snake_screen_size()
    canvas.height = size;
    canvas.width = size;
    scale = size / 25;
    rows = 25;
    columns = 25;

    snake_screen = new MyScreen(rows, columns, Color.LIGHT_EMERALD_GREEN, Color.DARK_EMERALD_GREEN, Color.DARK_IMPERIAL_BLUE, Color.RED);
    snake_screen.draw(ctx, scale);
    //window.setInterval(snake_screen.add_candy, timeout * 5);

    window.setTimeout(snake_control, timeout)
}())

window.addEventListener("keydown", ((evt) => {
    if (!enable_ai_switch.control.checked) {
        const direction = evt.key.replace("Arrow", "").toUpperCase();
        if (direction in Direction)
            snake_screen.snake.set_dir(direction);
        console.log(direction)
    }
}))

function snake_control() {
    // move with snake to next position
    let snake_statement = snake_screen.move_next();

    if (snake_statement === "end") {
        score = 0;
        snake_screen.reset()
    }
    // add score after eating candy
    else if (snake_statement === "candy") {
        score++;
    }

    // resize canvas after resize window
    let size = get_snake_screen_size();
    canvas.width = size;
    canvas.height = size;

    // redraw snake screen
    snake_screen.draw(ctx, size/25);

    // change curr. and max. score
    curr_score_label.innerHTML = "Score: " + score;
    if (score > max_score)
        max_score = score;
    max_score_label.innerHTML = "Maximal Score: " + max_score;

    // set speed of snake and width of slider
    window.setTimeout(snake_control, timeout / speed_slider.value)
    speed_label.innerHTML = "Speed(" + speed_slider.value + "x):"
}

function get_snake_screen_size() {
    let size = Math.floor((left_half.offsetWidth - 20) / 25) * 25;
    if (size > Math.floor((left_half.offsetHeight - 160) / 25) * 25)
        size = Math.floor((left_half.offsetHeight - 160) / 25) * 25;
    canvas.height = size;
    canvas.width = size;
    return size;
}