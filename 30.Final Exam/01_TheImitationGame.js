function imitationGame(input) {
    let commands = input.split(' ');
    let word = commands.shift();


    for (let ell of commands) {
        let [command, item1, item2] = ell.split('|');

        if (command === "Decode") {
            console.log(`The decrypted message is: ${word}`);
            return;
        } else if (command === "Move") {
            let numberOfLetters = parseInt(item1);
            word = word.substring(numberOfLetters) + word.substring(0, numberOfLetters);
        } else if (command === "Insert") {
            let index = parseInt(item1);
            word = word.slice(0, index) + item2 + word.slice(index);
        } else if (command === "ChangeAll") {
            let regex = new RegExp(item1, 'g');
            word = word.replace(regex, item2);
        }
    }
}
imitationGame('zzHe ChangeAll|z|l Insert|2|o Move|3 Decode');
imitationGame("owyouh Move|2 Move|3 Insert|3|are Insert|9|? Decode")
