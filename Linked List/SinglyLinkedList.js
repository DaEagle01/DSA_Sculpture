class Node {
    constructor(data, next = null) {
        this.value = data;
        this.next = next;
    }
};

class LinkedList {
    constructor(data) {
        let node = new Node(data);
        this.head = this.tail = node;
        this.length = 1;
    }

    append(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    appendAtAnyPosition(value, position) {
        if (position === 1) {
            this.prepend(value);
            return;
        } else if (position === this.length + 1) {
            this.append(value);
            return;
        }
        let node = new Node(value);
        let prevNode = this.findNode(position - 1);
        node.next = prevNode.next;
        prevNode.next = node;
        this.length++;
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

    print() {
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }

    update(value, position) {
        let node = this.findNode(position);
        node.value = value;
    }

    delete(position) {
        if (position === 1) {
            let currentNode = this.findNode(position);
            this.head = currentNode.next;
            currentNode.next = null;
        } else if (position === this.length) {
            let prevNode = this.findNode(position - 1);
            prevNode.next = null;
        } else if (position > 1 && position < this.length) {
            let prevNode = this.findNode(position - 1);
            prevNode.next = prevNode.next.next;
        } else {
            throw new Error('Invalid position');
        }
        this.length--;
    }

};

const list = new LinkedList(10);
list.prepend(5);
list.append(20);
list.append(30);
list.append(40);
list.appendAtAnyPosition(50, 6);
list.delete(1);
list.print();
console.log(list);