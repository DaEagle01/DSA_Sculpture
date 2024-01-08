/* 
    704. Binary Search
    https://leetcode.com/problems/binary-search/description/
*/

function binarySearch(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            return mid;
        }
        else if (numbers[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1
}

// let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let nums = [-1, 0, 3, 5, 9, 12];
let nums = [-1, 0, 3, 5, 9, 12];
let target = 0;

console.log(binarySearch(nums, target));