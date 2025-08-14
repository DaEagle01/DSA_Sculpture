/* 
    125. Valid Palindrome
    https://leetcode.com/problems/valid-palindrome/description/
*/
// Solution 1: Two-Pointer with Extra Array (O(n) space)
const isPalindrome = (s: string): boolean => {
    const str = s.toLowerCase();
    let newArray = [];
    const isAlphanumeric = (char: number) => (char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57);
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (isAlphanumeric(element.charCodeAt(0))) newArray.push(element);
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

// Solution 2: Two-Pointer In-Place (O(1) space)
const isPalindrome2 = (s: string): boolean => {
    const isAlphanumeric = (char: number) => (char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57);

    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        if (!isAlphanumeric(s[start].charCodeAt(0))) {
            start += 1;
        } else if (!isAlphanumeric(s[end].charCodeAt(0))) {
            end -= 1;
        } else {
            if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;
            start = start + 1;
            end = end - 1;
        }

    }
    return true;
}
console.log(isPalindrome2("A man, a plan, a canal: Panama"));
console.log(isPalindrome2("race a car"));
console.log(isPalindrome2(" "));
console.log(isPalindrome2("0P"));
console.log(isPalindrome2('Was it a car or a cat I saw?'));