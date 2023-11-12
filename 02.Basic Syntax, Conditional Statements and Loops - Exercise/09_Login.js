function login(input) {
    const username = input[0];
    const password = username.split('').reverse().join('');

    for (let i = 1; i < input.length; i++) {
        if (input[i] === password) {
            console.log(`User ${username} logged in.`);
            return;
        }

        if (i >= 4) {
            console.log(`User ${username} blocked!`);
            return;
        }

        console.log('Incorrect password. Try again.');
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])
login(['momo', 'omom'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])