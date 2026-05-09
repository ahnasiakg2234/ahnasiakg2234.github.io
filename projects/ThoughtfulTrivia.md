---
layout: project
type: project
image: img/pictures/trivia.jpg

title: "Thoughtful Trivia"
date: 2025-05-08
published: false
labels:
  - Fun Technology
  - Python 
  - Visual Studio Code
summary: "I developed a basic trivia game consisting of 50 possible questions with a range of only two topics. It is intended to be fun, thought-provoking, and interative."
---
## What is Thoughtful Trivia?
Thoughtful Trivia is a very basic implementation of python's functions, iterations, dictionaries, file handling, and exceptions. The main goal of creating this project was to combine fun and interest to the technicalities of python. What is the most efficient way to handle errors, store questions, generate random answers from the provided lists? Well, this project aims to answer that within the coding portion. 

## What were the guidelines?
For this individual project, I was the only person responsible for coding a small trivia game. I started by researching topics of interest to me, narrowing it down to two, and finding 25 questions and answers for a grand total of 50 questions and answers. I stored these pairs in tuples in which I programmed the computer to iterate through in order to separate the questions from answers. 
Then, I created a function that would allow the user to enter one of the two categories and start playing the game based on the category chosen. After that, another function was created to randomize the questions, and no more than 10 questions could be chosen from at once. 

## End Result 
In the main function, I used a score tracker to keep track of user progress as well as welcome the user to the game. This is where I initiate the game for the user which allows the user to type their answer and receive a "Correct" if correct and an "Incorrect" if their answer is not correct. Once the user answers all 10 questions, their score is presented to them as "You got ? out of 10 questions correct. Thanks for playing!". The user can exit or play again. 

## What did I learn? 
From this project, I learned how to handle different types of data. I learned that it does in fact matter which information is stored where because I need to keep track of it in an organized way. I learned that it's not enough to be correct, I also have to be meaningful and efficient when programming. 

Here is some code that illustrates how I wrote the score keeper function:
```python
def run_quiz(questions_with_answers):
  score = 0
  for i, (question, correct_answer) in enumerate(questions_with_answers, start=1):
    print(f"\nQuestion {i}: {question}")
    user_answer = input("Your answer: ").strip().lower()
    if user_answer.lower() == correct_answer.lower():
        print("Correct!")
        score += 1
    else:
        print(f"Incorrect. The correct answer was: {correct_answer}")
        print(f"\nYou got {score} out of {len(questions_with_answers)} questions correct.")

  print("Thanks for playing!")
```
