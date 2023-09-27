


function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

// returns the pivot index
function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo

    // walk from the lo to the high, not including the high

    for(let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++; // now at 0th position
            const tmp = arr[i]
            arr[i] = arr[idx]
            arr[idx] = tmp
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1 );
}