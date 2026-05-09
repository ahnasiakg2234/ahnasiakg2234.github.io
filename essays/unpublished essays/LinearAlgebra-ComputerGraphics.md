---
layout: essay
type: essay
title: "Linear Algebra in Computer Graphics"
# All dates must be YYYY-MM-DD format!
date: 2025-12-14
published: false
labels:
  - Linear Algebra
---
![Computers](img/computers.jpg)
# The relationship between Linear Algebra and Computer Graphics

## Mindless Actions
When we check the weather app for daily predictions, watch a movie with realistic
prehistoric creatures, or play an interactive video game with customizable characters, each visual involves several backend mathematical operations that are rooted in concepts from linear algebra. In this course, we have covered components and functions of matrices, vectors, and linear transformations. These topics are fundamental to the creation and progression of computer graphics. To put the understanding of the ideas we have seen into perspective, we must discuss
their tangible application relative to computer graphics. 

## What are linear Systems?
We start with the idea of a linear system, which represents a number of equations with a number of unknown variables. Eachequation represents a row vector and each column vector represents a unique variable. These vectors can be observed in Matrix form which allows us to perform different operations like scalar and matrix multiplication, linear transformations, rotations, and inverses. Visually, vectors are used as tools to define the lines, points, and curves of an object.
Mathematically, a vector defines the size and direction of an object. In particular, vectors provide precise information about the location of the tip of a pyramid, the trajectory of a figure, or the orientation of a shadow. In vector graphic formats, vectors can be infinitely scaled without sacrificing quality, since the position of the vectors can be recalculated. This makes the use of vectors ideal for the creation of designs and logos.

## The Bigger Picture
Matrices are also an important tool in computer graphics, as they are used to transform or move an object. The aforementioned article indicates that transforming any object composed of vectors requires asequence of scaling, rotating, shearing and/or translating it. And, each of these transformations entails matrix multiplication. For example, to rotate a point in two-dimensions, we would use the
rotation matrix given by: . Suppose we want to rotate the vector [1 0] by 90
degrees. We take the matrix at its corresponding values: and multiply by the vector [1 0] to get [0 1]. As in 2D, this same basis exists for 3D and 4D transformations as well.

To represent all transformations, including translations, as matrix multiplications,
homogeneous coordinates are used. Simply put, homogenous coordinates refer to how we can represent a two-dimensional point in three dimensions, or a three-dimensional point in four dimensions, by including an extra coordinate. This additional dimension allows us to represent translation as matrix multiplication, which would otherwise require addition. For instance, the 2D point [x, y] becomes → [x, y, 1] in homogenous coordinates. The union of operations through homogenous coordinates brings us to
Perspective Projections.

## Imagine It
Imagine the 3D model of a car that we intend to convert into a 2D rendering for display on a screen. We use matrices to create the illusion of depth and scope through perspective projection. Homogenous coordinates allow us to easily represent a “viewing plane”, which refers to the two-dimensional surface onto which we project our three-dimensional model . This plane is created with the use of a projection matrix which transforms the three-dimensional coordinates from dividing by its fourth homogeneous coordinate. This creates the aspect of perspective. Thus, we can project the image of a car onto a screen without compromising any features and while maintaining depth. 

# Okay, so how did this become important?
After gaining some clarity on how these concepts work together, this raises the question of how the idea of graphics and digital visualization became so important.
Initially, computer graphics were introduced as a data visualization instrument for
scientists and engineers. Some of the earliest adaptations launched in the 1950s with
visualization appliances that would aid in the development of aviation and radar technologies.  This led to the founding of one of the most influential systems named the “Whirlwind System” that featured a light pen input and displayed with a cathode ray tube. As new tools began to evolve, so did the capabilities of hardware and software. With the advancements of hardware like memory and processors, this gave way to the growth of digital programs that allowed manipulation of light, shadow, reflection, texture, animation, and more.

## Is AI a helpful tool for Computer graphics?
Graphics has made it possible to quickly create, modify, and interpret two and three-dimensional models for a broad range of uses from engineering to entertainment purposes. A way to visually represent complex data is important for interpretation and provoking deeper thought processes for research and new ideas. After about 70 years of development and expansion, the modern applications of computer graphics include television, video game content, architecture, medical systems, and informative interactive models. According to Peddie, while artificial intelligence poses apprehension to the future of creative work, it is completely transforming the graphics industry as a whole. Fundamentally though, AI-based graphics systems do still rely on the foundations of linear algebra discussed. The generation of images
heavily utilizes matrix operations, but artificial intelligence is quickly escalating the traditional pipelines. Many machine learning models, say “ChaGPT”, can predict physical trends, generate realistic features, and build models from scratch based on worded descriptions. The application of AI is and will continue to be employed for many functions in CG and is likely to raise the level of capabilities. The ever growing possibilities of AI has even been denoted “indistinguishable from magic” because of how quickly it is advancing. The integration of human simulated programs aims to create tailored experiences that engage, react, and adapt
with a likeness to the individual. With the introduction and current advancements of generative AI, the industry of computer graphics has a unique and innovative future ahead.

## Where does this leave us? 
In conclusion, from weather apps to immersive video games, the techniques of linear
algebra are at the root of it all. Vectors define points and directions, matrices engineer transformations and projections, and homogenous coordinates allow these operations to work soundly. The mathematical concepts we’ve discussed are not just theoretical, but they are in fact what has paved the road upon which our graphics and visuals are built. While the emergence of AI has used traditional matrix operations and brought it to a much larger scale, linear algebra remains the core behind each component of our screens. As technology continues to forge ahead, the fundamentals will continue to drive a multitude of new visual experiences.

## Sources Cited:
### 1. Aguilar, Cesar O. MATH 233 - Linear Algebra I Lecture Notes, Accessed 29 August 2025
### 2. “The Role of Linear Algebra in Computer Graphics and Animation”, Understand The Math, www.understandthemath.com/blog/linear-algebra-in-animation, ,Accessed 1 December 2025
### 3. “Linear Algebra for Graphics Programming” , Metal by Example, metalbyexample.com/linear-algebra/, 14 September 2014
### 4. “Applications of Computer Graphics”, ComputerGraphics.pdf, Accessed 1 December 2025
### 5. “Graphics | Selling the Computer Revolution | Computer History Museum.” Computerhistory.org, 2025, www.computerhistory.org/brochures/graphics/. Accessed 13 Dec. 2025.
### 6. Peddie, Jon. “Will AI Completely Take over Computer Graphics? - ACM SIGGRAPH Blog. ” ACM SIGGRAPH Blog, 31 July 2025, blog.siggraph.org/2025/07/will-ai-completely-take-over-computer-graphics.html/. Accessed 13 Dec. 2025.
### 7. Warren, J. “Why is computer graphics important?”, Department of Computer Science at Rice University, https://www.cs.rice.edu/~jwarren/360/outline/subsection3_1_2.html
