function primeNumber(input) {
    let isPrime = true;
    if (input < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        console.log(isPrime);
    }
}
primeNumber(7)
primeNumber(8)
primeNumber(81)