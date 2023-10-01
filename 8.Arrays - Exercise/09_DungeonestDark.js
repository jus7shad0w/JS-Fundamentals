function dungeon(rooms) {
    let health = 100;
    let coins = 0;
    let roomArray = rooms[0].split('|');

    for (let i = 0; i < roomArray.length; i++) {
        let [object, curNum] = roomArray[i].split(' ');
        curNum = Number(curNum);

        switch (object) {
            case 'chest':
                coins += curNum
                console.log(`You found ${curNum} coins.`);
                break;
            case 'potion':
                amount = 0;
                health += curNum;

                if (health > 100) {
                    amount = curNum - (health - 100)
                    health = 100;
                } else {
                    amount = curNum;
                }
                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            default: {
                health -= curNum;
                if (health <= 0) {
                    console.log(`You died! Killed by ${object}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                } else {
                    console.log(`You slayed ${object}.`);
                }
            }

        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])