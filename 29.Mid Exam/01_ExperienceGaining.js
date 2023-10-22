function experience(input) {
    let unlockExp = input.shift();
    let battleCount = input.shift();
    let expCollected = 0;
    let battles = 0;
    while (battles < battleCount && expCollected < unlockExp) {
        battles++;
        if (battles % 3 === 0) {
            expCollected += input[battles - 1] * 1.15; 
        } else if (battles % 5 === 0) {
            expCollected += input[battles - 1] * 0.9; 
        } else if (battles % 15 === 0) {
            expCollected += input[battles - 1] * 1.05; 
        } else {
            expCollected += input[battles - 1];
        }
    }
    if (expCollected >= unlockExp) {
        console.log(`Player successfully collected his needed experience for ${battles} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(unlockExp - expCollected).toFixed(2)} more needed.`);
    }
}
experience([500, 5, 50, 100, 200, 100, 30])
experience([500, 5, 50, 100, 200, 100, 20])
experience([400, 5, 50, 100, 200, 100, 20])