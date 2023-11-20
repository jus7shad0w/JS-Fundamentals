function generateOrbits([width, height, x, y]) {
    const matrix = Array.from({ length: height }, () => Array(width).fill(0));

    // Set the star position
    matrix[x][y] = 1;

    // Function to update the matrix with orbits
    function updateOrbits(value, startX, startY) {
        let updated = false;
        for (let i = Math.max(0, startX - 1); i <= Math.min(height - 1, startX + 1); i++) {
            for (let j = Math.max(0, startY - 1); j <= Math.min(width - 1, startY + 1); j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][j] = value;
                    updated = true;
                }
            }
        }
        return updated;
    }

    // Set subsequent orbits
    let value = 2;
    while (updateOrbits(value, x, y)) {
        value++;
    }

    // Print the filled matrix
    for (const row of matrix) {
        console.log(row.join(' '));
    }
}
generateOrbits([4, 4, 0, 0]);
generateOrbits([5, 5, 2, 2])
generateOrbits([3, 3, 2, 2])
//not ready