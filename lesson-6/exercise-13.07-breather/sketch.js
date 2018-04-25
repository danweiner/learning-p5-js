let breathers = [];

function setup() {
	createCanvas(480, 270);
	for (var i = 0; i < 25; i++) {
		breathers[i] = new Breather();
	}
}

function draw() {
	background(255);
	for (var i = 0; i < breathers.length; i++) {
		breathers[i].breath();
		breathers[i].display();
	}
}