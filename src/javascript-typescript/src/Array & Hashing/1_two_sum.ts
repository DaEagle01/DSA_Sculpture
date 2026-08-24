// Solution 1: Using brute force method
const twoSumBruteForce = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [0, 0];
};

// Solution 2: Using hash map
const twoSumHashMap = (nums: number[], target: number): number[] => {
  const paths = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (paths.has(needed)) {
      return [paths.get(needed)!, i];
    } else {
      paths.set(nums[i], i);
    }
  }

  return [0, 0];
};

console.log(twoSumHashMap([2, 5, 5, 11], 10));
console.log(twoSumHashMap([2, 7, 11, 15], 26));
console.log(twoSumHashMap([3, 2, 4], 6));
console.log(twoSumHashMap([4, 5, 6], 10));
console.log(twoSumHashMap([3, 6, 12, 32, 14], 20));
console.log(twoSumHashMap([3, 4, 5, 6], 7));
console.log(twoSumHashMap([3, 4, 7, 7], 14));
