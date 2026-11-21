import { actionTextParams, genreButtonParams, genreContainerParams, imageContainerParams, movieCardParams, movieListParams, moviesParams, movieTitleParams, rateContainerParams, rateParams, realImageContainerParams, realImageParams, searchParams, starParams, subTitleParams, titleContainerParams, titleParams, titleRateContainerParams } from "./moviesParams";
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
            
            const titleRateContainer = new Creator(titleRateContainerParams).getElement();
            const rateContainer = new Creator(rateContainerParams).getElement();
            const currentRateParams = {
                ...rateParams,
                text: element.vote_average,
            }
            const rate = new Creator(currentRateParams).getElement();
            const star = new Creator(starParams).getElement();
            movieTitleParams.text = element.title;
            const cardTitle = new Creator(movieTitleParams).getElement();
            rateContainer.append(rate, star);
            titleRateContainer.append(cardTitle, rateContainer);

            const currentImageContainerParams = {
                ...imageContainerParams,
                attributes: {src: `https://image.tmdb.org/t/p/w500/${element.poster_path}`}
            }

            const imageContainer = new Creator(currentImageContainerParams).getElement();

        
            const currentRealImageParams = {
                ...realImageParams,
                // attributes: {src: `https://image.tmdb.org/t/p/w500/${element.poster_path}`},
            }
            const realImage = new Creator(currentRealImageParams).getElement();
            realImage.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${element.poster_path})`;
            const realImageContainer = new Creator(realImageContainerParams).getElement();
            realImageContainer.append(realImage);

            card.append(imageContainer, realImageContainer, titleRateContainer);
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