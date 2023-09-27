export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    if (!head || !needle) return false

    let q: BinaryNode<number>[] = [head] // set q to be an array with head inside

    let curNode: BinaryNode<number> | undefined // (why ts error without undefined??)

    while (q.length > 0) {
        curNode = q.shift() // shift the head from the queue. assign it to curNode
        console.log('curNode value', curNode?.value)
        if (curNode?.value === needle) return true // needle found.
        
        if(curNode?.left) {q.push(curNode.left)}
        if(curNode?.right) {q.push(curNode.right)}
        
    }

    return false
}