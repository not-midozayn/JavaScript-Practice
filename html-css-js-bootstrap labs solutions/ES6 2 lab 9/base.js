import {Circle} from "./3-CircleModule.js"
import {Rectangle, Square} from "./2-SquaresModule.js"
import {Shape} from "./1-ShapesModule.js"
let sh1 = new Shape ("yellow");
sh1.getArea();

let rect1 = new Rectangle("green",20,30);
rect1.getArea();

let sq1 = new Square("red",20);
sq1.getArea();

let circ1 = new Circle("blue",20);
circ1.getArea();
