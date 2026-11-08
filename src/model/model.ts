import type { genreObj } from "../type/type";

export class Model {
    token: string;
    genreList: genreObj[]|null;
    movieList
    constructor() {
        this.genreList = null;
        this.token = import.meta.env.VITE_TOKEN;

    }

    async getGenre() {
        const options = {
            method: 'GET',
            headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.token}`,
        }
    };

    const genreData = await (await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)).json();
    this.genreList = await genreData.genres;
    }

    async getByGenreId(genreId: string) {
        const options = {
            method: 'GET',
            headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.token}`,
        }
    };

    const movieData =  await (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`, options)).json();
    // this.movieList = await movieData.genres;
    console.log(movieData);
    }
}
