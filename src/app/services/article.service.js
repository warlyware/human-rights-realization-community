(function() {

    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('ArticleService', ArticleService);

        ArticleService.$inject = ['$http', 'ApiService'];

        function ArticleService($http, ApiService) {
            return {
                getArticles: getArticles,
            }

            function getArticles() {
                return ApiService.getPosts();
            }
        }

})();