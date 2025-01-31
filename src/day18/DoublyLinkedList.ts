
class Node<T> {
    public data: T;
    public next?: Node<T>;
    public prev?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head: Node<T>;
    public tail?: Node<T>;

    constructor() {
    }

    prepend(item: T): void {
        let newNode = new Node<T>
        newNode.data = item
        if (!this.head) this.head = newNode
        let oldHead = this.head
        this.head = newNode
        newNode.next = oldHead
        oldHead.prev = newNode
        length++
}
    insertAt(item: T, idx: number): void {
        let newNode = new Node<T>
        newNode.data = item
        let current = this.head
        for (let i = 0; i < idx; i++) {
            if (current.next) current = current.next
        }
        // WIP - take care of the case where it is undefined.
        if (current.next.next)
        let oldNext = current.next.next
        current.next = newNode
        newNode.prev = current
}
    append(item: T): void {
        let newNode = new Node<T>
        newNode.data = item
        if (!this.head) this.head = newNode
        let current = this.head
        for (let i = 0; i < this.length - 1; i++) {
            if (current.next) current = current.next
        }
        current.next = newNode
        newNode.prev = current
        this.length++
}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}

