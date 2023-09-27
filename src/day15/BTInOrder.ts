


function traverse(current: BinaryNode<number> | any, path: number[]): number[] {
    if (!current) {
        return path
    }

    traverse(current.left, path)
    path.push(current.value)
    traverse(current.right, path)

    return path
}


export default function in_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, [])
}