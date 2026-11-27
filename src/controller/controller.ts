import { Model } from "../model/model";
import { View } from "../view/view";

export class Controller {
    model
    view
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.headerListeners();
    }

    headerListeners() {
        this.view.app?.addEventListener("click", async (event) => {
            const isElement = event.target;
            if (isElement) {
                const isAnchorLink = isElement.getAttribute("data-anchor-link");
                if (isAnchorLink) {
                    const anchorData = isElement.dataset.anchorLink;
                    if (anchorData === "Movies") {
                        await this.model.getGenre();
                        this.view.clearMain();
                        this.view.buildMoviesPage(this.model.genreList);
                        this.view.main.movies.form?.addEventListener("submit", async(event) => {
                            event.preventDefault();
                            const searchForm = this.view.main.movies.form;
                            this.view.clearMain();
                            this.view.buildMovieCards(await this.model.getByForm(searchForm));
                            
                        })
                    }
                }
                const isGenreButton = isElement.getAttribute("data-genre");
                if(isGenreButton) {
                    this.view.clearMovieList();
                    this.view.buildMovieCards(await this.model.getByGenreId(isGenreButton));
                    console.log(this.view.main.mainElement);
                }
            }
        })
    }

    formListener(form) {
        form.addEventListener("submit", async (event)=> {
            this.model.getByForm(form);
        })
    }
}