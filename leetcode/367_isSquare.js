/* 
    367. Valid Perfect Square
    https://leetcode.com/problems/valid-perfect-square/description/
*/

const isPerfectSquare = (num) => {
    let start = 0;
    let end = num;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (mid * mid === num) return mid % 1 === 0;
        if (start === end && mid * mid !== num) return false;
        else if (mid * mid > num) end = mid;
        else start = mid + 1
    }
    return false;
};
console.log(isPerfectSquare(25));