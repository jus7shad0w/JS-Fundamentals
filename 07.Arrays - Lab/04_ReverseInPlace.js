function reverseInPlace(input) {
    for (let i = 0; i < input.length / 2; i++) {
        let j = input.length - 1 - i;
        let ind = input[i];
        input[i] = input[j];
        input[j] = ind;
    }
    console.log(input.join(' '));

}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
// reverseInPlace(['33', '123', '0', 'dd'])