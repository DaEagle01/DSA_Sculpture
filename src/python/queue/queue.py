class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None

class Queue:
    def __init__(self, value) -> None:
        node = Node(value)
        self.first = node
        self.last = node
        self.length = 1

    def print_queue(self):
        parts = []
        temp = self.first
        while temp is not None:
            parts.append(str(temp.value))
            temp = temp.next
        print(' -> '.join(parts))

    def enqueue(self, value):
        node = Node(value)
        if self.length == 0:
            self.first = node
            self.last = node
        else:
            self.last.next = node
            self.last = node
        self.length += 1
        return node
    
    def dequeue(self):
        if self.length == 0:
            return None
        temp = self.first
        if self.length == 1:
            self.first = None
            self.last = None
        else:
            self.first = temp.next
        temp.next = None
        self.length -= 1
        return temp.value

queue = Queue(3)
queue.enqueue(1)
queue.enqueue(4)
queue.enqueue(23)
queue.enqueue(13)
queue.enqueue(44)
queue.print_queue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.print_queue()
