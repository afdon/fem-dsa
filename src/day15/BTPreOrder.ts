
function traverse(current: BinaryNode<number> | any, path: number[]): number[] {
    if (!current) {
        return path
    }

    path.push(current.value)

    traverse(current.left, path)
    traverse(current.right, path)

    return path
}

export default function pre_order_search(head: BinaryNode<number>): number[] {

    return traverse(head, [])
}