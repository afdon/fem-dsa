class Node<T> {
    public data: T
    public next: Node<T> | null
}

export default class SinglyLinkedList<T> {
    public length: number = 0;
    public head: Node<T> | null

    constructor() {
        
    }

    prepend(item: T): void {
        const newNode = new Node<T>()
        newNode.data = item
        if (this.head) {
            newNode.next = this.head
        }
        this.head = newNode // reassign head
        this.length++
    }
    insertAt(item: T, idx: number): void {
        const newNode = new Node<T>()
        newNode.data = item
        let counter = 0
        let curNode = this.head
        while (counter < idx) {
            if (!curNode?.next) return
            curNode = curNode.next
            counter++
        }
        if (!curNode) return
        const temp = curNode.next
        curNode.next = newNode
        newNode.next = temp
        this.length++
    }
    append(item: T): void {
        const newNode = new Node<T>()
        newNode.data = item
        if (!this.head) {
            this.head = newNode
        } else {
            let curNode = this.head
            while (curNode.next) {
                curNode = curNode.next
            }
            curNode.next = newNode
        }
        this.length++
    }
    remove(item: T): T | undefined {
        // console.log(this)
        let prevNode
        let curNode = this.head
        while (curNode?.data !== item) {
            if (!curNode?.next) return
            prevNode = curNode
            curNode = curNode.next
        }
        if (!prevNode) {
            this.head = curNode?.next ? curNode.next : null
        } else {
            prevNode.next = prevNode.next?.next ? prevNode.next.next : null
        }
        this.length--
        return curNode.data
    }
    get(idx: number): T | undefined {
        let counter = 0
        let curNode = this.head
        while (counter < idx) {
            if (!curNode?.next) return
            curNode = curNode.next
            counter++
        }
        return curNode?.data
    }
    removeAt(idx: number): T | undefined {
        console.log(this)
        let counter = 0
        let curNode = this.head
        let prevNode
        while (counter < idx) {
            if (!curNode?.next) return
            prevNode = curNode
            curNode = curNode.next
            counter++
        }
        if (!prevNode) {
            this.head = curNode?.next ? curNode.next : null
        } else {
            prevNode.next = prevNode.next?.next ? prevNode.next.next : null
        }
        this.length--
        return curNode?.data
    }
}