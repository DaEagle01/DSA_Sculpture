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

    sum() {
        let node = this.head;
        let sum = 0;
        while (node) {
            sum += node.value;
            node = node.next;
        }
        return sum;
    }

    sumOfEvenNumbers() {
        let node = this.head;
        let sum = 0;
        while (node) {
            if (node.value % 2 === 0) {
                sum += node.value;
            }
            node = node.next;
        }
        return sum;
    }

    sumOfOddNumbers() {
        let node = this.head;
        let sum = 0;
        while (node) {
            if (node.value % 2 !== 0) {
                sum += node.value;
            }
            node = node.next;
        }
        return sum;
    }

    findValue(value) {
        let node = this.head;
        while (node) {
            if (node.value === value) return true;
            node = node.next;
        }
        return false;
    }

    firstAndLastOccurrenceIndex(value) {
        let index = 0;
        let occurrence = [0, 0];
        let node = this.head;
        while (node) {
            index++;
            if (value === node.value) {
                if (!occurrence[0]) {
                    occurrence = [index, index];
                } else {
                    occurrence[1] = index;
                }
            }
            node = node.next;
        };
        return occurrence;
    }

    covertToArray() {
        let array = [];
        let node = this.head;
        while (node) {
            array.push(node.value);
            node = node.next;
        }
        return array;
    }

    findMidValue() {
        let a = this.head;
        let b = this.head;
        while (b?.next) {
            a = a?.next;
            b = b?.next?.next;
        };
        return a.value;
    }

    doesCircleExist() {
        let a = this.head;
        let b = this.head;
        while (b) {
            a = a?.next;
            b = b?.next?.next;
            if (a === b) return true;
        };
        return false;
    }

    deleteSingleNode(node) {
        node = node.next;
        node.next = node.next.next;
    }
};

const list = new LinkedList(10);
list.prepend(5);
list.append(20);
list.append(30);
list.append(40);
list.appendAtAnyPosition(50, 6);
list.append(60);
list.append(70);
list.append(73);
list.append(80);
// list.delete(1);
// list.print();

// console.log(list.sum());
// console.log(list.findValue(30))
// console.log(list.firstAndLastOccurrenceIndex(50))
// console.log(list.sumOfEvenNumbers());
// console.log(list.sumOfOddNumbers());
const arr = list.covertToArray();
console.log(arr, arr.length);
console.log(list.doesCircleExist())