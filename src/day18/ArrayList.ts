

export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    private data: T[];

    constructor() {
        this.length = 0;
        this.capacity = 0;
        this.data = [];
    }

    prepend(item: T): void {
        this.length++
        if (this.length > this.capacity) this.capacity++
        for (let i = this.length - 1; i >= 0; i--) {
            this.data[i + 1] = this.data[i]
        }
        this.data [0] = item;
}
    insertAt(item: T, idx: number): void {
        this.length++
        if (this.length > this.capacity) this.capacity++;
        for (let i = this.length - 1; i >= idx; i--) {
            this.data[i + 1] = this.data[i]
        }
        this.data[idx] = item;
}
    append(item: T): void {
        this.length++
        if (this.length > this.capacity) this.capacity++;
        this.data[this.data.length - 1] = item;
}
    remove(item: T): T | undefined {
        let removed

        for (let i = 0; i < this.length - 1; i++) {
            if (this.data[i] === item) {
                removed = this.data[i]
                this.data[i] = this.data[i + 1]
                this.length--
                return
            }
        }
        return removed
}
    get(idx: number): T | undefined {
        if (idx > this.length) return undefined
        return this.data[idx]
}
    removeAt(idx: number): T | undefined {
        if (idx > this.length) return undefined
        let removed = this.data[idx]
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--
        return removed
}
}