
// is preorder traversal best?

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    if (a === null && b === null) return true

    if (a === null || b === null) return false

    while (a.left) {
        if (a.left !== b.left) return false
        a.left = a.left.left
    }
    
    while (a.right) {
        if (a.right !== b.right) return false
        a.right = a.right.right
    }

    return false
}
