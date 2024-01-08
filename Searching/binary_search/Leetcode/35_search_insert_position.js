/* 
    35. Search Insert Position
    https://leetcode.com/problems/search-insert-position/description/
*/

var searchInsert = function (numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            return mid
        }
        else if (numbers[mid] > target) {
            end = mid - 1;
        }
        else if (numbers[mid] < target) {
            start = mid + 1;
        }
    };

    if (numbers[mid] < target) {
        return mid + 1;
    }
    return mid;
};

// const nums = [1, 3, 5, 6];
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 25;

console.log(searchInsert(nums, target));