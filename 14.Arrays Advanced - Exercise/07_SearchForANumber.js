function numberSearch(searchArea, conditions) {
    let count = 0;
    let [copy, del, search] = conditions;
    let newArr = searchArea.splice(0, copy).slice(del);
    for (let num of newArr) {
        if (num == search) {
            count++;
        }
    }
    console.log(`Number ${search} occurs ${count} times.`);
}
numberSearch([5, 2, 3, 4, 1, 6], [5, 2, 3])
numberSearch([7, 1, 5, 8, 2, 7], [3, 1, 5])