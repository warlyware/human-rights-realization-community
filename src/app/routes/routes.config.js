angular
    .module('hrrc-app.routes')
    .config(config);

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/home/home.tpl.html',
            controller: 'HomeController',
            controllerAs: '$ctrl'
        });
    }