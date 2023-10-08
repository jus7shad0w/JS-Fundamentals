function addSubstract(num1, num2, num3) {

    function add() {
        return num1 + num2;
    }
    function substract(sum) {
        return sum - num3;
    }
    let sum = add();
    let diferrence = substract(sum);
    console.log(diferrence);
}
addSubstract(23, 6, 10)
addSubstract(1, 17, 30)
addSubstract(42, 58, 100)