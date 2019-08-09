export class MovieData {
    title: string;
    rated: string;
    released: Date;
    runtime: string;
    genre: string;
    director: string;
    actors: string;
    plot: string;
    poster: string;
    imdbID: string;

    constructor(movies: any) {
        this.title = movies.Title;
        this.rated = movies.Rated;
        this.released = movies.Released;
        this.runtime = movies.Runtime;
        this.genre = movies.Genre;
        this.director = movies.Director;
        this.actors = movies.Actors;
        this.plot = movies.Plot;
        this.poster = movies.Poster;
        this.imdbID = movies.imdbID;
    }
};