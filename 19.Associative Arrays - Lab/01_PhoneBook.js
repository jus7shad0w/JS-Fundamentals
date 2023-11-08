function phoneBook(input) {
    let newPhoneBook = {};
    for (let ell of input) {
        let [name, phone] = ell.split(' ');

        newPhoneBook[name] = phone;
    }
    for (let [name, phone] of Object.entries(newPhoneBook))
        console.log(name, `->`, phone);
}
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])
phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344'])