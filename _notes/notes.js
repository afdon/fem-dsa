function sumFactorial(arr){
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0]
      arr[1] = arr[0] * arr[1]
      arr.shift()
    return sumFactorial(arr) // return vs no return?
  }

  ///

  function sumFactorial(arr){
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0]
    
    let f1
    let f2
    
      for (let i = arr[0]; i > 1; i--) {
        f1 = arr[0] * arr[0] - 1
      }
    
      for (let i = arr[1]; i > 1; i--) {
        f2 = arr[1] * arr[1] - 1
      }
    
      arr[1] = f1 + f2
      arr.shift()
    return sumFactorial(arr) // return vs no return?
  }

  ///

  function sumFactorial(arr){
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0]
    
    let f1
    let f2
    
      for (let i = arr[0]; i > 1; i--) {
        f1 = arr[0] * arr[0] - 1
        console.log(arr)
      }
    
      for (let i = arr[1]; i > 1; i--) {
        f2 = arr[1] * arr[1] - 1
      }
    
      arr[1] = f1 + f2
      arr.shift()
    return sumFactorial(arr) // return vs no return?
  }

  //

  function sumFactorial(arr){
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0]
    
    let f1
    let f2
    
      for (let i = arr[0]; i > 1; i--) {
        f1 = arr[0] * (arr[0] - 1)
        console.log(f1)
      }
    
      for (let i = arr[1]; i > 1; i--) {
        f2 = arr[1] * (arr[1] - 1)
        console.log(f2)
      }
    
      arr[1] = f1 + f2
      arr.shift()
    return sumFactorial(arr) // return vs no return?
  }

  ///

  function sumFactorial(arr){
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0]
    
    let i = arr[0]
    let j = arr[1]
    
      while (i > 1) {
        i = i * (i - 1)
        console.log(`i: ${i} i: ${i}`)
        i--
      }
    
      while (j > 1) {
        j = j * (j - 1)
        console.log(`f2: ${i} j: ${j}`)
        j--
      }
    
      arr[1] = i + j
      arr.shift()
    return sumFactorial(arr) // return vs no return?
  }


//

function sumFactorial(arr){
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr[0]
    
    let a = 1
    let b = 1
      
      for (let i = 2; i <= arr[0]; i++) {
        a = a * i
        console.log(`i ${i} arr[0] ${arr[0]} a ${a}`)
      }
      
      let j = 2
      while (j <= arr[1]) {
        b = b * j
        console.log(`i ${j} arr[1] ${arr[1]} a ${b}`)
        j++
      }
    
      arr[1] = a + b
      arr.shift()
    return sumFactorial(arr) // return vs no return?
  }