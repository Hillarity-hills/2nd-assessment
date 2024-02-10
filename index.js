// Arrays:


// 1. Create an array containing the numbers 1 to 10.

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// 2. Access the third element of the array.

let thirdArray = numberArray[2];
console.log(thirdArray);


// 3. Change the value of the last element to 0.


// numberArray[numberArray.length - 1] = 0;

// 4. Add a new element to the end of the array.

numberArray.push(9)

console.log(numberArray);



// 5. Remove the first element from the array.

numberArray.shift();
console.log(numberArray);


// 6. Find the index of the number 5 in the array.

let index = numberArray.indexOf(5)
console.log(index);


// 7. Check if the array contains the number 8.

let contain = numberArray.includes(8);
console.log(contain);


// 8. Reverse the order of the elements in the array.

let reversal = numberArray.reverse();
console.log(reversal);



// 9. Sort the array in ascending order.

let sorted = numberArray.sort();
console.log(sorted);



// 10.Create a new array containing only the even numbers from the original array.

let evenNumbers = [];

for (let num of numberArray){
    if(num % 2 === 0){
        evenNumbers.push(num);
    }
}

console.log(evenNumbers)




// While loops:


// 11.Write a while loop that prints the numbers from 1 to 10.

let number = 1;

while(number <= 10){
    console.log(number);
    number++;
}



// 12.Write a while loop that sums all the numbers in an array.

let sumArray = [55, 67, 46, 76, 60, 89, 23, 69, 77, 100];
let x = 0
let sum = 0;

while(x < sumArray.length){
    sum += sumArray[x];
    x++;
}
console.log(sum);



// 13.Write a while loop that finds the largest number in an array.
let x = 0;
let largestNummber = 0

while(x < numberArray.length){
    if (numberArray[x] > largestNummber)
    largestNummber = numberArray[x];
    console.log(largestNummber)

    x++;
}

console.log(`The largest number is ${largestNummber}`);


// 14.Write a while loop that prompts the user for input until they enter a valid email
// address.

let emailAddress = window.prompt("Please input your emaill address")

while(!emailAddress.includes('@')){
    emailAddress = window.prompt("Please input a valid email address")
}

console.log(`Your email ${emailAddress} has been recorded`);



// 15.Write a while loop that simulates a dice roll until a 6 is rolled

let rollDice = Math.floor(Math.random() * 10);
let numberOfRolls = 0;
while(rollDice !== 6){
    rollDice =  Math.floor(Math.random() * 10);
    console.log(rollDice)
    numberOfRolls++;
}

console.log(`After rolling for ${numberOfRolls} attempts, it finally landed a 6`)


// ForEach Method:
// 16.Use the forEach method to print each element of an array.

let forArray = [`Hillary`, `John`, `Davido`, `Tyla`, `Burna`,`Cynthia`, `Starr`, `Moe`, `James`, `Daniel`];

forArray.forEach(function (text, index) {
    console.log(`${index} : ${text}`)
})


// 17.Use the forEach method to double each element of an array.

forArray.forEach(function (doubler, index, array){
    let doubled = doubler * 2;
    console.log(`for ${doubler} at ${index} : ${doubled}, ${array}`)
})



18.Use the forEach method to create a new array containing only the strings
from a mixed array.

let mixedArray = [1, 'apple', 3, 'banana', 'orange', true, 'grape', false];

let stringArray = [];

mixedArray.forEach((element) => {
    if (typeof element === 'string') {
        stringArray.push(element);
    }
});

console.log(stringArray); 


// 19.Use the forEach method to find the sum of all even numbers in an array.

let evenNumberSum = 0;
forArray.forEach(function (number){
    
    if(number % 2 === 0){
        evenNumberSum += number;
        console.log(`${evenNumberSum} += ${number}`);
    }
    console.log(evenNumberSum);
})


// 20.Use the forEach method to filter an array based on a certain condition.

const numbers = [1, 2, 3, 4, 5, 6];

const filteredNumbers = numbers.filter(number => number > 3);

console.log(filteredNumbers); 



// 21.Define a function that accepts any number of arguments using rest
// parameters.

function restPara(...args){
    console.log(args);
    return args;
}

restPara('me', 'them', 'Joseph');


// 22.Use rest parameters to create a function that calculates the average of a list
// of numbers.

let average = 0;
function averageCalculation(...medianCheck){
    for(let median of medianCheck){
        average += median;
    }

    average = average / medianCheck.length;
    console.log(average)
}

averageCalculation(10, 25, 60, 50, 36, 57, 35, 69 );



// 23.Use rest parameters to create a function that logs all the arguments passed
// to it.

function logAll(...restParam){
    for(let para of restParam){
        console.log(para);
    }
}

logAll('Hillary', 34, 'Another string', true, 3.54);




// 24.Use rest parameters to create a function that combines multiple arrays into a
// single array.

const concatenates = [];
function combineAll(...concats){
    for(let concat of concats){
        concatenates.push(...concat);

    }
    console.log(concatenates);
}

combineAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['string', 'another string', 'third one'], [true, false,], [3.95]);




// 25.Use rest parameters to create a function that accepts a variable number of
// objects and merges them into a single object.

const combObjects = {};

function combineAll(...objects) {
    for (let obj of objects) {
        Object.assign(combObjects, obj);
    }
    console.log(combObjects);
}

combineAll(
    { name: 'Ubong', age: 23, school: 'Uniuyo' },
    { name: 'John', age: 25, occupation: 'Engineer' },
    { city: 'New York', country: 'USA' }
);

Object literals:




// 26.Create an object literal representing a person with properties for name, age,
// and address.

let userInfo = {
  name: 'Hillary',
  age: 16,
  address: 'Javacript',
  school : `Dev and Design`
}


// 27.Access the name property of the person object.

console.log(userInfo.name);



// 28.Change the value of the age property.

userInfo.address = `Design`;
console.log(userInfo.address);



// 29.Add a new property to the object called "email".

userInfo.addNewProperty('country', 'Ghana');

console.log(userInfo);


// 30.Delete the address property from the object.

delete userInfo.address



// For loops:


// 31.Write a for loop that prints the numbers from 1 to 10.

const { lookup } = require("dns");

for(let i = 1; i <= 10; i++){
    console.log(i)
}




// 32.Write a for loop that sums all the numbers in an array.

const arraySum = [5,6,89,54,56,78,4,56,7,8,5,4,68,90,6,4,567]
let sumAll = 0;
for(let x = 0; x < arraySum.length; x++){
    sumAll += arraySum[x];
}

console.log(sumAll);



// 33.Write a for loop that finds the xst number in an array.

const largestNumArray = [23, 423, 43, 434, 34, 3, 65, 546, 12, 5, 58, 3];

let largestNum = 0;

for (let x = 0; x < largestNumArray.length; x++) {
  largestNum = largestNum < largestNumArray[x] ? largestNumArray[x] : largestNum;
}

console.log(largestNum);




// 34.Write a for loop that creates a new array containing the squares of the
// numbers in another array.

const toBeSquared = [23, 423, 43, 434, 34, 3, 65, 546, 12, 5, 58, 3]
let squared = []
for(let z = 0; z < toBeSquared.length; z++){
    squared.push(toBeSquared[z]* toBeSquared[z]);
}
console.log(squared)
console.log(toBeSquared)



// 35.Write a for loop that iterates over an object's properties and values.

let userInfo = {
    name: 'Hillary',
    age: 16,
    address: 'Javascript'
}

for(let property in userInfo){
    if(userInfo.hasOwnProperty(property)){
        console.log(`${property}: ${userInfo[property]}`);
    }
}


// 36.Use a for...of loop to print each element of an array.

const array = [1, 2, 3, 4, 5];

for (const element of array) {
    console.log(element);
}



// 37.Use a for...of loop to create a new array containing the string lengths of each element in another array.

const array = ['apple', 'banana', 'orange', 'kiwi'];
const lengthsArray = [];

for (const element of array) {
    lengthsArray.push(element.length);
}

console.log(lengthsArray); 


// 38..Use a for...of loop to iterate over the keys of an object.

const obj = { a: 1, b: 2, c: 3 };

for (const key of Object.keys(obj)) {
    console.log(key);
}


// 39..Use a for...of loop to iterate over the values of an object

const obj = { a: 1, b: 2, c: 3 };

for (const value of Object.values(obj)) {
    console.log(value);
}



// 40..Use a for...of loop to iterate over the values of an object

const obj = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(obj)) {
    console.log(`Key: ${key}, Value: ${value}`);
}




// Additional Questions:

// 41.Explain the difference between a while loop and a for loop.

// Ans:
While Loop: Repeats a task while something is true. It checks if it's true before doing the task each time.

For Loop: Goes through a list of things one by one and does something for each thing. You don't need to worry about counting or checking, it handles that for you.


// 42.When would you use the forEach method over a traditional for loop?

// Ans:

I would use the forEach method over a traditional for loop when i want a simpler and more expressive way to iterate over each element of an array without needing to manage indices or worry about array bounds. It's particularly useful for clarity, readability, and when you don't need to modify the array or access indices. 



43.What are the benefits of using rest parameters?

Ans:

Rest parameters in JavaScript let you accept lots of different arguments in a function without having to say exactly how many there will be. They make your code easier to write and understand because you get all the arguments in one neat list. It's like having a basket to collect all your arguments in one place.



// 44.How can you create nested objects using object literals?

// Ans:

To create nested objects using object literals in JavaScript, you just define objects inside other objects,



// 45.What are the different ways to iterate over an array in JavaScript?

// Ans:

For Loop: Traditional loop using an index.

For...of Loop: Iterates over array elements directly.

Array.forEach(): Executes a function for each array element.

Array.map(): Creates a new array by applying a function to each element.

Array.filter(): Creates a new array with elements that pass a test.

Array.reduce(): Reduces the array to a single value using a function.

Each method offers a unique way to handle array elements, catering to different needs.



// 46.Write a function that removes duplicates from an array.

// Ans:

function removeDuplicates(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}
const array = [1, 2, 3, 3, 4, 5, 5];
const result = removeDuplicates(array);
console.log(result); 


// 47. Write a function that merges two arrays without duplicates.

function mergeArraysWithoutDuplicates(array1, array2) {
  const mergedArray = [...array1, ...array2];
  return [...new Set(mergedArray)];
}
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const result = mergeArraysWithoutDuplicates(array1, array2);
console.log(result); 


// 48. .Write a function that checks if two arrays have any common elements

function haveCommonElements(array1, array2) {
  for (let element of array1) {
  
      if (array2.includes(element)) {
          return true; // 
      }
  }
  
  return false;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(haveCommonElements(array1, array2)); 


//  49.Write a function that creates a new array containing only the unique elements from two arrays

function mergeArraysUnique(array1, array2) {
  const mergedArray = [...array1, ...array2];
  return [...new Set(mergedArray)];
}

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
console.log(mergeArraysUnique(array1, array2)); 


//  49..Write a function that flattens a nested array into a single-level array.

function flattenArray(array) {
  const flattened = [];
  array.forEach(element => {
      if (Array.isArray(element)) {
          flattened.push(...flattenArray(element));
      } else {
          flattened.push(element);
      }
  });
  return flattened;
}


const nestedArray = [1, [2, [3, 4]], 5, [6]];
console.log(flattenArray(nestedArray));
















































