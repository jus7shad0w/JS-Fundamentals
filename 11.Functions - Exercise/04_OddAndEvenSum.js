function oddEven(num) {
    let check = num.toString();
    let oddNum = 0;
    let evenNum = 0;

    for (let i = 0; i < check.length; i++) {
        let digit = Number(check[i]);
        if (digit % 2 == 0) {
            evenNum += digit;
        } else {
            oddNum += digit;
        }
    }
    console.log(`Odd sum = ${oddNum}, Even sum = ${evenNum}`);

}
oddEven(1000435)
oddEven(3495892137259234)