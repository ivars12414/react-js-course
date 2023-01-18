let numberOfFilms,
    personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

numberOfFilms = +prompt('Сколько фильтом вы уже посмотрели?');
personalMovieDB['count'] = numberOfFilms;

for (let i = 1; i<= numberOfFilms; i++) {
    let movie = prompt('Один из последних фильтом?');
    let rating = prompt('На сколько оцените его?');
    personalMovieDB['movies'][movie] = rating;
}

console.log(personalMovieDB);