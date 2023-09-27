// class Thing<T> {
//     data: T[]
//     index: number

//     constructor(d: T) {
//         this.data = d[]
//     }
// }

// export default class ArrayList<T> {
//     public length: number;
//     public capacity: number;

//     constructor() {
//         this.length = 0
//         this.capacity = this.length
//     }

export default class ArrayList<T> {
    private data: T[];
    public length: number;
    public capacity: number;

    constructor() {
        this.data = [];
        this.length = 0;
        this.capacity = 0;
    }

    // private lengthen(): void {
    //     this.capacity += this.capacity
    //     if (this.capacity === 0) {
    //         this.capacity = 1
    //     }
    //     this.data = [...this.data]
    // }

    prepend(item: T): void {
        this.length++
        if (this.length > this.capacity) {
            this.capacity++
        }
        for (let i = this.length - 1; i >= 0; i--) {
            this.data[i + 1] = this.data[i]
        }
        this.data[0] = item
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) return
        this.length++
        while (idx > this.capacity) {
            this.capacity++
        }
        for (let i = this.length - 1; i > idx; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[idx] = item;
    }
    append(item: T): void {
        this.length++
        if (this.length > this.capacity) {
            this.capacity++
        }
        this.data[this.length - 1] = item
    }
    remove(item: T): T | undefined {
        let i = 0
        while (this.data[i] !== item && i < this.length) {
            i++
        }
        const removed = this.data[i]
        // let counter = 0
        for (i; i <= this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        removed ? this.length-- : undefined
        return removed
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx > this.length - 1) return undefined
        return this.data[idx]
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined
        const removed = this.data[idx]
        for (let i = idx + 1; i <= this.length; i++) {
            this.data[i - 1] = this.data[i];
        }
        this.length--
        return removed
    }

}