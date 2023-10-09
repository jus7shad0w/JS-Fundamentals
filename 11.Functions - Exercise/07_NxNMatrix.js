function nxnMatrix(num) {
    for (let row = 1; row <= num; row++) {
        let matrix = '';
        for (let collon = 1; collon <= num; collon++) {
            matrix += `${num}` + ' ';
        }
        console.log(matrix);
    }
}
nxnMatrix(3)
nxnMatrix(7)
nxnMatrix(2)