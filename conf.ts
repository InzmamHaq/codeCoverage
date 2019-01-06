import { Config, browser } from 'protractor';
declare const allure: any;

export let config: Config = {
  allScriptsTimeout: 110000,
  framework: 'jasmine2',
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000,
    print: function () { }
  },

  // Keep max browsers running to 1 because
  // multiple browsers running at once was pausing/failing for no reason
  maxSessions: 1,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  onPrepare: () => {
    browser.waitForAngularEnabled(false);

    // Set browser window width to 1200 and height to 900px
    browser.driver.manage().window().maximize();


    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  },
  params: {
    baseUrl: 'https://auto10.franconnectqa.net/fc/'
  },
  specs: ['./specs/*.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub'
};
