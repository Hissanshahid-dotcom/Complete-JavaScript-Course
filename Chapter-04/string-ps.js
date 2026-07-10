// =========================================================================
// CHAPTER 04: JavaScript Strings - Practice Set Reference Guide
// =========================================================================
// Author: Muhammad Hissan Shahid
// Description: Professional notes on String Methods, Loops, and Type Conversion.

// 1. BASIC STRING METHODS
let cases = "Hissan";
console.log(cases.length);
console.log(cases.toUpperCase());
console.log(cases.toLowerCase());
console.log(cases.slice(2, 5));
console.log(cases.slice(2));
console.log(cases.replace("Hi", "hearo"));
console.log(cases.trim());
console.log(cases[4]);

// 2. TEMPLATE LITERALS & CONCATENATION
let boy1 = "hayjun";
let boy2 = "heyjug";
console.log(`${boy1} is a friend of ${boy2}`);
console.log(boy1.concat("is a friend of"), boy2);

// 3. STRING LOOPS (Iteration)
for (let i = 0; i < cases.length; i++) {
    console.log(i);
}
for (let i = 0; i < cases.length; i++) {
    console.log(`Index ${i} contains: ${cases[i]}`);
}

// 4. STRING SEARCHING METHODS
const year = "Thats a spectual year";
const year1 = "Thats a specious set Thats a spectual year";
console.log(`and this is "${year}" "${year1.includes(year)}? "is: isnot"" `);
console.log(year.endsWith("year"));
console.log(year.startsWith("Thats"));

// 5. LOWERCASE CONVERSION
let read = "CYCLE";
console.log(read.toLowerCase());

// 6. TYPE CONVERSION (String to Number)
let tr = "this is 10000000";
console.log("this is 10000000".length);
let rar = tr.slice(7).trim();
console.log(rar);
console.log(typeof (rar)); // String
let rare = parseInt(rar);
console.log(typeof (rare)); // Number

// 7. STRING REPLACEMENT (Immutability Concept)
let stree = "Most-Popular";
console.log(stree.replace("Pop", "kgf"));

// =========================================================================
// END OF CHAPTER 04 PRACTICE SET
// =========================================================================
