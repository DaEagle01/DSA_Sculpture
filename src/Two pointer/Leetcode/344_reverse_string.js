/* 
    344. Reverse String
    https://leetcode.com/problems/reverse-string/description/
*/

const reverseString = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start = start + 1;
        end = end - 1;
    }
    return arr;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));