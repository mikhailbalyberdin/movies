import { actionTextParams, genreButtonParams, genreContainerParams, moviesParams, searchParams, subTitleParams, titleContainerParams, titleParams } from "./moviesParams";
import { Creator } from "../../creator";

export class Movies{
    moviesElement: HTMLElement|null
    constructor() {
        this.moviesElement = null;
    }

    build(genres) {
        this.moviesElement = new Creator(moviesParams).getElement();
        this.moviesElement.append(this.buildTitle(), this.buildSearch(), this.buildGenres(genres));
        return this.moviesElement;
    }

    buildTitle() {    
        const titleContainer = new Creator(titleContainerParams).getElement();
        const actionText = new Creator(actionTextParams).getElement();
        const title = new Creator(titleParams).getElement();
        const subtitle = new Creator(subTitleParams).getElement();
        titleContainer.append(actionText, title, subtitle);
        return titleContainer;
}

    buildSearch() {
        const searchTitle = new Creator(searchParams).getElement();
        return searchTitle;
    }

    buildGenres(genres) {
        const genreContainer = new Creator(genreContainerParams).getElement();

        for ( const genre of genres ) {
            const currentGenreParams = {
                ...genreButtonParams,
                attributes: {
                    ...genreButtonParams.attributes,
                    "data-genre": genre.id,
                },
                text: genre.name,
            }
            const genreElement = new Creator(currentGenreParams).getElement();
            genreContainer.append(genreElement);
        }

        return genreContainer;
    }

    selfRemove() {
        this.moviesElement?.remove();
    }
}