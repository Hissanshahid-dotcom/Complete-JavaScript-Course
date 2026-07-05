// ==========================================
// CHAPTER 03: Loops & Arithmetic Edge Cases
// ==========================================

// 1. Addition Logic (+1 Shift vs Index match)
let sum1 = 0;
let n = 5; 
for(let i = 0; i < n; i++) {
    sum1 += i; // Result: 10 (0+1+2+3+4)
}

let sum2 = 0;
for(let i = 0; i < n; i++) {
    sum2 += i + 1; // Result: 15 (1+2+3+4+5)
}

// 2. Multiplication Rule (The Zero Trap)
let times = 0;
for(let i = 0; i < n; i++) {
    times *= i * 1; // Result: 0 (Initial 0 makes everything zero)
}

// 3. Exponentiation Operator Twister
let exponential = 0;
for(let i = 0; i < n; i++) {
    exponential **= i ** 1; // Result: 1 (Because 0**0 evaluates to 1 in JS)
}

// 4. Division Forbidden Rules (Infinity vs NaN)
let divide1 = 1;
for(let i = 0; i < n; i++) {
    divide1 /= i / 1; // Result: Infinity (1 / 0 makes it Infinity)
}

let divide2 = 0;
for(let i = 0; i < n; i++) {
    divide2 /= i / 1; // Result: NaN (0 / 0 is Indeterminate)
}

// 5. Modulus Edge Cases
let modulus = 0;
for(let i = 0; i < n; i++) {
    modulus %= i % 1; // Result: NaN (0 % 0 behaves like 0 / 0)
}
