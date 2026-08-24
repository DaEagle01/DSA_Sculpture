/* 
    83. Remove Duplicates from Sorted List
    https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
*/
const deleteDuplicates = function (head) {
    let node = head;
    while (node && node.next) {
        if (node.val === node.next.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
};