import LoginPage = require("./LoginPage");

class PageFactory {

    public createLoginPage() {
        return new LoginPage();
    }

    constructor() {
    }
}
export = PageFactory;


