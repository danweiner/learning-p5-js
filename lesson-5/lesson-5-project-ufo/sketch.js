let ufo;
let bullets = [];

let gameOver = false;

function setup() {
	createCanvas(400, 400);
	ufo = new UFO();
	bullet = new Bullet();
}

function draw() {
	background(150);

	if (gameOver) {
		textSize(48);
		textAlign(CENTER);
		fill(0);
		text('GAME OVER', width/2, height/2);
		textSize(24);
		text('Press ENTER to play again', width/2, height/2 + 50);
	} else {
		ufo.display();
		if (!ufo.isFinished) {
			ufo.move();
		} if (ufo.reachedBottom()) {
			ufo.finished();
			gameOver = true;
		}

		for (var i = 0; i < bullets.length; i++) {
			if (!bullets[i].isFinished) {
				bullets[i].display();
				bullets[i].move();
				if (bullets[i].intersect(ufo)) {
					bullets[i].finished();
					gameOver = true;
				}
				if (bullets[i].reachedTop()) {
					bullets[i].finished();
				}
			}
		}
	}
}

function mousePressed() {
	let bullet = new Bullet();
	bullets.push(bullet);
}

function keyPressed() {
	if (keyCode == ENTER) {
		ufo.reset();
		bullets = [];
		gameOver = false;

	}
}



