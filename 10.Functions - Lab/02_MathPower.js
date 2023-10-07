function mathPower(num, raise) {

    let lastNum = 1;

    for (let i = 0; i < raise; i++) {
        lastNum *= num;
    }

    console.log(lastNum);
}
mathPower(2, 8)
mathPower(3, 4)