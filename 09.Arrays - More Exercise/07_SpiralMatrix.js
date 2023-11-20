function generateSpiralMatrixAndPrint(rows, cols) {
    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    let top = 0,
        bottom = rows - 1,
        left = 0,
        right = cols - 1;
    let num = 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num;
            num++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num;
            num++;
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num;
                num++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num;
                num++;
            }
            left++;
        }
    }
    for (const row of matrix) {
        console.log(row.join(" "));
    }
}
generateSpiralMatrixAndPrint(5, 5);
generateSpiralMatrixAndPrint(3, 3)
//to be remake again