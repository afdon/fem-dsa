class Node<T> {

    public data: T
    public next: Node<T> | null

    constructor(data: T) {
        this.data = data
    }
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T>

    constructor() {
        this.head = new Node(0 as any)
        this.length = 0
    }

    prepend(item: T): void {
        const newHead = new Node(item)
        newHead.next = this.head
        this.head = newHead
        this.length++
    }
    insertAt(item: T, idx: number): void {
        let curNode = this.head
        let counter = 0
        while (counter < idx) {
            if (!curNode.next) return
            curNode = curNode.next
            counter++
        }
        const newNode = new Node(item)
        if (curNode.next && curNode.next.next) {
            newNode.next = curNode.next?.next
            curNode.next = newNode
        } else {
            console.error("insert index longer than list length")
        }
        this.length++
    }
    append(item: T): void {
        let curNode = this.head
        if (!this.head) {
            this.head = new Node(item)
        } else {
            while (curNode.next) {
                curNode = curNode.next
            }
            let newNode = new Node(item)
            curNode.next = newNode
        }
        this.length++
    }
    remove(item: T): T | undefined {
        let curNode = this.head
        let counter = 0
        while (curNode != null) {
            if (curNode.data === item)
            curNode = curNode.next
        }
        if (!curNode.next) return
        curNode.next = curNode.next?.next as any
        this.length--
        return curNode.data
    }
    get(idx: number): T | undefined {
        let curNode = this.head
        let counter = 0
        while (counter != idx) {
            if (!curNode.next) return
            curNode = curNode.next
            counter++
        }
        return curNode.data
    }
    removeAt(idx: number): T | undefined {
        let curNode = this.head
        let counter = 0
        while (counter != idx) {
            if (!curNode.next) return
            curNode = curNode.next
            counter++
        }
        curNode.next = curNode.next?.next as any
        this.length--
        return curNode.data
    }
}