class Snake {
	constructor(n) {
		// points array
		this.points = [];
		// now many points to track
		this.maxPoints = n;
	}

	update(newX, newY) {
		let point = {
			x: newX,
			y: newY
		}
		// update last spot in the array with mouse location
		this.points.push(point);

		if (this.points.length > this.maxPoints) {
			this.points.splice(0, 1);
		}
	}

	display() {
		for (let i = 0; i < this.points.length; i++) {
			stroke(0);
			fill(255-i*5);
			ellipse(this.points[i].x, this.points[i].y, i, i);
		}
	}
}