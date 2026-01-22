---
layout: project
type: project
image: img/dm.png
title: "Universal/Existential Quantifier Testing and Binary Conversion"
date: 2025-04-15
published: true
labels:
  - Mathematical Technology
  - Python 
  - Visual Studio Code
summary: "I developed a basic program in python that uses a closed formula to create a sequence, determine truth values, and convert decimal values to binary. This is a useful program because it intends shortens the amount of math by hand."
---
This program takes a closed formula with "n" elements which is stored in a set. The program also takes a value "m" in which if the domain of "X" is the first "n" elements of a sequence and "m" is another value, both of the quantifiers must be defined. 

This program also sums the first "n" elements and converts this number into a bianry value. Without using built in functions to find these values, I used the iterative tools and condiitonal statements. 
Here is some code that illustrates the binary conversion: 
```python
total = sum binary_total= ''
while total > 0:
remainder = str(total % 2)
binary_total += remainder
total //= 2
print(f'The sum of the first {n} elements is: ({sum})\u2081\u2080 equivalent to ({binary_total[::-1]})\u2082 ')
print(int(binary_total[::-1], 2))

```
