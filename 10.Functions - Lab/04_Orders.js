function order(product, count) {

    price = 0;
    
    switch (product) {
        case "coffee": price = 1.50; break;
        case "water": price = 1.00; break;
        case "coke": price = 1.40; break;
        case "snacks": price = 2.00; break;
        default:
            break;
    }
    let finalPrice = count * price
    console.log(finalPrice.toFixed(2));
}
order("water", 5)
order("coffee", 2)