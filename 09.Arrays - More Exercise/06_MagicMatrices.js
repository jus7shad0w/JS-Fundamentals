function magicMatrices(array) {
    let row = array.length;
    let collon = array[0].length;

    let mainArrSum = array[0].reduce((start, end) => start + end, 0);
    for (let i = 0; i < row; i++) {
        let arrSum = array[i].reduce((start, end) => start + end, 0);
        if (arrSum !== mainArrSum) {
            console.log(false);
            return;
        }
    }
    for (let j = 0; j < collon; j++) {
        let collonSum = 0;
        for (let i = 0; i < row; i++) {
            collonSum += array[i][j];
        }
        if (collonSum !== mainArrSum) {
            console.log(false);
            return;
        }
    }
    console.log(true);

}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]])
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]])