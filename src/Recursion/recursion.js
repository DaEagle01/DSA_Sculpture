// function recursion(n) {
//     if (n > 10) return;
//     console.log(n)
//     recursion(n + 1)
// }

// recursion(1)

// array traverse ✔✔

function traverseArray(arr, i) {
    if (arr.length === i) return;

    console.log(arr[i])
    traverseArray(arr, i + 1)
}
const array = [10, 20, 30, 40, 50, 60, 70, 80]
// traverseArray(array, 0)


// reverse array ✔✔
function reverseArray(arr, fi, bi) {
    if (fi > bi) return;

    let temp = arr[fi];
    arr[fi] = arr[bi];
    arr[bi] = temp;
    reverseArray(arr, fi + 1, bi - 1)

    return arr;
}
// console.log(reverseArray(array, 0, array.length - 1))


// palindrome
const isPalindrome = (str, fi, bi) => {
    if (fi >= bi) {
        return true;
    }
    if (str[fi] !== str[bi]) {
        return false;
    }
    return isPalindrome(str, fi + 1, bi - 1);
}
const word = 'aabaa';
// console.log(isPalindrome(word, 0, word.length - 1));


// linked list traverse
