class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addNode(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.size++;
    }

    insertAfter(nextToData, data) {
        const newNode = new Node(data);
        let current = this.head;

        while (current !== null && current.data !== nextToData) {
            current = current.next;
        }

        if (current === null) {
            return; // Node with the value 'nextToData' not found
        }

        newNode.next = current.next;
        if (current.next !== null) {
            current.next.prev = newNode;
        } else {
            // If 'current' is the tail node
            this.tail = newNode;
        }
        current.next = newNode;
        newNode.prev = current;
        this.size++;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    printListReverse() {
        let current = this.tail;
        while (current !== null) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

const linked = new LinkedList();
linked.addNode(10);
linked.addNode(20);
linked.addNode(30);
linked.printList(); // Output: 10, 20, 30

linked.insertAfter(20, 25);
linked.printList(); // Output: 10, 20, 25, 30
