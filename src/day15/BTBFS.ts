export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    let route = [] as BinaryNode<number>[]

    route.push(head)

    while (route.length !== 0) {
        let current = route.shift() as BinaryNode<number>

        if (current!.value === needle) return true

        if (current.right) route.push(current.right)
        if (current.left) route.push(current.left)
    }

    return false
}