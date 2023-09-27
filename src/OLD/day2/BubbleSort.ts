export default function bubble_sort(arr: number[]): void {
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = (i + 1); j < (arr.length - 1 - i); j++) { // why isn't it j = i + 1?
            if (arr[i] > arr[j]) { // no, need to compare j and j + 1
                let storedValue = arr[i]
                arr[i] = arr[j]
                arr[j] = storedValue
                console.log(arr)
            }
        }
    }
}