---
layout: essay
type: essay
title: "The Domino Effect"
# All dates must be YYYY-MM-DD format!
date: 2026-05-08
published: true
labels:
  -  Reflection on Software Engineering 
---
# The Domino Effect
<div style="text-align:center;"> <img src="../img/pictures/dominos.png" alt="Essay image" style="width:600px;"> </div>


## Dominos 
Typically, you may play dominos with a friend or a foe, but an opponent nonetheless. Each Domino representing an action, which may lead to a winning or losing result by the end. Every tile placed from the start until the very finish, makes a difference, whether minute or significant. Through a wide range of concepts, from functional programming to coding Standards, to ethics, this course has been quite reminiscent to that concept, and let me explain to you how.

## The set up
At the start of this course, I created 3 smart goals that I intended to use as a guide for how I would retain the information, perform well on exercises, and ultimately be a standout. SMART goals that follow a specific structure to ensure a clear, measurable, and achievable goal. Each SMART goal must be specific, measurable, attainable, relevant, and timely. Those five constraints are supposed to be helpful to ones improvement towards success. My three goals were as follows: 

1. I will dedicate at least 1 hour every day during the week towards learning and practicing Javascript and Typescript in order to complete in class assignments correctly by the deadline. 
2. I will ask at least one question each class meeting of anything I am unsure of to ensure I am both engaged and able to comprehend the material before the next class meeting. 
3. I will complete 2-3 Javascript/Typescript coding challenges every week as an additional tool to strengthen my knowledge of fundamental methods and track my solve speed to ensure consistent progress throughout the semester. 

And to be completely transparent, after writing them down and acknowledging them, I completely neglected those goals that I'd set. I believe the fear of failure kept me from initiating success from the very start. I envisioned playing this game of dominos, against my peers, creating a chain of events that would lead to my own desires, when in reality, I was my own opponent. 

## A Reversal of the Inevitable
*A known fact about the domino effect is that once a series of actions are taken, the end result is inevitable; it cannot be altered or modified.*

Taking steps whilst essentially battling myself was leading to a series of actions that did not favor any of my goals. After three weeks in the course, I had already given up on performing well. All I could do was continuously recall the quote that was infamous in my household growing up, "Excuses are used as tools of the incompetent and are used to build monuments of absolutely nothing." Being uncomfortable was part of the process, and only a hindrance if I allowed it to be. 

It was not an overnight change, but I stopped reaching for the goal and started reach for the next domino in the pile. It is absolutely helpful to keep the end goal in mind when taking actions, but it can also be overwhelming. Unfortunately, this was my experience, but fortunately, I was able to reflect and put a stop to these moves, even when I felt unsure. It was time to follow the plan and not the mood; structure and routine eliminate prolonged inconsistency. Flipping this switch in my brain allowed me to consume and digest more material throughout the course, it was truly satiating. 

## The First One Falls
With a newfound mindset, I had reversed the doomed fate of my domino strategy. I let that first domino fall confidently, hopeful of my capabilities. Now, I could really learn something. Functional Programming in Typescript is one of the first parts of the course that I was able to utilize the smart goals I'd written for. I still made mistakes, but this time, I learned from them by practicing coding assignments outside of class. I started to participate in class discussions at the risk of sounding dense because being smart is not determined by all that you know, but also your ability to be inquisitive. When I didn't understand how to implement a given instruction, I watched the guided demos on our class website and even changed certain lines that felt too complex for my brain. 

Since I had come into the course with Python experience, identifying similarities also really helped me with adjusting to a new language, namely Typescript. Functional Programming in TypeScript combines a fixed type system with JavaScript's flexible functions. This type of programming largely focuses on creating reusable functions that allow multi-case handling and can work across a multitude of data types and mediums. This module felt very familiar to me, given my experience with Python functions. Grasping the concepts in this module took me from being "a one horse pony", to someone with real potential to hold a multi-faceted skill set. 

Take Experience 18: Experience Functional Programming (Part 1), for example. In this experience we explored Array methods as a concept of functional programming. One of the functions we were instructed to implement was:

```typescript
totalDegrees(data) 
```
that took in a structure like:

```typescript
type UhData = {
fiscalYear: number;
campus: string;
cip: number;
cipDesc: string;
group1: string;
group2: string;
group3: string;
group4: string;
group5: string;
outcome: string;
hawaiianLegacy: string;
awards: number;
};
```
and a data set like:

```typescript
const testData: UhData[] =  [
  {fiscalYear: 2023, campus: "UH Hilo", cip: 90101, cipDesc: "Speech Communicatn & Rhetoric", group1: "College of Arts & Sciences", group2: "Arts & Humanities", group3: "Communication", group4: "Communication", group5: "", outcome: "Bachelor's Degrees", hawaiianLegacy: "HAWAIIAN", awards: 16},
  {fiscalYear: 2023, campus: "UH Manoa", cip: 130301, cipDesc: "Curriculum & Instruction", group1: "College of Education", group2: "Education", group3: "Curriculum Studies", group4: "Curriculum Studies", group5: "", outcome: "Master's Degrees",
    hawaiianLegacy: "HAWAIIAN", awards: 20},
  {fiscalYear: 2023, campus: "UH Manoa", cip: 140801, cipDesc: "Civil Engineering", group1: "College of Engineering", group2: "Engineering", group3: "Civil Engineering", group4: "", group5: "", outcome: "Master's Degrees", hawaiianLegacy: "", awards: 16},
];
```
While it seemed overwhelming to just look at it, I broke it down step by step based on the rules of implementation:

*This function is passed a data structure like uhdata and returns the total number of degrees awarded in the data set. For the testdata set, the correct answer is 52. For the uhdata set, the correct answer is 7380.*

Similar to an iterative loop, using .reduce() is an iterative method for arrays that accumulates sequentially from left to right, starting from index 0. Since there were no specific keys I had to look for within the set, it was much easier to write this function logically. 
```typescript
function totalDegrees(data: UhData[]): number {
  return data.reduce((total, item) => total + item.awards, 0);
}
console.log(totalDegrees(testData))
// 52 
```

## More Dominos Fall in Sync
*One by one they fall*

Learning Coding Standards in this course was in fact a headache, but primed me for any future career. More than just writing complex code that "works" or gives a desired output, coding standards are an important part of programming that help to improve code readability, consistency, maintainability, and security. A set of guidelines and best practices to follow for programmers ensures software quality and efficiency. The first tool we were introduced to was ESLint, a code analysis tool that identified problematic patterns in code. 

I have to admit, using this tool was inconvenient at times. Something as simple as a trailing whitespace would result in an error. As a up and coming professional, I almost felt undermined when corrected by this open source tool. I was starting to feel like I was finding my "voice", and ESLint was a serious reality check. After weeks of using it to enforce consistency and analyze coding bugs, I realize how much of an asset it has been. A lot of times seeing a red line appear in my file was confusing, but I came to understand how much my eyes and hands missed or overlooked. 

After being quietly humbled by an intangible instrument, I gained a new respect for it. 
Not only does it outline errors, inconsistencies, and enforces rules, it also teaches the coder to be more aware. It is almost like classical conditioning where seeing a red line at a consistent error becomes so frustrating that you try your best not to make the mistake at all. It taught me to be conscious of what I do and how I do it, in respects to writing code. It's no longer a mindless thing that I can just throw together, especially as someone trying to break into the industry. Learning these practices now will help in the long run. 

## Approaching the Finish Line
*The final dominos are in place.*

Covering Ethical Practices was by far the highlight of the course for me. Understanding the important of implementing reusable and robust functions and efficient coding practices was and will be forever valuable. However, discussing ethical applications resonated with what I forsee for myself in the near future. Ethics, for me, is the most important topic to emphasize as it is always a concern in any field or industry. We do live in a world where exploitation, danger, bias, and misinformation are running rampant, and that is something I intend to contribute to fixing in my career.

Ethics is considered a non-negotiable concern in software development, as its use cases continue to expand from a simple site to things like finance, healthcare, and even law enforcement. It is imperative to realize the sensitivity of data for security, bias, and safety purposes to name a few. Organizations like ACM (Association for Computing Machinery) and IEEE Computer Society outline these ethical practices to guide responsible computer and software handling. 


## Beyond the Finish Line
*This wasn't about playing dominos*
What I really learned by putting these skills to use was beyond coding practices and functional programming methods. I gained real transferrable skills and a new perspective on the industry. I learned how to leverage methods, tools, and functions across many different areas. The great thing about concepts like ethics, function programming, and standard coding practices, is that it is not exclusive to Software Engineering. Any and Every industry encounters situations where a person with knowledge of these concepts is extremely important to the healthy functioning of a program, a system, etc. 

Throughout this course, I also learned what I will accept, how I plan to be successful, and being comfortable with the unknown, etc. I realized I would not be willing to accept a role or position with duties that do not align with not only my morals and values, but that do not follow standard practices. I absolutely believe in growth and expansion, and introducing new or different ideas, but there is a way to do so without sabotaging your own integrity, and the integrity of the company or industry. I also understand now that creating SMART goals is not so that I perfectly execute everything, but to make an effort above all. Trying and failing is always better than never trying at all. Lastly, I learned how to be comfortable with the unknown. I do not know everything, but I am always willing to learn, and that doesn't make me less valuable than the person next to me, it makes me inquisitive. That means I will always resort to being a student, continuously redefining my growth as a person and a professional, stimulating my brain for innovation, and strengthening problem solving skills. 

[View the HTML version](Software-Engineering-Reflection.html)
