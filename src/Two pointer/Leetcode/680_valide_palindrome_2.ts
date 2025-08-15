/* 
    680. Valid Palindrome II
    https://leetcode.com/problems/valid-palindrome-ii/description/
*/
// Solution 1
const isValidPalindrome = (s: string): boolean => {
    const isAlphanumeric = (char: number) => (char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57);

    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
        if (!isAlphanumeric(s[start].charCodeAt(0))) start++;
        else if (!isAlphanumeric(s[end].charCodeAt(0))) end--;
        else {
            if (s[start] !== s[end]) {
                const sliced1 = s.slice(0, start) + s.slice(start + 1);
                const sliced2 = s.slice(0, end) + s.slice(end + 1);

                const checker = (str: string): boolean => {
                    let start1 = 0;
                    let end1 = str.length - 1;
                    while (start1 <= end1) {
                        if (str[start1] !== str[end1]) return false;
                        start1++;
                        end1--;
                    }
                    return true;
                }

                if (checker(sliced1)) {
                    return true;
                } else if (checker(sliced2)) {
                    return true
                }
                return false
            };
            start = start + 1;
            end = end - 1;
        }
    }
    return true;
};

// Solution 2
const isValidPalindrome2 = (s: string): boolean => {
    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
        if (s[start] !== s[end]) {
            const isPalindrome = (l: number, r: number): boolean => {
                while (l <= r) {
                    if (s[l] !== s[r]) return false;
                    l++;
                    r--;
                }
                return true;
            }

            if (isPalindrome(start + 1, end) || isPalindrome(start, end - 1)) return true
            return false
        };
        start = start + 1;
        end = end - 1;
    }
    return true;
};

console.log(isValidPalindrome2('aba'));
console.log(isValidPalindrome2('abca'));
console.log(isValidPalindrome2('abcb'));
console.log(isValidPalindrome2('abbadc'));
console.log(isValidPalindrome2('abbda'));