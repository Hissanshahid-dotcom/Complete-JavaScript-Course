// =========================================================================
// CHAPTER 06: JavaScript in the Browser (BOM & DOM)
// =========================================================================
// Author: Muhammad Hissan Shahid
// Description: Mastering Browser Object Model (BOM) & Document Object Model (DOM)
// =========================================================================
// 0. THE WINDOW OBJECT (The Root)
// =========================================================================
/* Window object browser ka main container hai. 
   Sab kuch (alert, prompt, document) iske andar hi rehta hai.
*/
console.log("Global Window Object:", window);

// Window ki properties
console.log("Window Inner Width:", window.innerWidth);
console.log("Window Inner Height:", window.innerHeight);

// =========================================================================
// 1. BOM (Browser Object Model)
// Interacting with the user via browser window
alert("Welcome! This is a BOM practice session.");
let userName = prompt("What is your name?", "Hissan");
let isAdult = confirm("Are you 18+?");

if (isAdult) {
    console.log("Welcome, " + userName + ". You are a mature user.");
} else {
    console.log("Access denied, " + userName + ".");
}

// 2. CONSOLE OBJECT (Advanced Logging)
console.info("Info: Starting DOM manipulation.");
console.table([10, 20, 30, 40]);
console.time("TaskTimer");
// Simulate some work
let x = 0;
for(let i=0; i<1000; i++) { x += i; }
console.timeEnd("TaskTimer"); // Measures execution time

// 3. DOM MANIPULATION (Accessing & Styling)
// Using querySelector (The Professional Way)
let bodyElement = document.querySelector("body");

// Styling the page using camelCase properties
bodyElement.style.backgroundColor = "lightyellow";
bodyElement.style.color = "darkblue";

console.log("DOM Manipulation complete: Background changed to lightyellow.");

// =========================================================================
// SUMMARY OF KEY CONCEPTS:
// - BOM: alert(), prompt(), confirm() interact with browser window.
// - Console Object: Used for debugging, timing, and structured data tables.
// - DOM: The structure of HTML. document.querySelector() is the main 
//   tool to select elements and apply changes to them.
// =========================================================================
