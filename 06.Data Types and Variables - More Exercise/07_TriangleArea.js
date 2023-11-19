function triangle(a, b, c) {
    let result = (a + b + c) / 2;
    let area = Math.sqrt(result * (result - a) * (result - b) * (result - c));
    console.log(area);
}
triangle(2, 3.5, 4)
triangle(3, 5.5, 4)
//to be remake !