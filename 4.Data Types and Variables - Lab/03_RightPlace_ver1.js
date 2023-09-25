function rightPlave(first, char, second) {
    let result = first.replace(`_`, char);
    let output = result === second ? "Matched" : "Not Matched";
    console.log(output);
}
rightPlave('Str_ng', 'I', 'Strong')
rightPlave('Str_ng', 'i', 'String')
