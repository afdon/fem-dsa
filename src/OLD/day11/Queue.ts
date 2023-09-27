class Node<T> {
    public data: T
    public next?: Node<T> | null

    constructor(d: T) {
        this.data = d
    }
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    enqueue(item: T): void {
        let newNode = new Node<T>(item)
        if (!this.head) {
            this.head = this.tail = newNode
        }
        let curNode = this.head
        if (curNode.next) {
            curNode = curNode.next
        }
        this.tail = curNode
        let newTail = newNode
        curNode.next = newTail
        newTail = this.tail

        this.length++
        return
    }
    deque(): T | undefined {
        if (!this.head) return undefined
        let removed = this.head
        if (removed.next) {
            this.head = removed.next // if removed node has a next, make that the new head
        } else {
            removed.next = undefined // else there's no head and no next
        }
        this.length--
        return removed?.data
    }
    peek(): T | undefined {
        return this.head?.data
    }

}
