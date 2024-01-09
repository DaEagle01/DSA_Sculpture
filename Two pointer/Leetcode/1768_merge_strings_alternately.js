/* 
    1768. Merge Strings Alternately
    https://leetcode.com/problems/merge-strings-alternately/
*/
const mergeAlternately = (word1, word2) => {
    const arr1 = word1.split("");
    const arr2 = word2.split("");
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
    };
    if (arr1.length < arr2.length) {
        arr3 = [...arr3, ...arr2.slice(arr1.length)]
    };
    return arr3.join("");
};
console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));