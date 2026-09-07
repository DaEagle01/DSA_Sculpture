class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self, value) -> None:
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def print_list(self) -> None:
        values = []
        current = self.head
        while current is not None:
            values.append(str(current.value))
            current = current.next
        print(" <-> ".join(values))

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node
        self.length += 1
        return True

    def pop(self):
        if self.length == 0:
            return None
        popped_node = self.tail
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.tail = popped_node.prev
            self.tail.next = None
            popped_node.prev = None
        self.length -= 1
        return popped_node

    def prepend(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        self.length += 1
        return True

    def pop_first(self):
        if self.length == 0:
            return None
        popped_node = self.head
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.head = popped_node.next
            self.head.prev = None
            popped_node.next = None
        self.length -= 1
        return popped_node

    def get(self, index):
        if index < 0 or index >= self.length:
            return None
        current = self.head
        if index < self.length / 2:
            for _ in range(index):
                current = current.next
        else:
            current = self.tail
            for _ in range(self.length - 1, index, -1):
                current = current.prev
        return current

    def set_value(self, index, value):
        node = self.get(index)
        if node is None:
            return False
        node.value = value
        return True

    def insert(self, index, value):
        if index < 0 or index > self.length:
            return False
        if index == 0:
            return self.prepend(value)
        if index == self.length:
            return self.append(value)
        new_node = Node(value)
        before = self.get(index - 1)
        after = before.next
        before.next = new_node
        new_node.prev = before
        new_node.next = after
        after.prev = new_node
        self.length += 1
        return True

    def remove(self, index):
        if index < 0 or index >= self.length:
            return None
        if index == 0:
            return self.pop_first()
        if index == self.length - 1:
            return self.pop()
        popped_node = self.get(index)
        before = popped_node.prev
        after = popped_node.next
        before.next = after
        after.prev = before
        popped_node.next = None
        popped_node.prev = None
        self.length -= 1
        return popped_node

dll = DoublyLinkedList(32)
dll.append(31)
dll.append(45)
dll.append(12)
dll.append(41)
dll.append(7)
dll.append(19)
dll.print_list()

# dll.pop()
# dll.pop()
# dll.print_list()

dll.prepend(100)
dll.prepend(200)
dll.print_list()

dll.pop_first()
dll.pop_first()
dll.print_list()

print(dll.get(2).value)

dll.set_value(2, 999)
dll.print_list()

dll.insert(2, 555)
dll.print_list()

dll.remove(2)
dll.print_list()
