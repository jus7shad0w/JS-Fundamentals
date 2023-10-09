function perfectNum(num) {
    let curNum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            curNum += i;
        }
    }
    if (curNum == num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNum(6)
perfectNum(28)
perfectNum(1236498)