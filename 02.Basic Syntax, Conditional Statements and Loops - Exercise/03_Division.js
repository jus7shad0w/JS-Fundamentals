function division(num) {
    let divNum = 0;

    if (num % 10 == 0) {
        divNum = 10;
    } else if (num % 7 == 0) {
        divNum = 7;
    } else if (num % 6 == 0) {
        divNum = 6;
    } else if (num % 3 == 0) {
        divNum = 3;
    } else if (num % 2 == 0) {
        divNum = 2;
    } if (divNum != 0) {
        console.log(`The number is divisible by ${divNum}`);
    } else {
        console.log("Not divisible");
    }
}
division(30)
division(15)
division(12)
division(1643)