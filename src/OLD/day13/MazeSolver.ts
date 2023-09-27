
// differential directions

const dir = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // down
    [0, 1] // up
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {

    // 1. BASE CASE

    // if we're off the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false // = this is NOT where we should be looking.
    }

    // on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false
    }
    // at the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end)
        return true
    }
    // seen it before
    if (seen[curr.y][curr.x]) {
        return false
    }

    // 2. RECURSE
    // i. pre
    // ii. recurse
    // iii. post

    // whenever we visit a spot, add that in the pre condition and remove it in the post condition.

    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i]; // our new current
        if (walk(maze, wall, { // if walk is successful
            x: curr.x + x,
            y: curr.y + y,
        }, end, seen, path)) {
            return true; // stop recursing
        }
    }

    // post
    path.pop();

    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false)); // seen arrays are all false to begin with
    }

    walk(maze, wall, start, end, seen, path);

    return path
}