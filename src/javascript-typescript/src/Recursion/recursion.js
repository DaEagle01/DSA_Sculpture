/* // function recursion(n) {
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
 */

function sumNested(obj) {
  let sum = 0;
  console.log(sum, obj);
  for (let key in obj) {
    if (typeof obj[key] === "object") sum += sumNested(obj[key]);
    else sum += obj[key];
  }
  return sum;
}

// Example nested data to test
const testData = {
  a: 10,
  b: {
    c: 5,
    d: 3,
    e: {
      f: 2,
      g: 1,
    },
  },
  h: 7,
  i: {
    j: 8,
    k: {
      l: 4,
    },
  },
};

console.log(sumNested(testData)); // Should output 40
