/* Problem: Find the Minimum Element

Write a JavaScript function called findMinElement that takes an array of numbers as a parameter and returns the minimum element in the array. Use linear search to solve this problem without using built-in functions like Math.min or Array.prototype.reduce. */

// solution 1
function findMinElement(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = arr[i + 1];
        if (current < next) {
            if (min > current) {
                min = current;
            }
        }
        else {
            if (min > next) {
                min = next;
            }
        }
    };
    return min;
}

// solution 2
// function findMinElement(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         let current = arr[i];
//         if (current < min) {
//             min = current;
//         }
//     }
//     return min;
// }

const numbers = [1, 8, 2, 10, 3, 7, 13, 0];
const minElement = findMinElement(numbers);

console.log(`The smallest element is: ${minElement}`);
