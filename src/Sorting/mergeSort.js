let count = 0;
function mergeSort(arr, side) {
    count = count + 1;
    console.log({ count: count, side: side, arr: arr });
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2)

    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    console.log({ left: leftArr, right: rightArr });
    return mergeArrays(mergeSort(leftArr, 'leftSide'), mergeSort(rightArr, 'rightSide'));
}

function mergeArrays(leftArr, rightArr) {
    console.log({ leftArr: leftArr, rightArr: rightArr })
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    const newArr = [...sortedArr, ...leftArr, ...rightArr];
    console.log({ newArr: newArr });
    return newArr
}

let arr = [80, 10, 30, 40, 90, 50, 20]
console.log(mergeSort(arr));