function lowerOrUpper(letter) {
    let charCode = letter.charCodeAt();
    if (charCode > 64 && charCode < 91) {
        console.log(`upper-case`);
    } else if (charCode > 96 && charCode < 123) {
        console.log(`lower-case`);
    } else {
        console.log(`Not a letter!`);
    }
}
lowerOrUpper('L')
lowerOrUpper('f')
lowerOrUpper('1')