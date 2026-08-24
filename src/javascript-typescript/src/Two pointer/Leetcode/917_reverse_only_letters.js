/* 
    917. Reverse Only Letters
    https://leetcode.com/problems/reverse-only-letters/description/
*/
const reverseOnlyLetters = (s) => {
    let arr = s.split("")
    let start = 0;
    let end = s.length - 1;

    while (start <= end) {
        let char1 = arr[start].charCodeAt();
        let char2 = arr[end].charCodeAt();
        const isAlphabet = (char) => (char >= 65 && char <= 90) || (char >= 97 && char <= 122);
        if (!isAlphabet(char1)) start++;
        else if (!isAlphabet(char2)) end--;
        else {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return arr.join("");
}
console.log(reverseOnlyLetters("ab-cd"))
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"))
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"))