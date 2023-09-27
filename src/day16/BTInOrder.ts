
// walk left subtree, visit root, walk right subtree

let walked: number[] = []

function walk(current: BinaryNode<number>, walked: number[]): void {

    console.log('walked', walked)

    // pre: walk left
    if (current.left) {
        walk(current.left, walked)
    }

    // recurse: push current value
    walked.push(current.value)

    // post: walk right
    if (current.right) {
        walk(current.right, walked)
    }

}

export default function in_order_search(head: BinaryNode<number>): number[] {

    // let walked: number[] = [] 

    walk(head, walked)

    return walked
}