(function() {

angular
    .module('hrrc-app')
    .run(run);

    config.injector = ['$locationProvider'];
    run.$injector = ['$window', '$rootScope'];

    function run($window, $rootScope) {
        $rootScope.$on('$stateChangeSuccess', function() {
            $window.scrollTo(0, 0);
        });
    }

})();