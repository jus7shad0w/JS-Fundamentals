function wall(input) {

    let concretePrice = 195 * 1900;
    let steps = 0;
    for (let num of input) {
        steps+=num;
    }
    let calculate = concretePrice * steps;
    console.log(calculate);
}
wall([17])
wall([17, 22, 17, 19, 17])

//not ready