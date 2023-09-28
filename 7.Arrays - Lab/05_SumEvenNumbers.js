function sumEven(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let number = parseFloat(input[i]);
        if (number % 2 == 0) {
            sum += number;
        }
    }
    console.log(sum);
}
// sumEven(['1', '2', '3', '4', '5', '6'])
// sumEven(['3', '5', '7', '9'])
sumEven(['2', '4', '6', '8', '10'])