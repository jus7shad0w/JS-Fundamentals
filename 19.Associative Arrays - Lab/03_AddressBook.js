function adressBook(input) {
    let newAddressBook = {};
    for (let info of input) {
        let [name, adress] = info.split(':');
        newAddressBook[name] = adress;
    }
    let sortedList = Object.keys(newAddressBook).sort((a, b) => a.localeCompare(b));

    for (let name of sortedList) {
        console.log(`${name} -> ${newAddressBook[name]}`);
    }
}
adressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])
adressBook(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd',
    'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd'])