function matchName(input) {
    let pattern = /\b[A-Z][a-z]{1,}[ ][A-Z][a-z]{1,}/gm;
    let names = [];
    while ((validName = pattern.exec(input)) !== null) {
        names.push(validName);
    }
    console.log(names.join(' '));
}
matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");