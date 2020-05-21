import MyScreen from "./snake_screen/my_screen";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
console.log(canvas)

const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

(function setup() {
    screen = new MyScreen(rows, columns, Color.GREEN, Color.WHITE, Color.BLACK, Color.RED);
    screen.draw(ctx, scale);
}())