function calculator(num1, num2, op) {
    let func = {
        'add': (num1, num2) => num1 + num2,
        'subtract': (num1, num2) => num1 - num2,
        'multiply': (num1, num2) => num1 * num2,
        'divide': (num1, num2) => num1 / num2,
    }
    const result = func[op](num1, num2);

    console.log(result);
}

calculator(5, 5, 'multiply')
calculator(40, 8, 'divide')
calculator(12, 19, 'add')
calculator(50, 13, 'subtract')