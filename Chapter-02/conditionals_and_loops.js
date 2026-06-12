// ==========================================
// 🚀 CHAPTER 2: CONDITIONAL EXPRESSIONS
// ==========================================

// 1. Learning Flow Control Structure & Interactions
// Exploring alert, prompt and chaining conditions
let userName = prompt("Hy whats your name?");
console.log("My name is", userName);
console.log("My name is " + userName);

alert("So are you ready to cross some interrupted and trespassing area?");

// 2. Chained Conditions via Logical Evaluation
let v = 22;
let q = 22;

// Simple relational check
if (v >= q) {
    console.log("This is a valid statement"); // Triggers True
}

// Chained Logic Verification using AND (&&)
if (v >= q && q <= v) {
    console.log("I know this first statement shows a twisted scene");
} else {
    console.log("That's the state is not a rare state only checkmate");
}

// Multi-conditional Ladder using OR (||)
if (q > v) {
    console.log("You are a checkmate man"); /* False */
} else if (q > v || v >= q) {
    alert("I think You are a real checkmate"); /* True */
} else {
    console.log("This is not a rare and versatile checkmate");
}

// 3. Mutation: Safe String-to-Integer Typecasting
let r = prompt("Pick a number");
console.log(r);
console.log(typeof r); // Initially outputs: 'string'

// Using global parsing mechanism to explicitly mutate data types safely
let p = parseInt(r); 
console.log(typeof p); // Successfully mutated to: 'number'

// 4. Compact Short-Circuit Evaluation (Ternary Workflows)
let g = 33;
let t = 34;

// Grouped arguments parsing to protect functional execution structure
console.log("You are a js", g >= t ? "killer" : "criminal");


// ==========================================
// 📝 CHAPTER 2: CONTINUE (PRACTICE SET)
// ==========================================

// Problem No 1: Verify if user age lies strictly inside a specific range (10 to 20)
let targetAge = 15;

if (targetAge >= 10 && targetAge <= 20) {
    console.log("Your age lies between 10 and 20");
} else {
    console.log("Your age does not lie between 10 and 20");
}

// Problem No 2: Multi-Way State Evaluation using Switch Statements
let caseSelection = prompt("Enter the case number");

switch (caseSelection) {
    case "1":
        console.log("case 1");
        break;
    case "2":
        console.log("case 2");
        break;
    case "3":
        console.log("case 3");
        break;
    default:
        console.log("default");
}

// Problem No 3: Basic Ternary Program for Driving Authorization Limits
let driverAge = 12;
let thresholdLimit = 22;

console.log("You can", driverAge > thresholdLimit ? "drive" : "not drive");

// Problem No 4: Divisibility Evaluation via Remainder Arithmetic Operator (%)
// Checking clean validation for integer boundaries (Divisible by 3 OR 5)
let testNum = 15;

if (testNum % 3 === 0 || testNum % 5 === 0) {
    console.log("Your number is divisible by 3 or 5");
} else {
    console.log("Your number is not divisible by 3 or 5");
}

// Checking strict multi-layer execution boundary (Divisible by 3 AND 5)
if (testNum % 3 === 0 && testNum % 5 === 0) {
    console.log("Your number is divisible by both 3 and 5");
} else {
    console.log("Your number is not divisible by both 3 and 5");
}
