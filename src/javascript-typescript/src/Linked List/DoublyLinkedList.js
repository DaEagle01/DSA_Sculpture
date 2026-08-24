class Node {
    constructor(data, prev = null, next = null) {
        this.value = data;
        this.prev = prev;
        this.next = next;
    }
};

class DoublyLinkedList {
    constructor(data) {
        let node = new Node(data);
        this.head = this.tail = node;
        this.length = 1;
    }

    append(value) {
        let node = new Node(value);
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
    }

    insertAtAnyPosition(value, position) {
        if (position === 1) {
            this.prepend(value)
        }
        else if (position === this.length + 1) {
            this.append(value)
        }
        else {
            let node = new Node(value);
            let prevNode = this.findNode(position - 1);
            node.next = prevNode.next;
            node.prev = prevNode;
            prevNode.next = node;
            prevNode.next.prev = node;
            this.length++;
        }
    }

    findNode(position) {
        let node = this.head;
        let count = 0;
        while (true) {
            count++;
            if (count === position) break;
            node = node.next;
        }
        return node;
    }

    update(value, position) {
        let node = this.findNode(position);
        node.value = value;
    }

    delete(position) {
        if (position === 1) {
            let currentNode = this.head;
            this.head = currentNode.next;
            this.head.prev = null;
            currentNode.next = null;
        } else if (position === this.length) {
            let tail = this.tail;
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        } else if (position > 1 && position < this.length) {
            let currentNode = this.findNode(position);
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
            currentNode.next = null;
            currentNode.prev = null;
        } else {
            throw new Error('Invalid position');
        }
        this.length--;
    }

    printFromStart() {
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }

    printFromEnd() {
        let node = this.tail;
        while (node) {
            console.log(node.value);
            node = node.prev;
        }
    }
};

const list = new DoublyLinkedList(20);
list.prepend(10);
list.append(30);
list.append(40);
list.append(50);
list.insertAtAnyPosition(60, 6);
// list.update(255, 5);
list.printFromStart();
list.delete(5);
console.log(list);
list.printFromStart();
// list.printFromEnd();