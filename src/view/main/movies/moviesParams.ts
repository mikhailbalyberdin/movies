import styles from "./movies.module.css";

// Title

export const moviesParams = {
    class: [],
    tagName: "section",
    attributes: {},
}

export const titleContainerParams = {
    class: [],
    tagName: "div",
    attributes: {},
}

export const actionTextParams = {
    class: [],
    tagName: "span",
    attributes: {},
    text: "EXPLORE THE ARCHIVE",
}

export const titleParams = {
    class: [],
    tagName: "h1",
    attributes: {},
    text: "Movies",
}

export const subTitleParams = {
    class: [],
    tagName: "p",
    attributes: {},
    text: "Browse remarkable stories from every era, mood, and corner of cinema",
}

// Input - search titles

export const formParams = {
    class: [],
    tagName: "form",
    attributes: {},
} 

export const searchParams = {
    class: [],
    tagName: "input",
    attributes: { type: "text", name: "search", placeholder: "Search titles" },
}

export const submitButtonParams = {
    class: [],
    tagName: "input",
    attributes: {type: "submit"},
}

// Genres - array of buttons

export const genreContainerParams = {
    class: [styles.genreContainer],
    tagName: "div",
    attributes: {},
}

export const genreButtonParams = {
    class: [styles.genre],
    tagName: "button",
    attributes: {},
}

// Cards of movies - ul

export const movieListParams = {
    class: [styles.movieList],
    tagName: "ul",
    attributes: {},
}

export const movieCardParams = {
    class: [styles.movieCard],
    tagName: "article",
    attributes: {},
}

export const imageContainerParams = {
    class: [styles.imageContainer],
    tagName: "img",
    attributes: {},
}

export const realImageParams = {
    class: [styles.realImage],
    tagName: "div",
    attributes: {},
}

export const movieTitleParams = {
    class: [styles.cardTitle],
    tagName: "h2",
    attributes: {},
    text: "",
}

export const realImageContainerParams = {
    class: [styles.realImageContainer],
    tagName: "div",
    attributes: {},
}

export const titleRateContainerParams = {
    class: [styles.titleRate],
    tagName: "div",
}

export const rateContainerParams = {
    class: [styles.rateStar],
    tagName: "div",
}

export const rateParams = {
    class: [styles.rate],
    tagName: "h3",
}

export const starParams = {
    class: [styles.star],
    tagName: "div",
}









