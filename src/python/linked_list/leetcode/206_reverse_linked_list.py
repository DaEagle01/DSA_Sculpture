"""
206. Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/description/
"""


class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


def reverse_list(head):
    prev = None
    node = head
    while node:
        next_node = node.next
        node.next = prev
        prev = node
        node = next_node
    return prev


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
    head = from_list([1, 2, 3, 4, 5])
    reversed_head = reverse_list(head)
    assert to_list(reversed_head) == [5, 4, 3, 2, 1]

    assert reverse_list(None) is None

    single = from_list([1])
    assert to_list(reverse_list(single)) == [1]

    print("All 206_reverse_linked_list assertions passed.")
