function foreignLanguage(contry) {
    let language = "";
    switch (contry) {
        case "USA":
        case "England":
            language = "English"
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            language = "Spanish"
            break;
        default:
            language = "unknown"
            break;
    }
    console.log(language);
}
foreignLanguage("USA")
foreignLanguage("Germany")