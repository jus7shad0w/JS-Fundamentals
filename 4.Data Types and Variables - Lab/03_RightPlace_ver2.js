function rightPlave(first, char, second) {
    let result = first.replace(`_`, char);
    if (result == second) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlave('Str_ng', 'I', 'Strong')
rightPlave('Str_ng', 'i', 'String')