"""
21. Merge Two Sorted Lists
https://leetcode.com/problems/merge-two-sorted-lists/description/
"""


class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


def merge_two_lists(l1, l2):
    dummy = Node(-1)
    node = dummy
    while l1 and l2:
        if l1.value <= l2.value:
            node.next = l1
            l1 = l1.next
        else:
            node.next = l2
            l2 = l2.next
        node = node.next
    node.next = l1 or l2
    return dummy.next


def to_list(head):
    result = []
    node = head
    while node:
        result.append(node.value)
        node = node.next
    return result


def from_list(values):
    dummy = Node(-1)
    node = dummy
    for value in values:
        node.next = Node(value)
        node = node.next
    return dummy.next


if __name__ == "__main__":
    l1 = from_list([1, 2, 4])
    l2 = from_list([1, 3, 4])
    assert to_list(merge_two_lists(l1, l2)) == [1, 1, 2, 3, 4, 4]

    assert to_list(merge_two_lists(None, None)) == []
    assert to_list(merge_two_lists(None, from_list([0]))) == [0]

    print("All 21_merge_two_sorted_lists assertions passed.")
