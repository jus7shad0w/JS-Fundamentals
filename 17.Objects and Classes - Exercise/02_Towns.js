function towns(input) {
    for (let ell of input) {
        let townInfo = ell.split(' | ');
        let printInfo = {
            town: townInfo[0],
            latitude: parseFloat(townInfo[1]).toFixed(2),
            longitude: parseFloat(townInfo[2]).toFixed(2),
        }
        console.log(printInfo);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])
towns(['Plovdiv | 136.45 | 812.575']
)