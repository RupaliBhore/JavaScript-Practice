function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Function to take input and provide output
function main() {
    const numsInput = prompt("Enter an array of numbers separated by commas (e.g., 2,7,11,15):");
    const targetInput = prompt("Enter the target number:");

    // Parse inputs
    const nums = numsInput.split(",").map(Number);
    const target = parseInt(targetInput, 10);

    // Call the function
    const result = twoSum(nums, target);

    // Display the result
    if (result.length > 0) {
        console.log(`Indices: ${result[0]}, ${result[1]}`);
        alert(`Indices: ${result[0]}, ${result[1]}`);
    } else {
        console.log("No solution found.");
        alert("No solution found.");
    }
}

// Run the program
main();
