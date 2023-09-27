
export default class MinHeap {
    public length: number;
    private data: number[];
    
    constructor() {
        this.data = []
        this.length = 0
    }

    insert(value: number): void {
        this.data[this.length] = value; // add to the end
        this.heapifyUp(this.length); // heapify up

        this.length++ // increment length
    }

    delete(): number {
        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = []
            return out;
        }

        // let leaf = this.data[this.length - 1]
        // this.data[leaf] = this.data[0]
        // this.data[0] = leaf
        
        this.data[0] = this.data[this.length];
        this.heapifyDown(0)

        return out
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx)
        const rightIdx = this.rightChild(idx)

        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const leftValue = this.data[leftIdx]
        const rightValue = this.data[rightIdx]
        const value = this.data[idx]

        if (leftValue > rightValue && value > rightValue) {
            this.data[idx] = rightValue
            this.data[rightIdx] = leftValue
            this.heapifyDown(rightIdx);
        }

        if (rightValue > leftValue && value > leftValue) {
            this.data[idx] = leftValue
            this.data[leftIdx] = rightValue
            this.heapifyDown(leftIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx)
        const parentV = this.data[p]
        const v = this.data[idx]

        if (parentV > v) {
            this.data[idx] = parentV
            this.data[p] = v
            this.heapifyUp(p)
        }
    }

    // given an element's index, get its parent's index
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    // given parent index, get leftChild index
    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    // given parent index, get rightChild index
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }

}

