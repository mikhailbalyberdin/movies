import { Model } from "../model/model";
import { View } from "../view/view";

export class Controller {
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
                        // call genre request method from model 
                        // give genres for buildMoviesPage(...) to make
                        this.view.clearMain();
                        this.view.buildMoviesPage(["adventure", "criminal", "drama"]);
                    }
                }
            }
        })
    }
}