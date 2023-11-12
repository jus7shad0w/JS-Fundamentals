function distance(x1, y1, x2, y2) {

    let calculatedX = x2 - x1;
    let calculatedY = y2 - y1;
    let calculatedDistance = calculatedX ** 2 + calculatedY ** 2;
    let distance = Math.sqrt(calculatedDistance);
    console.log(distance);;
}
distance(2, 4, 5, 0);
distance(2.34, 15.66, -13.55, -2.9985);