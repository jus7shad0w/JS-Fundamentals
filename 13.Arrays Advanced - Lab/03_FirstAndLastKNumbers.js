function firstAndLAst(input) {
    let count = Number(input.shift())

    console.log(input.slice(0, count).join(' '));
    console.log(input.slice(-count).join(' '));
}
firstAndLAst([2, 7, 8, 9])
firstAndLAst([3, 6, 7, 8, 9])