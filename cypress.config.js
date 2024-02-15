const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents: async function (on, config) {
        await preprocessor.addCucumberPreprocessorPlugin(on, config);
        on(
            'file:preprocessor',
            webpack({
                webpackOptions: {
                    resolve: { extensions: ['.ts', '.js'] },
                    module: {
                        rules: [
                            {
                                test: /\.feature$/,
                                use: [
                                    {
                                        loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                                        options: config
                                    }
                                ]
                            }
                        ]
                    }
                }
            })
        );
        return config;
    }
  },
});