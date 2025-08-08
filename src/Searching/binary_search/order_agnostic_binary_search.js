let ascendingArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let descendingArr = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
let target = 40;

function orderAgnosticBinarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    const isAscending = arr[0] < arr[arr.length - 1];
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return `Target ${target} found at index ${mid}`;
        }
        else if (arr[mid] < target) {
            isAscending ? start = mid + 1 : end = mid - 1;
        }
        else {
            isAscending ? end = mid - 1 : start = mid + 1;
        }
    }
    return `Target ${target} not found`
}

console.log(orderAgnosticBinarySearch(ascendingArr, target));
console.log(orderAgnosticBinarySearch(descendingArr, target));