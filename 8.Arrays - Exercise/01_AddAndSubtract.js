function subtract(input) {
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        originalSum += num;

        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }
        input[i] = num;
        modifiedSum += num;
    }
    console.log(input);
    console.log(originalSum);
    console.log(modifiedSum);
}
subtract([5, 15, 23, 56, 35])
subtract([-5, 11, 3, 0, 2])