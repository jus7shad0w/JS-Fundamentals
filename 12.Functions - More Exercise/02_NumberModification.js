function numModification(input) {
    function calculateDigitAverage(num) {
        const digits = Array.from(String(num), Number);
        const sum = digits.reduce((acc, digit) => acc + digit, 0);
        return sum / digits.length;
    }

    while (calculateDigitAverage(input) <= 5) {
        input = input * 10 + 9;
    }
    console.log(input);
}
numModification(101);
numModification(5835);
