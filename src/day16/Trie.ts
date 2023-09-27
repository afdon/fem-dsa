class TrieNode {
    public children: { [key: string]: TrieNode }
    public isEndOfWord: boolean
    public value: string

    constructor(v?: string) {
        this.value = v || '';
        this.children = {};
        this.isEndOfWord = false;
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

    // delete2(item: string): void {
    //     // use recursion
    //     // find the word to delete. Follow it to the end.
    //     // delete from the end of the word (isEndOfWord) up, but 
    //     // if you come across another EndOfWord, don't delete that.
    //     // if you come across a branch, don't delete the parent or sibling branch either.
        
    //     const chars = item.split('');

    //     if (!this.root) return

    //     let curNode = this.root
    //     let i = 0

    //     this.deleteChild(curNode, item, i)

    //     let deleted

    //     // for (let i = 0; i < chars.length - 1; i++) {
    //         const el = chars[i];

    //         if (i === chars.length - 2) { // when you get to second to last, delete child
    //             deleted = this.deleteChild(curNode, item, i)
    //             if (deleted) { 
    //                 delete curNode.children[el] // delete the property / reference
    //             }
    //         }

    //         if (curNode.children[el]) { // if curNode.children[el] exists
    //             // let parentNode = curNode
    //             curNode = curNode.children[el] // set curNode to that Trienode
                
    //         } else {
    //             // we didn't find the word in the trie.
    //             console.log("Trie does not contain '`${item}`'.")
    //         }

    //     // }
    // }

    delete(item: string): void {
        if (!this.root) return
        let curNode = this.root

        const chars = item.split('')
        for (let i = 0; i < chars.length - 1; i++) {
            const nextLetter = curNode.children[chars[i]]
            if (nextLetter) {
                curNode = nextLetter
            }
        }
        curNode.isEndOfWord = false
    }

    // delete3(item: string): void {
    //     if (!this.root) return

    //     let curNode = this.root
    //     let i = 0

    //     this.deleteChild(curNode, item, i)
    // }

   

    // deleteChild(curNode: TrieNode, item: string, depth: number): boolean {
    //     let childDeleted = false

    //     const chars = item.split('');
    //     const el = chars[depth];
    //     let lastChar = chars[chars.length - 1]

    //     if (depth === chars.length - 1) {
    //         let leafNode = curNode.children[lastChar]
    //         if (leafNode.isEndOfWord) { leafNode.isEndOfWord = false }
    //         // if (this.hasChildren(leafNode)) return false
    //         // leafNode.value = ''
    //         // childDeleted = true
    //         // if (childDeleted) { delete curNode.children[lastChar] }
    //         // return childDeleted
    //     }

    //     if (childDeleted) {
    //         if (curNode.children[el].isEndOfWord) { return false }
    //         curNode.children[el].value = ''
    //         delete curNode.children[el]
    //         if (this.hasChildren(curNode)) { return false } 
    //         return this.deleteChild(curNode.children[chars[depth + 1]], item, depth + 1)
    //     }

    //     if (curNode.children[el]) {
    //         curNode = curNode.children[el]
    //     } else {
    //         console.log("Trie does not contain '`${item}`'.")
    //     }

    //     return this.deleteChild(curNode, item, depth++)
    // }

    hasChildren(node: TrieNode): boolean {
        return Object.values(node.children).some(element => element.isEndOfWord)
    }

// don't delete the end of the word if it has children
// don't delete chars from another word
// don't delete a node that has more than one children (i.e. branches)

    find(partial: string): string[] {

    const chars = partial.split("")
    const matches = []

    let curNode = this.root
    for (let i = 0; i < chars.length; i++) {
        const el = chars[i];

        if (curNode.children[el]) {
            curNode = curNode.children[el]
        } else {
            return [];
        }
    }

    if (curNode.children)

    return []
}
}