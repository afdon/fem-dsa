
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
}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}