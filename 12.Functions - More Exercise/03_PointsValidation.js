function validateDistances(points) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    function isInteger(value) {
        return Number.isInteger(value);
    }
    const point1 = [points[0], points[1]];
    const point2 = [points[2], points[3]];
    const distance1 = calculateDistance(point1[0], point1[1], 0, 0);
    const distance2 = calculateDistance(point2[0], point2[1], 0, 0);
    const distance3 = calculateDistance(point1[0], point1[1], point2[0], point2[1]);
    const isValid1 = isInteger(distance1);
    const isValid2 = isInteger(distance2);
    const isValid3 = isInteger(distance3);
    console.log(`{${point1[0]}, ${point1[1]}} to {0, 0} is ${isValid1 ? 'valid' : 'invalid'}`);
    console.log(`{${point2[0]}, ${point2[1]}} to {0, 0} is ${isValid2 ? 'valid' : 'invalid'}`);
    console.log(`{${point1[0]}, ${point1[1]}} to {${point2[0]}, ${point2[1]}} is ${isValid3 ? 'valid' : 'invalid'}`);
}
validateDistances([3, 0, 0, 4]);
validateDistances([2, 1, 1, 1]);
//to be remake again
