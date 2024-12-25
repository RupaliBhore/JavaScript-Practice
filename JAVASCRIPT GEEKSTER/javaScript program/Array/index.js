














// Q1


// function twoSum(nums, target) {
//     const map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];

//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }

//         map.set(nums[i], i);
//     }

//     return [];
// }

// // Example Test Cases
// const nums1 = [2, 7, 11, 15];
// const target1 = 9; // Expected output: [0, 1]

// const nums2 = [3, 2, 4];
// const target2 = 6; // Expected output: [1, 2]

// console.log(twoSum(nums1, target1)); // [0, 1]
// console.log(twoSum(nums2, target2)); // [1, 2]




// function threeSum(nums) {
//     const result = [];
//     nums.sort((a, b) => a - b); // Sort the array

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first number

//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];

//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 left++;
//                 right--;

//                 // Skip duplicates for the second and third numbers
//                 while (left < right && nums[left] === nums[left - 1]) left++;
//                 while (left < right && nums[right] === nums[right + 1]) right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }

// // Example Test Cases
// const nums1 = [-1, 0, 1, 2, -1, -4]; // Expected output: [[-1, -1, 2], [-1, 0, 1]]
// const nums2 = []; // Expected output: []
// const nums3 = [0, 0, 0]; // Expected output: [[0, 0, 0]]

// console.log(threeSum(nums1)); // [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum(nums2)); // []
// console.log(threeSum(nums3)); // [[0, 0, 0]]



// Q9


// function isPalindrome(x) {
//     // Negative numbers or numbers ending with 0 (except 0 itself) cannot be palindromes
//     if (x < 0 || (x % 10 === 0 && x !== 0)) {
//         return false;
//     }

//     let reversed = 0;
//     let original = x;

//     // Reverse the number
//     while (x > 0) {
//         reversed = reversed * 10 + (x % 10);
//         x = Math.floor(x / 10);
//     }

//     // Check if the reversed number is equal to the original number
//     return reversed === original;
// }

// // Example Test Cases
// console.log(isPalindrome(121)); // Expected output: true
// console.log(isPalindrome(-121)); // Expected output: false
// console.log(isPalindrome(10)); // Expected output: false
// console.log(isPalindrome(0)); // Expected output: true



// Q53


function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Update the current sum: either include the current element or start fresh from the current element
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the max sum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example Test Cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected output: 6
console.log(maxSubArray([1])); // Expected output: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Expected output: 23















//two sum
// const readline = require('readline');

// // Function to find two numbers that add up to the target
// function twoSum(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// }

// // Create an interface for input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Get input for the array
// rl.question("Enter an array of numbers separated by commas (e.g., 2,7,11,15): ", (numsInput) => {
//     rl.question("Enter the target number: ", (targetInput) => {
//         // Parse inputs
//         const nums = numsInput.split(",").map(Number);
//         const target = parseInt(targetInput, 10);

//         // Call the function
//         const result = twoSum(nums, target);

//         // Display the result
//         if (result.length > 0) {
//             console.log(`Indices: ${result[0]}, ${result[1]}`);
//         } else {
//             console.log("No solution found.");
//         }

//         // Close the input interface
//         rl.close();
//     });
// });


//three sum
//const readline = require('readline');

// Function to find all unique triplets that sum to zero
// function threeSum(nums) {
//     nums.sort((a, b) => a - b); // Sort the array
//     const result = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first number

//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];
//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);

//                 // Skip duplicates for the second and third numbers
//                 while (left < right && nums[left] === nums[left + 1]) left++;
//                 while (left < right && nums[right] === nums[right - 1]) right--;

//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }

// // Create an interface for input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // Take input for the array
// rl.question("Enter an array of integers separated by commas (e.g., -1,0,1,2,-1,-4): ", (numsInput) => {
//     // Parse the input into an array of numbers
//     const nums = numsInput.split(",").map(Number);

//     // Call the function and get the result
//     const result = threeSum(nums);

//     // Display the output
//     if (result.length > 0) {
//         console.log("Triplets that sum to 0:");
//         result.forEach(triplet => console.log(triplet));
//     } else {
//         console.log("No triplets found that sum to 0.");
//     }

//     // Close the input interface
//     rl.close();
// });




///palindrom number

// const readline = require('readline');

// // Function to check if a number is a palindrome
// function isPalindrome(num) {
//     const str = num.toString(); // Convert the number to a string
//     const reversedStr = str.split('').reverse().join(''); // Reverse the string
//     return str === reversedStr; // Check if original and reversed strings are the same
// }

// // Create an interface for input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // Ask the user to input a number
// rl.question("Enter a number: ", (input) => {
//     const num = parseInt(input, 10); // Convert input to an integer

//     if (isNaN(num)) {
//         console.log("Please enter a valid number.");
//     } else if (isPalindrome(num)) {
//         console.log(`${num} is a palindrome number.`);
//     } else {
//         console.log(`${num} is not a palindrome number.`);
//     }

//     rl.close(); // Close the input interface
// });




//max subArray

const readline = require('readline');

// Function to find the maximum subarray sum using Kadane's Algorithm
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Create an interface for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Ask the user to input an array of numbers
rl.question("Enter an array of integers separated by commas (e.g., -2,1,-3,4,-1,2,1,-5,4): ", (input) => {
    // Convert the input string into an array of integers
    const nums = input.split(',').map(Number);

    // Call the function to get the maximum subarray sum
    const result = maxSubArray(nums);

    // Display the result
    console.log(`Maximum subarray sum is: ${result}`);

    rl.close(); // Close the input interface
});

































// // Q33 

// function search(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target) return mid;

//         // Check which half is sorted
//         if (nums[left] <= nums[mid]) {
//             // Left half is sorted
//             if (nums[left] <= target && target < nums[mid]) {
//                 right = mid - 1; // Target is in the left half
//             } else {
//                 left = mid + 1; // Target is in the right half
//             }
//         } else {
//             // Right half is sorted
//             if (nums[mid] < target && target <= nums[right]) {
//                 left = mid + 1; // Target is in the right half
//             } else {
//                 right = mid - 1; // Target is in the left half
//             }
//         }
//     }
//     return -1; // Target not found
// }
// // Example Test Cases
// const nums = [4, 5, 6, 7, 0, 1, 2];
// const target1 = 0; // Expected output: 4
// const target2 = 3; // Expected output: -1

// console.log(search(nums, target1)); // 4
// console.log(search(nums, target2)); // -1




// // Q11

// function maxArea(height) {
//     let left = 0;
//     let right = height.length - 1;
//     let maxWater = 0;

//     while (left < right) {
//         // Calculate the area
//         const width = right - left;
//         const minHeight = Math.min(height[left], height[right]);
//         const currentArea = width * minHeight;

//         // Update maximum area
//         maxWater = Math.max(maxWater, currentArea);

//         // Move the pointer pointing to the smaller height
//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return maxWater;
// }

// // Example Test Cases
// const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // Expected output: 49
// const height2 = [1, 1]; // Expected output: 1

// console.log(maxArea(height1)); // 49
// console.log(maxArea(height2)); // 1





// Q134

// function canCompleteCircuit(gas, cost) {
//     let totalGas = 0;
//     let currentGas = 0;
//     let startStation = 0;

//     for (let i = 0; i < gas.length; i++) {
//         totalGas += gas[i] - cost[i];
//         currentGas += gas[i] - cost[i];

//         if (currentGas < 0) {
//             // Reset the starting station and current gas
//             startStation = i + 1;
//             currentGas = 0;
//         }
//     }

//     return totalGas >= 0 ? startStation : -1;
// }

// // Example Test Cases
// const gas1 = [1, 2, 3, 4, 5];
// const cost1 = [3, 4, 5, 1, 2]; // Expected output: 3

// const gas2 = [2, 3, 4];
// const cost2 = [3, 4, 3]; // Expected output: -1

// console.log(canCompleteCircuit(gas1, cost1)); // 3
// console.log(canCompleteCircuit(gas2, cost2)); // -1