# learning-p5-js

The Learning Processing book is meant for Processing, which is built on top of Java.

There, however, is no Learning p5.js book, meaning there is no JavaScript-based version of Learning Processing.  There is just the Dan Shiffman repo of Learning Processing code ported to p5.js. Although [this book](https://www.springer.com/us/book/9781484234259?gclid=CjwKCAiA8bnUBRA-EiwAc0hZk7BwWdTn-f-2ELGoh1CwFpMvYHrMZH-0kV553OsjfIXqBFbaHyGQqxoCPkIQAvD_BwE#aboutBook) looks like it might be on target.

This repo is an attempt to solve that problem.  I will go through the Learning Processing book, link to the appropriate Shiffman p5.js repos from the Learning Processing book, link to the most relevant Coding Train videos, and post my own code for the exercises. 

I think this will be helpful for my learning process, and I hope it's helpful to anyone else who stumbles across this repo.


# Introduction

## What is p5.js?

See [this Coding Train video](https://www.youtube.com/watch?v=8j0UDiN7my4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) for Dan Shiffman's explanation of the origin of p5.js, and how to get started coding with p5.js.

Note that the above video references an editor for download that has since been [deprecated](https://github.com/processing/p5.js-editor).

Dan Shiffman's [next video](https://www.youtube.com/watch?v=HZ4D3wDRaec&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2) is about a p5.js workflow, meaning how to download the project files, how to setup node.js and package manager, and how to run a local server on your computer.  I plan on going through all these steps later, but for now, I'm going to use the [online editor](https://alpha.editor.p5js.org/).

## Incremental Development

This is also known as the "one step at a time" approach.

This could also be called "top down design".

Don't try to do too much all at once.  Break a larger vision down into smaller parts and attack each piece slowly, one at a time.  

Space Invaders example: 
1. Program the spaceship
2. Program the invaders 
3. Program the scoring system 

(Editor's note - this may be a completely inappropriate project depending on the coder's skill level.  The philosophy of deliberate practice dictates that learning is best done through exercises that are challenging, but not too challenging.  I have found it very hard to find that proper balance in learning to code.  Either projects are too easy, or they're too difficult (and I don't have the network to ask for assistance when I hit a wall).  I'd love to find a way to bridge this gap and figure out difficulty appropriate projects.

See [this link](https://www.youtube.com/watch?v=biN3v3ef-Y0) for Shiffman coding Space Invaders - it doesn't seem so beginner friendly)

Back to Space Invaders...

Then divide the problem into the smallest pieces necessary. Simple and easy steps will make programming the game seem more achievable (how you go about figuring out those steps is another important question).

We would break down Step 1 into six programs.  The first program would *display a triangle*.  Each step would add a small improvement.  The next would *move the triangle*.  

1.1 Draw the triangle onscreen.  This is the spaceship.
1.2 Position the triangle at the bottom of the screen.
1.3 Position the triangle slightly to the right of where it was before.
1.4 Animate the trangle so that it moves from position left to right.
1.5 Animate the triangle from left to right only when the right-arrow key is pressed.
1.6 Animate the triangle right to left when the left-arrow key is pressed.

(Of course, being able to figure out these steps assumes a ton of coding knowledge already.  If you can't figure out the order for these steps, or even what steps there should be in the first place, what chance do you have of writing the code to execute them?)

This makes programming and "debugging" easier - more on this next.







 


