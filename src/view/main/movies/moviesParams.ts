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

export const searchParams = {
    class: [],
    tagName: "input",
    attributes: { type: "text", name: "search", placeholder: "Search titles" },
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




