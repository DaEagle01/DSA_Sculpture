const frontAndBackPointer = (arr) => {
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
console.log(frontAndBackPointer([2, 4, 1, 5, 9, 3, 6, 8]));