function nextDay(year, month, day) {
    let newDate = new Date(year, month - 1, day);
    newDate.setDate(newDate.getDate() + 1);
    let curYear = newDate.getFullYear();
    let curMonth = newDate.getMonth() + 1;
    let curDay = newDate.getDate();
    console.log(`${curYear}-${curMonth}-${curDay}`);
}
nextDay(2016, 9, 30)
nextDay(2020, 3, 24)