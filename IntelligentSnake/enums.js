
const Color =
    {
        WHITE: 0,
        BLACK: 1,
        RED: 2,
        GREEN: 3
    };

const Direction =
    {
        UP: 0,
        DOWN: 1,
        LEFT: 2,
        RIGHT: 3,
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