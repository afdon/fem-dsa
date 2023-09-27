export default function bubble_sort(arr: number[]): void {
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1 - i); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp // why does this work, since we first rewrote arr[j]?
                console.log(arr)
            }
        }
    }
}