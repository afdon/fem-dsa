class Node<T> {
    public data: T
    public prev: Node<T> | null
    public next: Node<T> | null

    constructor(d: T) {
        this.data = d
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head: Node<T> | null
    public tail: Node<T> | null

    constructor() { }

    // get tail() {
    //     if (this.length < 2) { return this._head }
    //     return this._tail //|| this.head 
    // }
    // set tail(value: Node<T> | null) {
    //     this._tail = value
    // }
    // get head() {
    //     return this._head //|| this.tail 
    // }
    // set head(value: Node<T> | null) {
    //     this._head = value
    //     if (this.length < 2) { this._tail = this._head }
    // }
    // get length() {
    //     return this._length //|| this.tail 
    // }
    // set length(value: number) {
    //     this._length = value
    // }

    prepend(item: T): void {
        if (!this.head) {
            this.head = new Node(item)
        } else {
            const newHead = new Node(item)
            const oldHead = this.head

            this.head = newHead
            oldHead.prev = newHead 
            newHead.next = oldHead 
        }
        this.length++
    }
    insertAt(item: T, idx: number): void {
        if (idx + 1 > this.length) return undefined // or null?

        let counter = 0
        let newNode = new Node(item)
        if (!this.head) {
            this.head = newNode
        }
        let curNode = this.head as Node<T> as any
        while (counter < idx) {
            curNode = curNode?.next
            counter++
        }
        // curNode.prev.next = newNode
        const rightNode = curNode // right of newNode
        const leftNode = curNode.prev // left of newNode

        if (rightNode && leftNode) {
            rightNode.prev = newNode
            newNode.next = rightNode
            leftNode.next = newNode
            newNode.prev = leftNode
        }
        if (rightNode && !leftNode) {
            rightNode.prev = newNode
            newNode.next = rightNode
        }
        if (!rightNode && leftNode) {
            leftNode.next = newNode
            newNode.prev = leftNode
        }
        // if (!rightNode && !leftNode) { nothing more to do }
        
        this.length++
    }
    append(item: T): void {
        const newNode = new Node(item)

        if (!this.tail) {
            this.tail = newNode
        } else {
            const oldTail = this.tail
            const newTail = newNode
            
            this.tail = newTail
            newTail.prev = oldTail
            oldTail.next = newTail
        }
        this.length++
    }
    remove(item: T): T | undefined {
        let counter = 0
        // if (!this.head) return undefined
        if (this.length === 0) return undefined // added this
        let curNode = this.head as any
        while (curNode.data !== item) {
            curNode = curNode?.next
            counter++
        }
        // curNode is the node we're removing
        const rightNode = curNode.prev
        const leftNode = curNode.next

        curNode.prev = null // or undefined????
        curNode.next = null // or undefined????

        if (rightNode && leftNode) {
            rightNode.prev = leftNode
            leftNode.next = rightNode
        }
        if (rightNode && !leftNode) {
            rightNode.prev = null // or undefined????
        }
        if (!rightNode && leftNode) {
            leftNode.next = null
        }
        // if (!rightNode && !leftNode) { nothing to do -- curNode's prev/next already removed. }

        if (curNode) { this.length-- } // added this. decrement length only if we removed something.
        return curNode.data
    }
    get(idx: number): T | undefined {
        let counter = 0
        // if (!this.head) return undefined
        if (this.length === 0 || this.length < idx + 1) return undefined
        let curNode = this.head as any
        while (counter < idx) {
            curNode = curNode?.next
            counter++
        }
        return curNode.data
    }
    removeAt(idx: number): T | undefined {
        let counter = 0
        // if (!this.head) return undefined
        if (this.length === 0) return undefined // added this
        let curNode = this.head as any
        while (counter < idx) {
            curNode = curNode.next
            counter++
        }
        // curNode is the node to remove
        const rightNode = curNode.prev 
        const leftNode = curNode.next

        // remove curNode's existing .prev and .next
        curNode.prev = null // or undefined????
        curNode.next = null // or undefined????

        // if rightNode & leftNode, point rightNode.prev to leftNode and leftNode's next to rightNode
        // if rightNode & !leftNode, remove rightNode's prev (and we already removed curNode's next)
        // if !rightNode & leftNode, remove leftNode.next
        // if !rightNode & !leftNode, nothing more to do

        if (rightNode && leftNode) {
            rightNode.prev = leftNode
            leftNode.next = rightNode
        }
        if (rightNode && !leftNode) {
            rightNode.prev = null // or undefined????
        }
        if (!rightNode && leftNode) {
            leftNode.next = null
        }
        // if (!rightNode && !leftNode) { nothing to do -- curNode's prev/next already removed. }

        if (curNode) { this.length-- } // added this. decrement length only if we removed something.
        return curNode.data
    }
}