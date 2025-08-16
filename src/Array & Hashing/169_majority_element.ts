/* 
    169. Majority Element
    https://leetcode.com/problems/majority-element/description/
    Time: O(n), Space: O(1)
*/

const majorityElement = (nums: number[]): number => {
    let count = 0;
    let candidate = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate) count++
    }

    return count > nums.length / 2 ? candidate : -1;
}

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElement([2, 2, 2])); // 2