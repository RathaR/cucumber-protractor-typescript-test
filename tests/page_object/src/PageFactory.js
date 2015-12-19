var LoginPage = require("./LoginPage");
var PageFactory = (function () {
    function PageFactory() {
    }
    PageFactory.prototype.createLoginPage = function () {
        return new LoginPage();
    };
    return PageFactory;
})();
module.exports = PageFactory;
//# sourceMappingURL=PageFactory.js.map