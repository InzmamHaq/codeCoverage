"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
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
        protractor_1.browser.waitForAngularEnabled(false);
        // Set browser window width to 1200 and height to 900px
        protractor_1.browser.driver.manage().window().maximize();
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            protractor_1.browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64');
                }, 'image/png')();
                done();
            });
        });
    },
    params: {
        baseUrl: 'https://auto10.franconnectqa.net/fc/'
    },
    specs: ['./specs/*.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFHbEMsUUFBQSxNQUFNLEdBQVc7SUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsVUFBVTtJQUNyQixZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLHNCQUFzQixFQUFFLE1BQU07UUFDOUIsS0FBSyxFQUFFLGNBQWMsQ0FBQztLQUN2QjtJQUVELHlDQUF5QztJQUN6QyxzRUFBc0U7SUFDdEUsV0FBVyxFQUFFLENBQUM7SUFFZCwwRUFBMEU7SUFDMUUsc0NBQXNDO0lBQ3RDLFNBQVMsRUFBRSxJQUFJO0lBRWYsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNkLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsdURBQXVEO1FBQ3ZELG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRzVDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxjQUFjLENBQUM7WUFDOUMsVUFBVSxFQUFFLGdCQUFnQjtTQUM3QixDQUFDLENBQUMsQ0FBQztRQUVKLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJO1lBQ3ZDLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztnQkFDekMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRTtvQkFDcEMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ2xDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUNsQixJQUFJLEVBQUUsQ0FBQztZQUNULENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLHNDQUFzQztLQUNoRDtJQUNELEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUN2QixlQUFlLEVBQUUsOEJBQThCO0NBQ2hELENBQUMifQ==