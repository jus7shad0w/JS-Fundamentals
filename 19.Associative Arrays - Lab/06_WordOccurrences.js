function count(input) {
    let wordOccurrences = {};

    for (let sentence of input) {
        let words = sentence.split(/\W+/).filter(word => word !== '');

        for (let word of words) {
            word = word.toLowerCase();

            if (wordOccurrences.hasOwnProperty(word)) {
                wordOccurrences[word]++;
            } else {
                wordOccurrences[word] = 1;
            }
        }
    }


    let sortedWords = Object.keys(wordOccurrences).sort((a, b) => wordOccurrences[b] - wordOccurrences[a]);


    for (let word of sortedWords) {
        console.log(`${word} -> ${wordOccurrences[word]} times`);
    }
}
count(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
count(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])
//to be remake again