function reverseAR(num, numbers) {
    let array = [];
    for (let i = num - 1; i >= 0; i--) {
        array.push(numbers[i]);
    }

    console.log(array.join(' '));

}
reverseAR(3, [10, 20, 30, 40, 50])
// reverse(4, [-1, 20, 99, 5])
// reverse(2, [66, 43, 75, 89, 47])

// to be redone