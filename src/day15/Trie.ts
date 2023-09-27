class TrieNode {
    // public children: TrieNode[]
    public children: { [key: string]: TrieNode }
    public isEndOfWord: boolean
    public value: string
    // public value: string | null

    constructor(v?: string) {
        this.value = v || '';
        // this.children = [];
        this.children = {};
        this.isEndOfWord = false;
        // this.value = null;
    }
}

export default class Trie {
    public root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(item: string): void {
        const chars = item.split('');

        let curNode = this.root;
        for (let i = 0; i < chars.length; i++) {
            const el = chars[i];

            const curChar = curNode.children[el]

            if (curChar) {
                curNode = curChar
            } else {
                const newNode = new TrieNode(curChar)
                curNode.children[el] = newNode;
                curNode = newNode
            }

            if (i === chars.length - 1) {
                curNode.isEndOfWord = true
            }
        }
    }

    // insert(item: string): void {
    //     if (!this.root.children) return
    //     let current = this.root
    //     for (let i = 0; i < current.children.length; i++) { 
    //         for (let j = 0; j < item.length; j++) {
    //             if (current.children[i].value === item.charAt(j)) { 
    //                 current = current.children[i]
    //                 if (j === item.length - 1) {
    //                     current.isEndOfWord === true
    //                 }
    //             }
    //             let newNode = current.children[current.children.length]
    //             newNode.value = current.children[i].value
    //             if (j === item.length - 1) {
    //                 newNode.isEndOfWord === true
    //             }
    //         }
    //     }
    // }

    delete(item: string): void {
        // use recursion

    }
    // find all the words that match a partial string
    // find(partial: string): string[] {

    //     let current = this.root

    //     if (!this.root.children) return []

    //     for (let i = 0; i < current.children.length; i++) { // look at each of root's children
    //         for (let j = 0; j < partial.length; j++) { // look at letter in partial
    //             if (current.children[i].value === partial.charAt(j)) { // if they match
    //                 current = this.root.children[i] // set current to the matching child
    //             }
    //         }
    //     }

    //     console.log(partial)
    //     let string = ["hi", "sebastian"]
    //     return string
    // }
    // }

    const getAllWords() {

    }

    find(partial: string): string[] {

        const chars = partial.split("")
        const matches = []

        let curNode = this.root
        for (let i = 0; i < chars.length; i++) {
            const el = chars[i];

            if (curNode.children[el]) {
                curNode = curNode.children[el]
            }

            return [];
        }

        let q: TrieNode[] = []
        while (q.length > 0) {
            if (curNode.isEndOfWord) {
                matches.push(curNode.value)
            }
        }

        return []
    }
}