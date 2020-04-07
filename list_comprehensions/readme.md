# Prerequisites and Theory

## Module Context

The provided lesson is intended to be used in an imagined module called *Code in the Workplace*.  It is designed to teach users to create programs that are readable, simplified, and strategic. The overarching goal is to increase user confidence while encouraging them to share  Python in the workplace and  with other professionals. The direct assertion is to help identify and eliminate [imposter syndrome](https://hbr.org/2008/05/overcoming-imposter-syndrome) through the active practice of clean code.

## Skill Prerequisites
Below is a table highlighting the most important skill prerequisites.  Additional information about the scope and depth are linked for readability.

| Concept         | Description   |
| --------------- |:-------------:|
| Data Types and Variables        | Strings, integers, booleans, operators including the modulo, and basic [built-in functions](https://github.com/kyle1james/teacher_docs_coding_bootcamp/tree/master/01_strings) such as len, range, and enumerate |
| Control Flow                    | [conditional statements](https://github.com/kyle1james/teacher_docs_coding_bootcamp/tree/master/04_conditionals) and [for/while loops](https://github.com/kyle1james/teacher_docs_coding_bootcamp/tree/master/08_lists) element, index, iterator vs. iterable               
| Basic Data Structures          | [Lists](https://github.com/kyle1james/teacher_docs_coding_bootcamp/tree/master/08_lists): index, element, and the append() method|
| Algorithms | Theory: what is an algorithm and Pseudocode |
|Python 3    | This lesson is created for python 3|

## Focus Area

The lesson focuses heavily on the structure of *for loops*. The intent is to help teach users  how to implement the following with list comprehensions:

1. why use list comprehensions
2. create lists
3. iterate over lists

The main focus of the study is the structure of a list comprehnesion: item, list, and expression. For example,

```python

[expression for item in list]

```

The lesson ends by teaching users to create list comprehensions with unique expressions. Students are challenged to explore list comprehensions with conditionals as a connection to the next lesson. The story arch of the module is building to a solution for the problem laid out in the introduction by utilizing pseudocode.

# Introduction to the Lesson

### Intro

The first thought you may have when starting out with Pythonic code is "What is it?" You can think of Pythonic code as a program that seems natural through its simplicity. You could also think of it as an easy to understand solution to a complex problem. Clean, or Pythonic code, can make the difference in landing a job, getting a promotion, or establishing yourself as an excellent programmer- someone other coders can work with. Sounds nice, right? So, how can you start turning your code into Pythonic code?

While many practices comprise clean code, one tool to achieve Pythonic code is called **List Comprehension**. Take the following mystery program as an example. Spend a few moments trying to figure  out what the  program accomplishes.


#### Mystery Program
```python

list_1 = ['what', 'is', 'the', 'code', 'word', 'for', 'clean', 'python', 'code']
list_2 = []
word = 'code'
count = 0
for x in list_1:
  if x == word:
    list_2.append(count)
  count += 1
print(list_2)

```

What is this code trying to accomplish? How long did it take you to figure that out? Where you able to figure out? These seemingly small questions can have a large impact on the day-to-day for a programmer. A lack of clean code can lead to dysfunction in joint projects and frustration with co-workers. Let's run this code and see if the output matches your expectations.


```python

[3,8]

```
We got a list with the integers 3 and 8 inside. Interesting, this program is recording the index of each appearance of the string "code" in list_1. To understand the mystery program better, let's first break the program down into pseudocode.

```python
count = 0
for current element in list_1:
  if current element == word:
    add current element to list_2
    count += 1
```


Feel free to skip the next two paragraphs if you already understand how the mystery program works.

This program iterates through list_1 and compares each element of list_1 to the variable **word**. If the current element is equal to **word**, the program appends list_2 with **count**. At the end of each iteration, **count** is increased by one.

So, this program is recording the index of each appearance of the variable word in list_1. We can see that the value of **word** is "code" and that the string "code" is located at index 3 and 8 in list_1. Remember, lists always start from index 0 in python


#### Connection
Phew, that was a lot of code for such a straightforward task. By the end of this lesson, you will be able to use a **List Comprehension** to cut the mystery program's length in half. First, let's break down how to use **List Comprehension** step-by-step to better understand how to make the mystery program more Pythonic.


### Exercise One: Creating Lists

### Intro
**List Comprehensions** can help simplify for loops in Python. In general, **list comprehensions** are great for simplifying how we

1. create lists
2. iterate over lists
2. iterate over lists with conditionals

Now, you should be asking yourself "why would I want to use list comprehensions? Why not just use a for loop?" Here are three advantages of using **list comprehensions**.

1.) You can create easier to understand code by making a program shorter. This may help readability, saving space in a program, and is considered more Pythonic. That is, it shows a mastery of the Python language. Keep in mind that shorter is not always better. We want to keep readability as the main goal.

2.) The code in a **list comprehensions** is generally faster. Python will allocate the list’s memory first. Meaning, the list won't have to be resized during runtime. We won't go too deep into the math behind what makes a **list comprehension** faster, but it is safe to generally assume that a **list comprehension** is faster than a traditional for loop.

3.) Number two can be better explained when thinking about the method append(). This method changes the list's size during runtime. This small task takes up a small amount of time, which adds up quickly. Imagine having to append a list thousands of times. **list comprehensions** don't need to use the method append(), which saves time and space in the program.

Enough about the advantages. Let's create a list using **list comprehension**.

### Exercise One

#### Exercise 1.1
Before we jump into **list comprehensions**, let's make the following list with a for loop by using the range() method. Remember range(10) will give a range between 0 and 9.

```python
my_nums = [0,2,3,4,5,6,7,8,9]

```

Go ahead and create your list

```python
#enter code here
# Example input
my_nums = []
for num in range(10):
  my_nums.append(num)
print(my_nums)
```

Great job! Let's see how the program would look as a **list comprehension**:

```python
my_nums = [num for num in range(10)]
print(my_nums)
```
Amazing, we can write the same program in half the amount of code! Very Pythonic. We will now see that not only is the program shorter but it is easy to read as well. This is important to note. If the program is short but hard to read who does that help? With that in mind, let's figure out how this code works by breaking the program down into pseudocode!

Here is the familiar for loop pseudocode:

```python

for item in list:
   expression
```
We can see that **item** represents the iterator, **list** is the iterable- in our case it is range(10), and **expression** is what we wish to return for each iteration of the loop.

Here is the same program in pseudocode for a **list comprehension**

```python
my_nums = [expression for item in list]
```
First off, we see that the for loop is placed inside the list’s constructor syntax by placing it between the square brackets.
```python
#[for loop logic goes here]
```

Next, we see that our **expression** is returning the current element to the list. Remember, an advantage to **list comprehensions** is that we don't need to use the append() method.


So, we see that the first piece of code in the **list comprehension** is comprised of what we would like to add into our new list. Next, we see that **item** is acting as our iterator. Lastly, **list** is what we are iterating over. In our case, it is range(10).


#### Exercise 1.2
Let's give it a try. Write a **list comprehension** to create a list with the integers 0-9 in it using the range() method.

```python
# input code here
my_nums = #[expression for item in list]

# example input code
my_nums = [num for num in range(10)]
```

Excellent job! Looking very Pythonic already. Let's try to copy a list into a new list now!

#### Exercise 1.3
```python
# copy list_1 into list_2
list_1 = ['i', 'love', 'list', 'comprehensions']
list_2 = [# expression for item in list]
```

```python
example code
list_2 = list_2 = [word for word in list_1]
print(list_2)
```

Great job! In this example our **expression** is simply returning the **item**. Lastly, the list we are iterating over is list_1. Pretty Cool! Let's knock it up a notch by having a more complicated **expression**.

#### Exercise 1.4
Let's create a list called double_values with double the values of all_my_single_numbers. So, index 0 of double_values would be 10, index 1 would be 12, etc.


First let's write this as a for loop:

```python
all_my_single_numbers = [5,6,7,8]
double_values = []

for num in all_my_single_numbers:
  double_values.append(num * 2)
print(double_values)

```
The **expression** is double the value of num. Let's try to write this as a **list comprehension**. Rember the structure of a **list comprehension**

```python
[expression for item in list]
```
Go ahead! Give it a try.

```python
#input code
all_my_single_numbers = [5,6,7,8]
double_values = #[ Your Code Here ]

#example code
all_my_single_numbers = [5,6,7,8]
double_values = [num * 2 for num in my_lotto_nums]
print(double_values)
```
This program was a little bit more tricky! Our **expression** is to double the value of the current iterator. Let's try it one more time. Let's take the list_1 and add 'ing' to each element.

#### Exercise 1.5
```python
# copy list_1 into list_2
list_1 = ['i', 'love', 'list', 'comprehensions']
list_2 = #[expression for item in list]
# example code
list_2 = [word+'ing' for word in list_1]
print(list_2)
```
Excellent job! Our **expression** was to add "ing" to the **item**.

```python
element + 'ing'
```
#### Connection

#### Exercise 1.6
Let's take another look at our mystery program and begin to plan how we can break it down into a **list comprehension**. We will begin by looking at how we can use conditionals inside our **list comprehension**. Before moving on to the next lesson, first try  using a conditional in a **list comprehension** to copy only the even numbers of a list.


For example

```python
all_my_single_numbers = [5,6,7,8]
# output >>>
even_nums = [6,8]
```
Here is some pseudocode to act as a guide.

```python
even_nums = [expression for item in list if conditional]
```

Think about the parts of a **list comprehension**, (expression, item, list), and the above pseudocode. Go ahead and give it a try!

```python
# user input here
all_my_single_numbers = [5,6,7,8]
even_nums = # [expression for item in list if conditional]
# example input
even_nums = [num for num in all_my_single_numbers if num % 2 == 0]


```
