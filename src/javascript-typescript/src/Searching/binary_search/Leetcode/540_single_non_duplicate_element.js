/* 
    540. Single Element in a Sorted Array
    https://leetcode.com/problems/single-element-in-a-sorted-array/description/
*/

const singleNonDuplicate = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        const isEven = (mid + 1) % 2 === 0;
        if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
            return arr[mid];
        }
        else if ((arr[mid] !== arr[mid + 1] && isEven) || (arr[mid] === arr[mid + 1] && !isEven)) {
            start = mid + 1;
        }
        else {
            end = mid - 1
        }
    }
    return arr[mid];
};
console.log(singleNonDuplicate([3, 3, 4, 4, 7, 7, 10, 11, 11]));
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));