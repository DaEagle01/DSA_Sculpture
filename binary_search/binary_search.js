
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let target = 300;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return `Target ${target} found at index ${mid}`;
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return `Target ${target} not found`
}

console.log(binarySearch(arr, target));