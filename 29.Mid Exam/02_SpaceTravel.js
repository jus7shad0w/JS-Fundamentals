function spaceTravel(input) {
    let ammunition = input.pop();
    let fuel = input.pop();
    let travel = input[0].split("||");
    for (let i = 0; i < travel.length; i++) {
        cases = travel[i].split(' ');
        let action = cases[0];
        let num = Number(cases[1]);

        if (action === "Titan") {
            console.log("You have reached Titan, all passengers are safe.");
            return;
        } else if (action == "Travel") {
            if (num > fuel) {
                console.log("Mission failed.");
            } else {
                console.log(`The spaceship travelled ${num} light-years.`);
            }
        } else if (action === "Enemy") {
            if (ammunition >= Number(num)) {
                console.log(`An enemy with ${num} armour is defeated.`);
                ammunition -= num;
            } else if (ammunition < Number(num) && fuel > Number(num) * 2) {
                fuel -= Number(num) * 2;
                console.log(`An enemy with ${num} armour is outmaneuvered.`);
            } else {
                console.log("Mission failed.");
                return;
            }
        } else if (action === "Repair") {
            fuel += Number(num);
            ammunition += Number(num) * 2;
            console.log(`Ammunitions added: ${num * 2}.`);
            console.log(`Fuel added: ${num}.`);
        }
    }
}
spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80'])
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100'])
spaceTravel(['Enemy 10||Repair 20||Titan||Enemy 50', '60', '100'])
// let action = travel[i].split(' ');
//  console.log(action[0], action[1])