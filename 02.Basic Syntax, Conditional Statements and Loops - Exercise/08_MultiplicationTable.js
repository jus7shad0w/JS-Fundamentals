function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        let print = i * num;
        console.log(`${num} X ${i} = ${print}`);
    }
}
multiplicationTable(5)
multiplicationTable(2)