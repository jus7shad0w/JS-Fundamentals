function arrayRotation(inputArray, rotation) {

    for (let i = 1; i <= rotation; i++) {
        let firstNum = inputArray.shift()
        inputArray.push(firstNum)
    }
    console.log(inputArray.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)