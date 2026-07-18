# 🌐 JavaScript Chapter 7 - Mastering the DOM Tree[cite: 1]

Welcome to my **Chapter 7 Document Object Model (DOM)** practice lab! This folder contains production-ready code modules tracking my learning trajectory across lessons #31 to #38[cite: 1].

### 🛠️ Key Architectural Focus Areas:
1. **DOM Navigation Nodes vs Elements Traversal** (`firstElementChild`, `childNodes`)[cite: 1].
2. **Tabular Matrix Navigations shortcuts** (`rows`, `cells`, `tBodies`)[cite: 1].
3. **Target Element Condition Matchers** (`matches`, `closest`, `contains`)[cite: 1].
4. **Complete Handwritten Practice Set Solutions Verified**[cite: 1].
/**
 * 🚀 JAVASCRIPT CHAPTER 7: WALKING & SEARCHING THE DOM (COMPLETE MASTER GUIDE)
 * Created by: Muhammad Hissan Shahid
 * 
 * This repository is a comprehensive, beginner-friendly guide to mastering the DOM 
 * (Document Object Model) using vanilla JavaScript. It covers DOM navigation, 
 * tree walking, selectors, and advanced relationship check methods.
 */

// ============================================================================
// CONCEPT 1: WALKING THE DOM & ELEMENT NAVIGATION (Videos #31 - #34)
// ============================================================================
/**
 * Quick Revision:
 * - childNodes vs children: childNodes includes text/comments, children only tags.
 * - Element-only navigation helps avoid empty text nodes (whitespace characters).
 */
function runDomWalkingDemo() {
    console.log("--- 1. DOM Tree Walking Simulation ---");
    
    // Accessing structural roots
    const rootHtml = document.documentElement; // <html> tag
    const mainBody = document.body;            // <body> tag
    
    if (!mainBody) {
        console.warn("Tip: Script loaded before body layout parsing completed.");
        return;
    }

    // Node vs Element navigation comparison
    console.log("First Node (Any type):", mainBody.firstChild); 
    console.log("First Element Child (Tag only):", mainBody.firstElementChild);

    // Converting a live DOM collection into a solid JS array to use modern array features
    const allChildNodesCollection = mainBody.childNodes;
    const safeNodesArray = Array.from(allChildNodesCollection);
    console.log(`Total nodes inside body: ${safeNodesArray.length}`);
}


// ============================================================================
// CONCEPT 2: ADVANCED TABLE LINKS NAVIGATION (Video #35)
// ============================================================================
/**
 * Quick Revision:
 * - Tables have dedicated structural shortcuts like .rows, .tBodies, and .cells
 */
function runTableNavigationDemo(tableElement) {
    console.log("\n--- 2. Specialized Table Traversal ---");
    if (!tableElement) return;

    console.log("Total explicit table rows count:", tableElement.rows.length);
    console.log("Active explicit body sections (tBodies):", tableElement.tBodies);

    // Iterating over rows using Native structural references
    for (let row of tableElement.rows) {
        console.log(`Row index context: ${row.rowIndex}`);
        // Iterating across cells within the current row boundary
        for (let cell of row.cells) {
            console.log(`Cell Content: ${cell.innerText} at index: ${cell.cellIndex}`);
        }
    }
}


// ============================================================================
// CONCEPT 3: NATIVE CORE RELATIONSHIP CHECKERS (Video #37)
// ============================================================================
/**
 * Quick Revision:
 * - matches(selector): Verifies if the element *itself* has that CSS selector (returns true/false).
 * - closest(selector): Travels *upward* through ancestors (checks itself first) to find the nearest match.
 * - contains(element): Travels *downward* (descendants) to see if an element is inside it (returns true/false).
 */
function runRelationshipChecks(parentElement, activeTargetElement) {
    console.log("\n--- 3. Structural Relationship Checkers ---");
    if (!parentElement || !activeTargetElement) return;

    // 1. Element Selector Match (.matches)
    if (activeTargetElement.matches(".active-item")) {
        console.log("🎯 Verification: The target element holds the active item configuration layout.");
    }

    // 2. Nearest Ancestor Look-up (.closest)
    const nearestContainer = activeTargetElement.closest(".card-box");
    console.log("Top logical wrapper element discovered:", nearestContainer);

    // 3. Child Containment Check (.contains)
    const isDescendantInside = parentElement.contains(activeTargetElement);
    console.log(`Containment Verification: Is target inside parent container boundary? ${isDescendantInside}`);
}


// ============================================================================
// 🏆 CHAPTER 7: SOLVED OFFICIAL PRACTICE SET (Videos #38 / Handwritten Notes)
// ============================================================================

/**
 * ❓ QUESTION 1:
 * Create a navbar and change the color of its first element to red.
 */
function solveQuestion1() {
    console.log("\nExecuting Practice Set: Question 1...");
    
    // Selecting the navbar anchor links safely
    const firstNavLink = document.querySelector("nav ul li a");
    if (firstNavLink) {
        firstNavLink.style.color = "red";
        console.log("✅ Mutation Complete: First navigation anchor element painted red.");
    } else {
        console.log("❌ Execution Halt: Required layout markup selector context not found.");
    }
}

/**
 * ❓ QUESTION 2:
 * Create a table without tbody. Now use "View page source" button to check 
 * whether it has a tbody or not.
 * 
 * 💡 Developer Explanation Note for Repository Visitors:
 * If you build a <table> with pure row structure inside raw HTML without enclosing <tbody>, 
 * viewing raw backend data ("View Page Source") displays your exact input text (No <tbody>). 
 * However, inspection algorithms inside modern browsers automatically normalize layouts by inserting 
 * the missing <tbody> tag inside the live runtime DOM Tree framework dynamically!
 */
function solveQuestion2(rawTableElement) {
    console.log("\nExecuting Practice Set: Question 2...");
    if (!rawTableElement) return;

    // Checking live parsed browser state structure
    const domesticBodiesCount = rawTableElement.getElementsByTagName("tbody").length;
    console.log(`[DOM Live Inspection Summary]: Detected <tbody> count = ${domesticBodiesCount}`);
    console.log("💡 Repository Note: Raw 'View Source' will show NO <tbody>, but live DOM auto-corrects it!");
}

/**
 * ❓ QUESTION 3:
 * Create an element with 3 children. Now change the color of first and last element to green.
 */
function solveQuestion3(parentContainerId) {
    console.log("\nExecuting Practice Set: Question 3...");
    const wrapper = document.getElementById(parentContainerId);
    if (!wrapper) return;

    // Utilizing element-only arrays filtering out text nodes to guarantee exact tag target matching
    const dynamicElementsList = wrapper.children;
    
    if (dynamicElementsList.length >= 3) {
        dynamicElementsList[0].style.color = "green";                             // First Child Target Element
        dynamicElementsList[dynamicElementsList.length - 1].style.color = "green"; // Last Child Target Element
        console.log("✅ Mutation Complete: Boundary tracking indexes color flipped to green.");
    }
}

/**
 * ❓ QUESTION 4:
 * Write a javascript code to change background of all <li> tags to cyan.
 */
function solveQuestion4() {
    console.log("\nExecuting Practice Set: Question 4...");
    
    // Gathering all list instances page-wide via structural tag matching query limits
    const globalListElements = document.getElementsByTagName("li");
    console.log(`Discovered target loop counts: ${globalListElements.length} instances.`);

    // HTMLCollections lack functional loops iterations natively; iterating via classic loop syntax cleanly
    for (let i = 0; i < globalListElements.length; i++) {
        globalListElements[i].style.backgroundColor = "cyan";
    }
    console.log("✅ Mutation Complete: Applied cyan backgrounds to target list arrays elements loop context.");
}

/**
 * ❓ QUESTION 5 (Multiple Choice Question Evaluation):
 * Which of the following is used to look for the farthest ancestor that matches a given CSS selector?
 * (a) matches  (b) closest  (c) contains  (d) none of these
 */
function solveQuestion5() {
    console.log("\nEvaluating Practice Set: Question 5...");
    
    const evaluationSummary = {
        questionText: "Look for the FARTHEST ancestor matching a specific CSS selector string framework.",
        options: ["matches", "closest", "contains", "none of these"],
        userSelectedAnswer: "d", 
        conceptualBreakdown: "Method '.closest()' initiates looking upwards but returns the NEAREST ancestor. " +
                             "To extract the FARTHEST ancestor node context, JavaScript lacks a single default " +
                             "shorthand method variant natively, requiring a custom loop pattern instead. " +
                             "Therefore, option (d) 'none of these' is technically the absolute correct answer!"
    };

    console.table(evaluationSummary);
}

// ============================================================================
// INITIALIZATION MASTER CONTROL INTERFACES
// ============================================================================
function triggerChapter7CompleteAssessment() {
    console.log("==================================================================");
    console.log("🚀 STARTING MUHAMMAD HISSAN SHAHID'S DOM MASTER ASSESSMENT HUB");
    console.log("==================================================================");
    
    runDomWalkingDemo();
    solveQuestion1();
    solveQuestion4();
    solveQuestion5();
    
    console.log("\n==================================================================");
    console.log("🎉 CHAPTER 7 EXECUTION LOG SUMMARY PROCESSED SUCCESSFULLY!");
    console.log("==================================================================");
}
