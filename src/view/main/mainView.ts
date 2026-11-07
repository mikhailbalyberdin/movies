import {Creator} from "../creator";
import { mainParams } from "./mainParams";
import { Movies } from "./movies/movies";

export class MainView {
    constructor() {
        this.mainElement = new Creator(mainParams).getElement();
        this.movies = new Movies();
    }

    buildMovies(genres) {
        this.mainElement.append(this.movies.build(genres));
    }

    clear() {
        this.movies.selfRemove();
    }
}