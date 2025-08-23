/* 
    643. Maximum Average Subarray I
    https://leetcode.com/problems/maximum-average-subarray-i/description/
*/

const findMaxAverage = (nums: number[], k: number): number => {
    if (nums.length === 1) return nums[0];
    let average = -Infinity;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (i >= k - 1) {
            if (sum / k > average) {
                average = sum / k;
            }
            sum = sum - nums[i + 1 - k];
        }
    }
    return average;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Expected: 12.75 
console.log(findMaxAverage([5], 1)); // Expected: 5.00 
console.log(findMaxAverage([0, 4, 0, 3, 2], 1)); // Expected: 4.00  
console.log(findMaxAverage([0, 4, 0, 3, 2], 2)); // Expected: 2.50  
console.log(findMaxAverage([0, 4, 0, 3, 2], 3)); // Expected: 2.3333333333333335 
console.log(findMaxAverage([-1, -12, -5, -6, -50, -3], 2)); // Expected: -5.50
console.log(findMaxAverage([7, 7, 7, 7, 7], 3)); // Expected: 7.00  
console.log(findMaxAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // Expected: 8.00  
console.log(findMaxAverage([-2, -1], 2)); // Expected: -1.50  