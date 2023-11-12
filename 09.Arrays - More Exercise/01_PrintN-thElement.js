function nthElement(arr) {
    let step = Number(arr.pop());
    let result = [];
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }
    console.log(result.join(" "));
}
nthElement(['5', '20', '31', '4', '20', '2'])
nthElement(['dsa', 'asd', 'test', 'test', '2'])
nthElement(['1', '2', '3', '4', '5', '6'])