/* 
    27. Remove Element
    https://leetcode.com/problems/remove-element/description/
*/

const removeElement = (nums: number[], val: number): number => {
    let i = 0;
    let k = 0;

    while (i < nums.length) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
        i++;
    }
    return k;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([1, 2, 1, 3, 4], 1));
