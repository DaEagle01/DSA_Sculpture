function getCeilingFlooring(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return { ceiling: mid, flooring: mid };
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return { ceiling: arr[mid], flooring: arr[mid - 1] }
}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//        [ 0,  1,  2,  3,  4,  5,  6,  7,  8,   9];
// Target must be between the smallest and the largest value of the array.
let target = 55;
console.log(getCeilingFlooring(arr, target));