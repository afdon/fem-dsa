let store = 0

function sumFactorial(arr){
  if (arr.length === 0) return store
  if (arr.length === 1 && arr[0] === 1) return store + arr[0]
  
  let a = 1

    for (let i = 2; i <= arr[0]; i++) {
      a = a * i
    }

    store = store + a
    arr.shift()
    return sumFactorial(arr)
}

///

// let store = 0

// function sumFactorial(arr){
//   if (arr.length === 0) {
//     let sum = store
//     store = 0
//     return sum
//   } 
  
//   let a = 1

//   for (let i = 2; i <= arr[0]; i++) {
//     a = a * i
//     console.log(`a ${a}`)
//   }

//   store = store + a
//   console.log(`store is now`, store, `arr is now`, arr)
//   arr.shift()
//   return sumFactorial(arr)
// }