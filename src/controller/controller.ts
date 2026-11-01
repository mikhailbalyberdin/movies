import { Model } from "../model/model";
import { View } from "../view/view";

export class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.headerListeners();
    }

    headerListeners() {
        this.view.app?.addEventListener("click", (event) => {
            const isElement = event.target;
            if (isElement) {
                const isAnchorLink = isElement.getAttribute("data-anchor-link");
                if (isAnchorLink) {
                    this.view.buildMoviesPage();
                }
            }
        })
    }
}