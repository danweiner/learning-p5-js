function setup() { 
  createCanvas(400, 640);
  
} 

function setup() { 
  createCanvas(400, 640);
  
} 

function draw() { 
  background(220)
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  colorMode(RGB, width, width, width, 1);
  //head
  fill(width); 
  ellipse(mouseX, mouseY, 200, 250);
  
  //eyes
  ellipse(mouseX-35, mouseY-40, 
          40, 40);
  ellipse(mouseX + 35, mouseY-40, 
          40, 40);
  
  fill(mouseX);
  ellipse(mouseX-35, mouseY-40, 
          10, 10);
  ellipse(mouseX+ 35, mouseY-40, 
          10, 10);
  
  //nose
  fill(mouseX);
  rect(mouseX, mouseY, 30, 20, 5);
  
  //ears
  fill(width/4, width/4, width/4, .7);
  push();
  translate(mouseX - 100, mouseY - 50);
  rotate(PI / 6.0);
  rect(0, 0, 30, 130);
  pop();
  
  push();
  translate(mouseX + 100, mouseY -50);
  rotate(PI / -6.0);
  rect(0, 0, 30, 130);
  pop();
   

}
