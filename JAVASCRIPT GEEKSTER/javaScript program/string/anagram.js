/**
 * Function to check if two strings are anagrams
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0); // Array to count letters (for lowercase English letters)
    const aCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - aCharCode]++;
        count[t.charCodeAt(i) - aCharCode]--;
    }

    // If all counts are zero, the strings are anagrams
    return count.every(c => c === 0);
}

// Input-output handling
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first string: ", function(s) {
    rl.question("Enter the second string: ", function(t) {
        const result = isAnagram(s, t);
        console.log("Output:", result);
        rl.close();
    });
});
