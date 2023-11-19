function biggest(...input) {
    let bigNum = input.sort((a, b) => b - a);
    console.log(bigNum[0]);
}
biggest(-2, 7, 3)
biggest(130, 5, 99)
biggest(43, 43.2, 43.1)
biggest(2, 2, 2)