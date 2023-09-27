const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
]

const myPosition = [42, 69]

dirs.forEach(dir => {
    const newPostion = [
        myPosition[0] + dir[0],
        myPosition[1] + dir[1],
    ]
    console.log(newPostion)
})



let comparePositions = (pos1, pos2) => {
    if (pos1[0] !== pos2[0])  return false
    if (pos1[1] !== pos2[1])  return false
    
    return true
}