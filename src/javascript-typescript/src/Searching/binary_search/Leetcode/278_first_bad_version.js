/* 
    278. First Bad Version
    https://leetcode.com/problems/first-bad-version/description/
*/
var solution = function (isBadVersion) {
    return function (n) {
        if (n === 1) return 1;
        let start = 0;
        let end = n;
        let mid;
        while (start < end) {
            mid = Math.floor((start + end) / 2);
            let isBad = isBadVersion(mid);
            if (isBad === true) {
                for (let i = mid - 1; i => 0; i--) {
                    isBad = isBadVersion(i);
                    if (isBad !== true) return i + 1;
                }
                return mid + 1;
            } else start = mid + 1;
        }
        return mid + 1;
    };
};

const badVersions = [false, true]