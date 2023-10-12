function processOddNumber(input) {
    let printArey = [];
    for (let i = 1; i < input.length; i += 2) {
        curNum = input[i];
        printArey.unshift(curNum * 2)

    }
    console.log(printArey.join(' '));
}
processOddNumber([10, 15, 20, 25])
processOddNumber([3, 0, 10, 4, 7, 3])