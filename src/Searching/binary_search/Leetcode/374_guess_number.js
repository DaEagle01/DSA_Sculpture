/* 
    374. Guess Number Higher or Lower
    https://leetcode.com/problems/guess-number-higher-or-lower/
*/

var guessNumber = function (n) {
    let start = 0;
    let end = n;
    let mid;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        let guessedNum = guess(mid);
        if (guessedNum === 0) return mid;
        else if (guessedNum === -1) end = mid - 1;
        else if (guessedNum === 1) start = mid + 1;
    }
};

console.log(guessNumber(10));