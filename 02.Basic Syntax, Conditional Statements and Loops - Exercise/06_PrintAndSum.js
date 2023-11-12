function printAndSum(firstNum, lastNum) {
    let printNum = "";
    let sum = 0;
    for (i = firstNum; i <= lastNum; i++) {
        printNum += i + " ";
        sum += i;
    }
    console.log(printNum);
    console.log("Sum:" + " " + sum);
}
printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)