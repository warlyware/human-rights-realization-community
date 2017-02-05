(function() {

angular
    .module('hrrc-app')
    .config(config)
    .run(run);

    config.injector = ['$locationProvider'];

    run.$injector = ['$rootScope', '$state', '$mdMedia'];

    function config($locationProvider) {
          $locationProvider.html5Mode(true);
    };

    function run($rootScope, $state, $mdMedia) {
        $rootScope.$state = $state;
        $rootScope.$mdMedia = $mdMedia;
    }

})();