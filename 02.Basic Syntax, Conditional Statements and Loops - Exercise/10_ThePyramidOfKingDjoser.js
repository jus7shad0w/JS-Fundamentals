// function pyramid(base, increment) {
//     let stone = 0;
//     let marble = 0;
//     let lapisLazuli = 0;
//     let gold = 0;
//     let height = 0;

//     while (base > 2) {
//         let currentLayerArea = base * base;
//         let currentLayerPerimeter = 4 * (base - 1);

//         stone += (currentLayerArea - currentLayerPerimeter) * increment;

//         if (height % 5 === 0) {
//             lapisLazuli += currentLayerPerimeter * increment;
//         } else {
//             marble += currentLayerPerimeter * increment;
//         }

//         base -= 2;
//         height += increment;
//     }

//     gold = base * base * increment;

//     console.log(`Stone required: ${Math.ceil(stone)}`);
//     console.log(`Marble required: ${Math.ceil(marble)}`);
//     console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
//     console.log(`Gold required: ${Math.ceil(gold)}`);
//     console.log(`Final pyramid height: ${Math.floor(height)}`);
// }
// pyramid(11, 1);
// pyramid(11, 0.75)
// pyramid(12, 1)
// pyramid(23, 0.5)
