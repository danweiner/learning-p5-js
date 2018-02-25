function setup() { 
  createCanvas(400, 640);
	
} 

function draw() { 
  background(220)
  ellipseMode(CENTER);
  rectMode(CENTER);
  //head
  fill(255); 
  ellipse(width/2, height/2, 200, 250);
  
  //eyes
  ellipse(width/2 - 35, height /2 - 40, 
          40, 40);
  ellipse(width/2 + 35, height /2 - 40, 
          40, 40);
  
  //nose
  fill(50);
	rect(width/2, height/2, 30, 20, 5);
  
  fill(100, 100, 100, 67);
  
  //ears
	push();
  translate(width / 2, height / 2);
	rotate(PI / 6.0);
	rect(-120, -10, 30, 130);
  pop();
  
  push();
  translate(width / 2, height / 2);
	rotate(PI / -6.0);
	rect(120, -10, 30, 130);
  pop();
   

}