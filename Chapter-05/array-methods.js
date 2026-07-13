// =========================================================================
// CHAPTER 05: JavaScript Arrays & Advanced Methods
// =========================================================================
// Author: Muhammad Hissan Shahid
// Description: Comprehensive guide to Array manipulation, mutation, and conversion.

// 1. ARRAY INITIALIZATION & ACCESS
let arr = [26, 23, 55, 44, 78];
console.log("Original Array:", arr);

// Accessing and modifying elements
arr[0] = 555; // Updating index 0
arr[5] = 647; // Adding new element at index 5
console.log("Modified Array:", arr);

// 2. ITERATING OVER ARRAYS (Using For Loop)
// Professional way to access each element
for (let i = 0; i < arr.length; i++) {
    console.log(`Index ${i} contains: ${arr[i]}`);
}

// 3. ARRAY STRING CONVERSION
let pearpick = [44, 33, 333, 322, 111];
console.log("Type of original array:", typeof pearpick); // "object"

let pear = pearpick.toString();
console.log("Type after toString:", typeof pear); // "string"

// 4. JOIN METHOD
// Joins array elements into a string with a custom separator
console.log("Joined Array:", pearpick.join(" sorted__ "));

// 5. MUTATION METHODS (Modifying the Original Array)
// pop(): Removes the last element and returns it
console.log("Popped element:", pearpick.pop()); 
console.log("After pop:", pearpick);

// push(): Adds a new element to the end and returns new length
pearpick.push("string__");
console.log("After push:", pearpick);

// shift(): Removes the first element and returns it
console.log("Shifted element:", pearpick.shift());
console.log("After shift:", pearpick);

// unshift(): Adds a new element to the beginning and returns new length
pearpick.unshift("adding");
console.log("After unshift:", pearpick);

// =========================================================================
// SUMMARY OF ARRAY METHODS:
// - toString(): Converts array to comma-separated string.
// - join(): Converts array to string with specific separator.
// - pop(): Removes element from END.
// - push(): Adds element to END.
// - shift(): Removes element from START.
// - unshift(): Adds element to START.
// =========================================================================
// =========================================================================
// 7. ARRAY ITERATION LOOPS
// =========================================================================

let looper = [25, 32, 45, 64, 21];

// forEach(): Calls a function for each array element
console.log("Using forEach:");
looper.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});

// for...of: Iterates over the values of an array
console.log("Using for...of:");
for (let val of looper) {
    console.log(val);
}

// for...in: Iterates over the keys (indices) of an array
console.log("Using for...in:");
for (let key in looper) {
    console.log(`Key ${key}: ${looper[key]}`);
}

// =========================================================================
// SUMMARY OF ITERATION METHODS:
// - forEach(): Best for applying a function to each item.
// - for...of(): Best for clean, readable access to array values.
// - for...in(): Best for accessing indices (keys) of the array.
// =========================================================================
// =========================================================================
// 6. ADVANCED ARRAY METHODS (Functional Programming)
// =========================================================================

// map(): Creates a new array by applying a function to every element
let p = [1, 2, 3, 4, 5];
let per = p.map((element) => element * element); 
console.log("Map (Squared Array):", per);

// filter(): Filters elements based on a condition
let r = [23, 12, 21, 53];
let filteredArray = r.filter((val) => val < 34);
console.log("Filter (Values < 34):", filteredArray);

// reduce(): Reduces array to a single value
let code = [1, 2, 3, 4, 5];
let sum = code.reduce((h1, h2) => h1 + h2);
console.log("Reduce (Sum of Array):", sum);

// Array.from(): Converts strings or nodeLists to Arrays
let gears = "GEAR";
console.log("Array.from string:", Array.from(gears));

// =========================================================================
// SUMMARY OF ADVANCED METHODS:
// - map(): Creates NEW array (doesn't change original).
// - filter(): Filters elements based on test (returns NEW array).
// - reduce(): Performs operation on elements and returns a SINGLE value.
// - Array.from(): Creates an array from an object/string.
// =========================================================================
