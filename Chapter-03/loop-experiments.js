// =========================================================================
// CHAPTER 03: JavaScript Arithmetic & Assignment Operators (Complete Log)
// =========================================================================
// Author: Muhammad Hissan Shahid
// Description: Detailed edge cases, loop behaviours, and mathematical logic in JS.

let n = 5; // Default loop limit used for tests

// -------------------------------------------------------------------------
// 1. ADDITION OPERATOR (+=)
// -------------------------------------------------------------------------
// Standard sum accumulator. Initial 0 does NOT freeze the calculation.
let sum1 = 0;
for (let i = 0; i < n; i++) {
    sum1 += i; // 0 + 1 + 2 + 3 + 4
}
console.log("Addition (Index i):", sum1); // Output: 10

let sum2 = 0;
for (let i = 0; i < n; i++) {
    sum2 += (i + 1); // 1 + 2 + 3 + 4 + 5
}
console.log("Addition (i + 1):", sum2); // Output: 15


// -------------------------------------------------------------------------
// 2. MULTIPLICATION OPERATOR (*=)
// -------------------------------------------------------------------------
// The Zero Trap: If initial value is 0, any multiplication results in 0.
let times0 = 0;
for (let i = 0; i < n; i++) {
    times0 *= (i * 1); 
}
console.log("Multiplication (Started with 0):", times0); // Output: 0

// Correct usage starting with 1 (Factorial style)
let times1 = 1;
for (let i = 0; i < n; i++) {
    times1 *= (i + 1); // 1 * 1 * 2 * 3 * 4 * 5
}
console.log("Multiplication (Started with 1):", times1); // Output: 12


// -------------------------------------------------------------------------
// 3. EXPONENTIATION OPERATOR (**=)
// -------------------------------------------------------------------------
// Edge Case: 0 raised to the power of 0 (0 ** 0) evaluates to 1 in Math/JS.
let exponential1 = 0;
for (let i = 0; i < n; i++) {
    exponential1 **= (i ** 1); // Round 1 evaluates 0 ** 0 -> changes variable to 1
}
console.log("Exponentiation (i ** 1):", exponential1); // Output: 1

let exponential2 = 0;
for (let i = 0; i < n; i++) {
    exponential2 **= (i + 1); // Round 1 evaluates 0 ** 1 -> stays 0
}
console.log("Exponentiation (i + 1):", exponential2); // Output: 0


// -------------------------------------------------------------------------
// 4. DIVISION OPERATOR (/=)
// -------------------------------------------------------------------------
// Rule A: Any positive number divided by 0 results in Infinity.
let divideInfinity = 1;
for (let i = 0; i < n; i++) {
    divideInfinity /= (i / 1); // Round 1 evaluates 1 / 0
}
console.log("Division (1 / 0):", divideInfinity); // Output: Infinity

// Rule B: 0 divided by 0 is indeterminate and results in NaN (Not a Number).
let divideNaN = 0;
for (let i = 0; i < n; i++) {
    divideNaN /= (i / 1); // Round 1 evaluates 0 / 0
}
console.log("Division (0 / 0):", divideNaN); // Output: NaN

// Note: 0 / 1 evaluates safely to 0 (completely opposite to 1 / 0).


// -------------------------------------------------------------------------
// 5. SUBTRACTION OPERATOR (-=)
// -------------------------------------------------------------------------
// Standard subtraction. Tracks signs and accumulation correctly.
let subtract = 0;
for (let i = 0; i < n; i++) {
    subtract -= (i - 1); // Step breakdown tracking negative and positive shifts
}
console.log("Subtraction Final Result:", subtract); // Output: -5


// -------------------------------------------------------------------------
// 6. MODULUS OPERATOR (%=)
// -------------------------------------------------------------------------
// Remainder tracking. Dividing/modding by 0 causes indeterminate states.
let modulus = 0;
for (let i = 0; i < n; i++) {
    modulus %= (i % 1); // Round 1 evaluates 0 % 0 -> invalid math mapping
}
console.log("Modulus (0 % 0):", modulus); // Output: NaN
