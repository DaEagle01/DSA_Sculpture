class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self, value):
        node = Node(value)
        self.head = node
        self.tail = node
        self.length = 1

    def append(self, value):
        node = Node(value)
        self.tail.next = node
        self.tail = node
        self.length += 1

    def prepend(self, value):
        node = Node(value)
        node.next = self.head
        self.head = node
        self.length += 1

    def insert_at(self, value, position):
        if position == 1:
            self.prepend(value)
            return
        if position == self.length + 1:
            self.append(value)
            return
        node = Node(value)
        prev_node = self.find_node(position - 1)
        node.next = prev_node.next
        prev_node.next = node
        self.length += 1

    def find_node(self, position):
        node = self.head
        count = 1
        while count < position:
            node = node.next
            count += 1
        return node

    def delete(self, position):
        if position == 1:
            self.head = self.head.next
        elif position == self.length:
            prev_node = self.find_node(position - 1)
            prev_node.next = None
        elif 1 < position < self.length:
            prev_node = self.find_node(position - 1)
            prev_node.next = prev_node.next.next
        else:
            raise IndexError("Invalid position")
        self.length -= 1

    def sum(self):
        total = 0
        node = self.head
        while node:
            total += node.value
            node = node.next
        return total

    def sum_of_even_numbers(self):
        total = 0
        node = self.head
        while node:
            if node.value % 2 == 0:
                total += node.value
            node = node.next
        return total

    def sum_of_odd_numbers(self):
        total = 0
        node = self.head
        while node:
            if node.value % 2 != 0:
                total += node.value
            node = node.next
        return total

    def find_value(self, value):
        node = self.head
        while node:
            if node.value == value:
                return True
            node = node.next
        return False

    def find_mid_value(self):
        slow = fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow.value if slow else None

    def has_cycle(self):
        slow = fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                return True
        return False

    def to_list(self):
        result = []
        node = self.head
        while node:
            result.append(node.value)
            node = node.next
        return result

    def print(self):
        print(" -> ".join(str(v) for v in self.to_list()))


if __name__ == "__main__":
    ll = LinkedList(2)
    ll.append(1)
    ll.append(5)
    ll.append(4)
    ll.append(14)
    ll.append(7)

    assert ll.to_list() == [2, 1, 5, 4, 14, 7]

    ll.prepend(0)
    assert ll.to_list() == [0, 2, 1, 5, 4, 14, 7]

    ll.insert_at(99, 4)
    assert ll.to_list() == [0, 2, 1, 99, 5, 4, 14, 7]

    ll.delete(4)
    assert ll.to_list() == [0, 2, 1, 5, 4, 14, 7]

    assert ll.sum() == 33
    assert ll.sum_of_even_numbers() == 20
    assert ll.sum_of_odd_numbers() == 13
    assert ll.find_value(14) is True
    assert ll.find_value(100) is False
    assert ll.find_mid_value() == 5
    assert ll.has_cycle() is False

    ll.print()
    print("All singly_linked_list assertions passed.")
