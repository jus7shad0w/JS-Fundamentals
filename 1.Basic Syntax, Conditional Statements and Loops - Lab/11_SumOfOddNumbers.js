function sumOddNumbers(num) {
    let sum = 0;
    let curNum = 1;

    for (let i = 0; i < num; i++) {
        console.log(curNum);
        sum += curNum;
        curNum += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOddNumbers(5)
sumOddNumbers(3)