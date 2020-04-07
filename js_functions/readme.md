# How to declare and call a function in JavaScript
![function](function.png)

### Memory Matrix


| Programming Term | Definition |
|:-----------------|:------------|
| Function| A reusable block of code that can take data in and return data out|
| Method | Like a function but for an object|
| Parameter| A value that is passed into a function. Defined when you create the function|
| Argument|  A value that is passed into a function. Given when you call the function|
| ES6 | Style Guide|


### Code Together

Goal: Create a function that returns how long a user has been alive for.


**Define the function**
```js
function checkAge(birthYear) {
  // local scope
  let age = 2020 - birthYear
  // data outputted by function
  return age
}

```

**Call the function**
```js
// how to run the function
checkAge(1988)
// save output of function to variable
let userAge = checkAge(2001)
```


## Check for understanding
Emoji Response<br>

An argument is defined when one

🐕: Creates the function<br>
🐱: Calls the function

## Student Lab
We want to return how long a person has been alive for. Now, try to calculate with precision the following:

- How many months
- How many weeks
- How many days ( don't forget leap years!)
- Try using a date library if you are super far ahead

**Plan ahead**
- What parameters do you need to add to the checkAge function?
- What user errors can we expect?
- Programming is a naming problem. Be mindful how you name functions, parameters, and variables.




### Next Steps
Next Lesson: Using ES6 to create arrow functions!<br>
Extensions: Variable scope, user input, and date and time libraries
