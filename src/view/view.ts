import type { genreObj } from "../type/type";
import { Header_View } from "./header/header_view";
import { MainView } from "./main/mainView";


export class View {
    app
    header
    main
    
    constructor() {
        this.app = document.querySelector("#app");
        this.header = new Header_View();
        this.main = new MainView();
        this.app.append(this.header.headerElement, this.main.mainElement);
    }

    buildMoviesPage(genres:genreObj[]) {
        this.main.buildMovies(genres); 
    }

    clearMain() {
        this.main.clear();
    }
}