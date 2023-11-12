function evenOdd(nums) {
    let even = 0;
    let odd = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            even += nums[i]
        } else {
            odd += nums[i]
        }
    }
    console.log(even - odd);
}
evenOdd([1, 2, 3, 4, 5, 6])
evenOdd([3, 5, 7, 9])
evenOdd([2, 4, 6, 8, 10])