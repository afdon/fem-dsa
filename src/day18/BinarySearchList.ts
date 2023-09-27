// searching through an ordered list

export default function bs_list(haystack: number[], needle: number): boolean {
    
    let low = 0
    let high = haystack.length
    
    while (high > low) {
        let midpoint = Math.floor(low + ((high - low) / 2))

        if (haystack[midpoint] === needle) return true

        if (haystack[midpoint] > needle) {
            high = midpoint - 1
        }
        
        if (haystack[midpoint] < needle) {
            low = midpoint + 1
        }
    }

    return false
}
