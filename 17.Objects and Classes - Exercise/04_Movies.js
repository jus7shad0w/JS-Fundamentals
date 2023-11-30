function movies(input) {
    let movies = [];

    for (let item of input) {
        if (item.includes('addMovie')) {
            let movieName = item.split('addMovie ')[1];
            let movie = { name: movieName };
            movies.push(movie);
        } else if (item.includes('directedBy')) {
            let [movieName, director] = item.split(' directedBy ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (item.includes('onDate')) {
            let [movieName, date] = item.split(' onDate ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }
    let validMovies = movies.filter(movie => movie.name && movie.director && movie.date);
    for (let movie of validMovies) {
        console.log(JSON.stringify(movie));
    }
}

movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);
// movies(['addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo']);
