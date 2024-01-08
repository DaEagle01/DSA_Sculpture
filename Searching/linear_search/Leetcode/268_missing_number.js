/* 
    268. Missing Number
    https://leetcode.com/problems/missing-number/description/
*/

var missingNumber = function (nums) {
    let sumOfNumbers = 0;
    for (let i = 0; i <= nums.length; i++) {
        sumOfNumbers = sumOfNumbers + i
    }
    let sumOfGivenNumbers = 0;
    for (let i = 0; i < nums.length; i++) {
        sumOfGivenNumbers = sumOfGivenNumbers + nums[i]
    }
    return sumOfNumbers - sumOfGivenNumbers;
};

// const nums = [3, 0, 1];
const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// const nums = [0, 1];

console.log(missingNumber(nums)); 