# 🚀 Chapter 2: Conditional Expressions & Practice Set

Welcome to the second milestone of my JavaScript core engineering series. This repository focuses on controlling execution flow using conditional structures, logical evaluation pipelines, type mutation, and short-circuit ternary workflows.

## 🛠️ Core Concepts Mastered

### 1. Conditional Ladders & Switch Workflows
- **Chained If-Else Statements:** Implemented multi-layered evaluation logic where conditions cascade sequentially until a truthy branch executes.
- **Switch Case Architecture:** Explored multi-way branching for clean string/integer state matching, implementing mandatory `break` checkpoints and robust `default` fallbacks.

### 2. Logical Operators & Range Evaluation
- **AND (`&&`):** Evaluated tight boundary ranges where both conditions must be strictly valid (e.g., verifying if a numerical value lies safely between a specific minimum and maximum range).
- **OR (`||`):** Structured flexible branch executions where at least one condition satisfies the criteria.

### 3. Type Mutation (String to Number)
- Deconstructed the behavior of global string parsing mechanisms.
- Practiced strict type casting using explicit native conversion hooks like `parseInt()` to successfully safely mutate inputs from browser `prompt()` interfaces from `string` to clean `number` types for mathematical checks.

### 4. Arithmetic Modulus Evaluation
- Mastered divisibility validation using the remainder operator (`%`). Configured structural code blocks to check integer criteria based on zero-remainder outputs (`num % 3 === 0`).

### 5. Ternary Operator Optimization
- Implemented inline structural shorthand expressions (`condition ? truthy : falsy`).
- Solved expression precedence traps inside `console.log()` outputs using comma-separated argument grouping to protect functional rendering.

---

## 💻 Practice Script Snippets Executed

```javascript
// 1. Strict Range Validation
let userAge = 15;
if (userAge >= 10 && userAge <= 20) {
    console.log("Your age lies safely between 10 and 20.");
} else {
    console.log("Your age falls outside the specified limits.");
}

// 2. Automated Divisibility & Modulus Logic
let targetNum = 15;
if (targetNum % 3 === 0 && targetNum % 5 === 0) {
    console.log("Verified: Perfectly divisible by both 3 and 5!");
}

// 3. Optimized Ternary Conditional Flow
let driverAge = 12;
let legalLimit = 18;
console.log("Status Eval:", driverAge >= legalLimit ? "Authorized to drive." : "Access Denied: Underage.");
