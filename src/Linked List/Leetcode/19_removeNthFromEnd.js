/* 
    19. Remove Nth Node From End of List
    https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
*/
const removeNthFromEnd = function (head, n) {
    if (head.next === null) return null;
    let count = 0;
    let count2 = 0;
    let node = head;
    while (node) {
        count++;
        node = node.next;
    }
    node = head;
    if (count === n) {
        return head.next;
    }
    let prevPosition = count - n;
    while (node) {
        count2++;
        if (count2 === prevPosition) {
            node.next = node.next.next;
            break;
        }
        node = node.next;
    }
    return head
};