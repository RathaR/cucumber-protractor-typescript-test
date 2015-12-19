exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
    specs: ["./**/*.feature"],
    // path relative to the current config file
    //frameworkPath: require.resolve('./../node_modules/protractor-cucumber-framework'),
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        format: "summary",
        require: ["features/**/*.ts"],
        compiler: "ts:ts-node/register"
    }
};