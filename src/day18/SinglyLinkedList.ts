
class Node<T> {
    public data: T;
    public next: T;
}

export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T>;
    public tail: Node<T>;

    constructor() {
    }

    prepend(item: T): void {

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