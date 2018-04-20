let catcher; // one catcher object
let timer;	 // one timer object
let drops;	 // array of drop objects

let totalDrops = 0;

function setup() {
	createCanvas(400, 400);

	catcher = new Catcher(32); // create the catcher w = 32
	drops = new Array(1000); // create 1000 spots in the array
	timer = new Timer(2000); // timer goes off every two secs

	timer.start();
}

function draw() {
	background(255);

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
		drops[i].move();
		drops[i].display();
		if (catcher.intersect(drops[i])) {
			drops[i].caught();
		}
	}
}

