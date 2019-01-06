import {browser, element,By, by} from "protractor"


let fs = require('fs');

describe('Main page', function (){
    it('should have title of Test Title', function (done) {
        console.log("start")
        browser.driver.get('http://localhost:9001/').then(function(){
            console.log("f step")
            browser.sleep(10000);
            browser.driver.getTitle().then(function(title) {
                console.log("t step")
                expect(title).toBe('Test Title');
                done();
            });
        });
    });
    it('should show extra div when clicking on link', function (done) {
        
        browser.driver.findElement(By.id('clicker')).click();
        browser.driver.findElement(By.id('jQueryAddedDiv')).getText().then(function (div_text){
            expect(div_text).toBe("added through jquery");
                browser.driver.switchTo().defaultContent();
                browser.executeScript("return window.__coverage__;").then(function (obj) {
                    fs.writeFile('coverage/coverage.json', JSON.stringify(obj),function(err){
                        if(err){
                            console.log("error : ",err)
                        }
                    });
                    done();
                });
            });
    });
});
