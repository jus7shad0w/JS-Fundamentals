function songs(input) {
    let numberOfSongs = Number(input.shift());
    let command = input.pop();
    let printList = [];

    class Song {
        constructor(name, time) {
            this.name = name;
            this.time = time;
        }
    }
    for (let i = 0; i < numberOfSongs; i++) {
        let [curCommand, song, time] = input[i].split("_");
        if (command === "all" ){
            console.log(song);
        }else if (curCommand === command) {
            let songObj = new Song(song, time);
            printList.push(songObj);
        }
    }
    if (command === "all") {
        for (let songObj of printList) {
            console.log(songObj.name);
        }
    } else {
        console.log(printList.map(songObj => songObj.name).join("\n"));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])