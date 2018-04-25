class Oscillator {
	constructor() {
		this.xtheta = 0;
		this.ytheta = 0;

		this.dxtheta = random(-.03, .03);
		this.dytheta = random(-.03, .03);
	}

	oscillate() {
		this.xtheta += this.dxtheta;
		this.ytheta += this.dytheta;
	}

	display() {
		let x = (sin(this.xtheta) + 1) * width/2;
		let y = (cos(this.ytheta) + 1) * height/2;
		stroke(0);
		fill(175, 100);
		line(width/2, height/2, x, y);
		ellipse(x, y, 64, 64);
	}
}