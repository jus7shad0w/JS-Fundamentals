function calendar(num) {
    let year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (num < 1 || num > 12) {
        console.log("Error!");
    } else {
        console.log(year[num - 1]);
    }
}
calendar(2)
calendar(13)