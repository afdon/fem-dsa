function walk(curr: BinaryNode<number> | null, path: number[]): number[] {

    // base case is when we've gone to a child that doesn't exist.
    if (!curr) {
        return path;
    }

    // recurse:
        // pre
        
        // recurse
        walk(curr.left, path); // walk left
        path.push(curr.value); // visit the Node
        walk(curr.right, path); // walk right

        // post
        return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
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

// export default function in_order_search(head: BinaryNode<number>): number[] {
//     const path: number[] = [];

//     walk(head, path);

//     return path;
// }