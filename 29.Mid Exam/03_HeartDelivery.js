function hearthDelivery(input) {
    let houses = input.shift().split('@').map(Number);
    let curIdx = 0;

    for (let i = 0; i < input.length; i++) {
        let [command, num] = input[i].split(" ");
        if (command === 'Love!') {
            break;
        }
        num = Number(num);
        curIdx += num;

        while (curIdx >= houses.length) {
            curIdx = 0;
        }

        if (houses[curIdx] === 0) {
            console.log(`Place ${curIdx} already had Valentine's day.`);
        } else {
            houses[curIdx] -= 2;
            if (houses[curIdx] === 0) {
                console.log(`Place ${curIdx} has Valentine's day.`);
            }
        }
    }
    let houseCount = houses.filter(hearts => hearts > 0).length;
    console.log(`Cupid's last position was ${curIdx}.`);

    if (houseCount === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}
// hearthDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
hearthDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);
