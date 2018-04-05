// Constructor determines length of snake
class Snake {
	constructor(n) {
		this.xpos = new Array(n).fill(0);
		this.ypos = new Array(n).fill(0);
	}

	update(newX, newY) {
		// shift all elementd down one spot
		// xpos[0] = xpos[1] etc up to second to last
		for (let i = 0; i < this.xpos.length-1; i++ ) {
      this.xpos[i] = this.xpos[i+1]; 
      this.ypos[i] = this.ypos[i+1];
	   }

		// Update the last spot in the array with the mouse location.
		this.xpos[this.xpos.length-1] = newX; 
		this.ypos[this.ypos.length-1] = newY;
    console.log(this.xpos);
	}

  display() {
    // draw everything
    for (let i = 0; i < this.xpos.length; i++ ) {
      // Draw an ellipse for each element in the arrays. 
      // Color and size are tied to the loop's counter: i.
      stroke(0);
      fill(255-i*5);
      ellipse(this.xpos[i],this.ypos[i],i,i); 
    }
  }
}