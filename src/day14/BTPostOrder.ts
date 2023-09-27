
// post: go left, then right, then visit the node

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {

    // base case is when we've gone to a child that doesn't exist.
    if (!curr) {
        return path;
    }

    // recurse:
        // pre
        
        // recurse
        walk(curr.left, path); // walk left
        walk(curr.right, path); // walk right
        
        // post
        path.push(curr.value); // visit the Node
        return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}