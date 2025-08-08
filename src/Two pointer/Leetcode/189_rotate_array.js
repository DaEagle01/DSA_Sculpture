/* 
    189. Rotate Array
    https://leetcode.com/problems/rotate-array/description/
*/
// solution doesn't work. returns unexpected output for some test cases.
const rotateArray = (nums, k) => {
    let arr = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        if (i + k > nums.length - 1) {
            if ((i - 1) - k <= 0) {
                if (!arr[0]) arr[0] = nums[i];
                arr[i - k] = nums[i];
            } else {
                arr[(i - 1) - k] = nums[i];
            }
        } else {
            arr[i + k] = nums[i];
        }
    }
    return arr;
};
const nums1 = [1, 2, 3, 4, 5, 6, 7], k1 = 3;
console.log(rotateArray(nums1, k1));
// Expected Output: [5,6,7,1,2,3,4]
const nums2 = [-1, -100, 3, 99], k2 = 2;
console.log(rotateArray(nums2, k2));
// Expected Output: [3,99,-1,-100]
const nums3 = [], k3 = 2;
console.log(rotateArray(nums3, k3));
// Expected Output: []
const nums4 = [5], k4 = 4;
console.log(rotateArray(nums4, k4));
// Expected Output: [5]
const nums5 = [1, 2, 3, 4, 5], k5 = 0;
console.log(rotateArray(nums5, k5));
// Expected Output: [1, 2, 3, 4, 5]
const nums6 = [10, 20, 30, 40, 50], k6 = 5;
console.log(rotateArray(nums6, k6));
// Expected Output: [10, 20, 30, 40, 50]
const nums7 = [-5, -3, 0, 7, 12], k7 = 3;
console.log(rotateArray(nums7, k7));
// Expected Output: [0, 7, 12, -5, -3]

// console.log(i, nums[i], arr);