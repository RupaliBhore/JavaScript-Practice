/**
 * Function to remove all adjacent duplicates in a string
//  @param {string} s
//  @return {string}
 */
// function removeDuplicates(s) {
//     let stack = [];
    
//     for (let char of s) {
//         if (stack.length && stack[stack.length - 1] === char) {
//             stack.pop(); // Remove the top element if it matches the current character
//         } else {
//             stack.push(char); // Add the current character to the stack
//         }
//     }
    
//     return stack.join(''); // Join the stack into the final string
// }

// // Input-output handling
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the string: ", function(input) {
//     const result = removeDuplicates(input);
//     console.log("Output:", result);
//     rl.close();
// });


// q4
/*
var reorganizeString = function(s) {
    // Step 1: Count the frequency of each character
    let frequency = new Array(26).fill(0);
    for (let char of s) {
        frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let maxFreq = 0, maxCharIndex = 0;
    for (let i = 0; i < 26; i++) {
        if (frequency[i] > maxFreq) {
            maxFreq = frequency[i];
            maxCharIndex = i;
        }
    }
    // If the most frequent character appears more than (n + 1) / 2 times, return ""
    if (maxFreq > Math.ceil(s.length / 2)) {
        return "";
    }
    // Step 3: Fill the most frequent character first at even indices
    let result = new Array(s.length);
    let idx = 0;
    while (frequency[maxCharIndex] > 0) {
        result[idx] = String.fromCharCode(maxCharIndex + 'a'.charCodeAt(0));
        idx += 2;
        frequency[maxCharIndex]--;
    }
    for (let i = 0; i < 26; i++) {
        while (frequency[i] > 0) {
            if (idx >= result.length) {
                idx = 1; // Switch to odd indices after filling even indices
            }
            result[idx] = String.fromCharCode(i + 'a'.charCodeAt(0));
            idx += 2;
            frequency[i]--;
        }
    }

    return result.join("");
};

// Test with input s = "aab"
console.log(reorganizeString("aab")); // Output: "aba"
*/

///Q2
let s = "anagram" ;
let t = "nagaram";

if (s.length !== t.length){
    console.log(false);
} else {
    let countS = {};
    let countT = {};

    for(let char of s){
        countS[char] = (countS[char] || 0) + 1;
    }

    for(let char of t){
        countT[char] = (countT[char] || 0) + 1;
    }

    let isAnagram = true;
    for(let char in countS){
        if(countS[char] !== countT[char]){
            isAnagram = false;
            break;
        }
    }

    console.log(isAnagram);
}
