function setup() { 
  createCanvas(400, 640);
	
} 

function draw() { 
  background(220)
  ellipseMode(CENTER);
  rectMode(CENTER);
	
  //head
  fill(255); 
  ellipse(mouseX, mouseY, 200, 250);
  
  //eyes
  ellipse(mouseX-35, mouseY-40, 
          40, 40);
  ellipse(mouseX +35,mouseY -40, 
          40, 40);
	
  fill(0);
  ellipse(mouseX-35, mouseY-40, 
          10, 10);
  ellipse(mouseX+35, mouseY-40, 
          10, 10);
  
  //nose
  fill(50);
  rect(mouseX, mouseY, 30, 20, 5);
  
  fill(100, 100, 100, 67);
  
  //ears
  push();
  translate(mouseX-100, mouseY-50);
  rotate(PI / 6.0);
  rect(0, 0, 30, 130);
  pop();
  
	
	
  push();
  translate(mouseX+100, mouseY-50);
  rotate(PI / -6.0);
  rect(0, 0, 30, 130);
  pop();
   

}
