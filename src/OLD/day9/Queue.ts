class Node<T> {
    public data: T
    public prev?: Node<T> | null
    
    constructor(d: T) {
        this.data = d
    }
}

export default class Queue<T> {
    public length: number = 0;
    private head?: Node<T> | null //private
    
    constructor() {
    }

    enqueue(item: T): void {
        let newNode = new Node<T>(item)
        if (!this.head) {
            this.head = newNode
        }
}
    deque(): T | undefined {

}
    peek(): T | undefined {

}

}
