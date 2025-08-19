/* 
    1768. Merge Strings Alternately
    https://leetcode.com/problems/merge-strings-alternately/
*/
// Solution 1
const mergeAlternately = (word1: string, word2: string): string => {
  const arr1 = word1.split("");
  const arr2 = word2.split("");
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
    arr3.push(arr2[i]);
  }
  if (arr1.length < arr2.length) {
    arr3 = [...arr3, ...arr2.slice(arr1.length)];
  }
  return arr3.join("");
};

// Solution 2
const mergeAlternately2 = (word1: string, word2: string): string => {
  let merged = "";
  for (let i = 0; i < word1.length; i++) {
    merged = merged + word1[i];
    if (word2[i]) {
      merged = merged + word2[i];
    }
  }

  if (word1.length < word2.length) {
    merged = merged + word2.slice(word1.length);
  }

  return merged;
};

console.log(mergeAlternately2("abc", "pqr"));
console.log(mergeAlternately2("ab", "pqrs"));
console.log(mergeAlternately2("abcd", "pq"));
console.log(mergeAlternately2('ab', 'abbxxc'));