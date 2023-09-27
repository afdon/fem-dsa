// primeagen impementations

export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    // while q is not empty
    // next = q.deque()
    // enqueue(next.L)
    // enqueue(next.R)

    const q = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number>;

        // search

        if (curr.value === needle) {
            return true;
        }

        // keep traversing

        if (curr.left) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right);
        }
    }

    return false;
}


// // alternative

// export default function bfs(head: BinaryNode<number>, needle: number): boolean {

//     const q: (BinaryNode<number> | null)[] = [head];

//     while (q.length) {
//         const curr = q.shift() as BinaryNode<number> | undefined | null;
//         if (!curr) {
//             continue; // ???
//         }

//         // search

//         if (curr.value === needle) {
//             return true;
//         }

//         // keep traversing

//         if (curr.left) {
//             q.push(curr.left);
//         }
//         if (curr.right) {
//             q.push(curr.right);
//         }
//     }

//     return false;
// }

