function repeatString(str, count) {

    let newArr = '';

    for (let i = 0; i < count; i++) {
        newArr += str;
    }

    console.log(newArr);
}
repeatString("abc", 3)
repeatString("String", 2)