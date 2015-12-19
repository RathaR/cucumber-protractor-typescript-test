import chai = require('chai');
import chaiAsPromised = require("chai-as-promised");
import PageFactory = require('../../page_object/src/PageFactory');

chai.use(chaiAsPromised);

class World {
    public expect:any;
    public pageFactory: PageFactory;
    constructor() {
        this.pageFactory = new PageFactory();
        this.expect = chai.expect;
        browser.ignoreSynchronization = true;
    }
}

export = function () {
    this.World = World;
};
