let ufo;
let bullets = [];

let playing = false;

let gameLost = false;
let gameWon = false;
let welcome = true;

let bulletsRemaining = 5;

let level = 1;

function setup() {
	createCanvas(400, 400);
	ufo = new UFO();
	bullet = new Bullet();
}

function draw() {
	background(150);

	if (welcome) {
		textSize(48);
		textAlign(CENTER);
		fill(0);
		text('Welcome', width/2, height/2);
		textSize(24);
		text('You have 5 shots to hit the UFO.', width/2, height/2 + 50);
		text('UFO gets faster each round.', width/2, height/2 + 100);
		text('Press "p" to play.', width/2, height/2 + 150);
	} else if (playing) {

		if (gameWon) {	
			
			textSize(48);
			textAlign(CENTER);
			fill(0);
			text('You win', width/2, height/2);
			textSize(24);
			text('Press UP_ARROW to play again', width/2, height/2 + 50);
		} else if (gameLost) {
			textSize(48);
			textAlign(CENTER);
			fill(0);
			text('Game Over', width/2, height/2);
			textSize(24);
			text('Press ENTER to play again', width/2, height/2 + 50);
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

					if (bullets.length > 4 && bullets[4].reachedTop() == true) {
						gameLost = true;
					}
				}
			}

			textSize(24);
			textAlign(CENTER);
			fill(0);
			text('Level: ' + level, 50, height - 30);
		}
	}
}


function mousePressed() {
	let bullet = new Bullet();
	bullets.push(bullet);
	bulletsRemaining = bulletsRemaining - 1;
}

function keyPressed() {
	if (keyCode == ENTER) {
		ufo.reset();
		bullets = [];
		gameLost = false;
		bulletsRemaining = 5;
		welcome = true;
		playing = false;
		level = 1;

	} else if (keyCode == UP_ARROW) {
		ufo.levelUp();
		bullets = [];
		gameWon = false;
		bulletsRemaining = 5;
		level = level + 1;
	} else if (key == 'p' || 'P') {
		playing = true;
		welcome = false;
	}
}





