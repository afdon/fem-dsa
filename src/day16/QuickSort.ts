
// sort each half of the partitioned array
function qs(arr: number[], low: number, high: number): void {

        if (low >= high) return

    // call partition to get the pivotIdx
    let pivotIdx = partition(arr, low, high)
    
    // quicksort the partioned array
    qs(arr, low, pivotIdx - 1)
    qs(arr, pivotIdx + 1, high)

}

// partition the array around the pivot index
function partition(arr: number[], low: number, high: number): number {

    let pivotIdx = low
    // pivot must always be moved to end of array if not already there
    // use start or end by convention for simplicity
    let pivotValue = arr[high]

    for (let i = low; i < high; i++) {

        if (arr[i] < pivotValue) {
            
            let temp = arr[i]
            arr[i] = arr[pivotIdx]
            arr[pivotIdx] = temp

            pivotIdx++
        }
    }

    let temp = arr[high]
    arr[high] = arr[pivotIdx]
    arr[pivotIdx] = temp
    
    return pivotIdx
}

export default function quick_sort(arr: number[]): void {

    qs(arr, 0, arr.length - 1)

}

