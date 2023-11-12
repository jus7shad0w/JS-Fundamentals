function tseamAccount(input) {
    let games = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        if (input[i] === 'Play!') {
            break;
        }

        let [func, game] = input[i].split(' ');

        switch (func) {
            case "Install":
                if (!games.includes(game)) {
                    games.push(game);
                }
                break;
            case "Uninstall":
                games = games.filter(g => g !== game);
                break;
            case "Update":
                if (games.includes(game)) {
                    games = games.filter(g => g !== game);
                    games.push(game);
                }
                break;
            case "Expansion":
                let [gameToUpdate, expansion] = game.split('-');
                let index = games.indexOf(gameToUpdate);
                if (index !== -1) {
                    games.splice(index + 1, 0, `${gameToUpdate}:${expansion}`);
                }
                break;
            default:
                break;
        }
    }
    console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!'])