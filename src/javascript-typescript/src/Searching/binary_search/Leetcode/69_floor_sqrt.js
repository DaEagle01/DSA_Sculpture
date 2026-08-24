/* 
    69. Sqrt(x)
    https://leetcode.com/problems/sqrtx/description/
*/

const mySqrt = (x) => {
    let start = 0;
    let end = x;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (mid * mid === x) return parseInt(mid);;
        if (start === end && mid * mid !== x) return parseInt(mid - 1);
        else if (mid * mid > x) end = mid;
        else start = mid + 1
    }
};
console.log(mySqrt(16));