// function bitcoinMining(input) {
//     const bitcoinPrice = 11949.16;
//     const goldPricePerGram = 67.51;
//     let totalGold = 0;
//     let bitcoinsBought = 0;
//     let dayOfFirstBitcoin = 0;

//     for (let i = 0; i < input.length; i++) {
//         let minedGold = input[i];

//         if ((i + 1) % 3 === 0) {
//             minedGold *= 0.7; // 30% stolen
//         }

//         totalGold += minedGold;

//         while (totalGold >= goldPricePerGram) {
//             totalGold -= goldPricePerGram;
//             bitcoinsBought++;

//             if (bitcoinsBought === 1) {
//                 dayOfFirstBitcoin = i + 1;
//             }
//         }
//     }

//     console.log(`Bought bitcoins: ${bitcoinsBought}`);

//     if (bitcoinsBought > 0) {
//         console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
//     }

//     console.log(`Left money: ${totalGold.toFixed(2)} lv.`);
// }
// bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100])
// bitcoinMining([3124.15, 504.212, 2511.124])
