const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
]

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    let path: Point[] = [start]

    if (start === end) return path

    let current = start

    path = goNext(maze, current, path)

    // console.log("path", path)
    return path
}

const goNext = (maze: string[], current: Point, path: Point[]): Point[] => {
    
    let next: Point
    let currentPosition: number[] = [current.x, current.y]
    let adjacentPositions: number[][] = [...dirs]

    adjacentPositions.map(dir => {
        const newPosition = [
            currentPosition[0] + dir[0],
            currentPosition[1] + dir[1],
        ]
        
        let isWall = checkWall(maze, newPosition)
        let isOffMap = checkOffMap(maze, newPosition)
        let hasVisited = comparePositions(currentPosition, newPosition)

        if (!isWall || !isOffMap || !hasVisited) {
            let [a, b] = newPosition
            next = { x: a, y: b }
            path.push(next)
        }

        goNext(maze, next, path)
        return path
    })
    return path
}

// checks

let checkWall = (maze: string[], pos: number[]): boolean => {
    let [x, y] = pos

    console.log("x", x)
    console.log("y", y)
    
    if (maze[y].charAt(x) === "x") return true
    
    return false
}

let checkOffMap = (maze: string[], pos: number[]): boolean => {
    let [x, y] = pos
    
    if (x > maze[0].length || x < 0) return true

    if (y > maze.length - 1 || y < 0) return true

    return false
}

let comparePositions = (pos1: number[], pos2: number[]): boolean => {
    if (pos1[0] !== pos2[0]) return false
    if (pos1[1] !== pos2[1]) return false
    return true
}

// let getAdjacents = (myPosition: number[]) => dirs.map(dir => {
    //     const newPosition = [
        //         myPosition[0] + dir[0],
        //         myPosition[1] + dir[1],
        //     ]
        // })
        
        
        // dirs.forEach(dir => {
            //     const newPostion = [
                //         myPosition[0] + dir[0],
                //         myPosition[1] + dir[1],
                //     ]
                // })
                
                // let comparePositions = (pos1: [], pos2: []) => {
                    //     if (pos1[0] !== pos2[0]) return false
                    //     if (pos1[1] !== pos2[1]) return false
                    //     return true
                    // }