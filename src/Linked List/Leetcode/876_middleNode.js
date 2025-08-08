/* 
    876. Middle of the Linked List
    https://leetcode.com/problems/middle-of-the-linked-list/description/
*/
var middleNode = function (head) {
    let a = head;
    let b = head;
    while (b?.next) {
        a = a?.next;
        b = b?.next?.next;
    }
    return a;
};