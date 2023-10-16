function age(num) {
    let answer = "";
    if (num < 0) {
        console.log("out of bounds");
    } else if (num <= 2) {
        answer = "baby";
    } else if (num <= 13) {
        answer = "child";
    } else if (num <= 19) {
        answer = "teenager"
    } else if (num <= 65) {
        answer = "adult"
    } else {
        answer = "elder"
    }
    console.log(answer);
}
age(20)
age(1)
age(100)
age(-1)