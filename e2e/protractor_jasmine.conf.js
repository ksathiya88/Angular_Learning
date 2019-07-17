// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {
  SpecReporter
} = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 30000,
  specs: [
    '../e2e/**/login.spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true', '--no-sandbox']
      // 'args': ['--headless', 'show-fps-counter=true', '--no-sandbox']  // headless
    }
  },
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {}
  },
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));

  },

  // //HTMLReport called once tests are finished
  // onComplete: function () {
  //   var browserName, browserVersion;
  //   var capsPromise = browser.getCapabilities();

  //   capsPromise.then(function (caps) {
  //     browserName = caps.get('browserName');
  //     browserVersion = caps.get('version');

  //     var HTMLReport = require('protractor-html-reporter');

  //     testConfig = {
  //       reportTitle: 'Shield End To End Testing Report',
  //       outputPath: 'testresults/',
  //       screenshotPath: 'screenshots',
  //       testBrowser: browserName,
  //       browserVersion: browserVersion,
  //       modifiedSuiteName: false,
  //       screenshotsOnlyOnFailure: true
  //     };
  //     new HTMLReport().from('e2e/testresults/xmlresults.xml', testConfig);
  //   });
  // }
};
