function smallestNumbers(input) {
    let sort = input.sort((a, b) => {
        return a - b;
    });
    console.log(sort.slice(0, 2).join (' '));
}
smallestNumbers([30, 15, 50, 5])
smallestNumbers([3, 0, 10, 4, 7, 3])