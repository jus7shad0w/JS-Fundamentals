function equalArrays(input1, input2) {
    sum = 0;
    let sameNum = true;
    let different = -1;

    for (let i = 0; i < input1.length; i++) {
        if (input1[i] !== input2[i]) {
            sameNum = false;
            different = i;
            break;
        }
        sum += parseInt(input1[i]);
    }
    if (sameNum) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${different} index`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30'])
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
equalArrays(['1'], ['10'])