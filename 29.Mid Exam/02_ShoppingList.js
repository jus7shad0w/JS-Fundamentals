function shopingList(input) {
    let products = input.shift().split("!");
    for (let i = 0; i < input.length; i++) {
        let [command, item, newItem] = input[i].split(" ");
        if (command === "Go" && item === "Shopping!") {
            break;
        } else if (command === "Urgent" && !products.includes(item)) {
            products.unshift(item);
        } else if (command === "Unnecessary" && products.includes(item)) {
            let index = products.indexOf(item);
            products.splice(index, 1);
        } else if (command === 'Correct' && products.includes(item)) {
            let index = products.indexOf(item);
            products.splice(index, 1, newItem);
        } else if (command === "Rearrange" && products.includes(item)) {
            let index = products.indexOf(item);
            products.splice(index, 1);
            products.push(item);
        }
    }
    products = products.filter(item => item !== '');
    console.log(products.join(', '));
}
shopingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"])
shopingList(["Milk!Pepper!Salt!Water!Banana!", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])