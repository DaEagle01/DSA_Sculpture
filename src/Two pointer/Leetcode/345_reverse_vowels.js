/* 
    345. Reverse Vowels of a String 
    https://leetcode.com/problems/reverse-vowels-of-a-string/description/
*/
const reverseVowels = (s) => {
    let arr = s.split("")
    let start = 0;
    let end = arr.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    while (start <= end) {
        if (!vowels.includes(arr[start])) start++;
        else if (!vowels.includes(arr[end])) end--;
        else {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return arr.join("");
}
console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));