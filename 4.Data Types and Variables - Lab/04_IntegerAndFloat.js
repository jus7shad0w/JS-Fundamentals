function integerOrFloat(num1, num2, num3) {
    let result = num1 + num2 + num3;
    result % 1 === 0 ? result += ' - Integer' : result += ' - Float';
    console.log(result);
}
integerOrFloat(9, 100, 1.1)
integerOrFloat(100, 200, 303)