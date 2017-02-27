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
                syncArticleToScope: syncArticleToScope,
                syncArticlesToScope: syncArticlesToScope
            }

            function syncArticleToScope(scope, article) {
                return FirebaseService.getSyncedScopeObject(scope, article, 'article');
            }

            function syncArticlesToScope(scope) {
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