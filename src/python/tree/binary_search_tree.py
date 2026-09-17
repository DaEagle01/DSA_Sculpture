class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.right = None
        self.left = None

class BinarySearchTree:
    def __init__(self) -> None:
        self.root = None

    def insert(self, value) -> bool:
        node = Node(value)
        if self.root is None:
            self.root = node
            return True
        temp = self.root
        while True:
            if temp.value == node.value:
                return False
            elif node.value < temp.value:
                if temp.left is None:
                    temp.left = node
                    return True
                temp = temp.left
            else:
                if temp.right is None:
                    temp.right = node
                    return True
                temp = temp.right

    def contains(self, value) -> bool:
        temp = self.root
        while temp is not None:
            if temp.value == value:
                return True
            elif temp.value > value:
                temp = temp.left
            else:
                temp = temp.right
        return False
    
    def display(self) -> None:
        self._display(self.root)

    def _display(self, node, indent="", pointer="") -> None:
        if node is None:
            return
        self._display(node.right, indent + "     ", ",-- ")
        print(indent + pointer + str(node.value))
        self._display(node.left, indent + "     ", "`-- ")

bst = BinarySearchTree()
bst.insert(23)
bst.insert(12)
bst.insert(30)
bst.insert(9)
bst.insert(17)
bst.insert(27)
bst.insert(38)
bst.insert(5)
bst.insert(11)
bst.insert(15)
bst.insert(20)
bst.insert(25)
bst.insert(29)
bst.insert(34)
bst.insert(42)
bst.insert(2)
bst.insert(7)
bst.insert(19)
bst.insert(50)
bst.display()
print(bst.contains(44))
print(bst.contains(20))
print(bst.contains(0))