function distinctArr(input) {
    let newArr = [];
    for (char of input) {
        if (!(newArr.includes(char))) {
            newArr.push(char);
        }
    }
    console.log(newArr.join(' '));
}
distinctArr([1, 2, 3, 4])
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArr([20, 8, 12, 13, 4, 4, 8, 5])