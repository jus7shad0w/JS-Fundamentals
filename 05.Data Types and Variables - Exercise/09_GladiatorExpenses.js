function gladiator(lostFight, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let cost = 0;

    for (let i = 1; i <= lostFight; i++) {

        if (i % 2 === 0) {
            cost += helmPrice;
        }
        if (i % 3 === 0) {
            cost += swordPrice;
        }
        if (i % 6 === 0) {
            cost += shieldPrice;
        }
        if (i % 12 === 0) {
            cost += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${cost.toFixed(2)} aureus`);
}
gladiator(7, 2, 3, 4, 5)
gladiator(23, 12.50, 21.50, 40, 200)