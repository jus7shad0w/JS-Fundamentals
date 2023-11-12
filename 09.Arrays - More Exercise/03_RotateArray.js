function rotateArray(arr) {
    const rotationAmount = parseInt(arr[arr.length - 1]);
    if (isNaN(rotationAmount)) {
        console.log('Invalid rotation amount.');
        return;
    }
    const rotatedArray = arr.slice(0, arr.length - 1);
    for (let i = 0; i < rotationAmount; i++) {
        const lastElement = rotatedArray.pop();
        rotatedArray.unshift(lastElement);
    }
    console.log(rotatedArray.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])