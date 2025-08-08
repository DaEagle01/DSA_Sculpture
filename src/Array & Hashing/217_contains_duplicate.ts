// Solution 1: Using plain object as a map
const hasDuplicateUsingMap = (numbers: number[]): boolean => {
  const uniqueNumbers: { [key: number]: boolean } = {};

  for (let i = 0; i < numbers.length; i++) {
    if (uniqueNumbers[numbers[i]]) {
      return true;
    }
    uniqueNumbers[numbers[i]] = true;
  }
  return false;
};

// Solution 2: Using Set
const hasDuplicateUsingSet = (numbers: number[]): boolean => {
  const seen = new Set<number>();
  for (const num of numbers) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};

console.log(hasDuplicateUsingMap([1, 2, 3, 3])); // true
console.log(hasDuplicateUsingMap([1, 2, 3, 4])); // false

console.log(hasDuplicateUsingSet([1, 2, 3, 3])); // true
console.log(hasDuplicateUsingSet([1, 2, 3, 4])); // false
