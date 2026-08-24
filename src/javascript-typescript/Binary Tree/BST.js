class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
    }

    insert(value) {
        let currentNode = this.root;
        while (true) {
            if (currentNode.value < value) {
                if (!currentNode.right) {
                    let node = new Node(value);
                    currentNode.right = node;
                    break;
                }
                currentNode = currentNode.right;
            }
            else {
                if (!currentNode.left) {
                    let node = new Node(value);
                    currentNode.left = node;
                    break;
                }
                currentNode = currentNode.left;
            }
        }
    }

    search(target) {
        let node = this.root;
        while (true) {
            if (node.value === target) {
                return 'value found';
            }
            else if (node.value < target) {
                if (!node.right) {
                    return 'value not found';
                }
                node = node.right;
            }
            else {
                if (!node.left) {
                    return 'value not found';
                }
                node = node.left;
            }
        }
    }
}

let bst = new BST(10);
bst.insert(25)
bst.insert(5)
bst.insert(8)
bst.insert(18)
bst.insert(45)
bst.insert(25)
console.log(bst.search(25))
console.log(bst)