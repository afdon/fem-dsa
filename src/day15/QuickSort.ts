export default function quick_sort(arr: number[]): void {

    qs(arr, 0, arr.length - 1)
}

function qs(arr: number[], low: number, high: number): void {
    if (low >= high) return
    const pivotIdx = partition(arr, low, high)
    // console.log("pivot index", pivotIdx)
    qs(arr, low, pivotIdx - 1)
    qs(arr, pivotIdx + 1, high)
}

function partition(arr: number[], low: number, high: number): number {
    let pivotValue = arr[high]
    let pivotIdx = low

    for (let i = low; i <= high; i++) {
        if (arr[i] < pivotValue) {
            // swap arr[i] with the element at the pivot index
            let temp = arr[i]
            arr[i] = arr[pivotIdx]
            arr[pivotIdx] = temp
            // increment pivotIdx
            pivotIdx++
        }
    }

    let temp = arr[pivotIdx]
    arr[pivotIdx] = arr[high]
    arr[high] = temp

    return pivotIdx
}