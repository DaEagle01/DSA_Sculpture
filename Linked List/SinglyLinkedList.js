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

    convertToArray() {
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
        return a?.value;
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

    mergeTwoSortedLists(list1, list2) {
        let dummy = { value: -1, next: null };
        let c = dummy;
        let a = list1.head;
        let b = list2.head;
        while (a && b) {
            if (a.value > b.value) {
                c.next = b;
                b = b.next;
            } else {
                c.next = a;
                a = a.next;
            }
            c = c.next;
        }
        c.next = a || b;
        return dummy.next;
    }

    removeNthFromEnd(head, n) {
        if (head.next === null) return null;
        let count = 0;
        let count2 = 0;
        let node = head;
        while (node) {
            count++;
            node = node.next;
        }
        node = head;
        if (count === n) {
            return head.next;
        }
        let prevPosition = count - n;
        while (node) {
            count2++;
            if (count2 === prevPosition) {
                node.next = node.next.next;
                break;
            }
            node = node.next;
        }
        return head
    }

    mergeNodes(head) {
        let dummy = new Node(-1);
        let node = dummy;
        let count = 0;
        while (head) {
            if (head.value === 0) {
                if (count !== 0) {
                    node.next = new Node(count);
                    node = node.next;
                }
                count = 0;
            } else {
                count = count + head.value;
            }
            head = head.next;
        }
        return dummy.next;
    }

    deleteDuplicates(head) {
        let node = head;
        while (node && node.next) {
            if (node.value === node.next?.value) {
                node.next = node.next?.next;
            } else {
                node = node.next;
            }
        }
        return head;
    }

    deleteNode(node) {
        node.value = node.next.value;
        node.next = node.next.next;
    }

    deleteMiddle(head) {
        if (!head.next) return null;
        let a = head;
        if (!a?.next?.next) {
            a.next = null;
            return head;
        }
        let b = head;
        while (b?.next) {
            a = a.next;
            b = b.next.next;
        }
        a.value = a?.next?.value;
        a.next = a?.next?.next;
        return head;
    }

    nextLargerNodes(head) {

    }
};

const list = new LinkedList(2);
list.append(1);
list.append(5);

// list.delete(1);
// list.print();
// console.log(list.sum());
// console.log(list.findValue(30))
// console.log(list.firstAndLastOccurrenceIndex(50))
// console.log(list.sumOfEvenNumbers());
// console.log(list.sumOfOddNumbers());
// console.log(list.doesCircleExist()) 
// const list4 = list.mergeTwoSortedLists(list2, list3);
// const list2 = list.removeNthFromEnd(list.head, 2); 
// const mergeNodes = list.mergeNodes(list.head);  
// const uniqueList = list.deleteDuplicates(list.head);
// let listWithoutMid = list.deleteMiddle(list.head); 
console.log('down', list.convertToArray().join(" --> "));
console.log('down', list.convertToArray())