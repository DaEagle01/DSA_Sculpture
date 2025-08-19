/* 
    26. Remove Duplicates from Sorted Array
    https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
*/

const removeDuplicates = (nums: number[]): number => {
    let p1 = 0;
    let p2 = 1;
    while (p2 < nums.length) {
        if (nums[p2] !== nums[p1]) {
            p1++
            nums[p1] = nums[p2]
        }
        p2++;
    }
    return p1 + 1;
};



console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([2, 10, 10, 30, 30, 30]));
console.log(removeDuplicates([1, 1, 2]));