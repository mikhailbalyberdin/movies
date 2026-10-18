export class Model {
    constructor() {
        this.token = import.meta.env.VITE_TOKEN
        console.log(this.token);
    }
}