import type { genreObj } from "../../type/type";
import {Creator} from "../creator";
import { mainParams } from "./mainParams";
import { Movies } from "./movies/movies";

export class MainView {
    mainElement
    movies
    constructor() {
        this.mainElement = new Creator(mainParams).getElement();
        this.movies = new Movies();
    }

    buildMovies(genres: genreObj[]) {
        this.mainElement.append(this.movies.build(genres));
    }

    clear() {
        this.movies.selfRemove();
    }
}