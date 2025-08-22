/* 
    219. Contains Duplicate II
    https://leetcode.com/problems/contains-duplicate-ii/description/
*/

const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
    let keeper = new Map();;
    for (let i = 0; i < nums.length; i++) {
        if (keeper.has(nums[i]) && Math.abs(keeper.get(nums[i]) - i) <= k) {
            return true;
        } else {
            keeper.set(nums[i], i);
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));