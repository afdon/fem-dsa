// does not pass

class Node<T> {
    data: T
    prev?: Node<T>;
    next?: Node<T>

    constructor(d: T) {
        this.data = d
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
        this.tail = undefined
    }

    prepend(item: T): void {
        this.length++
        let newNode = new Node(item)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }
        let oldHead = this.head
        this.head = newNode
        newNode.next = oldHead
        oldHead.prev = newNode
    }
    insertAt(item: T, idx: number): void {
        if (0 > idx || idx >= this.length) return

        let newNode = new Node(item)
        if (!this.head) {
            this.head = this.tail = newNode
        }
        if (idx === 0) {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        if (idx === this.length - 1) {
            newNode.prev = this.tail
            if (this.tail) { this.tail.next = newNode
            this.tail = newNode
            return
            }
        }
        let current = this.head
        let counter = 0
        while (current.next && counter < idx) {
            current = current.next
            counter++
        }
        newNode.prev = current
        newNode.next = current.next
        if (current?.prev?.next) current.prev.next = newNode
        current.next = newNode
        this.length++
        return
    }
    append(item: T): void {
        this.length++
        let newNode = new Node(item)
        if (!this.head) {
            this.head = this.tail = newNode
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
        newNode.prev = current
        return
    }
    remove(item: T): T | undefined {
        let current = this.head
        if (!current) return undefined
        while (current?.data != item) {
            current = current?.next
        }
        this.length--
        return current.data
    }
    get(idx: number): T | undefined {
        let current = this.head
        for (let i = 0; i < this.length - 1 && current; i++) {
            current = current.next
        }
        return current?.data
    }
    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0 || !this.head) {
            return undefined
        }
        let counter = 0
        let current = this.head
        while (counter < idx) {
            if (!current.next) return
            current = current.next
            counter++
        }
        if (current.prev) current.prev.next = current?.next
        if (current.next) current.next.prev = current?.prev
        this.length--
        return current?.data
    }
}