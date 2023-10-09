function loadingBar(percent) {
    let percentBar = percent / 10;
    let bar = "[" + "%".repeat(percentBar) + ".".repeat(10 - percentBar) + "]";


    if (percent == 100) {
        console.log('100% Complete!');
        console.log("[" + "%".repeat(10) + "]");
    } else {
        console.log(`${percent}% ${bar}`);
        console.log("Still loading...");
    }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)