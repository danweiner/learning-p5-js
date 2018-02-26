# learning-p5-js

Learning Processing is an introductory workbook/textbook for Processing, which is built on top of Java.

There, however, is no Learning p5.js book, meaning there is no JavaScript-based version of Learning Processing.  There is just the Dan Shiffman repo of Learning Processing code ported to p5.js. Although [this book](https://www.springer.com/us/book/9781484234259?gclid=CjwKCAiA8bnUBRA-EiwAc0hZk7BwWdTn-f-2ELGoh1CwFpMvYHrMZH-0kV553OsjfIXqBFbaHyGQqxoCPkIQAvD_BwE#aboutBook) looks like it might be on target.

This repo is an attempt to solve that problem.  I will go through the Learning Processing book, link to the appropriate Shiffman p5.js repos from the Learning Processing book, link to the most relevant Coding Train videos, and post my own code for the exercises. 

I will also have the occasional "detour" when relevant topics come up that aren't covered in the book.  For instance, Command Line, using GitHub, etc.  These "detours" might end up overwhelming the initial goal of the project, but we'll see.

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

1. 1 Draw the triangle onscreen.  This is the spaceship.
1. 2 Position the triangle at the bottom of the screen.
1. 3 Position the triangle slightly to the right of where it was before.
1. 4 Animate the trangle so that it moves from position left to right.
1. 5 Animate the triangle from left to right only when the right-arrow key is pressed.
1. 6 Animate the triangle right to left when the left-arrow key is pressed.

(Of course, being able to figure out these steps assumes a ton of coding knowledge already.  If you can't figure out the order for these steps, or even what steps there should be in the first place, what chance do you have of writing the code to execute them?)

This makes programming and "debugging" easier - more on this next.

Incremental development also lends itself well to *object oriented programming*, which allows us to develop projects in modular pieces, meaning these pieces can be easily organized, shared, and reused.

## Debugging

See [this link](http://staging.p5js.org/tutorials/debugging.html) from p5.js and [this link](https://vimeo.com/105069079) from ITP for more info on debugging.

Note that a "bug" is "the moment when there is both a technical problem with your code as well as a problem with your mental picture of what is happening in your code."

I'd like to dive a little deeper than this.  

Most debugging lessons and tutorials that I have seen have focused on the above - namely first understanding what the code is doing before even trying to fix it.

This seems logical, but it forgets that fact that a true newbie might be totally lost in the woods.  Even if a newbie can understand what is going on in the code (a big if), this programmer might not have the skills to solve the problem.  Going beyond this, all of the steps that "worked" previously, might in fact be the cause of the current problem.  The newbie has no way of knowing whats going on.

Additionally, unless the newbie is in a course, or has another network to rely on, he or she is all alone to find the "bug".  This can end up being a hopeless endeavor.

This brings be back to my early point, which was the importance of finding projects at the right difficulty level.  Additionally, the newbie either needs to know how to find answers online (StackOverflow for instance), or needs a network of people to call on for assistance).  Otherwise there will be a string of failed projects.  


## Algorithms

Programming is all about writing algorithms.

An algorithm is a sequential list of instructions that solves a particular problem.  Incremental development should make it easier to write an algorithm that implements your idea.

(I have been wondering about the algorithm development process. How does one get good at developing basic algorithms, like the ones above for Space Invaders? Does it come with practice in programming? Is it an innate skill that people have, that perhaps they can hone - people who are good at math and logic games naturally become more adept at learning to write algorithms?  If you have taken a long break from doing anything quantitative, for instance adult learners, would they benefit from a crash course in Precalculus, or even Philosophy, to hone their logical thinking skills?  From a first principles perspective, how do you write those first lines of pseudocode that lead to a larger program? Is there a way to teach that, besides "write an algorithm to provide instructions on how to brush your teeth - this book's first exercise?)

See [this link](https://github.com/danweiner/learning-p5-js/blob/master/intro/touthbrush.txt) for my answer to toothbrushing algorithm exercise.


## Detour 1 - GitHub and Command Line

If you found this page, you must at least know how to find GitHub.  You might even have a GitHub profile.  Those are a good first steps.

Check out [this video series](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV) by Dan Shiffman for a introduction to GitHub and Command Line.

I remember being very intimidated the first time working with Terminal.  That was a big deal for me.  The first real turning point towards being a "real" programmer.  Maybe you'll feel similarly.


# Chapters 1 - 3

[Watch](https://www.youtube.com/watch?v=D1ELEeIs0j8&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=3) Foundations of Programming in JavaScript - p5.js, videos 1.3 - 2.1.  This covers drawing basics (shapes and colors), uploading p5.js sketches, and mouseX and mouseY variables.

[Here](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp01_drawing) are Dan Shiffman repos for drawing basic shapes.  Note that these initial examples are written in the "setup" function.  This is because Dan is trying to follow the order of the book, where "static" sketches are taught first, and "flow" isn't introduced until chapter 3.

[Here](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp02_processing/example_02_01_zoog) is Dan's static alien character sketch called "Zoog".

See [this link](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp03_flow/example_03_01_setupdraw) for "Zoog" using setup and draw functions.

See [this link](https://github.com/danweiner/learning-p5-js/tree/master/ch-1-3/fido) for my first sketch in p5.js.  I have used the setup and draw functions.  The only shape functions I used were ellipses and rects.  I drew a dog called "Fido".

## Detour 3 - Translate, Rotate, Push, and Pop

Unlike "Zoog", my drawing required a special feature - rectangle shaped ears that were rotated related to the screen.  This relates back to a previous point that I made - not knowing what you're getting yourself into before starting a project.  I searched for "draw dog with simple shapes", found an image online of a dog made of circles and rectangles, and thought I could draw this in p5.js.  Of course it's not that easy.

In programming, [nothing is simple](https://medium.freecodecamp.org/one-does-not-simply-learn-to-code-f25bacdc5b62).  There is never a straight line to follow.  Everything that seems simple always becomes complicated.  Infinitely more so when you're a beginner and you are struggling to know where to begin the troubleshooting process.

Maybe some books on Zen and enjoying frustration / seeing obstacles as opportunities would be useful in a coding curriculum.  I've heard Prof. Eric Grimson of MIT use the phrase "opportunities for challenges".  Maybe that's a mindset any coder needs to embrace.  Something else to think about.

Luckily, I had already struggled a bit with transformations, rotations, push, and pop, so this was not completely foreign territory to me.  I was able to draw my sketch, rotated ears and all.  I wonder if this will affect future projects in future chapters.  That's always the worry.

See these Coding Train videos for Dan's lessons on [rotating images](https://www.youtube.com/watch?v=o9sgjuh-CBM).







 


