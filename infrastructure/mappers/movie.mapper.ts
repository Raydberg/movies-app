import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-response";
import { MovieDBMovieResponse } from "../interfaces/moviedb.-movie.response";

export class MovieMapper {
    static fromTheMovieDBToMovie = (movie: Result | MovieDBMovieResponse): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average
        }
    }
    static fromTheMovieDBToCompleteMovie = (movie: MovieDBMovieResponse): CompleteMovie => {
        return {
            // id: movie.id,
            // title: movie.title,
            // description: movie.overview,
            // releaseDate: new Date(),
            // poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            // backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            ...this.fromTheMovieDBToMovie(movie),
            rating: movie.vote_average,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map(g => g.name),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(c => c.name)

        }
    }
}