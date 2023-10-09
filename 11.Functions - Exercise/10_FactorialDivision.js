function factorialDivision(num1, num2) {
    let first = firstFactorial(num1)
    let second = secondFactorial(num2)
    let result = first / second;
    function firstFactorial(num1) {
        let factorial = 1;
        for (i = num1; i > 0; i--) {
            factorial *= i;
        }
        return factorial;
    }
    function secondFactorial(num2) {
        let factorial = 1;
        for (i = num2; i > 0; i--) {
            factorial *= i;
        }
        return factorial;

    }
    console.log(result.toFixed(2));
}
factorialDivision(5, 2)
factorialDivision(6, 2)