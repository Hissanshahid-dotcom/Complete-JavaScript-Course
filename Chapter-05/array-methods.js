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
