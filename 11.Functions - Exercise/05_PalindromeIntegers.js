function palindromeInt(input) {
    for (let num of input) {
        result = checkIsPalindrome(num);
        console.log(result);
    }

    function checkIsPalindrome(num) {
        let numStr = String(num);
        let reverced = '';
        for (let i = numStr.length - 1; i >= 0; i--) {
            reverced += numStr[i];
        }
        return numStr == reverced;
    }
}
// palindromeInt([123, 323, 421, 121])
palindromeInt([32, 2, 232, 1010])