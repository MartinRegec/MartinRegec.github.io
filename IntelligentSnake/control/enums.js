
const Color =
    {
        WHITE: "#ffffff",
        BLACK: "#000000",
        RED: "#F64C92",
        GREEN: "#00ff00",
        DARK_IMPERIAL_BLUE: "#05386B",
        DARK_EMERALD_GREEN: "#379683",
        LIGHT_EMERALD_GREEN: "#5CDB95"
    };

const Direction =
    {
        UP: "UP",
        DOWN: "DOWN",
        LEFT: "LEFT",
        RIGHT: "RIGHT",

        get_opposite(direction)
        {
            if (direction === Direction.RIGHT)
                return Direction.LEFT
            else if (direction === Direction.LEFT)
                return Direction.RIGHT
            else if (direction === Direction.DOWN)
                return Direction.UP
            else if (direction === Direction.UP)
                return Direction.DOWN
        }
    };