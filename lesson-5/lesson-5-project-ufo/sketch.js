let ufo;
let bullets = [];

let gameLost = false;
let gameWon = false;

function setup() {
	createCanvas(400, 400);
	ufo = new UFO();
	bullet = new Bullet();
}

function draw() {
	background(150);

	if (gameLost) {
		textSize(48);
		textAlign(CENTER);
		fill(0);
		text('GAME OVER', width/2, height/2);
		textSize(24);
		text('Press ENTER to play again', width/2, height/2 + 50);
	} if (gameWon) {
		textSize(48);
		textAlign(CENTER);
		fill(0);
		text('You Win', width/2, height/2);
		textSize(24);
		text('Press UP_ARROW to play again', width/2, height/2 + 50);
	} else {
		ufo.display();
		if (!ufo.isFinished) {
			ufo.move();
		} if (ufo.reachedBottom()) {
			ufo.finished();
			gameLost = true;
		}

		for (var i = 0; i < bullets.length; i++) {
			if (!bullets[i].isFinished) {
				bullets[i].display();
				bullets[i].move();
				if (bullets[i].intersect(ufo)) {
					bullets[i].finished();
					gameWon = true;
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
		gameLost = false;

	} else if (keyCode == UP_ARROW) {
		ufo.levelUp();
		bullets = [];
		gameWon = false;
	}
}



