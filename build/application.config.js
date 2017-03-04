(function() {

angular
    .module('hrrc-app')
    .config(config);

    config.injector = ['$locationProvider'];

    function config($locationProvider) {
        $locationProvider.html5Mode(true);
    };

})();