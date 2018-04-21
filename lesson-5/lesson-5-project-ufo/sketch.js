let ufo;
let bullets = [];

function setup() {
	createCanvas(400, 400);
	ufo = new UFO();
	bullet = new Bullet();
}

function draw() {
	background(150);

	ufo.display();
	ufo.move();

	for (var i = 0; i < bullets.length; i++) {
		if (!bullets[i].isFinished) {
			bullets[i].display();
			bullets[i].move();
			if (bullets[i].intersect(ufo)) {
				bullets[i].finished();
			}
			if (bullets[i].reachedTop()) {
				bullets[i].finished();
			}
		}
	}
}

function mousePressed() {
	let bullet = new Bullet();
	bullets.push(bullet);
}



