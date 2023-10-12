function lastKNumbers(n, k) {
    const start = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = i - 1; j >= Math.max(0, i - k); j--) {
            sum += start[j];
        }
        start.push(sum);
    }
    console.log(start.join(' '));
}
lastKNumbers(6, 3)
lastKNumbers(8, 2)