function snowballDamage(input) {
    let matrix = input.slice(0, -1).map(row => row.split(' ').map(Number));
    let bombCoordinates = input[input.length - 1].split(' ').map(coord => coord.split(',').map(Number));

    let damage = 0;
    let killedBunnies = 0;
    
    function isValid(row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
    }

    for (let bomb of bombCoordinates) {
        let bombRow = bomb[0];
        let bombCol = bomb[1];

        if (isValid(bombRow, bombCol) && matrix[bombRow][bombCol] > 0) {
            let bombValue = matrix[bombRow][bombCol];
            damage += bombValue;
            matrix[bombRow][bombCol] = 0;
            killedBunnies++;

            for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
                for (let colOffset = -1; colOffset <= 1; colOffset++) {
                    let newRow = bombRow + rowOffset;
                    let newCol = bombCol + colOffset;

                    if (isValid(newRow, newCol) && matrix[newRow][newCol] > 0) {
                        matrix[newRow][newCol] -= bombValue;

                        if (matrix[newRow][newCol] <= 0) {
                            killedBunnies++;
                        }
                    }
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] > 0) {
                damage += matrix[row][col];
                killedBunnies++;
            }
        }
    }

    console.log(damage);
    console.log(killedBunnies);
}
snowballDamage([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);
snowballDamage(['10 10 10',
'10 10 10',
'10 10 10','0,0'])
