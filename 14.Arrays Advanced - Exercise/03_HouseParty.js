function houseParty(input) {
    let list = [];
    for (ell of input) {
        let chars = ell.split(' ');
        let name = chars[0];
        if (chars.length < 4) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name)
            }
        } else {
            if (list.includes(name)) {
                let idx = list.indexOf(name);
                list.splice(idx, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(list.join('\n'));
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])