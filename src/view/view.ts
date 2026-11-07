import { Header_View } from "./header/header_view";
import { MainView } from "./main/mainView";
import { Movies } from "./main/movies/movies";

export class View {
    constructor() {
        this.app = document.querySelector("#app");
        this.header = new Header_View();
        this.main = new MainView();
        this.app.append(this.header.headerElement, this.main.mainElement);
    }

    buildMoviesPage(genres) {
        this.main.buildMovies(genres); 
    }

    clearMain() {
        this.main.clear();
    }
}