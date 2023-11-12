function reverseString(input) {
    let reverced = [];
    for (let i = 0; i < input.length; i++) {
        reverced.unshift(input[i]);
    }
    let result = reverced.join('')
    console.log(result);
}
reverseString(`Hello`)
reverseString(`SoftUni`)
reverseString(`1234`)