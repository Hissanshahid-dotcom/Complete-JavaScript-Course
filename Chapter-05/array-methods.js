// =========================================================================
// CHAPTER 05: JavaScript Array Methods (Practice Set)
// =========================================================================
// Author: Muhammad Hissan Shahid
// Description: Array transformation, mutation, and string conversion methods.

let pearpick = [44, 33, 333, 322, 111];
console.log("Original Array:", pearpick);

// 1. STRING CONVERSION
let pear = pearpick.toString();
console.log("Type after toString:", typeof pear); // "string"

// 2. JOIN METHOD (Custom Separator)
// join() se hum array ke elements ko kisi bhi character se jod sakte hain
console.log("Joined Array:", pearpick.join(" sorted__ "));

// 3. MUTATION METHODS (Modifying Original Array)
// pop(): Removes the last element
console.log("Popped element:", pearpick.pop()); 
console.log("Array after pop:", pearpick);

// push(): Adds element to the end
pearpick.push("string__");
console.log("Array after push:", pearpick);

// shift(): Removes the first element
console.log("Shifted element:", pearpick.shift());
console.log("Array after shift:", pearpick);

// unshift(): Adds element to the beginning
pearpick.unshift("adding");
console.log("Array after unshift:", pearpick);

// =========================================================================
// KEY TAKEAWAY:
// - pop() / push() modify the END of an array.
// - shift() / unshift() modify the START of an array.
// =========================================================================
