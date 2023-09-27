export default function two_crystal_balls(breaks: boolean[]): number {
    console.log("breaks", breaks)
    
    const jumpAmount = Math.floor(Math.sqrt(breaks.length))

    let firstBreak = 0

    for (let i = jumpAmount; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            firstBreak = i
            break
        }
    }

    for (let i = firstBreak - jumpAmount; i < firstBreak; i ++) {
        if (breaks[i]) return i
    }

    console.log("firstBreak", firstBreak)
    return -1
}

// test("two crystal balls", function () {
//     let idx = Math.floor(Math.random() * 10000);
//     const data = new Array(10000).fill(false);

//     for (let i = idx; i < 10000; ++i) {
//         data[i] = true;
//     }

//     expect(two_crystal_balls(data)).toEqual(idx);
//     expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
// });

