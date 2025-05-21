import { Shape } from "./1-ShapesModule.js";
export class Rectangle extends Shape {
    #height
    #width
    constructor(_color,_width, _height) {
        super(_color);
        this.#width = _width;
        this.#height = _height;
        this.identity = "Rectangle"
    }
    set Width(_width) {
        this.#width = _width;
    }
    get Width() {
        return this.#width;
    }
    set Height(_height) {
        this.#height = _height;
    }
    get Height() {
        return this.#height;
    }
    getArea() {
        super.getArea();
        console.log(`Area = ${this.Height * this.Width}`);
        console.log(`Perimeter = ${2 * (this.Height + this.Width)}`);
        super.DrawShape()
    }
}
export  class Square extends Rectangle {

    constructor(_color,_length) {
        super(_color,_length, _length);
        this.identity = "Square"
    }

    set Length(_length) {
        super.Width = super.Height = _length;
    }
    get Length() {
        return super.Width;
    }
    getArea() {
        super.getArea();
    }
}



