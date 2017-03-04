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
                syncArticlesToScope: syncArticlesToScope
            }

            function syncArticlesToScope(scope) {
                return FirebaseService.getSyncedScopeObject(scope, 'articles', 'articles');
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