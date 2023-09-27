

function traverse(current: BinaryNode<number> | any, path: number[]): number[] {
    if (!current) {
        return path
    }

    traverse(current.left, path)
    traverse(current.right, path)

    path.push(current.value)

    return path
}
    

export default function post_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, [])
}
