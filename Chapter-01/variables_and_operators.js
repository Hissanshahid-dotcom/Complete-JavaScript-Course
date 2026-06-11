// =====================================================================
// 🔥 THE ULTIMATE JAVASCRIPT MASTER CHEAT-SHEET (VIDEOS 1-6)
// 👤 Developer: Muhammad Hissan Shahid
// 📅 Topic: Variables, Scopes, Primitives, Objects & All Operators
// =====================================================================

// ---------------------------------------------------------------------
// 📌 SECTION 1: VARIABLES DECLARATION & STRICT RULES (Videos 1-3)
// ---------------------------------------------------------------------

console.log("Hello-World"); // 🖥️ Output: Hello-World

// 💡 JavaScript is Loosely/Dynamically Typed (Variable types can change dynamically)
var a = 23;
console.log(a); // 🖥️ Output: 23
a = "Muhammad Hissan Shahid"; 
console.log(a); // 🖥️ Output: Muhammad Hissan Shahid
a = 4; 
console.log(a); // 🖥️ Output: 4

// ❌ ILLEGAL NAMING CONVENTIONS (Will crash the engine)
// let var = 8;          -> Error: Unexpected token 'var' (Reserved Keyword!)
// let 7hissan = 45;     -> Error: Invalid or unexpected token (Can't start with numbers!)
// let 32;               -> Error: Unexpected number
// var 12 = 33;          -> Error: Unexpected number

// ✅ LEGAL NAMING CONVENTIONS
let hissan45 = "Yellow"; 
let _year = 45;          
var $happy = 455;        

// ⚠️ CONST RULES: Must be initialized immediately!
// const harr;           -> Error: Missing initializer in const declaration

// 🔄 RE-DECLARATION RULES: var can be re-declared, let/const CANNOT be within the same scope
let x = 100;
x = 200; // ✅ Re-assignment is completely fine
// var hissan45 = 334;   -> Error: Identifier 'hissan45' has already been declared

// 🧱 SCOPE WARS: let/const are Block-Scoped {}, var is Globally/Function-Scoped
{
    // let k = "Handwritten";
    // let k = 10;        -> Error: Identifier 'k' has already been declared
}

var d = 98;
let g = 88;
{
    var d = 78;        // ⚠️ Overwrites the global 'd' variable!
    console.log(d);    // 🖥️ Output: 78
}
console.log(d);        // 🖥️ Output: 78 (Global var was permanently modified)

{
    let g = 84;        // ✅ Creates a temporary 'g' localized ONLY inside this block
    console.log(g);    // 🖥️ Output: 84
}
console.log(g);        // 🖥️ Output: 88 (Global 'g' is safe and untouched!)

// 🚫 BLOCK ESCAPE TEST
{
    let secret = 999;
}
// console.log(secret);  -> Error: Uncaught ReferenceError: secret is not defined

{
    var scopeTest = "Kya main bahar ja sakta hoon?";
}
console.log(scopeTest); // 🖥️ Output: Kya main bahar ja sakta hoon? (var easily escapes blocks)


// ---------------------------------------------------------------------
// 📌 SECTION 2: PRIMITIVES & OBJECT MUTATION (Video 4)
// ---------------------------------------------------------------------

// 🦄 The 7 Primitive Types in JS (NNSSBBU)
let primA = null;
let primB = 34;
let primC = "Muhammad Hissan Shahid";
let primD = Symbol("Hy my name is Hissan Today I am learning JavaScript");
let primE = true;
let primF = false;
let primG = BigInt(123);
let primH = undefined;

// 🏢 Non-Primitive Type: Object
const object = {
    picer: 23,
    name: "Muhammad Hissan Shahid",
    age: 20
};
console.log(object.name);     // ✅ Dot Notation    -> Output: Muhammad Hissan Shahid
console.log(object["name"]);   // ✅ Bracket Notation -> Output: Muhammad Hissan Shahid

// ➕ String + Number Type Coercion
let str = "Muhammad Hissan Shahid";
let num = 445;
console.log(str + num);       // 🖥️ Output: Muhammad Hissan Shahid445 (Concatenated)
console.log(typeof (str + num)); // 🖥️ Output: string

// ⚠️ Precedence Trap: typeof executes FIRST, then adds number as text
console.log(typeof str + num);   // 🖥️ Output: string445

// 🔒 CONST Object Modification Proof (Practice Set Q3)
const hell = { name: "Muhammad", isprinciple: "Rare" };
hell["friend"] = "Sheikh"; // ✅ Allowed! (Object values inside can change)
hell.friend = undefined;   // ✅ Allowed! (Keys can be cleared out)

// 📘 4-Word Dictionary Program (Practice Set Q5)
const dict = {
    yaka: "Hardwork",
    chips: "Crisp",
    youga: "nihoga",
    vulgarsign: 335
};


// ---------------------------------------------------------------------
// 📌 SECTION 3: OPERATORS & LOGICAL PRECEDENCE (Videos 5-6)
// ---------------------------------------------------------------------

// 🧮 Arithmetic Operators
let valA = 33;
let valB = 44;
console.log("valA + valB =", valA + valB); // 🖥️ Output: 77
console.log("valA % valB =", valA % valB); // 🖥️ Output: 33 (33 is smaller than 44, so 33 is remainder)

// 🧠 Post-Increment vs Pre-Increment Mind Games (Hissan's Blind Guess Test)
let inc = 33;
console.log("inc++ =", inc++); // 🖥️ Output: 33 (Prints 33, memory updates to 34)
console.log("inc-- =", inc--); // 🖥️ Output: 34 (Prints 34, memory updates to 33)
console.log("--inc =", --inc); // 🖥️ Output: 32 (Decrements first to 32, then prints)
console.log("++inc =", ++inc); // 🖥️ Output: 33 (Increments first to 33, then prints)
console.log("inc =", inc);     // 🖥️ Output: 33

// 📝 Assignment Operators Chain
let assignX = 3;
assignX += 2;  // 5
assignX -= 1;  // 4
assignX *= 3;  // 12
assignX /= 2;  // 6
assignX %= 3;  // 0
assignX **= 5; // 0^5 = 0 -> 🖥️ Final Output: 0

// ⚖️ Comparison Operators (The Strict === Reality Check)
let user1 = "user1";
let user2 = "user2";
console.log(user1 == user2);   // 🖥️ Output: false
console.log(user1 === user2);  // 🖥️ Output: false (Values are different, even though types match)
console.log(user1 !== user2);  // 🖥️ Output: true

// ⚡ Logical Operators & Not (!) Precedence Jhatka
console.log(user1 > user2 && user1 < user2); // 🖥️ Output: false
console.log(user1 > user2 || user1 < user2); // 🖥️ Output: true

// ⚠️ Danger Zone: (!) executes before (>) comparison!
// !user1 turns truthy string into 'false'. Then 'false > "user2"' is evaluated.
console.log(!user1 > user2);   // 🖥️ Output: false
