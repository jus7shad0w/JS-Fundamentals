function sortArray(input) {
    let newArr = [...input];
    newArr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(newArr.join('\n'));
}
sortArray(['alpha', 'beta', 'gamma'])
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])