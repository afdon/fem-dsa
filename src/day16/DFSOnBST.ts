

export default function dfs(head: BinaryNode<number>, needle: number): boolean {

    if (!head || !needle) return false

    let stack: BinaryNode<number>[] = [head] // set stack to be an array with head inside

    let curNode: BinaryNode<number> | undefined // (why ts error without undefined??)

    while (stack.length > 0) {
        curNode = stack.pop() // pop the head from the end from stack. assign it to curNode
        console.log('curNode value', curNode?.value)
        if (curNode?.value === needle) return true // needle found.
        
        if(curNode?.left) {stack.unshift(curNode.left)}
        if(curNode?.right) {stack.unshift(curNode.right)}
        
    }

    return false

}

// First In, Last Out.
