/* 
    2095. Delete the Middle Node of a Linked List
    https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
*/
const deleteMiddle = function (head) {
    if (!head.next) return null;
    let a = head;
    if (!a?.next?.next) {
        a.next = null;
        return head;
    }
    let b = head;
    while (b?.next) {
        a = a.next;
        b = b.next.next;
    }
    a.val = a?.next?.val;
    a.next = a?.next?.next;
    return head;
};