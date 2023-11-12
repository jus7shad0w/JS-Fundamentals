function gramophone(band, album, song) {
    let fullRotation = 2.5;
    let time = (album.length * band.length) * song.length / 2;
    let repeat = Math.ceil(time / fullRotation);
    console.log(`The plate was rotated ${repeat} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')
// this need to be write again