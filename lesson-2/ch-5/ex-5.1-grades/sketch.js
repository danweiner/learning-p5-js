var grade;

function setup() {
	createCanvas(480, 270);
	textSize(32);
	textAlign(CENTER);
	// Rounds down
	grade = Math.floor(random(50, 100));
}

function draw() {
	// used for debugging line(width/2, 0, width/2, height);
	if (grade >= 90) {
		text(grade + ':' +' A', width/2, height/2);
	} else if (grade >= 80) {
		text(grade + ':' + ' B', width/2, height/2);
	} else if (grade >= 70) {
		text(grade + ':' + ' C', width/2, height/2);
	} else {
		text(grade + ':' + ' F', width/2, height/2);

	}

}