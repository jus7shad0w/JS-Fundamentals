function meetings(input) {
    let meetingList = {};
    for (let part of input) {
        let [day, name] = part.split(' ');
        if (Object.keys(meetingList).includes(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingList[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let [day, name] of Object.entries(meetingList)) {
        console.log(day, `->`, name);
    }
}
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])
meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George'])