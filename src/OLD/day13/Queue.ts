class Node<T> {
    public data: T
    public next?: Node<T>

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

    // deque(): T | undefined {
    //     if (!this.head) return undefined
    //     let removed = this.head
    //     if (removed.next) {
    //         this.head = removed.next
    //         removed.next = undefined
    //     } else {
    //         this.head = undefined
    //         removed.next = undefined
    //     }
    //     this.length--
    //     return removed?.data
    // }

    deque(): T | undefined {
        if (!this.head) return undefined
        let removed = this.head
        this.head = removed.next
        removed.next = undefined // for completion's sake. will pass test without

        this.length--
        return removed.data
    }
    
    peek(): T | undefined {
        return this.head?.data
    }

}
