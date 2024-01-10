/* 
    557. Reverse Words in a String III
    https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
*/
const reverseWords = (string) => {
    const arr = string.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('');
    }
    return arr.join(" ");
};
console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("Mr Ding"))