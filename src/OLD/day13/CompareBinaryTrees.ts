
// primeagen

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    // base cases:

    // structural check
    if (a === null && b === null) {
        return true;
    }

    // structural check
    if (a === null || b === null) {
        return false; // is this only because we already checked for the && case? So if we arrive here, ONLY ONE of a, b is null?
    }

    // value check
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare (a.right, b.right);

}

// // alternative

// export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

//     // base cases:

//     // structural check
//     if (a === null && b === null) {
//         return true;
//     }

//     // value check
//     if (a?.value !== b?.value) {
//         return false;
//     }

//     return compare(a.left, b.left) && compare (a.right, b.right);

// }