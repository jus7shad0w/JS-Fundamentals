function train(input) {
    let wagons = input[0].split(' ').map(Number);
    let capacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let command = input[i].split(' ');

        if (command[0] === "Add") {
            wagons.push(Number(command[1]));
        } else if (command.length < 2) {
            let passengers = Number(command[0]);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengers <= capacity) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])