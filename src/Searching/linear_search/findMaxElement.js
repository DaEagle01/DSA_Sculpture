/* Problem: Find the Maximum Element

Write a JavaScript function called findMaxElement that takes an array of numbers as a parameter and returns the maximum element in the array. Use linear search to solve this problem without using built-in functions like Math.max or Array.prototype.reduce. */

function findMaxElement(arr) {
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    };
    return maxNum;
}

const numbers = [5, 8, 2, 10, 3, 7, 234, 5, 23, 56, 265, 8];
const maxElement = findMaxElement(numbers);

console.log(`The maximum element is: ${maxElement}`);
