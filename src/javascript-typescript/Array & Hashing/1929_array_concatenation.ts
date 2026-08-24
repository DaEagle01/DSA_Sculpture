/* 
    1929. Concatenation of Array
    https://leetcode.com/problems/concatenation-of-array/description/
*/
const getConcatenation = (nums: number[]): number[] => {
    const n = nums.length;
    const ans = new Array(n * 2);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }

    return ans;
};

// Example usage:
console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
console.log(getConcatenation([89, 23, 5, 1, 5, 9, 3]))