function latinLetter(num) {
    if (num < 1 || num > 26) {
        console.log('Please enter a valid number between 1 and 26.');
        return;
    }

    let ASCIICode = 97;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let letterCombination = String.fromCharCode(ASCIICode + i) +
                    String.fromCharCode(ASCIICode + j) +
                    String.fromCharCode(ASCIICode + k);
                console.log(letterCombination);
            }
        }
    }
}
latinLetter(3)
latinLetter(2)
// to be remake again.....