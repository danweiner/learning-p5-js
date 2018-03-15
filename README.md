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
	- [Physics 101[(#physics-101)
- [Chapter 6 - Loops](#chapter-6---loops)
	- [What is iteration?](#what-is-iteration)
	- [While loops](#while-loops)
	- [Exit Conditions](#exit-conditions)
	- [For loop](#for-loop)

# Introduction

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


[Learning Processing](http://learningprocessing.com/) is an introductory workbook/textbook for [Processing](https://processing.org/), which is built on top of Java.

There, however, is no Learning p5.js book, meaning there is no JavaScript-based version of Learning Processing.  There is just the Dan Shiffman repo of Learning Processing code ported to [p5.js](https://p5js.org/). Although [this book](https://www.springer.com/us/book/9781484234259?gclid=CjwKCAiA8bnUBRA-EiwAc0hZk7BwWdTn-f-2ELGoh1CwFpMvYHrMZH-0kV553OsjfIXqBFbaHyGQqxoCPkIQAvD_BwE#aboutBook) looks like it might be on target and [this book](https://p5js.org/books/) is often recommended as an introduction to p5.js.

This repo is an attempt to solve that problem.  I will go through the Learning Processing book, link to the appropriate Shiffman p5.js repos from the Learning Processing book, link to the most relevant Coding Train videos, and post my own code for the exercises. 

I will also have the occasional "detour" when relevant topics come up that aren't covered in the book.  For instance, Command Line, using GitHub, etc.  These "detours" might end up overwhelming the initial goal of the project, but we'll see.


I think this will be helpful for my learning process, and I hope it's helpful to anyone else who stumbles across this repo.

I'm beginning to think this may become an open source project similar to [The Odin Project](https://www.theodinproject.com/) or [freeCodeCamp](https://www.freecodecamp.org/).

I'm thinking of calling it Space Bear. Or Coding Jet. Or coding detours. Longroadcode?

## What is p5.js?

See [this Coding Train video](https://www.youtube.com/watch?v=8j0UDiN7my4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) for Dan Shiffman's explanation of the origin of p5.js, and how to get started coding with p5.js.

Note that the above video references an editor for download that has since been [deprecated](https://github.com/processing/p5.js-editor).

Dan Shiffman's [next video](https://www.youtube.com/watch?v=HZ4D3wDRaec&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=2) is about a p5.js workflow, meaning how to download the project files, how to setup node.js and package manager, and how to run a local server on your computer.  I plan on going through all these steps later, but for now, I'm going to use the [online editor](https://alpha.editor.p5js.org/).

learning graphical coordinates might be difficult.  0,0 in top left

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

[Circles]().  [Funky rects]().  [Progressively darker squares]().  [Spaced squares]().




 


