

export default function linear_fn(haystack: number[], needle: number): boolean {
    let i = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle) {
            return true;
        }
        i++;
    }
    return false;
}
