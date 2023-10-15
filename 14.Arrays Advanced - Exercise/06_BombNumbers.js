function bombNumbers(target, bomb) {
    let bombTime = bomb[0];
    let bombPower = bomb[1];

    while (target.includes(bombTime)) {
        let indx = target.indexOf(bombTime);
        target.splice(Math.max(0, indx - bombPower), bombPower * 2 + 1);

    }
    let remains = 0;
    for (let num of target) {
        remains += num;
    }
    console.log(remains);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])