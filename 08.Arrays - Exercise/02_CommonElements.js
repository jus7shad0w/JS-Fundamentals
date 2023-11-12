function commmonElements(input1, input2) {
    for (let ell of input1) {

        if (input2.includes(ell)) {
            console.log(ell);

        }
    }
}
commmonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
commmonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])