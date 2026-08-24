/* 
    852. Peak Index in a Mountain Array
    https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
*/
const peakOfMountain = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        }
        else if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
}
console.log(peakOfMountain([1, 2, 1]));
console.log(peakOfMountain([0, 1, 0]));
console.log(peakOfMountain([0, 2, 1, 0]));
console.log(peakOfMountain([0, 10, 5, 2]));