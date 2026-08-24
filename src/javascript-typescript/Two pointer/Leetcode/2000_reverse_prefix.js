/* 
    2000. Reverse Prefix of Word
    https://leetcode.com/problems/reverse-prefix-of-word/description/
*/
const reversePrefix = (word, ch) => {
    if (word.indexOf(ch) === -1) return word;
    const arr = word.split("");
    const chIndex = arr.indexOf(ch);
    const newArr = arr.slice(0, chIndex + 1).reverse();
    return [...newArr, ...arr.slice(chIndex + 1)].join("");
};
console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix("abcd", "z")); 