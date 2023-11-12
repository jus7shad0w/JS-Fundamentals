function sumDigits(num) {
    if (num < 0 || !Number.isInteger(num)) {
        return 'Please enter a positive integer.';
    }

    let sum = 0;
    let numString = num.toString();

    for (let i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }

    return sum;
}
// sumDigits(245678)
// sumDigits(97561)
// sumDigits(543)
//              To be writen aghain.......