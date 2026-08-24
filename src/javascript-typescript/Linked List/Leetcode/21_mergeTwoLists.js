/* 
    21. Merge Two Sorted Lists
    https://leetcode.com/problems/merge-two-sorted-lists/description/
*/
var mergeTwoLists = function (l1, l2) {
    let dummy = { value: -1, next: null };
    let c = dummy;
    while (l1 && l1) {
        if (l1.val > l2.val) {
            c.next = l2;
            l2 = l2.next;
        } else {
            c.next = l1;
            l1 = l1.next;
        }
        c = c.next;
    }
    c.next = l1 || l2;
    return dummy.next;
};