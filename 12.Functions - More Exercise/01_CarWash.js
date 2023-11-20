function carWash(input) {
    let cleanCar = 0;
    for (ell of input) {
        switch (ell) {
            case 'soap':
                cleanCar += 10;
                break;
            case "water":
                cleanCar += cleanCar * 0.2;
                break;
            case 'vacuum cleaner':
                cleanCar += cleanCar * 0.25;
                break;
            case 'mud':
                cleanCar -= cleanCar * 0.10;
                break;
            default:
                break;
        }
    }
    console.log(`The car is ${cleanCar.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])