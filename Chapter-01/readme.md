<div align="center">

<!-- ═══════════════════════════════════════════════════════════════════ -->
<!--                      TERMINAL HERO BANNER                          -->
<!-- ═══════════════════════════════════════════════════════════════════ -->

<svg width="860" height="180" viewBox="0 0 860 180" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0d1117;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0a0e1a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00ff9f;stop-opacity:0" />
      <stop offset="30%" style="stop-color:#00ff9f;stop-opacity:1" />
      <stop offset="70%" style="stop-color:#00d4ff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:0" />
    </linearGradient>
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00ff9f" />
      <stop offset="50%" style="stop-color:#00d4ff" />
      <stop offset="100%" style="stop-color:#7b61ff" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="softGlow">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="860" height="180" rx="12" fill="url(#bgGrad)"/>
  <rect width="860" height="180" rx="12" fill="none" stroke="#00ff9f" stroke-width="0.5" stroke-opacity="0.3"/>

  <!-- Corner accents -->
  <path d="M12,0 L0,0 L0,12" stroke="#00ff9f" stroke-width="1.5" fill="none" opacity="0.8"/>
  <path d="M848,0 L860,0 L860,12" stroke="#00d4ff" stroke-width="1.5" fill="none" opacity="0.8"/>
  <path d="M12,180 L0,180 L0,168" stroke="#00ff9f" stroke-width="1.5" fill="none" opacity="0.8"/>
  <path d="M848,180 L860,180 L860,168" stroke="#00d4ff" stroke-width="1.5" fill="none" opacity="0.8"/>

  <!-- Grid lines (subtle) -->
  <line x1="0" y1="60" x2="860" y2="60" stroke="#ffffff" stroke-width="0.2" stroke-opacity="0.04"/>
  <line x1="0" y1="120" x2="860" y2="120" stroke="#ffffff" stroke-width="0.2" stroke-opacity="0.04"/>
  <line x1="215" y1="0" x2="215" y2="180" stroke="#ffffff" stroke-width="0.2" stroke-opacity="0.04"/>
  <line x1="430" y1="0" x2="430" y2="180" stroke="#ffffff" stroke-width="0.2" stroke-opacity="0.04"/>
  <line x1="645" y1="0" x2="645" y2="180" stroke="#ffffff" stroke-width="0.2" stroke-opacity="0.04"/>

  <!-- Dot matrix pattern -->
  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="0.8" fill="#00ff9f" opacity="0.06"/>
  </pattern>
  <rect width="860" height="180" fill="url(#dots)" rx="12"/>

  <!-- Terminal prompt prefix -->
  <text x="42" y="62" font-family="'Courier New', monospace" font-size="13" fill="#00ff9f" opacity="0.7" filter="url(#glow)">~/dev/js-mastery/chapter-01 $</text>
  <text x="42" y="82" font-family="'Courier New', monospace" font-size="11" fill="#6e7681" opacity="0.8">▶  initializing module...</text>

  <!-- Main Title -->
  <text x="430" y="112" font-family="'Courier New', monospace" font-size="36" font-weight="900" fill="url(#titleGrad)" text-anchor="middle" filter="url(#softGlow)" letter-spacing="3">CHAPTER — 01</text>

  <!-- Subtitle -->
  <text x="430" y="136" font-family="'Courier New', monospace" font-size="13" fill="#8b949e" text-anchor="middle" letter-spacing="6">JAVASCRIPT  ·  CORE  FOUNDATIONS</text>

  <!-- Bottom accent line -->
  <rect x="80" y="158" width="700" height="1.5" rx="1" fill="url(#accentLine)"/>

  <!-- Status indicators -->
  <circle cx="42" cy="162" r="4" fill="#00ff9f" filter="url(#glow)"/>
  <text x="52" y="166" font-family="'Courier New', monospace" font-size="9" fill="#00ff9f" opacity="0.9">ACTIVE</text>
  <circle cx="818" cy="162" r="4" fill="#00d4ff" filter="url(#glow)"/>
  <text x="780" y="166" font-family="'Courier New', monospace" font-size="9" fill="#00d4ff" opacity="0.9">VID 01–06</text>
</svg>

<!-- ═══════════════════════════════════════ BADGE RACK ══════════════════════════════════════ -->

<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-In%20Progress-00ff9f?style=for-the-badge&logo=statuspage&logoColor=black)
![Videos](https://img.shields.io/badge/Videos%20Covered-01%20→%2006-00d4ff?style=for-the-badge&logo=youtube&logoColor=white)

<br/>

![Harry Bhai](https://img.shields.io/badge/Instructor-Harry%20Bhai-7b61ff?style=flat-square&logo=youtube&logoColor=white)
![Topics](https://img.shields.io/badge/Core%20Topics-7%20Covered-ff6b6b?style=flat-square)
![Repo](https://img.shields.io/badge/Stack-MERN%20Developer-00ff9f?style=flat-square&logo=mongodb&logoColor=white)
![Markdown](https://img.shields.io/badge/Docs-Ultra%20Premium-gold?style=flat-square&logo=markdown)

</div>

<br/>

<!-- ╔══════════════════════════════════════════════════════════════════════════════════════╗ -->
<!--                               DASHBOARD DIVIDER                                        -->
<!-- ╚══════════════════════════════════════════════════════════════════════════════════════╝ -->

<div align="center">

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║  > SYSTEM  ·  JS Learning OS v1.0  ·  Chapter: 01  ·  Module: Core Foundations  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```

</div>

<br/>

## `📡` MODULE OVERVIEW

> **Repository:** `js-mastery-journey/Chapter-01/`
> **Playlist:** Harry Bhai's JavaScript Course — *Sigma Web Dev Series*
> **Scope:** Videos `01 → 06` · Core language primitives & scoping mechanics

This chapter is the **ground zero** of the JavaScript engine — where execution contexts are born, memory is allocated, variables are typed, and the V8 runtime begins its silent work. Every concept documented here is a pillar that full-stack MERN architecture stands on.

<br/>

<!-- ──────────────────────────────────────────── TOPIC MAP ──────────────────────────────────────────── -->

## `🗺️` CHAPTER TOPIC MAP

<div align="center">

<svg width="820" height="300" viewBox="0 0 820 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#161b22"/>
      <stop offset="100%" style="stop-color:#0d1117"/>
    </linearGradient>
    <linearGradient id="greenLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00ff9f;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#00ff9f;stop-opacity:0.2"/>
    </linearGradient>
    <linearGradient id="blueLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:0.2"/>
    </linearGradient>
    <linearGradient id="purpLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#7b61ff;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#7b61ff;stop-opacity:0.2"/>
    </linearGradient>
  </defs>
  <rect width="820" height="300" rx="10" fill="#0d1117"/>

  <!-- Row 1 -->
  <!-- Card 1 -->
  <rect x="20" y="20" width="240" height="80" rx="6" fill="url(#cardBg)" stroke="#00ff9f" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect x="20" y="20" width="4" height="80" rx="2" fill="#00ff9f"/>
  <text x="36" y="43" font-family="monospace" font-size="10" fill="#00ff9f" opacity="0.7">VIDEO 01–02</text>
  <text x="36" y="62" font-family="monospace" font-size="13" font-weight="bold" fill="#e6edf3">Dynamic Variables</text>
  <text x="36" y="80" font-family="monospace" font-size="10" fill="#6e7681">var · let · const · hoisting</text>
  <text x="232" y="80" font-family="monospace" font-size="18" fill="#00ff9f" opacity="0.4">⚡</text>

  <!-- Card 2 -->
  <rect x="290" y="20" width="240" height="80" rx="6" fill="url(#cardBg)" stroke="#00d4ff" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect x="290" y="20" width="4" height="80" rx="2" fill="#00d4ff"/>
  <text x="306" y="43" font-family="monospace" font-size="10" fill="#00d4ff" opacity="0.7">VIDEO 03</text>
  <text x="306" y="62" font-family="monospace" font-size="13" font-weight="bold" fill="#e6edf3">Naming Conventions</text>
  <text x="306" y="80" font-family="monospace" font-size="10" fill="#6e7681">camelCase · rules · best practices</text>
  <text x="500" y="80" font-family="monospace" font-size="18" fill="#00d4ff" opacity="0.4">🏷️</text>

  <!-- Card 3 -->
  <rect x="560" y="20" width="240" height="80" rx="6" fill="url(#cardBg)" stroke="#7b61ff" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect x="560" y="20" width="4" height="80" rx="2" fill="#7b61ff"/>
  <text x="576" y="43" font-family="monospace" font-size="10" fill="#7b61ff" opacity="0.7">VIDEO 04</text>
  <text x="576" y="62" font-family="monospace" font-size="13" font-weight="bold" fill="#e6edf3">Block vs Global Scope</text>
  <text x="576" y="80" font-family="monospace" font-size="10" fill="#6e7681">lexical scope · closure preview</text>
  <text x="769" y="80" font-family="monospace" font-size="18" fill="#7b61ff" opacity="0.4">🔒</text>

  <!-- Row 2 -->
  <!-- Card 4 -->
  <rect x="20" y="120" width="240" height="80" rx="6" fill="url(#cardBg)" stroke="#ff6b6b" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect x="20" y="120" width="4" height="80" rx="2" fill="#ff6b6b"/>
  <text x="36" y="143" font-family="monospace" font-size="10" fill="#ff6b6b" opacity="0.7">VIDEO 05</text>
  <text x="36" y="162" font-family="monospace" font-size="13" font-weight="bold" fill="#e6edf3">Primitive Types</text>
  <text x="36" y="180" font-family="monospace" font-size="10" fill="#6e7681">N · N · S · S · B · B · U</text>
  <text x="232" y="180" font-family="monospace" font-size="18" fill="#ff6b6b" opacity="0.4">🧬</text>

  <!-- Card 5 -->
  <rect x="290" y="120" width="240" height="80" rx="6" fill="url(#cardBg)" stroke="#ffa500" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect x="290" y="120" width="4" height="80" rx="2" fill="#ffa500"/>
  <text x="306" y="143" font-family="monospace" font-size="10" fill="#ffa500" opacity="0.7">VIDEO 05 (CONT.)</text>
  <text x="306" y="162" font-family="monospace" font-size="13" font-weight="bold" fill="#e6edf3">Object Mutation</text>
  <text x="306" y="180" font-family="monospace" font-size="10" fill="#6e7681">const loophole · ref vs value</text>
  <text x="500" y="180" font-family="monospace" font-size="18" fill="#ffa500" opacity="0.4">🔧</text>

  <!-- Card 6 -->
  <rect x="560" y="120" width="240" height="80" rx="6" fill="url(#cardBg)" stroke="#00ff9f" stroke-width="0.8" stroke-opacity="0.5"/>
  <rect x="560" y="120" width="4" height="80" rx="2" fill="#00ff9f"/>
  <text x="576" y="143" font-family="monospace" font-size="10" fill="#00ff9f" opacity="0.7">VIDEO 06</text>
  <text x="576" y="162" font-family="monospace" font-size="13" font-weight="bold" fill="#e6edf3">Operator Precedence</text>
  <text x="576" y="180" font-family="monospace" font-size="10" fill="#6e7681">logical · comparison · &&  ||  !</text>
  <text x="769" y="180" font-family="monospace" font-size="18" fill="#00ff9f" opacity="0.4">⚖️</text>

  <!-- Progress bar footer -->
  <rect x="20" y="230" width="780" height="4" rx="2" fill="#21262d"/>
  <rect x="20" y="230" width="780" height="4" rx="2" fill="url(#greenLine)"/>
  <text x="20" y="258" font-family="monospace" font-size="10" fill="#6e7681">CHAPTER COMPLETION</text>
  <text x="764" y="258" font-family="monospace" font-size="10" fill="#00ff9f">100%</text>

  <!-- Segment markers -->
  <rect x="20" y="265" width="120" height="18" rx="3" fill="#00ff9f" fill-opacity="0.12" stroke="#00ff9f" stroke-width="0.5"/>
  <text x="80" y="278" font-family="monospace" font-size="9" fill="#00ff9f" text-anchor="middle">VARIABLES</text>
  <rect x="148" y="265" width="120" height="18" rx="3" fill="#00d4ff" fill-opacity="0.12" stroke="#00d4ff" stroke-width="0.5"/>
  <text x="208" y="278" font-family="monospace" font-size="9" fill="#00d4ff" text-anchor="middle">NAMING</text>
  <rect x="276" y="265" width="120" height="18" rx="3" fill="#7b61ff" fill-opacity="0.12" stroke="#7b61ff" stroke-width="0.5"/>
  <text x="336" y="278" font-family="monospace" font-size="9" fill="#7b61ff" text-anchor="middle">SCOPE</text>
  <rect x="404" y="265" width="120" height="18" rx="3" fill="#ff6b6b" fill-opacity="0.12" stroke="#ff6b6b" stroke-width="0.5"/>
  <text x="464" y="278" font-family="monospace" font-size="9" fill="#ff6b6b" text-anchor="middle">PRIMITIVES</text>
  <rect x="532" y="265" width="120" height="18" rx="3" fill="#ffa500" fill-opacity="0.12" stroke="#ffa500" stroke-width="0.5"/>
  <text x="592" y="278" font-family="monospace" font-size="9" fill="#ffa500" text-anchor="middle">MUTATION</text>
  <rect x="660" y="265" width="140" height="18" rx="3" fill="#00ff9f" fill-opacity="0.12" stroke="#00ff9f" stroke-width="0.5"/>
  <text x="730" y="278" font-family="monospace" font-size="9" fill="#00ff9f" text-anchor="middle">OPERATORS</text>
</svg>

</div>

<br/>

<!-- ──────────────────────────────────────────── METRICS ──────────────────────────────────────────── -->

## `📊` PRACTICE METRICS

<div align="center">

| Metric | Value | Status |
|:--|:--:|:--:|
| 🎬 Videos Consumed | `6 / 6` | ![](https://img.shields.io/badge/-DONE-00ff9f?style=flat-square) |
| 📝 Concepts Logged | `7 Core Topics` | ![](https://img.shields.io/badge/-LOGGED-00d4ff?style=flat-square) |
| 🧪 Code Snippets Written | `12+` | ![](https://img.shields.io/badge/-ACTIVE-7b61ff?style=flat-square) |
| 🐛 Bugs Debugged | `3 intentional` | ![](https://img.shields.io/badge/-RESOLVED-ffa500?style=flat-square) |
| 🔁 Revision Rounds | `2` | ![](https://img.shields.io/badge/-COMPLETE-00ff9f?style=flat-square) |
| 🧠 Confidence Score | `★★★★☆` | ![](https://img.shields.io/badge/-STRONG-00d4ff?style=flat-square) |

</div>

<br/>

<!-- ══════════════════════════════════ DEEP DIVES START ══════════════════════════════════ -->

<div align="center">

```
┌─────────────────────────────────────────────────────────────────────┐
│  ⚡  CONCEPT DEEP DIVES  ·  Source-annotated  ·  Battle-tested      │
└─────────────────────────────────────────────────────────────────────┘
```

</div>

---

## `[01]` · Dynamic Variables — `var` `let` `const`

> 🎬 **Video 01–02** · Execution context, memory phase, hoisting mechanics

JavaScript allocates memory **before** code runs. Understanding `var`, `let`, and `const` isn't about syntax — it's about knowing *when* the engine touches your variable.

```javascript
// ┌──────────────────────────────────────────────────────────┐
// │  HOISTING BEHAVIOR COMPARISON                            │
// └──────────────────────────────────────────────────────────┘

console.log(a);   // ✅ undefined   → var is hoisted + initialized
console.log(b);   // ❌ ReferenceError → let is in TDZ (Temporal Dead Zone)

var   a = "Harry Bhai";    // function-scoped, mutable, hoisted
let   b = "JavaScript";    // block-scoped, mutable, NOT hoisted (TDZ)
const c = "MERN Stack";    // block-scoped, binding immutable, NOT hoisted

// ┌──────────────────────────────────────────────────────────┐
// │  RE-DECLARATION RULES                                    │
// └──────────────────────────────────────────────────────────┘

var   x = 1;  var   x = 2;  // ✅ OK  — var allows re-declaration
let   y = 1;  let   y = 2;  // ❌ SyntaxError
const z = 1;  const z = 2;  // ❌ SyntaxError
```

<details>
<summary><code>🔍 Execution Context Memory Model (expand)</code></summary>

```
GLOBAL EXECUTION CONTEXT
┌─────────────────────────────────────────┐
│  CREATION PHASE (Memory Allocation)     │
│  ─────────────────────────────────────  │
│  var   a  ──→  undefined               │
│  let   b  ──→  [TDZ — uninitialized]   │
│  const c  ──→  [TDZ — uninitialized]   │
├─────────────────────────────────────────┤
│  EXECUTION PHASE                        │
│  ─────────────────────────────────────  │
│  a = "Harry Bhai"   (assigned)         │
│  b = "JavaScript"   (assigned)         │
│  c = "MERN Stack"   (binding locked)   │
└─────────────────────────────────────────┘
```

</details>

---

## `[02]` · Naming Conventions

> 🎬 **Video 03** · Identifier rules, reserved words, community standards

```javascript
// ┌──────────────────────────────────────────────────────────┐
// │  VALID vs INVALID IDENTIFIERS                            │
// └──────────────────────────────────────────────────────────┘

// ✅ VALID
let userName       = "Ali";          // camelCase  → JS standard
let _privateValue  = 42;             // underscore prefix → convention
let $jqueryStyle   = true;           // dollar sign → valid (jQuery legacy)
let MAX_RETRIES    = 5;              // UPPER_SNAKE_CASE → constants

// ❌ INVALID
// let 1stUser   = "err";            // cannot start with digit
// let my-var    = "err";            // hyphens not allowed
// let let       = "err";            // reserved keyword
// let class     = "err";            // reserved keyword
```

| Convention | Style | Use Case |
|:--|:--|:--|
| `camelCase` | `myVariableName` | Variables, functions |
| `PascalCase` | `MyClassName` | Classes, constructors |
| `UPPER_SNAKE` | `MAX_VALUE` | Constants, env vars |
| `_underscore` | `_internal` | Private by convention |
| `$dollar` | `$element` | DOM refs, jQuery |

---

## `[03]` · Block Scope vs Global Scope

> 🎬 **Video 04** · Lexical environment, scope chain, variable shadowing

```javascript
// ┌──────────────────────────────────────────────────────────┐
// │  SCOPE CHAIN VISUALIZATION                               │
// └──────────────────────────────────────────────────────────┘

const globalSecret = "I'm everywhere 🌍";    // Global scope

function outer() {
  const outerVar = "I'm in outer 🏠";         // Function scope

  if (true) {
    const blockVar = "I'm locked in block 🔒"; // Block scope (let/const)
    var   funcVar  = "I leak to function 💧";  // var ignores blocks!

    console.log(globalSecret);  // ✅ accessible (scope chain lookup)
    console.log(outerVar);      // ✅ accessible
    console.log(blockVar);      // ✅ accessible (same block)
  }

  console.log(funcVar);         // ✅ var leaked OUT of block
  console.log(blockVar);        // ❌ ReferenceError — block-scoped
}
```

<details>
<summary><code>🔍 Scope Chain ASCII Diagram (expand)</code></summary>

```
┌─────────────────────────────────────────────────────┐
│  GLOBAL SCOPE                                       │
│  globalSecret = "I'm everywhere"                   │
│  ┌───────────────────────────────────────────────┐  │
│  │  FUNCTION SCOPE (outer)                       │  │
│  │  outerVar = "I'm in outer"                    │  │
│  │  funcVar  = "I leak to function"  ← via var   │  │
│  │  ┌─────────────────────────────────────────┐  │  │
│  │  │  BLOCK SCOPE  { if (true) { ... } }     │  │  │
│  │  │  blockVar = "locked in block"           │  │  │
│  │  │                                         │  │  │
│  │  │  CAN SEE: blockVar, outerVar, global    │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
         Scope lookup: inner → outer → global
```

</details>

---

## `[04]` · Primitive Types — **N·N·S·S·B·B·U**

> 🎬 **Video 05** · The 7 primitives, `typeof`, immutability, value storage

<div align="center">

| # | Mnemonic | Type | Example | `typeof` |
|:--:|:--|:--|:--|:--|
| N | **N**ull | `null` | `null` | `"object"` ⚠️ |
| N | **N**umber | `number` | `42`, `3.14`, `NaN` | `"number"` |
| S | **S**tring | `string` | `"Harry"` | `"string"` |
| S | **S**ymbol | `symbol` | `Symbol("id")` | `"symbol"` |
| B | **B**oolean | `boolean` | `true`, `false` | `"boolean"` |
| B | **B**igInt | `bigint` | `900719n` | `"bigint"` |
| U | **U**ndefined | `undefined` | `let x;` | `"undefined"` |

</div>

```javascript
// ┌──────────────────────────────────────────────────────────┐
// │  THE FAMOUS null BUG — typeof gotcha                     │
// └──────────────────────────────────────────────────────────┘

console.log(typeof null);          // "object"  ← 20-year-old JS bug!
console.log(null === null);        // true  ← use strict equality
console.log(null == undefined);    // true  ← loose equality
console.log(null === undefined);   // false ← strict equality

// ┌──────────────────────────────────────────────────────────┐
// │  PRIMITIVES ARE IMMUTABLE (stored by VALUE)              │
// └──────────────────────────────────────────────────────────┘

let a = "MERN";
let b = a;         // b gets a COPY of the value
b = "MEAN";        // a is completely unaffected

console.log(a);    // "MERN" — original unchanged ✅
console.log(b);    // "MEAN"
```

---

## `[05]` · Object Mutation & `const` Loophole

> 🎬 **Video 05 (cont.)** · Reference types, heap memory, mutation vs re-assignment

> ⚠️ **Key Insight:** `const` locks the **binding** (pointer), not the **value in the heap**

```javascript
// ┌──────────────────────────────────────────────────────────┐
// │  THE const MUTATION LOOPHOLE                             │
// └──────────────────────────────────────────────────────────┘

const developer = {
  name: "Ali",
  stack: "MERN"
};

// ✅ ALLOWED — mutating the object's properties
developer.name  = "Hassan";
developer.years = 3;
developer.stack = "MEAN";

console.log(developer);
// { name: "Hassan", stack: "MEAN", years: 3 }

// ❌ NOT ALLOWED — re-assigning the binding itself
// developer = { name: "New Object" };
// → TypeError: Assignment to constant variable

// ┌──────────────────────────────────────────────────────────┐
// │  WHY? — Memory Model Explained                           │
// └──────────────────────────────────────────────────────────┘

// STACK (const binding — locked 🔒)    HEAP (object — mutable 🔧)
// ┌──────────────────────┐             ┌────────────────────┐
// │  developer → [0x4f2] │ ─────────→ │  { name: "Ali" }   │
// └──────────────────────┘  pointer   │  can be mutated    │
//  const locks this address           └────────────────────┘
```

<details>
<summary><code>🔍 Freeze for true immutability (expand)</code></summary>

```javascript
// Use Object.freeze() for deep immutability
const config = Object.freeze({
  api: "https://api.example.com",
  version: "v1"
});

config.api = "hack"; // silently fails in sloppy mode, throws in strict
console.log(config.api); // "https://api.example.com" — unchanged ✅
```

</details>

---

## `[06]` · Logical & Comparison Operator Precedence

> 🎬 **Video 06** · `&&` `||` `!` `??` — short-circuit evaluation, truthy/falsy

```javascript
// ┌──────────────────────────────────────────────────────────┐
// │  OPERATOR PRECEDENCE  (higher number = evaluated first)  │
// └──────────────────────────────────────────────────────────┘

//  !   (NOT)       →  precedence: 16  (unary, right-to-left)
//  <  >  <=  >=    →  precedence: 12
//  ==  !=  ===  !==→  precedence: 11
//  &&  (AND)       →  precedence: 6
//  ||  (OR)        →  precedence: 5
//  ??  (Nullish)   →  precedence: 4

// ┌──────────────────────────────────────────────────────────┐
// │  SHORT-CIRCUIT EVALUATION                                │
// └──────────────────────────────────────────────────────────┘

// AND (&&) — returns first FALSY or last value
console.log(true  && "Hello");   // "Hello"  (returns last truthy)
console.log(false && "Hello");   // false    (short-circuits at false)
console.log(null  && "Hello");   // null     (null is falsy → stops here)

// OR (||) — returns first TRUTHY or last value
console.log(false || "Default"); // "Default" (first truthy wins)
console.log("Ali" || "Default"); // "Ali"     (short-circuits)
console.log(0     || false || "Last"); // "Last"

// NULLISH (??) — only null/undefined trigger fallback
console.log(0    ?? "fallback"); // 0        ← 0 is NOT null/undefined!
console.log(null ?? "fallback"); // "fallback"
console.log(""   ?? "fallback"); // ""       ← empty string is valid
```

<div align="center">

| Expression | Result | Why |
|:--|:--|:--|
| `"Ali" && "Bhai"` | `"Bhai"` | Both truthy → returns last |
| `0 && "Bhai"` | `0` | `0` is falsy → short-circuits |
| `"" \|\| "MERN"` | `"MERN"` | `""` is falsy → tries next |
| `null ?? "default"` | `"default"` | `null` triggers `??` |
| `0 ?? "default"` | `0` | `0` is **not** null/undefined |
| `!!"Ali"` | `true` | double negation → boolean cast |

</div>

<br/>

<!-- ══════════════════════════════════ MILESTONE TRACKER ══════════════════════════════════ -->

## `🏆` MILESTONE TRACKER

<div align="center">

<svg width="820" height="120" viewBox="0 0 820 120" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="120" rx="8" fill="#0d1117"/>

  <!-- Timeline spine -->
  <line x1="40" y1="60" x2="780" y2="60" stroke="#21262d" stroke-width="2"/>

  <!-- Milestone 1 -->
  <circle cx="100" cy="60" r="12" fill="#0d1117" stroke="#00ff9f" stroke-width="2"/>
  <text x="100" y="65" font-family="monospace" font-size="10" fill="#00ff9f" text-anchor="middle">✓</text>
  <text x="100" y="88" font-family="monospace" font-size="9" fill="#8b949e" text-anchor="middle">Variables</text>
  <text x="100" y="100" font-family="monospace" font-size="8" fill="#6e7681" text-anchor="middle">VID 01–02</text>
  <line x1="100" y1="48" x2="100" y2="32" stroke="#00ff9f" stroke-width="1" stroke-dasharray="2"/>
  <text x="100" y="28" font-family="monospace" font-size="8" fill="#00ff9f" text-anchor="middle">DONE</text>

  <!-- Milestone 2 -->
  <circle cx="230" cy="60" r="12" fill="#0d1117" stroke="#00ff9f" stroke-width="2"/>
  <text x="230" y="65" font-family="monospace" font-size="10" fill="#00ff9f" text-anchor="middle">✓</text>
  <text x="230" y="88" font-family="monospace" font-size="9" fill="#8b949e" text-anchor="middle">Naming</text>
  <text x="230" y="100" font-family="monospace" font-size="8" fill="#6e7681" text-anchor="middle">VID 03</text>
  <line x1="230" y1="48" x2="230" y2="32" stroke="#00ff9f" stroke-width="1" stroke-dasharray="2"/>
  <text x="230" y="28" font-family="monospace" font-size="8" fill="#00ff9f" text-anchor="middle">DONE</text>

  <!-- Milestone 3 -->
  <circle cx="360" cy="60" r="12" fill="#0d1117" stroke="#00ff9f" stroke-width="2"/>
  <text x="360" y="65" font-family="monospace" font-size="10" fill="#00ff9f" text-anchor="middle">✓</text>
  <text x="360" y="88" font-family="monospace" font-size="9" fill="#8b949e" text-anchor="middle">Scope</text>
  <text x="360" y="100" font-family="monospace" font-size="8" fill="#6e7681" text-anchor="middle">VID 04</text>
  <line x1="360" y1="48" x2="360" y2="32" stroke="#00ff9f" stroke-width="1" stroke-dasharray="2"/>
  <text x="360" y="28" font-family="monospace" font-size="8" fill="#00ff9f" text-anchor="middle">DONE</text>

  <!-- Milestone 4 -->
  <circle cx="490" cy="60" r="12" fill="#0d1117" stroke="#00ff9f" stroke-width="2"/>
  <text x="490" y="65" font-family="monospace" font-size="10" fill="#00ff9f" text-anchor="middle">✓</text>
  <text x="490" y="88" font-family="monospace" font-size="9" fill="#8b949e" text-anchor="middle">Primitives</text>
  <text x="490" y="100" font-family="monospace" font-size="8" fill="#6e7681" text-anchor="middle">VID 05</text>
  <line x1="490" y1="48" x2="490" y2="32" stroke="#00ff9f" stroke-width="1" stroke-dasharray="2"/>
  <text x="490" y="28" font-family="monospace" font-size="8" fill="#00ff9f" text-anchor="middle">DONE</text>

  <!-- Milestone 5 -->
  <circle cx="610" cy="60" r="12" fill="#0d1117" stroke="#00ff9f" stroke-width="2"/>
  <text x="610" y="65" font-family="monospace" font-size="10" fill="#00ff9f" text-anchor="middle">✓</text>
  <text x="610" y="88" font-family="monospace" font-size="9" fill="#8b949e" text-anchor="middle">Mutation</text>
  <text x="610" y="100" font-family="monospace" font-size="8" fill="#6e7681" text-anchor="middle">VID 05+</text>
  <line x1="610" y1="48" x2="610" y2="32" stroke="#00ff9f" stroke-width="1" stroke-dasharray="2"/>
  <text x="610" y="28" font-family="monospace" font-size="8" fill="#00ff9f" text-anchor="middle">DONE</text>

  <!-- Milestone 6 -->
  <circle cx="740" cy="60" r="12" fill="#0d1117" stroke="#00ff9f" stroke-width="2"/>
  <text x="740" y="65" font-family="monospace" font-size="10" fill="#00ff9f" text-anchor="middle">✓</text>
  <text x="740" y="88" font-family="monospace" font-size="9" fill="#8b949e" text-anchor="middle">Operators</text>
  <text x="740" y="100" font-family="monospace" font-size="8" fill="#6e7681" text-anchor="middle">VID 06</text>
  <line x1="740" y1="48" x2="740" y2="32" stroke="#00ff9f" stroke-width="1" stroke-dasharray="2"/>
  <text x="740" y="28" font-family="monospace" font-size="8" fill="#00ff9f" text-anchor="middle">DONE</text>

  <!-- Filled progress line -->
  <line x1="40" y1="60" x2="752" y2="60" stroke="#00ff9f" stroke-width="2" stroke-opacity="0.6"/>
</svg>

</div>

<br/>

<!-- ──────────────────────────────── KEY TAKEAWAYS ──────────────────────────────── -->

## `💡` KEY TAKEAWAYS

```
┌───────────────────────────────────────────────────────────────────────────┐
│  TL;DR — Chapter 01 Survival Guide                                        │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  01  ·  prefer const → let → var (in that order of default)              │
│  02  ·  var is function-scoped; let/const are block-scoped               │
│  03  ·  camelCase for variables, PascalCase for classes                  │
│  04  ·  null has typeof "object" — a 25-year-old spec bug                │
│  05  ·  const doesn't freeze objects, use Object.freeze() for that       │
│  06  ·  ?? is safer than || when 0 or "" are valid values                │
│  07  ·  && evaluates left-to-right and short-circuits on falsy           │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
```

<br/>

<!-- ──────────────────────────────── FOLDER STRUCTURE ──────────────────────────────── -->

## `📁` FOLDER STRUCTURE

```
Chapter-01/
│
├── 📄  README.md                ← you are here
│
├── 01_variables/
│   ├── dynamic-variables.js     ← var · let · const · hoisting
│   └── notes.md
│
├── 02_naming/
│   ├── naming-conventions.js    ← valid identifiers · camelCase
│   └── notes.md
│
├── 03_scope/
│   ├── block-vs-global.js       ← scope chain · TDZ · shadowing
│   └── notes.md
│
├── 04_primitives/
│   ├── primitive-types.js       ← NNSSBBU · typeof · immutability
│   └── notes.md
│
├── 05_objects/
│   ├── object-mutation.js       ← const loophole · ref vs value
│   └── notes.md
│
└── 06_operators/
    ├── operator-precedence.js   ← && · || · ! · ?? · short-circuit
    └── notes.md
```

<br/>

<!-- ──────────────────────────────── RESOURCES ──────────────────────────────── -->

## `🔗` RESOURCES & REFERENCES

| Resource | Link | Type |
|:--|:--|:--|
| 🎓 Harry Bhai's Playlist | [Sigma Web Dev — JS Series](https://www.youtube.com/@CodeWithHarry) | `Video Course` |
| 📖 MDN — var | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) | `Docs` |
| 📖 MDN — Operator Precedence | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) | `Docs` |
| 🛠️ JS Visualizer 9000 | [jsv9000.app](https://www.jsv9000.app/) | `Tool` |
| 🧪 JS Fiddle | [jsfiddle.net](https://jsfiddle.net/) | `Sandbox` |

<br/>

<!-- ──────────────────────────────── FOOTER ──────────────────────────────── -->

<div align="center">

<svg width="820" height="60" viewBox="0 0 820 60" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00ff9f;stop-opacity:0"/>
      <stop offset="20%" style="stop-color:#00ff9f;stop-opacity:0.6"/>
      <stop offset="50%" style="stop-color:#00d4ff;stop-opacity:0.6"/>
      <stop offset="80%" style="stop-color:#7b61ff;stop-opacity:0.6"/>
      <stop offset="100%" style="stop-color:#7b61ff;stop-opacity:0"/>
    </linearGradient>
  </defs>
  <rect width="820" height="60" fill="transparent"/>
  <rect x="0" y="0" width="820" height="1" fill="url(#footerGrad)"/>
  <text x="410" y="24" font-family="monospace" font-size="11" fill="#6e7681" text-anchor="middle">MERN Developer · JavaScript Learning Journey · Chapter 01 Complete</text>
  <text x="410" y="46" font-family="monospace" font-size="10" fill="#3d444d" text-anchor="middle">Built with obsession · Documented with precision · Powered by Harry Bhai's teachings</text>
</svg>

<br/>

![Made with](https://img.shields.io/badge/Made%20with-JavaScript%20%26%20Obsession-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>
