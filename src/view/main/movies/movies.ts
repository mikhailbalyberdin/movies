import { actionTextParams, moviesParams, searchParams, subTitleParams, titleContainerParams, titleParams } from "./moviesParams";
import { Creator } from "../../creator";

export class Movies{
    moviesElement: HTMLElement|null
    constructor() {
        this.moviesElement = null;
        this.build();
    }

    build() {
        this.moviesElement = new Creator(moviesParams).getElement();
    
        const titleContainer = new Creator(titleContainerParams).getElement();
        const actionText = new Creator(actionTextParams).getElement();
        const title = new Creator(titleParams).getElement();
        const subtitle = new Creator(subTitleParams).getElement();
        titleContainer.append(actionText, title, subtitle);

        const searchTitle = new Creator(searchParams).getElement();

        this.moviesElement.append(titleContainer, searchTitle);
    }
}