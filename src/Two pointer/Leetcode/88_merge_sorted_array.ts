/* 
    88. Merge Sorted Array
    https://leetcode.com/problems/merge-sorted-array/description/
*/

const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // [1,2,2,3,5,6]
merge([1], 1, [], 0) // [1]
merge([0], 0, [1], 1) // [1]
merge([10, 20, 20, 40, 0, 0], 4, [1, 2], 2) // [1,2,10,20,20,40]
merge([0, 0], 0, [1, 2], 2) // [1,2]