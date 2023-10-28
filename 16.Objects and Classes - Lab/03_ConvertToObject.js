function convertToObject(input) {
    let person = JSON.parse(input);
    for (let ell in person) {
        let value = person[ell];
        console.log(`${ell}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')