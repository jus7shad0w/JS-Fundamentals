function echoType(print) {
    const printType = typeof print;
    if (printType === "string" || printType === "number") {
        console.log(printType);
        console.log(print);
    } else {
        console.log(printType);
        console.log('Parameter is not suitable for printing');
    }
}
echoType("Hello, JavaScript!")
echoType(18)
echoType(null)
