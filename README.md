# learning-p5-js

# Table of Contents  
[Introduction](#introduction)  
- [What is p5.js?](#what-is-p5js)  
- [Incremental Development](#incremental-development)
- [Debugging](#debugging)
- [Algorithms](#algorithms)
- [Detour 1 - GitHub and Command Line](#detour-1---github-and-command-line)

[Lesson 1 - The Beginning](#lesson-1---the-beginning)
- [Basics of Drawing](#basics-of-drawing)
-  [Interaction](#interaction)
	- [Dynamic Sketches - Setup and Draw](#dynamic-sketches---setup-and-draw)
	- [Variations with the Mouse](#variations-with-the-mouse)
	- [Detour 2 - Translate, Rotate, Push, and Pop](#detour-2---translate-rotate-push-and-pop)
	- [pmouseX and pmouseY](#pmousex-and-pmousey)
	- [Mouse Clicks and Key Presses](#mouse-clicks-and-key-presses)
- [Lesson 1 Project](#lesson-1-project)

[Lesson 2 - Everything you need to know](#lesson-2---everything-you-need-to-know)
- [Chapter 4 - Variables](#chapter-4---variables)
	- [What is a Variable?](#what-is-a-variable)
	- [Exercise 4.1 Variables in Pong](#exercise-41-variables-i-pong)
	- [Declaring, Initializing, and Using Variables](#declaring-initializing-and-using-variables)
	- [System Variables](#system-variables)
	- [Detour 3 - Workflow](#detour-3---workflow)
	- [JavaScript Objects](#javascript-objects)
	- [Detour 4 - Table of Contents in Markdown](#detour-4---table-of-contents-in-markdown)
	- [Detour 1a - More GitHub](#detour-1a---more-github)
	- [The map() function](#the-map-function)
	- [Random: Variety is the spice of life](#random-variety-is-the-spice-of-life)
- [Chapter 5 - Conditionals](#chapter-5---conditionals)
	- [Boolean Expressions](#boolean-expressions)
	- [Conditionals: If, Else, Else If](#conditionals-if-else-else-if)
	- [Conditionals in a Sketch](#conditionals-in-a-sketch)
	- [Multiple Rollovers](#multiple-rollovers)
	- [Boolean Variables](#boolean-variables)
	- [Bouncing Ball](#bouncing-ball)
	- [Physics 101](#physics-101)
- [Chapter 6 - Loops](#chapter-6---loops)
	- [What is iteration?](#what-is-iteration)
	- [While loops](#while-loops)
	- [Exit Conditions](#exit-conditions)
	- [For loop](#for-loop)
	- [Variable Scope](#variable-scope)
	- [Loop inside the main loop](#loop-inside-the-main-loop)

[Lesson 3 - Organization](#lesson-3---organization)
- [Chapter 7 - Functions](#chapter-7---functions)
	- [Break it down](#break-it-down)
	- [User defined functions](#User-defined-functions)
	- [Defining a function](#defining-a-function)
	- [Simple Modularity](#simple-modularity)
	- [Arguments](#arguments)
	- [Passing a copy](#passing-a-copy)
	- [Return Type](#return-type)
	- [Zoog Reorganization](#zoog-reorganization)
- [Objects](#objects)
	- [Object Oriented Programming](#object-oriented-programming)
	- [Using an Object](#using-an-object)
	- [Writing the Cookie Cutter](#writing-the-cookie-cutter)
	- [Using an Object: The Details](#using-an-object-the-details) 
	- [Putting it all together](#putting-it-all-together)
	- [Constructor Arguments](#constructor-arguments)
	- [Objects are data types](#objects-are-data-types)
	- [Object-Oriented Zoog](#object---oriented-zoog)

[Lesson 4 - More of the Same](#lesson-4---more-of-the-same)
- [Arrays](#arrays)
	- [Arrays - Why do we care?](#arrays---why-do-we-care)
	- [What is an array?](#what-is-an-array)
	- [Declaring and Creating an Array](declaring-and-creating-an-array)
	- [Initializing an Array](#initializing-an-array)
	- [Array Operations](#array-operations)
	- [Simple Array Example: The Snake](#simple-array-example-the-snake)
	- [Array of objects](#array-of-objects)
	- [Interactive Objects](#interactive-objects)

# Introduction

[Learning Processing](http://learningprocessing.com/) is an introductory workbook/textbook for [Processing](https://processing.org/), which is built on top of Java.

There, however, is no Learning p5.js book, meaning there is no JavaScript-based version of Learning Processing.  There is just the Dan Shiffman repo of Learning Processing code ported to [p5.js](https://p5js.org/). Although [this book](https://www.springer.com/us/book/9781484234259?gclid=CjwKCAiA8bnUBRA-EiwAc0hZk7BwWdTn-f-2ELGoh1CwFpMvYHrMZH-0kV553OsjfIXqBFbaHyGQqxoCPkIQAvD_BwE#aboutBook) looks like it might be on target and [this book](https://p5js.org/books/) is often recommended as an introduction to p5.js.

This repo is an attempt to solve that problem.  I will go through the Learning Processing book, link to the appropriate Shiffman p5.js repos from the Learning Processing book, link to the most relevant Coding Train videos, and post my own code for the exercises. 

I will also have the occasional "detour" when relevant topics come up that aren't covered in the book.  For instance, Command Line, using GitHub, etc.  These "detours" might end up overwhelming the initial goal of the project, but we'll see.


I think this will be helpful for my learning process, and I hope it's helpful to anyone else who stumbles across this repo.

I'm beginning to think this may become an open source project similar to [The Odin Project](https://www.theodinproject.com/) or [freeCodeCamp](https://www.freecodecamp.org/).

Maybe a section could go here on Logo, Seymour Papert, and the history of visual ways of learning to code?  That [inspired](https://www.wired.com/2013/10/processing-2-0-a-short-introduction/) Processing in the first place.

See also [Design by numbers](https://mitpress.mit.edu/books/design-numbers) by John Maeda - tying together the arts and technology, and viewing the computer as an artistic medium in its own right.

This video on [responsive programming](https://vimeo.com/36579366) inspired John Resig's [curriculum at Khan Academy](https://johnresig.com/blog/introducing-khan-cs/).

Is p5.js currently working on responsive programming?  I think I might have seen a video about that.  Check video on brickbreaker from Dan Shiffman.

D is for digital. [Princeton course](http://www.cs.princeton.edu/courses/archive/fall14/cos109/) that uses this book.  Newer [class website](https://www.cs.princeton.edu/courses/archive/fall17/cos109/).  [Understanding the Digital World](http://www.kernighan.org/#) looks like the updated version of D is for Digital.
	- Interestingly, there are no laptops allowed in this introductory class, even though it's a class on coding

Bret Victor's [critique](https://johnresig.com/blog/introducing-khan-cs/) of Khan Academy and Processing is also very enlightening.  It's very long.  I'll have to read it a few times.

Some notes from the article:
- environment should make meaning transparent
- environment should explain in context - show and tell - label things
- should be able to see the steps (like [Python tutor](http://pythontutor.com/))
- make flow visible (also a feature of Python tutor I think)
- make time visible - flatten time - "One of the deepest and most powerful ideas in mathematics is the relationship between a differential formulation (such as a step-by-step process, like our "draw" function) and its integrated form (such as a function of time, or plot over time). "Flattening time" allows the learner to see the process and its trajectory as two representations of the same thing, and thereby think of them interchangeably."
- make flow tangible, visible, and represent time at multiple granularities
- show the data (variable values) - most important thing you can do in creating a programming environment for learning is *show the data*
- *Code manipulates data. To understand code, a learner must see the data, and see the effect of code on the data.*
- Edward Tufte rule #2 - show the comparisons
- Processing has implicit state - "current" fll color 	
	- answer is to either show or elimimate the state
	- transform is also invisible - this wasn't the case with Logo's turtle
- Programmer must be able to react to a work in progress - not imagine all code in his/her head - "create-by-reacting" - external imagination - thoughts immediately visible
	- using autocomplete - "Strangely, I don't actually know of any APIs that are intentionally designed with autocomplete in mind. I do know many APIs, such as Processing, that are designed for brevity, which is irrelevant in an environment with good autocomplete"
	- "I am very uncomfortable with the Khan Academy approach of encouraging learners to adjust unlabeled numbers and figure out what they're for, and I feel that this is a case of a tool being adopted without an understanding of what purpose the tool serves."
- Creating by abstracting - learning programming is learning abstraction
	- you don't learn abstraction - you write concrete code then gradually change it to introduce abstraction, and the environment must provide understandable tools for the learner
	- "At each stage, the programmer has interactive control over the relevant parameters, but the parameters are at successively higher levels of abstraction. That is, the programmer can still create by reacting, but she's creating and reacting at higher levels."
	- start constant, then vary
	- start with one, then make many
- A programming system has two parts - the environment is installed on the computer, and the language lives in the programmer's head
	- the design of the language is critical for the programmer's way of thinking
	- programming systems should be designed around the way prople think and learn - Seymour Papert "Mindstorms"
	- Four programming systems designed for learning
		- Logo - identify with the turtle
		- Smalltalk - objects sending and receiving messages
		- Hypercard - Recomposition
			- What the web should have been? Create a website by copying and pasting graphical objects from other websites?
		- Rocky's Boots
		- Forth (decomposability)
	- Processing's core metaphor is the "painter's algorithm" - computer places a series of shapes on the screen, like drawing on paper
		- lacks modularity
		- language does not encouage combining two programs
		- dependence on global state hinders even simplest forms of recomposition
	- Modularity - breaking down a complex thing into understandable chunks - is essential for understanding
	- Etoys as a genuine learning environent? Every onscreen object is a living thing
	- Programming language must encourage recomposition
		- "Designing a system that supports recomposition demands long and careful thought, and design decisions that make programming more convenient for individuals may be detrimental to social creation."
- Readability - a learner must be able to look at a line of code and know what it means
	- syntax and context matter
- Checklist for programming system for learning:
	- environment
		- readable vocab
		- follow the flow
		- see the state (data)
		- create by reacting
		- create by abstracting
	- language
		- identity and metaphor
		- decomposition
		- recomposition
		- readability
- "Programming has to work like this. Programmers must be able to read the vocabulary, follow the flow, and see the state. Programmers have to create by reacting and create by abstracting. Assume that these are requirements. Given these requirements, how do we redesign programming?"
- "A better question is: How do we design a new programming model that does allow for continuous change? We already have clear hints." 
	- Smalltalk and Clojure
- "Visualize data, not code. Dynamic behavior, not static structure."

## What is p5.js?

See [this Coding Train video](https://www.youtube.com/watch?v=8j0UDiN7my4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) for Dan Shiffman's explanation of the origin of p5.js, and how to get started coding with p5.js.

Note that the above video references an editor for download that has since been [deprecated](https://github.com/processing/p5.js-editor).

Dan Shiffman's [next video](https://www.youtube.com/watch?v=HZ4D3wDRaec&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2) is about a p5.js workflow, meaning how to download the project files, how to setup node.js and package manager, and how to run a local server on your computer.  I plan on going through all these steps later, but for now, I'm going to use the [online editor](https://alpha.editor.p5js.org/).

learning graphical coordinates might be difficult.  0,0 in top left

Processing (2001) - started by Casey Reas and Ben Fry - created a tool to help them with their own work at MIT (derived from Design by numbers at MIT Media Lab)

“Creative Coding” - creative apps through coding - creative expression through computational tools

Learning to program is powerful - dont have to be stuck using software that others have created - can make your own

Also can publish and distribute your creations on the web
Processing used Java - something called applets - would run in the web browser - made sense then

Doesn’t make sense now - error message city
Language of the web is JavaScript	

New project - if Processing were being created today - what language would you pick?

Lauren McCarthy - JavaScript

Processing.js - not to be confused - John Resig - Java translated to JavaScript

Resig created jQuery and Khan Academy coding curriculum
So - p5.js is a simple, beginner friendly environment to learn JavaScript, to make applications (creative expressions) happen in the browser

To make thing happen in the browser, you also need HTML, CSS, but we’ll leave that for later

Processing was “built on top of Java”

P5.js is a “library” of functions

If you want to learn javascript there are a million resources - stack overflow, jquery, articles, books

P5.js is a sandbox, walled garden

You get a set of functions to use to learn some of the beginner steps of programming


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

Dans video on println from processing. Reminds me that other processing videos might be useful.

[Chrome debugging](https://developers.google.com/web/tools/chrome-devtools/javascript/) tools in DevTools


## Algorithms

Programming is all about writing algorithms.

An algorithm is a sequential list of instructions that solves a particular problem.  Incremental development should make it easier to write an algorithm that implements your idea.

(I have been wondering about the algorithm development process. How does one get good at developing basic algorithms, like the ones above for Space Invaders? Does it come with practice in programming? Is it an innate skill that people have, that perhaps they can hone - people who are good at math and logic games naturally become more adept at learning to write algorithms?  If you have taken a long break from doing anything quantitative, for instance adult learners, would they benefit from a crash course in Precalculus, or even Philosophy, to hone their logical thinking skills?  From a first principles perspective, how do you write those first lines of pseudocode that lead to a larger program? Is there a way to teach that, besides "write an algorithm to provide instructions on how to brush your teeth - this book's first exercise?)

See [this link](https://github.com/danweiner/learning-p5-js/blob/master/intro/touthbrush.txt) for my answer to toothbrushing algorithm exercise.


## Detour 1 - GitHub and Command Line

If you found this page, you must at least know how to find GitHub.  You might even have a GitHub profile.  Those are a good first steps.

Check out [this video series](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV) by Dan Shiffman for a introduction to GitHub and Command Line.

I remember being very intimidated the first time working with Terminal.  That was a big deal for me.  The first real turning point towards being a "real" programmer.  Maybe you'll feel similarly.


# Lesson 1 - The Beginning

[Watch](https://www.youtube.com/watch?v=D1ELEeIs0j8&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=3) Foundations of Programming in JavaScript - p5.js, videos 1.3 - 2.1.  This covers pixels, drawing basics (shapes and colors), uploading p5.js sketches, and mouseX and mouseY variables.

## Basics of Drawing 

[Here](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp01_drawing) are Dan Shiffman's repos for drawing basic shapes.  Note that these initial examples are written in the "setup" function.  This is because Dan is trying to follow the order of the book, where "static" sketches are taught first, and "flow" isn't introduced until chapter 3.

[Here](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp02_processing/example_02_01_zoog) is Dan's static alien character sketch called "Zoog".

## Interaction

### Dynamic Sketches - Setup and Draw

Software happens over a *period of time* - we'll call this *flow*.

What is *Setup*?
- The set of initial conditions (in a game for instance - character name, score of zero, level 1...)
- This only happens one time

What is *Draw*?
- Happens after setup
- This cycles over and over again (ideally more than 30 times per second for smooth animation)
- In a game, this could be checking mouse moves, calculating behaviors of game characters, updating screen to render game graphics..
-This runs until the program quits

See [this link](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp03_flow/example_03_01_setupdraw) for "Zoog" using setup and draw functions.

See [this link](https://github.com/danweiner/learning-p5-js/tree/master/ch-1-3/fido) for my first sketch in p5.js.  This was Exercise 3.2 in the Learning Processing book.  I have used the setup and draw functions.  The only shape functions I used were ellipses and rects.  I drew a dog called "Fido".

### Variations with the Mouse

Instead of typing numbers into our functions (rect, ellipse), we can type mouseX and mouseY - indicating the horizontal and vertical position of the mouse cursor.

Dan points out an interesting example of what happens when you place background in setup instead of draw.  He also discusses this in one of his videos.  If you place background in setup instead of draw, background is only drawn once.  This can be a good thing or a bad thing, depending on the intent of your program.  If you mean to design a painting program, this is great, because background is only drawn once, and every subsequent drawing function will be displayed on the canvas.  For instance, when that shape is moved, you will see a long trail of every time that shape is drawn on the canvas.  If you dont intendto show every time the shape is drawn on the canvas, you will need to put background into the draw function, so the background is redrawn each time the other shapes are inside draw.  As always, Dan does a better job of explaining this than I ever could.

The next exercise is to make our drawing move with the mouse.  Dan's [sketch](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp03_flow/exercise_03_04_Zoog_mouse) is here.  

My [example](https://github.com/danweiner/learning-p5-js/tree/master/ch-1-3/ex-3.5-mouse_fido) is here.  Note that the book also mentions to vary the color depending on the mouse position, so I used colorMode() to make the min RGB the width of 0, and max RGB the canvas width, then I changed the fill of the eyes and noses depending on mouseX.

I struggled with this exercise a bit at first.  In particular, I struggled because I used push() and pop() for my sketch's rotated "ears" - see below.

Only after watching Dan's video on translate, rotate, etc, and translating the entire sketch (see this [repo](https://github.com/danweiner/learning-p5-js/tree/master/ch-1-3/fido_translate) first), was I able to complete exercise 3.5.

Note that Dan also has a sketch using [translate](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp03_flow/example_03_07_translated_zoog), even though I don't think this is mentioned in the book.  

### Detour 2 - Translate, Rotate, Push, and Pop

Unlike "Zoog", my drawing required a special feature - rectangle shaped ears that were rotated related to the screen.  This relates back to a previous point that I made - not knowing what you're getting yourself into before starting a project.  I searched for "draw dog with simple shapes", found an image online of a dog made of circles and rectangles, and thought I could draw this in p5.js.  Of course it's not that easy.

In programming, [nothing is simple](https://medium.freecodecamp.org/one-does-not-simply-learn-to-code-f25bacdc5b62).  There is never a straight line to follow.  Everything that seems simple always becomes complicated.  Infinitely more so when you're a beginner and you are struggling to know where to begin the troubleshooting process.

Maybe some books on Zen and enjoying frustration / seeing obstacles as opportunities would be useful in a coding curriculum.  I've heard Prof. Eric Grimson of MIT use the phrase "opportunities for challenges".  Maybe that's a mindset any coder needs to embrace.  Something else to think about.

Luckily, I had already struggled a bit with transformations, rotations, push, and pop, so this was not completely foreign territory to me.  I was able to draw my sketch, rotated ears and all.  I wonder if this will affect future projects in future chapters.  That's always the worry.

See these Coding Train videos for Dan's lessons on [rotating images](https://www.youtube.com/watch?v=o9sgjuh-CBM).

### pmouseX and pmouseY

These stand for "previous" mouseX and mouseY locations, meaning the last place the mouse was when we cycled through draw.

Examples of using pmouseX and pmouseY:
- draw a [continuous line](https://github.com/danweiner/learning-p5-js/tree/master/lesson-1/example-3.4-continuousline) - example 3.4
- Exercise 3.7 - write a [program](https://github.com/danweiner/learning-p5-js/tree/master/lesson-1/example-absval) where the faster the user moves the mouse,
the wider the line is drawn. Hint: look up strokeWeight( ) in the
p5.js reference.
  - The formula for calculating the speed of the mouse’s horizontal motion is the
absolute value of the difference between mouseX and pmouseX. The absolute value of a
number is defined as that number without its sign
  - The speed at which the mouse is moving is therefore:
  - abs(mouseX - pmouseX )

### Mouse Clicks and Key Presses

Mouse clicks are *events* - this means adding a new function separate from setup and draw

This new function will tell the program what code to execute when an event occurs.

Similar to setup, it will occur once and only once - for each occurence of the event - that event can of course happen multiple times over the course of the program.

Two new functions:
- mousePressed() - mouse clicks
- keyPressed() - key presses

This example demonstrates [both event functions](https://github.com/danweiner/learning-p5-js/tree/master/lesson-1/example-3.5-events) - adding squares whenever the ouse is pressed and clearing the background when a key is pressed.

frameRate() requires a integer between 1 and 60 and enforces the speed at which p5.js will cycle through draw().  frameRate(30) means 30 frames per second, the traditional speed for computer animation.  If you don't include frameRate(), p5 will attempt to run the sketch at 60 frames per second.  Since computers run at different speeds, framerate() is used to make sure that your sketch is consistent across multiple computers.

Here is Dan's [sketch](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp03_flow/example_03_06_interactive_zoog) of interactive Zoog.  Zoog's entire body follows the mouse.  Its eye color is determined by the mouse location.  Its legs are drawn from the previous mouse location to the current mouse location.  Finally, when the mouse is clicked, the message is displayed in the console: "Take me to your leader!"

## Lesson 1 Project

The final project for this lesson is to draw a new sketch using everything we've learned from chapters 1 through 3.

This must include RGB colors, shapes, setup and draw, and some interaction using the mousePressed() or keyPressed() functions.

I drew a [sketch](https://github.com/danweiner/learning-p5-js/tree/master/lesson-1/lesson-1-project) of a house where the original scene is daytime, but when the mouse is pressed, it changes to nighttime.

I would need a variable to change it back to daytime with another mouse click, but that's the subject for the next lessons.

I also thought about using loops for things like drawing stars, and using the random function, but I decided to wait on that until those are brought up in the book.


# Lesson 2 - Everything you need to know

This section covers:
- Variables
- Conditionals
- Loops

## Chapter 4 - Variables

Overview:
- Variables: What are they?
- Declaring and initializing variables
- Common uses for variables
- "Built-in" variables
- Using random values for variables

This [video](https://www.youtube.com/watch?v=Bn_B3T_Vbxs&t=87s) is Dan's introduction to variables in p5.js.

### What is a Variable?

A laundry list of analogies to describe variables:
- a storage locker
- a bucket
- a post-it note

(Note how the lawyers in this $9 billion [case](https://motherboard.vice.com/en_us/article/yp33dy/googles-lawyers-tried-to-explain-apis-to-a-jury-using-a-physical-filing-cabinet) tried to compare Java's APIs to a filing cabinet.  Explaining tech is hard.  That's why Coding Train is so great.)

The computer has memory.  A variable is a *named pointer* to a location in the computer's memory (a "memory address") where data is stored.

Computers only process one instruction at a time.  So, a variable allows a programmer to *save information* from one point in the program, and refer back to it at a later time.

Examples:
- variables can keep track of info related to shapes - color size, location
- make a triange change from blue to purple
- make a rectangle move across the screen
- make an ellipse shrink into nothingness

Dan say's he prefers the *piece of paper* approach: graph paper.  

Imagine the computer's memory as a sheet of graph paper, and each cell on the graph paper has an address.  With variables, we can name each of these cells.  

Let's name one "Dan's score" and give it the value of 100.  Then, when we want to use "Dan's score" in a progran, it's right there in memory.  We can just ask for it by the name "Dan's score".

The whole point of variables is that they *vary*.  

### Exercise 4.1 Variables in Pong

List of possible variables:
- Player 1 score
- Player 2 score
- time
- ball position (tracking ball movement)
- paddle position (tracking paddle movement)

Dan's [coding challenge](https://www.youtube.com/watch?v=IIrC5Qcb2G4) for Pong.

### Declaring, Initializing, and Using Variables

It's best to refer to Dan's video on variables, linked above.  The book discusses variables in Java, which have similarities, but can still be confusing because of the need to declare variable types.

Dan's first example, moving a circle across the screen, has a valuable lesson for debugging.  He repeats this phrase over and over, in slightly different versions.  "Let's predent we are the computer."  Or "be one with the computer."

I've written the [example](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/variables) here.  Even though this code is fairly straightforward, it's getting the student to start thinking like the computer. Thinking methodically, step by step, about how the computer is executing the code.  This will be crucial as code gets more complex.

Note how he also discusses the assignment operation in:

```circleX = circleX + 1```

It is difficult to think of this as an assignment operation (rather than "equals"), where the right side is evaluated and then "assigned" to the left side, but this is a critical concept to learn up front.

Examples [4.3](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/example-4.3) and [4.4](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/example-4.4) use variables to change the size, color, and location of shapes.

Exercises [4.4](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/exercise-4.4) for more practice with variables.

Dan is smart to have students first draw these sketches with hard coded values before replacing these values with variables.  Always start with the basics - make sure to get the basic drawing right first then move on to something a little more advanced like a new concept.


### System Variables

Just like mouseX and mouseY - these are commonly needed pieces of data associated with all sketches (width of window, key pressed on keyboard, etc.)

Avoid using system variable names when naming your own variables.

Commonly used system variables:
- width: Width (in pixels) of sketch window
- height: Height (in pixels) of sketch window
- frameCount: Number of frames processed
- frameRate: Rate that frames are processed (per second)
- screen.width: Width (in pixels) of entire screen
- screen.height: Height (in pixels) of entire screen
- key: most recent key pressed on keyboard
- keyCode: Numeric code for key pressed on keyboard
- keyPressed: True or false? Is a key pressed?
- mousePressed: True of false? Is the mouse pressed?
- mouseButton: Which button is pressed? Left, right, or center?

Here's an example using [system variables](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/example-4.5).

I don't think this is covered by any Coding Train videos.  See the videos above about mouseX and making your own variables.

Exercise 4.5, getting the shapes to resize themselves relative to the window size, did not work in the online editor.  I tried my code, and Dan's code in the learning p5.js repo.  I think the code might have worked in the deprecated p5.js editor (when a separate canvas launches, which can then be resized - similar to what happens with processing), but this does not happen with the online editor.

This was the [best answer](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/resize) I could come up with.  I used windowWidth and windowHeight, instead of width and height (which are suggested in the book).  

In any event, this seemed like a good time for a detour.  I will now go through Dan's [workflow](https://www.youtube.com/watch?v=HZ4D3wDRaec&index=2&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) video to see if this code works in the browser on a local server.  It will also be a good test to see if I can execute the steps in his workflow video.  Here we go.

### Detour 3 - Workflow

First note - I could also try codepen.  I'll do that after this video.  Dan also mentioned Glitch.  I'll look into that as well.

Note that I'm using Sublime Text instead of Atom, so I downloaded the package [SublimeServer](http://learningcn.com/SublimeServer/) to turn Sublime into a server.  I remember I needed to first install [Package Control](https://packagecontrol.io/installation) in order to download things like SublimeServer.  If you're new to programming, you could definitely get stuck at this stage because it's confusing to navigate these kinds of setup details.

SublimeServer also does live reload, just like Dan's example in Atom.

This was successful - I even troubleshot package manager with Sublime Text.  :)

A few commands to remember:

```
p5 generate -b myproject

(node) http-server

python -m SimpleHTTPServer

```

### JavaScript Objects

The next section in the book Learning Processing is about using the random() function, but Coding Train has two videos before this.  One about [JavaScript Objects](https://www.youtube.com/watch?v=-e5h4IGKZRY&index=8&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) and the other about the [map function](https://www.youtube.com/watch?v=nicMAoW6u1g&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=9).  I'll follow the Coding Train curriculum and address these subjects before moving on to random().

Dan sets up an example of using variables and moving an ellipse across the screen.

He then uses an object to organize the variables.  This sets a foundation for later, makes code more tidy, and keeps track of what you're creating.

```
var x = 0;
var y = 100;
var diameter = 50;

//becomes...

var circle = {
	x: 0,
	y: 100;
	diameter: 50
};

```

This is JavaScript object notation.  We can access the circle's *data*.

We access this data using dot notation.  

`ellipse(circle.x, circle.y, circle.diameter, circle.diameter)`

The exercise is to reorganize our code using objects.  Here is [example 4.4 using objects](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/objects).

Dan also notes in this video that we should get very used to seeing error messages when writing code.  This is absolutely true.  How to debug those error messages is another story altogether...

### Detour 4 - Table of Contents in Markdown

This markdown file is getting very long.  I felt that it necessitated a table of contents.  

I could probably also add a detour about the [basics of markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), but I'll skip that for now.

I was proud of myself that I was able to troubleshoot creating a table of contents in markdown.  I probably did not find the best way - maybe some kind of [javascript/node.js tool](https://github.com/jonschlinkert/markdown-toc) is more efficient - but for now I found a way that works.  And that's good enough.

This was also a good experience in troubleshooting with googling for answers, and finding relevant StackOverflow articles.  I needed to read a couple of different articles, and eventually, by putting together useful pieces of information from both of them, I made the table of contents work.  

Here are the [two](https://stackoverflow.com/questions/11948245/markdown-to-create-pages-and-table-of-contents) [articles](https://stackoverflow.com/questions/18244417/how-do-i-create-some-kind-of-table-of-content-in-github-wiki) from StackOverflow that I found helpful.

Additionally, here is sample code from my table of contents:

```
# Table of contents 
  
[Introduction](#introduction)  
- [What is p5.js?](#what-is-p5js)  
- [Incremental Development](#incremental-development)
```

So, why does this code work? 

If you hover over a Header in a GitHub Markdown file, you'll see a little icon appear, and then if you hover over that icon, you'll see the link itself at the bottom left of the screen. The format for that link is `<project URL#<header name>`. 

You can use that `#<header name>` in the parentheses part of table of contents to link to the connected Headers. You can put any text in the brackets - this is the text that will actually display on the page.

Note that these header names are in "slugified form" - meaning that they are all in lower case, with spaces replaced by '-', and with all punctuation removed.

For instance, Incremental Development becomes "incremental-development" and What is p5.js? becomes "what-is-p5js".

### Detour 1a - More GitHub

Just a note to self that I'll have to return to learn more about Git and GitHub.

I foresee this being a potential problem down the road as I develop larger projects.

I just almost got into some issues with `git stash`.  That almost led to a Git rabbit hole, with me resolving Git conflicts that may or may not have existed, with upstream changes that I dont really understand.

I'll leave this on the backburner for now, but I know that this is important, and potentially a major hurdle.

Just to do a quick recap of what I encountered so I don't forget.

I remembered that I run `git stash` at some point (following along with a Git error message I had received), so I decided to Google git stash to find out what git stash even means.

I then ran a series of commands, including `git stash list`, `git stash apply` and `git stash show`.  

It turned out I had a merge conflict in my README.md file.

I tried to resolve the conflict in Sublime, but somehow whatever I was doing wasn't working.  

I watched Dan's video on [merge conflicts](https://www.youtube.com/watch?v=JtIX3HJKwfo&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV&index=9).

I copy and pasted my error message into Google and that didn't help - it just led to the Git rabbit hole (Git rebase?!).

I even ran `git reset --hard` at one point.  I'm not sure if that did anything to help.

Ultimately, upon inspecting the merge conflict itself, it didnt really look like a conflict at all.  I couldn't see any changes that I needed to make.  So I ran `git stash clear` which got rid of the stashed away commit.  It didn't look like I had stashed anything important.

This ultimately solved the issue.

I don't know if this sort of hack away and try everything approach is ok - maybe it is - but it's a little nerve-wracking.  

I remember being told that when learning development, you have to be ok with "breaking things".  In this case, I interpreted that to mean, you have to be ok with messing with your code, with the risk that you'll "screw things up", only to have to go back and fix it later.  It's scary when you're new to coding and you feel that you don't have to the tools to fix what you've "broken", but I guess you can only develop those tools by "breaking" a lot of things and then trying to put them back together.

See the Carol Dweck [TED talk](https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve) on the growth mindset and this TED radiohour podcast on the [Nudge](https://www.npr.org/programs/ted-radio-hour/483080945/nudge) technique for changing habits for more strategies on breaking out of your comfort zone and becoming comfortable with taking risks.

I'm beginning to think that my thoughts on Zen and deliberate practice might stem from being stuck in a fixed mindset.  If I can continue to try to see challenges as opportunities, I will maybe be more successful on my coding journey (or maybe just be less frustrated by what I've been considering "setbacks" or "roadblocks").

Also, listen to this [freakonomics radio podcast](http://freakonomics.com/podcast/project-management/) on why you always finish projects late.  You may think you can learn to program in six months, or a year, but maybe it will take you thre or four years.  There is something called the planning fallacy where we tend to underestimate how long projects will take.  This is related to being overly optimistic about our chances of success about the projects we undertake.  This is directly related to coding.  We think it will take shorter than it actually will to learn to code, and we're overly optimistic about our ability to learn to code in the first place.

### The map() function

Here's Dan's video on the [map() function](https://www.youtube.com/watch?v=nicMAoW6u1g&t=33s).

Example - as you move the mouse across the screen, background color changes from black (RGB(0)) to white (RGB(255)).  

Let's also say the canvas has dimensions of 600 width x 400 height.

So mouseX has a range of 0 to 600.  And RGB has a range of 0 to 255. So we have to *map* the mouseX range to the RGB range.  When mouseX = 0, RGB = 0, and when mouseX = 600, RGB = 255.

Syntax:

`col = map(mouseX, 0, 600, 0, 255)`

Here's Dan's [code](https://github.com/CodingTrain/website/blob/master/Tutorials/P5JS/p5.js/02/2.4_p5.js_map/sketch.js) using the map function

This [example](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/map) is the same as my [variables](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/variables) example, except I use the map function to make the background change from black to white as the the mouse moves from the left side of the canvas to the right.


### Random: Variety is the spice of life

Here is Dan's [video](https://www.youtube.com/watch?v=nfmV2kuQKwA&index=10&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) on random().

Think back to incremental development - learn the fundamentals by looking at individual pieces - programs that do one and only one thing.  Then begin to add functionality on top, step by step.

random() returns a value - abs() does the same thing - more on this in Chapter 7.

We have learned how to make one circle, at a particular location, with a particular size and fill, using variables.

If we want to make a new circle, with a random size, color, and position, every time through draw(), we can use the *random()* function.

The [random() function in p5.js](https://p5js.org/reference/#/p5/random) returns a floating point (or decimal) value.  The book and Processing website talk about [casting these returned](https://processing.org/reference/random_.html) values to integers if you want to return an integer instead of a float.

In JavaScript, I believe you would use a function such as [Math.floor()](https://www.w3schools.com/jsref/jsref_random.asp) to accomplish the same task.

I just discovered that there's an [int()](https://p5js.org/reference/#/p5/int) function in p5.js.

Another thing to note from the video - Dan's steps in *debugging*
- try to read the error message (this one was pretty cryptic)
- stay calm
- comment out the lines causing the problems (much easier to do in such a short piece of code)
- reinsert the lines of code one by one to see what was causing the problem
- when you find the code causing the problems, see if you can can fix the bug

Dan's video had a number of good exercise suggestions at the end- here's one:
- update his painting program so the background color changes to a random color with a mouse click or "paintbrush" changes color randomly as the mouse moves - here's [my version](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/random/painting-random)

Here's Dan's [dots](https://github.com/CodingTrain/website/tree/master/Tutorials/P5JS/p5.js/02/2.5_p5.js_random) example.  Note that he puts the variables into JavaScript objects.

See also this example, [random painting](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp04_variables/example_04_07_randompainting), from the book and Dan's repo, which takes every variable associated with drawing the ellipse (fill, location, size), and assigns it to a random number each cycle through draw().

When reading a book, or watching videos, it's easy to fall into a trap of being told what code is going to do and not having to think about it for yourself.

I am trying to get into the habit of reading the code and thinking through what the code is going to do before running it.  I did this with the random painting program.

In the final part of this chapter, we update our original sketches (for Dan this was "Zoog", for me this was "Fido" and the house drawing) to incorporate what we've learned - variables and the random() function.  We should even try putting variables into objects, and maybe even using map() to tie everything together.

Here's Dan's ["variable Zoog"](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp04_variables/example_04_08_zoogvars) in p5.js.

Here's my updated "Fido" with two new pieces of functionality:
- Feature 1: Fido rises from below the screen and flies into space (aboe the screen)
- Feature 2: Fido's eyes will be colored randomly as he moves

We can complete Feature 1 for Fido by taking our previous program that used mouseX and mouseY and substituting our own variables in their place. (Dan used the word "simply" here - it may be a knee-jerk reaction but I will never use the word simply when it comes to coding).  Remember the article above about the [rule of simply](https://medium.freecodecamp.org/one-does-not-simply-learn-to-code-f25bacdc5b62). 

We can implement Feature 2 by creating variables for the red, green, and blue values to plug into the fill() function.

# Chapter 5 - Conditionals

Start with [video 3.1](https://www.youtube.com/watch?v=1Osb_iGDdjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=11) from Coding train

Taking different paths

Not on using the dist() function for rollovers (might come up in later video)

Brief note on == vs === but said that might come up in videos on strings

## Boolean Expressions

Boolean test - true or false (1 or 0)

Boolean expression - evaluates to true or false

Use the current value stored in a variable in boolean expressions `(x > 20))`

```
Relational Operators
>, <, >=, <=, ==, !=
```

## Conditionals: If, Else, Else If

Conditionals are another word for boolean expressions

Introduces the concept of branching - depending on various conditions, the program can follow different paths

'''
// If the mouse is on the left side of the screen, draw a rect
// on the left side of the screen

if (mouseX < width/2) {
	fill(255); // white
	rect(0, 0, width/2, height);
}
'''

Example with else statement:

```
// If mouse on left, draw white background, otherwise
// draw black background

if (mouseX < width/2) {
	background(255);
} 	else {
	background(0);
}
```

Else if - statements evaluated in order presented.  As soon as one is found to be true, code is executed and *remaining boolean expressions are ignored*

```
// If mouse on left third, background white,
// if middle, draw gray, otherwise black

if (mouseX < width/3) {
	background(255);
}	else if (mouseX < 2*width/3) {
	background(127);
}	else {
	background(0);
}
```

[Exercise 5-1](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/ex-5.1-grades): Grading system where numbers are turned into letters
(Dan doesn't have an answer - I'll code something placing text on the screen)

I ended up using the Math.floor function and also various text functions from p5.js to display grades on the screen.

I found that I needed to declare the grade variable outside of setup, without an initial value.  Then give grade its initial value within setup, then use that value within draw.  I think this is a pattern I might need to keep following.

Note this important example from the book about how conditional statements work.  Meaning, as soon as one is found to be true, the code is executed and the remaining boolean expressions are ignored:

'''
// Determine if a number is between 0 and 25, 26 and 50, or > 50

// good code

var x = 75;

if (x > 50) {
	print(x + " is greater than 50!");
} else if (x > 25) {
	print(x + " is greater than 25!")
} else {
	print(x + " is 25 or less!")
}

// Output: 75 is greater than 50!

// Bad code

var x = 75;

if (x > 25) {
	print(x + " is greater than 25!");
} else if (x > 50) {
	print(x + " is greater than 50!")
} else {
	print(x + " is 25 or less!")
}

// Output: 75 is greater than 25!

// first conditional is true, so code executes and rest of 
// boolean expressions are ignored

'''

Another example:

'''
// If a number is 5, change it to 6.  If a number is 6, change it to 5.

// good code

var x = 5;
print("x is now: " + x);
if (x == 5) {
	x = 6;
} else if (x == 6) {
	x = 5;
}
print("x is now: " + x)

Output: "x is now: " + 6


// bad code 

var x = 5;
print("x is now: " + x);
if (x == 5) {
	x = 6;
} 
if (x == 6) {
	x = 5;
}
print("x is now: " + x)

Output: "x is now: " + 5

// This is buggy because both if statements are executed
'''

## Conditionals in a Sketch

Our program will perform different tasks based on the result of different conditions

Heres the pseudocode:
- Create variables to hold color components (r, g, b)
- Continuously draw the background based on those colors
- If mouse is on right side, increment r.  If left, decrement r
- Constrain value of r to be within 0 to 255 (this was a new concept)

Note that functions are often included in libraries because they solve common problems.  The constrain() function can be used to "constrain" the size or location of a shape, so that it does not get too big or small, or wander off of the screen.

Functions like constrain are also a great way to avoid errors and to ensure that sections of code work well together on larger projects with multiple programmers.

A more advanced example will change all three color components according to mouse location and click state (mouseIsPressed - mousePressed in processing is [mouseIsPressed](https://p5js.org/reference/#/p5/mouseIsPressed) in p5.js). Note that the system variable mouseIsPressed() is true or false depending on wheter the user is holding down the mouse button.

These [examples](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/example-5.2) [demonstrate](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/exercise-5.3) using the constrain() function

## Logical Operators

Example: If the mouse is on the right side of the screen AND the mouse is on the bottom of the screen, draw a rect in the bottom right corner.

```
if (mouseX > width/2 && mouseY > height/2) {
	fill(255);
	rect(width/2, height/2, width/2, height/2);
}
```

Logical Operators:

```
&&	(logical AND)
||	(logical OR)
! 	(logical NOT)
```

Example using logical NOT:
if (!mouseIsPressed) {
	ellipse(width/2, height/2, 100, 100);
} else {
	rect (width/2, height/2, 100, 100);
}

The above example could also be written without the logical NOT, saying:

- If the mouse is pressed, draw a square, otherwise, draw a circle

Exercise demonstrating a [simple rollover](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/exercise-5.5) using dist.

## Multiple Rollovers

Pseudocode:
- Setup:
	- window 400x400
- Draw:
	- white background
	- horizontal and vertical lines to divide window into four quadrants
	- if mouse in top left, fraw black rect in top left
	- if mouse in top right, draw black rect in top right
	- if mouse in bottom left, draw black rect in bottom left
	- if mouse in bottom right, draw black rect in bottom right

So - how do we know if the mouse is in a given corner?

The [answer](https://github.com/shiffman/LearningProcessing-p5.js/blob/master/chp05_conditionals/example_05_03_rollovers/sketch.js) uses numerical values (100 for mouseX and mouseY).  I am going to use [width and height]().

[Exercise 5.6](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/exercise-5.6): squares fade from black to white when the mouse leaves their area
- hint: you need four variables, one for each rectangle's color
(This was actually really hard)

## Boolean Variables

Making a button - a rollover that responds when clicked

Practicing learning how to program these GUI elements from scratch (bottons, rollovers, sliders) is an excellent way to learn the basics of variables and conditionals.  It also allows you to create customizable interfaces.

Boolean variables to program a button.  Boolean variables can only be true or false.

Our button example starts with one booleann variable with a starting value of false (button starts in the off state).

` var button = false `

Our sketch will turn the background white when the button is pressed, and black when it is not.

```
if (button) {
	background(255);
} else {
	background(0);
}
```

We need to combine with with checking mouse location to see if it's inside of a shape (in our example a rectangle).  If it is inside the rectangle, and the mouseIsPressed, we set the button variable to true or false accordingly.

See [this example](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp05_conditionals/example_05_04_holdbutton).

Let's make this more like a light switch.  Press the button. If the light is off, it turns on.  If it is on, it turns off.  ("toggles the switch")

We need to use the mousePressed() function here.  By definition, when the user clicks the mouse, the code inside mousePressed() is executed once and only once.

mouseIsPressed is used when you check if the mouse is being held down.

Watch Dan's video for an example of [creating a button](https://www.youtube.com/watch?v=Rk-_syQluvc&index=14&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA).  He does a very nice job of explaining all the steps of creating the button.

The example code from Coding train is better in my opinion than the p5.js ported code.  Here's [my version](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/example-5.5-button-switch) Note also that Dan mentions that we could use a function to determine if the mouse is inside of the rectangle.  We'll get to that later.

[Exercise 5.8](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/exercise-5.8-circle-move) modifies the circle move program to incorporate mousePressed().  The book only asks to make the circle move when the mouse is pressed, but I updated it so the circle stops when the mouse is pressed as well.

## Bouncing Ball

We can use conditionals to check if a shape (or something more complex like Zoog or Fido) has reached the edge of the screen, and if so make it turn around.

Write a program where a simple circle moves across the screen horizontally from left to right.  When it reaches the right edge of the screen, it reverses direction.

We need to introduce a new variable - `var speed = 1`

To make the circle move, the value of the x location should change each cycle through draw() - `x = x + speed`.

This would make the circle run off the edge of the screen.

To make it turn around, we need a conditional statement:
- If x is greater than width, reverse the speed
```
if (x > width) {
	speed = speed * -1
}
```

To make the circle bounce off of both sides of the screen, we can use the conditional OR:
- If the ball goes off the right or left edge, turn the ball around
- or, if x > width OR if x < 0, reverse speed

```
if ((x > width) || (x < 0)) {
	speed = speed * -1
}
```

See example 5.6 for the [bouncing ball](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/example-5.6-bouncing-ball).  

This exercise modifies the above example to have the ball [bounce off all the edges](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/exercise-5.9-bounce-all-edges).

I was inspired by this repo about [brickbreaker](https://github.com/CodingTrain/BrickBreaker).

The bouncing ball logic of incrementing and decrementing a variable can be aplied to also, say, make a color more red.

See this example called ["bouncing color"](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/example-5.7-bouncing-color).

Now for more complex motion - a [rectangle that follows the edges](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/example-5.8-rect-edges) of the window.

We can think of a rectangle's motion as having four possible states, numbered 0 through 3:
- 0: left to right
- 1: top to bottom
- 2: right to left
- 3: bottom to top

We use a variable to keep track of the state number and adjust the x,y coordinate of the rect according to the state.  For instance, if the state is 2, x = x - 1.

Once the rect reaches the endpoint for that state, we can change the state variable.  If state is 2, x = x - 1.  If x < 0, state = 3.

This is probably the most complicated program we've written so far.  

## Physics 101

Coding gravity with conditionals.

Gravity is a force of attraction between all masses.

Adding "acceleration" to our bouncing ball, which increases or decreases speed.  Acceleration is the rate of change of speed.  And speed is the rate of change of location.

`speed = speed + acceleration`

See this [simple gravity](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-5/example-5.9-simple-gravity) example.  I updated it adding code so the ball bounces off the edges.

# Chapter 6 - Loops

We will learn:
- the concept of iteration
- two types of loops (while and for) and when to use them
- iteration in the context of computer graphics

## What is iteration?

A generative process of repeating a set of rules or steps over and over again.

It is a *control structure*.  It is similar to conditionals (if/else), except instead of asking a yes or no to determine if a block of code should be executed *one time*, it asks a yes or no question to determing *how many times* the block of code should be *repeated*.

## While loops

There are three types of loops:
- while loop
- do-while loop
- for loop

The only loop you really ever need is a while loop, though the for loop is a convenient alternative for simple counting operations.

Do-while is rarely used so there are no examples for it.

While loops employ a boolean test condition.  If the test evaluates to true, the instructions enclosed in curly brackets are executed.  If false, we continue on to the next line of code.

See these two examples using while loops to draw [lines](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.1-lines) and [ellipses](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.1-ellipses).

## Exit Conditions

You don't want infinite loops - where the boolean test condition is always true.

To avoid an infinite loop, we must make sure that the exit condition for a loop will eventually be met.

If you have an infinite loop, force quit the program.

Dan has a kind of [confusing example](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/example-6.5-infinite-loop) of an infinite loop and how to avoid it using constrain.  Maybe his videos are clearer.

## For loop

A style of while loop whereone value is incremented repeatedly (often useful with arrays).

Example code:
```
// Start at 0 and count up to 9
for (var i = 0; i < 10; i++)

// Start at 0 and count up to 100 
for (var i = 0; i < 101; i += 10)

// Start at 100 and count down to 0 by 5
for (var i = 100; i >= 0; i -= 5)
```

For loops consist of three parts:
- Initialization: variable is initialized and declared within the body of the loop - used inside the loop as a counter (local variables)
- Boolean test: evaluates to true or false
- Iteration expression: what you want to happen with each loop cycle - executed at the end of each cycle through the loop

Here's rewriting the earlier [lines](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.2-lines) and [ellipses](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.2-ellipses) exercises using for loops.

Some very cool examples of using loops to create funky drawings.  I could never create these, but this is a good example of trying to read code then guess what it displays.  Good to see what's possible with loops and code.

[Circles](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.3/circles).  [Funky rects](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.3/funky-rects).  [Progressively darker squares](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.3/progressively-darker-squares).  This darker squares one gives a cool optical illusion that the squares are different sizes but they aren't. [Spaced squares](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.3/spaced-squares).

## Variable Scope

Local vs. Global variables

Deciding what it means to declare a variable somewhere other than the top (before setup()) and how to go about choosing the right location for declaring a variable.

Scope - some variable exist (and are accessible) throughout the entire program's life (global scope) and some live temporarily, only for the brief moment when their value is required for an instruction or calculation (local variables).

Global variables are declared at the top of the program - outside of setup() and draw().  They can be used in any line of code anywhere in the program.

Local variables are variables delared within a block of code.  These variables are only available for use within that specific block of code where it was declared (is this the same in JavaScript - I'll have to check in on this - it's not).  Dan has a video on scope in his Processing series, but not on scope related to JavaScript.  

See this video on [let vs var](https://www.youtube.com/watch?v=q8SHaDQdul0) (and even const) and this [article](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/) which discuss function and block scope for variables in JavaScript and the concept of hoisting.

## Loop inside the main loop

Display doesn't update until the end of draw() is reached.  This is critical to remember when using while and for loops. These loops serve the purpose of repeating something in the context of *one cycle* through draw().  They are a loop inside of the sketch's main loop, draw().

To display one line at a time, we need a global variable in combination with the very looping nature of draw() itself.

See [this example](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/example-6.8-lines-one-by-one) where lines display, one at a time, from y = 0 until y = height.

The next exercise is tricky.  It implements the above example but using a [for loop](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.5-line-by-line-for-loop).

 Using the loop inside draw() for interactivity.  This [code](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/example-6.9-while-loop-interactive) displays a series of rectangles, from left to right, each colored with a brightness according to its distance from the mouse.

 We can use the same principles to draw [multiple arms](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/example-zoog-arms) for Zoog.  Or draw [multiple instances of Zoog](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/zoog-multiples) by placing the code for Zoog's body inside of a for loop.

 Exercise 6.8 asks you to create a grid of squares using a for loop - actually using [nested loops](https://github.com/danweiner/learning-p5-js/tree/master/lesson-2/ch-6/exercise-6.8-grid-squares).  Here's Dan's [video](https://www.youtube.com/watch?v=1c1_TMdf8b8&index=16&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) on nested loops.  It's a pretty big oversight that the book doesn't explain nested loops, because they can be pretty complicated to understand.  A better example is actually a checkerboard.  It introduces the modulo / remainder operator.  My example draws a checkerboard.  Mehran from Stanford also uses a [checkerboard](https://see.stanford.edu/Course/CS106A/171) in his CS106A class.

## Lesson Two Project

Step 1: Rewrite lesson one design with variables instead of hard-coded values.  Use a for loop for something.

Step 2: Use assignment operations that alter the values of those variables and make the design dynamic.

Step 3: Using conditional statements, alter the design behavior based on certain conditions.  

I wanted to do something beyond my skill level - go from a daytime sky to a night time sky and back.  I could sort of do it - I went from light blue to dark blue sky, but then it got way too complicated.  I'll stick with a "simpler task" - putting lines on the house which serva as a design.  And updating orion with begin and endshape.

# Lesson 3 - Organization

## Chapter 7 - Functions
Overview:
- Modularity
- Declaring and defining a function
- Calling a function
- Parameter passing
- Returning a value
- Reusability

I'm sure there are many differences between Java and JS functions - I'll need to revisit this - watch Dan's videos and probably read about it

### Break it down

Functions are a means of taking the parts of our program and separating them out into modular pieces, making our code easier to read and revise

Returning to Space Invaders - steps inside draw():
- Erase background
- Draw spaceship
- Draw enemies
- Move spaceship according to user keyboard interaction
- Move enemies

Previously, we would have translated the above pseudocode into actual code, and placed it inside draw().

Now, we can approach the problem as follows:

```
// calling functions we made up inside of draw - also called top-down design
// Stanford 106A is really good for an overview of top-down design
function draw() {
	background(0);
	drawSpaceShip();
	drawEnemies();
	moveShip();
	moveEnemies();
}
```

What about function definitions? We'll get to this later

Why is it so important to write our own functions?
- Modularity: break down a larger program into smaller parts, making code more manageable and readable
- Reusability: reuse same code without having to repeat it (importance of arguments and paramenters)

Local and global variables are also important, as functions are independent blocks of code that will require using local variables (I think this is true in JavaScript - function scope?)

### User defined functions

This just means moving beyond the functions provided by p5.js (like line()) and writing our own functions.

### Defining a function

A function definition ('declaration') had three parts:
- Return type (not in JavaScript)
- Function name
- Arguments

Function example:

```
function drawBlackCircle() {
	fill(0);
	ellipse(50, 50, 20, 20);
}
```

This code won't happen *unless it's called* from a part of the program that is being executed.  We accomplish this by referencing the function name (calling the function).

```
function draw() {
	background(255);
	drawBlackCircle();
}
```

The exercise is to write a function that displays Zoog, or [my own design](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/exercise-7.2-fido-functions) using a function.

### Simple Modularity

Here's Dan's first video on [functions](https://www.youtube.com/watch?v=wRHAitGzBrg&index=17&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA).

His example in the video is a bouncing ball, demonstrating modularity.

Here is the [bouncing ball code](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/example-7.3-ball-functions) with functions.

Another benefit of functions is greater ease in debugging - we can turn on and off parts of the program by commenting out certain functions

*Debugging tip*

By adding function calls one by one and executing the sketch each time, we can more easily deduce the location of the problem code

### Arguments

AKA Parameters - values that are passed into a functions

Instead of just saying move - you're saying move n steps (n is the argument)

Example:

```
// diameter is an argument to the function 
// drawBlackCircle()
function drawBlackCircle(diameter) {
	fill(0);
	ellipse(50, 50, diameter, diameter)
}
```

An argument is simply a variable declaration inside the parens in the function definition

This variable is a local variable to be used in that function.

Another example:
```
// The argument 'speedFactor' affects how fast
// the circle moves
function move(speedFactor) {
	x = x + (speed * speedFactor)
}
```

So, to move the ball twice as fast:
`move(2)`

Or pass in a variable or the result of a mathematical expression:
`move(mouseX/10)`

Arguments allow for more flexible, reusable functions.

Let's look at the code for drawing a collection of shapes and examine how functions allow us to draw multiple versions of the pattern without retyping the same code over and over.

The example will be drawing a car.  We'll look at two examples - one using functions, one without.

The example from the book for car without functions doesnt match up perfectly because he doesn't even show if the code for the cars is in setup() or draw().  Maybe he isn't using setup() or draw() because he doesn't need to in a Processing sketch?

Here's [car with functions](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/cars-functions).

The book example doesn't work because of [variable scope](https://p5js.org/examples/data-variable-scope.html).

I actually logged an [issue](https://github.com/processing/processing-docs/issues/647#issuecomment-374639677) about this example because I thought that the example was buggy.  I asked them to include something about hoisting in JavaScript.  I'll see if I get a response.

Note the use of [color()](https://p5js.org/reference/#/p5/color) in this example on parameter passing in functions.

Parameter *passing* is a very important idea.

The value you pass as a parameter to a function can be a literal value (20, 5, 4.3), a variable (x, y), or the result of an expression (8 + 3, 4 * x/2, random(0, 10))

Arguments act as local variables to a function and are only accessible.

Exercise 7.4: Write code that [calls a function](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/exercise-7.4-sum-call)

The code is a function that adds three numbers and prints the sum of the three.

Exercise 7.5- [write a function](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/exercise-7.5-multiply) definition: You are provided with the function call `multiply(5.2, 9.0)`.  Write the code that takes these two parameters, multiplies them and prints the result to the message window.

Exercise 7.6 is interesting because it's a [bouncing car](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/exercise-7.6-bouncing-car).  Using functions, global, and local variables altogether.

### Passing a copy

This may or may not be the same in JavaScript.  I'll need to read more.

In Java, whenever you pass a primitive value (integer, float, char) to a function, you do not actually pass the value itself, but a copy of that variable.

Here is a function called randomizer().  This function receives one argument (float) and adds a random number between -2 and 2 to it.  

Pseudocode for randomizer():
- num is the number 10
- num is displayed: 10
- copy of num is passed into the argument newnum in the function randomizer()
- in the function randomizer()
	- a random number is added to newnum
	- newnum is displayed (10.34232)
- num is displayed again (it's still 10 bc a copy was sent into newnum)

Let's see if the same thing happens in JavaScript. (Yes it is because JavaScript is pass by value for primitives.)

Here's the [randomizer() code](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/randomizer-pass-copy).

This is commonly referred to as "pass by value".

Remember [this article](http://jasonjl.me/blog/2014/10/15/javascript/) later because it describes how JavaScript uses pass by value for primitives but call by sharing for objects.

This definitely gets confusing.

Flow of a program when using a function.  The code is executed in the order that the lines are written, but when a function is called, the code leaves its current line, executes the lines inside the function, then comes back to where it left off.

Here's an example:
- set num equal to 10
- print value of num
- call the function randomizer
	- set newnum equal to newnum plus a random number
	- print value of newnum
- print value of num

An interesting example to predict the output of the program that has various function calls.  You have to understand the flow of functions and function calls.

Here's the [code](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/exercise-7.7-function-output).

### Return Type

This is not really relevant to JavaScript - JavaScript is [untyped](https://stackoverflow.com/questions/964910/is-javascript-an-untyped-language) - not totally clear on how and why this matters.

But return values are definitely important.

As soon as the return statement is executed, the program exits the function and sends the returned value back to the location in the code where the function was called.  That value can be used in an assignment operation (to give another variable a value) or in any appropriate expression.

Examples:

```
function sum(a, b, c) {
	var total = a + b + c;
	return total;
}
var answer = sum(5, 10, 32);

var x = sum(5, 6, 8);
var y = sum(8, 9, 10) * 2;
var z = sum(x, y, 40);
line(100, 100, 110, sum(x, y, z));
```

Functions that return values are traditionally used to perform complex calculations that may need to be performed multiple times throughout the course of the program (like calculating the distance between two points (x1,y1 and x2,y2)).

The dist() function is built into p5.js to calculate the distance between pixels:
`var d = dist(100, 100, mouseX, mouseY)`

This calculates the distance between (100, 100) and (mouseX, mouseY).  Without this function, we would need the Pythagorean Theorem.

Our version of p5.js dist() function:

```
function distance(x1, y1, x2, y2) {
	var dx = x1 - x2;
	var dy = y1 - y2;
	var d = sqrt(dx*dx + dy*dy);
	return d;
}
```

Example 7.4: Using our [distance function](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/example-7.4-distance-function) to calculate brightness for squares in quadrants.

Exercise 7.8: write a function that takes one argument (F for Fahrenheit) and computes the [temperature in Celsius](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/exercise-7.8-temperature-convert).


### Zoog Reorganization

Two new functions - drawZoog() and jiggleZoog() - move randomly in x and y directions.

Incorporate arguments so jiggliness is determined by mouseX position and Zoog's eye color is determined by Zoog's distance to the mouse.

Example 7.5 - [Zoog with functions](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/example-7.5-zoog-functions).

Exercise 7.9 - [Multiple Zoogs](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-7-functions/exercise-7.9-multiple-zoogs) - calls a function to draw Zoog within a for loop, so multiple Zoogs are drawn.


## Objects

In this chapter:
- Data and functionality together
- What is an object?
- What is a class?
- Writing your own classes
- Creating your own objects
- Processing 'tabs' - This will probably be something else in JS

We talked about [JavaScript Objects](#javascript-objects) earlier.  

Dan's first video is [introduction to OOP with ES6](https://www.youtube.com/watch?v=xG2Vbnv0wvg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=20&t=0s). 

He then talks about [ES6 Classes](https://www.youtube.com/watch?v=T-HGdc8L-7w&index=21&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA).

There could be significant differences between OOP in Java and JavaScript.  I guess we'll see.

### Object Oriented Programming

We're not introducting any new programming fundamentals - objects use everything we have already learned (variables, conditionals, loops, functions).

What is new is a different way of thinking, a way of structuring and organizing everything we have already learned.

A program for your day (a list of instructions):
- wake up
- drink coffee
- eat breakfast (cereal, blueberries, almond milk)
- drive to work

What is involved here?  What *things* are involved?

The maint thing is *you* - a human being.  You exhibit certain properties.  You have certain traits (how you look).  You can do things (wake up, eat, drive).

An object is like you - a thing that has properties and can do stuff.

The properties of an object are variables and the stuff an object can do are functions.  OOP is the marriage of everything we have learned up to now (data and functionality) all rolled into one *thing*.

Data and functionality for very simple human object.

Data:
- Height
- Weight
- Gender
- Eye color
- Hair color

Functions:
- Sleep
- Wake up
- Eat
- Ride some form of transportation

Of course, this is not a real human.  This is just the idea, or concept behind a human.  It describes what it is to be a human.  This is a *template* known as a *class*.  A class is different from an object.  You then create *instances* of a class - which are individual human beings.


### Using an Object

How is using objects in our main program (setup() and draw()) useful?

Car example:

Data (global variables):
- car color
- car x location
- car y location
- car x speed

Setup:
- initialize car color
- initialize car location to starting point
- initialize car speed

Draw:
- fill background
- display car at location with color
- increment car's location by speed

What did we do previously:
- defined global variables at the top of the program
- initialized the in setup()
- called *functions* to move and display the car in draw()

With OOP, we an take the variables and functions out of the main program and store them *inside the car object*.

A car object will know about its data - color, location, speed.  That is part one.

Part two is the stuff it can do - the methods (functions inside an object).  The car can *move* and it can be *displayed*.

Pseudocode for *object-oriented design*:

Data (Global Variables):
- Car object

Setup:
- Initialize car object
- This is the constructor in JavaScript I think

Draw:
- Fill background
- Display car object
- Move car object

We now have only one variabe - a car variable - instead f separate variables for car color, location, and speed.

Instead of initializing those three variables, we initialize one thing - the ***Car*** object.

Those variables (color, location, speed) still exist, but they live inside the Car object.  They will be defined in the Car class.

There's now code for a Java class - I'm watching the [Coding Train video](https://www.youtube.com/watch?v=T-HGdc8L-7w&index=21&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) to see if the code is the same.

Here's the [code](https://github.com/CodingTrain/website/tree/master/Tutorials/P5JS/p5.js/06/6.2_p5js_Classes_in_JavaScript) from the coding train video.

Note that his code uses JavaScript [let, instead of var](https://www.youtube.com/watch?v=q8SHaDQdul0).

The examples online for 8.1 for learning p5.js put functions into the object literal.  Dan seems to like constructor functions.  Here's example 8.1 using a constructor function.

### Writing the Cookie Cutter

Use of objects in p5.js makes for clean, readable code.

The hard work goes into writing the template - writing the class itself.

It's a good exercise to take a program without objects and, not changing the functionality at all, reqrite it using objects.

All classes must include four elements:
- name
- data
- constructor
- methods

Here's a simple non-OOP car:

```
let c;
let xpos;
let ypos;
let xpseed;

function setup() {
	createCanvas(200, 200);
	c = color(255);
	xpos = width/2;
	ypos = height/2;
	xspeed = 1;
}

function draw() {
	background(0);
	display();
	drive();
}

function display() {
	rectMode(CENTER);
	fill(c);
	rect(xpos, ypos, 20, 10);
}

function drive() {
	xpos += xspeed;
	if (xpos > width) {
		xpos = 0;
	}
}
```

Here's the program above placed into a Car class:

'''
// Declare car object as a global variable
let car;

function setup() {
	createCanvas(200, 200);
	// Initialize Car object
	car = new Car();
}

function draw() {
	background(0);
	// Operate Car object
	car.display();
	car.drive();
}

class Car {
	constructor(c, xpos, ypos, xspeed) {
		this.c = color(255);
		this.xpos = width/2;
		this.ypos = height/2;
		this.xspeed = 1;
	}

	// Functionality
	display() {
		rectMode(CENTER);
		fill(this.c);
		rect(this.xpos, this.ypos, 20, 10);
	}

	drive() {
		this.xpos += this.xspeed;
		if (this.xpos > width) {
			this.xpos = 0;
		}
	}
}
'''

The Class Name - "class WhateverNameYouChoose".

Data - a collection of variables.  Often referred to as instance variables, since instance of an object contains this set of variables.

Constructor - Special function inside of a class that creates the instance of the object itself.  Where you give instructions on how to set up the object.  Called by invoking the *new* operator - "car = new Car()".

Functionality - Add functionality by writing methods. 

### Using an Object: The Details 

The three steps outlining how to use an object in a sketch:
1: Declare an object `let car`
2: Initialize an object (in setup()) `car = new Car()`
3: Call methods on the object (in draw()) `car.move()`

Let's look at the details behind these three steps.

Step one: Declaring an object variable

In JavaScript we don't need to specify a type.  We do need to give our variable a name.

Objects are *complex* data types (as opposed to primitive data types like ints, floats, and chars).  This is because they store multiple pieces of information: data and functionality. Primitives only store data.

Step two: Initializing an object

We initialized a variable using an assignment operation: `let x = 10`.

Initializing an object is a bit more complex.  Instead of simply assigning it a primitive value, like an int or a float, we have to construct the object.  An object is made with the *new* operator.  `car = new Car();`

"car" is the object variable name and "=" indicates that we are setting it equal to something that something being a *new* instance of a Car object.  What we are really doing here is intializing a Car object.  This line of code calls the *constructor*, which we create later (simply called "constructor"), that initializes all of the objects variables and makes sure the Car is ready to go.

Beware of ***"NullPointerException"***.  

It looks like in Java, the default value of a primitive int is 0, while the default value of a variable in JavaScript is [undefined](https://stackoverflow.com/questions/10560362/when-declaring-a-variable-in-javascript-is-the-default-value-null).  

If you forget to initialize an object, you get the value null, meaning nothing.  

Apparently, in JavaScript, the error will be ["undefined is not a function"](http://dobegin.com/npe-hell/).  

Step 3: Using an object

Once we have successfully declared and initialized an object variable, we can use it.

Using an object involves coalling functions that are built into that object.  

Functions that are inside of an object are called "methods" in Java - I'll call them the same for now in JavaScript.

Calling a method inside of an object is accomplished via dot syntax. ***`variableName.objectMethod(Method Arguments)`***

Example: 
-`car.draw()`
-`car.display()`


### Putting it all together

Dan actually calls this "Putthing it together *with a Tab*".  I'm going to assume there's some other construct in JavaScript besides a Tab because I don't know what a Tab is.

Here is Example 8.1 - a [Car class and a Car object](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-8-objects/exercise-8.1-OOP-car).  Note that I submitted this to Dan's repo as a pull request and haven't heard anything yet.

We placed the Car class below the main body of the program (under draw()), which is identical to where we have been placing user-defined functions.  But technically speaking the order does not matter as long as the blocks of code remain intact.

It's just nice to have things make the most logical sense to us humans, the bottom of the code being a good starting point.

Processing offers a useful means for separating code fro each other through the use of tabs.

We're not using Processing, however.  Let's consult the videos.

It doesn't look like he talks about some analogous concept to tabs in the videos.  

I think in JS you would just create new files for each class.  For now I'll just assume each tab is a new .js file.

You can name each tab anything you like, but you should name it after the *class* you intend to put there.  

You can then type the main body of code on one tab (entitled "objectExample") and type the code for your class in another (entitled "Car").

I'm assuming these will be sketch.js and car.js...

So basically, create a new file calles "objectName".js to hold the code for your class.

Let's try this with our Car example from before.

Apparently my assumptions about a new .js file were [wrong](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model).  I got led down a rabbit hole about class-based vs. prototype-based languages.  

This might be a bit over my head for now.

Note also that classes are ["syntactical sugar"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) over JavaScript's prototype-based inheritance model.

I'm going to need a real textbook to better understand this concept.

Wow - it actually works...

All I needed to do was reference the [car.js file in index.html...](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-8-objects/exercise-8.4-car-tabs).

That's a big lesson.  All the reading and searching, no answers, and all I needed to do was add one line to index.html.  All the other reading and researching was helpful I guess, but ultimately not getting me any closer to the answer.

### Constructor Arguments

Our old code would have create identical objects.

If we want to create different objects, we need constructor arguments.

For instance: `var car = new Car(color(255, 0, 0), 0, 100, 2)`

We need to rewrite the constructor to reflect this:

```
 constructor(tempC, tempXpos, tempYpos, tempXspeed) { 
 // The Constructor is defined with arguments.
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.xspeed = tempXspeed;
  }
```

Arguments are local variables used inside the body of a function that get filled with values when the function is called.

We are now creating *temporary* constructor artyments that exist solely to pass a value from where the object is made into the object itself.

This allows us to make a variety of objects *using the same constructor*.  

Here's the program updated with constructor arguments, so there are now [two car objects](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-8-objects/example-8.2-two-car-objects), each different.

The next exercise is to [rewrite the gravity example](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-8-objects/exercise-8.5-simple-gravity-OOP) using objects with a Ball class.  Include two instances of a Ball object.

### Objects are data types

You can include as many classes as you feel like writing.

Back to Space Invaders.  You could include a:
- Spaceship class
- Enemy class
- Bullet class

Using an object for each entity in your game

Although not primitive, classes are data types just like ints and floats.  Since classes are made up of data, an object can therefore contain other objects!  

This could be different in JavaScript since it's a prototype language instead of a class-based language, as described above.  I won't get too into this.

Objects can be passes as arguments ito a function.  Again I'm sure JS has all sorts of different issues here, left for another time.

Here, Dan discusses pass by copy for primitives vs pass by reference for objects.  With pass by reference, if an object is passed to a function, those changes will affect that object used anywhere else in the sketch.

Again, this is likely different for JS.

This could start to get tricky because the book will start to use multiple objects, pass objects into functions, etc.

I might need a real JavaScript book to figure out how to use JavaScript classes and objects sadly.

We'll see.

### Object-Oriented Zoog

So, when do we use object-oriented programming?

Always!

Objets allow us to organize concepts inside of a software application into modular, reusable packages.  

However, it's not always convenient or necessary to start out every project using object-orientation, especially when you are learning.  

We can easily "sketch" out vidual ideas with p5.js using non object-oriented code.

For any project, take a step-by-step approach.  Do not start out writing classes for everything you want to do.  

Sketch out your idea first by writing code in setup() and draw().  Nail down the logic of what you want to do as well as how you wnat it to look.  

As your project begins to grow, take time to reorganize your code, perhaps first with functions, then with objects.

It is perfectly acceptable to dedicate a significant chunk of your time to this reorganization process (often referred to as refactoring) without making any changes to the end result, that is what your sketch looks like and does on screen.

We will now *refactor* Zoog by making Zoog into an object.  This will give us a leg up in programming Zoog's future life in more complex sketches.

So, let's make a [Zoog class](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-8-objects/example-8.3-zoog-oop).

Exercise 8-6 - rewrite Zoog class to inclood [two Zoogs](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/ch-8-objects/exercise-8.6-two-zoogs).  Vary appearance somehow.  Vary behavior somehow.  Add color variable.


## Lesson Three Project

Take your lesson two project and reorganize your code using functions.

Reorgainze the code one step further using a class and object variable.

Add arguments to the Constructor of your class and try making two or three objects with different variables.

Here's my lesson 3 project - [Sol Lewitt Squares](https://github.com/danweiner/learning-p5-js/tree/master/lesson-3/lesson-3-project).  One version with functions, one with classes.


# Lesson 4 - More of the Same

## Arrays

In this chapter:
- What is an array?
- Declaring an array
- Initialization
- Array operations - using the "for" loop with an array
- Arrays of objects

### Arrays - Why do we care?

What if we want a program with 100 car objects?

We could use clever copying and pasting, but that's not a good solution.

An array is one thing tht contains a *list* of variables.

Any time a program requires multiple instances of similar data, it might be time to use an array.  

Examples:
- store the scores of four players in a game
- a selection of ten colors in a design program
- a list of fish objects in an aquarium simulation

### What is an array?

A variable is a named pointer to a location in memory where data is stored.  In other words, variables allow programs to keep track of information over a period of time.

An array is exactly the same, only instead of pointing to one singular piece of information, an array points to multiple pieces.

We an think of an array as a list of variables.  

A list is useful for two important reasons.  One, it keeps track of the tlements in the list itself.  Two, the list keeps track of the order of those elements.  The order can be just as important as the information itself.  

In an array, each element of the list has a unique indes, an integer value that designates its position in the list.  In all cases, the name of the array refers to the list as a whole, while each element is accessed via its position.

We start counting arrays from index 0.  This is because the first element of the array is located at the start, a distance of zero from the beginning.  Numbering the elements starting at 0 also makes many array operations (the process of executing a line of code for every element of the list) a great deal more convenient.

### Declaring and Creating an Array

This is different in Java and JavaScript.

We denote the use of an array by placing empty square brackets ("[]")after the name.  

I don't think there's any difference between an array of ints and an array of objects in JavaScript.

Arrays in Java are also of fixed size.  Arrays in JavaScript are [not fixed size](https://stackoverflow.com/questions/2504990/are-variable-length-arrays-possible-with-javascript). 

You can also use the new keyword to create arrays in JavaScript instead of creating an [array literal](https://www.w3schools.com/js/js_arrays.asp).

### Initializing an Array

One way to fill an array is to hard-code the values in each spot.

Do we need to initialize an array in JS?  I guess so.

What we really want to do is *iterate* through the elements of the array.  This requires a loop.

### Array Operations

Consider the following problem:

***(A) Create an array of 1,000 floating point numbers.  (B) Initialize every element of that array with a random number between 0 and 10.***

Part A we already know how to do.

```Java
float[] values = new float[1000]
```

```JS
let values = new Array(1000)
```

We want to avoid this for B:

`values[0] = random(0, 10);`
`values[1] = random(0, 10);`
etc...

Let's describe in English what we want to program (write some pseudocode):

For every number n from 0 to 999, initialize the nth element stored in the array as a random value between 0 and 10.

Translating into code, we have:

```
let n = 0;
values[n] = random(0, 10);
values[n + 1] = random(0, 10);
etc...
```

We have not improved the situation, but we have taken a big step forward in understanding th problem.  By using a variable (n) to describe an index in the array, we can now employ a *while* loop or a *for* loop to initialize every n element.

```
/// while loop
let n = 0;
while (n < 1000) {
	values[n] = random(0, 10);
	n = n + 1;
}
```

```
// for loop
for(let n = 0; n < 1000; n++) {
	values[n] = random(0, 10);
}

```

We don't want to use hard-coded values like 1000.  What if we wanted to use 2000?  

We can use [array.length](https://www.w3schools.com/jsref/jsref_length_array.asp).

'''
for (let i = 0; i < values.length; i + + ) {
	values[i] = 0;
}
'''

Exercise 9-6: Write code to perform the following array operations:
1: Square each number
2: Add a random number between zero and 10 to each number
3: Add to each number the numbe that follows in the array (skip the last value in th array)
4: Calculate the sum of all the numbers

Note this video series on [ES6 Array functions](https://www.youtube.com/watch?v=mrYMzpbFz18) like the arrow function, map, fill, reduce, filter, etc. 

I'll try to do these exercises with the ES6 Array functions as well.

let nums = [5, 4, 2, 7, 6, 8, 5, 2, 8, 14]

```
// Square each number
for(let i = 0; i < nums.length; i++){
	nums[i] = nums[i] * nums[i]
}
```

One example to use is the [for...of loop](https://www.youtube.com/watch?v=Y8sMnRQYr3c&index=4&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr).

```
for (let bubble of bubbles) {
	bubble.move();
	bubble.show()
}
```

You need [higher order functions](https://www.youtube.com/watch?v=H4awPsyugS0&index=5&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr) for most of these exercises.  Dan briefly discusses the difference between functional and object oriented programming (something beyond my scope right now).

Function that takes a function as input or returns a function as output - higher order function.

Can manipulate array in one fell swoop.

Map() might look nice but also might not be high performance (need to replicate entire array).

```
// Using higher order function map()
function squared(x) {
	return x * x;
}

nums = nums.map(squared)
```

Or with an anonymous function:
```
nums = nums.map(function(x) {
	return x * x;
});
```

Now with an arrow function:

```
nums = nums.map(x => x * x);
```

2: Add a random number

```
nums = nums.map(x => x + Math.floor(Math.random() * 10));
```

3: Add to each number the number that follows (skip last value)

```
// without higher order functions
for(let i = 0; i < nums.length - 1; i++) {
	nums[i] += nums[i + 1]
}
```

4: Find sum

```
// Without higher order functions (reduce())
let sum = 0;
for (let num of nums) {
	sum += num;
}
```

```
function sum(acc, num) {
	console.log(acc);
	return acc + num;
}
// acc is like sum in previous example

let answer = nums.reduce(sum, 0);
// pass in initial value otherwise first value of acc is first value of array
```

Now with arrow syntax:
```
let sum = nums.reduce((acc, num) => acc + num, 0);
```

Finding min and max:

```
function findMax(acc, val) {
	if(val > acc) {
		acc = val;
	}
	return acc;
}

let biggest = vals.reduce(findMax);
console.log(biggest);
```

Making it an arrow function:

```
let biggest = vals.reduce((acc, val) => {
	if (val > acc) {
		add = val;
	}
	return acc;
})
```

Or using a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator):
```
let biggest = vals.reduce((a, b) => b > a ? b : a);
```

### Simple Array Example: The Snake

Here's the task - programming a train following the mouse - it's not so easy.

It will require an array which will serve to store the history of mouse locations.

We will use two arrays, one to store horizontal mouse locations, and one for vertical.

Let's say, arbitrarily that we want to store the last 50 mouse locations.

First, we declare two arrays:

```
let xpos = new Array(50);
let ypos = new Array(50);
```

In setup(), we need to initialize the arrays.  At the start of the program there has not been any mouse movement, so we fill the arrays with 0's.

```
for(let i = 0; i < xpos.length; i++) {
	xpos[i] = 0;
	ypos[i] = 0;
}
```

Another way to do this, in one line is:

```
let xpos = new Array(50).fill(0);
let ypos = new Array(50).fill(0);
```

Each time through the draw() loop, we want to update the array with the current mouse location.  Let's choose to put the current mouse location in the last spot of the array.  The length of the array is 50, meaning the index values range from 0 - 49.  The las tspot is 49 (length - 1).  

```
xpos[xpos.length-1] = mouseX;
ypos[ypos.length-1] = mouseY;
```

Now comes the hard part - we want to keep only the last 50 mouse locations.  

By storing the current mouse location at the end, we are overwriting what was previously stored there.  If the mouse is at (10,10) during one frame, and (15,15) during another, we want to put (10,10) in the second to last spot and (15,15) in the last spot.

The solution is to shift all the elements of the array down one spot before updating the current location.

The image below shows how it works.

![array image](/images/array_shift.png)

Element index 49 moves into 48, 48 to 47, etc.  

We can do this by looping through the array and setting each element at i to the value of element *i plus one*.

We must stop at the second to last value because there is no element 50 (49 plus 1).

Instead of `i < xpos.length;` we must say `i < xpos.length - 1`.

Here's the full code for the array shift:
```
for(let i = 0; i < xpos.length - 1; i++) {
	xpos[i] = xpos[i+1];
	ypos[i] = ypos[i+1];
}
```

Finally, we can use the history of mouse locations to draw a series of circles.  For each element of the xpos array and ypos array, draw an ellipse at the corresponding values stored in the array.

```
for(let i = 0; i < xpos.length; i++) {
	noStroke();
	fill(255);
	ellipse(xpos[i], ypos[i], 32, 32);
}
```

We could make this fancier by linking the brightness of the circle to the location in the array, meaning the earlier (older) values will be bright and small and the later (newer) values will be darker and bigger.

This is accomplished by using the counting variable i to evaluate color and size.

```
for(let i = 0; i < xpos.length; i++){
	noStroke();
	fill(255 - i*5);
	ellipse(xpos[i], ypos[i], i, 0);
}
```

Here's the complete code for the [snake following the mouse](lesson-4/ch-9-arrays/example-9.8-snake).

The next exercise is to make the [snake example object-oriented]().  We can try to make snakes with slightly different looks (different shapes, colors, and sizes). 

I actually needed to look at the [Processing example](https://github.com/shiffman/LearningProcessing/blob/master/chp09_arrays/exercise_09_07_array_snakes/Snake.pde) for help. 

An advanced problem is to create a Point class that stores the x and y coordinate as part of the sketch.  Each snake object will have an array of Point objects, instead of two separate arrays of x and y values.

The next section is about an array of objects, so maybe I'll come back to this later after learning about arrays of objects.

Note here's [Dan's example](https://github.com/shiffman/LearningProcessing-p5.js/blob/master/chp09_arrays/example_09_08_mouse_history/sketch.js) using a point object literal and the splice array function to solve the snake problem.


### Array of objects

How can we write a program with 100 car objects?

With OOP and arrays, we can simply transition a program from one object to 10 to 10,000, maybe without changing the car class at all.  The class does not care how many objects are made from it. 

Revisiting the code for creating one Car object:

```
let myCar;

function setup() {
	myCar = new Car(color(255, 0, 0), 0, 100, 2);
}

function draw() {
	background(255);
	myCar.move();
	myCar.display();
}
``` 

Three steps in the above code needed to alter each one to account for an array.

Before we had to:

1: Declare the Car - `let myCar;`
2: Initialize the Car = `myCar = new Car(color(255, 0, 0), 0, 100, 2);`
3: Run the Car by Calling Methods: 
```
myCar.move();
myCar.display();
```

After:
1: Declare the Car Array: `let cars = new Array(100);`
2: Initialize each element of the Car Array:
```
for(let i = 0; i < cars.length; i++) {
	cars[i] = new Car(color(i*2), 0, i*2, i)
}
```
3: Run each element of the Car Array:
```
for(let i = 0; i < cars.length; i++) {
	cars[i].move();
	cars[i].display;
}
```

See this [example for 100 cars](https://github.com/danweiner/learning-p5-js/tree/master/lesson-4/ch-9-arrays/example-9.9-array-cars).  If we wand to change the number of cars present, all we have to do is change the array definition - nothing else has to change!

### Interactive Objects

Back to the simple rollover effect.  A rectangle appears in the window and is one color when the mouse is on top and another color when the mouse is not.

The following is an example that takes this simple idea and puts it into a "Stripe" object.  Even though there 10 stripes, each one individually responds to the mouse by having its own rollover() function.

```
function rollover(mx, my) {
	if (mx > this.x && mx < this.x + this.w) {
		mouse = true;
	} else {
		mouse = false;
	}
}
```

This function checks to see if a point (mx, my) is located within a verticle stripe.  Is it greater than the left edge and less than the right edge?  If so, a boolean variable "mouse" is set to true.  

When designing your classes, it is often convenient to use a boolean variable to keep track of properties of an object that resemble a switch.  For example, a Car object could be running or not running.  Zoog could be happy or not happy.

This boolean variable is used in a conditional statement inside of the Stripe object's display() function to determine the Stripe's color.

```
function display() {
	if (mouse) {
		fill(255);
	} else {
		fill(255, 100);
	}
	noStroke();
	rect(this.x, 0, this.w, height);
}
```

When we call the rollover() function on that object, we can then pass in mouseX and mouseY as the arguments.

`stripes[i].rollover(mouseX, mouseY);`

Even though we could have accessed mouseX and mouseY direcedly inside of the rollover() function, it is better to use arguments.  This allows for greater flexibility.  The Stripe object can check and determine if any x,y coordinate is contained within its rectangle.  Perhaps later, we will want the Stripe to turn white when another object, rather than the mouse, is over it.

Here is the full ["interactive stripes"]() example.





