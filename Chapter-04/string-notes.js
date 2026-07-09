// =========================================================================
// CHAPTER 04: JavaScript Strings & Advanced Manipulations
// =========================================================================
// Author: Muhammad Hissan Shahid
// Description: Foundation of String Data Types, Indexing, and Interpolation.

// 1. STRING INITIALIZATION
// Using both single and double quotes as standard
let str1 = "hello";
let str2 = 'tree';

// 2. STRING INDEXING
// Accessing characters by their position (Zero-based index)
console.log("Index 0 of str1:", str1[0]);
console.log("Index 1 of str1:", str1[1]);

// 3. TEMPLATE LITERALS (Professional String Interpolation)
// Uses backticks (`) for dynamic string construction
let h = "Prince";
let j = "Persia";
let sentence = `${h} is met a ${j} from over the whole life`;
console.log("Template Literal Output:", sentence);

// 4. ESCAPE SEQUENCES
// Handling special characters within strings
let s = "read\rers";
let w = 'poet\rry';
console.log("Carriage Return sequence test:", s, w);

// =========================================================================
// NOTE: Chapter 04 is currently in progress. 
// More methods and manipulations to be added as we explore further.
// =========================================================================
