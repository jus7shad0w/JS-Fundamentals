function spice(input) {
    let yield = input;
    let days = 0;
    let totalSpice = 0;

    while (yield >= 100) {
        totalSpice += yield;
        yield -= 10;
        let workerConsume = Math.min(totalSpice, 26);
        totalSpice -= workerConsume;
        if (totalSpice <= workerConsume) {
            totalSpice = 0;
        }
        days++;
    }
    const remainingSpice = Math.max(totalSpice, 0);
    totalSpice -= remainingSpice >= 26 ? 26 : remainingSpice;

    console.log(days);
    console.log(totalSpice);
}
spice(111)
spice(450)
spice(26)