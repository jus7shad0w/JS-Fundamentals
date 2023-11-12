function magicSum(input, num) {
    let uniqPair = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === num) {
                uniqPair.push([input[i], input[j]])
            }
        }
    }
    for (let nums of uniqPair) {
        console.log(nums[0] + ' ' + nums[1]);
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)