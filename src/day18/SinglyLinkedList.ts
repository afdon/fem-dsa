
class Node<T> {
    public data: T;
    public next: Node<T> | null
}

export default class SinglyLinkedList<T> {
    public length: number; // why does it need a public length defined?
    public head: Node<T>;
    public tail?: Node<T>; // needed?

    constructor() {
    }

    prepend(item: T): void {
        this.length++
        let newNode = new Node<T>
        newNode.data = item
        if (this.head) newNode.next = this.head // if there is a head, reassign it to newNode's next
        this.head = newNode // reassign this.head to newNode
}
    insertAt(item: T, idx: number): void {
        let newNode = new Node<T>
        newNode.data = item
        if (idx > this.length - 1) return 
        let current = this.head
        for (let i = 0; i < idx; i++) {
            if (current.next) current = current.next
        } // now i is 1 less than idx
        let oldNodeAtIdx = current.next
        current.next = newNode
        newNode.next = oldNodeAtIdx
        this.length++
}
    append(item: T): void {
        this.length++
        let newNode = new Node<T>
        newNode.data = item
        if (!this.head) { this.head = newNode; return }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
}
    remove(item: T): T | undefined {
        let removed = item
        if (!this.head) return undefined
        let current = this.head
        if (current.data === item && current.next) { 
            this.head = current.next 
            return removed 
        }
        let i = 0
        while (current.next && current.next.data !== item) {
            if (i > this.length - 1) return undefined
            current.next = current.next.next
            i++
        }
        // now, current.next is the item to remove
        if (current.next) current.next = current.next.next
        return removed
}
    get(idx: number): T | undefined {
        if (!this.head) return undefined
        if (idx > this.length - 1) return undefined
        let current = this.head
        for (let i = 0; i < idx; i++) {
            if (current.next) current = current.next
        }
        // now, current.next is the node at idx
        if (current.next) return current.next.data // add if condition to appease TS
}
    removeAt(idx: number): T | undefined {
        if (!this.head) return undefined
        if (idx > this.length) return undefined
        // wip

        this.length--
}
}
