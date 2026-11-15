import { actionTextParams, genreButtonParams, genreContainerParams, imageContainerParams, movieCardParams, movieListParams, moviesParams, movieTitleParams, realImageContainerParams, realImageParams, searchParams, subTitleParams, titleContainerParams, titleParams } from "./moviesParams";
import { Creator } from "../../creator";


export class Movies{
    moviesElement: HTMLElement|null
    movieList: HTMLElement|null
    constructor() {
        this.moviesElement = null;
        this.movieList = null;
        
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

    buildMovies(results) {
        this. movieList = new Creator(movieListParams).getElement();
        results.forEach(element => {
            const card = new Creator(movieCardParams).getElement();
            
            movieTitleParams.text = element.title;
            const cardTitle = new Creator(movieTitleParams).getElement();

            const currentImageContainerParams = {
                ...imageContainerParams,
                attributes: {src: `https://image.tmdb.org/t/p/w500/${element.poster_path}`}
            }

            const imageContainer = new Creator(currentImageContainerParams).getElement();

        
            const currentRealImageParams = {
                ...realImageParams,
                attributes: {src: `https://image.tmdb.org/t/p/w500/${element.poster_path}`},
            }
            const realIamge = new Creator(currentRealImageParams).getElement();
            const realImageContainer = new Creator(realImageContainerParams).getElement();
            realImageContainer.append(realIamge);

            card.append(imageContainer, realImageContainer, cardTitle);
            this.movieList?.append(card);
        });
        return this.movieList;
    }

    clear() {
        this.movieList?.remove();
    }

    selfRemove() {
        this.moviesElement?.remove();
    }
}