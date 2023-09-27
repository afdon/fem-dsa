export default function bs_list(haystack: number[], needle: number): boolean {

    const midpoint = Math.floor(haystack.length / 2)

    if (haystack[midpoint] === needle) { return true }
    else if (haystack[midpoint] > needle) {
        return bs_list(haystack.slice(0, midpoint - 1), needle)
    }
    else if (haystack[midpoint] < needle) {
        return bs_list(haystack.slice(midpoint + 1), needle)
    }
    return false
}