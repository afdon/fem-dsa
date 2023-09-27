class Node<T> {
    public data: T
    public prev?: Node<T>

    constructor(d: T) {
        this.data = d
    }
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>


    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++
        let newNode = new Node<T>(item)
        if (!this.head) {
            this.head = newNode
            return
        }
        const oldHead = this.head
        this.head = newNode
        newNode.prev = oldHead
        return
    }
    pop(): T | undefined {
        if (!this.head) return undefined
        const oldHead = this.head
        if (oldHead.prev) {
            this.head = oldHead.prev
            oldHead.prev = undefined
        } else {
            this.head = undefined // code passes test without this, but we need to disconnect the old node from the rest of the stack
        }
        this.length--
        return oldHead.data
    }
    peek(): T | undefined {
        return this.head?.data
    }
}