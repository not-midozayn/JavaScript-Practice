
export  class Shape {
    #color
    identity = "Shape";
    constructor(_color) {
        this.#color = _color;
    }
    set Color(_color) {
        this.#color = _color;
    }
    get Color() {
        return this.#color;
    }
    DrawShape (){
        console.log(this.#color);
    }
    getArea(){
        console.log(`this is ${this.identity}`);
        return 0;
    }
}
