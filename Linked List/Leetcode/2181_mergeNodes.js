/* 
    2181. Merge Nodes in Between Zeros
    https://leetcode.com/problems/merge-nodes-in-between-zeros/description/
*/
const mergeNodes = function (head) {
    let dummy = new ListNode();
    let node = dummy;
    let count = 0;
    while (head) {
        if (head.val === 0) {
            if (count !== 0) {
                node.next = new ListNode(count);
                node = node.next;
            }
            count = 0;
        } else {
            count = count + head.val;
        }
        head = head.next;
    }
    return dummy.next;
};