function chessBoard(input) {
    let result = '<div class="chessboard">\n';

    for (let i = 0; i < input; i++) {
        result += '<div>\n';
        for (let k = 0; k < input; k++) {
            if ((i + k) % 2 === 0) {
                result += '<span class="black"></span>\n';
            } else {
                result += '<span class="white"></span>\n';
            }
        }
        result += '</div>\n';
    }
    result += '</div>';
    console.log(result);
}
chessBoard(3);
