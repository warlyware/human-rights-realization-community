angular
    .module('hrrc-app.routes')
    .config(config);

    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/human-rights-realization-community/build/home/home.tpl.html',
            controller: 'HomeController',
            controllerAs: '$ctrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/human-rights-realization-community/build/about/about.tpl.html',
            controller: 'AboutController',
            controllerAs: '$ctrl'
        })
        .state('article', {
            url: '/article/:articleId',
            templateUrl: '/human-rights-realization-community/build/article/article.tpl.html',
            controller: 'ArticleController',
            controllerAs: '$ctrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/human-rights-realization-community/build/contact/contact.tpl.html',
            controller: 'ContactController',
            controllerAs: '$ctrl'
        })
        .state('submissions', {
            url: '/submissions',
            templateUrl: '/human-rights-realization-community/build/submissions/submissions.tpl.html',
            controller: 'SubmissionsController',
            controllerAs: '$ctrl'
        })
        .state('teaching-resources', {
            url: '/teaching-resources',
            templateUrl: '/human-rights-realization-community/build/teaching-resources/teaching-resources.tpl.html',
            controller: 'TeachingResourcesController',
            controllerAs: '$ctrl'
        });
    }