const arrOfNumbers = [1, 21, 2, 13, 78, 56, 9, 45, 7833, 4, 89];
const target = 56;
const findIndex = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return `Target ${numbers[i]} found at index ${i}`;
        };
    };
    return "Target not found!";
};
console.log(findIndex(arrOfNumbers, target));