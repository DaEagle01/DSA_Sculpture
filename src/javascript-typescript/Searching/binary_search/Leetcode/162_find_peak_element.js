/* 
    162. Find Peak Element
    https://leetcode.com/problems/find-peak-element/description/
*/
const findPeakElement = (arr) => {
    if (arr.length === 1) return 0;
    if (arr.length === 2) return arr[0] > arr[1] ? 0 : 1;
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        }
        else if (!arr[mid - 1] && (arr[mid] > arr[mid + 1])) {
            return mid;
        }
        else if (!arr[mid + 1] && (arr[mid] > arr[mid - 1])) {
            return mid;
        }
        else if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
};

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([9, 6, 5, 4, 3, 2, 1]));
console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7]));