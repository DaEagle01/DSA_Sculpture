/* 
    125. Valid Palindrome
    https://leetcode.com/problems/valid-palindrome/description/
*/
const isPalindrome = (s) => {
    const str = s.toLowerCase();
    let arr = str.split("")
    let newArray = [];
    const isAlphanumeric = (char) => (char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (isAlphanumeric(element.charCodeAt())) newArray.push(element);
    }
    let start = 0;
    let end = newArray.length - 1;
    while (start <= end) {
        if (newArray[start] !== newArray[end]) return false;
        start = start + 1;
        end = end - 1;
    }
    return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
