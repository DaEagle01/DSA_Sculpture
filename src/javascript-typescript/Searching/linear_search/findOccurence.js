/* Problem: Count Occurrences

Write a JavaScript function called countOccurrences that takes an array and a target element as parameters. The function should return the number of occurrences of the target element in the array. Use linear search to solve this problem. */
function countOccurrences(arr, target) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (arr[i] === target) {
            total += 1;
        }
    };
    return total;
}

const arrayToSearch = [1, 2, 3, 4, 2, 5, 2, 6];
const targetElement = 2;

const occurrences = countOccurrences(arrayToSearch, targetElement);
console.log(`${targetElement} occurs ${occurrences} times in the array.`);
