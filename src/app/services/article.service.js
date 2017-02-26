(function() {

    'use strict';

    angular
        .module('hrrc-app.services')
        .factory('ArticleService', ArticleService);

        ArticleService.$inject = ['articles', 'FirebaseService'];

        function ArticleService(articles, FirebaseService) {
            return {
                getArticle: getArticle,
                getAllArticles: getAllArticles,
                syncArticles: syncArticles
            }

            function syncArticles(scope) {
                return FirebaseService.getSyncedScopeObject(scope, 'articles');
            }

            function getArticle(articleId) {
                angular.forEach(articles, function(val, key) {
                    console.log(val, key);
                });
            }

            function getAllArticles() {
                return articles;
            }
        }

})();