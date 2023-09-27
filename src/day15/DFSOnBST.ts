export default function dfs(head: BinaryNode<number>, needle: number): boolean {

    let current = head

    if (!current.value) return false

    if (current.value === needle) return true


    if (current.value > needle && current.left) {
         return dfs(current.left, needle)
    }

    if (current.right) {
         return dfs(current.right, needle)
    }

    return false

}