function maxNumbers(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        let isBiger = true;

        for (let j = i + 1; j < input.length; j++) {
            let testNum = input[j];

            if (testNum >= num) {
                isBiger = false;
                break;
            }
        }
        if (isBiger) {
            newArr.push(num)
        }
    }
    console.log(newArr.join(' '));
}
maxNumbers([1, 4, 3, 2])
maxNumbers([14, 24, 3, 19, 15, 17])
maxNumbers([41, 41, 34, 20])
maxNumbers([27, 19, 42, 2, 13, 45, 48])
//  to be write again....