class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None

class Stack:
    def __init__(self, value) -> None:
        node = Node(value)
        self.top = node
        self.height = 1

    def print_stack(self):
        print('TOP')
        temp = self.top
        while temp is not None:
            print(f'| {temp.value} |')
            temp = temp.next
        print(f'Height: {self.height}')

    def push(self, value):
        node = Node(value)
        if self.height == 0:
            self.top = node
        else:
            node.next = self.top
            self.top = node
        self.height += 1
        return True

    def pop(self):
        if self.height == 0:
            return None
        else:
            temp = self.top
            self.top = temp.next
            temp.next = None
        self.height -= 1
        return temp.value

stack = Stack(5)
stack.push(3)
stack.push(8)
stack.push(8)
stack.push(2)
stack.push(1)
stack.push(7)
stack.print_stack()
stack.pop()
stack.pop()
stack.pop()
stack.print_stack()
