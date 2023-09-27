function walk(curr: BinaryNode<number> | null, path: number[]): number[] {

    // base case is when we've gone to a child that doesn't exist.
    if (!curr) { // why not if no "next"?
        return path;
    }

    // recurse:
        // pre
        path.push(curr.value);

        // recurse
        walk(curr.left, path);
        walk(curr.right, path);

        // post
        return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}




// // ALTERNATIVE

// function walk(curr: BinaryNode<number> | null, path: number[]): void {

//     // base case is when we've gone to a child that doesn't exist.
//     if (!curr) { 
//         return;
//     }

//     // recurse:
//         // pre
//         path.push(curr.value); 

//         // recurse
//         walk(curr.left, path);
//         walk(curr.right, path);

//         // post
// }

// export default function pre_order_search(head: BinaryNode<number>): number[] {
//     const path: number[] = [];

//     walk(head, path);

//     return path;
// }