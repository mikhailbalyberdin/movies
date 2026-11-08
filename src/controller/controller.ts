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
                    }
                }
                const isGenreButton = isElement.getAttribute("data-genre");
                if(isGenreButton) {
                    this.model.getByGenreId(isGenreButton);
                }
            }
        })
    }
}