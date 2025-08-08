/* 
    237. Delete Node in a Linked List
    https://leetcode.com/problems/delete-node-in-a-linked-list/description/
*/
const deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};