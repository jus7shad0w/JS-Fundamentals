function cone(radius, height) {
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    const volHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    const surfaceArea = Math.PI * radius * (radius + volHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}
cone(3, 5)
cone(3.3, 7.8)