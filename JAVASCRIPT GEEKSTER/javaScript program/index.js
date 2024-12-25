

//String Reversal: A simple loop from the end to the start of the string is used to construct the reversed string.
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("hello")); // Output: "olleh"


//Anagram Check: Sort both strings and compare them.
// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) return false;
    
//     let sortedStr1 = str1.split('').sort().join('');
//     let sortedStr2 = str2.split('').sort().join('');
    
//     return sortedStr1 === sortedStr2;
// }

// console.log(areAnagrams("listen", "silent")); // Output: true
// console.log(areAnagrams("hello", "world")); // Output: false



//Array Intersection: Iterate through the first array and check if each element exists in the second array.
// function arrayIntersection(arr1, arr2) {
//     let intersection = [];
//     for (let num of arr1) {
//         if (arr2.includes(num)) {
//             intersection.push(num);
//         }
//     }
//     return intersection;
// }

// console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]



//String Palindrome: Clean the string by removing non-alphanumeric characters and compare it with its reversed version.
// function isPalindrome(str) {
//     let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
// }

// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("hello")); // Output: false


//Array Rotation: Use slice to divide the array and rearrange parts based on the rotation.
function rotateArray(arr, k) {
    k = k % arr.length; // Handle cases where k is larger than array length
    return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]




//String Compression: Count consecutive characters and build the compressed version. If the compressed version is longer, return the original string.
// function compressString(str) {
//     let compressed = '';
//     let count = 1;

//     for (let i = 1; i <= str.length; i++) {
//         if (str[i] === str[i - 1]) {
//             count++;
//         } else {
//             compressed += str[i - 1] + count;
//             count = 1;
//         }
//     }
    
//     return compressed.length < str.length ? compressed : str;
// }

// console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"

//Array Sum: Use a set to keep track of seen numbers and check if the complement exists for each number.
function compressString(str) {
    let compressed = '';
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressed += str[i - 1] + count;
            count = 1;
        }
    }
    
    return compressed.length < str.length ? compressed : str;
}

console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"


function findPairWithSum(arr, target) {
    let seen = new Set();
    
    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    
    return null;
}

console.log(findPairWithSum([1, 2, 3, 4, 5], 9)); // Output: [4, 5]
console.log(findPairWithSum([1, 2, 3, 4, 5], 10)); // Output: null




// Longest Substring Without Repeating Characters: Use a sliding window approach with two pointers to track the longest substring without repeating characters.
function longestSubstring(str) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        if (map.has(str[right])) {
            left = Math.max(left, map.get(str[right]) + 1);
        }
        map.set(str[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestSubstring("abcabcbb")); // Output: 3
console.log(longestSubstring("bbbbb")); // Output: 1
console.log(longestSubstring("pwwkew")); // Output: 3


