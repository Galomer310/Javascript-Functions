// ex1
// #1
// function funcOne() {
//     let a = 5; // 'a' is declared with let and is scoped to the function.
//     if (a > 1) {
//         a = 3; // 'a' is reassigned within the function scope.
//     }
//     alert(`inside the funcOne function ${a}`); // Prediction: This will alert "inside the funcOne function 3".
// }

// #1.1 - run in the console:
// funcOne();

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// If 'a' is declared with const, it will cause an error when trying to reassign 'a' to 3 
// because const variables cannot be reassigned after their initial declaration.


// #2
// let a = 0; // Global variable 'a'.
// function funcTwo() {
//     a = 5; // Reassigns the global 'a' to 5.
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`); // Alerts the current value of the global 'a'.
// }

// #2.1 - run in the console:
// funcThree(); // Prediction: This will alert "inside the funcThree function 0".
// funcTwo();
// funcThree(); // Prediction: This will alert "inside the funcThree function 5".

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// If 'a' is declared with const, attempting to reassign it in funcTwo() will cause an error
// because const variables cannot be reassigned.


// #3
// function funcFour() {
//     window.a = "hello"; // Assigns a property 'a' to the global window object.
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`); // Refers to the global variable or property 'a'.
// }

// #3.1 - run in the console:
// funcFour();
// funcFive(); // Prediction: This will alert "inside the funcFive function hello"
// because window.a overwrites any global variable with the same name.


// #4
// let a = 1; // Global variable 'a'.
// function funcSix() {
//     let a = "test"; // Local variable 'a' scoped to funcSix.
//     alert(`inside the funcSix function ${a}`); // Refers to the local 'a'.
// }

// #4.1 - run in the console:
// funcSix(); // Prediction: This will alert "inside the funcSix function test".

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// If 'a' inside funcSix is declared with const, there will be no issue because it is not reassigned. 
// The behavior will remain the same as with let.


// #5
// let a = 2; // Global variable 'a'.
// if (true) {
//     let a = 5; // New 'a' scoped to the if block.
//     alert(`in the if block ${a}`); // Refers to the block-scoped 'a'.
// }
// alert(`outside of the if block ${a}`); // Refers to the global 'a'.

// #5.1 - run the code in the console
// Prediction: 
// This will alert "in the if block 5" because the block-scoped 'a' is 5.
// Then it will alert "outside of the if block 2" because the global 'a' remains unchanged.

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// If the variables inside the if block and globally are declared with const, the behavior will not change 
// because they are in different scopes and not reassigned. The predictions remain the same.


// ex2

// const winBattle = () => true;

// const experiencePoints = winBattle() ? 10 : 1; 

// console.log(experiencePoints); 

// ex3
// const isString = (value) => typeof value === 'string';

// console.log(isString('hello'));
// console.log(isString([1, 2, 3, 4]));

// ex4
// const sum = (a, b) => a + b;
// console.log(sum(2, 3)); 

// ex5
// function convertToGrams(weightInKg) {
    // return weightInKg * 1000;
// }

// Invoke the function
// console.log(convertToGrams(5)); // 5000

// const convertToGramsExpression = function(weightInKg) {
    // return weightInKg * 1000;
// };

// Invoke the function
// console.log(convertToGramsExpression(3)); // 3000

// const convertToGramsArrow = (weightInKg) => weightInKg * 1000;

// Invoke the function
// console.log(convertToGramsArrow(7)); // 7000


// ex6
// const fortuneTeller = ((numOfChildren=2, partnerName='angelica', geo='ISL', job='programer') => {
//     console.log(`You will be a ${job} in ${geo}, and married to ${partnerName} with ${numOfChildren} kids.`)
// })();

