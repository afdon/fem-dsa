class Node<T> {
    public data: T
    public next?: Node<T> | null

    constructor(d: T) {
        this.data = d
    }
}

export default class Queue<T> {
    public length: number = 0;
    private head?: Node<T> | null
    private tail?: Node<T> | null

    constructor() {
    }

    enqueue(item: T): void {
        let newNode = new Node<T>(item)
        if (!this.head) {
            this.head = newNode
        }
        const oldHead = this.head // save this.head in a const
        const newHead = newNode // newHead is the new node
        this.head = newHead // this.head is now newHead
        newHead.next = oldHead // newHead's next is oldHead

        this.length++
    }
    deque(): T | undefined {
        if (!this.head) return undefined
        if (this.head) { // if there is a head (list has at least one element)
            const oldHead = this.head
            if (this.head.next) { // if there is a head.next (list has at least two elements)
                this.head = this.head.next
            }
            this.length--
        }
        return undefined
    }
    peek(): T | undefined {

    }

}
