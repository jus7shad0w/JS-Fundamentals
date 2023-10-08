function characterInRange(char1, char2) {
    let firstChar = char1.charCodeAt(0);
    let lastChar = char2.charCodeAt(0);

    let minChar = Math.min(firstChar, lastChar);
    let maxChar = Math.max(firstChar, lastChar);

    calculateChar(minChar, maxChar)

    function calculateChar(minChar, maxChar) {
        let printLine = '';

        for (let i = minChar + 1; i < maxChar; i++) {
            let result = String.fromCharCode(i);
            printLine += result + ' ';
        }
        console.log(printLine);
    }
}
characterInRange('a', 'd')
characterInRange('#', ':')
characterInRange('C', '#')