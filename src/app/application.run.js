(function() {

angular
    .module('hrrc-app')
    .run(run);

    run.$injector = ['$window', '$rootScope', 'FirebaseService'];

    function run($window, $rootScope, FirebaseService) {
        $rootScope.$on('$stateChangeSuccess', function() {
            $window.scrollTo(0, 0);
        });

        FirebaseService.initAppData($rootScope);

    }

})();