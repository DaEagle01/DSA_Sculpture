/* 
    167. Two Sum II - Input Array Is Sorted
    https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
*/
const twoSum = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        let sum = numbers[start] + numbers[end];
        if (sum === target) return [start + 1, end + 1];
        else if (sum > target) end = end - 1;
        else start = start + 1;
    }
};
const numbers1 = [2, 7, 11, 15], target1 = 9;
const numbers2 = [2, 3, 4], target2 = 6;
const numbers3 = [-1, 0], target3 = -1;
console.log(twoSum(numbers1, target1));
console.log(twoSum(numbers2, target2));
console.log(twoSum(numbers3, target3));