function condenseArray(nums) {
    let condensed = nums.slice();

    while (condensed.length > 1) {
        let currentCondensed = [];
        for (let i = 0; i < condensed.length - 1; i++) {
            currentCondensed.push(condensed[i] + condensed[i + 1]);
        }
        condensed = currentCondensed;
    }

    console.log(condensed[0]);
}

condenseArray([2, 10, 3]);
condenseArray([5, 0, 4, 1, 2]);
condenseArray([1]); 
// to be done again