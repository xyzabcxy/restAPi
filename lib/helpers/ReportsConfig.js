
 let reporter = require('jasmine-reporters');
 let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
 var DisplayProcessor = require('jasmine-spec-reporter').DisplayProcessor;
 jasmine.getEnv().clearReporters(); //Clear all defaults reports Eg. Jasmine Default Reports



 function TimeProcessor(configuration) {
 }

 function getTime() {
     var now = new Date();
     return now.toISOString().slice(0, 10) +' - '+now.getHours() + ':' +
         now.getMinutes() + ':' +
         now.getSeconds()
 }

 TimeProcessor.prototype = new DisplayProcessor();

 TimeProcessor.prototype.displaySuite = function (suite, log) {
     return getTime() + ' - ' + log;
 };

 TimeProcessor.prototype.displaySuccessfulSpec = function (spec, log) {
     return getTime() + ' - ' + log;
 };

 TimeProcessor.prototype.displayFailedSpec = function (spec, log) {
     return getTime() + ' - ' + log;
 };

 TimeProcessor.prototype.displayPendingSpec = function (spec, log) {
     return getTime() + ' - ' + log;
 };
 let specReporter = new SpecReporter({
     customProcessors: [TimeProcessor],
     displayPending:true
 });

 let junitReporter = new reporter.JUnitXmlReporter({ //Create an instance of JUnit Xml Report object
     consolidateAll: false,
     savePath: 'reports',
     filePrefix: ''
 });

 jasmine.getEnv().addReporter(specReporter);  // Add the spec report to Jasmine environment
 jasmine.getEnv().addReporter(junitReporter);  // Add the junit report to Jasmine environment

 

