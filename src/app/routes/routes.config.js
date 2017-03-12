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
        .state('article', {
            url: '/article/:articleId',
            templateUrl: '/article/article.tpl.html',
            controller: 'ArticleController',
            controllerAs: '$ctrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/contact/contact.tpl.html',
            controller: 'ContactController',
            controllerAs: '$ctrl'
        })
        .state('submissions', {
            url: '/submissions',
            templateUrl: '/submissions/submissions.tpl.html',
            controller: 'SubmissionsController',
            controllerAs: '$ctrl'
        })
        .state('teaching-resources', {
            url: '/teaching-resources',
            templateUrl: '/teaching-resources/teaching-resources.tpl.html',
            controller: 'TeachingResourcesController',
            controllerAs: '$ctrl'
        })
        .state('papers', {
            url: '/papers',
            templateUrl: '/papers/papers.tpl.html',
            controller: 'PapersController',
            controllerAs: '$ctrl'
        });
    }