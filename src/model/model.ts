import type { genreObj } from "../type/type";

export class Model {
    token: string;
    genreList: genreObj[]|null;
    constructor() {
        this.genreList = null;
        this.token = import.meta.env.VITE_TOKEN;
        console.log(this.token);
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
    console.log(this.genreList);
    }
}