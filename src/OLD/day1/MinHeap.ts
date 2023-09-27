
class Node<N> {
    public data: number
    public parent?: Node<N>;
    public left?: Node<N>;
    public right?: Node<N>;
}

export default class MinHeap<N> {
    public length: number;
    private root?: Node<N>;
    private leaf?: Node<N>;

    constructor() {
        this.length = 0;
    }

    insert(value: number): void {
        let newNode = new Node<N>
        newNode.data = value

        if (!this.leaf) {
            this.leaf = this.root = newNode
        }

        let oldLeaf = this.leaf
        newNode.parent = oldLeaf
        oldLeaf.left = this.leaf = newNode

        let current = newNode
        while (current.parent) {
            if (current.data < current.parent.data) {
                let currentData = current.data
                current.data = current.parent.data
                current.parent.data = currentData
                current = current.parent
            }
        }
        this.root = current
        this.length++
    }
    delete(): number | undefined {
        if (!this.root) return undefined;

        let deleted = this.root

        if (this.root = this.leaf) {
            this.root = undefined
            this.leaf = undefined
        }

        let oldLeaf = this.leaf

        if (oldLeaf.parent) {
            oldLeaf.parent.left === oldLeaf 
            ? oldLeaf.parent.left === undefined 
            : oldLeaf.parent.right === undefined
            this.leaf = oldLeaf.parent
        }
        this.leaf = this.root


        this.length--
        return deleted
    }
}