// =========================================================================
// CHAPTER 04: JavaScript Strings & Advanced Manipulations (Complete Guide)
// =========================================================================
// Author: Muhammad Hissan Shahid
// Description: Professional notes on String creation, indexing, template 
// literals, escape sequences, and standard built-in methods.

// 1. STRING INITIALIZATION & BASICS
let str1 = "hello"; // Double quotes
let str2 = 'tree';  // Single quotes
console.log("String Length:", str1.length);

// 2. STRING INDEXING (Zero-based)
// Strings are immutable, meaning original string cannot be changed.
console.log("Accessing index 0:", str1[0]); // 'h'
console.log("Accessing index 4:", str1[4]); // 'o'

// 3. TEMPLATE LITERALS (ES6 Professional Standard)
// Uses backticks (`) for dynamic string interpolation
let h = "Prince";
let j = "Persia";
let sentence = `${h} is met a ${j} from over the whole life`;
console.log("Interpolated Sentence:", sentence);

// 4. ESCAPE SEQUENCES
// Used for special characters inside strings
let path = "C:\\Users\\Hissan";
let complexString = "Read\nEvery\tWord\rCorrectly";
console.log("Escape Sequences Example:", complexString);

// 5. PROFESSIONAL STRING METHODS (Standard Practice)
let cases = " Hissan ";

// Transformation Methods
console.log("Uppercase:", cases.toUpperCase());
console.log("Lowercase:", cases.toLowerCase());

// Substring Methods
console.log("Slice (2,5):", cases.slice(2, 5)); // Extracts portion
console.log("Slice (2):", cases.slice(2));       // Extracts until end

// Modification & Search
console.log("Replace:", cases.replace("Hi", "hearo"));
console.log("Trimmed String:", cases.trim());   // Removes white spaces

// 6. PRACTICE & APPLICATION
// Looping through a string to access each character
console.log("--- Character Iteration ---");
for (let i = 0; i < cases.length; i++) {
    console.log(`Index ${i} contains: ${cases[i]}`);
}

// Concatenation example
let boy1 = "hayjun";
let boy2 = "heyjug";
console.log(boy1.concat(" is a friend of ", boy2));

// =========================================================================
// FINAL STATUS: Chapter 04 Strings completed successfully!
// This file is ready to be committed to GitHub.
// =========================================================================
