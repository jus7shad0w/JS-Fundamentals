function library(input) {
    let shelf = input.shift().split("&");
    for (let i = 0; i < input.length; i++) {
        let [command, book, newBook] = input[i].split(" | ");
        if (command === "Done") {
            break;
        } else if (command === "Add Book" && !shelf.includes(book)) {
            shelf.unshift(book);
        } else if (command === "Take Book" && shelf.includes(book)) {
            let index = shelf.indexOf(book);
            shelf.splice(index, 1);
        } else if (command === 'Swap Book' || shelf.includes(book) && shelf.includes(newBook)) {
            let index1 = shelf.indexOf(newBook);
            let index2 = shelf.indexOf(book);
            [shelf[index1], shelf[index2]] = [shelf[index2], shelf[index1]];
        } else if (command === "Insert Book" && !shelf.includes(book)) {
            let index = shelf.indexOf(book);
            shelf.splice(index, 0);
            shelf.push(book);
        } else if (command == "Check Book") {
            let index = parseInt(book);
            if (index >= 0 && index < shelf.length) {
                console.log(shelf[index]);
            }
        }
    }
    shelf = shelf.filter(book => book !== '');
    console.log(shelf.join(', '));
}
// library(["Don Quixote&The Great Gatsby&Moby Dick", "Add Book | Ulysses", "Take Book | Don Quixote", "Insert Book | Alice's Adventures in Wonderland", "Done"])
library(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger", "Add Book | Catch-22", "Swap Books | Anna Karenina | Catch-22", "Take Book | David Copperfield", "Done"])
// library(["War and Peace&Hamlet&Ulysses&MadameBovary", "Check Book | 2", "Swap Books | Don Quixote | Ulysses", "Done"])
// library(['War and Peace&Hamlet&Ulysses&Madame Bovary', 'Check Book | 2 ', 'Swap Books | Don Quixote | Ulysses', 'Done'])