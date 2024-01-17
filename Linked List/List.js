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

    }
};

const list = new LinkedList(10);
list.append(20);
list.prepend(5);
list.append(30);
list.appendAtAnyPosition(50, 3);
console.log(list);