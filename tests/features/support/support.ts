  ///<reference path="../../typings/tsd.d.ts"/>

     interface IStepHandler {
        (pattern:RegExp, handler:(...params:any[])=> webdriver.promise.Promise<any> | void) : any
    }
    interface ICucumber {
        Given: IStepHandler,
        When: IStepHandler,
        Then: IStepHandler,
    }
export  = ICucumber;