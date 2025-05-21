import { Shape } from "./1-ShapesModule.js";
export class Circle extends Shape {
    #radius
    #x
    #y
    constructor(_color,_radius){
        super(_color);
        this.#radius = _radius
        this.identity = "Circle"
    }
    set Radius(_radius) {
        this.#radius = _radius;
    }
    get Radius() {
        return this.#radius;
    }
    set X(_x) {
        this.#x = _x;
    }
    get X() {
        return this.#x;
    }
    set Y(_y) {
        this.#y = _y;
    }
    get Y() {
        return this.#y;
    }
    getArea() {
        super.getArea();
        console.log(`Area = ${this.Radius * this.Radius * (22 / 7)}`);
        console.log(`Perimeter = ${2 * this.Radius * (22 / 7)}`);
        super.DrawShape()
    }
}
