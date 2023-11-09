function storage(input) {
    let mainStorage = {};
    input.map(item => {
        let [product, count] = item.split(' ');

        if (mainStorage.hasOwnProperty(product)) {
            mainStorage[product] += parseInt(count);
        } else {
            mainStorage[product] = parseInt(count);
        }
    });
    for (let [product, count] of Object.entries(mainStorage)) {
        console.log(product, '->', count);
    }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])
storage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40'])