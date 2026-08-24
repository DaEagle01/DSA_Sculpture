/* 
    2108. Find First Palindromic String in the Array
    https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
*/
const firstPalindrome = (arr) => {
    const isPalindrome = (string) => {
        let start = 0;
        let end = string.length - 1;
        while (start <= end) {
            if (string.charAt(start) !== string.charAt(end)) {
                return false;
            }
            start = start + 1;
            end = end - 1;
        }
        return string;
    }
    for (let i = 0; i < arr.length; i++) {
        const result = isPalindrome(arr[i]);
        if (result) return result;
    }
    return "";
};
const words1 = ["abc", "car", "ada", "racecar", "cool"];
const words2 = ["notapalindrome", "racecar"];
const words3 = ["def", "ghi"];
console.log(firstPalindrome(words1));
console.log(firstPalindrome(words2));
console.log(firstPalindrome(words3));