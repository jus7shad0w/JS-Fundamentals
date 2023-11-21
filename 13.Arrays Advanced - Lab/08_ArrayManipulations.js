function arrayManipulator(input) {
    let newArr = input.shift().split(' ').map(Number);

    for (let command of input) {
        let [action, num, index] = command.split(' ').map(x => isNaN(x) ? x : Number(x));

        if (action === 'Add') {
            newArr.push(num);
        } else if (action === 'Remove') {
            newArr = newArr.filter(x => x !== num);
        } else if (action === 'RemoveAt') {
            newArr.splice(num, 1);
        } else if (action === 'Insert') {
            newArr.splice(index, 0, num);
        }
    }
    console.log(newArr.join(' '));
}
arrayManipulator(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulator(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);
