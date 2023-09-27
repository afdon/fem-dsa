let preordered: number[] = []

export default function pre_order_search(head: BinaryNode<number>): number[] {
    traverse(head)
    return preordered
}

function traverse(current: BinaryNode<number>): void {
    if (!current) return 

    preordered.push(current.value)

    if (current.left) {
        traverse(current.left)
    }

    if (current.right) {
        traverse(current.right)
    }

}

