<div align="center">

# ⚡ JavaScript Core Engineering Series

### Chapter 2 · Conditional Expressions & Execution Flow Control

<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-Ecosystem-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-Utility--First-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

> **Precision execution flow · Type-safe mutation · Short-circuit logic · Ternary optimization**

<br/>

[![Chapter](https://img.shields.io/badge/Series-Chapter%202%20of%20N-6366f1?style=flat-square)](.)
[![Status](https://img.shields.io/badge/Status-Completed-22c55e?style=flat-square)](.)
[![Paradigm](https://img.shields.io/badge/Paradigm-Imperative%20%7C%20Declarative-f59e0b?style=flat-square)](.)
[![Operators](https://img.shields.io/badge/Operators-&&%20%7C%20%7C%7C%20%25%20%3F:-ec4899?style=flat-square)](.)

</div>

---

## 📐 Architectural Overview

This chapter engineers **execution flow at the expression level** — moving beyond simple linear scripts into conditional branching, multi-path state resolution, type-safe input mutation, and inline ternary pipelines. Every concept is production-contextualized against real JavaScript runtime behavior.

---

## 🧠 Concept Mastery Index

| # | Concept Domain | Core Mechanism | Production Relevance |
|---|---------------|---------------|---------------------|
| 01 | **Conditional Ladders** | `if / else if / else` chains | Feature flags, access control, role routing |
| 02 | **Switch Architecture** | `switch / case / break / default` | State machines, menu dispatchers, event handlers |
| 03 | **Range Evaluation** | `&&` — AND logical operator | Boundary validation, numeric range guards |
| 04 | **Flexible Branching** | `\|\|` — OR logical operator | Fallback resolution, permissive access logic |
| 05 | **Type Mutation** | `parseInt()`, `Number()` | Form input sanitization, API response parsing |
| 06 | **Modulus Arithmetic** | `%` — remainder operator | Divisibility checks, pagination, cycle detection |
| 07 | **Ternary Optimization** | `condition ? truthy : falsy` | Inline rendering, JSX conditionals, compact state |

---

## 🔀 Concept Breakdowns

### 1 · Conditional Ladders & Switch Workflows

<table>
<thead>
<tr>
<th>Structure</th>
<th>Evaluation Mode</th>
<th>Semantic Use-Case</th>
<th>Production Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Chained if-else</strong></td>
<td>Sequential · top-down cascade</td>
<td>Multi-condition branching where precedence matters</td>
<td>User role routing: <code>admin → editor → viewer → guest</code></td>
</tr>
<tr>
<td><strong>switch / case</strong></td>
<td>Exact-match · discrete values</td>
<td>Clean multi-way branching on string or integer state</td>
<td>HTTP status dispatcher: <code>200, 404, 500 → handlers</code></td>
</tr>
<tr>
<td><strong>break</strong></td>
<td>Execution terminator</td>
<td>Prevents fall-through into subsequent case blocks</td>
<td>Mandatory checkpoint after each resolved case arm</td>
</tr>
<tr>
<td><strong>default</strong></td>
<td>Catch-all fallback</td>
<td>Handles unmatched inputs gracefully without crashing</td>
<td>Error boundary: unrecognized command → <code>"Unknown action"</code></td>
</tr>
</tbody>
</table>

---

### 2 · Logical Operators & Range Evaluation

<table>
<thead>
<tr>
<th>Operator</th>
<th>Symbol</th>
<th>Evaluation Rule</th>
<th>Semantic Use-Case</th>
<th>Production Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>AND</strong></td>
<td><code>&&</code></td>
<td>Both operands must resolve <code>true</code></td>
<td>Tight boundary range validation — all conditions must hold simultaneously</td>
<td><code>age >= 18 && age <= 65</code> — eligible workforce window</td>
</tr>
<tr>
<td><strong>OR</strong></td>
<td><code>||</code></td>
<td>At least one operand resolves <code>true</code></td>
<td>Flexible permissive branching — any satisfied condition triggers execution</td>
<td><code>isAdmin || isModerator</code> — elevated access grant</td>
</tr>
</tbody>
</table>

---

### 3 · Ternary Operator Reference

<table>
<thead>
<tr>
<th>Component</th>
<th>Syntax Slot</th>
<th>Behavior</th>
<th>Common Pitfall</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Condition</strong></td>
<td><code>condition ?</code></td>
<td>Evaluated first; resolves to boolean coercion</td>
<td>Forgetting operator precedence inside <code>console.log()</code></td>
</tr>
<tr>
<td><strong>Truthy Branch</strong></td>
<td><code>? "value_A"</code></td>
<td>Returned when condition is <code>true</code></td>
<td>Nesting multiple ternaries — sacrifices readability</td>
</tr>
<tr>
<td><strong>Falsy Branch</strong></td>
<td><code>: "value_B"</code></td>
<td>Returned when condition is <code>false</code></td>
<td>Missing the colon separator causes <code>SyntaxError</code></td>
</tr>
<tr>
<td><strong>Inline Grouping</strong></td>
<td><code>console.log("Label:", expr)</code></td>
<td>Comma-separated args protect ternary evaluation scope</td>
<td>Concatenating with <code>+</code> can coerce before ternary resolves</td>
</tr>
</tbody>
</table>

---

## 🔬 Technical Deep-Dives

<details>
<summary><strong>⚙️ Type Mutation — String-to-Number Casting via parseInt()</strong></summary>

<br/>

When a user supplies input through a browser `prompt()` call, the JavaScript runtime returns the value as a **raw string primitive** — regardless of whether the user typed a number. Performing arithmetic or conditional comparison against an uncast string introduces silent coercion bugs.

**Mutation Pipeline:**

```
prompt() → "15" [string] → parseInt("15") → 15 [number] → safe for arithmetic
```

| Method | Input | Output Type | Edge Behavior |
|--------|-------|-------------|---------------|
| `parseInt(x)` | `"42px"` | `number` | Strips trailing non-numeric chars |
| `parseInt(x)` | `"abc"` | `NaN` | Returns Not-a-Number on full mismatch |
| `Number(x)` | `"42"` | `number` | Strict — `"42px"` returns `NaN` |
| `parseFloat(x)` | `"3.14"` | `number` | Preserves decimal precision |

**Production Context:** Form inputs, API query parameters, and localStorage values are always strings. Explicit casting before any comparison or computation is non-negotiable in production-grade code.

<br/>

</details>

---

<details>
<summary><strong>➗ Modulus Arithmetic — Remainder-Zero Divisibility Validation</strong></summary>

<br/>

The **modulus operator (`%`)** returns the remainder after integer division. A remainder of `0` is the definitive signal that a number is **perfectly divisible** by the divisor — no fractional leftover.

**Division Truth Table:**

| Expression | Math Operation | Remainder | Interpretation |
|------------|---------------|-----------|----------------|
| `15 % 3` | `15 ÷ 3 = 5.0` | `0` | ✅ Divisible by 3 |
| `15 % 5` | `15 ÷ 5 = 3.0` | `0` | ✅ Divisible by 5 |
| `14 % 3` | `14 ÷ 3 = 4.67` | `2` | ❌ Not divisible by 3 |
| `17 % 5` | `17 ÷ 5 = 3.4` | `2` | ❌ Not divisible by 5 |

**Compound Validation with `&&`:**

```js
num % 3 === 0 && num % 5 === 0   // True only for multiples of 15 (LCM)
```

**Production Contexts:**
- **Pagination:** `index % pageSize === 0` → trigger page boundary
- **Cycle detection:** `tick % interval === 0` → scheduled task execution
- **Even/odd routing:** `n % 2 === 0` → alternate row styling in tables

<br/>

</details>

---

<details>
<summary><strong>🔁 Range Evaluation — Tight Boundary Guards with Compound AND Logic</strong></summary>

<br/>

Range evaluation chains two inequality conditions with the `&&` operator to **enforce a strict numeric corridor**. Both bounds must be simultaneously satisfied — failure at either end exits to the `else` branch.

**Range Guard Pattern:**

```
value >= lowerBound && value <= upperBound
```

| Input Value | `>= 10` | `<= 20` | Combined (`&&`) | Branch Executed |
|-------------|---------|---------|----------------|----------------|
| `9` | ❌ `false` | ✅ `true` | ❌ `false` | `else` |
| `10` | ✅ `true` | ✅ `true` | ✅ `true` | `if` |
| `15` | ✅ `true` | ✅ `true` | ✅ `true` | `if` |
| `20` | ✅ `true` | ✅ `true` | ✅ `true` | `if` |
| `21` | ✅ `true` | ❌ `false` | ❌ `false` | `else` |

**Production Contexts:** Age eligibility gates, price range filters, sensor threshold alerts, input length validation.

<br/>

</details>

---

## 💻 Practice Scripts · Production-Ready

### Script 01 · Strict Range Validation

```javascript
// ─── Range Guard: Numeric Boundary Enforcement ───────────────────────────────
// Validates whether a user-supplied age falls within a defined inclusive range.
// Uses compound AND logic to enforce simultaneous lower and upper bounds.

let userAge = 15;

if (userAge >= 10 && userAge <= 20) {
    console.log("Your age lies safely between 10 and 20.");
} else {
    console.log("Your age falls outside the specified limits.");
}
```

**`▶ Console Output`**

```
Your age lies safely between 10 and 20.
```

> **`Logic Trace:`** `userAge = 15` → `15 >= 10` evaluates `true` → `15 <= 20` evaluates `true` → `&&` resolves `true` → `if` branch executes.

---

### Script 02 · Automated Divisibility & Modulus Logic

```javascript
// ─── Modulus Gate: Compound Divisibility Verification ────────────────────────
// Checks whether a target integer is simultaneously divisible by 3 AND 5.
// Equivalent to checking for multiples of 15 (LCM of 3 and 5).

let targetNum = 15;

if (targetNum % 3 === 0 && targetNum % 5 === 0) {
    console.log("Verified: Perfectly divisible by both 3 and 5!");
}
```

**`▶ Console Output`**

```
Verified: Perfectly divisible by both 3 and 5!
```

> **`Logic Trace:`** `15 % 3 → 0` (strict equal `0` ✅) → `15 % 5 → 0` (strict equal `0` ✅) → `&&` resolves `true` → condition block executes.

---

### Script 03 · Optimized Ternary Conditional Flow

```javascript
// ─── Ternary Pipeline: Inline Authorization Gate ──────────────────────────────
// Evaluates driver eligibility against a legal age threshold.
// Comma-separated console.log args protect ternary evaluation from coercion traps.

let driverAge  = 12;
let legalLimit = 18;

console.log(
    "Status Eval:",
    driverAge >= legalLimit ? "Authorized to drive." : "Access Denied: Underage."
);
```

**`▶ Console Output`**

```
Status Eval: Access Denied: Underage.
```

> **`Logic Trace:`** `driverAge = 12` → `12 >= 18` evaluates `false` → ternary resolves to falsy branch `"Access Denied: Underage."` → comma-separated arg renders cleanly without string coercion.

---

## 🗺️ Execution Flow Diagram

```
          ┌─────────────────────────────────────┐
          │       INPUT RECEIVED (string/num)    │
          └──────────────┬──────────────────────┘
                         │
               ┌─────────▼──────────┐
               │   TYPE MUTATION?   │
               │  parseInt() / cast │
               └─────────┬──────────┘
                         │
          ┌──────────────▼───────────────┐
          │    CONDITIONAL EVALUATION    │
          │  if → else if → else ladder  │
          │  OR  switch / case dispatch  │
          └──┬──────────────┬───────────┘
             │              │
    ┌────────▼────┐   ┌─────▼──────────┐
    │  RANGE/MOD  │   │  TERNARY EXPR  │
    │  && / % ops │   │  cond ? A : B  │
    └────────┬────┘   └─────┬──────────┘
             │              │
          ┌──▼──────────────▼──┐
          │   BRANCH RESOLVES  │
          │   → console output │
          └────────────────────┘
```

---

## 📦 Repository Structure

```
chapter-02-conditional-expressions/
├── 📄 README.md                   ← You are here
├── 📁 scripts/
│   ├── 01-range-validation.js     ← AND operator · boundary guard
│   ├── 02-modulus-divisibility.js ← % operator · remainder check
│   └── 03-ternary-flow.js         ← Ternary · inline auth gate
├── 📁 notes/
│   └── concept-map.md             ← Personal reference annotations
└── 📄 package.json
```

---

## 🔗 Series Navigation

<div align="center">

| ◀ Previous | Current | Next ▶ |
|:----------:|:-------:|:------:|
| [Chapter 1 · Variables & Data Types](#) | **Chapter 2 · Conditional Expressions** | [Chapter 3 · Loops & Iteration](#) |

</div>

---

<div align="center">

**Built with precision · Documented with intent · Engineered for clarity**

<br/>

![Last Updated](https://img.shields.io/badge/Last%20Updated-June%202026-6366f1?style=flat-square)
![Series](https://img.shields.io/badge/JS%20Core%20Engineering-Chapter%202-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>
