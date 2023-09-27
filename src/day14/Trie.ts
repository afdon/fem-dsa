class Root {
    public children?: Letter[]
}

class Letter {
    public value: string
    public child?: Letter
    public isWord: boolean
}

export default class Trie {
    public root: Root
    // public children: Letter[]

    constructor() {
        this.root = new Root()
        this.root.children = new Letter[]
    }

    insert(item: string): void {
        if (!this.root.children) return
        let current

        if (current.value === item.charAt(1)) {
            
        }

    }
    delete(item: string): void {
        // use recursion

    }
    find(partial: string): string[] {

        if (!this.root.children) return []

        for (let i = 0; i < this.root.children.length; i++) { // look at each of root's children
            for (let j = 0; j < partial.length; j++) { // look at letter in partial
                if (Letter.value === partial.charAt(j)) { // if they match
                    let current = Letter
                    if (current.child 
                }
            }
        }

        console.log(partial)
        let string = ["hi", "sebastian"]
        return string
    }
}