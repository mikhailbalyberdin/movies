import styles from './header.module.css'

export const headerParams = {
    class: [styles.header],
    tagName: "header",
    attributes: {},
}

export const containerParams = {
    class: [styles.container],
    tagName: "div",
    attributes: {},
}

// Logo

export const logoParams = {
    class: [styles.logo, styles.button],
    tagName: "button",
    attributes: {},
}

export const outerCircleParams = {
    class: [styles.outer],
    tagName: "span",
    attributes: {},
}

export const innerCircleParams = {
    class: [styles.inner],
    tagName: "span",
    attributes: {},
}

export const logoTextParams = {
    class: "",
    tagName: "span",
    attributes: {},
    text: "CINESCOPE",
}

// Navigation bar

export const navBarParams = {
    class: [styles.navBar],
    tagName: "nav",
    attributes: {},
}


export const anchorParams = {
    class: [styles.button],
    tagName: "button",
    attributes: {},
    text: "",
}



// Header Actions

export const headerActionsParams = {
    class: [styles.actions],
    tagName: "div",
    attributes: {},
}

export const searchButtonParams = {
    class: [styles.button],
    tagName: "button",
    attributes: {},
}

export const searchSVGParams = {
    class: [styles.svg],
    tagName: "svg",
    attributes: {},
    html: '<use href="../../assets/sprite.svg#icon-search"></use>', 
}

export const langButtonParams = {
    class: [styles.button, styles.langButton],
    tagName: "button",
    attributes: {},
}

export const globeContainerParams = {
    class: [styles.svgContainer, styles.globe],
    tagName: "span",
    attributes: {},
}

export const accountContainerParams = {
    class: [styles.svgContainer, styles.account],
    tagName: "span",
    attributes: {},
}

export const searchContainerParams = {
    class: [styles.svgContainer, styles.search],
    tagName: "span",
    attributes: {},
}


// export const langSVGParams = {
//     class: [styles.svg],
//     tagName: "svg",
//     attributes: {},
//     html: '<use href="/sprite.svg#icon-language">',
// }

export const langTextParams = {
    class: "",
    tagName: "span",
    attributes: {},
    text: "EN",
}

export const accountButtonParams = {
    class: [styles.button],
    tagName: "button",
    attributes: {},
}

export const accountSVGParams = {
    class: [styles.svg],
    tagName: "svg",
    attributes: {"viewBox": "0 0 24 24", "fill": "none", "stroke": "black",
        "stroke-width":"1.8",
        "stroke-linecap":"round",
        "stroke-linejoin":"round"},
    html: `<circle cx="11" cy="11" r="7"/>
    <path d="m20 20-4-4"/>`
    // html: '<use href="sprite.svg#icon-account">',
}

