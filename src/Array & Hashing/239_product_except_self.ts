/* 
    238. Product of Array Except Self
    https://leetcode.com/problems/product-of-array-except-self/description/
*/

const productExceptSelf = (nums: number[]): number[] => {
    let output: number[] = [];

    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        output.push(product);
        product *= nums[i];
    }

    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= suffix;
        suffix *= nums[i];
    }

    return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // expected: [24,12,8,6], result: [ 24, 12, 8, 6 ]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // expected: [0,0,9,0,0], result: [ -0, 0, 9, -0, 0 ]
console.log(productExceptSelf([1, 2, 4, 6])); // expected: [48,24,12,8], result: [ 48, 24, 12, 8 ]