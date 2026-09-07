from typing import Optional

class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next: Optional['Node'] = None

class LinkedList:
    def __init__(self, value) -> None:
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def append(self, value):
        new_node = Node(value)
        if self.tail is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return True

    def prepend(self, value):
        new_node = Node(value)
        if(self.head is None):
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        self.length += 1
        return True

    def insert(self, index, value):
        # 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
        if index < 0 or index > self.length:
            return False
        elif index == 0:
            return self.prepend(value)
        elif index == self.length:
            return self.append(value)
        else:
            new_node = Node(value)
            temp = self.get_node(index - 1)
            assert temp is not None
            new_node.next = temp.next
            temp.next = new_node
            self.length += 1
            return True

    def pop(self):
        if self.head is None:
            return None
        elif self.head == self.tail:
            popped_value = self.head.value
            self.head = None
            self.tail = None
            self.length -= 1
            return popped_value
        else:
            temp = self.head
            prev = self.head
            while temp.next is not None:
                prev = temp
                temp = temp.next
            self.tail = prev
            self.tail.next = None
            self.length -= 1
            return temp.value

    def pop_first(self):
        if self.head is None:
            return None
        elif self.head == self.tail:
            temp = self.head
            self.head = None
            self.tail = None
            self.length -= 1
            return temp.value
        else:
            temp = self.head
            self.head = temp.next
            temp.next = None
            self.length -= 1
            return temp.value

    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next
        print(f'Total count: {self.length}')

    def get_node(self, index):
        if index < 0 or index >= self.length:
            return None
        else:
            temp = self.head
            for _ in range(index):
                assert temp is not None
                temp = temp.next
            return temp

    def get(self, index):
        node = self.get_node(index)
        if node is None:
            return None
        else:
            return node.value

    def set_value(self, index, value):
        node = self.get_node(index)
        if node is None:
            return False
        else:
            node.value = value
            return True

    def remove(self, index):
        if index < 0 or index >= self.length:
            return False
        if index == 0:
            return self.pop_first()
        prev = self.head
        for _ in range(index - 1):
            assert prev is not None
            prev = prev.next
        assert prev is not None
        temp = prev.next
        assert temp is not None
        prev.next = temp.next
        if temp == self.tail:
            self.tail = prev
        self.length -= 1
        return True

    def reverse(self):
        temp = self.head
        self.head = self.tail
        self.tail = temp
        after = temp.next
        before = None

        for _ in range(self.length):
            after = temp.next
            temp.next = before
            before = temp
            temp = after

        return True

# 10 -> 20 -> 30 -> 40
my_linked_list = LinkedList(10)
my_linked_list.append(20)
my_linked_list.append(30)
my_linked_list.append(40)
print('-------------------------------------')
# my_linked_list.print_list()
my_linked_list.reverse()
print('-------------------------------------')
my_linked_list.print_list()
