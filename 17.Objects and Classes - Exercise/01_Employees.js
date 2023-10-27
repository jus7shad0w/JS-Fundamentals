function employees(input) {
    for (let item of input) {
        let person = { name: item, personalNum: item.length }
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
)