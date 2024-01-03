// console.log({ start, end });
// console.log({ mid });
// console.log(arr[mid]);
const countOccurrence = (arr, target) => {
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            count = count + 1
            for (let i = mid - 1; i => 0; i--) {
                if (arr[i] !== target) break
                else count = count + 1;
            }
            for (let i = mid + 1; i < arr.length; i++) {
                if (arr[i] !== target) break
                else count = count + 1;
            }
            return count;
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return count;
};

const arr = [1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10];
const target = 9;
console.log(countOccurrence(arr, target));