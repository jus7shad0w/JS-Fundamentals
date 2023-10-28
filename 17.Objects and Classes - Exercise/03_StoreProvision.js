function store(inStock, order) {
    let storage = {};
    for (let i = 0; i < inStock.length; i += 2) {
        let product = inStock[i];
        let qty = Number(inStock[i + 1]);
        storage[product] = qty;
    }
    for (let k = 0; k < order.length; k += 2) {
        let product = order[k];
        let qty = Number(order[k + 1]);

        if (product in storage) {
            storage[product] += qty;
        } else {
            storage[product] = qty;
        }
    }
    for (let product in storage) {
        console.log(`${product} -> ${storage[product]}`);
    }
}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)
store([
    'Salt', '2', 'Fanta', '4', 'Apple', '14',
    'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7',
        'Tomatoes', '7', 'Bananas', '30'
    ]
)