class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addnode(data) {
        const newnode = new Node(data);
        if (this.head == null) {
            this.head = newnode;
            this.tail = newnode;
            this.size++;
            return;
        }

        this.tail.next = newnode;
        this.tail = newnode;
        this.size++;
    }

    removeDuplicate() {
        let current = this.head;
        while (current != null) {
            let next = current.next;
            while (next != null && next.data == current.data) {
                next = next.next;
            }

            current.next = next;
            if (next == this.tail) {
                this.tail = current;
            }
            current = next;
        }
    }

    inserAfter(nextTo, data) {
        const NewNode = new Node(data);
        let current = this.head;
        while (current != null && current.data != nextTo) {
            current = current.next;
        }
        if (current == null) {
            return;
        }
        if (current == this.tail) {
            this.tail.next = NewNode;
            this.tail = NewNode;
            return;
        }
        NewNode.next = current.next;
        current.next = NewNode;
    }

    remove(data) {
        let current = this.head;
        let prev = null;

        if (current != null && current.data == data) {
            this.head = current.next;
            return;
        }
        while (current != null && current.data != data) {
            prev = current;
            current = current.next;
        }
        if (current == null) {
            return;
        }
        if (current.next == null) {
            current = prev;
            current.next = null;
        }
        prev.next = current.next;
    }

    printlist() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let linked = new linkedlist();
linked.addnode(10);
linked.addnode(20);
linked.addnode(30);
linked.addnode(30);
linked.inserAfter(10, 50);
linked.removeDuplicate();
linked.printlist();
