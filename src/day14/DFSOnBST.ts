
// done!!

// console.log(typeof BinaryNode<number>)

function find(node: BinaryNode<number> | null, value: number): boolean {

    if (!node) return false;

    if (node.value === value) return true;

    if (node.value < value) {
        return find(node.right, value)
    }

    return find(node.left, value)
}


export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return find(head, needle)
}