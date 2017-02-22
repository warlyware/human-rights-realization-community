module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/sinon/pkg/sinon.js',
        'node_modules/chai/chai.js',
        'node_modules/sinon-chai/lib/sinon-chai.js',
        'http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/ng-describe/dist/ng-describe.js',
        'src/app/application.module.js',
        'src/app/application.config.js',
        'src/app/application.run.js',
        'src/**/*.module.js',
        'src/**/*.config.js',
        'src/**/*.*.js',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity
  })
}
