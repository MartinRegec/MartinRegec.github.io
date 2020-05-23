class Point
{
    constructor(x, y, color)
    {
        this.x_ = x;
        this.y_ = y;
        this.color_ = color;
    }

    get color()
    {
        return this.color_
    }

    get x()
    {
        return this.x_
    }

    get y()
    {
        return this.y_
    }

    set color(color)
    {
        this.color_ = color
    }

    copy()
    {
        return new Point(this.x, this.y, this.color)
    }

    static compare(point1, point2)
    {
        return (point1.x === point2.x) && (point1.y === point2.y);
    }
}