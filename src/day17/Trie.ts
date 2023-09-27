class TrieNode {
    // public children: TrieNode[];

    public children: { [key: string]: TrieNode };
    public value: string;
    public isWord: boolean;

    constructor(v?: string) {
        this.value = v || '';
        this.isWord = false;
        this.children = {};
    }
}

export default class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(item: string): void {
        const chars = item.split('');
        let curNode = this.root;

        for (let i = 0; i < chars.length; i++) {
            const el = chars[i];
            const existingNode = curNode.children[el];

            if (existingNode) {
                curNode = existingNode;
            } else {
                const newNode = new TrieNode(el);
                curNode.children[el] = newNode;
                curNode = newNode;
            }

            if (i === chars.length - 1) {
                curNode.isWord = true;
            }
        }
    }

    delete(item: string): void {
        const chars = item.split('');
        let curNode = this.root;

        for (let i = 0; i < chars.length; i++) {
            const el = chars[i];

            if (curNode.children[el]) {
                curNode = curNode.children[el];
            } else {
                return;
            }
        }

        curNode.isWord = false;
    }

    findCompletions(curNode: TrieNode, partialStr: string, completions: String[]): void {
        if (curNode.isWord) {
            completions.push(partialStr);
        }

        const childNodes = Object.values(curNode.children);
        if (childNodes.length > 0) {
            for (let i = 0; i < childNodes.length; i++) {
                this.findCompletions(childNodes[i], partialStr + childNodes[i].value, completions);
            }
        }
    }

    find(partial: string): string[] {
        const chars = partial.split('');

        let curNode = this.root;
        for (let i = 0; i < chars.length; i++) {
            const el = chars[i];

            if (curNode.children[el]) {
                curNode = curNode.children[el];
            } else {
                return [];
            }
        }

        const completions: string[] = [];
        this.findCompletions(curNode, partial, completions);

        return completions;
    }
}
