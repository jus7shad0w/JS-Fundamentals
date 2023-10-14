function sorting(input) {
    let sortedList = input.sort((a, b) => a - b);
    let printList = [];
    while (sortedList.length > 0) {
        if (sortedList.length === 1) {
            printList.push(sortedList.pop());
        } else {
            let biggest = sortedList.pop();
            let smallest = sortedList.shift();
            printList.push(biggest, smallest)
        }
    }
    console.log(printList.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])