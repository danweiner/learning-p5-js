let car1;
let car2;

function setup() {
	createCanvas(200, 200);
	car1 = new Car(color(255, 0, 0), 0, 100, 2);
	car2 = new Car(color(0, 0, 255), 0, 10, 1);
}

function draw() {
	background(155);
	car1.move();
	car1.display();
	car2.move();
	car2.display();
}