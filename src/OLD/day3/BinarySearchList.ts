export default function bs_list(haystack: number[], needle: number): boolean {

    console.log("haystack", haystack)
    console.log("needle", needle)

    let low = 0
    let high = haystack.length

    while (low < high) {
        const mid = Math.floor(((high - low) / 2) + low)
        const midValue = haystack[mid]

        console.log(`${low}\t ${mid}\t ${high} \t\t\t ${midValue}`)

        if (midValue === needle) return true
        else if (midValue < needle) {
            low = mid + 1
        } else if (midValue > needle) {
            high = mid - 1
        }
    }
    return false
}