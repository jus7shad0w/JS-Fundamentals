function decrSubset(nums) {
    let curBig = nums[0];
    let newArr = [];

    for (let i = 0; i <= nums.length; i++) {
        let num = nums[i];
        if (curBig <= num) {
            newArr.push(num);
            curBig = num;
        }
    }
    console.log(newArr.join(" "));
}
decrSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
// decrSubset([1, 2, 3, 4])
// decrSubset([20, 3, 2, 15, 6, 1])