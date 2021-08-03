JavaScript Review 2 - Functions, Loops, Object Literals

This 5 challenge review covers core JavaScript concepts and is expected to take Students 1.5 hr or less
Directions

    Create a new public GitHub repository called javascript-concept-review-level-2
    Clone repository and copy the contents of this README file to your README
    Create index.html,style.css, and main.js files in your project
    Code your answers to each of the 5 questions using the Standard JavaScript Template described below:

    NOTE: Start with a separate JavaScript file with a function called main(). This should be the first function called and point of entry for execution. All other code to accomplish whatever challenge should be in it's own function called from the main() function. No JavaScript code should execute outside of a function. This pattern should be considered our 'Standard JavaScript Template' for all exercises.

main() {
    // call exercise1()
    // call excercise2()
    // etc.
}

Before you type ANY CODE, write out your steps to solve each exercise in each file. Use single line comments to pseudocode what you need to do to solve the problem then fill in the blanks.

// JUST AN EXAMPLE!
// Create an array
// Load objects into the array
// Iterate through each element in the array and print the element

1: Text Manipulation and Arrays

Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all caps.

ex. in a galaxy far far away -> in A galaxy FAR far AWAY
2: Text Manipulation and Arrays

Write a JavaScript function that accepts a word in all lowercase or in all uppercase, and returns the word in the opposite case. Hint: see toLowercase()

ex. hello -> HELLO or HOWDY -> howdy
3: Functions and Arrays
Return first n number of elements

Write a JavaScript function called first() to get the first n element(s) of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

ex:

console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],1));

Expected Output :

[7, 9, 0] 
[7] 

3b: Return last n number of elements

Write a JavaScript function called last to get the last n number of element(s) of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

ex:

console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));

Expected Output :

[9, 0, -2] 
[7, 9, 0, -2]

4: Array Manipulation

Write a JavaScript function to remove an element with a specific value from an array.

ex:

console.log(remove_array_element([2, 5, 9, 6], 5));

Expected Output:

[2, 9, 6]

5: Object Literals and Arrays

Create a new empty array called pet_list. Add 3 pet objects (via object literals) to the pet_list array (each pet should have a type, age and a color property) You can choose the pets.

Iterate the list of pets and print the properties for each pet