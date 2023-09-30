function equalSum(input) {
    let printNum = -1;

    for (let i = 0; i < input.length; i++) {
        let leftSum = input.slice(0, i).reduce((sum, num) => sum + num, 0);
        let rightSum = input.slice(i + 1).reduce((sum, num) => sum + num, 0);

        if (leftSum === rightSum) {
            printNum = i;
            break;
        }
    }
    if (printNum !== -1) {
        console.log(printNum);
    } else {
        console.log('no');
    }
}
equalSum([1, 2, 3, 3])
equalSum([1, 2])
equalSum([1])
equalSum([1, 2, 3])
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])