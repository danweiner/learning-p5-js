var car;

function setup() {
	createCanvas(200, 200);
	// Initialize Car object
	car = new Car();
}

function draw() {
	background(0);
	// Operate Car object
	car.display();
	car.drive();
}

//