export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    if (a === null && b === null) return true

    if (a === null || b === null) return false

        let checkNode = (a.value === b.value)
        let recurseLeft = compare(a.left, b.left)
        let recurseRight = compare(a.right, b.right)
    
    if (checkNode && recurseLeft && recurseRight) return true

    return false

}