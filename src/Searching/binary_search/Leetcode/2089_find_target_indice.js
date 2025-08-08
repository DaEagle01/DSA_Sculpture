/* 
    2089. Find Target Indices After Sorting Array
    https://leetcode.com/problems/find-target-indices-after-sorting-array/description/
*/

// solution 1
const findTargetIndices = (nums, target) => {
    nums.sort((a, b) => a - b);
    let targetIndices = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            targetIndices.push(i);
        }
    }
    return targetIndices
};

// solution 2
const findTargetIndices2 = (nums, target) => {
    nums.sort((a, b) => a - b);
    let targetIndices = [];
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            targetIndices.push(mid);
            for (let i = mid - 1; i => 0; i--) {
                if (nums[i] !== target) break;
                targetIndices.push(i);
            }
            for (let i = mid + 1; i < nums.length; i++) {
                if (nums[i] !== target) break;
                targetIndices.push(i);
            }
            return targetIndices.sort((a, b) => a - b);
        }
        else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return targetIndices.sort((a, b) => a - b)
};

console.log(findTargetIndices([1, 2, 5, 2, 3], 2));
console.log(findTargetIndices([1, 2, 5, 2, 3], 3));
console.log(findTargetIndices([1, 2, 5, 2, 3], 5));