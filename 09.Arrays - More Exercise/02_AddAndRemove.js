function addRemove(arr) {
    let newArr = [];
    let num = 1;

    for (let command of arr) {
        if (command === 'add') {
            newArr.push(num);
        } else if (command === 'remove') {
            if (newArr.length > 0) {
                newArr.pop();
            }
        }
        num++;
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}
addRemove(['add', 'add', 'add', 'add'])
addRemove(['add', 'add', 'remove', 'add', 'add']) 