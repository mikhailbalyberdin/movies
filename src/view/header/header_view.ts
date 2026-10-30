import {accountButtonParams, accountContainerParams, accountSVGParams, anchorParams, containerParams, globeContainerParams, headerActionsParams, headerParams, innerCircleParams, langButtonParams, langTextParams, logoParams, logoTextParams, navBarParams, outerCircleParams, searchButtonParams, searchContainerParams, searchSVGParams, } from './header_params.ts';
import {Creator} from '../creator.ts';
export class Header_View {
    constructor () {
        this.buildHeader();
    }

    buildLogo() {
        const logo = new Creator(logoParams).getElement();
        const outerCircle = new Creator(outerCircleParams).getElement();
        const innerCircle = new Creator(innerCircleParams).getElement();
        const logoText = new Creator(logoTextParams).getElement();
        outerCircle.append(innerCircle);
        logo.append(outerCircle, logoText);

        return logo;
    }

    buildNavBar() {
        const anchorArray = ["Home", "Movies", "People", "My List"]
        const navBar = new Creator(navBarParams).getElement();
        // const homeLink = new Creator(linkHomeParams).getElement();
        // const moviesLink = new Creator(linkMoviesParams).getElement();
        // const peopleLink = new Creator(linkPeopleParams).getElement();
        // const myListLink = new Creator(linkMyListParams).getElement();
        // navBar.append(homeLink, moviesLink, peopleLink, myListLink);
        anchorArray.forEach(element => {
        anchorParams.text = element;
            const anchorElement = new Creator(anchorParams).getElement()
            navBar.append(anchorElement)
        });

        return navBar;
    }

    buildHeaderActions() {
        const headerActions = new Creator(headerActionsParams).getElement();

        const searchButton = new Creator(searchButtonParams).getElement();
        const searchSVG = new Creator(searchContainerParams).getElement();
        searchButton.append(searchSVG);

        const langButton = new Creator(langButtonParams).getElement();
        // const langSVG = new Creator(langSVGParams).getElement();
        const langText = new Creator(langTextParams).getElement();
        const globeContainer = new Creator(globeContainerParams).getElement();
        langButton.append(globeContainer, langText);
        // langButton.append(langSVG, langText);

        const accountButton = new Creator(accountButtonParams).getElement();
        const accountSVG = new Creator(accountContainerParams).getElement();
        accountButton.append(accountSVG);

        headerActions.append(searchButton, langButton, accountButton);

        return headerActions;
    }

    buildHeader() {
        this.header = new Creator(headerParams).getElement();
        const container = new Creator(containerParams).getElement();
        container.append(this.buildLogo(), this.buildNavBar(), this.buildHeaderActions());
        this.header.append(container);
        console.log(this.header);
    }
}