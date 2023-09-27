// A Min-Heap is a complete binary tree in which the value in each internal node is smaller than or equal to the values in the children of that node. 
// Mapping the elements of a heap into an array is trivial: if a node is stored an index k, then its left child is stored at index 2k + 1 and its right child at index 2k + 2.

export default class MinHeap {
    public length: number;
    public data: number[];

    constructor() {
        this.data = []
        this.length = 0
    }

    insert(value: number): void {
        this.data[this.length] = value
        this.length++
        let currentIdx = this.length - 1

        this.heapifyUp()
    }
    
    delete(): number | void {        
        console.log('D:', this.data)
        if (this.data.length === 0) return

        let removed = this.data[0]
        let tail = this.data[this.data.length - 1]
        this.data[0] = tail
        this.data.length--

        this.heapifyDown()
        return removed
    }

    heapifyUp(): void {
        let currentIdx = this.length - 1
        let current = this.data[currentIdx]
        let parentIdx = this.getParentIdx(currentIdx)
        let parent = this.data[parentIdx]

        while (current < parent) {
            this.data[parentIdx] = current // this.data[currentIdx]
            current = parent
            parentIdx = this.getParentIdx(currentIdx)
            parent = this.data[parentIdx]
        }
    }

    heapifyDown(): void {
        if (this.data.length === 0) return
        let node = this.data[0]
    }

    getParentIdx(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    getLeftIdx(idx: number): number {
        return idx * 2 + 1;
    }

    getRightIdx(idx: number): number {
        return idx * 2 + 2;
    }
}

