const { defineConfig } = require("cypress");

module.exports = defineConfig({
  'video': false,
  'viewportWidth': 1200,
  'viewportHeight': 760,
  'defaultCommandTimeout': 30000,
  'chromeWebSecurity': false,
  'retries': 2,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'baseUrl': 'https://ecommerce-playground.lambdatest.io/'
  },
});
