
// sort an array in order
// good for mostly sorted list
// for each number, go through the list. For each number that is greater, 

export default function bubble_sort(arr: number[]): void {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; i++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

}