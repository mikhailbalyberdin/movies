import {accountButtonParams, accountContainerParams, accountHoverParams, accountSVGParams, anchorParams, containerParams, globeContainerParams, headerActionsParams, headerParams, hoverElementParams, innerCircleParams, langButtonParams, langTextParams, logoParams, logoTextParams, navBarParams, outerCircleParams, searchButtonParams, searchContainerParams, searchSVGParams, textNormalParams, textStrongParams, } from './header_params.ts';
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
        const normalText = new Creator(textNormalParams).getElement();
        const strongText = new Creator(textStrongParams).getElement();
        logoText.append(normalText, strongText);
        outerCircle.append(innerCircle);
        logo.append(outerCircle, logoText);

        return logo;
    }

    buildNavBar() {
        const anchorArray = ["Home", "Movies", "People", "My List"];
        const navBar = new Creator(navBarParams).getElement();
        anchorArray.forEach(element => {
            const currentAnchorParams = {
                ...anchorParams,
                text: element,
            };
            const anchorElement = new Creator(currentAnchorParams).getElement()
            navBar.append(anchorElement);
        });

        return navBar;
    }

    buildHeaderActions() {
        const headerActions = new Creator(headerActionsParams).getElement();

        const searchButton = new Creator(searchButtonParams).getElement();
        const searchSVG = new Creator(searchContainerParams).getElement();
        const searchHover = new Creator(hoverElementParams).getElement()
        searchButton.append(searchSVG);
        searchHover.append(searchButton);

        const langButton = new Creator(langButtonParams).getElement();
        // const langSVG = new Creator(langSVGParams).getElement();
        const langText = new Creator(langTextParams).getElement();
        const globeContainer = new Creator(globeContainerParams).getElement();
        const langHover = new Creator(hoverElementParams).getElement();
        langButton.append(globeContainer, langText);
        langHover.append(langButton);
        
        // langButton.append(langSVG, langText);

        const accountButton = new Creator(accountButtonParams).getElement();
        const accountSVG = new Creator(accountContainerParams).getElement();
        const accountHover = new Creator(accountHoverParams).getElement();
        accountButton.append(accountSVG);
        accountHover.append(accountButton);

        headerActions.append(searchHover, langHover, accountHover);

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