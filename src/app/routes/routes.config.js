angular
    .module('hrrc-app.routes')
    .config(config);

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/home/home.tpl.html',
            controller: 'HomeController',
            controllerAs: '$ctrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/about/about.tpl.html',
            controller: 'AboutController',
            controllerAs: '$ctrl'
        })
        .state('teaching-resources', {
            url: '/teaching-resources',
            templateUrl: '/teaching-resources/teaching-resources.tpl.html',
            controller: 'TeachingResourcesController',
            controllerAs: '$ctrl'
        });
    }