function arrayManipulator(array, commandLine) {
    for (let ell of commandLine) {
        let elements = ell.split(' ');
        let command = elements[0];
        let index = Number(elements[1]);
        let num = Number(elements[2]);
        switch (command) {
            case `add`:
                array.splice(index, 0, num);
                break;

            case `addMany`:
                elements.shift();
                elements.shift();
                elements = elements.map(Number);
                array.splice(index, 0, ...elements);
                break;

            case `contains`:
                console.log(array.indexOf(index));
                break;

            case `remove`:
                array.splice(index, 1);
                break;

            case `shift`:
                for (let i = 0; i < index; i++) {
                    let shifted = array.shift();
                    array.push(shifted);
                }
                break;

            case `sumPairs`:
                for (let i = 0; i < array.lenght; i += 2) {
                    let pair = (array[i] || 0) + (array[i + 1] || 0)
                    array.push(pair);
                }
            case `print`:
                console.log(`[ ${array.join(', ')} ]`);
                return array;


            default:
                break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])