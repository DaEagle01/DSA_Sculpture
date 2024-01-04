/* 
    744. Find Smallest Letter Greater Than Target
    https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/
*/
const nextGreatestLetter = function (arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            for (let i = mid + 1; i < arr.length; i++) {
                if (arr[i] !== target) {
                    return arr[i];
                }
            }
            return arr[0];
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target) return arr[i];
    }
    return arr[0];
};

// const letters = ["c", "f", "j"], target = "c"
const letters = ["x", "x", "y", "y"], target = "z"
console.log(nextGreatestLetter(letters, target));

const letters1 = ["c", "f", "j"], target1 = "d"
console.log(nextGreatestLetter(letters1, target1));