/* 
    151. Reverse Words in a String
    https://leetcode.com/problems/reverse-words-in-a-string/description/
*/
// solution 1
const reverseWords = (s) => {
    let arr = s.split(" ")
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element !== '' && element.charCodeAt() !== 32) newArray.push(element);
    }
    let start = 0;
    let end = newArray.length - 1;
    while (start <= end) {
        [newArray[start], newArray[end]] = [newArray[end], newArray[start]]
        start = start + 1;
        end = end - 1;
    }
    return newArray.join(' ');
};

// Solution 2
const reverseWords2 = (s) => {
    let arr = s.replace(/\s+/g, ' ').trim().split(" ")
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start = start + 1;
        end = end - 1;
    }
    return arr.join(' ');
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));