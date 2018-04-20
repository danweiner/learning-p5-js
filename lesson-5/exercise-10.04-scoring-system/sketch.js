let catcher; // one catcher object
let timer;	 // one timer object
let drops;	 // array of drop objects

let totalDrops = 0;

let lives = 10; // lives per level
let level = 1;
let levelCounter = 0;
let score = 0;

let gameOver = false;

function setup() {
	createCanvas(400, 400);

	catcher = new Catcher(32); // create the catcher w = 32
	drops = new Array(100); // create 1000 spots in the array
	timer = new Timer(300); // timer goes off every two secs

	timer.start();

}

function draw() {
	background(255);

	if (gameOver) {
		textSize(48);
		textAlign(CENTER);
		fill(0);
		text('GAME OVER', width/2, height/2);
		text('Click mouse to play again', width/2, height/2 + 40);
	} else {

		catcher.setLocation(mouseX, mouseY); //set catcher location
		catcher.display();

		// check the timer
		if (timer.isFinished()) {
			// Deal with raindrops
			// Initialize one drop
			drops[totalDrops] = new Drop();
			// Increment totalDrops
			totalDrops++
			// If we hit the end of the array
			if (totalDrops >= drops.length) {
				totalDrops = 0; // Start over
			}
			timer.start();
		}

		// Move and display all drops
		for (let i = 0; i < totalDrops; i++) {
			if (!drops[i].isFinished) {
				drops[i].move();
				drops[i].display();
				if (drops[i].reachedBottom()){
					levelCounter++;
					drops[i].finished();
					lives--;
					if (lives<= 0) {
						gameOver = true;
					}
				}

				if (catcher.intersect(drops[i])) {
					drops[i].finished();
					levelCounter++;
					score++;
				}	
			}
		}

		if (levelCounter >= drops.length) {
			level++;
			levelCounter = 0;
			lives = 10;
			timer.setTime(constrain(300 - level*25, 0, 300));
			totalDrops = 0;
		}
	}

	textFont(14);
	fill(0);
	text('Lives Left: ' + lives, 40, 20);
	rect(10, 24, lives*10, 10);

	text("Level: " + level, 300, 20);
	text("Score: " + score, 300, 40);
}



