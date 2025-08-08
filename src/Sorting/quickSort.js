// const quickSort = (arr) => {
//     let pivot = arr[0];
//     let index = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             index = index + 1;
//         }
//     }
//     arr[0] = arr[index];
//     arr[index] = pivot;

//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         console.log(arr[left], arr[right], arr[index], 'left', left, 'right', right);
//         console.log('in while', arr)
//         if (arr[left] > arr[index] && arr[left] > arr[right] && arr[right] < arr[index]) {
//             let temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;
//             left = left + 1;
//             right = right - 1;
//         }
//         else if (arr[left] > arr[index] && arr[left] > arr[right]) {
//             right = right - 1;
//         }
//         else if (arr[left] < arr[index] && arr[left] < arr[right]) {
//             left = left + 1;
//             right = right - 1;
//         }
//         else if (arr[left] < arr[index] && arr[right] < arr[index]) {
//             left = left + 1;
//         }
//         else if (arr[left] > arr[index] && arr[left] < arr[right]) {
//             right = right - 1;
//         }
//         else {
//             left = left + 1;
//         }
//     }
//     console.log('final return ', arr)
//     return quickSort(arr);
// }


function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pi = partition(arr, low, high);
        console.log({ pi: pi, arr: arr })
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);
    console.log({ low: low, high: high, i: i, pivot: pivot, arr: arr })
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}

let arr = [40, 80, 30, 221, 50, 90, 10, 20, 129];
console.log(quickSort(arr));
