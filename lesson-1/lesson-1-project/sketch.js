function setup() { 
  createCanvas(400, 640);
  
  //remember background must be in setup!
  //draw the daytime sky
  background(66, 134, 244);
  
  //draw sun
  noStroke();
  fill(255, 255, 0);
  ellipse(3*width/4, height/4, 35, 35);
  
} 

function draw() { 
  
  
  rectMode(CENTER);
  ellipseMode(CENTER);
  
  //draw the grass
  noStroke();
  fill(0, 255, 0);
  rect(width/2, 5*height/4, width, height);
  
  //draw the chimney
  stroke(0);
  fill(255, 0, 0);
  rect(width/2 + 90, 2*height/3 , 20, 200);
  
  //draw the main house structure
  stroke(0);
  fill(255);
  rect(width/2, 3*height/4, 200, 150);
  
  //draw the roof
  stroke(0);
  fill(0);
  quad(width/4 -30, 3*height/4 - 40, 
       width/2 - 70, 3*height/4 - 125, 
       width/2 + 70, 3*height/4 - 125, 
       3*width/4 + 30, 3*height/4 - 40 );
  
  //windows
  stroke(0);
  fill(255);
  rect(width/2 - 40, 3*height/4 - 15, 35, 35);
  
  stroke(0);
  fill(255);
  rect(width/2 + 40, 3*height/4 - 15, 35, 35);
  
  //right window lines
  line(width/2 + 40 - 17, 3*height/4 - 15, 
       width/2 + 40 + 18, 3*height/4 - 15);
  line(width/2 + 40, 3*height/4 - 32, 
       width/2 + 40, 3*height/4 + 2);
  
  //left window lines
  line(width/2 - 40 - 17, 3*height/4 - 15, 
       width/2 - 40 + 18, 3*height/4 - 15);
  line(width/2 - 40, 3*height/4 - 32, 
       width/2 - 40, 3*height/4 + 2);
  
  //door
  
  //referencing main house structure for door placement
  // this probably should be a variable - thats in next chapter
  // stroke(0);
  // fill(255);
  // rect(width/2, 3*height/4, 200, 150);
  
  stroke(0);
  fill(255, 0, 0);
  rect(width/2, 3*height/4 + 55, 25, 40);
  
  //doorknob
  
  stroke(0);
  fill(244, 187, 65);
  ellipse(width/2 - 5, 3*height/4 + 55, 7, 7);
  
  
}

function mousePressed() {
	background(15, 24, 89);
 
 
  
   //draw moon
  noStroke();
  fill(255);
  ellipse(3*width/4, height/4, 35, 35);
  
  // draw orion
  stroke(255);
  point(width/4, height/5);
  point(width/4 + 50, height/5 - 20);
  point(width/4 + 80, height/5 + 10);
	point(width/4 + 20, height/5 + 70);
  point(width/4 + 40, height/5 + 65);
  point(width/4 + 60, height/5 + 60);
  point(width/4 + 10, height/5 + 150);
  point(width/4 + 100, height/5 + 130);
}