function bugs([fieldSize, initialIndexes, ...commands]) {
    let field = Array.from({ length: fieldSize }, (_, index) => initialIndexes.includes(index.toString()) ? 1 : 0);

    for (let command of commands) {
        let [startIndex, direction, flyLength] = command.split(' ').map(Number);

        if (field[startIndex] !== 1 || startIndex < 0 || startIndex >= field.length) {
            continue;
        }
        field[startIndex] = 0;

        let newPosition = startIndex;

        while (true) {
            newPosition = direction === 'right' ? newPosition + flyLength : newPosition - flyLength;

            if (newPosition < 0 || newPosition >= field.length) {
                break;
            }

            if (field[newPosition] === 0) {
                field[newPosition] = 1;
                break;
            }

            if (flyLength < 0 && newPosition - flyLength < 0) {
                break;
            }
        }
    }

    console.log(field.map(cell => cell.toString()).join(' '));
}
bugs([3, '0 1', '0 right 1', '2 right 1']);
bugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
bugs([5, '3', '3 left 2', '1 left -2']);
//not ready