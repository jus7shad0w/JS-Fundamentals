function passwordValidator(input) {
    let isValid = true;
    passLength(input);
    passLetterAndDigit(input);
    passMinDigit(input);

    function passLength(arr) {
        if (arr.length < 6 || arr.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            isValid = false;
        }
    }

    function passLetterAndDigit(arr) {
        for (let i = 0; i < arr.length; i++) {
            let curChar = arr[i];
            if (!(curChar >= `0` && curChar <= `9`) && !(curChar >= `a` && curChar <= `z`) && !(curChar >= `A` && curChar <= `Z`)) {
                console.log("Password must consist only of letters and digits");
                isValid = false;
                return;
            }
        }
    }

    function passMinDigit(arr) {
        let digit = 0;
        for (let i = 0; i < arr.length; i++) {
            curChar = arr[i];
            if (curChar >= '0' && curChar <= '9') {
                digit++;
            }
        }
        if (digit < 2) {
            console.log("Password must have at least 2 digits");
            isValid = false;
        }

    }
    if (isValid) {
        console.log("Password is valid");
    }
}
passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')