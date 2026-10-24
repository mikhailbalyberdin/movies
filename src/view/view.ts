import { Header_View } from "./header/header_view";

export class View {
    constructor() {
        this.app = document.querySelector("#app");
        this.header = new Header_View();
        this.app.append(this.header.header);
    }
}