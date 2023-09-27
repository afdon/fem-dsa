export default function bs_list(haystack: number[], needle: number): boolean {

    let low = 0
    let high = haystack.length

    while (low < high) {
        const midpoint = Math.floor(((high - low) / 2) + low)

        if (haystack[midpoint] === needle) return true
        else if (haystack[midpoint] > needle) {
            high = midpoint - 1
        } else if (haystack[midpoint] < needle) {
            low = midpoint + 1 
            // actually, in the video he notes either hi or lo have to be inclusive
            // retry this tomorrow
        }
    }
    return false
}

