
let walked: number[] = []

function walk(current: BinaryNode<number>): void {

    // pre: walk left
    if (current.left) {
        walk(current.left)
    }

    // post: walk right
    if (current.right) {
        walk(current.right)
    }

    // recurse: push current value
    walked.push(current.value)

}

export default function post_order_search(head: BinaryNode<number>): number[] {

    walk(head)
    return walked

}
