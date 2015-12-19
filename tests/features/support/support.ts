module Cube {
    export interface IStepHandler {
        (pattern:RegExp, handler:(...params:any[])=> webdriver.promise.Promise<any> | void) : any
    }
    export interface ICucumber {
        Given: IStepHandler,
        When: IStepHandler,
        Then: IStepHandler,
    }
}