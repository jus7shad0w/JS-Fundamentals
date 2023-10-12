function negativeOrPositive(input) {
    let newArray = [];
    for (let ell of input) {
        if (ell < 0) {
            newArray.unshift(ell);
        } else {
            newArray.push(ell)
        }
    }
    console.log(newArray.join('\n'));
}
negativeOrPositive(['7', '-2', '8', '9'])
negativeOrPositive(['3', '-2', '0', '-1'])