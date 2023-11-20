function processMatrixAndPrint(input) {
    const matrix = input.map(row => row.split(' ').map(Number));
    function calculateDiagonalSum(type) {
        let sum = 0;
        const length = matrix.length;
        for (let i = 0; i < length; i++) {
            if (type === 'main') {
                sum += matrix[i][i];
            } else if (type === 'anti') {
                sum += matrix[i][length - 1 - i];
            }
        }
        return sum;
    }
    const mainDiagonalSum = calculateDiagonalSum('main');
    const antiDiagonalSum = calculateDiagonalSum('anti');
    if (mainDiagonalSum !== antiDiagonalSum) {
        for (const row of matrix) {
            console.log(row.join(' '));
        }
    } else {
        const diagonalSum = mainDiagonalSum;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i !== j && i !== matrix.length - 1 - j) {
                    matrix[i][j] = diagonalSum;
                }
            }
        }
        for (const row of matrix) {
            console.log(row.join(' '));
        }
    }
}
processMatrixAndPrint(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
processMatrixAndPrint(['1 1 1', '1 1 1', '1 1 0']);
