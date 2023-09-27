// find out at which floor of a building the crystal ball will break when dropped

export default function two_crystal_balls(breaks: boolean[]): number {

    let interval = Math.floor(Math.sqrt(breaks.length))
    console.log("interval", interval)

    let firstBreak = 0

    for (let i = 0; i < breaks.length - 1; i += interval) {

        if (breaks[i]) {
            firstBreak = i;
            console.log("firstBreak", firstBreak);
            break;
        }
    }
    
    // if it breaks, search the floors under it within the interval

    for (let i = firstBreak - interval; i < firstBreak; i++) {
        if (breaks[i]) {
            console.log(i);
            return i
        }
    }

    return -1

}