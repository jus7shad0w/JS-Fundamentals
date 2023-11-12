function getLastDigitName(number) {
    const digitName = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const lastDigit = Math.abs(number) % 10;
    console.log(digitName[lastDigit]);
    return;
}
getLastDigitName(512)
getLastDigitName(1)
getLastDigitName(1643)