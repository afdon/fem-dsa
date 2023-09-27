export default function two_crystal_balls(breaks: boolean[]): number {

    const jumpSize = Math.floor(Math.sqrt(breaks.length))

    let firstBreak = 0

    for (let i = 0; i < breaks.length; i += jumpSize) {
        if (breaks[i]) {
            firstBreak = i
            break
        }
    }

    const lastSafeFloor = firstBreak - jumpSize

    for (let i = 0; i < jumpSize; i++) {
        if (breaks[lastSafeFloor + i]) {
            return lastSafeFloor + i
        }
    }

    return -1
}