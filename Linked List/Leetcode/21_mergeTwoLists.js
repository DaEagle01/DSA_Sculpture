/* 
    21. Merge Two Sorted Lists
    https://leetcode.com/problems/merge-two-sorted-lists/description/

    1 ==> 2 ==> 4
    1 ==> 3 ==> 4
    1 ==> 1 ==> 2 ==> 3 ==> 4 ==> 4
*/
var mergeTwoLists = function (list1, list2) {
    let a = list1.head;
    let b = list2.head;
    while (a || b) {
        let tempA = a.next;
        let tempB = b.next;

    }
    return b.head;
};